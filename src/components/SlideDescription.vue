<script setup lang="ts">
defineProps<{
  secondary?: boolean
}>()
</script>

<template>
  <p :class="secondary ? 'text-gray-600 mt-4' : 'text-gray-600 mb-4'">
    <slot></slot>
  </p>
</template>
