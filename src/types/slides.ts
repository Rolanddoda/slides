import type { RouteRecordRaw } from 'vue-router'

export type SlideRoute = RouteRecordRaw & {
  meta: {
    title: string
    description: string
    image: string
    datetime: string
  }
}
