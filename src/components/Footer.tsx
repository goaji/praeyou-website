import LogoY from "./LogoY";

export default function Footer() {
    return (
        <footer className="text-[13px] text-cream flex items-center justify-between flex-wrap gap-5 px-14 py-10 bg-olive">
            <div className="flex items-center gap-4">
                <LogoY />
                <p className="m-0">© 2026 PRÄYOU · Massage & Prävention</p>
            </div>
            <div className="flex items-center gap-6">
                <p className="m-0">Impressum</p>
                <p className="m-0">Datenschutz</p>
            </div>
        </footer>
    );
}