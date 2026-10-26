interface Primitive {
    title: string;
    mechanism: string;
    expressivity: string;
    insight: string;
}

const primitives: Primitive[] = [
    {
        title: "The Leaf",
        mechanism: "String-driven, 3D-printed TPU (flexible)",
        expressivity: "Wilting, perking, unfurling",
        insight: "Print in TPU. Route a string through the spine. Tension = gesture. Release = spring-back.",
    },
    {
        title: "The Stem",
        mechanism: "Concentric bellow system (TPU/PET-G), rack-and-pinion base",
        expressivity: "Leaning, bowing, swaying",
        insight: "Adapt concentric bellows from soft robotics. Rack-and-pinion base enables precise, near-silent bending.",
    },
    {
        title: "The Pot",
        mechanism: "Rotational and translational movement bases",
        expressivity: "Orientation, locomotion",
        insight: "Rotate the base to shift the entire plant's lean. Add wheels for locomotion — movement becomes expression.",
    },
    {
        title: "Actuation",
        mechanism: "Stepper motors with TMC2209 drivers",
        expressivity: "Silent, precise motion",
        insight: "Use steppers with TMC2209 drivers for near-silent microstepping. Servo jitter breaks the ambient effect.",
    },
];

export function PrimitivesSection() {
    return (
        <section
            id="primitives"
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
                03 — Components
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
                The Build Blocks
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
                Four core components — leaf, stem, pot, and actuation — each specced and tested. Mix and match to build your own plant robot.
            </p>

            {/* 4-card grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1.5rem",
                }}
            >
                {primitives.map((primitive, index) => (
                    <div
                        key={primitive.title}
                        style={{
                            backgroundColor: "#fff",
                            border: "1px solid #e8e8e8",
                            borderRadius: "16px",
                            padding: "1.75rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.25rem",
                        }}
                    >
                        {/* Visual placeholder */}
                        <div
                            style={{
                                aspectRatio: "4 / 3",
                                border: "2px dashed var(--plant-green-light)",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "var(--plant-green-pale)",
                                color: "var(--plant-green-dark)",
                                fontSize: "var(--text-xs)",
                                fontWeight: 500,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                opacity: 0.7,
                            }}
                        >
                            {primitive.title}
                        </div>

                        {/* Card content */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            <h3
                                style={{
                                    fontSize: "var(--text-xl-secondary)",
                                    fontWeight: 700,
                                    color: "var(--text-dark)",
                                    margin: 0,
                                }}
                            >
                                {primitive.title}
                            </h3>

                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <div>
                                    <span
                                        style={{
                                            fontSize: "var(--text-xs)",
                                            fontWeight: 600,
                                            color: "var(--plant-green-dark)",
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Mechanism
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "var(--text-sm)",
                                            color: "var(--text-medium)",
                                            margin: "0.2rem 0 0 0",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {primitive.mechanism}
                                    </p>
                                </div>

                                <div>
                                    <span
                                        style={{
                                            fontSize: "var(--text-xs)",
                                            fontWeight: 600,
                                            color: "var(--plant-green-dark)",
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Gestures
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "var(--text-sm)",
                                            color: "var(--text-medium)",
                                            margin: "0.2rem 0 0 0",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {primitive.expressivity}
                                    </p>
                                </div>
                            </div>

                            {/* Insight callout */}
                            <div
                                style={{
                                    borderLeft: "3px solid var(--plant-green)",
                                    paddingLeft: "0.75rem",
                                    marginTop: "0.25rem",
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: "var(--text-sm)",
                                        color: "var(--text-dark)",
                                        fontStyle: "italic",
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {primitive.insight}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
