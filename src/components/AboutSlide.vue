<script setup lang="ts">
const socials = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/roland-doda/',
  },
  {
    platform: 'ProfitMetrics.io',
    url: 'https://profitmetrics.io/',
  },
]
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold text-gray-700 mb-4 text-center">👋 About Me</h2>
    <p class="text-center text-gray-700 mb-4">
      Hi, my name is Roland, working as a <strong> Vue.js dev since 2017 </strong> and <br />
      currently as <strong> Frontend Lead at ProfitMetrics.io </strong>.
    </p>
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
          class="inline-flex items-center px-4 py-2 ml-1 mt-2 bg-white border border-blue-200 rounded-md shadow-sm hover:bg-blue-50 transition-colors duration-200 text-blue-600 font-medium"
        >
          <img src="@/assets/profitmetrics-logo.svg" alt="ProfitMetrics" class="h-5 mr-2" />
        </a>
      </p>
    </div>
  </div>
</template>
