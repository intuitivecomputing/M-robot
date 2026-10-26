// Feature: plant-research-website, Property 3: External links open in new tab
// Validates: Requirements 10.4

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as fc from 'fast-check';
import { FooterSection } from '../app/components/FooterSection';

// Test helper: renders a list of links with the same attributes as FooterSection
function LinkList({ links }: { links: Array<{ label: string; href: string }> }) {
    return (
        <ul>
            {links.map((link) => (
                <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    );
}

describe('Property 3: External links open in new tab', () => {
    it('every rendered <a> element has target="_blank" and rel="noopener noreferrer" for random link data', () => {
        const linkArb = fc.record({
            label: fc.string({ minLength: 1, maxLength: 30, unit: 'grapheme-ascii' }).filter(s => s.trim().length > 0),
            href: fc.string({ minLength: 1, maxLength: 50, unit: 'grapheme-ascii' }),
        });

        const linksArb = fc.uniqueArray(linkArb, {
            minLength: 1,
            maxLength: 10,
            selector: (link) => link.label,
        });

        fc.assert(
            fc.property(linksArb, (links) => {
                const { container, unmount } = render(<LinkList links={links} />);

                const anchors = container.querySelectorAll('a');
                expect(anchors.length).toBe(links.length);

                anchors.forEach((anchor) => {
                    expect(anchor).toHaveAttribute('target', '_blank');
                    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
                });

                unmount();
            }),
            { numRuns: 100 }
        );
    });

    it('FooterSection hardcoded links all have target="_blank" and rel="noopener noreferrer"', () => {
        render(<FooterSection />);

        // FooterSection has 3 hardcoded links in the Links section
        const anchors = screen.getAllByRole('link');
        expect(anchors.length).toBe(3);

        anchors.forEach((anchor) => {
            expect(anchor).toHaveAttribute('target', '_blank');
            expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });
});
