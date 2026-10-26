import remarkMermaid from './utils/remark-mermaid'

export default defineNuxtConfig({
  extends: ['docus'],
  devtools: { enabled: false },
  // Public URL for canonical links, sitemap, and llms.txt. Docus would otherwise
  // infer it from the per-deployment Vercel URL.
  site: {
    url: 'https://m-robot-platform-docs.vercel.app',
    name: 'M Platform',
  },
  llms: {
    domain: 'https://m-robot-platform-docs.vercel.app',
  },
  routeRules: {
    '/': { redirect: '/intro' },
  },
  // `/` is a redirect, so the prerender crawler never reaches the docs pages on
  // its own. Seed it with /intro; the sidebar links lead it to every page.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/intro'],
    },
  },
  mdc: {
    remarkPlugins: {
      'remark-mermaid': {
        instance: remarkMermaid,
      },
    },
  },
})
