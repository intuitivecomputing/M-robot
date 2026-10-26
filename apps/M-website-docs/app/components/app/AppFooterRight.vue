<!-- Overrides Docus's AppFooterRight (icon buttons) with the site's mono links. -->
<script setup lang="ts">
const appConfig = useAppConfig()

const links = computed(() => [
  { label: 'm project website', to: 'https://m-robot-platform.vercel.app' },
  { label: 'paper', to: 'https://arxiv.org/abs/2603.19134' },
  ...(appConfig.github ? [{ label: 'github', to: appConfig.github.url }] : []),
])
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
