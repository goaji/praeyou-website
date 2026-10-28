import type { Metadata } from "next";
import TextPage, { TextSection } from "@/components/TextPage";
import { EmailLink, LegalAddress, PhoneLink } from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Impressum",
};

// Source: PRAEYou_Impressum.docx (Stand August 2026).
// The USt-IdNr. section is omitted: per the document it is only added once a USt-IdNr. has been issued.
export default function ImpressumPage() {
  return (
    <TextPage title="Impressum" updated="August 2026">
      <TextSection heading="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)">
        <LegalAddress />
      </TextSection>

      <TextSection heading="Kontakt">
        <p>
          Telefon: <PhoneLink />
          <br />
          E-Mail: <EmailLink />
        </p>
      </TextSection>

      <TextSection heading="Tätigkeit">
        <p>
          Wellnessmassagen und Präventionsanwendungen. Die angebotenen Leistungen sind nicht medizinisch
          oder heilkundlich und ersetzen keine ärztliche Diagnose oder medizinisch notwendige Behandlung.
        </p>
      </TextSection>
    </TextPage>
  );
}
