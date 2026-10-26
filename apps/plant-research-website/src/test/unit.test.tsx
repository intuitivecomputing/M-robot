import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Sidebar } from '../app/components/Sidebar';
import { HeroSection } from '../app/components/HeroSection';
import { FooterSection } from '../app/components/FooterSection';
import { LazySection } from '../app/components/LazySection';

// Mock IntersectionObserver (not available in jsdom)
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();
vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
    observe: mockObserve,
    disconnect: mockDisconnect,
    unobserve: vi.fn(),
})));

describe('Sidebar', () => {
    it('renders 7 nav items with correct labels', () => {
        render(<Sidebar activeSection="hero" onNavClick={vi.fn()} />);

        const expectedLabels = [
            'Introduction',
            'Paradigm Shift',
            'Design Primitives',
            'Prototypes',
            'Imaginaries',
            'Framework',
            'Credits',
        ];

        for (const label of expectedLabels) {
            expect(screen.getByText(label)).toBeDefined();
        }
    });
});

describe('HeroSection', () => {
    it('renders the tagline "Ambient. Gradual. Interpretive."', () => {
        render(<HeroSection />);
        // The tagline is split across text nodes; check each word
        expect(screen.getByText(/Ambient\./)).toBeDefined();
        expect(screen.getByText(/Gradual\./)).toBeDefined();
        expect(screen.getByText(/Interpretive\./)).toBeDefined();
    });

    it('renders both CTA buttons', () => {
        render(<HeroSection />);
        expect(screen.getByText('View Prototypes')).toBeDefined();
        expect(screen.getByText('Read Paper')).toBeDefined();
    });
});

describe('FooterSection', () => {
    it('renders all 6 authors by name', () => {
        render(<FooterSection />);
        const authorNames = [
            'Victor Nikhil Antony',
            'Zhili Gong',
            'Adithya R N',
            'Peter M. Donley',
            'Sarah Derrick',
            'Chien-Ming Huang',
        ];
        for (const name of authorNames) {
            expect(screen.getByText(name)).toBeDefined();
        }
    });

    it('renders all 3 external links', () => {
        render(<FooterSection />);
        const linkLabels = [
            'Read the Paper',
            'Open Source Designs',
            'Intuitive Computing Lab',
        ];
        for (const label of linkLabels) {
            expect(screen.getByText(label)).toBeDefined();
        }
    });
});

describe('LazySection', () => {
    it('does NOT render children initially before IntersectionObserver fires', () => {
        render(
            <LazySection>
                <div data-testid="lazy-child">Lazy Content</div>
            </LazySection>
        );
        expect(screen.queryByTestId('lazy-child')).toBeNull();
    });
});
