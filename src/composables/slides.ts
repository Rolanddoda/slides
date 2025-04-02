import { ref, computed } from 'vue'
import { slides } from '../slides-data'

export default function useSlides() {
  const currentSlide = ref(1)
  const totalSlides = slides.length

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
