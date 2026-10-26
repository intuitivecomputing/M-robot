import remarkMermaid from './utils/remark-mermaid'

export default defineNuxtConfig({
  extends: ['docus'],
  devtools: { enabled: false },
  // Direction G theme: tokens in main.css, component classes in app.config.ts.
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Doto:wght@900&family=Geist+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&display=swap',
        },
      ],
    },
  },
  content: {
    build: {
      markdown: {
        // Code blocks are dark in both color modes.
        highlight: {
          theme: { default: 'vitesse-dark', light: 'vitesse-dark', dark: 'vitesse-dark' },
        },
      },
    },
  },
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
