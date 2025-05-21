import { createRouter, createWebHistory } from 'vue-router'

import { HomePageName } from '~/constants/routes'
import DefaultLayoutLoading from '~/layouts/default-layout/default-layout-loading.vue'

/** @type {import("vue-router").RouteRecordRaw[]} */
const routes = [
  {
    path: '/',
    name: HomePageName,
    component: async () => {
      return await import('~/pages/home-page')
    },
    meta: {
      layout: async () => {
        return await import('~/layouts/default-layout')
      },
      layoutLoading: DefaultLayoutLoading,
    },
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})
