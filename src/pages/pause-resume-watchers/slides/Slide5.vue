<script setup lang="ts">
import SlideHeading from '@/components/SlideHeading.vue'
import SlidePoints from '@/components/SlidePoints.vue'

const infoIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
const checkIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
const lockIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`

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
    <SlideHeading> 💡 Potential Use Cases</SlideHeading>

    <SlidePoints :points="points" />
  </div>
</template>
