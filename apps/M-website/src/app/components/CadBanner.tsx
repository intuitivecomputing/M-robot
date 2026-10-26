import { CAD_URL } from "../data/project";

export function CadBanner() {
    return (
        <div
            className="w-full text-center py-4 px-4 font-medium"
            style={{
                backgroundColor: "#4eb6ab",
                color: "#fdfdfd",
                fontSize: "16px",
                borderBottom: "2px dashed rgba(0,0,0,0.08)",
            }}
        >
            🛠️ <strong>Looking for CAD files?</strong> Download the complete 3D models and CAD files{" "}
            <a
                href={CAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold hover:opacity-80 transition-opacity"
            >
                here
            </a>
            .
        </div>
    );
}
