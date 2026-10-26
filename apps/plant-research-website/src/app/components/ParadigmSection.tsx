export function ParadigmSection() {
    return (
        <section
            id="paradigm"
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
                02 — Why Build This
            </div>

            {/* Split-screen comparison */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "2px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid #e0e0e0",
                    marginBottom: "3rem",
                }}
            >
                {/* Left side: Status quo — muted/neutral */}
                <div
                    style={{
                        backgroundColor: "#f5f5f5",
                        padding: "3rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.25rem",
                    }}
                >
                    <div
                        style={{
                            display: "inline-block",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "999px",
                            padding: "3px 12px",
                            fontSize: "var(--text-xs)",
                            color: "#666",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            alignSelf: "flex-start",
                        }}
                    >
                        Status Quo
                    </div>

                    <h2
                        style={{
                            fontSize: "var(--text-2xl-secondary)",
                            fontWeight: 700,
                            color: "#444",
                            margin: 0,
                            lineHeight: 1.2,
                        }}
                    >
                        Overt &amp; High-Demand
                    </h2>

                    <p
                        style={{
                            fontSize: "var(--text-lg-secondary)",
                            color: "#666",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        Current robots rely on human or animal forms. They interrupt,
                        signal, and demand focus.
                    </p>

                    {/* Visual placeholder — left */}
                    <div
                        style={{
                            marginTop: "1.5rem",
                            aspectRatio: "4 / 3",
                            border: "2px dashed #ccc",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            backgroundColor: "#ebebeb",
                            color: "#999",
                        }}
                    >
                        {/* Humanoid icon */}
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ opacity: 0.5 }}
                        >
                            <circle cx="12" cy="5" r="2" />
                            <path d="M12 7v6" />
                            <path d="M9 10h6" />
                            <path d="M9 17l3 4 3-4" />
                        </svg>
                        <span
                            style={{
                                fontSize: "var(--text-xs)",
                                fontWeight: 500,
                                opacity: 0.6,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            Conventional Robot
                        </span>
                    </div>
                </div>

                {/* Right side: Plant alternative — green accent */}
                <div
                    style={{
                        backgroundColor: "var(--plant-green-pale)",
                        padding: "3rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.25rem",
                    }}
                >
                    <div
                        style={{
                            display: "inline-block",
                            backgroundColor: "var(--plant-green-light)",
                            borderRadius: "999px",
                            padding: "3px 12px",
                            fontSize: "var(--text-xs)",
                            color: "var(--plant-green-dark)",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            alignSelf: "flex-start",
                        }}
                    >
                        The Alternative
                    </div>

                    <h2
                        style={{
                            fontSize: "var(--text-2xl-secondary)",
                            fontWeight: 700,
                            color: "var(--plant-green-dark)",
                            margin: 0,
                            lineHeight: 1.2,
                        }}
                    >
                        Ambient Presence
                    </h2>

                    <p
                        style={{
                            fontSize: "var(--text-lg-secondary)",
                            color: "var(--text-medium)",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        Plants co-exist quietly. They communicate health, time, and
                        atmosphere through slow rhythms and subtle morphology.
                    </p>

                    {/* Visual placeholder — right */}
                    <div
                        style={{
                            marginTop: "1.5rem",
                            aspectRatio: "4 / 3",
                            border: "2px dashed var(--plant-green-light)",
                            borderRadius: "12px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem",
                            backgroundColor: "var(--plant-green-pale)",
                            color: "var(--plant-green-dark)",
                        }}
                    >
                        {/* Plant icon */}
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ opacity: 0.6 }}
                        >
                            <path d="M12 22V12" />
                            <path d="M12 12C12 12 8 9 8 5a4 4 0 0 1 8 0c0 4-4 7-4 7Z" />
                            <path d="M12 12C12 12 16 9 16 5" />
                        </svg>
                        <span
                            style={{
                                fontSize: "var(--text-xs)",
                                fontWeight: 500,
                                opacity: 0.6,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            Plant-Inspired Robot
                        </span>
                    </div>
                </div>
            </div>

            {/* Research question */}
            <div
                style={{
                    borderLeft: "3px solid var(--plant-green)",
                    paddingLeft: "1.5rem",
                    maxWidth: "720px",
                }}
            >
                <p
                    style={{
                        fontSize: "var(--text-xl-secondary)",
                        fontWeight: 600,
                        color: "var(--text-dark)",
                        lineHeight: 1.5,
                        margin: 0,
                        fontStyle: "italic",
                    }}
                >
                    "How do you build a robot that belongs in the background — ambient, expressive, and non-intrusive?"
                </p>
            </div>
        </section>
    );
}
