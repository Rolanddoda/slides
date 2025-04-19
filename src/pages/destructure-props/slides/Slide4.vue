<script setup lang="ts">
const code1 = `const { foo } = defineProps(['foo'])

// Incorrect: Passes the initial value of foo.
// Vue will issue a warning.
watch(foo, (newValue) => { /* ... */ })`
const code2 = `// Correct: Passes a reactive getter.
watch(() => foo, (newValue) => { /* ... */ })`
const code3 = `useMyComposable(() => foo)`
</script>

<template>
  <div>
    <SlideH2> ⚠️ Caveats ⚠️ </SlideH2>

    <div class="text-gray-600">
      Passing a destructured prop directly into a function like `watch` passes its current *value*,
      not a reactive source:
    </div>
    <SlideCode :code="code1" lang="ts" class="mt-2" />

    <div class="text-gray-600 mt-2">
      To retain reactivity, wrap the destructured prop in a getter function:
    </div>
    <SlideCode :code="code2" lang="ts" class="mt-2" />

    <div class="text-gray-600 mt-2">
      This getter pattern is also recommended when passing destructured props to external functions
      (e.g., composables) that need to track changes:
    </div>
    <SlideCode :code="code3" lang="ts" class="mt-2" />
  </div>
</template>
