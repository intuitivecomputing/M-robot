import { motion, AnimatePresence } from "motion/react";
import { Github, Mail } from "lucide-react";
import { buildGuideSections } from "./BuildGuidePage";
import { CODE_URL, CONTACT_EMAIL, DOCS_URL, YEAR } from "../data/project";
import type { Page } from "../routes";

interface SidebarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
  activePage: Page;
  onPageChange: (page: Page) => void;
  buildGuideActiveSection?: string;
  onBuildGuideSectionClick?: (sectionId: string) => void;
}

const navItems = [
  { id: "hero", label: "Meet M", number: "01" },
  { id: "what-is-m", label: "What is M", number: "02" },
  { id: "capabilities", label: "Capabilities", number: "03" },
  { id: "use-cases", label: "Use Cases", number: "04" },
  { id: "cite", label: "Cite", number: "05" },
  { id: "contact", label: "Contact", number: "06" },
];

const expandedContent: Record<string, { tag: string; title: string; description: string; extras?: { type: string; items?: string[] } }> = {
  hero: {
    tag: "the platform",
    title: "meet M",
    description: "an open-source social robot for assistive research.",
  },
  "what-is-m": {
    tag: "the robot",
    title: "what is M",
    description: "modular, low-cost, and built for real-world deployment.",
  },
  capabilities: {
    tag: "the system",
    title: "",
    description: "mechanical design, software, simulation, and sensing.",
    extras: { type: "path", items: ["design", "build", "deploy"] },
  },
  "use-cases": {
    tag: "in action",
    title: "use cases",
    description: "storytelling, conversation, ambient awareness, and touch.",
  },
  cite: {
    tag: "the paper",
    title: "cite M",
    description: "BibTeX for the IEEE RA-L paper.",
  },
  contact: {
    tag: "+ you",
    title: "get involved",
    description: "join the open-source community building M.",
  },
};

