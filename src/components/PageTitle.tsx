/** The short line used under page titles and headings. */
export function Divider({ className = "" }: { className?: string }) {
    return <div className={`w-11 h-px bg-olive/50 ${className}`} aria-hidden="true" />;
}

type PageTitleProps = {
    children: React.ReactNode;
    align?: "left" | "center";
};

/** A page's <h1> with the divider below it: one look and spacing for every page title. */
export default function PageTitle({ children, align = "left" }: PageTitleProps) {
    const alignment = align === "center" ? "items-center text-center" : "items-start";
    return (
        <div className={`flex flex-col gap-3 mb-6 ${alignment}`}>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl">{children}</h1>
            <Divider />
        </div>
    );
}
