import { paymentNote } from "@/lib/contact";

/** Highlighted payment info: under the prices on /leistungen, above the booking button on the massage detail pages. */
export default function PaymentNote({ className = "" }: { className?: string }) {
    return (
        <p className={`flex items-center gap-3 rounded-md bg-leaf/40 px-5 py-3 text-small text-ink ${className}`}>
            <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 text-red"
            >
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M3 10h18" />
                <circle cx="16.5" cy="14.5" r="1" />
            </svg>
            <span>{paymentNote}</span>
        </p>
    );
}
