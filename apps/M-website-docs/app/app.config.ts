// Callout label shared by every callout color: a mono word above the text,
// in place of Nuxt UI's colored icon and tinted background.
const calloutBase = [
  'border-default bg-default text-default dark:text-default',
  '[&_a]:text-primary [&_code]:text-highlighted dark:[&_code]:text-highlighted [&_code]:border-0',
  // Code blocks keep their dark band inside callouts too.
  '[&_pre]:bg-(--g-code-bg) [&_pre_code]:text-[#e6e6e8]',
].join(' ')

export default defineAppConfig({
  header: {
    title: 'M Platform',
  },
  seo: {
    title: 'M Platform',
    description: 'Documentation for M, an open-source, modular, low-cost socially assistive robot platform for reproducible SAR research (IEEE RA-L 2026).',
  },
  // No "Edit this page" / "Report an issue" links or header GitHub icon. Set to
  // false explicitly: left unset, Docus infers the repo from git and adds them
  // back. The code repo is linked from the header and footer components instead.
  github: false,
  // Direction G, matching the project site. Colors, fonts, and radius are
  // tokens in assets/css/main.css; these classes reshape the components.
  ui: {
    header: {
      slots: {
        root: 'bg-(--g-chrome)/90',
        title: 'font-normal text-base',
      },
    },
    // The docs columns become white cells on hairlines, as on the site. Docus
    // nests two UPages (navigation | page, then content | table of contents),
    // so each level is styled through its own left/right combination. The
    // navigation slot lands on the sticky aside itself (not a full-height
    // wrapper), so the outer grid is painted white and the divider is drawn on
    // the content column instead of showing through a gap.
    page: {
      compoundVariants: [
        {
          left: true,
          right: false,
          class: {
            root: 'lg:gap-0 lg:bg-default lg:border lg:border-default lg:mt-6',
            left: 'lg:px-5',
            center: 'lg:border-s lg:border-default',
          },
        },
        {
          left: false,
          right: true,
          class: {
            root: 'lg:gap-px lg:bg-(--ui-border)',
            center: 'bg-default px-4 sm:px-6 lg:px-12 pb-12',
            right: 'lg:bg-default lg:px-5',
          },
        },
        {
          left: false,
          right: false,
          class: {
            center: 'bg-default px-4 sm:px-6 lg:px-12 pb-12',
          },
        },
      ],
    },
    pageAside: {
      slots: {
        root: 'lg:ps-0 lg:ms-0 lg:pe-0',
      },
    },
    pageHeader: {
      slots: {
        headline: 'font-mono font-normal text-xs text-muted lowercase',
        title: 'font-light text-5xl sm:text-6xl tracking-tight',
        description: 'italic text-xl text-toned',
      },
    },
    contentNavigation: {
      slots: {
        trigger: 'font-mono font-normal text-xs text-muted lowercase',
        link: 'text-base',
        linkLeadingIcon: 'hidden',
      },
      defaultVariants: {
        color: 'neutral',
      },
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'link',
          active: true,
          class: { link: 'text-highlighted font-medium before:bg-muted' },
        },
      ],
    },
    contentToc: {
      slots: {
        root: 'lg:me-0 lg:px-0',
        trigger: 'font-mono font-normal text-xs text-muted lowercase',
        link: 'text-[15px]',
      },
      defaultVariants: {
        color: 'neutral',
        highlightColor: 'neutral',
      },
    },
    contentSurround: {
      slots: {
        link: 'bg-default',
        linkLeading: 'rounded-none',
        linkTitle: 'text-lg font-normal',
        linkDescription: 'font-mono text-xs',
      },
    },
    footer: {
      slots: {
        root: 'mt-12 bg-[#121114] dark:bg-[#0a0a0b]',
      },
    },
    prose: {
      h1: { slots: { base: 'font-light text-5xl tracking-tight' } },
      h2: { slots: { base: 'font-normal text-3xl tracking-tight' } },
      h3: { slots: { base: 'font-normal text-2xl' } },
      h4: { slots: { base: 'font-normal text-xl' } },
      p: { base: 'text-lg leading-8' },
      li: { base: 'text-lg leading-8' },
      a: { base: 'font-normal border-primary/40' },
      code: { base: 'font-normal rounded-none border-0 bg-muted text-[0.85em]' },
      pre: {
        slots: {
          base: 'rounded-none border-(--g-code-border) bg-(--g-code-bg) text-[#e6e6e8]',
          header: 'rounded-none border-(--g-code-border) bg-(--g-code-header)',
          filename: 'font-mono text-xs text-[#a3a3a8]',
        },
      },
      callout: {
        slots: {
          base: 'text-base leading-7 before:block before:mb-1 before:font-mono before:text-xs before:text-muted',
          icon: 'hidden',
        },
        variants: {
          color: {
            primary: { base: `${calloutBase} before:content-['note']` },
            secondary: { base: `${calloutBase} before:content-['note']` },
            neutral: { base: `${calloutBase} before:content-['note']` },
            info: { base: `${calloutBase} before:content-['note']` },
            success: { base: `${calloutBase} before:content-['tip']` },
            warning: { base: `${calloutBase} border-inverted before:content-['warning'] before:text-highlighted` },
            error: { base: `${calloutBase} border-inverted before:content-['caution'] before:text-highlighted` },
          },
        },
      },
      th: { base: 'bg-muted font-mono font-normal text-xs text-muted lowercase border-default' },
      td: { base: 'text-base border-default' },
    },
  },
})
