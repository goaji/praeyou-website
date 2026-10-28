import type { Metadata } from "next";
import LegalPage, { LegalAddress, LegalSection } from "@/components/LegalPage";
import { EmailLink, PhoneLink } from "@/components/ContactLinks";

export const metadata: Metadata = {
  title: "Impressum",
};

// Source: PRAEYou_Impressum.docx (Stand August 2026).
// The USt-IdNr. section is omitted: per the document it is only added once a USt-IdNr. has been issued.
export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" updated="August 2026">
      <LegalSection heading="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)">
        <LegalAddress />
      </LegalSection>

      <LegalSection heading="Kontakt">
        <p>
          Telefon: <PhoneLink />
          <br />
          E-Mail: <EmailLink />
        </p>
      </LegalSection>

      <LegalSection heading="Tätigkeit">
        <p>
          Wellnessmassagen und Präventionsanwendungen. Die angebotenen Leistungen sind nicht medizinisch
          oder heilkundlich und ersetzen keine ärztliche Diagnose oder medizinisch notwendige Behandlung.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
