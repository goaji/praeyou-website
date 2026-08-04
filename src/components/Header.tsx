import Link from "next/link";
import LogoName from "./LogoName";
import Button from "./Button";

type HeaderProps = {
    activeLink?: "home" | "uber" | "leistungen" | "praxis" | "kontakt"
};


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
            <nav className="flex items-center gap-9 text-[15px] tracking-wide">
                <Link href="/" className={linkClass("home")}>Home</Link>
                <Link href="/uber" className={linkClass("uber")}>Über uns</Link>
                <Link href="/leistungen" className={linkClass("leistungen")}>Leistungen</Link>
                <Link href="/praxis" className={linkClass("praxis")}>Praxis</Link>
                <Link href="/#kontakt" className={linkClass("kontakt")}>Kontakt</Link>
                <Button buttonText="Termin anfragen" link="/#kontakt" />
            </nav>
        </header>
    );
}