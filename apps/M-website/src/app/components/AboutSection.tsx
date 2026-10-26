import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { value: "5 DOF", label: "degrees of freedom for expressive movement", bg: "#FBF8EF", text: "#4DB6AC", border: "rgba(0,0,0,0.08)" },
  { value: "ROS 2", label: "open-source robotics middleware", bg: "#FBF8EF", text: "#4DB6AC", border: "rgba(0,0,0,0.08)" },
  { value: "100%", label: "open-source hardware and software", bg: "#FBF8EF", text: "#4DB6AC", border: "rgba(0,0,0,0.08)" },
];

const testimonials = [
  {
    name: "Modular by Design",
    role: "hardware",
    images: ["/images/mechanical-composition.webp"],
    text: "Swap sensors and shells, update components without re-engineering the whole robot. Radar for privacy-preserving presence detection? fits into the chest plate. Custom face plate? Print and attach magnetically.",
  },
  {
    name: "Built to Deploy",
    role: "field-ready",
    images: ["/images/deployed_sen2.webp"],
    text: "M is for research in and beyond the lab. It's designed for weeks-long, in-the-wild deployments with real users. Simple cable management, tool-free access panels, and privacy-aware sensing.",
  },
  {
    name: "Open and Reproducible",
    role: "community",
    images: ["/images/M-sim.webp"],
    text: "Fully open-source hardware and software. Documented designs, standard components, clear interfaces. Reproducibility at the core.",
  },
];

