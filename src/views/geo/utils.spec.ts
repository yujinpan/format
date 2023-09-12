import { describe, expect, it } from 'vitest';

import type { DataVJSON } from './utils';

import { datavToGeoJSON } from './utils';

describe('geo/utils', () => {
  it('should datavToGeoJSON', () => {
    expect(2).toBeGreaterThan(1);

    const datavJson: DataVJSON = {
      name: '123',
      payload: {
        type: 'Topology',
        objects: {
          example: {
            type: 'GeometryCollection',
            geometries: [
              {
                type: 'Point',
                properties: {
                  prop0: 'value0',
                },
                coordinates: [102, 0.5],
              },
              {
                type: 'LineString',
                properties: {
                  prop0: 'value0',
                  prop1: 0,
                },
                arcs: [0],
              },
              {
                type: 'Polygon',
                properties: {
                  prop0: 'value0',
                  prop1: {
                    this: 'that',
                  },
                },
                arcs: [[-2]],
              },
            ],
          },
        },
        arcs: [
          [
            [102, 0],
            [103, 1],
            [104, 0],
            [105, 1],
          ],
          [
            [100, 0],
            [101, 0],
            [101, 1],
            [100, 1],
            [100, 0],
          ],
        ],
      },
    };
    const geojson = datavToGeoJSON(datavJson);

    expect(geojson.features.length).toBeGreaterThan(1);
  });
});
