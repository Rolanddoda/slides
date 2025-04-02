<script setup lang="ts">
defineProps<{
  isFirstSlide: boolean
  isLastSlide: boolean
}>()

defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()
</script>

<template>
  <div class="bg-gray-100 p-4 flex justify-between items-center border-t border-gray-200">
    <button
      @click="$emit('prev')"
      :disabled="isFirstSlide"
      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <span class="w-4 h-4 mr-2">←</span>
      Prev
    </button>
    <button
      @click="$emit('next')"
      :disabled="isLastSlide"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
      <span class="w-4 h-4 ml-2">→</span>
    </button>
  </div>
</template>
