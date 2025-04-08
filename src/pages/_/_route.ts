import { defineRoute } from '@/constants/define-route'

export default defineRoute({
  path: '/',
  name: '_',
  component: () => import('./_Page.vue'),
})
