<script setup lang="ts">
defineProps<{
  points: Array<{
    icon: string
    title: string
    description?: string
  }>
}>()
</script>

<template>
  <div>
    <ul class="space-y-4">
      <li v-for="(point, index) in points" :key="index" class="flex items-start">
        <span class="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" v-html="point.icon"></span>
        <div>
          <h3 class="font-medium text-gray-800">{{ point.title }}</h3>
          <p class="text-gray-600">{{ point.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
