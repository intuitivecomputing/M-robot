<!-- Overrides Docus's empty AppHeaderCTA with links back to the project. -->
<template>
  <div class="me-1 hidden items-center gap-5 font-mono text-[13px] md:flex">
    <NuxtLink
      to="https://m-robot-platform.vercel.app"
      target="_blank"
      class="text-highlighted hover:underline"
    >
      project site ↗
    </NuxtLink>
    <NuxtLink
      to="https://arxiv.org/abs/2603.19134"
      target="_blank"
      class="text-highlighted hover:underline"
    >
      paper ↗
    </NuxtLink>
  </div>
</template>
