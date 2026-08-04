import LogoY from "./LogoY";

export default function LogoName() {
    return (
        <div className="inline-flex flex-col gap-2 ">
            <div className="flex items-center self-center">
                <span className={`font-logo font-semibold tracking-wider uppercase text-2xl text-cream`}>
                    PRÄ
                </span>
                <LogoY />
                <span className={`font-logo font-semibold tracking-wider uppercase text-2xl text-cream`}>
                    OU
                </span>
            </div>
            <span className={`text-[11px] tracking-widest uppercase text-cream whitespace-nowrap`}>
                MASSAGEN & PRÄVENTION
            </span>
        </div>
    );
}