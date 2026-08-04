export default function Logo() {
    return (
        <svg viewBox="0 0 48 54" width={38} height={38 * 54 / 48} >
            <path d="M4 10 C12 15 18 25 22 39 C21 25 15 15 4 10 Z" fill="var(--color-leaf1)" />
            <path d="M46 4 C37 11 30 22 26 34 C23 43 18 49 10 52 C20 53 28 46 31 37 C35 25 40 12 46 4 Z" fill="var(--color-leaf2)" />
            <ellipse cx="24.79" cy="12.67" rx="4.97" ry="4.77" fill="var(--color-elipse)" stroke="var(--color-ink)" strokeWidth="1.87" />
        </svg>
    );
}