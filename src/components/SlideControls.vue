<script setup lang="ts">
defineProps<{
  isFirstSlide: boolean
  isLastSlide: boolean
}>()

defineEmits<{
  (e: 'prev'): void
  (e: 'next'): void
}>()

// Prevent text selection when clicking rapidly
function preventDefault(event: MouseEvent) {
  event.preventDefault()
}
</script>

<template>
  <div class="bg-gray-100 p-4 flex justify-between items-center border-t border-gray-200">
    <button
      @click="$emit('prev')"
      @mousedown="preventDefault"
      :disabled="isFirstSlide"
      class="select-none bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <svg
        class="w-5 h-5 mr-1.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
      Prev
    </button>

    <button
      @click="$emit('next')"
      @mousedown="preventDefault"
      :disabled="isLastSlide"
      class="select-none bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
      <svg
        class="w-5 h-5 ml-1.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
/* Additional prevention for text selection */
button {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
