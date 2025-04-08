import { ref, computed } from 'vue'

export function useSlides(totalSlides: number) {
  const currentSlide = ref(1)

  const isFirstSlide = computed(() => currentSlide.value === 1)
  const isLastSlide = computed(() => currentSlide.value === totalSlides)

  function next() {
    if (!isLastSlide.value) {
      currentSlide.value++
    }
  }

  function prev() {
    if (!isFirstSlide.value) {
      currentSlide.value--
    }
  }

  function goToSlide(slideNumber: number) {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      currentSlide.value = slideNumber
    }
  }

  return {
    currentSlide,
    totalSlides,
    isFirstSlide,
    isLastSlide,
    next,
    prev,
    goToSlide,
  }
}
