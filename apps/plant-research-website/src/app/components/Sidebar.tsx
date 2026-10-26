import { ExternalLink } from "lucide-react";

interface SidebarProps {
    activeSection: string;
    onNavClick: (section: string) => void;
}

const navItems = [
    { id: "hero", label: "Overview", number: "01" },
    { id: "paradigm", label: "Why Build This", number: "02" },
    { id: "primitives", label: "Components", number: "03" },
    { id: "prototypes", label: "Reference Builds", number: "04" },
    { id: "imaginaries", label: "Applications", number: "05" },
    { id: "framework", label: "Design Guide", number: "06" },
    { id: "footer", label: "Credits", number: "07" },
];

export function Sidebar({ activeSection, onNavClick }: SidebarProps) {
    return (
        <aside
            style={{
                position: "fixed",
                left: "10px",
                top: "10px",
                bottom: "10px",
                width: "270px",
                borderRadius: "18px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                zIndex: 50,
                fontFamily: "'DM Sans', sans-serif",
            }}
        >
            {/* Main sidebar area */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#2E7D32",
                    paddingTop: "24px",
                    paddingBottom: "16px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    overflowY: "auto",
                }}
            >
                {/* Logo / Title */}
                <div style={{ marginBottom: "24px" }}>
                    <p
                        style={{
                            fontSize: "var(--text-xs)",
                            color: "rgba(255,255,255,0.6)",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginBottom: "4px",
                        }}
                    >
                        Open Source
                    </p>
                    <p
                        style={{
                            fontSize: "var(--text-md)",
                            color: "#ffffff",
                            fontWeight: 700,
                            lineHeight: 1.3,
                        }}
                    >
                        Plant-Inspired<br />Robot Design
                    </p>
                </div>

                {/* Nav Items */}
                <nav style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onNavClick(item.id)}
                                style={{
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "8px 12px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                    border: "2px dashed rgba(255,255,255,0.2)",
                                    backgroundColor: isActive ? "rgba(255,255,255,0.18)" : "transparent",
                                    transition: "background-color 0.2s ease",
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: "var(--text-md)",
                                        fontWeight: isActive ? 700 : 500,
                                        color: isActive ? "#ffffff" : "rgba(255,255,255,0.75)",
                                    }}
                                >
                                    {item.label}
                                </span>
                                <span
                                    style={{
                                        width: "26px",
                                        height: "26px",
                                        borderRadius: "50%",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        backgroundColor: isActive ? "#A5D6A7" : "rgba(255,255,255,0.15)",
                                        fontSize: "var(--text-xs)",
                                        fontWeight: 600,
                                        color: isActive ? "#1a1a1a" : "rgba(255,255,255,0.7)",
                                        flexShrink: 0,
                                    }}
                                >
                                    {item.number}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                {/* Spacer */}
                <div style={{ flex: 1 }} />

                {/* CTA */}
                <div style={{ marginTop: "16px" }}>
                    <p
                        style={{
                            fontSize: "var(--text-md)",
                            fontWeight: 700,
                            color: "#ffffff",
                            lineHeight: 1.3,
                            marginBottom: "12px",
                        }}
                    >
                        Get the open-source<br />build files
                    </p>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            padding: "8px 16px",
                            borderRadius: "999px",
                            backgroundColor: "#1a1a1a",
                            border: "2px dashed rgba(255,255,255,0.3)",
                            fontSize: "var(--text-base-secondary)",
                            fontWeight: 500,
                            color: "#ffffff",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        Get Files
                        <ExternalLink size={13} />
                    </a>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    backgroundColor: "#1B5E20",
                    borderTop: "2px dashed rgba(255,255,255,0.15)",
                    padding: "10px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <span
                    style={{
                        fontSize: "var(--text-sm)",
                        color: "rgba(255,255,255,0.6)",
                    }}
                >
                    © 2026 Intuitive Computing Lab
                </span>
                <a
                    href="https://doi.org/10.1145/3757279.3785645"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center" }}
                    aria-label="DOI link"
                >
                    <ExternalLink size={13} />
                </a>
            </div>
        </aside>
    );
}
