<script setup lang="ts">
const codeCorrect = `<div v-for="item in list" :key="item.id" v-memo="[...]"></div>`
const codeIncorrect = `<div v-for="item in list" :key="item.id">
  <div v-memo="[...]">...</div> <!-- ❌ Won't work properly -->
</div>`
</script>

<template>
  <div>
    <SlideH2>⚠️ Important Notes & Warnings</SlideH2>

    <div class="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
      <div class="font-medium text-gray-700 mb-1">Common Gotchas to Avoid:</div>
      <ul class="list-disc ml-5 text-gray-600 space-y-1.5">
        <li>Incorrect placement with v-for (must be on the same element)</li>
        <li>Missing dependencies that should trigger updates</li>
        <li>Overusing v-memo on simple components (adds overhead)</li>
      </ul>
    </div>

    <div class="text-gray-700 font-medium mb-2">v-for Placement:</div>
    <div class="grid grid-cols-2 gap-4 mb-5">
      <div>
        <div class="text-green-600 font-medium mb-1 text-sm flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Correct:
        </div>
        <SlideCode :code="codeCorrect" lang="html" />
      </div>
      <div>
        <div class="text-red-600 font-medium mb-1 text-sm flex items-center">
          <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          Incorrect:
        </div>
        <SlideCode :code="codeIncorrect" lang="html" />
      </div>
    </div>

    <div class="bg-blue-50 p-3 rounded-lg border border-blue-100">
      <div class="text-gray-700 font-medium mb-1">Additional Notes:</div>
      <ul class="list-disc ml-5 text-sm text-gray-600">
        <li>Components: v-memo works on components but is rarely needed there</li>
        <li>Responsibility: YOU must ensure your dependency arrays include all relevant values</li>
        <li>Debugging: If updates stop working, check your v-memo dependencies first</li>
      </ul>
    </div>
  </div>
</template>
