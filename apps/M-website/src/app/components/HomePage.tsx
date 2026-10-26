import { useState, type MouseEvent } from "react";
import {
    AFFILIATIONS,
    ARXIV_URL,
    AUTHORS,
    BIBTEX,
    BUILD_GUIDE_PDF_URL,
    CAD_URL,
    CODE_URL,
    DOCS_URL,
    PAPER_TITLE,
    SIMULATION_DOCS_URL,
    VENUE,
    YEAR,
} from "../data/project";
import { bomCategories, bomCategorySubtotal, bomLineCount, bomTotalCost } from "../data/billOfMaterials";
import { BUILD_GUIDE_PAGES, BUILD_GUIDE_PDF_SIZE, buildGuidePageAnchor } from "../data/buildGuide";
import { pathForPage, type Page } from "../routes";
import { Caption, ChapterRow, Container, ExternalLink, HairlineGrid, Label } from "./layout";
import { YouTubeEmbed } from "./YouTubeEmbed";

/** "ELLA demo short": ELLA, the storytelling robot built on M. */
const ELLA_DEMO_VIDEO_ID = "A2YkZ_pUwIY";

/** Antony et al., "ELLA: Generative AI-Powered Social Robots for Early Language Development at Home", IDC '26. */
const ELLA_PAPER_URL = "https://dl.acm.org/doi/pdf/10.1145/3773077.3806113";

/** Rounded headline price for the tagline; the itemized total is in the bill of materials. */
const TAGLINE_PRICE_USD = 325;

interface HomePageProps {
    onPageChange: (page: Page, anchor?: string) => void;
}

const [TITLE, SUBTITLE] = PAPER_TITLE.split(": ");

const anatomy = [
    'head module: 5" screen, i/o switch, speaker',
    "raspberry pi 5",
    "re-speaker microphone array",
    "customizable face mask",
    "head rotation, neck, nod modules",
    "central frame, pca9685 driver",
    "arms, arm actuators",
    "body shells, camera",
    "body rotation module",
];

// Note the file names: M-red-transparent is the plain pink-and-white shell and
// M-pink-transparent is the red-framed storyteller.
const shells = [
    { name: "simple", image: "/images/M-red-transparent.webp", backdrop: "bg-shell-pink", alt: "M with a plain pink-and-white printed shell", figure: "2a" },
    { name: "green", image: "/images/M-green-transparent.webp", backdrop: "bg-shell-green", alt: "M with a green printed shell", figure: "2b" },
    { name: "storyteller", image: "/images/M-pink-transparent.webp", backdrop: "bg-shell-red", alt: "M as a storyteller with a spiky red face frame and a plush body", figure: "2c" },
];

/** Pages of the build guide shown as plates; each links to its page in the guide. */
const plates = [
    { page: 7, figure: "Plate I.", detail: "a-0-2 · printing batch 2", alt: "Build guide step A-0-2: a printer bed with neck adapters, nod-joint pulleys, and arms" },
    { page: 24, figure: "Plate II.", detail: "b-1-2 · body frame unit", alt: "Build guide step B-1-2: assembling the body frame unit" },
    { page: 40, figure: "Plate III.", detail: "c-3-2 · head switch", alt: "Build guide step C-3-2: gluing a micro switch into the head shell" },
];

/** Camera and audio are add-ons; everything else is needed for a working robot. */
const OPTIONAL_CATEGORIES = new Set(["camera", "audio"]);

const money = (value: number) => value.toFixed(2);

