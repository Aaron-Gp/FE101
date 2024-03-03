import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/html101/1',
  },
  {
    path: '/html101/:id(\\d+)',
    component: () => import('layouts/MainLayout.vue'),
  },
  {
    path: '/css101/:id(\\d+)',
    component: () => import('layouts/MainLayout.vue'),
  },
  {
    path: '/js101/:id(\\d+)',
    component: () => import('layouts/MainLayout.vue'),
  },
  {
    path: '/ast101/:id(\\d+)',
    component: () => import('layouts/MainLayout.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/404Page.vue'),
  },
];

export default routes;
