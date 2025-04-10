<script setup lang="ts">
import Slide1 from './slides/Slide1.vue'
import Slide2 from './slides/Slide2.vue'
import Slide3 from './slides/Slide3.vue'
import Slide4 from './slides/Slide4.vue'
import Slide5 from './slides/Slide5.vue'
</script>

<template>
  <SlidePage :total-slides="6">
    <template #default="{ currentSlide }">
      <Slide1 v-if="currentSlide === 1" />
      <Slide2 v-else-if="currentSlide === 2" />
      <Slide3 v-else-if="currentSlide === 3" />
      <Slide4 v-else-if="currentSlide === 4" />
      <Slide5 v-else-if="currentSlide === 5" />
      <AboutSlide v-else-if="currentSlide === 6" />
    </template>

    <template #controls="{ isFirstSlide, isLastSlide, prev, next }">
      <SlideControls
        :isFirstSlide="isFirstSlide"
        :isLastSlide="isLastSlide"
        @prev="prev"
        @next="next"
      />
    </template>
  </SlidePage>
</template>
