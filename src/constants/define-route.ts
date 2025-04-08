import type { SlideRoute } from '@/types/slides'
import type { RouteRecordRaw } from 'vue-router'

const routePaths = new Set<string>()

export function defineRoute<RouteConfig extends RouteRecordRaw | SlideRoute>(
  routeConfig: RouteConfig,
): RouteConfig {
  if (routePaths.has(routeConfig.path)) {
    throw new Error(`Route path ${routeConfig.path} already exists`)
  }
  routePaths.add(routeConfig.path)

  return routeConfig
}
