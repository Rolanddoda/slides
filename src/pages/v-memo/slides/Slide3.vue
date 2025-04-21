<script setup lang="ts"></script>

<template>
  <div>
    <SlideH2>⚙️ How v-memo Works</SlideH2>

    <div class="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-5">
      <div class="flex items-center justify-center mb-4">
        <div
          class="bg-white p-3 rounded-lg shadow-sm border border-gray-200 text-center w-full max-w-md"
        >
          <div class="font-medium text-gray-800 mb-2">The v-memo Mental Model</div>
          <div class="text-gray-600 text-sm">
            Think of v-memo as a "change detector" with a memory that decides:
            <span class="font-medium text-blue-600">"Do I really need to update this?"</span>
          </div>
        </div>
      </div>

      <ol class="list-decimal ml-5 space-y-4">
        <li class="text-gray-700">
          <span class="font-medium">Define what matters</span>
          <div class="text-gray-600 mt-1">
            Tell Vue exactly what values should trigger an update:
            <code class="bg-white px-2 py-0.5 rounded">v-memo="[count, isActive]"</code>
          </div>
        </li>
        <li class="text-gray-700">
          <span class="font-medium">Vue's decision process:</span>
          <div class="text-gray-600 mt-1">
            When component needs to update, Vue checks each dependency:
            <code class="bg-white px-2 py-0.5 rounded">oldValue === newValue</code>
          </div>
        </li>
        <li class="text-gray-700">
          <span class="font-medium">No changes detected:</span>
          <div class="text-gray-600 mt-1">
            <span class="text-green-500">✓ SKIP</span> - Entire subtree is preserved, no virtual DOM
            diffing
          </div>
        </li>
        <li class="text-gray-700">
          <span class="font-medium">Changes detected:</span>
          <div class="text-gray-600 mt-1">
            <span class="text-orange-500">⟳ UPDATE</span> - Re-render this element and all its
            children
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
