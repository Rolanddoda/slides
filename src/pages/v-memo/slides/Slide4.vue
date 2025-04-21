<script setup lang="ts"></script>

<template>
  <div>
    <SlideH2>🚀 Practical Use Cases</SlideH2>

    <div class="bg-indigo-50 p-4 rounded-lg border border-indigo-100 mb-5">
      <div class="text-gray-800 font-medium mb-2 flex items-center">
        <span class="text-indigo-500 mr-2">🔍</span>
        <span>When should you use v-memo?</span>
      </div>
      <div class="text-gray-600 text-sm">
        Use v-memo when you need fine-grained control over when elements re-render. It's especially
        powerful for optimizing rendering performance in specific scenarios.
      </div>
    </div>

    <div class="grid grid-cols-2 gap-5 mb-6">
      <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div class="font-medium text-green-600 mb-2 flex items-center">
          <span class="mr-2">✅</span>
          <span>Best For:</span>
        </div>
        <ul class="list-disc ml-5 text-gray-600 space-y-3">
          <li>
            <span class="font-medium">Large v-for Lists</span>
            <div class="text-sm">1000+ items where only a few change</div>
          </li>
          <li>
            <span class="font-medium">Complex Components</span>
            <div class="text-sm">Items with many nested elements or expensive rendering</div>
          </li>
          <li>
            <span class="font-medium">Controlled Updates</span>
            <div class="text-sm">Filter/sort with stable item data</div>
          </li>
          <li>
            <span class="font-medium">Selection States</span>
            <div class="text-sm">Only re-render selected/active items</div>
          </li>
        </ul>
      </div>

      <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div class="font-medium text-red-500 mb-2 flex items-center">
          <span class="mr-2">⛔</span>
          <span>Avoid For:</span>
        </div>
        <ul class="list-disc ml-5 text-gray-600 space-y-3">
          <li>
            <span class="font-medium">Small Lists</span>
            <div class="text-sm">Adds overhead with no real benefit</div>
          </li>
          <li>
            <span class="font-medium">Frequently Changing Data</span>
            <div class="text-sm">If most dependencies change with every render</div>
          </li>
          <li>
            <span class="font-medium">Simple Elements</span>
            <div class="text-sm">Vue is already optimized for these</div>
          </li>
          <li>
            <span class="font-medium">Empty Dependency Arrays</span>
            <div class="text-sm">Use v-once instead of v-memo="[]"</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
