<!-- Overrides Docus's AppFooterLeft, which only prints "Copyright © <year>". -->
<template>
  <div class="text-sm text-muted">
    Copyright © {{ new Date().getFullYear() }} Intuitive Computing Laboratory, Johns Hopkins University ·
    <NuxtLink
      to="https://m-robot-platform.vercel.app"
      target="_blank"
      class="hover:text-default underline-offset-2 hover:underline"
    >
      M project website
    </NuxtLink>
  </div>
</template>
