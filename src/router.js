import { createRouter, createWebHistory } from 'vue-router'

import { HomePageName } from '~/constants/routes'

/** @type {import("vue-router").RouteRecordRaw[]} */
const routes = [
  {
    path: '/',
    name: HomePageName,
    components: {
      default: () => import('~/pages/home-page.vue'),
      layout: () => import('~/layouts/default-layout.vue'),
    },
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})
