import { useState } from "react";
import {
    BOM_SHEET_URL,
    bomCategories,
    bomCategorySubtotal,
    bomLineCount,
    bomTotalCost,
    type BomItem,
} from "../data/billOfMaterials";
import { canonicalUrlForPage } from "../routes";

const BOM_URL = canonicalUrlForPage("bom");

const money = (value: number) => `$${value.toFixed(2)}`;

/** Bulk items and grouped lines have no meaningful per-unit price. */
const unitPriceLabel = (item: BomItem) =>
    item.unitPrice === undefined ? "—" : money(item.unitPrice);

const subtotalLabel = (item: BomItem) =>
    item.includes ? money(item.subtotal) : item.subtotal === 0 ? "incl." : money(item.subtotal);

function VendorLink({ item }: { item: BomItem }) {
    if (!item.link) {
        return <span style={{ fontSize: "var(--text-sm)", color: "#bbb" }}>—</span>;
    }
    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full transition-colors duration-200"
            style={{
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                color: "#4DB6AC",
                backgroundColor: "rgba(77,182,172,0.1)",
                whiteSpace: "nowrap",
            }}
        >
            {item.vendor ?? "Buy"}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                    d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </a>
    );
}

function DirectLink() {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard?.writeText(BOM_URL).then(
            () => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1600);
            },
            () => setCopied(false)
        );
    };

    return (
        <div
            className="flex flex-wrap items-center gap-3 px-4 py-3 rounded-xl"
            style={{ backgroundColor: "#fff", border: "2px dashed rgba(0,0,0,0.08)" }}
        >
            <span style={{ fontSize: "var(--text-sm)", color: "#777" }}>
                Direct link to this page
            </span>
            <code
                style={{
                    fontSize: "var(--text-sm)",
                    color: "#1a1a1a",
                    backgroundColor: "#f0ede4",
                    padding: "4px 10px",
                    borderRadius: "6px",
                }}
            >
                {BOM_URL}
            </code>
            <button
                onClick={copy}
                className="px-3 py-1 rounded-full cursor-pointer transition-colors duration-200"
                style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: 600,
                    color: copied ? "#fff" : "#4DB6AC",
                    backgroundColor: copied ? "#4DB6AC" : "rgba(77,182,172,0.1)",
                }}
            >
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
    );
}

