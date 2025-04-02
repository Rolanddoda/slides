<script setup lang="ts">
defineProps<{
  title: string
  useCases: Array<{
    icon: string
    title: string
    description: string
  }>
}>()
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-700 mb-6">{{ title }}</h2>
    <ul class="space-y-4">
      <li v-for="(useCase, index) in useCases" :key="index" class="flex items-start">
        <span class="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" v-html="useCase.icon"></span>
        <div>
          <h3 class="font-medium text-gray-800">{{ useCase.title }}</h3>
          <p class="text-gray-600">{{ useCase.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
