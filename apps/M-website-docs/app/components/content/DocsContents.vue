<!--
  Numbered contents grid for the docs home (`::docs-contents` in markdown),
  built from the live navigation so it never drifts from the sidebar.
-->
<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[] | undefined>>('navigation')

const sections = computed(() =>
  (navigation?.value ?? [])
    .filter(section => section.children?.length)
    .map((section, index) => {
      // A section's own index page is the page this grid lives on; skip it.
      const children = (section.children ?? []).filter(child => child.path !== section.path)
      return {
        number: String(index + 1).padStart(2, '0'),
        title: section.title,
        pages: children.filter(child => !child.children?.length),
        groups: children.filter(child => child.children?.length),
      }
    }),
)
</script>

<template>
  <div class="my-8 flex flex-col gap-px border border-default bg-(--ui-border)">
    <div
      v-for="section in sections"
      :key="section.number"
      class="flex flex-wrap gap-px"
    >
      <div class="grow basis-52 bg-default px-5 py-5">
        <p class="font-mono text-xs text-muted">
          {{ section.number }}
        </p>
        <p class="mt-0.5 text-2xl leading-tight text-highlighted">
          {{ section.title }}
        </p>
      </div>
      <div class="flex min-w-0 grow-[999] basis-96 flex-wrap gap-x-8 gap-y-4 bg-default px-5 py-4 text-lg leading-8">
        <div
          v-if="section.pages.length"
          class="grow basis-44"
        >
          <NuxtLink
            v-for="page in section.pages"
            :key="page.path"
            :to="page.path"
            class="block text-highlighted hover:text-primary"
          >
            {{ page.title }}
          </NuxtLink>
        </div>
        <div
          v-for="group in section.groups"
          :key="group.path"
          class="grow basis-44"
        >
          <p class="font-mono text-xs text-muted lowercase">
            {{ group.title }}
          </p>
          <NuxtLink
            v-for="page in group.children"
            :key="page.path"
            :to="page.path"
            class="block text-highlighted hover:text-primary"
          >
            {{ page.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
