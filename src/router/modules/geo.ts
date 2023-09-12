export default {
  path: '/geo',
  name: 'geo',
  children: [
    {
      path: '/geo/datav-to-geojson',
      name: 'datav-to-geojson',
      component: () => import('@/views/geo/datav-to-geojson.vue'),
    },
  ],
};