export function Sidebar({
  activeSection,
  onNavClick,
  activePage,
  onPageChange,
  buildGuideActiveSection,
  onBuildGuideSectionClick,
}: SidebarProps) {
  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-[280px] flex flex-col z-50"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        margin: "10px",
        height: "calc(100vh - 20px)",
        width: "270px",
        borderRadius: "18px",
        border: "none",
        overflow: "hidden",
        boxShadow: "none",
      }}
    >
      {/* Main sidebar area */}
      <div
        className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"
        style={{
          backgroundColor: "#4DB6AC",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        {/* Tab switcher replacing the 3 dots */}
        <div
          className="flex items-center gap-2 mb-6 p-1.5 rounded-xl"
          style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
        >
          <button
            onClick={() => onPageChange("home")}
            className="flex-1 px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200"
            style={{
              backgroundColor: activePage === "home" ? "#FFB433" : "transparent",
              fontSize: "13px",
              fontWeight: 600,
              color: activePage === "home" ? "#1a1a1a" : "#666",
            }}
          >
            Home
          </button>
          <button
            onClick={() => onPageChange("build-guide")}
            className="flex-1 px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200"
            style={{
              backgroundColor: activePage === "build-guide" ? "#FFB433" : "transparent",
              fontSize: "13px",
              fontWeight: 600,
              color: activePage === "build-guide" ? "#1a1a1a" : "#666",
            }}
          >
            Build Guide
          </button>
        </div>

        {/* Nav Items — conditional on active page */}
        <AnimatePresence mode="wait">
          {activePage === "home" ? (
            <motion.nav
              key="home-nav"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-1.5"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => onNavClick(item.id)}
                      className="w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-all duration-200 cursor-pointer"
                      style={{
                        backgroundColor: isActive ? "#FFB433" : "#B4EBE6",
                        border: "2px dashed rgba(0,0,0,0.15)",
                        color: "#1a1a1a",
                      }}
                    >
                      <span style={{ fontSize: "var(--text-md)", fontWeight: 600 }}>{item.label}</span>
                      <span
                        className="inline-flex items-center justify-center rounded-full"
                        style={{
                          width: "26px",
                          height: "26px",
                          backgroundColor: isActive ? "#FBF8EF" : "#FFB433",
                          fontSize: "var(--text-xs)",
                          fontWeight: 600,
                        }}
                      >
                        {item.number}
                      </span>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isActive && expandedContent[item.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-3 pt-3 pb-2">
                            <div className="flex items-center gap-2 mb-1.5">
                              <div className="flex items-center gap-1">
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#B4EBE6" }}></div>
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#FFB433" }}></div>
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#000000" }}></div>
                              </div>
                              <span className="text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: "#1a1a1a", fontSize: "var(--text-xs)" }}>
                                {expandedContent[item.id].tag}
                              </span>
                            </div>
                            <p className="text-white" style={{ fontSize: "var(--text-md)", fontWeight: 600 }}>
                              {expandedContent[item.id].title}
                            </p>
                            <p className="text-white/80" style={{ fontSize: "var(--text-sm)", lineHeight: 1.4 }}>
                              {expandedContent[item.id].description}
                            </p>
                            {expandedContent[item.id].extras?.type === "path" && (
                              <div className="mt-2">
                                <p className="text-white/60 mb-1" style={{ fontSize: "var(--text-xs)" }}>path to success:</p>
                                <div className="flex items-center gap-1.5 flex-wrap">
                                  {expandedContent[item.id].extras?.items?.map((step, index, arr) => (
                                    <span key={index} className="flex items-center gap-1">
                                      <span
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{
                                          backgroundColor: index === 0 ? "#FFB433" : index === 1 ? "#B4EBE6" : "#000000",
                                        }}
                                      ></span>
                                      <span className="text-white/80" style={{ fontSize: "var(--text-xs)" }}>
                                        {step}
                                      </span>
                                      {index < arr.length - 1 && (
                                        <span className="text-white/50 mx-0.5" style={{ fontSize: "var(--text-xs)" }}>→</span>
                                      )}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.nav>
          ) : (
            <motion.nav
              key="guide-nav"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-1.5"
            >
              {buildGuideSections.map((section, idx) => {
                const isActive = buildGuideActiveSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => onBuildGuideSectionClick?.(section.id)}
                    className="w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: isActive ? "#FFB433" : "#B4EBE6",
                      border: "2px dashed rgba(0,0,0,0.15)",
                      color: "#1a1a1a",
                    }}
                  >
                    <span style={{ fontSize: "var(--text-base-secondary)", fontWeight: 600 }}>{section.label}</span>
                    <span
                      className="inline-flex items-center justify-center rounded-full"
                      style={{
                        width: "26px",
                        height: "26px",
                        backgroundColor: isActive ? "#FBF8EF" : "#FFB433",
                        fontSize: "11px",
                        fontWeight: 600,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}

            </motion.nav>
          )}
        </AnimatePresence>

        {/* Bill of Materials — always visible, on every page */}
        <div className="mt-3 pt-3" style={{ borderTop: "2px dashed rgba(255,255,255,0.3)" }}>
          <button
            onClick={() => onPageChange("bom")}
            className="w-full text-left px-3 py-2 rounded-md flex items-center justify-between transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: activePage === "bom" ? "#FFB433" : "#B4EBE6",
              border: "2px dashed rgba(0,0,0,0.15)",
              color: "#1a1a1a",
            }}
          >
            <span style={{ fontSize: "var(--text-base-secondary)", fontWeight: 600 }}>
              Bill of Materials
            </span>
            <span
              className="inline-flex items-center justify-center rounded-full"
              style={{
                width: "26px",
                height: "26px",
                backgroundColor: activePage === "bom" ? "#FBF8EF" : "#FFB433",
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              $
            </span>
          </button>
          <p className="text-white/70 mt-1.5 px-1" style={{ fontSize: "var(--text-xs)" }}>
            every part, price and vendor link
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <div className="mt-4">
          <p className="text-white mb-3" style={{ fontSize: "clamp(14px, 1vw, 16px)", fontWeight: 700, lineHeight: 1.3 }}>
            explore the open-source<br />platform
          </p>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2.5 rounded-full text-white cursor-pointer"
            style={{
              backgroundColor: "#1a1a1a",
              border: "2px dashed rgba(255,255,255,0.3)",
              fontSize: "var(--text-base-secondary)",
              fontWeight: 500,
              textDecoration: "none"
            }}
          >
            view docs
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="py-3 flex items-center justify-between"
        style={{
          backgroundColor: "#FBF8EF",
          borderTop: "2px dashed rgba(0,0,0,0.1)",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <span style={{ fontSize: "var(--text-sm)", color: "#555" }}>©{YEAR} Intuitive Computing Lab</span>
        <div className="flex items-center gap-2">
          <a href={CODE_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={14} color="#555" />
          </a>
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
              <Mail size={14} color="#555" />
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
