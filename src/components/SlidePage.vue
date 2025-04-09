<script lang="ts" setup>
import { useSlots } from 'vue'
import { useSlides } from '@/composables/use-slides'

const props = defineProps<{
  totalSlides: number
}>()

const { currentSlide, isFirstSlide, isLastSlide, prev, next } = useSlides(props.totalSlides)
</script>

<template>
  <div
    class="bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col items-center justify-center p-4"
  >
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden">
      <div class="p-8 md:p-12 min-h-[450px] flex flex-col justify-center">
        <Transition name="slide-fade" mode="out-in">
          <slot :key="currentSlide" :current-slide></slot>
        </Transition>
      </div>

      <slot name="controls" :is-first-slide :is-last-slide :prev :next></slot>
    </div>

    <slot name="to-delete"></slot>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Make sure parent container has position relative */
.relative {
  position: relative;
  min-height: 450px; /* Set minimum height to prevent layout shifts */
}
</style>
