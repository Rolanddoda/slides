<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-gradient-to-r from-blue-50 via-white to-gray-50 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Left side - Logo and site title -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center group space-x-3">
            <!-- Vue logo with custom styling -->
            <div class="relative w-8 h-8">
              <svg
                viewBox="0 0 261.76 226.69"
                xmlns="http://www.w3.org/2000/svg"
                class="w-full h-full"
              >
                <path
                  d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z"
                  fill="#41B883"
                />
                <path
                  d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z"
                  fill="#34495E"
                />
              </svg>
              <!-- Subtle glow effect -->
              <div
                class="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
              ></div>
            </div>

            <!-- Title with gradient effect -->
            <div
              class="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-300 group-hover:from-blue-700 group-hover:to-blue-900"
            >
              Vue Slide Demos
            </div>
          </router-link>
        </div>

        <!-- Right side - Navigation -->
        <div class="hidden md:flex items-center space-x-4">
          <!-- Back button (only on non-home pages) -->
          <router-link
            v-if="!isHomePage"
            to="/"
            class="inline-flex items-center px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <svg
              class="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Home
          </router-link>

          <!-- ProfitMetrics link -->
          <a
            href="https://www.profitmetrics.io"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <span>Visit ProfitMetrics</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 ml-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMenu"
            class="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                v-if="isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden py-3 space-y-3 border-t border-gray-200">
        <router-link
          v-if="!isHomePage"
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          @click="isMenuOpen = false"
        >
          Home
        </router-link>

        <a
          href="https://www.profitmetrics.io"
          target="_blank"
          rel="noopener noreferrer"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          Visit ProfitMetrics
        </a>
      </div>
    </div>
  </header>
</template>
