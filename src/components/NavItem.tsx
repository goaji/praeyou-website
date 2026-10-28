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
        return `block py-3 text-lg tracking-wide border-b border-ink/5 ${isActive ? "text-red" : "text-ink"}`;
    }
    if (isActive) {
        return `${onDark ? "text-gold" : "text-red"} border-b border-gold pb-0.5`;
    }
    return onDark ? "text-cream" : "text-ink";
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
