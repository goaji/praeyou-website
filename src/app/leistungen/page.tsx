import MassagePreview from "@/components/MassagePreviewCard";
import { massages } from "./massagesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LeistungenPage() {
  return (
    <div className="bg-cream/80 text-ink">
      <Header background="light" activeLink="leistungen" />
      <main className="bg-cream pt-15 pb-15">
        <section className="flex flex-col items-center text-center px-14 pt-9 pb-5">
          <h1 className="font-serif font-bold text-4xl text-ink mb-2.5">
            Unsere Massagen
          </h1>
          <div className="w-11 h-px bg-[#8f9573] mb-2.5" />
          <p className="text-[15px] leading-normal text-[#4a4b3f] max-w-130">
            Zeit für dich. Für deinen Körper.<br />Für mehr Leichtigkeit, Balance und Wohlbefinden.
          </p>
        </section>
        <div className="max-w-7xl mx-auto grid grid-cols-5 grid-rows-[repeat(7,auto)] grid-flow-col gap-x-4">
          {massages.map((m) => <MassagePreview key={m.slug} massage={m} />)}
        </div>
      </main>
      <Footer />
    </div >
  );
}
