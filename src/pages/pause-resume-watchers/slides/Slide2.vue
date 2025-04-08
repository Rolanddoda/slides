<script setup lang="ts">
import SlideHeading from '@/components/SlideHeading.vue'
import SlideDescription from '@/components/SlideDescription.vue'
</script>

<template>
  <div>
    <SlideHeading> 🤔 The Old Way: Only `stop()` </SlideHeading>

    <SlideDescription>
      Previously, `watch` and `watchEffect` returned only a `stop` function to permanently end the
      watcher:
    </SlideDescription>

    <img src="../images/2.png" alt="Code illustration" />

    <SlideDescription secondary> Once stopped, it couldn't be restarted. </SlideDescription>
  </div>
</template>
