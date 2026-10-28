// Paper metadata and outbound links, shared by every page so each one only
// changes here. A `null` link isn't available yet and is hidden in the UI.
//
// TODO(release): fill in every value marked TODO(release) before going public.

import { withBase } from "../routes";

export interface Author {
    name: string;
    /** 1-based indices into AFFILIATIONS. */
    affiliations: number[];
    /** Co-first author; marked with an asterisk. */
    equalContribution?: boolean;
    url?: string;
}

export const PAPER_TITLE = "Introducing M: A Modular, Modifiable Social Robot";

export const VENUE = "IEEE Robotics and Automation Letters";
export const VENUE_SHORT = "IEEE RA-L";
export const YEAR = 2026;

export const AUTHORS: Author[] = [
    { name: "Victor Nikhil Antony", affiliations: [1], equalContribution: true },
    { name: "Zhili Gong", affiliations: [2], equalContribution: true },
    { name: "Yoonjae Kim", affiliations: [1] },
    { name: "Chien-Ming Huang", affiliations: [1] },
];

/** Index 0 is superscript 1. */
export const AFFILIATIONS = ["Johns Hopkins University", "Rice University"];

/** Copyright holder; matches the LICENSE in m-robot-files. */
export const COPYRIGHT_HOLDER = "Intuitive Computing Laboratory, Johns Hopkins University";

// TODO(release): IEEE Xplore / DOI link once published. Hidden until set.
export const PAPER_URL: string | null = null;
export const ARXIV_URL = "https://arxiv.org/abs/2603.19134";

// TODO(release): public contact address. The mailto button is hidden until set.
export const CONTACT_EMAIL: string | null = null;

// TODO(release): funding / acknowledgments line for the footer. Hidden until set.
export const ACKNOWLEDGMENTS: string | null = null;

export const CODE_URL = "https://github.com/intuitivecomputing/m-robot-files";
export const ISSUES_URL = `${CODE_URL}/issues`;
export const WEBSITE_REPO_URL = "https://github.com/intuitivecomputing/M-robot";
export const DOCS_URL = "https://intuitivecomputing.github.io/M-robot/docs";
export const SIMULATION_DOCS_URL = `${DOCS_URL}/intro/simulation`;

// TODO(release): point at the GitHub hardware folder / Zenodo DOI once the CAD
// is published there. The review-era Drive folder works in the meantime.
export const CAD_URL =
    "https://drive.google.com/drive/folders/1mZGSkGwyXTsEO5Tp7jAGq5YJjZDiFn0S?usp=sharing";

export const BUILD_GUIDE_PDF_URL = withBase("/downloads/M-build-guide.pdf");

// TODO(release): confirm the hardware and content licenses.
export const LICENSES = {
    software: "MIT",
    hardware: "CERN-OHL-P-2.0",
    content: "CC BY 4.0",
};

// TODO(release): add volume, number, pages, and doi once the RA-L version is out.
export const BIBTEX = `@article{antony${YEAR}introducing,
  title         = {Introducing {M}: A Modular, Modifiable Social Robot},
  author        = {Antony, Victor Nikhil and Gong, Zhili and Kim, Yoonjae and Huang, Chien-Ming},
  journal       = {${VENUE}},
  year          = {${YEAR}},
  eprint        = {2603.19134},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO}
}`;
