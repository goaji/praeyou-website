/**
 * Single source of truth for all internal URLs.
 * Rename a route here and every link in the app follows.
 */
export const routes = {
    home: "/",
    uber: "/uber",
    leistungen: "/leistungen",
    kontakt: "/#kontakt",
    impressum: "/impressum",
    datenschutz: "/datenschutz",
    vorDerBehandlung: "/vor-der-behandlung",
} as const;

/** URL of a single massage's detail page. */
export const massagePath = (slug: string) => `${routes.leistungen}/${slug}`;

/** Order and labels of the main navigation. Every key must be a route. */
export const navLinks = [
    { key: "home", label: "Home" },
    { key: "uber", label: "Über mich" },
    { key: "leistungen", label: "Leistungen" },
    { key: "vorDerBehandlung", label: "Hinweise" },
] as const satisfies readonly { key: keyof typeof routes; label: string }[];

/** Pages that appear in the main navigation (and can be highlighted in the header). */
export type NavKey = (typeof navLinks)[number]["key"];
