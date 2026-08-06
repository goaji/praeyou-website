import MassagePreview from "@/components/MassagePreviewCard";
import { massages } from "./massagesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Leistungen() {
  return (
    <div className="bg-cream/80 text-ink">
      <Header background="light" activeLink="leistungen" />
      <main className="bg-cream pt-30 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-5 grid-rows-[repeat(7,auto)] grid-flow-col gap-x-4 px-14 ">
          {massages.map((m) => <MassagePreview key={m.name} massage={m} />)}
        </div>
      </main>
      <Footer />
    </div >
  );
}
