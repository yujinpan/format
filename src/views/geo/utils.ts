import { GeoJSON, TopoJSON } from 'ol/format';
import { treeFilter, treeMap } from 'operation-tree-node';

import type { GeoJSONFeatureCollection } from 'ol/format/GeoJSON';
import type { TopoJSONTopology } from 'ol/format/TopoJSON';

export type DataVJSON = {
  name: string;
  payload: TopoJSONTopology;
  children?: Record<string, DataVJSON>;
};

export function datavToGeoJSON(json: DataVJSON) {
  const geojsonData: GeoJSONFeatureCollection = {
    type: 'FeatureCollection',
    features: [],
  };

  const appendFeature = (json: DataVJSON) => {
    try {
      geojsonData.features.push(...topojsonToGeoJSON(json.payload).features);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }

    Object.values(json.children || {}).map(appendFeature);
  };

  appendFeature(json);

  return geojsonData;
}

const geojson = new GeoJSON();
const topojson = new TopoJSON();

export function topojsonToGeoJSON(
  topo: TopoJSONTopology,
): GeoJSONFeatureCollection {
  return geojson.writeFeaturesObject(topojson.readFeatures(topo));
}

export enum AreaLevel {
  COUNTRY = 'country',
  PROVINCE = 'province',
  CITY = 'city',
  DISTRICT = 'district',
}

export const AreaLevels = [
  AreaLevel.COUNTRY,
  AreaLevel.PROVINCE,
  AreaLevel.CITY,
  AreaLevel.DISTRICT,
];

export type Properties = {
  adcode: number;
  center: number[];
  centroid: number[];
  level: AreaLevel;
};

export function formatProperties(props: Properties): Properties {
  const { adcode, center, centroid, level } = props;

  return {
    adcode,
    center,
    centroid,
    level,
  } as Properties;
}

export type AreaTreeNode = {
  code: number;
  name: string;
  children: AreaTreeNode[];
  geojson: GeoJSONFeatureCollection;
};

function getLevelIndex(level: AreaLevel) {
  return AreaLevels.indexOf(level);
}

function inLevel(sourceLevel: AreaLevel, targetLevel: AreaLevel) {
  return getLevelIndex(sourceLevel) >= getLevelIndex(targetLevel);
}

export function datavToAreaTree(
  json: DataVJSON,
  level = AreaLevel.DISTRICT,
): AreaTreeNode[] {
  const treeData = treeMap([json], (node) => ({
    ...node,
    children: Object.values(node.children),
  }));

  const result = treeMap(treeData, (node) => {
    const geojson = topojsonToGeoJSON(node.payload).features[0];
    geojson.properties = formatProperties(geojson.properties);

    return {
      code: geojson.properties.adcode,
      name: node.name,
      geojson,
      children: node.children as any,
    } as AreaTreeNode;
  });

  if (level !== AreaLevel.DISTRICT) {
    return treeFilter(result, (node) =>
      inLevel(level, node.geojson.properties.level),
    );
  } else {
    return result;
  }
}
