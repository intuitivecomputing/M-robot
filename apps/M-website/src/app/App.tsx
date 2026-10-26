import { useState, useEffect, useRef, useCallback, lazy, Suspense } from "react";
import { Sidebar } from "./components/Sidebar";
import { HeroSection } from "./components/HeroSection";
import { LazySection } from "./components/LazySection";
import { BuildGuidePage, buildGuideSections } from "./components/BuildGuidePage";
import { BillOfMaterialPage } from "./components/BillOfMaterialPage";
import { CadBanner } from "./components/CadBanner";
import { pageForPath, pathForPage, type Page } from "./routes";

const AboutSection = lazy(() =>
  import("./components/AboutSection").then((m) => ({ default: m.AboutSection }))
);
const ServicesSection = lazy(() =>
  import("./components/ServicesSection").then((m) => ({ default: m.ServicesSection }))
);
const UseCasesSection = lazy(() =>
  import("./components/UseCasesSection").then((m) => ({ default: m.UseCasesSection }))
);
const CitationSection = lazy(() =>
  import("./components/CitationSection").then((m) => ({ default: m.CitationSection }))
);
const ContactSection = lazy(() =>
  import("./components/ContactSection").then((m) => ({ default: m.ContactSection }))
);
const FooterSection = lazy(() =>
  import("./components/FooterSection").then((m) => ({ default: m.FooterSection }))
);

export default function App() {
  const [activePage, setActivePage] = useState<Page>(() =>
    pageForPath(window.location.pathname)
  );
  const [activeSection, setActiveSection] = useState("hero");
  const [buildGuideActiveSection, setBuildGuideActiveSection] = useState("cover");
  const isClickScrolling = useRef(false);
  const buildGuidePageRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Intersection Observer to track active section (home page)
  useEffect(() => {
    if (activePage !== "home") return;

    const sectionIds = ["hero", "what-is-m", "capabilities", "use-cases", "cite", "contact"];

    const handleIntersect = () => {
      if (isClickScrolling.current) return;

      const viewportHeight = window.innerHeight;
      const triggerY = viewportHeight * 0.3;

      let closest = sectionIds[0];
      let closestDist = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - triggerY);
        if (rect.top <= triggerY + viewportHeight * 0.5 && dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      });

      setActiveSection(closest);
    };

    window.addEventListener("scroll", handleIntersect, { passive: true });
    handleIntersect();

    return () => {
      window.removeEventListener("scroll", handleIntersect);
    };
  }, [activePage]);

  const handleNavClick = useCallback((section: string) => {
    setActiveSection(section);
    isClickScrolling.current = true;

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1200);
    }
  }, []);

  // Keep the URL in sync so every page is directly linkable and the
  // browser's back/forward buttons work.
  const handlePageChange = useCallback((page: Page) => {
    setActivePage(page);
    const path = pathForPage(page);
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(pageForPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Normalize aliases (/bom, trailing slashes) to the canonical path.
  useEffect(() => {
    const path = pathForPage(activePage);
    if (window.location.pathname !== path) {
      window.history.replaceState({}, "", path);
    }
  }, [activePage]);

  const handleBuildGuideSectionClick = useCallback((sectionId: string) => {
    const section = buildGuideSections.find((s) => s.id === sectionId);
    if (!section) return;
    if (activePage !== "build-guide") {
      handlePageChange("build-guide");
      // Wait for page to render before scrolling
      requestAnimationFrame(() => {
        const pageEl = document.querySelector(`[data-page="${section.startPage}"]`);
        if (pageEl) {
          const top = pageEl.getBoundingClientRect().top + window.scrollY - 60;
          window.scrollTo({ top, behavior: "smooth" });
        }
      });
      return;
    }
    const pageEl = document.querySelector(`[data-page="${section.startPage}"]`);
    if (pageEl) {
      const top = pageEl.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [activePage, handlePageChange]);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        backgroundColor: "#FBF8EF",
      }}
    >
      <Sidebar
        activeSection={activeSection}
        onNavClick={handleNavClick}
        activePage={activePage}
        onPageChange={handlePageChange}
        buildGuideActiveSection={buildGuideActiveSection}
        onBuildGuideSectionClick={handleBuildGuideSectionClick}
      />

      <main
        className="ml-[300px]"
        style={{
          backgroundColor: "#FBF8EF",
          minHeight: "100vh",
        }}
      >
        <CadBanner />

        {activePage === "home" ? (
          <>
            <HeroSection onPageChange={handlePageChange} />

            <LazySection
              style={{ borderTop: "3px dashed rgba(0,0,0,0.06)" }}
              minHeight="600px"
              rootMargin="300px"
            >
              <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
                <AboutSection />
              </Suspense>
            </LazySection>

            <LazySection
              style={{ borderTop: "3px dashed rgba(0,0,0,0.06)" }}
              minHeight="600px"
              rootMargin="300px"
            >
              <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
                <ServicesSection />
              </Suspense>
            </LazySection>

            <LazySection
              style={{ borderTop: "3px dashed rgba(0,0,0,0.06)" }}
              minHeight="600px"
              rootMargin="300px"
            >
              <Suspense fallback={<div style={{ minHeight: "600px" }} />}>
                <UseCasesSection onPageChange={handlePageChange} />
              </Suspense>
            </LazySection>

            <LazySection
              style={{ borderTop: "3px dashed rgba(0,0,0,0.06)" }}
              minHeight="400px"
              rootMargin="300px"
            >
              <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
                <CitationSection />
              </Suspense>
            </LazySection>

            <LazySection
              style={{ borderTop: "3px dashed rgba(0,0,0,0.06)" }}
              minHeight="500px"
              rootMargin="300px"
            >
              <Suspense fallback={<div style={{ minHeight: "500px" }} />}>
                <ContactSection />
              </Suspense>
            </LazySection>

            <LazySection minHeight="300px" rootMargin="300px">
              <Suspense fallback={<div style={{ minHeight: "300px" }} />}>
                <FooterSection />
              </Suspense>
            </LazySection>
          </>
        ) : activePage === "build-guide" ? (
          <BuildGuidePage onActiveSectionChange={setBuildGuideActiveSection} />
        ) : (
          <BillOfMaterialPage />
        )}
      </main>
    </div>
  );
}
