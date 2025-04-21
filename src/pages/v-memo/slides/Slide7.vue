<script setup lang="ts">
import { checkIcon } from '@/constants/icons'

const scenarios = [
  {
    icon: checkIcon,
    title: 'Small, Simple Components',
    description:
      "For basic components, v-memo adds more overhead than performance gain. Vue's built-in optimizations are already efficient here.",
  },
  {
    icon: checkIcon,
    title: 'Without Performance Testing',
    description:
      'Always measure performance before and after adding v-memo. Only use it when you can prove it helps.',
  },
  {
    icon: checkIcon,
    title: 'As a Quick Fix',
    description:
      'If your app is slow, first look for better data structures or component design before reaching for v-memo.',
  },
]
</script>

<template>
  <div>
    <SlideH2>🚫 When NOT to Use v-memo</SlideH2>

    <div
      class="mb-5 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100"
    >
      <div class="text-gray-700 font-medium mb-2">Remember: v-memo is a specialized tool!</div>
      <div class="text-gray-600">
        Like a racing car's turbocharger, it's powerful in specific situations but unnecessary (and
        potentially harmful) for everyday driving.
      </div>
    </div>

    <SlidePoints :points="scenarios" />

    <div
      class="mt-5 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600 flex items-start"
    >
      <div class="text-amber-500 mr-2 mt-0.5">⚠️</div>
      <div>
        <span class="font-medium">Performance Fact:</span> Premature optimization with v-memo can
        make your app slower! The comparison check adds overhead that's only worthwhile for complex
        rendering scenarios.
      </div>
    </div>
  </div>
</template>
