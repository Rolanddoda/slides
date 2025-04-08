<script setup lang="ts">
import { routes } from '@/router'
import type { SlideRoute } from '@/types/slides'

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
    <h1 class="text-3xl font-bold mb-6 text-gray-800">
      Vue.js slide tutorials by
      <a
        href="https://www.linkedin.com/in/roland-doda/"
        target="_blank"
        class="text-blue-500 hover:underline"
      >
        <span class="inline-flex items-center">
          <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </svg>
          Roland
        </span>
      </a>
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="slide in sortedSlides"
        :key="slide.path"
        :to="slide.path"
        class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.02] transition-transform duration-300"
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