export function AboutSection() {
  return (
    <section
      id="what-is-m"
      className="py-16 px-10"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Stats & Video Compartment */}
      <div 
        className="max-w-[1060px] mx-auto mb-20 p-10 rounded-[2.5rem]"
        style={{  
          border: "3px dashed rgba(77, 182, 172, 0.15)"
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Video (Left) */}
          <div className="flex justify-center relative group">
            <video
              src="https://oylwirmyda1655xv.public.blob.vercel-storage.com/IDC-demo-trimmed-ELLA.mp4"
              autoPlay
              loop
              muted
              controls
              playsInline
              className="rounded-[2rem] relative z-10 transition-transform duration-300 group-hover:-translate-y-2 w-full"
              style={{ 
                maxHeight: "520px", 
                objectFit: "cover", 
                border: "3px dashed rgba(0,0,0,0.08)"
              }}
            />
          </div>

          {/* Stats (Right) */}
          <div className="flex flex-col gap-6 justify-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2 hover:rotate-1"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `3px dashed rgba(0,0,0,0.08)`,
                  boxShadow: "0 4px 20px -10px rgba(0,0,0,0.05)"
                }}
              >
                <p style={{ fontSize: "48px", fontWeight: 800, color: stat.text, lineHeight: 1 }}>{stat.value}</p>
                <p className="mt-3 font-medium" style={{ fontSize: "18px", color: "#1a1a1a", lineHeight: 1.4, opacity: 0.85 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Header */}
      <h2 className="text-center mb-12" style={{ fontSize: "38px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}>
        Why M?
      </h2>

      {/* Accordion + Image Layout */}
      <WhyMAccordion />

      {/* Use Case Cards */}
      <UseCaseCards />
    </section>
  );
}

const useCases = [
  {
    tag: "Research Platform",
    title: "Your next HRI study, ready to go.",
    description:
      "Whether it be a controlled lab study or a multi-week field deployment, M is ready to be your next go-to platform for HRI.",
    image: "/images/M-green.webp",
  },
  {
    tag: "Expressive",
    title: "Rich Characters. Expressive Stories.",
    description:
      "M supports rich customization of its embodiment. M can be an expressive robot storyteller for children, embodying different characters.",
    image: "/images/M-red.webp",
  },
  {
    tag: "Smart Monitor",
    title: "Ambient awareness, zero cameras.",
    description:
      "With radar-based presence detection, M can monitor a space without compromising privacy.",
    image: "/images/M-pink.webp",
  },
];

function UseCaseCards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="mt-20">
      {/* Header row */}
      <div className="flex items-end justify-between mb-8">
        <h2 style={{ fontSize: "38px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}>
          M can be what{" "}
          <span style={{ color: "#4DB6AC" }}>you</span>{" "}
          want.
        </h2>
        {/* Navigation arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: "#f0f0f0", border: "none" }}
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
            style={{ backgroundColor: "#f0f0f0", border: "none" }}
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {useCases.map((uc, i) => (
          <div
            key={i}
            className="use-case-card flex-shrink-0 rounded-2xl flex flex-col justify-between overflow-hidden"
            style={{
              width: "calc(33.333% - 14px)",
              minWidth: "280px",
              scrollSnapAlign: "start",
            }}
          >
            {/* Text content */}
            <div className="p-7">
              <p style={{ fontSize: "var(--text-base-secondary)", fontWeight: 600, color: "#4DB6AC", marginBottom: "8px" }}>
                {uc.tag}
              </p>
              <h3 style={{ fontSize: "var(--text-xl-secondary)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.25, marginBottom: "10px" }}>
                {uc.title}
              </h3>
              <p style={{ fontSize: "var(--text-md)", color: "#666", lineHeight: 1.6 }}>
                {uc.description}
              </p>
            </div>
            {/* Large image */}
            <div className="flex items-end justify-center px-6 pt-2 pb-0" style={{ height: "280px" }}>
              <ImageWithFallback
                src={uc.image}
                alt={uc.tag}
                className="max-h-full object-contain"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function WhyMAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [imageIndices, setImageIndices] = useState<number[]>(testimonials.map(() => 0));
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setImageIndex = (tabIndex: number, imgIndex: number) => {
    setImageIndices((prev) => {
      const next = [...prev];
      next[tabIndex] = imgIndex;
      return next;
    });
  };

  const handleTabChange = (i: number) => {
    setActiveIndex(i);
    // reset image index when switching tabs
    setImageIndices((prev) => {
      const next = [...prev];
      next[i] = 0;
      return next;
    });
  };

  const currentImages = testimonials[activeIndex].images;
  const currentImageIndex = imageIndices[activeIndex];

  return (
    <div
      className="max-w-[960px] mx-auto flex flex-col md:flex-row gap-10 items-center rounded-2xl p-10"
      style={{ backgroundColor: "#FBF8EF", border: "2px dashed rgba(0,0,0,0.08)" }}
    >
      {/* Left: Accordion */}
      <div className="flex-1 min-w-0">
        {testimonials.map((t, i) => {
          const isActive = activeIndex === i;
          const measuredHeight = contentRefs.current[i]?.scrollHeight ?? 0;

          return (
            <div key={i}>
              <button
                onClick={() => handleTabChange(i)}
                className="w-full flex items-center justify-between py-5 cursor-pointer text-left"
                aria-expanded={isActive}
                aria-controls={`whym-panel-${i}`}
              >
                <span
                  style={{
                    fontSize: "clamp(20px, 1.5vw, 24px)",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    lineHeight: 1.2,
                  }}
                >
                  {t.name}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  style={{
                    transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 250ms ease",
                    flexShrink: 0,
                    marginLeft: "12px",
                  }}
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#888"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                id={`whym-panel-${i}`}
                role="region"
                ref={(el) => { contentRefs.current[i] = el; }}
                style={{
                  height: isActive ? `${measuredHeight}px` : "0px",
                  opacity: isActive ? 1 : 0,
                  overflow: "hidden",
                  transition: "height 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease",
                }}
              >
                <p
                  className="pb-5"
                  style={{
                    fontSize: "var(--text-lg-secondary)",
                    color: "#555",
                    lineHeight: 1.7,
                    maxWidth: "380px",
                  }}
                >
                  {t.text}
                </p>
              </div>

              {i < testimonials.length - 1 && (
                <div style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.08)" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Right: Image with dot navigation */}
      <div className="flex-1 min-w-0 flex flex-col items-center gap-4">
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ maxWidth: "420px", aspectRatio: "4 / 3" }}
        >
          {currentImages.map((src, imgIdx) => (
            <ImageWithFallback
              key={`${activeIndex}-${imgIdx}`}
              src={src}
              alt={`${testimonials[activeIndex].name} ${imgIdx + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              style={{
                opacity: currentImageIndex === imgIdx ? 1 : 0,
                transition: "opacity 400ms ease",
              }}
            />
          ))}

          {/* Prev / Next arrows (only if multiple images) */}
          {currentImages.length > 1 && (
            <>
              <button
                onClick={() => setImageIndex(activeIndex, (currentImageIndex - 1 + currentImages.length) % currentImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.8)", border: "none" }}
                aria-label="Previous image"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => setImageIndex(activeIndex, (currentImageIndex + 1) % currentImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: "rgba(255,255,255,0.8)", border: "none" }}
                aria-label="Next image"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dot indicators */}
        {currentImages.length > 1 && (
          <div className="flex items-center gap-2">
            {currentImages.map((_, imgIdx) => (
              <button
                key={imgIdx}
                onClick={() => setImageIndex(activeIndex, imgIdx)}
                className="cursor-pointer"
                style={{
                  width: currentImageIndex === imgIdx ? "20px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: currentImageIndex === imgIdx ? "#4DB6AC" : "rgba(0,0,0,0.15)",
                  border: "none",
                  padding: 0,
                  transition: "width 250ms ease, background-color 250ms ease",
                }}
                aria-label={`Go to image ${imgIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
