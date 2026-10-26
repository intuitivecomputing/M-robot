// Mirrors the live Bill of Materials sheet:
// https://docs.google.com/spreadsheets/d/1jsBuLvnb5dxTu2uuX2OFmor-SQrA6SHANkGbB_0W43A
// Prices are the cheapest offer found online and exclude vendor shipping.

export interface BomSubItem {
    name: string;
    quantity: number;
}

export interface BomItem {
    partName: string;
    /** Omitted for bulk/consumable items that aren't counted per-unit. */
    quantity?: number;
    /** Omitted when the sheet prices the item as part of a group or kit. */
    unitPrice?: number;
    subtotal: number;
    note?: string;
    vendor?: string;
    link?: string;
    /** Individual parts rolled up into this single priced line. */
    includes?: BomSubItem[];
}

export interface BomCategory {
    id: string;
    label: string;
    items: BomItem[];
}

export const bomCategories: BomCategory[] = [
    {
        id: "compute",
        label: "Compute",
        items: [
            {
                partName: "Raspberry Pi 5",
                quantity: 1,
                unitPrice: 120,
                subtotal: 120,
                note: "8 GB RAM",
            },
            {
                partName: "Raspberry Pi Power Supply",
                quantity: 1,
                unitPrice: 25,
                subtotal: 25,
            },
            {
                partName: "Power Extension Cable",
                quantity: 1,
                unitPrice: 8,
                subtotal: 8,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0D5486FBC",
            },
            {
                partName: "PCA9685 Servo Driver",
                quantity: 1,
                unitPrice: 4.5,
                subtotal: 4.5,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B09N8R5B8M",
            },
            {
                partName: "Momentary Switch",
                quantity: 1,
                unitPrice: 0.5,
                subtotal: 0.5,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B07MW2RPJY",
            },
        ],
    },
    {
        id: "servos",
        label: "Servos",
        items: [
            {
                partName: "270° 20 kg Servo Motor",
                quantity: 2,
                unitPrice: 15,
                subtotal: 30,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0B7R5WKKK",
            },
            {
                partName: "180° 20 kg Servo Motor",
                quantity: 1,
                unitPrice: 14,
                subtotal: 14,
                note: "Or a second 270° servo",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0B7R5WKKK",
            },
            {
                partName: "25T Servo Disc",
                quantity: 3,
                unitPrice: 1.5,
                subtotal: 4.5,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B07D56FVK5",
            },
            {
                partName: "MG90S 9 g Servo Motor",
                quantity: 2,
                unitPrice: 3,
                subtotal: 6,
                note: "Only if you're building the arms",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0BWJ2CK9D",
            },
            {
                partName: "Motor Power Supply",
                quantity: 1,
                unitPrice: 8.49,
                subtotal: 8.49,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0DD2X5Q56",
            },
        ],
    },
    {
        id: "screen",
        label: "Screen",
        items: [
            {
                partName: '5" TFT Display',
                quantity: 1,
                unitPrice: 33,
                subtotal: 33,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0CXTFN8K9",
            },
            {
                partName: "FFC-1.0-15P Ribbon Cable (15 cm+)",
                quantity: 1,
                subtotal: 0,
                note: "Usually ships with the display — check before ordering",
            },
        ],
    },
    {
        id: "camera",
        label: "Camera",
        items: [
            {
                partName: "Raspberry Pi Camera Module",
                quantity: 1,
                unitPrice: 14,
                subtotal: 14,
                note: "Only if you're adding a camera",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B01ER2SKFS",
            },
            {
                partName: "FFC-1.0-15P Ribbon Cable (30 cm+)",
                quantity: 1,
                unitPrice: 5.8,
                subtotal: 5.8,
                note: "Only if you're adding a camera",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B07T8TLCFZ",
            },
        ],
    },
    {
        id: "audio",
        label: "Audio",
        items: [
            {
                partName: "ReSpeaker Lite",
                quantity: 1,
                unitPrice: 23,
                subtotal: 23,
                note: "Only if you're adding a mic and speaker",
                vendor: "Seeed Studio",
                link: "https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html",
            },
            {
                partName: "4 Ω Speaker",
                quantity: 1,
                unitPrice: 2.5,
                subtotal: 2.5,
                note: "Only if you're adding a mic and speaker",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0BTP67F81",
            },
            {
                partName: "Angled Flat USB-C to USB Cable",
                quantity: 1,
                unitPrice: 8,
                subtotal: 8,
                note: "Only if you're adding a mic and speaker",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0DMVHCVRM",
            },
        ],
    },
    {
        id: "hardware",
        label: "Hardware",
        items: [
            {
                partName: "Fasteners",
                subtotal: 7.5,
                note: "Priced as one bundle — buy an M3 assortment kit rather than each size separately",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0B8BYTB4F",
                includes: [
                    { name: "M3 heat-set insert", quantity: 49 },
                    { name: "M3 × 12 mm screw", quantity: 41 },
                    { name: "M3 × 6 mm screw", quantity: 14 },
                    { name: "M3 nut", quantity: 10 },
                    { name: "M3 × 20 mm screw", quantity: 3 },
                ],
            },
            {
                partName: "PLA Filament",
                subtotal: 8,
                note: "Estimated usage for one full print set",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0C14M5HR9",
            },
            {
                partName: "GT2 6 mm Belt",
                quantity: 1,
                unitPrice: 1.5,
                subtotal: 1.5,
            },
            {
                partName: "6906 Bearing",
                quantity: 2,
                subtotal: 0,
                note: "Sold in multi-packs — one pack covers the build",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B08H25SN8C",
            },
            {
                partName: "688 Bearing",
                quantity: 2,
                subtotal: 0,
                note: "Sold in multi-packs — one pack covers the build",
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B07FW2YKL8",
            },
            {
                partName: "Magnets (5 × 2 mm)",
                subtotal: 1,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0CCXY6WBR",
            },
            {
                partName: "Adhesive Weights",
                subtotal: 1.78,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0CLDF7FDR",
            },
            {
                partName: "Non-Slip Pads",
                subtotal: 2,
                vendor: "Amazon",
                link: "https://www.amazon.com/dp/B0D1JSDHXY",
            },
        ],
    },
];

export const billOfMaterials: BomItem[] = bomCategories.flatMap((c) => c.items);

export const bomLineCount = billOfMaterials.length;

export const bomCategorySubtotal = (category: BomCategory): number =>
    category.items.reduce((sum, item) => sum + item.subtotal, 0);

export const bomTotalCost = bomCategories.reduce(
    (sum, category) => sum + bomCategorySubtotal(category),
    0
);

export const BOM_SHEET_URL =
    "https://docs.google.com/spreadsheets/d/1jsBuLvnb5dxTu2uuX2OFmor-SQrA6SHANkGbB_0W43A/edit?usp=sharing";
