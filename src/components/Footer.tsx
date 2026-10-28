import Link from "next/link";
import LogoY from "./LogoY";
import { routes } from "@/lib/routes";
import { contact } from "@/lib/contact";
import { CONTAINER } from "@/lib/layout";

export default function Footer() {
    return (
        <footer className="text-[13px] text-cream bg-olive py-10">
            <div className={`${CONTAINER} flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left`}>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <LogoY />
                    <p className="m-0">© 2026 {contact.businessName}</p>
                </div>
                <nav aria-label="Weitere Seiten" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    <Link href={routes.vorDerBehandlung} className="hover:text-gold">Hinweise</Link>
                    <Link href={routes.impressum} className="hover:text-gold">Impressum</Link>
                    <Link href={routes.datenschutz} className="hover:text-gold">Datenschutz</Link>
                </nav>
            </div>
        </footer>
    );
}
