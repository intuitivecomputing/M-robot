// Build guide structure: sections mapped to page ranges of the PDF export.

import { withBase } from "../routes";

export interface BuildGuideSection {
    id: string;
    label: string;
    startPage: number;
    endPage: number;
}

export const buildGuideSections: BuildGuideSection[] = [
    { id: "cover", label: "Cover", startPage: 1, endPage: 1 },
    { id: "general-guidance", label: "Guidance", startPage: 2, endPage: 4 },
    { id: "part-a", label: "A · Modules", startPage: 5, endPage: 20 },
    { id: "part-b", label: "B · Body skeleton", startPage: 21, endPage: 34 },
    { id: "part-c", label: "C · Head", startPage: 35, endPage: 44 },
    { id: "part-d", label: "D · Pi & calibration", startPage: 45, endPage: 50 },
    { id: "part-e", label: "E · Final assembly", startPage: 51, endPage: 67 },
    { id: "part-f", label: "F · Extensions", startPage: 68, endPage: 74 },
];

export const BUILD_GUIDE_PAGES = 74;

export const BUILD_GUIDE_PDF_SIZE = "11.2 mb";

/** Walkthrough video for the whole build. */
export const BUILD_GUIDE_VIDEO_ID = "kGQFsK9_U2o";

/** Videos overlaid on pages the PDF leaves blank for them. */
export const BUILD_GUIDE_PAGE_VIDEOS: Record<number, { id: string; title: string }> = {
    50: { id: "7ZhQXwmetBc", title: "Servo initialization" },
};

export const buildGuidePageImage = (pageNum: number) => withBase(`/images/build-guide/page-${pageNum}.webp`);

/** Anchor for one page of the guide, e.g. /build-guide#page-24. */
export const buildGuidePageAnchor = (pageNum: number) => `page-${pageNum}`;
