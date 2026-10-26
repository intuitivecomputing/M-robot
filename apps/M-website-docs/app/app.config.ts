export default defineAppConfig({
  header: {
    title: 'M Platform',
  },
  seo: {
    title: 'M Platform',
    description: 'Documentation for M, an open-source, modular, low-cost socially assistive robot platform for reproducible SAR research (IEEE RA-L 2026).',
  },
  // Header/footer GitHub icon and "Edit this page" links. Set explicitly because
  // the docs live in a monorepo subfolder and Vercel CLI deploys don't include
  // git metadata.
  github: {
    owner: 'intuitivecomputing',
    name: 'M-website',
    url: 'https://github.com/intuitivecomputing/M-website',
    branch: 'main',
    rootDir: 'apps/M-website-docs',
  },
})
