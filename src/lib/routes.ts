/**
 * Single source of truth for all internal URLs.
 * Rename a route here and every link in the app follows.
 */
export const routes = {
    home: "/",
    uber: "/uber",
    leistungen: "/leistungen",
    praxis: "/praxis",
    kontakt: "/#kontakt",
} as const;

export type NavKey = keyof typeof routes;

/** URL of a single massage's detail page. */
export const massagePath = (slug: string) => `${routes.leistungen}/${slug}`;

/** Order and labels of the main navigation. */
export const navLinks: { key: NavKey; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "uber", label: "Über uns" },
    { key: "leistungen", label: "Leistungen" },
    { key: "praxis", label: "Praxis" },
    { key: "kontakt", label: "Kontakt" },
];
