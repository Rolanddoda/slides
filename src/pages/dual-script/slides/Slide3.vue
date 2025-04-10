<script setup lang="ts">
import { checkIcon, infoIcon } from '@/constants/icons'

const points = [
  {
    icon: infoIcon,
    title: 'Static Declarations',
    description:
      'Use the regular script block for constants, interfaces, or shared code that doesn’t depend on component state.',
  },
  {
    icon: infoIcon,
    title: 'Dynamic Logic',
    description:
      'Use the script setup block for instance-specific logic, reactive properties, and lifecycle hooks.',
  },
  {
    icon: checkIcon,
    title: 'Separation of Concerns',
    description:
      'Keep static declarations separate from dynamic logic to improve readability and maintainability.',
  },
]
</script>

<template>
  <div>
    <SlideH2> Introducing: Dual Script Blocks </SlideH2>

    <SlideBody1> Vue 3 supports two script blocks in a Single File Component: <br /> </SlideBody1>

    <SlidePoints :points="points" />

    <SlideBody1 class="mt-2">Clean code, happy developers! 🧹</SlideBody1>
  </div>
</template>
