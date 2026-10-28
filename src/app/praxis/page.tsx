import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import { CONTAINER, PAGE_TOP } from "@/lib/layout";

export default function PraxisPage() {
  return (
    <div className="bg-cream text-ink">
      <Header background="light" activeLink="praxis" />
      <main className={`${CONTAINER} ${PAGE_TOP} min-h-[60vh] flex flex-col items-center text-center pb-24`}>
        <PageTitle align="center">Praxis</PageTitle>
        <p className="text-olive">Diese Seite ist bald verfügbar.</p>
      </main>
      <Footer />
    </div>
  );
}
