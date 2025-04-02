<script setup lang="ts">
defineProps<{
  title: string
  description: string
  tags?: string[]
}>()
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-700 mb-6 text-center">{{ title }}</h2>
    <p class="text-gray-600 text-center mb-6">{{ description }}</p>

    <div v-if="tags && tags.length" class="text-center mt-8 text-xs text-gray-500">
      {{ tags.join(' ') }}
    </div>
  </div>
</template>
