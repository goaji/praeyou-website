import LogoY from "./LogoY";

export default function Footer() {
    return (
        <footer className="text-[13px] text-cream bg-olive px-5 sm:px-8 lg:px-14 py-10">
            {/* Same max width as the header, so footer and header content line up on wide screens */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <LogoY />
                    <p className="m-0">© 2026 PRÄYOU · Massage & Prävention</p>
                </div>
                <div className="flex items-center gap-6">
                    <p className="m-0">Impressum</p>
                    <p className="m-0">Datenschutz</p>
                </div>
            </div>
        </footer>
    );
}
