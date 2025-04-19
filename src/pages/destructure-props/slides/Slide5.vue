<script setup lang="ts">
import { checkIcon } from '@/constants/icons'

const points = [
  {
    icon: checkIcon,
    title: 'Cleaner Defaults',
    description: 'No more `withDefaults` needed for simple cases.',
  },
  {
    icon: checkIcon,
    title: 'Reactive Destructuring',
    description: 'Destructured props remain reactive in the template.',
  },
  {
    icon: checkIcon,
    title: 'Getter Pattern',
    description:
      'Use `() => prop` when passing destructured props to watchers or composables to maintain reactivity.',
  },
]
</script>

<template>
  <div>
    <SlideH2>🎉 Summary & Benefits</SlideH2>

    <SlidePoints :points="points" />
  </div>
</template>
