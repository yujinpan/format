import JSZip from 'jszip';
import { treeMap } from 'operation-tree-node';

import type {
  GeoJSONFeature,
  GeoJSONFeatureCollection,
  GeoJSONMultiPolygon,
  GeoJSONPolygon,
} from 'ol/format/GeoJSON';

import { downloadByBlob } from '@/utils/file';

const country = 'https://geo.datav.aliyun.com/areas_v3/bound/100000.json';
const province = 'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json';
const city =
  'https://geo.datav.aliyun.com/areas_v3/bound/100000_full_city.json';
const areas =
  'https://raw.githubusercontent.com/modood/Administrative-divisions-of-China/refs/heads/master/dist/areas.json';

const county = (code: string) =>
  `https://raw.githubusercontent.com/Civitasv/DataV_GeoJSON/refs/heads/master/geojson/county/${code}.json`;

const featureMap = {};

export function getAreasTree() {
  return Promise.all([
    fetch(country),
    fetch(province),
    fetch(city),
    fetch(areas),
  ])
    .then((res) =>
      Promise.all(res.map((item) => item.json() as GeoJSONFeatureCollection)),
    )
    .then(([country, province, city, areas]) => {
      const data =
        country.features?.map((item) => {
          featureMap[item.adcode] = { ...item };
          return item.properties || {};
        }) || [];
      areas?.forEach((item) => {
        const parentCode = item.cityCode + '00';
        const parent = city.features?.find(
          (i) => String(i.properties.adcode) === parentCode,
        )?.properties;
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push({
            adcode: Number(item.code),
            name: item.name,
            level: 'area',
          });
        }
      });
      city.features?.forEach((item) => {
        featureMap[item.adcode] = { ...item, children: undefined };
        const find = province.features?.find(
          (i) => i.properties?.adcode === item.properties?.parent?.adcode,
        )?.properties;
        if (find) {
          find.children = find.children || [];
          find.children.push(item.properties);
        }
      });
      province.features?.forEach((item) => {
        featureMap[item.adcode] = { ...item };
        const find = data.find(
          (i) => i.adcode === item.properties?.parent?.adcode,
        );
        if (find) {
          find.children = find.children || [];
          find.children.push(item.properties);
        }
      });
      return data;
    });
}

export function getAreaFeature(code: string) {
  if (featureMap[code]) {
    return Promise.resolve(formatFeature(featureMap[code]));
  } else {
    return fetch(county(code))
      .then((res) => res.json())
      .then((res) => {
        featureMap[code] = res;
        return formatFeature(res);
      })
      .catch(() => undefined);
  }
}

export function exportSingleFile(codes: string[]) {
  return Promise.all(codes.map(getAreaFeature)).then((res) => {
    const featureCollection = {
      type: 'FeatureCollection',
      features: res.filter((item) => !!item),
    };
    const blob = new Blob([JSON.stringify(featureCollection)]);
    downloadByBlob(blob, 'areas.json');
  });
}

export function exportAreaTree(nodes: { adcode; level; name; children }[]) {
  nodes = nodes.filter((node) => node.level === nodes[0]?.level);
  const blob = new Blob([
    JSON.stringify(
      treeMap(nodes, (node) => ({
        code: node.adcode,
        name: node.name,
        children: node.children,
      })),
    ),
  ]);
  downloadByBlob(blob, 'area_tree.json');
}

export function exportFiles(codes: string[]) {
  const zip = new JSZip();
  const areas = zip.folder('areas');

  return Promise.all(
    codes.map((code) =>
      getAreaFeature(code).then(
        (res) =>
          res &&
          areas.file(
            `${code}.json`,
            JSON.stringify({
              type: 'FeatureCollection',
              features: [res],
            }),
          ),
      ),
    ),
  ).then(() => {
    return zip
      .generateAsync({ type: 'blob' })
      .then((res) => downloadByBlob(res, 'areas.zip'));
  });
}

function formatFeature(
  feature: GeoJSONFeature,
): GeoJSONPolygon | GeoJSONMultiPolygon {
  if (feature?.geometry?.type === 'MultiPolygon') {
    if (feature.geometry.coordinates?.length === 1) {
      return {
        type: 'Polygon',
        coordinates: feature.geometry.coordinates[0],
      } as GeoJSONPolygon;
    } else {
      return feature;
    }
  } else {
    return feature;
  }
}
