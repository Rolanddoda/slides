<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  image?: string
}>()
</script>

<template>
  <div>
    <h1 class="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">{{ title }}</h1>
    <p class="text-lg md:text-xl text-center text-gray-600">{{ subtitle }}</p>
    <img v-if="image" :src="image" alt="Vue Logo" class="w-20 h-20 mx-auto mt-8 opacity-80" />
  </div>
</template>
