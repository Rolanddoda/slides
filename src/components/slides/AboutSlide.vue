<script setup lang="ts">
defineProps<{
  title: string
  description: string
  socials: Array<{
    platform: string
    url: string
  }>
}>()
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-700 mb-4 text-center">{{ title }}</h2>
    <p class="text-center text-gray-700 mb-4">{{ description }}</p>
    <p class="text-center text-gray-700 mb-4">
      We provide real-time profit tracking and optimization software specifically for e-commerce
      businesses. Our platform helps stores gain full transparency into their profitability by
      calculating Profit-on-Ad-Spend (POAS®) using accurate server-side tracking, allowing for
      smarter marketing decisions.
    </p>

    <!-- Updated call-to-action section with better styling -->
    <div
      class="mt-8 py-4 px-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100 shadow-sm"
    >
      <p class="text-center text-base md:text-lg font-medium text-gray-800">
        Follow me for more content like this and definitely check out
        <a
          href="https://profitmetrics.io"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-3 py-1 mx-1 mt-1 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
        >
          ProfitMetrics.io
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1"
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
      </p>
    </div>
  </div>
</template>
