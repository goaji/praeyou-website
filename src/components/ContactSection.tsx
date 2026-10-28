import type { ReactNode } from "react";
import { bookingMessage, contact, emailLink, phoneLink, whatsappLink } from "@/lib/contact";
import { PostalAddress } from "./ContactInfo";
import BeforeTreatmentLink from "./BeforeTreatmentLink";
import { CONTAINER } from "@/lib/layout";

type Channel = {
    href: string;
    label: string;
    value: string;
    icon: ReactNode;
    external?: boolean;
};

const iconProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
} as const;

const channels: Channel[] = [
    {
        href: phoneLink,
        label: "Anrufen",
        value: contact.phoneDisplay,
        icon: (
            <svg {...iconProps}>
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
            </svg>
        ),
    },
    {
        href: whatsappLink(bookingMessage()),
        label: "WhatsApp",
        value: "Nachricht schreiben",
        external: true,
        icon: (
            <svg {...iconProps}>
                <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.5A8.5 8.5 0 1 1 21 11.5z" />
            </svg>
        ),
    },
    {
        href: emailLink,
        label: "E-Mail",
        value: contact.email,
        icon: (
            <svg {...iconProps}>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
            </svg>
        ),
    },
];

export default function ContactSection() {
    return (
        <section id="kontakt" className="bg-cream py-16 lg:py-24">
            <div className={`${CONTAINER} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-start`}>
                <div className="pt-3">
                    <span className="text-sm tracking-widest uppercase text-olive font-medium">Termine</span>
                    <h2 className="font-serif font-medium text-3xl sm:text-4xl my-4 text-ink">
                        Zeit für dich <em className="italic">reservieren</em>.
                    </h2>
                    <p className="text-olive leading-relaxed mb-7 max-w-105">
                        Ruf mich an oder schreib mir per WhatsApp. Während einer
                        Behandlung kann ich nicht ans Telefon gehen – ich melde mich aber
                        so schnell wie möglich zurück.
                    </p>
                    <BeforeTreatmentLink className="mb-7" />
                    <address className="not-italic text-[15px] text-ink">
                        <span className="block text-[11px] tracking-widest uppercase text-olive mb-1">Adresse</span>
                        <PostalAddress />
                    </address>
                </div>

                <ul className="bg-white rounded-md p-3 sm:p-4 shadow-[0_20px_50px_rgba(46,47,38,0.08)] flex flex-col gap-1">
                    {channels.map((channel) => (
                        <li key={channel.label}>
                            <a
                                href={channel.href}
                                {...(channel.external && { target: "_blank", rel: "noopener noreferrer" })}
                                className="flex items-center gap-4 rounded p-4 transition-colors hover:bg-cream focus-visible:bg-cream"
                            >
                                <span className="w-11 h-11 rounded-full bg-red/20 text-olive flex items-center justify-center shrink-0">
                                    {channel.icon}
                                </span>
                                <span className="flex flex-col min-w-0">
                                    <span className="text-[11px] tracking-widest uppercase text-olive">{channel.label}</span>
                                    <span className="text-[17px] text-ink truncate">{channel.value}</span>
                                </span>
                                <span className="ml-auto text-olive" aria-hidden="true">→</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
