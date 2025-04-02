<script setup lang="ts">
import { provide } from 'vue'
import useSlides from '@/composables/slides'
import SlideControls from '@/components/slides/SlideControls.vue'
import Slide from '@/components/slides/Slide.vue'
import { slides } from './slides-data'

// Import individual slide templates
import TitleSlide from '@/components/slides/TitleSlide.vue'
import CodeSlide from '@/components/slides/CodeSlide.vue'
import UseCasesSlide from '@/components/slides/UseCasesSlide.vue'
import AboutSlide from '@/components/slides/AboutSlide.vue'
import ConclusionSlide from '@/components/slides/ConclusionSlide.vue'

const { currentSlide, isFirstSlide, isLastSlide, next, prev } = useSlides()

// Provide the slides state to child components if needed
provide('currentSlide', currentSlide)
</script>

<template>
  <div
    class="bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen flex flex-col items-center justify-center p-4"
  >
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden">
      <div class="p-8 md:p-12 min-h-[450px] flex flex-col justify-center">
        <!-- Render all slides, but only the active one will be visible -->
        <Slide
          v-for="slide in slides"
          :key="slide.id"
          :active="currentSlide === slide.id"
          :slideId="slide.id"
        >
          <!-- Dynamically render the appropriate slide content based on slide type -->
          <TitleSlide
            v-if="slide.id === 1"
            :title="slide.title"
            :subtitle="slide.subtitle"
            :image="slide.image"
          />

          <CodeSlide
            v-else-if="slide.id === 2 || slide.id === 3 || slide.id === 4"
            :id="slide.id"
            :title="slide.title"
            :description="slide.description"
            :code="slide.code"
            :footer="slide.footer"
          />

          <UseCasesSlide
            v-else-if="slide.id === 5"
            :title="slide.title"
            :useCases="slide.useCases"
          />

          <ConclusionSlide
            v-else-if="slide.id === 6"
            :title="slide.title"
            :description="slide.description"
            :tags="slide.tags"
          />

          <AboutSlide
            v-else-if="slide.id === 7"
            :title="slide.title"
            :description="slide.description"
            :socials="slide.socials"
          />
        </Slide>
      </div>

      <SlideControls
        :isFirstSlide="isFirstSlide"
        :isLastSlide="isLastSlide"
        @prev="prev"
        @next="next"
      />
    </div>
  </div>
</template>
