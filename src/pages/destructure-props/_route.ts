import { defineRoute } from '@/constants/define-route'
import type { SlideRoute } from '@/types/slides'

export default defineRoute({
  path: '/destructure-props',
  name: 'destructure-props',
  component: () => import('./_Page.vue'),
  meta: {
    title: 'Props destructuring',
    description: 'Learn the new props destructuring syntax',
    image: new URL('./preview.png', import.meta.url).href,
    datetime: new Date('2025-04-19').toISOString(),
  },
}) satisfies SlideRoute
