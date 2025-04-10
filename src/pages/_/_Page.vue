<script setup lang="ts">
import { routes } from '@/router'
import type { SlideRoute } from '@/types/slides'
import { vAutoAnimate } from '@formkit/auto-animate'

const slides = routes.filter((route) => route.path !== '/') as SlideRoute[]
const sortedSlides = slides.sort((a, b) => {
  return new Date(b.meta.datetime).getTime() - new Date(a.meta.datetime).getTime()
})

// Function to check if slide is new (within last 7 days)
function isNew(dateString: string): boolean {
  if (!dateString) return false
  return new Date(dateString) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
}

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
    <!-- Cards grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" v-auto-animate>
      <router-link
        v-for="slide in sortedSlides"
        :key="slide.path"
        :to="slide.path"
        class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden flex flex-col transform hover:-translate-y-1 transition-all duration-300"
      >
        <!-- Image container -->
        <div class="h-48 overflow-hidden relative">
          <img
            :src="slide.meta.image"
            alt="Slide preview"
            class="w-full h-full object-cover object-center transition-transform duration-500 transform hover:scale-105"
          />
        </div>

        <!-- Content container -->
        <div class="p-5 flex flex-col flex-grow">
          <!-- Title with NEW badge -->
          <div class="flex items-center mb-2">
            <h3 class="font-semibold text-lg text-gray-800 line-clamp-2 flex-grow">
              {{ slide.meta.title }}
            </h3>

            <!-- NEW badge next to title -->
            <span
              v-if="slide.meta.datetime && isNew(slide.meta.datetime)"
              class="ml-2 flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
            >
              NEW
            </span>
          </div>

          <!-- Description -->
          <p class="text-gray-600 text-sm mb-3 line-clamp-3 flex-grow">
            {{ slide.meta.description }}
          </p>

          <!-- Date footer -->
          <div
            class="flex items-center text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span v-if="slide.meta.datetime">{{ formatDate(slide.meta.datetime) }}</span>
            <span v-else>No date</span>

            <!-- Read more link -->
            <span class="ml-auto flex items-center text-blue-600 font-medium text-xs">
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* Add a line-clamp utility if not already in your Tailwind config */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
