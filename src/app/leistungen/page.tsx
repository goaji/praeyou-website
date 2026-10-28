import MassagePreviewCard from "@/components/MassagePreviewCard";
import { massages } from "./massagesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTitle from "@/components/PageTitle";
import { CONTAINER, PAGE_TOP } from "@/lib/layout";

export default function LeistungenPage() {
  return (
    <div className="bg-cream/80 text-ink">
      <Header background="light" activeLink="leistungen" />
      <main className={`bg-cream pb-15 ${PAGE_TOP}`}>
        <section className={`${CONTAINER} flex flex-col items-center text-center pb-8 lg:pb-5`}>
          <PageTitle align="center">Unsere Massagen</PageTitle>
          <p className="leading-normal text-olive max-w-130">
            Zeit für dich. Für deinen Körper.<br />Für mehr Leichtigkeit, Balance und Wohlbefinden.
          </p>
        </section>
        {/* Cards are subgrids (see MassagePreviewCard); only the column count changes per breakpoint */}
        <div className={`${CONTAINER} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-4`}>
          {massages.map((m) => <MassagePreviewCard key={m.slug} massage={m} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}
