/**
 * Space between the top of the window and a page's <h1>, below the fixed header.
 * Every page with a title uses this, so titles sit at the same height across the site.
 * (A literal class string, so Tailwind picks it up.)
 */
export const PAGE_TOP_BASE = "pt-32";
export const PAGE_TOP_LG = "lg:pt-40";
export const PAGE_TOP = `${PAGE_TOP_BASE} ${PAGE_TOP_LG}`;

/**
 * The site's content width: max 1280px, centered, with side padding inside it.
 * Header, footer and every section use it, so all content edges line up on every page.
 * (The legal pages deliberately use a narrower reading column.)
 */
export const CONTAINER = "max-w-7xl mx-auto px-5 sm:px-8 lg:px-14";
