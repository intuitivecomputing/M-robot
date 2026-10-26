import { Github, Mail } from "lucide-react";
import {
  ACKNOWLEDGMENTS,
  CAD_URL,
  CODE_URL,
  CONTACT_EMAIL,
  COPYRIGHT_HOLDER,
  DOCS_URL,
  LICENSES,
  ARXIV_URL,
  PAPER_URL,
  WEBSITE_REPO_URL,
  YEAR,
} from "../data/project";
import { pathForPage } from "../routes";

const footerLinks: { label: string; href: string | null; external: boolean }[] = [
  { label: "Code", href: CODE_URL, external: true },
  { label: "Paper", href: PAPER_URL, external: true },
  { label: "arXiv", href: ARXIV_URL, external: true },
  { label: "Build Guide", href: pathForPage("build-guide"), external: false },
  { label: "Bill of Materials", href: pathForPage("bom"), external: false },
  { label: "CAD", href: CAD_URL, external: true },
  { label: "Docs", href: DOCS_URL, external: true },
];

export function FooterSection() {
  return (
    <footer
      className="px-10 py-16"
      style={{
        backgroundColor: "#1a1a1a",
        fontFamily: "'DM Sans', sans-serif",
        borderTop: "3px dashed rgba(255,255,255,0.1)",
      }}
    >
      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand message */}
          <div>
            <h2 className="text-white mb-6" style={{ fontSize: "36px", fontWeight: 800, lineHeight: 1.1 }}>
              open hardware.<br />open software.<br />open research.
            </h2>
            <a
              href={CODE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-full cursor-pointer hover:scale-105 transition-transform"
              style={{
                backgroundColor: "#FFB433",
                color: "#1a1a1a",
                fontSize: "var(--text-base-secondary)",
                fontWeight: 600,
                border: "2px dashed rgba(0,0,0,0.1)",
                textDecoration: "none",
              }}
            >
              view on GitHub
            </a>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <div className="flex flex-col gap-1.5">
              {footerLinks
                .filter((link) => link.href)
                .map((link) => (
                  <a
                    key={link.label}
                    href={link.href!}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-white hover:opacity-70 transition-opacity"
                    style={{ fontSize: "var(--text-md)", textDecoration: "none" }}
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>

          {/* Contact + license */}
          <div className="space-y-6">
            <div>
              <p className="text-white mb-3" style={{ fontSize: "var(--text-md)", fontWeight: 600 }}>
                get in touch
              </p>
              {CONTACT_EMAIL && (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-white/80 hover:text-white transition-colors"
                  style={{ fontSize: "var(--text-base-secondary)", textDecoration: "none" }}
                >
                  {CONTACT_EMAIL}
                </a>
              )}
              <div className="flex items-center gap-3 mt-3">
                <a href={CODE_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={18} color="white" className="opacity-60 hover:opacity-100 transition-opacity" />
                </a>
                {CONTACT_EMAIL && (
                  <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Email">
                    <Mail size={18} color="white" className="opacity-60 hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>
            <div>
              <p className="text-white/60" style={{ fontSize: "var(--text-base-secondary)", lineHeight: 1.6 }}>
                software: {LICENSES.software}
                <br />
                hardware: {LICENSES.hardware}
                <br />
                docs &amp; media: {LICENSES.content}
              </p>
              <a
                href={WEBSITE_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-white/60 hover:text-white transition-colors"
                style={{ fontSize: "var(--text-base-secondary)" }}
              >
                website source
              </a>
            </div>
          </div>
        </div>

        {/* Acknowledgments */}
        {ACKNOWLEDGMENTS && (
          <p className="mt-12 text-white/50 text-center mx-auto max-w-[700px]" style={{ fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
            {ACKNOWLEDGMENTS}
          </p>
        )}

        {/* Bottom */}
        <div className="mt-12 pt-6 text-center" style={{ borderTop: "2px dashed rgba(255,255,255,0.1)" }}>
          <p className="text-white/40" style={{ fontSize: "var(--text-base-secondary)" }}>
            © {YEAR} {COPYRIGHT_HOLDER} · M: open-source socially assistive robotics platform
          </p>
        </div>
      </div>
    </footer>
  );
}
