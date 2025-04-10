<script setup lang="ts">
import { infoIcon, checkIcon, lockIcon } from '@/constants/icons'

const points = [
  {
    icon: infoIcon,
    title: 'Performance Optimization',
    description:
      'Pause watchers when a component is inactive or hidden (e.g., off-screen, in background tab) to save resources.',
  },
  {
    icon: checkIcon,
    title: 'Complex UI Updates',
    description:
      'Temporarily pause watchers during multi-step updates or animations to prevent intermediate state triggers.',
  },
  {
    icon: lockIcon,
    title: 'Conditional Watching',
    description:
      'Easier to manage watchers that should only run under certain conditions without needing complex conditional logic inside the callback.',
  },
]
</script>

<template>
  <div>
    <SlideH2> 💡 Potential Use Cases</SlideH2>

    <SlidePoints :points="points" />
  </div>
</template>
