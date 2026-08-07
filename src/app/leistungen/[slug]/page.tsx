import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MassageDetails from "@/components/MassageDetail";
import { getMassageBySlug, Massage, massages } from "../massagesData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return massages.map((s) => ({ slug: s.slug }));
}

export default async function MassageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const massage: Massage | undefined = getMassageBySlug(slug);
  if (!massage) return notFound();

  const others: Massage[] = massages.filter((m) => m.slug !== massage.slug);

  return (
    <div className="bg-cream/80 text-ink">
      <Header background="light" activeLink="leistungen" />
      <MassageDetails massage={massage} others={others} />
      <Footer />
    </div >
  );
}
