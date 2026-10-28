import type { Metadata } from "next";
import LegalPage, { LegalAddress, LegalSection } from "@/components/LegalPage";
import { EmailLink } from "@/components/ContactLinks";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
};

// Source: Datenschutzerklaerung_PRAEYou.docx (Stand August 2026), adapted with the owner's approval (October 2026):
// §5 describes the WhatsApp link button; §6, §7, §11, §12 state facts instead of "vorgesehener Stand" / "sollte".
// The closing "Hinweis" (a note to the owner that the template must be checked) is intentionally not published.
// Must be updated whenever services are added to the site (analytics, embeds, forms, …).
export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="Oktober 2026">
      <p>
        Mit dieser Datenschutzerklärung informieren wir darüber, welche personenbezogenen Daten beim Besuch
        dieser Website sowie bei einer Kontaktaufnahme verarbeitet werden.
      </p>

      <LegalSection heading="1. Verantwortliche">
        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
        <LegalAddress />
        <p>E-Mail: <EmailLink /></p>
      </LegalSection>

      <LegalSection heading="2. Allgemeine Hinweise zur Datenverarbeitung">
        <p>
          Personenbezogene Daten sind alle Informationen, mit denen eine natürliche Person direkt oder indirekt
          identifiziert werden kann. Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung
          dieser Website, die Kommunikation mit Interessentinnen und Interessenten bzw. Kundinnen und Kunden oder
          zur Erfüllung gesetzlicher Pflichten erforderlich ist.
        </p>
        <p>
          Die Verarbeitung erfolgt insbesondere auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit sie zur
          Durchführung vorvertraglicher Maßnahmen oder zur Erfüllung eines Vertrags erforderlich ist, sowie auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO, soweit ein berechtigtes Interesse an einer sicheren,
          zuverlässigen und nutzerfreundlichen Bereitstellung der Website besteht.
        </p>
      </LegalSection>

      <LegalSection heading="3. Hosting der Website">
        <p>
          Diese Website wird bei Hostinger gehostet. Anbieter ist die Hostinger International Ltd., 61 Lordou
          Vironos Street, Lumiel Building, 4th floor, 6023 Larnaca, Zypern.
        </p>
        <p>
          Beim Aufruf der Website können durch den Hostinganbieter technisch erforderliche Daten verarbeitet
          werden. Hierzu können insbesondere die IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten
          bzw. Dateien, Browserinformationen, Betriebssystem, Referrer-Informationen sowie weitere technische
          Verbindungsdaten gehören.
        </p>
        <p>
          Die Verarbeitung dieser Daten dient insbesondere der technischen Bereitstellung der Website, der
          Gewährleistung von Stabilität und Sicherheit sowie der Erkennung und Behebung technischer Störungen.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren und
          störungsfreien Betrieb unseres Internetauftritts.
        </p>
        <p>
          Soweit Hostinger personenbezogene Daten in unserem Auftrag verarbeitet, erfolgt dies auf Grundlage einer
          Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO. Hostinger kann im Rahmen seiner Infrastruktur
          Unterauftragsverarbeiter einsetzen. Soweit dabei Daten in Staaten außerhalb der Europäischen Union bzw.
          des Europäischen Wirtschaftsraums verarbeitet werden, erfolgt eine Übermittlung nur unter Beachtung der
          hierfür geltenden datenschutzrechtlichen Voraussetzungen.
        </p>
      </LegalSection>

      <LegalSection heading="4. Kontaktaufnahme per E-Mail">
        <p>
          Auf unserer Website wird die E-Mail-Adresse <EmailLink /> zur Kontaktaufnahme angegeben. Wenn Sie uns
          per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten, insbesondere Ihre
          E-Mail-Adresse, Ihren Namen, soweit angegeben, sowie den Inhalt Ihrer Nachricht.
        </p>
        <p>
          Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage. Bezieht sich die Kontaktaufnahme auf eine
          Terminvereinbarung, eine konkrete Leistung oder die Anbahnung eines Vertrags, ist Art. 6 Abs. 1 lit. b
          DSGVO die Rechtsgrundlage. Bei sonstigen Anfragen erfolgt die Verarbeitung auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO; unser berechtigtes Interesse besteht in der sachgerechten Bearbeitung der Anfrage.
        </p>
        <p>
          Die Daten werden gelöscht, wenn sie für die Bearbeitung der Anfrage nicht mehr erforderlich sind und
          keine gesetzlichen Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine weitere Speicherung
          bestehen.
        </p>
      </LegalSection>

      <LegalSection heading="5. Termin- und Kontaktanfragen über WhatsApp Business">
        <p>
          Auf unserer Website wird eine Telefonnummer angegeben, unter der Sie uns freiwillig über WhatsApp
          Business kontaktieren können. Zusätzlich befindet sich auf der Website ein Link, der beim Anklicken WhatsApp öffnet und eine Nachricht an uns vorbereitet. Durch den bloßen Besuch unserer Website wird keine Verbindung zu WhatsApp hergestellt; eine Verbindung entsteht erst, wenn Sie diesen Link aktiv anklicken.
        </p>
        <p>
          Wenn Sie sich selbst dafür entscheiden, uns über WhatsApp zu kontaktieren, werden die im Rahmen der
          Kommunikation übermittelten personenbezogenen Daten verarbeitet. Dazu können insbesondere Ihre
          Telefonnummer, Ihr WhatsApp-Profilname, der Inhalt Ihrer Nachrichten sowie weitere von Ihnen freiwillig
          übermittelte Angaben gehören.
        </p>
        <p>
          Wir verwenden WhatsApp Business zur Kommunikation und insbesondere zur Bearbeitung von Termin- und
          sonstigen Anfragen. Soweit die Kommunikation der Anbahnung oder Durchführung eines Vertrags dient,
          erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Im Übrigen erfolgt sie auf
          Grundlage von Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an einer einfachen und
          von Kundinnen und Kunden gewünschten Kommunikationsmöglichkeit.
        </p>
        <p>
          Die Nutzung von WhatsApp ist freiwillig. Sie können uns alternativ jederzeit per E-Mail unter{" "}
          <EmailLink /> kontaktieren.
        </p>
        <p>
          WhatsApp ist ein Dienst der WhatsApp Ireland Limited. Bei Nutzung von WhatsApp können Daten durch
          WhatsApp bzw. verbundene Unternehmen nach deren eigenen Datenschutzbestimmungen verarbeitet werden. Dabei
          kann eine Verarbeitung von Daten außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums
          nicht ausgeschlossen werden.
        </p>
        <p>
          Bitte übermitteln Sie über WhatsApp nach Möglichkeit keine besonders sensiblen Informationen,
          insbesondere keine ausführlichen Gesundheitsdaten. Für die Terminvereinbarung sind solche Angaben
          grundsätzlich nicht erforderlich.
        </p>
      </LegalSection>

      <LegalSection heading="6. Keine Kontaktformulare und keine Analyse- oder Marketingdienste">
        <p>
          Auf dieser Website wird derzeit kein Kontaktformular eingesetzt. Ebenso sind keine eigenen Analyse-, Tracking- oder Marketingdienste wie Google Analytics oder Meta Pixel eingebunden.
        </p>
        <p>
          Sollten zukünftig zusätzliche Dienste, externe Inhalte oder Analyse- bzw. Marketingwerkzeuge eingebunden
          werden, wird diese Datenschutzerklärung entsprechend angepasst. Soweit für deren Einsatz eine
          Einwilligung erforderlich ist, werden diese Dienste erst nach einer entsprechenden Einwilligung aktiviert.
        </p>
      </LegalSection>

      <LegalSection heading="7. Cookies und technisch erforderliche Funktionen">
        <p>
          Soweit für den technischen Betrieb der Website unbedingt erforderliche Cookies oder vergleichbare
          Technologien eingesetzt werden, dienen diese ausschließlich der Bereitstellung und Funktionsfähigkeit der
          Website.
        </p>
        <p>
          Nicht technisch erforderliche Analyse- oder Marketing-Cookies werden nicht eingesetzt. Sollte sich dies zukünftig ändern, werden die erforderlichen datenschutzrechtlichen
          Informationen und – soweit gesetzlich erforderlich – eine Einwilligungsmöglichkeit bereitgestellt.
        </p>
      </LegalSection>

      <LegalSection heading="8. Speicherdauer">
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Verarbeitungszweck
          erforderlich ist. Darüber hinaus können Daten gespeichert werden, soweit gesetzliche Aufbewahrungsfristen
          bestehen oder die Speicherung zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
          erforderlich ist.
        </p>
      </LegalSection>

      <LegalSection heading="9. Ihre Rechte">
        <p>
          Sie haben im Rahmen der gesetzlichen Voraussetzungen insbesondere das Recht auf Auskunft über die zu
          Ihrer Person gespeicherten Daten (Art. 15 DSGVO), Berichtigung unrichtiger Daten (Art. 16 DSGVO),
          Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20
          DSGVO) sowie Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO).
        </p>
        <p>
          Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie eine erteilte Einwilligung jederzeit
          mit Wirkung für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung
          bleibt hiervon unberührt.
        </p>
        <p>Zur Ausübung Ihrer Rechte können Sie sich an <EmailLink /> wenden.</p>
      </LegalSection>

      <LegalSection heading="10. Beschwerderecht bei einer Aufsichtsbehörde">
        <p>
          Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind,
          dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. Sie können sich
          insbesondere an die für Ihren Wohnort, Ihren Arbeitsplatz oder den Ort des mutmaßlichen Verstoßes
          zuständige Aufsichtsbehörde wenden.
        </p>
      </LegalSection>

      <LegalSection heading="11. Sicherheit">
        <p>
          Wir treffen angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor Verlust,
          Manipulation, unberechtigtem Zugriff oder sonstiger unzulässiger Verarbeitung zu schützen. Die Website wird über eine verschlüsselte HTTPS-Verbindung bereitgestellt.
        </p>
      </LegalSection>

      <LegalSection heading="12. Aktualität und Änderung dieser Datenschutzerklärung">
        <p>
          Diese Datenschutzerklärung entspricht dem aktuellen Funktionsumfang der Website. Änderungen
          der Website, der eingesetzten Dienste oder der rechtlichen Anforderungen können eine Anpassung
          erforderlich machen. Die jeweils aktuelle Fassung ist auf dieser Website dauerhaft abrufbar.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
