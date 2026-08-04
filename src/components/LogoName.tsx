import LogoY from "./LogoY";

type LogoNameProps = {
    variant?: "dark" | "light";
};

export default function LogoName({ variant = "light" }: LogoNameProps) {
    const textColor = variant === "dark" ? "text-ink" : "text-cream";

    return (
        <div className="inline-flex flex-col gap-2 ">
            <div className="flex items-center self-center">
                <span className={`font-logo font-semibold tracking-wider uppercase text-2xl ${textColor}`}>
                    PRÄ
                </span>
                <LogoY />
                <span className={`font-logo font-semibold tracking-wider uppercase text-2xl ${textColor}`}>
                    OU
                </span>
            </div>
            <span className={`text-[11px] tracking-widest uppercase ${textColor} whitespace-nowrap`}>
                MASSAGEN & PRÄVENTION
            </span>
        </div>
    );
}