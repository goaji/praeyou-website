/**
 * "Exklusiv für Frauen" pill. The owner wants this very visible: shown on the hero and on /leistungen.
 */
export default function WomenOnlyBadge({ className = "" }: { className?: string }) {
    return (
        <p className={`rounded-full bg-olive px-8 py-3 sm:px-10 sm:py-3.5 text-small sm:text-lead font-semibold uppercase tracking-widest text-cream ${className}`}>
            Exklusiv für Frauen
        </p>
    );
}
