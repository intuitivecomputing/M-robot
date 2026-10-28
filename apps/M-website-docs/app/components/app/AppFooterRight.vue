<!-- Overrides Docus's AppFooterRight (icon buttons) with the site's mono links. -->
<script setup lang="ts">
const links = [
  { label: 'm project website', to: 'https://intuitivecomputing.github.io/M-robot/' },
  { label: 'paper', to: 'https://arxiv.org/abs/2603.19134' },
  { label: 'github', to: 'https://github.com/intuitivecomputing/m-robot-files' },
]
</script>

<template>
  <div class="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs">
    <NuxtLink
      v-for="link in links"
      :key="link.label"
      :to="link.to"
      target="_blank"
      class="text-[#f1f2f2] hover:underline"
    >
      {{ link.label }} ↗
    </NuxtLink>
  </div>
</template>
