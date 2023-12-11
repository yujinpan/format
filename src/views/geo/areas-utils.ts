import JSZip from 'jszip';
import { treeMap } from 'operation-tree-node';

import type { GeoJSONMultiPolygon, GeoJSONPolygon } from 'ol/format/GeoJSON';

import { downloadByBlob } from '@/utils/file';

const AMAP_KEY = 'ffc2ef5a6eb5fc69bf81c7ae0a304009';

export function getAreasTree() {
  return fetch(
    `https://restapi.amap.com/v3/config/district?&subdistrict=3&key=${AMAP_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => {
      return treeMap(res.districts, (node: any) => {
        return {
          code: node.adcode,
          name: node.name,
          level: node.level,
          center: node.center,
          children: node.districts,
        };
      });
    });
}

export function getAreaFeature(code: string) {
  return getAreaGeometry(code).then((res) => ({
    type: 'Feature',
    geometry: res,
    properties: {
      code,
    },
  }));
}

export function getAreaGeometry(code: string) {
  return fetch(
    `https://restapi.amap.com/v3/config/district?&key=${AMAP_KEY}&keywords=${code}&extensions=all`,
  )
    .then((res) => res.json())
    .then((res) => readGeometry(res.districts[0]?.polyline))
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
      return String(e);
    });
}

export function exportSingleFile(codes: string[]) {
  return Promise.all(codes.map(getAreaFeature)).then((res) => {
    const featureCollection = {
      type: 'FeatureCollection',
      features: res,
    };
    const blob = new Blob([JSON.stringify(featureCollection)]);
    downloadByBlob(blob, 'areas.json');
  });
}

export function exportFiles(codes: string[]) {
  const zip = new JSZip();
  const areas = zip.folder('areas');

  return Promise.all(
    codes.map((code) =>
      getAreaFeature(code).then((res) =>
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

function readGeometry(lines: string): GeoJSONPolygon | GeoJSONMultiPolygon {
  const polygons = lines
    .split('|')
    .map((item) => [
      item.split(';').map((item) => item.split(',').map((item) => +item)),
    ]);

  if (polygons.length > 1) {
    return {
      type: 'MultiPolygon',
      coordinates: polygons,
    } as GeoJSONMultiPolygon;
  } else {
    return {
      type: 'Polygon',
      coordinates: polygons[0],
    } as GeoJSONPolygon;
  }
}
