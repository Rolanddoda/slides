<script setup lang="ts">
const codeExample = `<!-- Without v-memo: Re-renders ALL items when parent updates -->
<div v-for="item in list" :key="item.id">
  <UserCard :user="item" />
</div>

<!-- With v-memo: Only re-renders when selection state changes -->
<div v-for="item in list" :key="item.id" v-memo="[item.id === selectedId]">
  <UserCard :user="item" />
</div>`
</script>

<template>
  <div>
    <SlideH2>🤔 What is v-memo?</SlideH2>

    <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-5">
      <div class="text-gray-700 font-medium">Simply put:</div>
      <div class="text-gray-600 mt-1">
        v-memo tells Vue:
        <span class="italic">"Only update this part if these specific values change"</span>
      </div>
    </div>

    <div class="bg-gray-50 p-4 rounded-lg">
      <div class="font-medium text-gray-700 mb-2">Syntax:</div>
      <div class="text-gray-600">
        <code class="bg-white px-2 py-1 rounded border">v-memo="[dependency1, dependency2]"</code>
      </div>
      <div class="text-gray-600 text-sm mt-2">
        The element only updates when any value in the array changes
      </div>
    </div>

    <div class="text-gray-700 font-medium mb-2">Compare:</div>
    <SlideCode :code="codeExample" lang="html" />

    <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100 mt-4">
      <div class="flex items-start">
        <div class="text-yellow-600 mr-2">💡</div>
        <div class="text-gray-600 text-sm">
          Note: We don't need to include item.id in the memo dependency array here since Vue
          automatically infers it from the item's :key.
        </div>
      </div>
    </div>
  </div>
</template>
