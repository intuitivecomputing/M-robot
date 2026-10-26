interface Imaginary {
    title: string;
    description: string;
}

const imaginaries: Imaginary[] = [
    {
        title: "Emotional Mirrors",
        description:
            "Pair two builds on the same network. One sways → the other mirrors it. A simple sensor + servo + WiFi loop.",
    },
    {
        title: "Ambient Wellness",
        description:
            "Attach a leaf module to a lamp base. Droop angle tracks time-of-day via a scheduled servo curve.",
    },
    {
        title: "Habit Gardens",
        description:
            "One plant per habit. Hook into your activity API. Upright = goal hit. Drooped = skipped. No screen needed.",
    },
];

const quote = {
    text: "It wouldn't react or frown on me... how a robot with a face would.",
    attribution: "User Workshop — on why plant-like non-reactivity matters",
};

export function ImaginariesSection() {
    return (
        <section
            id="imaginaries"
            style={{
                backgroundColor: "#1a1a1a",
                padding: "6rem 4rem",
            }}
        >
            {/* Section label */}
            <div
                style={{
                    display: "inline-block",
                    border: "1px dashed var(--plant-green)",
                    borderRadius: "999px",
                    padding: "4px 14px",
                    fontSize: "var(--text-sm)",
                    color: "var(--plant-green-light)",
                    marginBottom: "2.5rem",
                    letterSpacing: "0.05em",
                }}
            >
                05 — Applications
            </div>

            {/* Section heading */}
            <h2
                style={{
                    fontSize: "var(--text-2xl-secondary)",
                    fontWeight: 700,
                    color: "var(--dark-text)",
                    margin: "0 0 0.75rem 0",
                    lineHeight: 1.2,
                }}
            >
                What You Can Build
            </h2>

            {/* Intro line */}
            <p
                style={{
                    fontSize: "var(--text-lg-secondary)",
                    color: "#a0a0a0",
                    lineHeight: 1.7,
                    margin: "0 0 4rem 0",
                    maxWidth: "640px",
                }}
            >
                Real use cases generated through user workshops. Each one is buildable with the components above.
            </p>

            {/* Concept cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1.5rem",
                    marginBottom: "4rem",
                }}
            >
                {imaginaries.map((item, index) => (
                    <div
                        key={item.title}
                        style={{
                            backgroundColor: "#2a2a2a",
                            borderRadius: "12px",
                            border: "1px solid var(--plant-green-dark)",
                            borderTop: "3px solid var(--plant-green)",
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
                                color: "var(--plant-green)",
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
                                color: "var(--dark-text)",
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
                                color: "#c0c0c0",
                                lineHeight: 1.7,
                                margin: 0,
                            }}
                        >
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Participant quote block */}
            <blockquote
                style={{
                    margin: 0,
                    borderLeft: "4px solid var(--plant-green)",
                    paddingLeft: "2rem",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    backgroundColor: "#222",
                    borderRadius: "0 8px 8px 0",
                    maxWidth: "680px",
                }}
            >
                <p
                    style={{
                        fontSize: "var(--text-xl-secondary)",
                        fontStyle: "italic",
                        color: "var(--dark-text)",
                        lineHeight: 1.6,
                        margin: "0 0 0.75rem 0",
                    }}
                >
                    "{quote.text}"
                </p>
                <cite
                    style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--plant-green-light)",
                        fontStyle: "normal",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                    }}
                >
                    — {quote.attribution}
                </cite>
            </blockquote>
        </section>
    );
}
