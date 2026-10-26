import { useEffect, useRef, useState, useCallback, forwardRef } from "react";
import { Download } from "lucide-react";
import { BUILD_GUIDE_PDF_URL } from "../data/project";

// Build guide sections mapped to page ranges
export const buildGuideSections = [
    { id: "cover", label: "Cover", startPage: 1, endPage: 1 },
    { id: "general-guidance", label: "General Guidance", startPage: 2, endPage: 4 },
    { id: "part-a", label: "Part A: Module Pre-assembly", startPage: 5, endPage: 20 },
    { id: "part-b", label: "Part B: Body Skeleton", startPage: 21, endPage: 34 },
    { id: "part-c", label: "Part C: Head Assembly", startPage: 35, endPage: 44 },
    { id: "part-d", label: "Part D: Pi & Calibration", startPage: 45, endPage: 49 },
    { id: "part-e", label: "Part E: Final Assembly", startPage: 50, endPage: 67 },
];

const TOTAL_PAGES = 67;

interface BuildGuidePageProps {
    onActiveSectionChange?: (sectionId: string) => void;
}

export function BuildGuidePage({ onActiveSectionChange }: BuildGuidePageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [visiblePage, setVisiblePage] = useState(1);

    // Scroll-based page detection — find which page is closest to the trigger line
    useEffect(() => {
        const handleScroll = () => {
            const triggerY = window.innerHeight * 0.3;
            let closestPage = 1;
            let closestDist = Infinity;

            for (let i = 0; i < pageRefs.current.length; i++) {
                const el = pageRefs.current[i];
                if (!el) continue;
                const rect = el.getBoundingClientRect();
                if (rect.bottom > 0 && rect.top < triggerY + rect.height * 0.5) {
                    const dist = Math.abs(rect.top - triggerY);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestPage = i + 1;
                    }
                }
            }

            setVisiblePage((prev) => (prev !== closestPage ? closestPage : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Notify parent of active section
    useEffect(() => {
        const section = buildGuideSections.find(
            (s) => visiblePage >= s.startPage && visiblePage <= s.endPage
        );
        if (section && onActiveSectionChange) {
            onActiveSectionChange(section.id);
        }
    }, [visiblePage, onActiveSectionChange]);

    const scrollToPage = useCallback((pageNum: number) => {
        const ref = pageRefs.current[pageNum - 1];
        if (ref) {
            ref.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="min-h-screen"
            style={{ backgroundColor: "#FBF8EF", fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* Top bar matching home style */}
            <div
                className="flex items-center justify-between px-10 py-4 sticky top-0 z-10"
                style={{
                    borderBottom: "2px dashed rgba(0,0,0,0.08)",
                    backgroundColor: "#FBF8EF",
                }}
            >
                <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4DB6AC" }}></span>
                    <span style={{ fontSize: "var(--text-base-secondary)", color: "#555" }}>build guide</span>
                </div>
                <div className="flex items-center gap-4" style={{ fontSize: "var(--text-base-secondary)", color: "#555" }}>
                    <span>page {visiblePage} / {TOTAL_PAGES}</span>
                    <a
                        href={BUILD_GUIDE_PDF_URL}
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-colors duration-200"
                        style={{
                            fontSize: "var(--text-sm)",
                            fontWeight: 600,
                            color: "#4DB6AC",
                            backgroundColor: "rgba(77,182,172,0.1)",
                            textDecoration: "none",
                        }}
                    >
                        <Download size={13} />
                        PDF
                    </a>
                </div>
            </div>

            {/* Build guide video */}
            <div className="px-6 pt-8 flex flex-col items-center">
                <div
                    className="w-full max-w-[960px] rounded-xl overflow-hidden"
                    style={{ border: "2px dashed rgba(0,0,0,0.06)", backgroundColor: "#000" }}
                >
                    <video
                        className="w-full h-auto block"
                        controls
                        preload="metadata"
                        playsInline
                    >
                        <source
                            src="https://oylwirmyda1655xv.public.blob.vercel-storage.com/M%20Build%20Guide%20Draft%202%20%281%29.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Continuous page display */}
            <div className="px-6 py-8 flex flex-col items-center gap-4">
                {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((pageNum) => (
                    <LazyPage
                        key={pageNum}
                        pageNum={pageNum}
                        ref={(el) => { pageRefs.current[pageNum - 1] = el; }}
                    />
                ))}
            </div>
        </div>
    );
}

// Lazy-loaded page: only renders the image when near the viewport
const LazyPage = forwardRef<HTMLDivElement, { pageNum: number }>(
    function LazyPage({ pageNum }, forwardedRef) {
        const sentinelRef = useRef<HTMLDivElement>(null);
        const [loaded, setLoaded] = useState(pageNum <= 3);

        useEffect(() => {
            if (loaded) return;
            const el = sentinelRef.current;
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setLoaded(true);
                        observer.disconnect();
                    }
                },
                { rootMargin: "600px" }
            );
            observer.observe(el);
            return () => observer.disconnect();
        }, [loaded]);

        return (
            <div
                ref={(el) => {
                    (sentinelRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
                    if (typeof forwardedRef === "function") forwardedRef(el);
                    else if (forwardedRef) forwardedRef.current = el;
                }}
                data-page={pageNum}
                className="w-full max-w-[960px] rounded-xl overflow-hidden"
                style={{
                    border: "2px dashed rgba(0,0,0,0.06)",
                    backgroundColor: "#fff",
                    // Reserve space so scroll position stays stable
                    minHeight: loaded ? undefined : "540px",
                    aspectRatio: loaded ? undefined : "16 / 9",
                }}
            >
                {loaded ? (
                    <img
                        src={`/images/build-guide/page-${pageNum}.webp`}
                        alt={`Build guide page ${pageNum}`}
                        className="w-full h-auto block"
                        decoding="async"
                    />
                ) : (
                    <div
                        className="w-full flex items-center justify-center"
                        style={{ aspectRatio: "16 / 9", color: "#aaa", fontSize: "var(--text-base-secondary)" }}
                    >
                        Page {pageNum}
                    </div>
                )}
            </div>
        );
    }
);

// Export scroll helper for sidebar use
export function getScrollToSection(sectionId: string) {
    const section = buildGuideSections.find((s) => s.id === sectionId);
    return section?.startPage ?? 1;
}
