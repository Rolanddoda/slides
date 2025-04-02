<script setup lang="ts">
defineProps<{
  title: string
  description: string
  socials: Array<{
    platform: string
    url: string
  }>
}>()
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-700 mb-4 text-center">{{ title }}</h2>
    <p class="text-center text-gray-700 mb-4">{{ description }}</p>

    <p class="text-center mt-6 text-sm">
      Follow me on
      <template v-for="(social, index) in socials" :key="index">
        <a
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 hover:underline"
        >
          {{ social.platform }}
        </a>
        <template v-if="index < socials.length - 1">, </template>
      </template>
      for more content like this!
    </p>
  </div>
</template>
