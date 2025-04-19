<script setup lang="ts">
const code1 = `const props = withDefaults(defineProps<{
  name?: string
}>(), {
  name: 'Hello'
})`
const code2 = `// This loses reactivity!
const { name } = defineProps<{ name?: string }>()`
</script>

<template>
  <div>
    <SlideH2> 🤔 The Challenge (pre 3.5) </SlideH2>

    <div class="text-gray-600">In `script setup`, setting defaults required `withDefaults`:</div>
    <SlideCode :code="code1" lang="ts" class="mt-2" />

    <div class="text-gray-600 mt-2">
      Also, directly destructuring `defineProps` lost reactivity:
    </div>
    <SlideCode :code="code2" lang="ts" class="mt-2" />
  </div>
</template>
