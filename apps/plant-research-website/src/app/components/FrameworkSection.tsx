interface DesignConsideration {
    title: string;
    description: string;
}

const considerations: DesignConsideration[] = [
    {
        title: "Presence",
        description:
            "Give your robot more than one job. Decoration + function + ritual makes it worth the footprint. Let users tweak behaviors without flashing firmware.",
    },
    {
        title: "Palette",
        description:
            "Don't over-specify gesture meaning. Build in ambiguity. Tune scale and placement so expressions register without demanding attention.",
    },
    {
        title: "Rhythms",
        description:
            "Slow is ambient. Fast is urgent. Stillness is intentional. Use Perlin noise or gradual servo curves to avoid mechanical-looking repetition.",
    },
    {
        title: "Shape",
        description:
            "Soft materials (TPU, silicone) feel organic. Rigid or glossy finishes feel mechanical. Match material to intent — and don't underestimate finishing quality.",
    },
];

export function FrameworkSection() {
    return (
        <section
            id="framework"
            style={{
                backgroundColor: "var(--cream)",
                padding: "6rem 4rem",
            }}
        >
            {/* Section label */}
            <div
                style={{
                    display: "inline-block",
                    border: "1px dashed var(--plant-green-dark)",
                    borderRadius: "999px",
                    padding: "4px 14px",
                    fontSize: "var(--text-sm)",
                    color: "var(--plant-green-dark)",
                    marginBottom: "2.5rem",
                    letterSpacing: "0.05em",
                }}
            >
                06 — Design Guide
            </div>

            {/* Section heading */}
            <h2
                style={{
                    fontSize: "var(--text-2xl-secondary)",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    margin: "0 0 0.75rem 0",
                    lineHeight: 1.2,
                }}
            >
                Builder's Principles
            </h2>
            <p
                style={{
                    fontSize: "var(--text-lg-secondary)",
                    color: "var(--text-medium)",
                    lineHeight: 1.7,
                    margin: "0 0 3rem 0",
                    maxWidth: "640px",
                }}
            >
                Four principles to keep your build feeling ambient, not robotic.
            </p>

            {/* 4-card grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1.5rem",
                }}
            >
                {considerations.map((item, index) => (
                    <div
                        key={item.title}
                        style={{
                            backgroundColor: "#fff",
                            border: "1px solid #e8e8e8",
                            borderTop: "3px solid var(--plant-green)",
                            borderRadius: "12px",
                            padding: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        {/* Card index */}
                        <span
                            style={{
                                fontSize: "var(--text-xs)",
                                fontWeight: 600,
                                color: "var(--plant-green-dark)",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                            }}
                        >
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Card title */}
                        <h3
                            style={{
                                fontSize: "var(--text-xl-secondary)",
                                fontWeight: 700,
                                color: "var(--text-dark)",
                                margin: 0,
                                lineHeight: 1.3,
                            }}
                        >
                            {item.title}
                        </h3>

                        {/* Card description */}
                        <p
                            style={{
                                fontSize: "var(--text-md)",
                                color: "var(--text-medium)",
                                lineHeight: 1.7,
                                margin: 0,
                            }}
                        >
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
