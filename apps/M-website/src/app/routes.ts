export type Page = "home" | "build-guide" | "bom";

const PATH_BY_PAGE: Record<Page, string> = {
    home: "/",
    "build-guide": "/build-guide",
    bom: "/bill-of-materials",
};

const PAGE_BY_PATH: Record<string, Page> = {
    "": "home",
    "/": "home",
    "/build-guide": "build-guide",
    "/bill-of-materials": "bom",
    // Older/alternate spellings people may have bookmarked or been sent.
    "/bom": "bom",
    "/bill-of-material": "bom",
    "/buildguide": "build-guide",
};

export const pathForPage = (page: Page): string => PATH_BY_PAGE[page];

export const pageForPath = (pathname: string): Page => {
    const normalized = pathname.replace(/\/+$/, "").toLowerCase();
    return PAGE_BY_PATH[normalized] ?? "home";
};

/** Fallback for non-browser contexts; the live origin wins when available. */
export const SITE_ORIGIN = "https://m-website-taupe.vercel.app";

export const canonicalUrlForPage = (page: Page): string => {
    const origin =
        typeof window === "undefined" ? SITE_ORIGIN : window.location.origin;
    return `${origin}${pathForPage(page)}`;
};
