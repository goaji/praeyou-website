import type { Massage } from "@/app/leistungen/massagesData";

const paths: Record<Massage["icon"], React.ReactNode> = {
    leaf: (
        <>
            <path d="M4 20C4 20 4 12 9 7C14 2 20 4 20 4C20 4 22 10 17 15C12 20 4 20 4 20Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M5 19C9 15 13 11 19 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </>
    ),
    body: (
        <>
            <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
            <path d="M6 21c0-5.5 2.5-9.5 6-9.5s6 4 6 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </>
    ),
    drop: (
        <path d="M12 3C12 3 5.5 12 5.5 16.2A6.5 6.5 0 0012 22.7a6.5 6.5 0 006.5-6.5C18.5 12 12 3 12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    ),
    spine: (
        <>
            <path d="M12 2c3 3 3 6 0 9s-3 6 0 9" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="12.6" cy="4" r="1.1" fill="currentColor" />
            <circle cx="10.4" cy="7.5" r="1.1" fill="currentColor" />
            <circle cx="12.6" cy="11" r="1.1" fill="currentColor" />
            <circle cx="10.4" cy="14.5" r="1.1" fill="currentColor" />
            <circle cx="12.6" cy="18" r="1.1" fill="currentColor" />
            <circle cx="11" cy="21" r="1.1" fill="currentColor" />
        </>
    ),
    face: (
        <>
            <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="9" cy="10.3" r="0.9" fill="currentColor" />
            <circle cx="15" cy="10.3" r="0.9" fill="currentColor" />
            <path d="M8.7 15c1.1 1 2.2 1.5 3.3 1.5s2.2-.5 3.3-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </>
    ),
};

export function MassageIcon({ icon, size = 24 }: { icon: Massage["icon"]; size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
            {paths[icon]}
        </svg>
    );
}
