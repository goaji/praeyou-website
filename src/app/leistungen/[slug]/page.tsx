import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MassageDetails from "@/components/MassageDetail";
import { availableMassages, getAvailableMassageBySlug } from "../massagesData";
import { notFound } from "next/navigation";

/** Only the slugs from generateStaticParams exist; everything else (including coming-soon massages) is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return availableMassages.map((s) => ({ slug: s.slug }));
}

export default async function MassageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const massage = getAvailableMassageBySlug(slug);
  if (!massage) return notFound();

  const others = availableMassages.filter((m) => m.slug !== massage.slug);

  return (
    <div className="bg-cream/80 text-ink">
      <Header background="light" activeLink="leistungen" />
      <MassageDetails massage={massage} others={others} />
      <Footer />
    </div>
  );
}
