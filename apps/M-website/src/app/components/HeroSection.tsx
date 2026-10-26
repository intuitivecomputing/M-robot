import { BookOpen, Box, FileText, Github, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  AFFILIATIONS,
  ARXIV_URL,
  AUTHORS,
  CAD_URL,
  CODE_URL,
  DOCS_URL,
  PAPER_TITLE,
  PAPER_URL,
  VENUE_SHORT,
  YEAR,
} from "../data/project";
import { pathForPage, type Page } from "../routes";

const pillStyle = {
  backgroundColor: "#FBF8EF",
  color: "#1a1a1a",
  fontSize: "var(--text-base-secondary)",
  fontWeight: 600,
  border: "2px dashed rgba(0,0,0,0.15)",
};

/** An external resource link; renders nothing until the URL exists. */
function ResourcePill({ href, icon, label }: { href: string | null; icon: ReactNode; label: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all hover:scale-105"
      style={{ ...pillStyle, textDecoration: "none" }}
    >
      {icon}
      {label}
    </a>
  );
}

interface HeroSectionProps {
  onPageChange: (page: Page) => void;
}

export function HeroSection({ onPageChange }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-10 py-4" style={{ borderBottom: "2px dashed rgba(0,0,0,0.08)" }}>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4DB6AC" }}></span>
          <span style={{ fontSize: "var(--text-base-secondary)", color: "#555" }}>open source</span>
        </div>
        <div className="flex items-center gap-3" style={{ fontSize: "var(--text-base-secondary)", color: "#555" }}>
          <span>ROS 2 · modular · low-cost</span>
        </div>
      </div>

      {/* Hero content */}
      <div className="flex-1 flex flex-col items-center justify-center px-10 py-16 relative w-full">
        {/* Floating Images (Left) */}
        <div className="absolute left-[5%] xl:left-[10%] top-1/2 -translate-y-1/2 hidden md:block -rotate-6 transition-all hover:scale-105 hover:-rotate-12 duration-300 pointer-events-none z-10">
          <ImageWithFallback
            src="/images/M-pink-transparent.webp"
            alt="M Robot Pink Floating"
            className="w-auto h-[200px] lg:h-[280px] opacity-90 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] pointer-events-auto"
            loading="lazy"
          />
        </div>

        {/* Floating Images (Right) */}
        <div className="absolute right-[5%] xl:right-[10%] top-1/2 -translate-y-1/2 hidden md:block rotate-6 transition-all hover:scale-105 hover:rotate-12 duration-300 pointer-events-none z-10">
          <ImageWithFallback
            src="/images/M-green-transparent.webp"
            alt="M Robot Green Floating"
            className="w-auto h-[200px] lg:h-[280px] opacity-90 drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] pointer-events-auto"
            loading="lazy"
          />
        </div>

        <div className="text-center max-w-[700px] z-20 relative">
          {/* Venue badge */}
          <span
            className="inline-block mb-6 px-3 py-1 rounded-full"
            style={{ backgroundColor: "#1a1a1a", color: "#FBF8EF", fontSize: "var(--text-sm)", fontWeight: 600 }}
          >
            {VENUE_SHORT} {YEAR}
          </span>

          {/* Big typography */}
          <div style={{ lineHeight: 0.95, letterSpacing: "-2px" }}>
            <div className="flex items-center justify-center gap-2" style={{ fontSize: "clamp(150px, 8vw, 90px)", fontWeight: 900, color: "#1a1a1a" }}>
              <span>meet</span>
            </div>
            <div className="flex items-center justify-center gap-3" style={{ fontSize: "clamp(200px, 8vw, 90px)", fontWeight: 900, color: "#4DB6AC" }}>
              <span className="relative inline-block">
                M
                <span
                  className="absolute inline-flex flex-col items-center justify-center rounded-full"
                  style={{
                    top: "clamp(0px, 1.5vw, 18px)",
                    right: "clamp(-30px, -3vw, -20px)",
                    width: "clamp(40px, 5vw, 64px)",
                    height: "clamp(40px, 5vw, 64px)",
                    backgroundColor: "#FBF8EF",
                    border: "2px dashed #1a1a1a",
                    color: "#4DB6AC",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    lineHeight: 1.1,
                  }}
                >
                  <span style={{ fontSize: "clamp(8px, 1.2vw, 12px)", fontWeight: 600 }}>open</span>
                  <span style={{ fontSize: "clamp(10px, 1.5vw, 16px)", fontWeight: 800 }}>src</span>
                </span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            <p className="text-center max-w-[350px]" style={{ fontSize: "clamp(18px, 1.45vw, 23px)", color: "#666", lineHeight: 1.5 }}>
              An open-source, modular robotics platform for socially assistive research — designed to leave the lab.
            </p>
          </div>

          {/* Paper */}
          <div className="mt-8">
            <p style={{ fontSize: "var(--text-md)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.4 }}>
              {PAPER_TITLE}
            </p>
            <p className="mt-3" style={{ fontSize: "var(--text-base-secondary)", color: "#555", lineHeight: 1.6 }}>
              {AUTHORS.map((author, i) => (
                <span key={author.name}>
                  {author.url ? (
                    <a href={author.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {author.name}
                    </a>
                  ) : (
                    author.name
                  )}
                  <sup>
                    {AFFILIATIONS.length > 1 && author.affiliations.join(",")}
                    {author.equalContribution && "*"}
                  </sup>
                  {i < AUTHORS.length - 1 && ", "}
                </span>
              ))}
            </p>
            <p className="mt-1" style={{ fontSize: "var(--text-sm)", color: "#888" }}>
              {AFFILIATIONS.map((affiliation, i) => (
                <span key={affiliation}>
                  {AFFILIATIONS.length > 1 && <sup>{i + 1}</sup>}
                  {affiliation}
                  {i < AFFILIATIONS.length - 1 && " · "}
                </span>
              ))}
              {AUTHORS.some((author) => author.equalContribution) && " · *equal contribution"}
            </p>
          </div>

          {/* Resource links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <ResourcePill href={PAPER_URL} icon={<FileText size={15} />} label="Paper" />
            <ResourcePill href={ARXIV_URL} icon={<FileText size={15} />} label="arXiv" />
            <ResourcePill href={CODE_URL} icon={<Github size={15} />} label="Code" />
            <ResourcePill href={CAD_URL} icon={<Box size={15} />} label="CAD" />
            <a
              href={pathForPage("build-guide")}
              onClick={(e) => {
                e.preventDefault();
                onPageChange("build-guide");
              }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all hover:scale-105"
              style={{ ...pillStyle, textDecoration: "none" }}
            >
              <Wrench size={15} />
              Build Guide
            </a>
          </div>

          {/* CTA */}
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3 rounded-full cursor-pointer transition-all hover:scale-105"
            style={{
              backgroundColor: "#FFB433",
              color: "#1a1a1a",
              fontSize: "var(--text-lg-secondary)",
              fontWeight: 600,
              border: "2px dashed rgba(0,0,0,0.12)",
              textDecoration: "none",
            }}
          >
            <BookOpen size={18} />
            Explore the Platform
          </a>
        </div>
      </div>

      {/* Featured Project */}
      <div className="px-10 pb-10">
        <div className="relative rounded-2xl overflow-hidden" style={{ border: "3px dashed rgba(0,0,0,0.1)" }}>
          <div
            className="absolute bottom-4 left-4 px-3 py-1 rounded-sm z-10"
            style={{
              backgroundColor: "#FBF8EF",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              border: "2px dashed rgba(0,0,0,0.1)",
            }}
          >
            Imagined Use Case: M as a Physical Activity Coach for Older Adults
          </div>
          <ImageWithFallback
            src="/images/M-with-monitor-use-case.webp"
            alt="M robot with monitor"
            className="w-full h-[650px] object-cover"
            loading="eager"
            decoding="auto"
          />
        </div>
      </div>
    </section>
  );
}
