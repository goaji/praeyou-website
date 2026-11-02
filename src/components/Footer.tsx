import Link from "next/link";
import Image from "next/image";
import { routes } from "@/lib/routes";
import { contact } from "@/lib/contact";
import { CONTAINER } from "@/lib/layout";

export default function Footer() {
    return (
        <footer className="text-[13px] text-cream bg-olive py-4">
            <div className={`${CONTAINER} flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left`}>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <Image src="/logo-footer.svg" alt="Präyou" width={930} height={934} className="h-20 lg:h-24 w-auto" />
                    <p className="m-0">© 2026 {contact.businessName}</p>
                </div>
                <nav aria-label="Weitere Seiten" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    <Link href={routes.vorDerBehandlung} className="hover:underline underline-offset-4">Hinweise</Link>
                    <Link href={routes.impressum} className="hover:underline underline-offset-4">Impressum</Link>
                    <Link href={routes.datenschutz} className="hover:underline underline-offset-4">Datenschutz</Link>
                </nav>
            </div>
        </footer>
    );
}
