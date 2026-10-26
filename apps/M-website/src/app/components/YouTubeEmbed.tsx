const YOUTUBE_ALLOW = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

interface YouTubeEmbedProps {
    id: string;
    title: string;
    className?: string;
    /** Defer loading until the player is near the viewport. */
    lazy?: boolean;
}

/** Privacy-enhanced YouTube player (youtube-nocookie.com). Size it with className. */
export function YouTubeEmbed({ id, title, className = "", lazy = false }: YouTubeEmbedProps) {
    return (
        <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
            title={title}
            allow={YOUTUBE_ALLOW}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading={lazy ? "lazy" : undefined}
            className={`border-0 ${className}`}
        />
    );
}
