// Feature: plant-research-website, Property 1: Scroll tracking returns correct active section
// Validates: Requirements 3.3

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';

/**
 * Pure function extracted from App.tsx scroll tracking logic.
 * For any set of section positions and viewport height, returns the section
 * whose top edge is closest to the 30% viewport trigger point among all
 * sections that are within the trigger zone (top <= triggerY + viewportHeight * 0.5).
 */
function getActiveSection(
    sections: Array<{ id: string; top: number }>,
    viewportHeight: number
): string {
    const triggerY = viewportHeight * 0.3;
    let closest = sections[0].id;
    let closestDist = Infinity;

    sections.forEach(({ id, top }) => {
        const dist = Math.abs(top - triggerY);
        if (top <= triggerY + viewportHeight * 0.5 && dist < closestDist) {
            closestDist = dist;
            closest = id;
        }
    });

    return closest;
}

describe('Property 1: Scroll tracking returns correct active section', () => {
    it('always returns the section closest to the 30% trigger point within the trigger zone', () => {
        // Generate unique IDs for sections
        const uniqueIdArrayArb = fc.uniqueArray(
            fc.string({ minLength: 1, maxLength: 10, unit: 'grapheme-ascii' }).filter(s => s.trim().length > 0),
            { minLength: 1, maxLength: 7 }
        );

        const sectionsArb = uniqueIdArrayArb.chain((ids) =>
            fc.tuple(
                ...ids.map((id) =>
                    fc.integer({ min: -1000, max: 3000 }).map((top) => ({ id, top }))
                )
            ).map((entries) => entries as Array<{ id: string; top: number }>)
        );

        const viewportHeightArb = fc.integer({ min: 400, max: 1200 });

        fc.assert(
            fc.property(sectionsArb, viewportHeightArb, (sections, viewportHeight) => {
                const triggerY = viewportHeight * 0.3;
                const result = getActiveSection(sections, viewportHeight);

                // Find the expected section: closest to triggerY among those in the trigger zone
                const inZone = sections.filter(({ top }) => top <= triggerY + viewportHeight * 0.5);

                if (inZone.length === 0) {
                    // No section in zone — function falls back to sections[0].id
                    expect(result).toBe(sections[0].id);
                } else {
                    // The result must be the section in the zone with minimum distance to triggerY
                    const expected = inZone.reduce((best, curr) => {
                        const bestDist = Math.abs(best.top - triggerY);
                        const currDist = Math.abs(curr.top - triggerY);
                        return currDist < bestDist ? curr : best;
                    });
                    expect(result).toBe(expected.id);
                }
            }),
            { numRuns: 100 }
        );
    });
});
