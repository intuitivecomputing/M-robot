<!-- Overrides Docus's empty AppHeaderCTA with links back to the project. -->
<template>
  <div class="me-1 hidden items-center gap-5 font-mono text-[13px] md:flex">
    <NuxtLink
      to="https://intuitivecomputing.github.io/M-robot/"
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
    <NuxtLink
      to="https://github.com/intuitivecomputing/m-robot-files"
      target="_blank"
      class="text-highlighted hover:underline"
    >
      github ↗
    </NuxtLink>
  </div>
</template>
