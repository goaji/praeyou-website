import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { contact } from "@/lib/contact";
import { PostalAddress } from "./ContactLinks";

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
            <main className="max-w-3xl mx-auto px-5 sm:px-8 pt-32 lg:pt-40 pb-20">
                <h1 className="font-serif font-bold text-3xl sm:text-4xl mb-2">{title}</h1>
                <p className="text-[13px] text-olive mb-10">Stand: {updated}</p>
                <div className="flex flex-col gap-8 text-[15px] leading-relaxed">{children}</div>
            </main>
            <Footer />
        </div>
    );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
    return (
        <section>
            <h2 className="font-serif font-semibold text-xl mb-2">{heading}</h2>
            <div className="flex flex-col gap-3">{children}</div>
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
