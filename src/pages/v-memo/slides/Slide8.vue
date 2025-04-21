<script setup lang="ts">
import { checkIcon } from '@/constants/icons'

const points = [
  {
    icon: checkIcon,
    title: 'Performance Tool',
    description: "v-memo optimizes rendering by skipping updates when dependencies haven't changed",
  },
  {
    icon: checkIcon,
    title: 'Best Use Case',
    description: 'Large lists with many items where only a few change at once',
  },
  {
    icon: checkIcon,
    title: 'Dependency Array',
    description: 'Always include ALL values that should trigger a re-render',
  },
  {
    icon: checkIcon,
    title: 'Selective Usage',
    description: 'Use sparingly and only after identifying real performance bottlenecks',
  },
]

const hashtags = '#VueJS #Vue3 #Performance #WebDev #Frontend #vMemo #Optimization'
</script>

<template>
  <div>
    <SlideH2>✅ Conclusion: Use v-memo Wisely!</SlideH2>

    <div
      class="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100 mb-6"
    >
      <div class="font-medium text-gray-700">Key Takeaways:</div>
      <div class="mt-2 text-gray-600 flex items-center">
        <span class="text-green-500 mr-2">🎯</span>
        v-memo is a <span class="font-medium">precision tool</span>, not a general optimization. Use
        it for specific performance bottlenecks, especially in large lists.
      </div>
    </div>

    <SlidePoints :points="points" />

    <div class="mt-6 text-center">
      <div class="text-sm text-gray-500 mb-2">
        {{ hashtags }}
      </div>
      <div class="text-sm text-gray-600 font-medium">
        Go optimize those rendering bottlenecks! 🚀
      </div>
    </div>
  </div>
</template>
