import MassagePreviewCard from "@/components/MassagePreviewCard";
import { massages } from "./massagesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import { CONTAINER, PAGE_TOP } from "@/lib/layout";
import PaymentNote from "@/components/PaymentNote";
import WomenOnlyBadge from "@/components/WomenOnlyBadge";

export default function LeistungenPage() {
  return (
    <div className="bg-cream/80 text-ink">
      <Header background="light" activeLink="leistungen" />
      <main className={`bg-cream pb-15 ${PAGE_TOP}`}>
        <section
          className={`${CONTAINER} flex flex-col items-center text-center pb-8 lg:pb-5`}
        >
          <PageTitle align="center">Massagen</PageTitle>
          <WomenOnlyBadge className="mt-2 mb-6" />
        </section>
        {/* Cards are subgrids (see MassagePreviewCard); only the column count changes per breakpoint */}
        <div
          className={`${CONTAINER} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8`}
        >
          {massages.map((m) => (
            <MassagePreviewCard key={m.slug} massage={m} />
          ))}
        </div>
        <div className={`${CONTAINER} flex justify-center pt-4 lg:pt-12`}>
          <PaymentNote />
        </div>
      </main>
      <Footer />
    </div>
  );
}
