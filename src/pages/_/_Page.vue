<script setup lang="ts">
import { routes } from '@/router'
import type { SlideRoute } from '@/types/slides'
import { vAutoAnimate } from '@formkit/auto-animate'

const slides = routes.filter((route) => route.path !== '/') as SlideRoute[]
const sortedSlides = slides.sort((a, b) => {
  return new Date(b.meta.datetime).getTime() - new Date(a.meta.datetime).getTime()
})

// Function to format dates nicely
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" v-auto-animate>
      <router-link
        v-for="slide in sortedSlides"
        :key="slide.path"
        :to="slide.path"
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300"
      >
        <!-- Date badge in top-right corner of image -->
        <div class="h-48 overflow-hidden relative">
          <img
            :src="slide.meta.image"
            alt="Slide preview"
            class="w-full h-full object-cover object-center"
          />
          <div
            v-if="slide.meta.datetime"
            class="absolute top-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-md"
          >
            {{ formatDate(slide.meta.datetime) }}
          </div>
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-lg text-gray-800 mb-2">
            {{ slide.meta.title }}
          </h3>
          <p class="text-gray-600 text-sm">
            {{ slide.meta.description }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
