import remarkMermaid from './utils/remark-mermaid'

export default defineNuxtConfig({
  extends: ['docus'],
  devtools: { enabled: false },
  // Public URL for canonical links, sitemap, and llms.txt. Docus would otherwise
  // infer it from the per-deployment Vercel URL.
  site: {
    url: 'https://m-website-docs.vercel.app',
    name: 'M Platform',
  },
  llms: {
    domain: 'https://m-website-docs.vercel.app',
  },
  routeRules: {
    '/': { redirect: '/intro' },
  },
  mdc: {
    remarkPlugins: {
      'remark-mermaid': {
        instance: remarkMermaid,
      },
    },
  },
})
