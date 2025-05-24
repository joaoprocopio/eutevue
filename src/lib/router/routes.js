import { HomePageName } from '~/constants/routes'

/** @type {import("vue-router").RouteRecordRaw[]} */
export const routes = [
  {
    path: '/',
    name: HomePageName,
    component: () => import('~/pages/home-page'),
    meta: { layout: () => import('~/layouts/default-layout') },
  },
]
