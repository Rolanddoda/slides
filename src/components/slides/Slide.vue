<script setup lang="ts">
defineProps<{
  active: boolean
  slideId: number
}>()
</script>

<template>
  <div class="slide" :class="{ active }" :data-slide="slideId">
    <slot></slot>
  </div>
</template>

<style scoped>
.slide {
  display: none; /* Hide slides by default */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.slide.active {
  display: block; /* Show active slide */
  opacity: 1;
}
</style>