export function HomePage({ onPageChange }: HomePageProps) {
    const go = (page: Page, anchor?: string) => (e: MouseEvent) => {
        e.preventDefault();
        onPageChange(page, anchor);
    };

    return (
        <main>
            <Container className="pt-6">
                <HairlineGrid as="section">
                    <div className="flex min-w-0 grow-[3] basis-[540px] flex-col bg-sheet px-6 pt-14 pb-10 md:px-12 md:pt-18">
                        <Label className="mb-10">
                            {VENUE.toLowerCase()} · {YEAR}
                        </Label>
                        <h1 className="text-[clamp(56px,6.5vw,88px)] leading-[0.95] font-light tracking-[-0.03em]">{TITLE}</h1>
                        <p className="mt-3.5 text-[clamp(26px,3vw,40px)] leading-tight font-light italic">{SUBTITLE}</p>
                        <p className="mt-12 text-xl">
                            {AUTHORS.map((author, i) => (
                                <span key={author.name}>
                                    {author.name}
                                    <sup>
                                        {author.affiliations.join(",")}
                                        {author.equalContribution && "*"}
                                    </sup>
                                    {i < AUTHORS.length - 1 && ", "}
                                </span>
                            ))}
                        </p>
                        <Label small className="mt-1">
                            {AFFILIATIONS.map((affiliation, i) => `${i + 1} ${affiliation.toLowerCase()}`).join(" · ")} · *
                            equal contribution
                        </Label>
                        <div className="mt-auto flex flex-wrap items-center gap-x-7 gap-y-3 pt-10 font-mono text-sm">
                            <a
                                href={ARXIV_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-12 items-center bg-ink px-5 text-white no-underline hover:bg-toned hover:text-white"
                            >
                                read the paper ↗
                            </a>
                            <a href={pathForPage("build-guide")} onClick={go("build-guide")} className="inline-flex min-h-12 items-center">
                                build one →
                            </a>
                        </div>
                    </div>
                    {/* The photo keeps its own proportions; the cell's grey takes up any extra height. */}
                    <figure className="m-0 flex min-w-0 grow-[2] basis-[520px] flex-col justify-end bg-shell-grey">
                        <img
                            src="/images/M-with-monitor-use-case.webp"
                            alt="M, with an orange face frame and its screen showing a friendly face, beside a monitor running an exercise program for older adults"
                            width={2400}
                            height={1668}
                            className="block h-auto w-full"
                        />
                        <figcaption className="flex justify-between gap-3 bg-sheet px-4.5 py-3 font-mono text-xs">
                            <span>m / activity coach, envisioned</span>
                            <span className="text-label">fig. 0</span>
                        </figcaption>
                    </figure>
                </HairlineGrid>
            </Container>

            <section aria-labelledby="build-band-title" className="mt-6 bg-ink text-on-dark">
                <Container className="flex flex-wrap items-end justify-between gap-x-12 gap-y-8 py-16">
                    <h2 id="build-band-title" className="text-[clamp(40px,5.5vw,72px)] leading-[1.02] font-light tracking-[-0.02em]">
                        Build one,
                        <br />
                        then deploy it.
                    </h2>
                    <div>
                        <p className="font-dot text-[clamp(72px,9vw,112px)] leading-[0.9]">
                            {/* Doto draws "~" at cap height; nudge it down to the digits' middle. */}
                            <span aria-hidden="true" className="inline-block translate-y-[0.2em]">
                                ~
                            </span>
                            <span className="sr-only">about </span>${TAGLINE_PRICE_USD}
                        </p>
                        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[13px] text-on-dark-label">
                            <span>usd, in parts</span>
                            <a href={pathForPage("build-guide")} onClick={go("build-guide")} className="text-on-dark hover:text-on-dark">
                                build guide →
                            </a>
                            <a href={pathForPage("bom")} onClick={go("bom")} className="text-on-dark hover:text-on-dark">
                                bill of materials →
                            </a>
                        </p>
                    </div>
                </Container>
            </section>

            <Container className="pt-6">
                <div className="flex flex-col gap-px border border-hairline bg-hairline">
                    <ChapterRow
                        id="preface"
                        number="01"
                        title="Preface"
                        note={
                            <>
                                accepted to ieee ra-l, {YEAR}. preprint:{" "}
                                <a href={ARXIV_URL} target="_blank" rel="noopener noreferrer">
                                    arxiv:2603.19134
                                </a>
                            </>
                        }
                    >
                        <p className="max-w-[700px] text-[23px] leading-normal">
                            M is an open-source, low-cost socially assistive robot platform, designed to reduce the
                            platform friction that slows research by making robots easier to reproduce, modify, and
                            deploy in real-world settings.
                        </p>
                        <p className="mt-5 max-w-[700px]">
                            It combines a modular mechanical design, multimodal sensing, and expressive but mechanically
                            simple actuation with a ROS 2-native software architecture, and has been used in
                            participatory design and week-long in-home deployments.
                        </p>
                    </ChapterRow>

                    <ChapterRow
                        id="form"
                        number="02"
                        title="Form"
                        note="face plates print and attach with magnets. a radar module fits the chest plate."
                    >
                        <p className="max-w-[700px]">
                            Every part of M can be swapped without re-engineering the robot. Five servos give it its
                            expressive range: it turns, nods, looks around, and gestures with both arms.
                        </p>
                        <HairlineGrid className="mt-8">
                            <figure className="m-0 min-w-0 grow-[3] basis-[360px] bg-sheet p-5">
                                <img
                                    src="/images/mechanical-composition.webp"
                                    alt="Exploded view of M: head module, rotation and nod modules, central frame, arms, body shells, and body rotation module"
                                    loading="lazy"
                                    className="block aspect-square w-full object-contain"
                                />
                                <Caption figure="Fig. 1.">exploded view</Caption>
                            </figure>
                            <ol className="m-0 min-w-0 grow-[2] basis-[260px] list-none bg-sheet px-5 py-3 font-mono text-xs leading-snug">
                                {anatomy.map((part, i) => (
                                    <li key={part} className="flex gap-3.5 border-b border-rule py-2.5 last:border-b-0">
                                        <span className="text-label">{String(i + 1).padStart(2, "0")}</span>
                                        <span>{part}</span>
                                    </li>
                                ))}
                            </ol>
                        </HairlineGrid>
                        <HairlineGrid className="mt-6">
                            {shells.map((shell) => (
                                <figure key={shell.name} className={`m-0 flex min-w-0 grow basis-[200px] flex-col ${shell.backdrop}`}>
                                    <div className="flex h-[260px] items-end justify-center pt-4">
                                        <img
                                            src={shell.image}
                                            alt={shell.alt}
                                            loading="lazy"
                                            className="h-[240px] max-w-[90%] object-contain"
                                        />
                                    </div>
                                    <figcaption className="flex justify-between gap-2 bg-sheet px-3.5 py-2.5 font-mono text-xs">
                                        <span>m / {shell.name}</span>
                                        <span className="text-label">fig. {shell.figure}</span>
                                    </figcaption>
                                </figure>
                            ))}
                        </HairlineGrid>
                    </ChapterRow>

                    <ChapterRow
                        id="making"
                        number="03"
                        title="Making"
                        note={
                            <>
                                <a href={pathForPage("build-guide")} onClick={go("build-guide")}>
                                    open the build guide →
                                </a>
                                <br />
                                <a href={BUILD_GUIDE_PDF_URL} download>
                                    build-guide.pdf ↓
                                </a>
                                <br />
                                {BUILD_GUIDE_PAGES} pages · parts a–f
                            </>
                        }
                    >
                        <p className="max-w-[700px]">
                            M is built from 3D-printed PLA, M3 fasteners with heat-set inserts, and off-the-shelf
                            electronics. The illustrated guide walks through module pre-assembly, the body skeleton, the
                            head, the Raspberry Pi and calibration, final assembly, and modular extensions.
                        </p>
                        <HairlineGrid className="mt-8">
                            {plates.map((plate) => {
                                const anchor = buildGuidePageAnchor(plate.page);
                                return (
                                    <figure key={plate.figure} className="m-0 min-w-0 grow basis-[220px] bg-sheet p-3">
                                        <a
                                            href={`${pathForPage("build-guide")}#${anchor}`}
                                            onClick={go("build-guide", anchor)}
                                            className="group relative block"
                                        >
                                            <img
                                                src={`/images/build-guide/page-${plate.page}.webp`}
                                                alt={plate.alt}
                                                loading="lazy"
                                                className="block aspect-video w-full object-cover"
                                            />
                                            <span className="absolute inset-0 flex items-center justify-center bg-ink/75 font-mono text-[13px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                                                go to build guide →
                                            </span>
                                        </a>
                                        <Caption figure={plate.figure}>
                                            {plate.detail} · <span className="whitespace-nowrap">p. {plate.page}</span>
                                        </Caption>
                                    </figure>
                                );
                            })}
                        </HairlineGrid>
                    </ChapterRow>

                    <ChapterRow
                        id="mind"
                        number="04"
                        title="Mind"
                        note={
                            <>
                                ros 2 humble · ubuntu 22.04 ·{" "}
                                <ExternalLink href={CODE_URL}>source</ExternalLink>
                                <br />
                                <ExternalLink href={SIMULATION_DOCS_URL}>simulation guide</ExternalLink>
                            </>
                        }
                    >
                        <p className="max-w-[700px]">
                            M's software is ROS 2-native and cleanly separates perception, expression control, and data
                            management. A simulator with a URDF model and a web visualizer exposes the same interfaces as
                            the hardware, so behaviors move from laptop to robot unchanged.
                        </p>
                        <a
                            href={SIMULATION_DOCS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex min-h-12 items-center bg-ink px-5 font-mono text-sm text-white no-underline hover:bg-toned hover:text-white"
                        >
                            try out the robot in simulation ↗
                        </a>
                        <figure className="m-0 mt-8 border border-hairline">
                            <img
                                src="/images/M-sim.webp"
                                alt="The M simulator: a 3D robot model beside joint-position sliders and face controls"
                                loading="lazy"
                                className="block w-full"
                            />
                            <figcaption className="border-t border-hairline px-3.5 py-2.5 text-base">
                                <span className="italic">Fig. 3.</span>{" "}
                                <span className="font-mono text-xs text-label">simulator · joints and expressions from the browser</span>
                            </figcaption>
                        </figure>
                    </ChapterRow>

                    <ChapterRow
                        id="deployed"
                        number="05"
                        title="Deployed"
                        note={
                            <>
                                ella, a storytelling robot built on m, spent a week in each of ten family homes.
                                <span className="mt-4 block border-t border-rule pt-3 font-serif text-[15px] leading-snug text-ink">
                                    Antony et al. <i>ELLA: Generative AI-Powered Social Robots for Early Language
                                    Development at Home.</i> <span className="whitespace-nowrap">IDC ’26.</span>
                                </span>
                                <ExternalLink href={ELLA_PAPER_URL} className="mt-2 inline-block">
                                    ella paper
                                </ExternalLink>
                            </>
                        }
                    >
                        <p className="max-w-[700px]">
                            M is built to leave the lab. ELLA, a generative-AI storyteller built on M, operated
                            autonomously in family homes, generating personalized stories for each child.
                        </p>
                        {/*
                          The 9:16 video sets the row height; the photo takes the remaining
                          width at that height (cropped toward the people and the robot).
                        */}
                        <div className="mt-8 flex flex-col gap-6 md:flex-row">
                            <figure className="m-0 min-w-0 border border-hairline bg-sheet md:w-[300px] md:shrink-0">
                                <YouTubeEmbed
                                    id={ELLA_DEMO_VIDEO_ID}
                                    title="ELLA demo: storytelling with M"
                                    lazy
                                    className="block aspect-[9/16] w-full bg-ink"
                                />
                                <div className="px-3 pb-3">
                                    <Caption figure="Fig. 4.">ella demo · storytelling on m</Caption>
                                </div>
                            </figure>
                            <figure className="m-0 flex min-w-0 flex-col border border-hairline bg-sheet md:flex-1">
                                {/* Absolutely positioned on wide screens so the photo adds no height of its own. */}
                                <div className="relative md:grow">
                                    <img
                                        src="/images/deployed_sen2.webp"
                                        alt="A parent and child, seen from behind, sitting with M in its plush storyteller shell at the child's desk at home"
                                        loading="lazy"
                                        className="block aspect-[3/4] w-full object-cover object-[50%_65%] md:absolute md:inset-0 md:aspect-auto md:h-full"
                                    />
                                </div>
                                <div className="px-3 pb-3">
                                    <Caption figure="Fig. 5.">in-home deployment</Caption>
                                </div>
                            </figure>
                        </div>
                    </ChapterRow>

                    <ChapterRow
                        id="appendix-a"
                        number="a"
                        title="Bill of materials"
                        note={
                            <>
                                cheapest offers online, excluding shipping.{" "}
                                <a href={pathForPage("bom")} onClick={go("bom")}>
                                    full list →
                                </a>
                            </>
                        }
                    >
                        <div className="flex flex-wrap items-end gap-x-12 gap-y-6">
                            <table className="min-w-0 grow-[2] basis-[380px] border-collapse">
                                <tbody>
                                    {bomCategories.map((category) => (
                                        <tr key={category.id} className="border-b border-rule last:border-b-0">
                                            <th scope="row" className="py-2.5 text-left font-normal">
                                                {category.label}
                                                {OPTIONAL_CATEGORIES.has(category.id) && (
                                                    <span className="text-label italic"> (optional)</span>
                                                )}
                                            </th>
                                            <td className="py-2.5 text-right font-mono text-sm">
                                                {money(bomCategorySubtotal(category))}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="grow basis-[200px] border-t border-ink pt-3">
                                <p className="font-dot text-[72px] leading-[0.9]">${Math.round(bomTotalCost)}</p>
                                <Label small className="mt-2.5">
                                    total · {bomLineCount} line items
                                </Label>
                            </div>
                        </div>
                    </ChapterRow>

                    <section id="appendix-b" className="flex scroll-mt-6 flex-wrap gap-px" aria-labelledby="appendix-b-title">
                        <div className="grow basis-60 bg-sheet px-6 py-8 md:px-7">
                            <Label>b</Label>
                            <h2 id="appendix-b-title" className="mt-1 text-[34px] leading-tight font-normal">
                                Files
                            </h2>
                        </div>
                        <div className="flex min-w-0 grow-[999] basis-[600px] flex-wrap gap-px">
                            <FileCell href={BUILD_GUIDE_PDF_URL} title="Build guide" meta={`pdf · ${BUILD_GUIDE_PAGES} pages · ${BUILD_GUIDE_PDF_SIZE}`} download />
                            <FileCell href={CAD_URL} title="CAD files" meta="every printed part" />
                            <FileCell href={CODE_URL} title="Software" meta="m-robot-codebase · mit" />
                            <FileCell href={DOCS_URL} title="Documentation" meta="api, guides, setup" />
                        </div>
                    </section>

                    <CitationRow />
                </div>
            </Container>
        </main>
    );
}

function FileCell({ href, title, meta, download }: { href: string; title: string; meta: string; download?: boolean }) {
    const external = !download;
    return (
        <a
            href={href}
            download={download || undefined}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="flex min-w-0 grow basis-[220px] justify-between gap-3 bg-sheet p-6 text-ink no-underline hover:bg-chrome hover:text-ink"
        >
            <span>
                <span className="block text-xl">{title}</span>
                <span className="block font-mono text-xs text-label">{meta}</span>
            </span>
            <span aria-hidden="true" className="font-mono">
                {download ? "↓" : "↗"}
            </span>
        </a>
    );
}

function CitationRow() {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard?.writeText(BIBTEX).then(
            () => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
            },
            () => setCopied(false)
        );
    };

    return (
        <section id="appendix-c" className="flex scroll-mt-6 flex-wrap gap-px" aria-labelledby="appendix-c-title">
            <div className="grow basis-60 bg-sheet px-6 py-8 md:px-7">
                <Label>c</Label>
                <h2 id="appendix-c-title" className="mt-1 text-[34px] leading-tight font-normal">
                    Citation
                </h2>
                <button
                    type="button"
                    onClick={copy}
                    className="mt-5 min-h-11 cursor-pointer border border-ink bg-sheet px-4 font-mono text-[13px] text-ink hover:bg-chrome"
                >
                    {copied ? "copied" : "copy bibtex"}
                </button>
            </div>
            <div className="min-w-0 grow-[999] basis-[600px] overflow-x-auto bg-sheet px-6 py-8 md:px-10">
                <pre className="m-0 font-mono text-[13px] leading-relaxed text-ink">{BIBTEX}</pre>
            </div>
        </section>
    );
}
