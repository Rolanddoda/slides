import { defineRoute } from '@/constants/define-route'
import type { SlideRoute } from '@/types/slides'

export default defineRoute({
  path: '/dual-script',
  name: 'dual-script',
  component: () => import('./_Page.vue'),
  meta: {
    title: 'SFC with Dual Script',
    description: 'Learn how to use the dual script pattern in Vue.js Single File Components.',
    image: new URL('./preview.png', import.meta.url).href,
    datetime: new Date('2025-03-10').toISOString(),
  },
}) satisfies SlideRoute
