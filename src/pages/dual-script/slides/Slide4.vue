<script setup lang="ts">
import { ideaIcon } from '@/constants/icons'

const points = [
  {
    icon: ideaIcon,
    title: 'Normal script block: Runs once in the module scope when the component is imported',
    description:
      'This is ideal for static declarations like constants, enums, types, or utilities shared across instances.',
  },
  {
    icon: ideaIcon,
    title: 'Script setup block: Runs in the instance scope when the component is created',
    description:
      'This is perfect for instance-specific logic, reactive properties, and lifecycle hooks.',
  },
]
</script>

<template>
  <div>
    <SlideH2>Normal Script vs. Script Setup</SlideH2>

    <SlidePoints :points="points" />
  </div>
</template>
