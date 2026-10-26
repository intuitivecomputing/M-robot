// Feature: plant-research-website, Property 4: LazySection defers rendering until intersection
// Validates: Requirements 11.1

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, act } from '@testing-library/react';
import * as fc from 'fast-check';
import { LazySection } from '../app/components/LazySection';

let intersectionCallback: ((entries: IntersectionObserverEntry[]) => void) | null = null;

const MockIntersectionObserver = vi.fn((callback) => {
    intersectionCallback = callback;
    return {
        observe: vi.fn(),
        disconnect: vi.fn(),
        unobserve: vi.fn(),
    };
});

beforeEach(() => {
    intersectionCallback = null;
    MockIntersectionObserver.mockClear();
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
});

describe('Property 4: LazySection defers rendering until intersection', () => {
    it('children are absent before intersection and present after intersection for random text content', () => {
        fc.assert(
            fc.property(
                fc.string({ minLength: 1, maxLength: 50, unit: 'grapheme-ascii' }).filter(s => s.trim().length > 0),
                (childText) => {
                    intersectionCallback = null;

                    const { container, unmount } = render(
                        <LazySection>
                            <span data-testid="lazy-child">{childText}</span>
                        </LazySection>
                    );

                    // Before intersection: child should NOT be in the DOM
                    expect(container.querySelector('[data-testid="lazy-child"]')).toBeNull();

                    // Trigger intersection
                    act(() => {
                        intersectionCallback?.([{ isIntersecting: true } as IntersectionObserverEntry]);
                    });

                    // After intersection: child SHOULD be in the DOM
                    expect(container.querySelector('[data-testid="lazy-child"]')).not.toBeNull();
                    expect(container.querySelector('[data-testid="lazy-child"]')?.textContent).toBe(childText);

                    unmount();
                }
            ),
            { numRuns: 100 }
        );
    });
});
