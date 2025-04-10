import { defineRoute } from '@/constants/define-route'
import type { SlideRoute } from '@/types/slides'

export default defineRoute({
  path: '/pause-resume-watchers',
  name: 'pause-resume-watchers',
  component: () => import('./_Page.vue'),
  meta: {
    title: 'Pause and Resume Watchers',
    description: 'Learn how to pause and resume watchers in Vue.js.',
    image: new URL('./preview.png', import.meta.url).href,
    datetime: new Date('2025-04-03').toISOString(),
  },
}) satisfies SlideRoute
