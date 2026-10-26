interface Author {
    name: string;
    affiliation: string;
}

interface ExternalLink {
    label: string;
    href: string;
}

const authors: Author[] = [
    { name: "Victor Nikhil Antony", affiliation: "Johns Hopkins University" },
    { name: "Zhili Gong", affiliation: "Rice University" },
    { name: "Adithya R N", affiliation: "Johns Hopkins University" },
    { name: "Peter M. Donley", affiliation: "Johns Hopkins University" },
    { name: "Sarah Derrick", affiliation: "Johns Hopkins University" },
    { name: "Chien-Ming Huang", affiliation: "Johns Hopkins University" },
];

const links: ExternalLink[] = [
    { label: "Open Source Designs", href: "#" },
    { label: "Read the Research Paper", href: "https://doi.org/10.1145/3757279.3785645" },
    { label: "Intuitive Computing Lab", href: "#" },
];

export function FooterSection() {
    return (
        <section
            id="footer"
            style={{
                backgroundColor: "var(--plant-green-dark)",
                color: "var(--cream)",
                padding: "80px 60px",
                minHeight: "20vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <p
                style={{
                    fontSize: "var(--text-2xl-secondary)",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    marginBottom: "64px",
                    opacity: 0.95,
                }}
            >
                Build. Iterate. Open Source.
            </p>

            <div style={{ marginBottom: "64px" }}>
                <p
                    style={{
                        fontSize: "var(--text-sm)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        opacity: 0.6,
                        marginBottom: "24px",
                    }}
                >
                    Authors
                </p>
                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: "16px",
                    }}
                >
                    {authors.map((author) => (
                        <li key={author.name}>
                            <span
                                style={{
                                    display: "block",
                                    fontSize: "var(--text-md)",
                                    fontWeight: 500,
                                    color: "var(--cream)",
                                }}
                            >
                                {author.name}
                            </span>
                            <span
                                style={{
                                    display: "block",
                                    fontSize: "var(--text-sm)",
                                    opacity: 0.65,
                                    marginTop: "2px",
                                }}
                            >
                                {author.affiliation}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <p
                    style={{
                        fontSize: "var(--text-sm)",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        opacity: 0.6,
                        marginBottom: "16px",
                    }}
                >
                    Links
                </p>
                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "12px",
                    }}
                >
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block",
                                    padding: "8px 20px",
                                    border: "1px solid rgba(251, 248, 239, 0.4)",
                                    borderRadius: "999px",
                                    fontSize: "var(--text-sm)",
                                    color: "var(--cream)",
                                    textDecoration: "none",
                                    transition: "background-color 0.2s, border-color 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                                        "rgba(251, 248, 239, 0.12)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                        "rgba(251, 248, 239, 0.7)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                                        "transparent";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                                        "rgba(251, 248, 239, 0.4)";
                                }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
