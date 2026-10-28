import type { Metadata } from "next";
import TextPage, { TextSection } from "@/components/TextPage";

export const metadata: Metadata = {
  title: "Vor deiner Behandlung",
};

const listClasses = "list-disc pl-5 flex flex-col gap-1";

// Text: PRAEYou_Vor_der_Behandlung_Augustina.docx from the owner (October 2026), unchanged.
// The document's letterhead (logo and "Massage & Prävention") is left out; the site header shows the brand.
export default function VorDerBehandlungPage() {
  return (
    <TextPage
      title="Vor deiner Behandlung"
      activeLink="vorDerBehandlung"
      intro="Damit deine Zeit bei PräYou entspannt, individuell und verantwortungsvoll gestaltet werden kann."
    >
      <TextSection heading="Gesundheit & Wohlbefinden">
        <p>
          Bitte informiere mich vor Beginn offen über gesundheitliche Beschwerden, bestehende Erkrankungen, aktuelle
          Verletzungen, Operationen oder Medikamente, die für die Behandlung relevant sein könnten.
        </p>
        <p>
          Meine Massagen dienen der Entspannung, Prävention und Förderung des allgemeinen Wohlbefindens. Sie ersetzen
          keine medizinische Diagnose oder Behandlung.
        </p>
      </TextSection>

      <TextSection heading="Wann eine Massage nicht durchgeführt werden sollte">
        <p>
          Bei bestimmten gesundheitlichen Situationen ist eine Massage nicht oder vorübergehend nicht geeignet. Dazu
          gehören insbesondere:
        </p>
        <ul className={listClasses}>
          <li>Fieber, akute Infekte oder akute Entzündungen</li>
          <li>ansteckende Erkrankungen</li>
          <li>offene Wunden oder akute Hauterkrankungen im Behandlungsbereich</li>
          <li>akute Thrombose oder Embolie</li>
          <li>frische Verletzungen oder kürzlich erfolgte Operationen</li>
          <li>starke oder ungeklärte Schmerzen</li>
          <li>akute gesundheitliche Beschwerden, deren Ursache noch nicht abgeklärt wurde</li>
        </ul>
        <p>In diesen Fällen verschieben wir deinen Termin lieber, bis eine Massage wieder unbedenklich möglich ist.</p>
      </TextSection>

      <TextSection heading="Wann ich eine ärztliche Unbedenklichkeit benötige">
        <p>
          Bei bestimmten Vorerkrankungen oder gesundheitlichen Besonderheiten kann eine Massage möglich sein. Vorher
          möchte ich jedoch sicherstellen, dass aus medizinischer Sicht nichts dagegenspricht.
        </p>
        <ul className={listClasses}>
          <li>Herz-Kreislauf-Erkrankungen</li>
          <li>schwere oder komplexe chronische Erkrankungen</li>
          <li>Erkrankungen des Gefäßsystems</li>
          <li>Schwangerschaften mit besonderen gesundheitlichen Risiken</li>
          <li>kürzlich erfolgte Operationen oder Verletzungen nach abgeschlossener Akutphase</li>
          <li>
            regelmäßige Einnahme bestimmter Medikamente, insbesondere wenn diese Blutgerinnung, Kreislauf oder
            Schmerzempfinden beeinflussen
          </li>
          <li>andere Erkrankungen, bei denen nicht eindeutig beurteilt werden kann, ob eine Massage geeignet ist</li>
        </ul>
        <p>
          <strong>
            In diesen Fällen bitte ich dich, vor der Behandlung eine ärztliche Bestätigung mitzubringen, dass aus
            medizinischer Sicht keine Bedenken gegen eine Wellnessmassage bestehen.
          </strong>
        </p>
        <p>Im Zweifel gilt: lieber einmal mehr ärztlich abklären lassen.</p>
      </TextSection>

      <TextSection heading="Deine Behandlung – so, wie du dich wohlfühlst">
        <p>
          Vor Beginn besprechen wir kurz, was du dir von deiner Massage wünschst und ob es Bereiche gibt, die besondere
          Aufmerksamkeit benötigen oder nicht behandelt werden sollen.
        </p>
        <p>
          Für die Behandlung kannst du dich vollständig entkleiden. Wenn du das nicht möchtest, ist das
          selbstverständlich genauso in Ordnung. Du entscheidest jederzeit selbst, womit du dich wohlfühlst.
        </p>
        <p>
          Während der gesamten Massage bist du mit Tüchern abgedeckt. Freigelegt wird jeweils nur der Körperbereich, der
          gerade behandelt wird.
        </p>
        <p>
          Auch während der Behandlung darfst und sollst du jederzeit sagen, wenn du etwas verändern möchtest – zum
          Beispiel den Druck, die Position, die Temperatur oder einen bestimmten Griff.
        </p>
      </TextSection>

      <TextSection heading="Vor deinem Termin">
        <p>Komm nach Möglichkeit ein paar Minuten vor deinem Termin, damit wir ohne Hektik beginnen können.</p>
        <p>
          Für eine angenehme Behandlung bitte ich dich, frisch geduscht zu deinem Termin zu kommen. Dein Handy darf
          während dieser Zeit gerne lautlos bleiben – diese Zeit gehört ganz dir.
        </p>
        <p>
          Wenn du einmal etwas später kommst, kann sich die Behandlungszeit entsprechend verkürzen, damit nachfolgende
          Termine wie geplant beginnen können.
        </p>
      </TextSection>

      <aside className="rounded-md bg-leaf/40 px-6 py-5">
        <p className="font-serif italic text-2xl text-red mb-1">Du zuerst.</p>
        <p>Dein Wohlbefinden und dein persönliches Empfinden stehen während der gesamten Behandlung im Mittelpunkt.</p>
      </aside>
    </TextPage>
  );
}
