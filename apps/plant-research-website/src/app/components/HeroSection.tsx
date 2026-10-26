export function HeroSection() {
    const handleViewPrototypes = () => {
        document.getElementById("prototypes")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                backgroundColor: "var(--cream)",
                display: "flex",
                alignItems: "center",
                padding: "0 4rem",
                gap: "4rem",
            }}
        >
            {/* Text content */}
            <div style={{ flex: 1, maxWidth: "600px" }}>
                {/* Pill badge */}
                <div
                    style={{
                        display: "inline-block",
                        border: "1px dashed var(--plant-green-dark)",
                        borderRadius: "999px",
                        padding: "4px 14px",
                        fontSize: "var(--text-sm)",
                        color: "var(--plant-green-dark)",
                        marginBottom: "2rem",
                        letterSpacing: "0.05em",
                    }}
                >
                    Open Source · Build Guide
                </div>

                {/* Tagline */}
                <h1
                    style={{
                        fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: "var(--text-dark)",
                        margin: "0 0 1.5rem 0",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Build.{" "}
                    <span style={{ color: "var(--plant-green-dark)" }}>Iterate.</span>{" "}
                    Express.
                </h1>

                {/* Subtext */}
                <p
                    style={{
                        fontSize: "var(--text-xl-secondary)",
                        color: "var(--text-medium)",
                        lineHeight: 1.6,
                        margin: "0 0 1rem 0",
                        fontStyle: "italic",
                    }}
                >
                    Plant-inspired robots you can actually build — open source, documented, and ready to iterate.
                </p>

                {/* Description */}
                <p
                    style={{
                        fontSize: "var(--text-lg-secondary)",
                        color: "var(--text-light)",
                        lineHeight: 1.7,
                        margin: "0 0 2.5rem 0",
                    }}
                >
                    Real mechanisms. Real materials. Open-source files for ambient, expressive robots.
                </p>

                {/* CTA buttons */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <button
                        onClick={handleViewPrototypes}
                        style={{
                            backgroundColor: "var(--plant-green-dark)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            padding: "0.75rem 1.75rem",
                            fontSize: "var(--text-md)",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                        ((e.target as HTMLButtonElement).style.backgroundColor =
                            "var(--plant-green)")
                        }
                        onMouseLeave={(e) =>
                        ((e.target as HTMLButtonElement).style.backgroundColor =
                            "var(--plant-green-dark)")
                        }
                    >
                        Browse Builds
                    </button>

                    <a
                        href="https://doi.org/10.1145/3757279.3785645"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            border: "2px solid var(--plant-green-dark)",
                            color: "var(--plant-green-dark)",
                            borderRadius: "8px",
                            padding: "0.75rem 1.75rem",
                            fontSize: "var(--text-md)",
                            fontWeight: 600,
                            textDecoration: "none",
                            fontFamily: "inherit",
                            transition: "background-color 0.2s ease, color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.backgroundColor = "var(--plant-green-dark)";
                            el.style.color = "#fff";
                        }}
                        onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLAnchorElement;
                            el.style.backgroundColor = "transparent";
                            el.style.color = "var(--plant-green-dark)";
                        }}
                    >
                        Open Source Files
                    </a>
                </div>
            </div>

            {/* Hero visual placeholder */}
            <div
                style={{
                    flex: 1,
                    maxWidth: "500px",
                    aspectRatio: "4 / 5",
                    border: "2px dashed var(--plant-green-light)",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    backgroundColor: "var(--plant-green-pale)",
                    color: "var(--plant-green-dark)",
                }}
            >
                <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ opacity: 0.5 }}
                >
                    <path d="M12 22V12" />
                    <path d="M12 12C12 12 8 9 8 5a4 4 0 0 1 8 0c0 4-4 7-4 7Z" />
                    <path d="M12 12C12 12 16 9 16 5" />
                </svg>
                <span
                    style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: 500,
                        opacity: 0.6,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                    }}
                >
                    Hero Visual
                </span>
            </div>
        </section>
    );
}
