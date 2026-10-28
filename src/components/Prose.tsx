import type { ReactNode } from "react";

const spacingClasses = {
    /** Between paragraphs of running text. */
    paragraph: "gap-4",
    /** Between sections, e.g. the numbered sections of the Datenschutz. */
    section: "gap-8",
};

type ProseProps = {
    children: ReactNode;
    spacing?: keyof typeof spacingClasses;
    className?: string;
};

/**
 * Running text: one body size, line height and paragraph rhythm for every text page,
 * so Über mich, the legal pages and the massage details read the same.
 */
export default function Prose({ children, spacing = "paragraph", className = "" }: ProseProps) {
    return (
        <div className={`flex flex-col text-[16px] leading-relaxed ${spacingClasses[spacing]} ${className}`}>
            {children}
        </div>
    );
}
