<script setup lang="ts">
import SlideHeading from '@/components/SlideHeading.vue'
import SlideDescription from '@/components/SlideDescription.vue'
</script>

<template>
  <div>
    <SlideHeading> ✨ New in Vue: Pause & Resume!</SlideHeading>

    <SlideDescription>
      Now, `watch` and `watchEffect` return an object with more controls:
    </SlideDescription>

    <img src="../images/3.png" alt="Code illustration" />

    <SlideDescription secondary>
      This allows for temporary suspension of the watcher's effects.
    </SlideDescription>
  </div>
</template>
