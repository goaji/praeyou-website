"use client";

import Link from "next/link";
import LogoName from "./LogoName";
import Button from "./Button";
import { useEffect, useState } from "react";

type HeaderProps = {
    activeLink?: "home" | "uber" | "leistungen" | "praxis" | "kontakt"
};


export default function Header({ activeLink = 'home' }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const textColor = scrolled ? "text-ink" : "text-cream";

    const wrapperClasses = scrolled ? "bg-cream/80 backdrop-blur-sm border-b border-ink/10 py-4" : "bg-transparent py-8";

    const linkClass = (key: string) =>
        activeLink === key
            ? "text-gold border-b border-gold pb-0.5"
            : `${textColor}`;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 transition-all duration-300 ${wrapperClasses}`}>
            <Link href="/" className={textColor}>
                <LogoName variant={scrolled ? "dark" : "light"} />
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