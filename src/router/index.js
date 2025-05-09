import { createRouter, createWebHistory } from 'vue-router'

/** @type {import("vue-router").RouteRecordRaw[]} */
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home-page.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})
