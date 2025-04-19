<script setup lang="ts">
const code = `const { name = 'Hello' } = defineProps<{ name?: string }>()

console.log(name); // 'name' is reactive`
</script>

<template>
  <div>
    <SlideH2> ✅ The Solution (Vue 3.5+) </SlideH2>

    <div class="text-gray-600">
      You can now destructure `defineProps` directly while providing default values,
      <strong>and reactivity is preserved</strong>!
    </div>

    <SlideCode :code="code" lang="ts" class="mt-2" />

    <div class="text-gray-600 mt-2">This makes declaring props with defaults much cleaner.</div>

    <div class="mt-6">
      <strong>👋 Say goodbye to `withDefaults`!</strong>
    </div>
  </div>
</template>
