import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    title: "Simulation",
    tags: ["Digital twin", "Web visualizer", "Sim2Real transfer", "URDF model"],
    images: ["/images/M-sim.webp"],
  },
  {
    title: "Multimodal sensing",
    tags: ["Unified architecture", "Expressive channels", "Coordination", "Perceptual cues"],
    images: ["/images/Storyboard.webp"],
  },
];

const components = [
  { name: "Raspberry Pi", description: "onboard single-board computer", location: "head" },
  { name: "ReSpeaker", description: "microphone array + speaker module", location: "head" },
  { name: "Head yaw motor", description: "expressive head rotation", location: "head" },
  { name: "Head pitch motor", description: "pulley-based pitch transmission", location: "body" },
  { name: "PCA9685", description: "centralized servo motor control board", location: "body" },
  { name: "Micro servos (×2)", description: "articulated arm actuation", location: "body" },
  { name: "FMCW radar", description: "privacy-preserving presence detection", location: "extension" },
  { name: "Capacitive touch", description: "contact sensing beneath shell", location: "extension" },
  { name: "ERM vibration motors", description: "localized vibro-tactile feedback", location: "extension" },
];

export function ServicesSection() {
  return (
    <section
      id="capabilities"
      className="py-16 px-10"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Section Header */}
      <h2
        className="text-center mb-12"
        style={{ fontSize: "42px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}
      >
        Features
      </h2>

      {/* Simulation Feature */}
      <div className="mb-8">
        <div
          className="rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center"
          style={{
            backgroundColor: "#FBF8EF",
            border: "2px dashed rgba(0,0,0,0.06)",
          }}
        >
          <div className="flex-1">
            <h3
              className="mb-4"
              style={{ fontSize: "32px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}
            >
              Simulation Environment
            </h3>
            <p
              className="mb-6"
              style={{ fontSize: "var(--text-lg)", color: "#555", lineHeight: 1.6 }}
            >
              M includes a lightweight simulation environment designed to support rapid iteration, safe development, and reproducible transfer of interaction behaviors from simulation to physical deployment. Built with ROS 2, it ensures strict simulation-hardware interface equivalence.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {services[0].tags.map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black/80"></div>
                  <span style={{ fontSize: "var(--text-md)", color: "#1a1a1a", fontWeight: 500 }}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <ImageWithFallback
              src={services[0].images[0]}
              alt="M Simulation Environment"
              className="w-full max-w-md rounded-xl object-cover shadow-sm border border-black/5"
            />
          </div>
        </div>
      </div>

      {/* Multimodal Sensing Feature */}
      <div className="mb-20">
        <div
          className="rounded-xl p-8 flex flex-col gap-8 items-center"
          style={{
            backgroundColor: "#FBF8EF",
            border: "2px dashed rgba(0,0,0,0.06)",
          }}
        >
          <div className="w-full">
            <h3
              className="mb-4 text-center md:text-left"
              style={{ fontSize: "32px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2 }}
            >
              {services[1].title}
            </h3>
            <p
              className="mb-6 text-center md:text-left"
              style={{ fontSize: "var(--text-lg)", color: "#555", lineHeight: 1.6 }}
            >
              Socially intelligent interaction depends on the coordination of multiple perceptual and expressive cues. M integrates various sensing and expressive channels within a unified architecture, enabling investigation of how combinations of expressive behaviors shape engagement and assistance strategies in SAR contexts.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start mb-8">
              {services[1].tags.map((tag) => (
                <div key={tag} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black/80"></div>
                  <span style={{ fontSize: "var(--text-md)", color: "#1a1a1a", fontWeight: 500 }}>
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <ImageWithFallback
              src={services[1].images[0]}
              alt="M Multimodal Sensing Feature"
              className="w-full rounded-xl object-contain shadow-sm border border-black/5"
            />
          </div>
        </div>
      </div>

      {/* Components Table */}
      <div className="mt-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p style={{ fontSize: "var(--text-base-secondary)", color: "#888", marginBottom: "4px" }}>key components</p>
            <p style={{ fontSize: "48px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1 }}>9+</p>
          </div>
          <div className="flex items-center gap-3" style={{ fontSize: "var(--text-base-secondary)", color: "#888" }}>
            <span>head</span>
            <span>→</span>
            <span>body</span>
            <span>→</span>
            <span>extensions</span>
          </div>
        </div>

        <div style={{ borderTop: "2px solid rgba(0,0,0,0.08)" }}>
          {components.map((item) => (
            <div
              key={item.name}
              className="grid grid-cols-[1fr_1fr_90px] gap-4 items-center py-4"
              style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
            >
              <p style={{ fontSize: "var(--text-md)", color: "#1a1a1a", fontWeight: 500 }}>{item.name}</p>
              <p style={{ fontSize: "var(--text-md)", color: "#555" }}>{item.description}</p>
              <p style={{ fontSize: "var(--text-md)", color: "#888", textAlign: "right" }}>{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
