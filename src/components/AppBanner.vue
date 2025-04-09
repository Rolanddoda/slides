<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6">
        <!-- Left side - Site title/home link -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center group">
            <img src="https://vuejs.org/logo.svg" alt="Vue Logo" class="w-8 h-8" />

            <span class="text-xl font-bold text-gray-800 group-hover:text-gray-900">
              Slide Tutorials
            </span>
          </router-link>
        </div>

        <!-- Right side - Navigation/back button -->
        <div class="flex items-center">
          <!-- Only show back button if we're not on the home page -->
          <router-link
            v-if="!isHomePage"
            to="/"
            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <svg
              class="-ml-1 mr-2 h-5 w-5"
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
            Back to Home
          </router-link>

          <!-- LinkedIn link - always visible -->
          <a
            href="https://www.linkedin.com/in/roland-doda/"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-4 inline-flex items-center text-gray-600 hover:text-[#1E43FF] transition-colors"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>
          <a
            href="https://www.profitmetrics.io"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-4 inline-flex items-center text-gray-600 hover:text-[#1E43FF] transition-colors"
          >
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.87896 9.00004C7.44152 8.43753 8.20449 8.12151 9.00004 8.12151C9.79559 8.12151 10.5586 8.43753 11.1211 9.00004L14.4696 12.3489C14.5392 12.4186 14.6219 12.4739 14.7129 12.5116C14.8039 12.5494 14.9014 12.5688 15 12.5688C15.0985 12.5688 15.196 12.5494 15.287 12.5116C15.378 12.4739 15.4607 12.4186 15.5303 12.3489L23.3772 4.5002C23.7749 4.1027 23.9986 3.56353 23.9989 3.0012C23.9991 2.60722 23.9216 2.21707 23.771 1.85302C23.6203 1.48897 23.3995 1.15816 23.121 0.879476C22.8425 0.600788 22.5118 0.379682 22.1479 0.228781C21.7839 0.0778806 21.3938 0.000140604 20.9999 2.12361e-08H3.00013C2.60614 -4.6858e-05 2.21599 0.0775219 1.85198 0.228276C1.48796 0.37903 1.15721 0.600017 0.878614 0.878614C0.600017 1.15721 0.37903 1.48796 0.228276 1.85198C0.0775219 2.21599 -4.6858e-05 2.60614 2.12361e-08 3.00013V15.1545C2.49057e-05 15.2138 0.0176295 15.2718 0.0505905 15.3211C0.0835514 15.3705 0.13039 15.4089 0.185192 15.4316C0.239993 15.4544 0.300299 15.4603 0.358493 15.4488C0.416688 15.4373 0.47016 15.4088 0.512157 15.3669L6.87896 9.00004Z"
              />
              <path
                d="M17.121 14.9999C16.5585 15.5624 15.7955 15.8784 15 15.8784C14.2044 15.8784 13.4414 15.5624 12.8789 14.9999L9.52933 11.6514C9.45972 11.5817 9.37705 11.5264 9.28604 11.4887C9.19504 11.451 9.09749 11.4315 8.99897 11.4315C8.90046 11.4315 8.80291 11.451 8.7119 11.4887C8.6209 11.5264 8.53823 11.5817 8.46861 11.6514L0.62137 19.4994C0.424348 19.6964 0.268069 19.9304 0.161454 20.1878C0.0548386 20.4453 -2.3445e-05 20.7212 7.51595e-09 20.9998C7.51595e-09 21.3938 0.0776007 21.7839 0.228372 22.1479C0.379142 22.5119 0.600131 22.8427 0.878719 23.1212C1.15731 23.3998 1.48804 23.6208 1.85203 23.7716C2.21603 23.9224 2.60615 24 3.00013 24H20.9999C21.7955 23.9999 22.5586 23.6838 23.1212 23.1211C23.6838 22.5585 23.9999 21.7955 24 20.9998V8.84511C23.9999 8.78582 23.9822 8.72788 23.9493 8.67861C23.9163 8.62933 23.8694 8.59094 23.8146 8.56826C23.7599 8.54558 23.6996 8.53964 23.6414 8.55118C23.5833 8.56272 23.5298 8.59123 23.4878 8.63311L17.121 14.9999Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
