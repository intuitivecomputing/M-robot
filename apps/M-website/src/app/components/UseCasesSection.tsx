import { ImageWithFallback } from "./figma/ImageWithFallback";
import { pathForPage, type Page } from "../routes";

const useCases = [
    {
        id: "child-interaction",
        label: "01",
        title: "child–robot interaction",
        subtitle: "ELLA storytelling platform",
        description:
            "ELLA, a generative AI–powered storytelling robot built on M, supports early language development at home. Deployed in 10 homes for week-long sessions, children engaged through interactive storytelling with parent-selected vocabulary targets and scaffolded dialogue. M operated autonomously, generating personalized stories and logging interaction data end-to-end.",
        tags: ["home deployment", "language development", "generative AI", "10 families"],
        accent: "#FFB433",
        image: "/images/deployed_sen1.webp",
    },
    {
        id: "education",
        label: "02",
        title: "education platform",
        subtitle: "hands-on HRI training",
        description:
            "M serves as the primary hardware platform in an undergraduate Human–Robot Interaction course. Students develop interaction systems in Docker containers mirroring the research runtime, then validate on four physical M platforms in a shared lab. ROS-based abstraction lets students focus on interaction design and perception rather than low-level hardware.",
        tags: ["undergraduate course", "Docker workflow", "simulation-to-hardware", "4 platforms"],
        accent: "#B4EBE6",
    },
    {
        id: "home-deployment",
        label: "03",
        title: "in-home deployment",
        subtitle: "unsupervised, multi-day",
        description:
            "M supports reproducible, multi-day, unsupervised in-home interventions. Participants independently set up M within 15–25 minutes, and the system maintained stable operation across five-day deployments with no hardware failures. All interaction logs, sensor streams, and diagnostics were captured and synchronized to a remote server without data loss.",
        tags: ["self-setup", "5-day study", "remote sync", "zero data loss"],
        accent: "#E8B4B8",
    },
];

interface UseCasesSectionProps {
    onPageChange: (page: Page) => void;
}

export function UseCasesSection({ onPageChange }: UseCasesSectionProps) {
    return (
        <section
            id="use-cases"
            className="py-16 px-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* Header */}
            <div className="mb-14 flex items-end justify-between">
                <div>
                    <p style={{ fontSize: "13px", color: "#888", marginBottom: "6px", letterSpacing: "0.05em" }}>
                        what can M do?
                    </p>
                    <h2 style={{ fontSize: "42px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.1 }}>
                        Use Cases
                    </h2>
                </div>
                <p style={{ fontSize: "14px", color: "#888", maxWidth: "320px", lineHeight: 1.5 }}>
                    From child storytelling to classroom training — M is proven in real-world, longitudinal deployments.
                </p>
            </div>

            {/* Featured use case — storytelling (large card) */}
            <div
                className="use-case-card rounded-2xl overflow-hidden mb-4"
                style={{ minHeight: "340px" }}
            >
                <div className="grid grid-cols-[1fr_1fr] h-full">
                    {/* Left: content */}
                    <div className="p-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                                    style={{ backgroundColor: useCases[0].accent, fontSize: "12px", fontWeight: 700 }}
                                >
                                    {useCases[0].label}
                                </span>
                                <span style={{ fontSize: "12px", color: "#888", letterSpacing: "0.04em" }}>
                                    {useCases[0].subtitle}
                                </span>
                            </div>
                            <h3 style={{ fontSize: "28px", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.2, marginBottom: "12px" }}>
                                {useCases[0].title}
                            </h3>
                            <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6, maxWidth: "380px" }}>
                                {useCases[0].description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {useCases[0].tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full"
                                    style={{
                                        fontSize: "11px",
                                        color: "#555",
                                        backgroundColor: "rgba(0,0,0,0.04)",
                                        border: "1px solid rgba(0,0,0,0.06)",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Right: image */}
                    <div className="relative" style={{ backgroundColor: "rgba(0,0,0,0.02)" }}>
                        <ImageWithFallback
                            src={useCases[0].image}
                            alt={useCases[0].title}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{ filter: "saturate(1.1)" }}
                        />
                        {/* Decorative ring */}
                        <div
                            className="absolute top-4 right-4 w-10 h-10 rounded-full"
                            style={{ border: `3px solid ${useCases[0].accent}`, opacity: 0.4 }}
                        />
                    </div>
                </div>
            </div>

            {/* Three smaller cards in a row */}
            <div className="grid grid-cols-2 gap-4 mb-4">
                {useCases.slice(1).map((uc) => (
                    <UseCaseCard key={uc.id} useCase={uc} />
                ))}
            </div>

            {/* CTA strip */}
            <div
                className="rounded-2xl p-6 flex items-center justify-between"
                style={{ backgroundColor: "#1a1a1a" }}
            >
                <div className="flex items-center gap-4">
                    <p className="text-white" style={{ fontSize: "18px", fontWeight: 700 }}>
                        ready to build your own <span style={{ color: "#4DB6AC" }}>M</span>?
                    </p>
                </div>
                <a
                    href={pathForPage("build-guide")}
                    onClick={(e) => {
                        e.preventDefault();
                        onPageChange("build-guide");
                    }}
                    className="px-6 py-2.5 rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#4DB6AC", color: "#1a1a1a", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}
                >
                    get the build guide
                </a>
            </div>
        </section>
    );
}

function UseCaseCard({ useCase }: { useCase: (typeof useCases)[number] }) {
    return (
        <div className="use-case-card rounded-xl p-5 flex flex-col" style={{ minHeight: "280px" }}>
            {/* Number + image row */}
            <div className="flex items-start justify-between mb-4">
                <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full shrink-0"
                    style={{ backgroundColor: useCase.accent, fontSize: "12px", fontWeight: 700 }}
                >
                    {useCase.label}
                </span>
                <ImageWithFallback
                    src={useCase.image}
                    alt={useCase.title}
                    className="w-12 h-12 rounded-lg object-cover"
                />
            </div>

            {/* Subtitle */}
            <p style={{ fontSize: "11px", color: "#888", letterSpacing: "0.04em", marginBottom: "4px" }}>
                {useCase.subtitle}
            </p>

            {/* Title */}
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3, marginBottom: "8px" }}>
                {useCase.title}
            </h3>

            {/* Description */}
            <p className="mb-auto" style={{ fontSize: "13px", color: "#555", lineHeight: 1.5 }}>
                {useCase.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-4">
                {useCase.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full"
                        style={{
                            fontSize: "10px",
                            color: "#555",
                            backgroundColor: "rgba(0,0,0,0.04)",
                            border: "1px solid rgba(0,0,0,0.06)",
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
