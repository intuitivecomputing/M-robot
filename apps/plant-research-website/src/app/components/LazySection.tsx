import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react";

interface LazySectionProps {
    children: ReactNode;
    /** Minimum height placeholder before content loads */
    minHeight?: string;
    /** How far before the viewport to start rendering (default: 200px) */
    rootMargin?: string;
    className?: string;
    style?: CSSProperties;
}

export function LazySection({
    children,
    minHeight = "400px",
    rootMargin = "200px",
    className,
    style,
}: LazySectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

    return (
        <div ref={ref} className={className} style={style}>
            {isVisible ? (
                children
            ) : (
                <div style={{ minHeight }} />
            )}
        </div>
    );
}
