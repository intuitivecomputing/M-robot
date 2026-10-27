import remarkMermaid from './utils/remark-mermaid'

// "/" in dev; "/M-robot/docs/" on GitHub Pages (set by scripts/build-pages.sh).
const baseURL = process.env.NUXT_APP_BASE_URL || '/'

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
        // Docus links /favicon.ico, ignoring the base path; this one comes
        // later in the head, so browsers use it.
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon.svg`, tagPriority: 'low' },
      ],
      // Every page shares the project site's preview image (generated OG images
      // are off below).
      meta: [
        { property: 'og:image', content: 'https://intuitivecomputing.github.io/M-robot/og-image.jpg' },
      ],
    },
  },
  // Docus generates a per-page OG image in its own template. Its URL comes out
  // with the base path twice under a base URL, so it's off.
  ogImage: { enabled: false },
  // Images are already sized WebPs. The default IPX provider resolves the base
  // path twice under a base URL and the image 404s.
  image: { provider: 'none' },
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
  // Public URL for canonical links and llms.txt. Docus appends page paths to it
  // directly, so it includes the base path; nuxt-site-config warns about that,
  // harmlessly. The sitemap reads it from NUXT_SITE_URL (scripts/build-pages.sh).
  site: {
    url: 'https://intuitivecomputing.github.io/M-robot/docs',
    name: 'M Platform',
  },
  // A robots.txt only counts at a domain root, and the docs live under a path.
  robots: { robotsTxt: false },
  llms: {
    domain: 'https://intuitivecomputing.github.io/M-robot/docs',
  },
  routeRules: {
    '/': { redirect: `${baseURL}intro` },
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
