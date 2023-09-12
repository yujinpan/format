import { GeoJSON, TopoJSON } from 'ol/format';

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

  const geojson = new GeoJSON();
  const topojson = new TopoJSON();

  const appendFeature = (json: DataVJSON) => {
    try {
      geojsonData.features.push(
        ...geojson.writeFeaturesObject(topojson.readFeatures(json.payload))
          .features,
      );
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }

    Object.values(json.children || {}).map(appendFeature);
  };

  appendFeature(json);

  return geojsonData;
}
