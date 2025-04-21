<script setup lang="ts"></script>

<template>
  <div>
    <SlideH2>🏁 Understanding v-memo: Key Takeaways</SlideH2>

    <div
      class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mb-6"
    >
      <div class="text-center text-xl font-medium text-gray-800 mb-4">The v-memo Journey</div>

      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center">
          <div class="text-blue-500 text-xl mb-1">⚙️</div>
          <div class="font-medium text-gray-700 mb-1">How It Works</div>
          <div class="text-sm text-gray-600">
            Skips both VNode creation AND DOM diffing when dependencies haven't changed
          </div>
        </div>

        <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center">
          <div class="text-green-500 text-xl mb-1">🚀</div>
          <div class="font-medium text-gray-700 mb-1">When To Use It</div>
          <div class="text-sm text-gray-600">
            Large lists, complex components, or specific elements requiring controlled updates
          </div>
        </div>

        <div class="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center">
          <div class="text-orange-500 text-xl mb-1">⚠️</div>
          <div class="font-medium text-gray-700 mb-1">Best Practices</div>
          <div class="text-sm text-gray-600">
            Correct placement, careful dependency selection, and performance measurement
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-5 mb-5">
      <div class="bg-green-50 p-4 rounded-lg border border-green-100">
        <div class="font-medium text-green-600 mb-2 flex items-center">
          <span class="mr-2">✅</span>
          <span>Do:</span>
        </div>
        <ul class="list-disc ml-5 text-gray-600 space-y-2 text-sm">
          <li>Place v-memo on the same element as v-for</li>
          <li>Include only properties that affect rendering</li>
          <li>Measure performance before & after implementation</li>
          <li>Use for expensive rendering operations</li>
        </ul>
      </div>

      <div class="bg-red-50 p-4 rounded-lg border border-red-100">
        <div class="font-medium text-red-500 mb-2 flex items-center">
          <span class="mr-2">❌</span>
          <span>Don't:</span>
        </div>
        <ul class="list-disc ml-5 text-gray-600 space-y-2 text-sm">
          <li>Use v-memo on everything "just in case"</li>
          <li>Forget dependencies that affect rendering</li>
          <li>Put v-memo inside a v-for element</li>
          <li>Use for simple components with few updates</li>
        </ul>
      </div>
    </div>

    <div class="bg-blue-50 p-4 rounded-lg border border-blue-100">
      <div class="flex items-start">
        <div class="text-blue-500 text-xl mr-3">💡</div>
        <div>
          <div class="font-medium text-gray-700">Final Thought:</div>
          <div class="text-gray-600">
            v-memo is a powerful but specialized optimization tool. Use it when you have a clear
            performance need, not as a default pattern. Always test the impact and ensure your
            optimizations actually improve user experience.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
