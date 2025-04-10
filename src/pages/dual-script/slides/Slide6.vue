<script setup lang="ts">
import { checkIcon } from '@/constants/icons'

const points = [
  {
    icon: checkIcon,
    title: 'Improved readability',
  },
  {
    icon: checkIcon,
    title: 'Better reusability',
  },
  {
    icon: checkIcon,
    title: 'Cleaner code structure',
  },
]
</script>

<template>
  <div>
    <SlideH2>The Clean Separation</SlideH2>
    <SlideBody1>By combining script and script setup, you get: </SlideBody1>

    <SlidePoints :points="points" />

    <SlideBody1 class="mt-2">
      Your components become more modular, predictable, and easy to maintain.
    </SlideBody1>
  </div>
</template>
