interface Prototype {
    name: string;
    form: string;
    interaction: string;
    techCallout: string;
}

const prototypes: Prototype[] = [
    {
        name: "Snake Plant",
        form: "3 actuated leaves on an angled, rotatable pot",
        interaction: "Posture awareness. Droops as posture fails, recovers when corrected. Greeting and end-of-day gestures via a simple pose estimate.",
        techCallout: "Vary string tension per leaf for asymmetric motion — no extra actuators needed.",
    },
    {
        name: "Flower Plant",
        form: "Actuated stem, flower crown, passive leaves",
        interaction: "Presence tracking. Turns toward active speakers or camera targets. Passive leaves flutter for free as the stem moves.",
        techCallout: "Mount passive leaves along the stem — they flutter for free as the stem bends.",
    },
    {
        name: "Keeper Plant",
        form: "8 radial leaves (4 actuated) enclosing a central cavity. Light sensor triggered.",
        interaction: "Object holder with timed release. Grips when object is present, unfurls and pulses on a schedule. One light sensor, no camera.",
        techCallout: "A single light sensor drives all behavior. Low-fi sensing, high-impact interaction.",
    },
    {
        name: "Dancing Pot",
        form: "Mobile base, fern-inspired two-tier leaf arrangement",
        interaction: "Proximity-triggered locomotion. Approaches a detected presence, performs a sway-and-flutter sequence, retreats.",
        techCallout: "Differential drive base. Leaf gestures layer on top — combine motion primitives freely.",
    },
];

export function PrototypesSection() {
    return (
        <section
            id="prototypes"
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
                04 — Reference Builds
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
                Four Open-Source Builds
            </h2>
            <p
                style={{
                    fontSize: "var(--text-lg-secondary)",
                    color: "var(--text-medium)",
                    lineHeight: 1.7,
                    margin: "0 0 4rem 0",
                    maxWidth: "640px",
                }}
            >
                Each build ships with open-source CAD files and a BOM. Start from one, swap components, or fork the design.
            </p>

            {/* Prototype showcases */}
            <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
                {prototypes.map((prototype, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={prototype.name}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "3rem",
                                alignItems: "center",
                            }}
                        >
                            {/* Visual placeholder — left for even, right for odd */}
                            <div
                                style={{
                                    order: isEven ? 0 : 1,
                                    aspectRatio: "4 / 3",
                                    border: "2px dashed var(--plant-green-light)",
                                    borderRadius: "16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "var(--plant-green-pale)",
                                    color: "var(--plant-green-dark)",
                                    fontSize: "var(--text-sm)",
                                    fontWeight: 500,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    opacity: 0.7,
                                }}
                            >
                                {prototype.name}
                            </div>

                            {/* Text content — right for even, left for odd */}
                            <div
                                style={{
                                    order: isEven ? 1 : 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.25rem",
                                }}
                            >
                                {/* Index badge */}
                                <span
                                    style={{
                                        display: "inline-block",
                                        fontSize: "var(--text-xs)",
                                        fontWeight: 600,
                                        color: "var(--plant-green-dark)",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                {/* Name */}
                                <h3
                                    style={{
                                        fontSize: "var(--text-2xl-secondary)",
                                        fontWeight: 700,
                                        color: "var(--text-dark)",
                                        margin: 0,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {prototype.name}
                                </h3>

                                {/* Form */}
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
                                        Structure
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "var(--text-md)",
                                            color: "var(--text-medium)",
                                            margin: "0.3rem 0 0 0",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {prototype.form}
                                    </p>
                                </div>

                                {/* Interaction */}
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
                                        Use Case
                                    </span>
                                    <p
                                        style={{
                                            fontSize: "var(--text-md)",
                                            color: "var(--text-medium)",
                                            margin: "0.3rem 0 0 0",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {prototype.interaction}
                                    </p>
                                </div>

                                {/* Tech callout */}
                                <div
                                    style={{
                                        borderLeft: "3px solid var(--plant-green)",
                                        paddingLeft: "1rem",
                                        marginTop: "0.25rem",
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: "var(--text-base-secondary)",
                                            color: "var(--text-dark)",
                                            fontStyle: "italic",
                                            lineHeight: 1.6,
                                            margin: 0,
                                        }}
                                    >
                                        ⚠️ Build note: {prototype.techCallout}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
