import Link from "next/link";
import LogoName from "./LogoName";

type HeaderProps = {
    activeLink?: "home" | "uber" | "leistungen" | "praxis" | "kontakt"
};

const navLinkBase = "text-[15px] tracking-wide";

export default function Header({ activeLink = 'home' }: HeaderProps) {
    const textColor = "text-cream";
    const wrapperClasses = "relative z-10 flex items-center justify-between px-14 py-8";

    const linkClass = (key: string) =>
        activeLink === key
            ? "text-gold border-b border-gold pb-0.5"
            : `${textColor}`;

    return (
        <header className={wrapperClasses}>
            <Link href="/" className={textColor}>
                <LogoName />
            </Link>
            <nav className={`flex items-center gap-9 ${navLinkBase}`}>
                <Link href="/" className={linkClass("home")}>Home</Link>
                <Link href="/uber" className={linkClass("uber")}>Über uns</Link>
                <Link href="/leistungen" className={linkClass("leistungen")}>Leistungen</Link>
                <Link href="/praxis" className={linkClass("praxis")}>Praxis</Link>
                <Link href="/#kontakt" className={linkClass("kontakt")}>Kontakt</Link>
                {
                    // TODO: This button will probably be used in more places, so extract it into a separate component and reuse it.
                }
                <Link
                    href="/#kontakt"
                    className="text-cream bg-gold px-6 py-3 rounded-sm text-sm"
                >
                    Termin anfragen
                </Link>
            </nav>
        </header>
    );
}