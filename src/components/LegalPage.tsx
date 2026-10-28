import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { contact } from "@/lib/contact";
import { PostalAddress } from "./ContactLinks";
import { PAGE_TOP } from "@/lib/layout";
import Prose from "./Prose";
import PageTitle from "./PageTitle";

type LegalPageProps = {
    title: string;
    /** "Stand" date of the legal text, e.g. "August 2026". */
    updated: string;
    children: ReactNode;
};

/** Shared layout for Impressum and Datenschutz. */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
    return (
        <div className="bg-cream text-ink">
            <Header background="light" />
            {/* Deliberately narrower than CONTAINER: long legal text reads better at ~70 characters per line */}
            <main className={`max-w-3xl mx-auto px-5 sm:px-8 pb-20 ${PAGE_TOP}`}>
                <PageTitle>{title}</PageTitle>
                <p className="text-[13px] text-olive mb-8">Stand: {updated}</p>
                <Prose spacing="section">{children}</Prose>
            </main>
            <Footer />
        </div>
    );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
    return (
        <section>
            <h2 className="font-serif font-semibold text-xl mb-2">{heading}</h2>
            <Prose>{children}</Prose>
        </section>
    );
}

/** Owner, business name and postal address, as required on both legal pages. */
export function LegalAddress() {
    return (
        <p>
            {contact.legalName}
            <br />
            {contact.businessName}
            <br />
            <PostalAddress />
        </p>
    );
}
