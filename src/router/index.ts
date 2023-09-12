import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '../layout/index.vue';
import dashboard from '@/router/modules/dashboard';
import geo from '@/router/modules/geo';

export const subRoutes = [dashboard, geo];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: subRoutes[0].path,
      children: subRoutes,
    },
    {
      path: '/**',
      redirect: '/',
    },
  ],
});

export default router;
