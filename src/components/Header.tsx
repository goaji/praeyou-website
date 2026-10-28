"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogoName from "./LogoName";
import Button from "./Button";
import NavItem from "./NavItem";
import { navLinks, routes, type NavKey } from "@/lib/routes";
import { MEDIA_MIN_LG } from "@/lib/breakpoints";

type HeaderProps = {
    activeLink?: NavKey;
    background?: "light" | "dark";
};

type HeaderState = "menuOpen" | "transparent" | "solid";

const wrapperClasses: Record<HeaderState, string> = {
    // An open menu always gets a solid background, even on top of the hero image.
    menuOpen: "bg-cream py-4",
    transparent: "bg-transparent py-6 lg:py-8",
    solid: "bg-cream/80 backdrop-blur-sm py-4",
};

function getHeaderState(menuOpen: boolean, background: HeaderProps["background"], scrolled: boolean): HeaderState {
    if (menuOpen) return "menuOpen";
    if (background === "dark" && !scrolled) return "transparent";
    return "solid";
}

export default function Header({ activeLink = "home", background = "dark" }: HeaderProps) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // While the mobile menu is open: close it on Escape (returning focus to the toggle),
    // or when the viewport crosses into desktop width.
    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            setMenuOpen(false);
            toggleRef.current?.focus();
        };
        const desktopQuery = window.matchMedia(MEDIA_MIN_LG);
        const onBreakpointChange = (e: MediaQueryListEvent) => {
            if (e.matches) setMenuOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        desktopQuery.addEventListener("change", onBreakpointChange);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            desktopQuery.removeEventListener("change", onBreakpointChange);
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    const state = getHeaderState(menuOpen, background, scrolled);
    const isTransparent = state === "transparent";
    const textColor = isTransparent ? "text-cream" : "text-ink";

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${wrapperClasses[state]}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-14">
                <Link href={routes.home} className={textColor} onClick={closeMenu}>
                    <LogoName variant={isTransparent ? "light" : "dark"} />
                </Link>

                {/* Desktop navigation */}
                <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-9 text-[15px] tracking-wide">
                    {navLinks.map((link) => (
                        <NavItem
                            key={link.key}
                            href={routes[link.key]}
                            label={link.label}
                            isActive={activeLink === link.key}
                            variant="desktop"
                            onDark={isTransparent}
                        />
                    ))}
                    <Button
                        buttonText="Termin anfragen"
                        link={routes.kontakt}
                        buttonStyle={isTransparent ? "onDarkBackground" : "onLightBackground"}
                        hoverStyle={isTransparent ? "redFill" : "oliveFill"}
                    />
                </nav>

                {/* Mobile menu toggle */}
                <button
                    ref={toggleRef}
                    type="button"
                    className={`lg:hidden p-2 -mr-2 ${textColor}`}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                        {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
                    </svg>
                </button>
            </div>

            {/* Mobile navigation panel: always rendered (so aria-controls has a target), hidden while closed */}
            <nav
                id="mobile-menu"
                aria-label="Mobile Navigation"
                hidden={!menuOpen}
                className="lg:hidden mt-4 border-t border-ink/10 px-5 sm:px-8 pt-2 pb-6"
            >
                <ul className="flex flex-col">
                    {navLinks.map((link) => (
                        <li key={link.key}>
                            <NavItem
                                href={routes[link.key]}
                                label={link.label}
                                isActive={activeLink === link.key}
                                variant="mobile"
                                onClick={closeMenu}
                            />
                        </li>
                    ))}
                </ul>
                <div className="mt-6 flex">
                    <Button
                        buttonText="Termin anfragen"
                        link={routes.kontakt}
                        buttonStyle="onLightBackground"
                        hoverStyle="oliveFill"
                        onClick={closeMenu}
                    />
                </div>
            </nav>
        </header>
    );
}