export function BillOfMaterialPage() {
    return (
        <div
            className="min-h-screen"
            style={{ backgroundColor: "#FBF8EF", fontFamily: "'DM Sans', sans-serif" }}
        >
            {/* Banner */}
            <div
                className="w-full text-center py-3 px-4 font-medium"
                style={{ backgroundColor: "#FFB433", color: "#6b4200", fontSize: "14px" }}
            >
                ⚠️ Prices are the cheapest offer found online and exclude shipping. The live,
                most up-to-date sheet is{" "}
                <a
                    href={BOM_SHEET_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold hover:opacity-80 transition-opacity"
                >
                    here
                </a>
                .
            </div>

            {/* Top bar */}
            <div
                className="flex items-center justify-between px-10 py-4 sticky top-0 z-10"
                style={{
                    borderBottom: "2px dashed rgba(0,0,0,0.08)",
                    backgroundColor: "#FBF8EF",
                }}
            >
                <div className="flex items-center gap-2">
                    <span
                        className="inline-block w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: "#FFB433" }}
                    />
                    <span style={{ fontSize: "var(--text-base-secondary)", color: "#555" }}>
                        bill of materials
                    </span>
                </div>
                <div
                    className="flex items-center gap-2"
                    style={{ fontSize: "var(--text-base-secondary)", color: "#555" }}
                >
                    <span>{bomLineCount} line items</span>
                    <span style={{ color: "#ccc" }}>·</span>
                    <span style={{ fontWeight: 600, color: "#4DB6AC" }}>
                        {money(bomTotalCost)}
                    </span>
                </div>
            </div>

            <div className="px-6 py-8 flex justify-center">
                <div className="w-full max-w-[960px] flex flex-col gap-6">
                    <DirectLink />

                    {/* Table */}
                    <div
                        className="rounded-xl overflow-hidden"
                        style={{
                            border: "2px dashed rgba(0,0,0,0.06)",
                            backgroundColor: "#fff",
                        }}
                    >
                        <table className="w-full" style={{ borderCollapse: "collapse" }}>
                            <thead>
                                <tr style={{ backgroundColor: "#4DB6AC" }}>
                                    {["Part", "Unit", "Qty", "Subtotal", "Vendor"].map((header) => (
                                        <th
                                            key={header}
                                            className="text-left text-white px-4 py-3"
                                            style={{
                                                fontSize: "var(--text-base-secondary)",
                                                fontWeight: 600,
                                                borderBottom: "2px solid rgba(0,0,0,0.06)",
                                            }}
                                        >
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            {bomCategories.map((category) => (
                                <tbody key={category.id}>
                                    <tr style={{ backgroundColor: "#f0ede4" }}>
                                        <td
                                            colSpan={3}
                                            className="px-4 py-2"
                                            style={{
                                                fontSize: "var(--text-sm)",
                                                fontWeight: 700,
                                                letterSpacing: "0.06em",
                                                textTransform: "uppercase",
                                                color: "#6b6b6b",
                                            }}
                                        >
                                            {category.label}
                                        </td>
                                        <td
                                            className="px-4 py-2"
                                            style={{
                                                fontSize: "var(--text-sm)",
                                                fontWeight: 700,
                                                color: "#6b6b6b",
                                            }}
                                        >
                                            {money(bomCategorySubtotal(category))}
                                        </td>
                                        <td />
                                    </tr>

                                    {category.items.map((item, idx) => (
                                        <tr
                                            key={item.partName}
                                            style={{
                                                backgroundColor: idx % 2 === 0 ? "#fff" : "#fbfaf6",
                                                borderBottom: "1px solid rgba(0,0,0,0.04)",
                                            }}
                                        >
                                            <td className="px-4 py-3">
                                                <div
                                                    style={{
                                                        fontSize: "var(--text-md)",
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {item.partName}
                                                </div>

                                                {/* Grouped parts — one price, many pieces */}
                                                {item.includes && (
                                                    <ul
                                                        className="mt-1.5 flex flex-col gap-0.5"
                                                        style={{ listStyle: "none", padding: 0 }}
                                                    >
                                                        {item.includes.map((sub) => (
                                                            <li
                                                                key={sub.name}
                                                                className="flex items-center gap-2"
                                                                style={{
                                                                    fontSize: "var(--text-sm)",
                                                                    color: "#666",
                                                                }}
                                                            >
                                                                <span
                                                                    className="inline-block w-1.5 h-1.5 rounded-full"
                                                                    style={{
                                                                        backgroundColor: "#4DB6AC",
                                                                        flexShrink: 0,
                                                                    }}
                                                                />
                                                                <span>{sub.name}</span>
                                                                <span style={{ color: "#aaa" }}>
                                                                    ×{sub.quantity}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}

                                                {item.note && (
                                                    <div
                                                        className="mt-1"
                                                        style={{
                                                            fontSize: "var(--text-sm)",
                                                            color: "#999",
                                                        }}
                                                    >
                                                        {item.note}
                                                    </div>
                                                )}
                                            </td>
                                            <td
                                                className="px-4 py-3 align-top"
                                                style={{ fontSize: "var(--text-md)", color: "#555" }}
                                            >
                                                {unitPriceLabel(item)}
                                            </td>
                                            <td
                                                className="px-4 py-3 align-top"
                                                style={{ fontSize: "var(--text-md)", color: "#555" }}
                                            >
                                                {item.includes
                                                    ? `${item.includes.length} sizes`
                                                    : item.quantity ?? "—"}
                                            </td>
                                            <td
                                                className="px-4 py-3 align-top"
                                                style={{
                                                    fontSize: "var(--text-md)",
                                                    fontWeight: item.subtotal ? 600 : 400,
                                                    color: item.subtotal ? "#1a1a1a" : "#aaa",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {subtotalLabel(item)}
                                            </td>
                                            <td className="px-4 py-3 align-top">
                                                <VendorLink item={item} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            ))}

                            <tfoot>
                                <tr style={{ backgroundColor: "#f0ede4" }}>
                                    <td
                                        colSpan={3}
                                        className="px-4 py-4 text-right"
                                        style={{ fontSize: "var(--text-md)", fontWeight: 700 }}
                                    >
                                        Total Cost
                                    </td>
                                    <td
                                        className="px-4 py-4"
                                        style={{
                                            fontSize: "var(--text-lg-secondary)",
                                            fontWeight: 700,
                                            color: "#4DB6AC",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {money(bomTotalCost)}
                                    </td>
                                    <td />
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <p style={{ fontSize: "var(--text-sm)", color: "#999", lineHeight: 1.6 }}>
                        “incl.” means the part is covered by another line — bearings come in
                        multi-packs and every M3 screw, nut and heat-set insert is rolled into the
                        single <strong>Fasteners</strong> line above.
                    </p>
                </div>
            </div>
        </div>
    );
}
