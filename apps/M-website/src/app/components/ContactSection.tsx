import { CONTACT_EMAIL, DOCS_URL, ISSUES_URL } from "../data/project";

const linkButtonStyle = {
  fontSize: "var(--text-md)",
  fontWeight: 600,
  textDecoration: "none",
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-10"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Contact - Envelope style */}
      <div className="max-w-[650px] mx-auto">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#FBF8EF",
            border: "3px dashed rgba(0,0,0,0.1)",
          }}
        >
          {/* Content */}
          <div className="p-10">
            <h2 className="text-center mb-6" style={{ fontSize: "38px", fontWeight: 800, color: "#1a1a1a" }}>
              Interested in M?
            </h2>

            <p className="text-center mx-auto mb-8 max-w-[460px]" style={{ fontSize: "var(--text-md)", color: "#555", lineHeight: 1.6 }}>
              questions about building or using M, found a bug, or built something with it?
              we'd love to hear from you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {CONTACT_EMAIL && (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform"
                  style={{
                    ...linkButtonStyle,
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    border: "2px dashed rgba(255,255,255,0.2)",
                  }}
                >
                  email the team
                </a>
              )}
              <a
                href={ISSUES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform"
                style={{
                  ...linkButtonStyle,
                  backgroundColor: CONTACT_EMAIL ? "transparent" : "#1a1a1a",
                  color: CONTACT_EMAIL ? "#1a1a1a" : "white",
                  border: CONTACT_EMAIL ? "2px dashed rgba(0,0,0,0.2)" : "2px dashed rgba(255,255,255,0.2)",
                }}
              >
                open a GitHub issue
              </a>
              <a
                href={DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform"
                style={{
                  ...linkButtonStyle,
                  color: "#1a1a1a",
                  border: "2px dashed rgba(0,0,0,0.2)",
                }}
              >
                read the docs
              </a>
            </div>
          </div>

          {/* Envelope flap decoration */}
          <div
            className="relative h-[200px]"
            style={{
              background: "linear-gradient(135deg, #FFB433 0%, #4DB6AC 50%, #FFB433 100%)",
            }}
          >
            {/* Envelope triangle */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 50% 60%, 100% 0, 100% 100%, 0 100%)",
                backgroundColor: "#4DB6AC",
                opacity: 0.6,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(0 0, 50% 45%, 100% 0)",
                backgroundColor: "#B4EBE6",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
