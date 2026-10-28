import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Prose from "@/components/Prose";
import PageTitle from "@/components/PageTitle";
import { BRAND } from "@/lib/contact";
import { MEDIA_MIN_LG } from "@/lib/breakpoints";
import { CONTAINER, PAGE_TOP } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Über mich",
};

// Text: uber_mich.rtf from the owner (October 2026), unchanged.
export default function UberPage() {
  return (
    <div className="bg-cream text-ink">
      <Header background="light" activeLink="uber" />
      <main className={`${CONTAINER} ${PAGE_TOP} pb-20 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16 items-start`}>
        <div className="relative aspect-[2/3] max-w-md w-full mx-auto overflow-hidden rounded-md">
          <Image
            src="/about/tina.jpg"
            alt={`Tina, Gründerin von ${BRAND}`}
            fill
            sizes={`${MEDIA_MIN_LG} 40vw, 100vw`}
            className="object-cover"
            fetchPriority="high"
          />
        </div>

        <div className="flex flex-col max-w-xl">
          <PageTitle>Über mich</PageTitle>

          <Prose>
            <blockquote className="font-serif italic text-2xl leading-snug text-olive">
              „In der Ruhe entsteht oft das, was im Alltag verloren geht: die Verbindung zu uns selbst, innere
              Klarheit und die Erinnerung daran, wie wertvoll wir sind.“
            </blockquote>

            <p>Ich bin Tina, Fachpraktikerin für Wellness und Prävention und Gründerin von PräYou.</p>
            <p>
              Hauptberuflich komme ich aus dem technischen Vertrieb – ein Alltag geprägt von Verantwortung, Tempo,
              Reisen und ständiger Erreichbarkeit. Ich kenne die stressige Seite des Lebens daher sehr gut und weiß
              aus eigener Erfahrung, wie schnell man im Funktionieren den Kontakt zu sich selbst verlieren kann.
            </p>
            <p>Genau daraus entstand meine Vision.</p>
            <p>
              Ich möchte einen Ort schaffen, an dem Menschen zur Ruhe kommen. Einen Raum, in dem nicht Leistung
              zählt, sondern Wahrnehmung.
            </p>
            <p>
              In meiner Arbeit verbinde ich fundiertes Fachwissen mit einem ganzheitlichen Blick auf den Menschen.
              Jede Massage passe ich individuell an – achtsam, intuitiv und auf deine Bedürfnisse abgestimmt.
            </p>
            <p>
              Als naturverbundener und aktiver Mensch glaube ich an die Kraft von Balance, Bewegung und echter
              Regeneration.
            </p>

            <div className="mt-4 flex flex-col gap-1">
              <p className="font-serif text-2xl text-red">PräYou – Du zuerst.</p>
              <p>Das ist nicht nur mein Name, das ist meine Haltung.</p>
            </div>
          </Prose>
        </div>
      </main>
      <Footer />
    </div>
  );
}
