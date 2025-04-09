<script lang="ts" setup>
import { useSlides } from '@/composables/use-slides'
import { ref } from 'vue'

const props = defineProps<{
  totalSlides: number
}>()

const direction = ref('next') // Track navigation direction
const { currentSlide, isFirstSlide, isLastSlide } = useSlides(props.totalSlides)

// Override prev and next to track direction
function prev() {
  if (!isFirstSlide.value) {
    direction.value = 'prev'
    currentSlide.value--
  }
}

function next() {
  if (!isLastSlide.value) {
    direction.value = 'next'
    currentSlide.value++
  }
}
</script>

<template>
  <div
    class="bg-gradient-to-br from-green-50 via-white to-blue-50 flex flex-col items-center justify-center p-4"
  >
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden">
      <div class="p-8 md:p-12 min-h-[450px] flex flex-col justify-center relative">
        <Transition :name="direction === 'prev' ? 'slide-right' : 'slide-left'" mode="out-in">
          <div :key="currentSlide" class="slide-content">
            <slot :current-slide="currentSlide"></slot>
          </div>
        </Transition>
      </div>

      <slot
        name="controls"
        :is-first-slide="isFirstSlide"
        :is-last-slide="isLastSlide"
        :prev="prev"
        :next="next"
      ></slot>
    </div>
  </div>
</template>

<style scoped>
/* Container for slide content */
.slide-content {
  width: 100%;
  height: 100%;
}

/* Slide left transition (used for forward/next navigation) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Slide right transition (used for backward/prev navigation) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Make parent container position relative for proper transition handling */
.relative {
  position: relative;
}
</style>
