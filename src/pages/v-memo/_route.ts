import { defineRoute } from '@/constants/define-route'
import type { SlideRoute } from '@/types/slides'

export default defineRoute({
  path: '/v-memo',
  name: 'v-memo',
  component: () => import('./_Page.vue'),
  meta: {
    title: 'Vue.js v-memo: Performance Power-Up',
    description: 'Learn how to optimize rendering with the v-memo directive in Vue.js.',
    image: new URL('./preview.png', import.meta.url).href,
    datetime: new Date('2025-04-21').toISOString(),
  },
}) satisfies SlideRoute
