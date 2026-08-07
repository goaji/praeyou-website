"use client";

import Link from "next/link";
import LogoName from "./LogoName";
import Button from "./Button";
import { useEffect, useState } from "react";

type HeaderProps = {
    activeLink?: "home" | "uber" | "leistungen" | "praxis" | "kontakt"
    background?: "light" | "dark"
};


export default function Header({ activeLink = 'home', background = "dark" }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isTransparent = background === "dark" && !scrolled;

    const textColor = isTransparent ? "text-cream" : "text-ink";

    const wrapperClasses = isTransparent ? "bg-transparent py-8" : "bg-cream/80 backdrop-blur-sm py-4";

    const getHeaderMenuClass = (key: string) => {
        const activeLinkTextColor = isTransparent ? "text-gold" : "text-red";
        const classToApply = activeLink === key
            ? `${activeLinkTextColor} border-b border-gold pb-0.5`
            : `${textColor}`;
        return classToApply;
    }

    const buttonStyle = isTransparent ? "onDarkBackground" : "onLightBackground";
    const hoverStyle = isTransparent ? "redFill" : "oliveFill";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${wrapperClasses}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-14">
                <Link href="/" className={textColor}>
                    <LogoName variant={isTransparent ? "light" : "dark"} />
                </Link>
                <nav className="flex items-center gap-9 text-[15px] tracking-wide">
                    <Link href="/" className={getHeaderMenuClass("home")}>Home</Link>
                    <Link href="/uber" className={getHeaderMenuClass("uber")}>Über uns</Link>
                    <Link href="/leistungen" className={getHeaderMenuClass("leistungen")}>Leistungen</Link>
                    <Link href="/praxis" className={getHeaderMenuClass("praxis")}>Praxis</Link>
                    <Link href="/#kontakt" className={getHeaderMenuClass("kontakt")}>Kontakt</Link>
                    <Button buttonText="Termin anfragen" link="/#kontakt" buttonStyle={buttonStyle} hoverStyle={hoverStyle} />
                </nav>
            </div>
        </header>
    );
}