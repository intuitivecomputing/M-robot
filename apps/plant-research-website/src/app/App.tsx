import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { Sidebar } from "./components/Sidebar";
import { LazySection } from "./components/LazySection";

const HeroSection = lazy(() =>
    import("./components/HeroSection").then((m) => ({ default: m.HeroSection }))
);
const ParadigmSection = lazy(() =>
    import("./components/ParadigmSection").then((m) => ({ default: m.ParadigmSection }))
);
const PrimitivesSection = lazy(() =>
    import("./components/PrimitivesSection").then((m) => ({ default: m.PrimitivesSection }))
);
const PrototypesSection = lazy(() =>
    import("./components/PrototypesSection").then((m) => ({ default: m.PrototypesSection }))
);
const ImaginariesSection = lazy(() =>
    import("./components/ImaginariesSection").then((m) => ({ default: m.ImaginariesSection }))
);
const FrameworkSection = lazy(() =>
    import("./components/FrameworkSection").then((m) => ({ default: m.FrameworkSection }))
);
const FooterSection = lazy(() =>
    import("./components/FooterSection").then((m) => ({ default: m.FooterSection }))
);

const sectionIds = [
    "hero",
    "paradigm",
    "primitives",
    "prototypes",
    "imaginaries",
    "framework",
    "footer",
];

export default function App() {
    const [activeSection, setActiveSection] = useState("hero");
    const isClickScrolling = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isClickScrolling.current) return;

            const triggerY = window.innerHeight * 0.3;

            let closest = sectionIds[0];
            let closestDist = Infinity;

            sectionIds.forEach((id) => {
                const el = document.getElementById(id);
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const dist = Math.abs(rect.top - triggerY);
                if (rect.top <= triggerY + window.innerHeight * 0.5 && dist < closestDist) {
                    closestDist = dist;
                    closest = id;
                }
            });

            setActiveSection(closest);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavClick = useCallback((section: string) => {
        setActiveSection(section);
        isClickScrolling.current = true;

        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        setTimeout(() => {
            isClickScrolling.current = false;
        }, 1000);
    }, []);

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: "#FBF8EF" }}>
            <Sidebar activeSection={activeSection} onNavClick={handleNavClick} />

            <main className="ml-[300px]" style={{ backgroundColor: "#FBF8EF", minHeight: "100vh" }}>
                <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
                    <HeroSection />
                </Suspense>

                <LazySection rootMargin="300px" minHeight="600px">
                    <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
                        <ParadigmSection />
                    </Suspense>
                </LazySection>

                <LazySection rootMargin="300px" minHeight="600px">
                    <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
                        <PrimitivesSection />
                    </Suspense>
                </LazySection>

                <LazySection rootMargin="300px" minHeight="600px">
                    <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
                        <PrototypesSection />
                    </Suspense>
                </LazySection>

                <LazySection rootMargin="300px" minHeight="600px">
                    <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
                        <ImaginariesSection />
                    </Suspense>
                </LazySection>

                <LazySection rootMargin="300px" minHeight="600px">
                    <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
                        <FrameworkSection />
                    </Suspense>
                </LazySection>

                <LazySection rootMargin="300px" minHeight="300px">
                    <Suspense fallback={<div style={{ minHeight: "300px" }} />}>
                        <FooterSection />
                    </Suspense>
                </LazySection>
            </main>
        </div>
    );
}
