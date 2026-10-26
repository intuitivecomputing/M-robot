import { useState } from "react";
import { BIBTEX } from "../data/project";

export function CitationSection() {
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
    <section
      id="cite"
      className="py-16 px-10"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-[860px] mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p style={{ fontSize: "13px", color: "#888", marginBottom: "6px", letterSpacing: "0.05em" }}>
              using M in your research?
            </p>
            <h2 style={{ fontSize: "42px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.1 }}>
              Cite M
            </h2>
          </div>
          <button
            onClick={copy}
            className="px-5 py-2 rounded-full cursor-pointer transition-colors duration-200"
            style={{
              fontSize: "var(--text-base-secondary)",
              fontWeight: 600,
              color: copied ? "#fff" : "#1a1a1a",
              backgroundColor: copied ? "#4DB6AC" : "#FFB433",
              border: "2px dashed rgba(0,0,0,0.12)",
            }}
          >
            {copied ? "Copied" : "Copy BibTeX"}
          </button>
        </div>

        {/* BibTeX */}
        <pre
          className="rounded-2xl p-6 overflow-x-auto"
          style={{
            backgroundColor: "#fff",
            border: "2px dashed rgba(0,0,0,0.08)",
            fontSize: "var(--text-sm)",
            lineHeight: 1.6,
            color: "#1a1a1a",
          }}
        >
          <code>{BIBTEX}</code>
        </pre>
      </div>
    </section>
  );
}
