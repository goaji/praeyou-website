import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PraxisPage() {
  return (
    <div className="bg-cream text-ink">
      <Header background="light" activeLink="praxis" />
      <main className="min-h-[60vh] flex flex-col items-center justify-center text-center px-14 pt-36 pb-24">
        <h1 className="font-serif font-bold text-4xl mb-2.5">Praxis</h1>
        <div className="w-11 h-px bg-[#8f9573] mb-2.5" />
        <p className="text-[15px] text-[#4a4b3f]">Diese Seite ist bald verfügbar.</p>
      </main>
      <Footer />
    </div>
  );
}
