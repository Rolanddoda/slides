<script setup lang="ts">
import AppBanner from '@/components/AppBanner.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const transitionName = ref('slide-fade')

// Watch for route changes to determine transition direction
watch(
  () => route.path,
  (newPath, oldPath) => {
    // If navigating back to home
    if (newPath === '/' && oldPath !== '/') {
      transitionName.value = 'slide-right'
    } else {
      transitionName.value = 'slide-left'
    }
  },
)
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden">
    <AppBanner />

    <main class="grid flex-grow bg-gray-50 relative">
      <router-view v-slot="{ Component, route }">
        <Transition :name="transitionName" mode="out-in">
          <component :key="route.name" :is="Component"></component>
        </Transition>
      </router-view>
    </main>
  </div>
</template>

<style>
/* Slide left transition (used for forward navigation) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* Slide right transition (used for back navigation) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

/* General fade transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
