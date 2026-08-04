import Button from "./Button";

export default function ContactForm() {
    return (
        <section id="kontakt" className="bg-cream px-14 py-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-18 items-start">
                <div className="pt-3">
                    <span className="text-sm tracking-widest uppercase text-olive font-medium">Termine</span>
                    <h2 className="font-serif font-medium text-4xl my-4 text-ink">
                        Zeit für Sie <em className="italic">reservieren</em>.
                    </h2>
                    <p className="text-olive leading-relaxed  mb-7 max-w-105">
                        Senden Sie eine Anfrage mit Ihrer Wunschbehandlung und Ihrem
                        Wunschtermin. Sie erhalten in der Regel innerhalb eines
                        Werktags eine Bestätigung per Telefon oder E-Mail.
                    </p>
                    <div className="flex flex-col gap-2.5 text-[15px] text-ink">
                        <span>☎ <a href="tel:+490000000000">+49 (0) 000 000 000</a></span>
                        <span>✉ <a href="mailto:hallo@praeyou.de">hallo@praeyou.de</a></span>
                        <span>📍 Musterstraße 12, 70000 Stuttgart</span>
                    </div>
                </div>

                <div className="bg-white rounded-md p-10 shadow-[0_20px_50px_rgba(46,47,38,0.08)]">
                    <div className="grid grid-cols-2 gap-5 mb-5">
                        <div>
                            <label className="block text-[11px] tracking-widest uppercase text-olive mb-2">Name</label>
                            <input type="text" className="w-full box-border border border-ink/15 rounded p-3 text-[15px] bg-cream" />
                        </div>
                        <div>
                            <label className="block text-[11px] tracking-widest uppercase text-olive mb-2">Telefon oder E-Mail</label>
                            <input type="text" className="w-full box-border border border-ink/15 rounded p-3 text-[15px] bg-cream" />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label className="block text-[11px] tracking-widest uppercase text-olive mb-2">Behandlung</label>
                        <select className="w-full box-border border border-ink/15 rounded p-3 text-[15px] bg-cream text-ink">
                            <option>Klassische Masolive — 60 Min.</option>
                            <option>Sportmasolive — 50 Min.</option>
                            <option>Triggerpunkt-Masolive — 40 Min.</option>
                            <option>Rückenmasolive — 30 Min.</option>
                            <option>Ganzkörper-Wellness — 90 Min.</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-[11px] tracking-widest uppercase text-olive mb-2">Wunschtage & Uhrzeiten</label>
                        <textarea
                            rows={3}
                            placeholder="z. B. Dienstag oder Donnerstag, später Nachmittag"
                            className="w-full box-border border border-ink/15 rounded p-3 text-[15px] bg-cream font-sans resize-y"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button buttonText="Anfrage senden" link="/#kontakt" textColor="text-cream" backgroundColor="bg-olive" border="border-olive" />
                    </div>
                    <p className="text-[13px] text-olive mt-4 text-center">
                        Dies ist eine Anfrage, keine verbindliche Buchung. <br />
                        Sie erhalten zuerst eine Rückmeldung.
                    </p>
                </div>
            </div>
        </section>
    );
}