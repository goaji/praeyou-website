import Link from "next/link";

type NavItemProps = {
    href: string;
    label: string;
    isActive: boolean;
    variant: "desktop" | "mobile";
    /** Desktop only: the header is transparent on top of the hero image. */
    onDark?: boolean;
    onClick?: () => void;
};

function getNavItemClasses(variant: NavItemProps["variant"], isActive: boolean, onDark: boolean) {
    if (variant === "mobile") {
        // The current page is underlined, not only red, so it is visible without telling colours apart (as on desktop)
        return `block py-3 text-xl tracking-wide border-b border-ink/5 ${isActive ? "text-red underline decoration-red underline-offset-8" : "text-ink"}`;
    }
    if (isActive) {
        return "whitespace-nowrap text-red border-b border-red pb-0.5";
    }
    return `whitespace-nowrap ${onDark ? "text-cream" : "text-ink"}`;
}

export default function NavItem({ href, label, isActive, variant, onDark = false, onClick }: NavItemProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            aria-current={isActive ? "page" : undefined}
            className={getNavItemClasses(variant, isActive, onDark)}
        >
            {label}
        </Link>
    );
}
