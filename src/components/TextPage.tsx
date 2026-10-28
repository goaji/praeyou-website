import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { PAGE_TOP } from "@/lib/layout";
import Prose from "./Prose";
import PageTitle from "./PageTitle";
import type { NavKey } from "@/lib/routes";

type TextPageProps = {
    title: string;
    /** Optional lead sentence under the title. */
    intro?: ReactNode;
    /** Optional "Stand" date, e.g. for legal texts ("August 2026"). */
    updated?: string;
    /** Highlights the page in the main menu, if it is a menu item. */
    activeLink?: NavKey;
    children: ReactNode;
};

/** Shared layout for long text pages: Impressum, Datenschutz, Vor deiner Behandlung. */
export default function TextPage({ title, intro, updated, activeLink, children }: TextPageProps) {
    return (
        <div className="bg-cream text-ink">
            <Header background="light" activeLink={activeLink} />
            {/* Deliberately narrower than CONTAINER: long text reads better at ~70 characters per line */}
            <main className={`max-w-3xl mx-auto px-5 sm:px-8 pb-20 ${PAGE_TOP}`}>
                <PageTitle>{title}</PageTitle>
                {intro && <p className="font-serif italic text-xl leading-snug text-olive mb-8">{intro}</p>}
                {updated && <p className="text-[13px] text-olive mb-8">Stand: {updated}</p>}
                <Prose spacing="section">{children}</Prose>
            </main>
            <Footer />
        </div>
    );
}

/** A titled section of a text page. */
export function TextSection({ heading, children }: { heading: string; children: ReactNode }) {
    return (
        <section>
            <h2 className="font-serif font-semibold text-xl mb-2">{heading}</h2>
            <Prose>{children}</Prose>
        </section>
    );
}
