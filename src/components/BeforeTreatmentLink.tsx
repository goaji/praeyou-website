import Link from "next/link";
import { routes } from "@/lib/routes";

/** Link to the "Vor deiner Behandlung" page, shown wherever visitors decide to book. */
export default function BeforeTreatmentLink({ className = "" }: { className?: string }) {
    return (
        <Link
            href={routes.vorDerBehandlung}
            className={`inline-block text-[15px] text-ink underline decoration-gold underline-offset-4 hover:text-red ${className}`}
        >
            Hinweise vor der Behandlung →
        </Link>
    );
}
