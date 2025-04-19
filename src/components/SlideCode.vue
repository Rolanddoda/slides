<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue'
import { codeToHtml } from 'shiki'

const { code, lang: language = 'vue' } = defineProps<{
  code: string
  lang?: string
}>()

const highlightedCode = ref('')
const highlighterLoaded = ref(false)

onMounted(async () => {
  try {
    const html = await codeToHtml(code, {
      lang: language,
      theme: 'aurora-x',
    })
    highlightedCode.value = html
    highlighterLoaded.value = true
  } catch (error) {
    console.error('Failed to load syntax highlighter:', error)
  }
})
</script>

<template>
  <div class="code-block">
    <div v-if="highlighterLoaded" v-html="highlightedCode" class="shiki-wrapper"></div>
    <pre v-else class="code-loading"><code>{{ code }}</code></pre>
  </div>
</template>

<style scoped>
.code-block {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.code-block:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.15),
    0 3px 8px rgba(0, 0, 0, 0.1);
}

:deep(.shiki-wrapper) {
  margin: 0;
  padding: 0;
  background: transparent !important;
  position: relative;
}

:deep(.shiki) {
  margin: 0 !important;
  padding: 1.25rem 1.5rem !important;
  width: 100%;
  overflow-x: auto;
  font-family:
    'JetBrains Mono', 'IBM Plex Mono', 'Fira Code', 'Cascadia Code', 'Source Code Pro', monospace;
  font-size: 0.92rem;
  font-weight: 450;
  letter-spacing: -0.025em;
  line-height: 1.6;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  font-feature-settings:
    'liga' 1,
    'calt' 1,
    'ss01' 1,
    'ss02' 1; /* Enable additional stylistic sets */
}

:deep(.shiki::-webkit-scrollbar) {
  height: 6px;
  background-color: rgba(0, 0, 0, 0.05);
}

:deep(.shiki::-webkit-scrollbar-thumb) {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

:deep(.shiki::-webkit-scrollbar-thumb:hover) {
  background-color: rgba(255, 255, 255, 0.2);
}

:deep(.shiki .line) {
  min-height: 1.5em;
  padding: 0.12em 0;
  position: relative;
}

:deep(.shiki .line:hover) {
  background-color: rgba(255, 255, 255, 0.05);
}

.code-loading {
  background: #282c34;
  color: #abb2bf;
  padding: 1.25rem 1.5rem;
  font-family:
    'JetBrains Mono', 'IBM Plex Mono', 'Fira Code', 'Cascadia Code', 'Source Code Pro', monospace;
  font-size: 0.92rem;
  font-weight: 450;
  letter-spacing: -0.025em;
  line-height: 1.6;
  margin: 0;
}
</style>
