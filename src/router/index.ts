import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const pageRoutes = import.meta.glob<{ default?: RouteRecordRaw }>('../pages/*/_route.ts', {
  eager: true,
})
export const routes: RouteRecordRaw[] = []

for (const pageRoute in pageRoutes) {
  const { default: routeRecord } = pageRoutes[pageRoute]

  routes.push(routeRecord!)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes],
})

export default router
