<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue'
import { codeToHtml } from 'shiki'

const { code, language = 'vue' } = defineProps<{
  code: string
  language?: string
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
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

:deep(.shiki-wrapper) {
  margin: 0;
  padding: 0;
  background: transparent !important;
}

:deep(.shiki) {
  margin: 0 !important;
  padding: 1rem 1.5rem !important;
  width: 100%;
  overflow-x: auto;
  font-family: 'Fira Code', 'Courier New', Consolas, monospace;
  font-size: 0.9rem;
  line-height: 1.6;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

:deep(.shiki .line) {
  min-height: 1.5em;
}

.code-loading {
  background: #282c34;
  color: #abb2bf;
  padding: 1rem 1.5rem;
  font-family: 'Fira Code', 'Courier New', Consolas, monospace;
  font-size: 0.9rem;
  margin: 0;
}
</style>
