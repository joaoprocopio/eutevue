import { createRouter, createWebHistory } from 'vue-router'

import { HomePageName } from '~/constants/routes'
import defaultLayout from '~/layouts/default-layout'

/** @type {import("vue-router").RouteRecordRaw[]} */
const routes = [
  {
    path: '/',
    name: HomePageName,
    component: () => import('~/pages/home-page'),
    meta: {
      // layout: () => import('~/layouts/default-layout'),
      layout: defaultLayout,
    },
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})
