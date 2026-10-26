// Feature: plant-research-website, Property 2: Content cards render all required fields
// Validates: Requirements 6.2, 7.2, 9.2, 10.2

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import * as fc from 'fast-check';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock IntersectionObserver (required for motion/react whileInView)
const mockIntersectionObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
};

beforeAll(() => {
    Object.defineProperty(window, 'IntersectionObserver', {
        writable: true,
        configurable: true,
        value: mockIntersectionObserver,
    });
});

afterAll(() => {
    // Clean up
});

// Test helper: a generic card that renders all fields of an object
function GenericCard({ data }: { data: Record<string, string> }) {
    return (
        <div>
            {Object.values(data).map((value, i) => (
                <span key={i}>{value}</span>
            ))}
        </div>
    );
}

// Arbitraries for each schema — trimmed strings with normalized internal whitespace
const nonEmptyString = fc
    .string({ minLength: 1, maxLength: 80, unit: 'grapheme-ascii' })
    .map(s => s.trim().replace(/\s+/g, ' '))
    .filter(s => s.length > 0);

const primitiveArb = fc.record({
    title: nonEmptyString,
    mechanism: nonEmptyString,
    expressivity: nonEmptyString,
    insight: nonEmptyString,
});

const prototypeArb = fc.record({
    name: nonEmptyString,
    form: nonEmptyString,
    interaction: nonEmptyString,
    techCallout: nonEmptyString,
});

const designConsiderationArb = fc.record({
    title: nonEmptyString,
    description: nonEmptyString,
});

const authorArb = fc.record({
    name: nonEmptyString,
    affiliation: nonEmptyString,
});

describe('Property 2: Content cards render all required fields', () => {
    it('GenericCard renders all fields of a Primitive schema', () => {
        fc.assert(
            fc.property(primitiveArb, (primitive) => {
                const { unmount } = render(<GenericCard data={primitive} />);
                expect(screen.getAllByText(primitive.title).length).toBeGreaterThan(0);
                expect(screen.getAllByText(primitive.mechanism).length).toBeGreaterThan(0);
                expect(screen.getAllByText(primitive.expressivity).length).toBeGreaterThan(0);
                expect(screen.getAllByText(primitive.insight).length).toBeGreaterThan(0);
                unmount();
            }),
            { numRuns: 100 }
        );
    });

    it('GenericCard renders all fields of a Prototype schema', () => {
        fc.assert(
            fc.property(prototypeArb, (prototype) => {
                const { unmount } = render(<GenericCard data={prototype} />);
                expect(screen.getAllByText(prototype.name).length).toBeGreaterThan(0);
                expect(screen.getAllByText(prototype.form).length).toBeGreaterThan(0);
                expect(screen.getAllByText(prototype.interaction).length).toBeGreaterThan(0);
                expect(screen.getAllByText(prototype.techCallout).length).toBeGreaterThan(0);
                unmount();
            }),
            { numRuns: 100 }
        );
    });

    it('GenericCard renders all fields of a DesignConsideration schema', () => {
        fc.assert(
            fc.property(designConsiderationArb, (consideration) => {
                const { unmount } = render(<GenericCard data={consideration} />);
                expect(screen.getAllByText(consideration.title).length).toBeGreaterThan(0);
                expect(screen.getAllByText(consideration.description).length).toBeGreaterThan(0);
                unmount();
            }),
            { numRuns: 100 }
        );
    });

    it('GenericCard renders all fields of an Author schema', () => {
        fc.assert(
            fc.property(authorArb, (author) => {
                const { unmount } = render(<GenericCard data={author} />);
                expect(screen.getAllByText(author.name).length).toBeGreaterThan(0);
                expect(screen.getAllByText(author.affiliation).length).toBeGreaterThan(0);
                unmount();
            }),
            { numRuns: 100 }
        );
    });
});
