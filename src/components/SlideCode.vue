<script setup lang="ts">
defineProps<{
  title: string
  description: string
  code?: string
  footer?: string
}>()
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-700 mb-4">{{ title }}</h2>
    <p class="text-gray-600 mb-4">{{ description }}</p>

    <slot v-if="$slots['image']" name="image"></slot>

    <pre v-else class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">{{ code }}</pre>
    <p v-if="footer" class="text-gray-600 mt-4">{{ footer }}</p>
  </div>
</template>
