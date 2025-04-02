<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
  id: number
  title: string
  description: string
  code: string
  footer?: string
}>()

const imageSrc = ref('')

onMounted(async () => {
  try {
    // Dynamic import of the image based on id
    const imageModule = await import(`@/components/slides/code-slide-images/${props.id}.png`)
    imageSrc.value = imageModule.default
  } catch (error) {
    console.error('Failed to load image:', error)
    // Optionally set a fallback image
    imageSrc.value = ''
  }
})
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-700 mb-4">{{ title }}</h2>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <img v-if="imageSrc" :src="imageSrc" alt="Code illustration" />
    <pre v-else class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">{{ code }}</pre>
    <p v-if="footer" class="text-gray-600 mt-4">{{ footer }}</p>
  </div>
</template>
