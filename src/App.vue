<script setup lang="ts">
import AppBanner from '@/components/AppBanner.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppBanner />

    <main class="grid flex-grow bg-gray-50">
      <router-view></router-view>
    </main>
  </div>
</template>
