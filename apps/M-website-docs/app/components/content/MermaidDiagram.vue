<script setup lang="ts">
import { computed, onMounted, ref, useId } from 'vue'

const props = defineProps<{
  code: string
}>()

const decodedCode = computed(() => decodeURIComponent(props.code))
const svg = ref('')
const error = ref('')
const renderId = `mermaid-${useId()}`

onMounted(async () => {
  try {
    const mermaidModule = await import('https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs')
    const mermaid = mermaidModule.default

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      theme: 'default'
    })

    const result = await mermaid.render(renderId, decodedCode.value)
    svg.value = result.svg
  }
  catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to render Mermaid diagram.'
  }
})
</script>

<template>
  <div v-if="svg" class="not-prose overflow-x-auto" v-html="svg" />
  <pre v-else-if="error" class="overflow-x-auto"><code>{{ error }}</code></pre>
</template>
