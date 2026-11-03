export type MassageOption = {
  duration: string;
  /** Optional short name for this option, e.g. "Teilmassage". */
  title?: string;
  /** Optional one-line description, shown on the detail page. */
  note?: string;
  /** Leave empty while the price is not set yet; the row then shows no price. */
  price?: string;
};

type MassageBase = {
  name: string;
  slug: string;
  subtitle: string;
  /** Paragraphs of the short text on the card on /leistungen. */
  desc: string[];
  /** Landscape 3:2 (e.g. 1800×1200), shown on the card on /leistungen. */
  imagePreview: string;
  /** Portrait 4:5 (e.g. 1600×2000), shown on the detail page. */
  image: string;
  /** Opening line on the detail page, shown in italics. */
  hook: string;
  /** Paragraphs of the detail page, after the hook. */
  body: string[];
  /** Optional closing line on the detail page, shown in italics after the prices. */
  closing?: string;
};

/** A bookable massage with its own detail page. */
export type AvailableMassage = MassageBase & {
  comingSoon?: false;
  options: MassageOption[];
};

/**
 * Shown with a "Demnächst verfügbar" badge on /leistungen, without prices or a detail page.
 * Its detail text is kept ready: to publish it, remove `comingSoon` and add `options`.
 */
export type ComingSoonMassage = MassageBase & {
  comingSoon: true;
};

export type Massage = AvailableMassage | ComingSoonMassage;

export const massages: Massage[] = [
  {
    name: "PräYou",
    slug: "praeyou",
    subtitle: "Individuelle Entspannungsmassage",
    desc: [
      "Eine Massage, die sich ganz nach dir richtet. Ob sanft und entspannend oder etwas kräftiger und gezielter – im Mittelpunkt stehen deine Wünsche und das, was dir gerade guttut.",
    ],
    hook: "Jeder Mensch ist anders – und auch das, was uns an einem bestimmten Tag guttut, kann ganz unterschiedlich sein.",
    body: [
      "Deshalb gibt es bei PräYou keine Massage nach einem starren Ablauf. Ich passe die Massage individuell an deine Wünsche und daran an, wie es dir gerade geht.",
      "Mal ruhig und fließend, mal etwas kräftiger und gezielter.",
      "Du entscheidest, wie viel Zeit du dir nehmen möchtest und welche Körperbereiche im Mittelpunkt stehen.",
    ],
    closing: "Denn nicht du sollst zu meiner Massage passen, sondern die Massage zu dir.",
    imagePreview: "/massages/praeyou_preview.jpg",
    image: "/massages/praeyou.jpg",
    options: [
      {
        duration: "30 Minuten",
        title: "Teilmassage",
        note: "Eine Massage für den Rücken oder die Beine.",
        price: "42 €",
      },
      {
        duration: "60 Minuten",
        title: "Ganzkörpermassage",
        note: "Eine entspannende Massage des gesamten Körpers, ohne Kopf und Gesicht.",
        price: "67 €",
      },
      {
        duration: "90 Minuten",
        title: "Ganzkörpermassage",
        note: "Eine ausführliche Ganzkörpermassage inklusive Kopf, Gesicht und Kiefer.",
        price: "98 €",
      },
    ],
  },
  {
    name: "PräFlow",
    slug: "praeflow",
    subtitle: "Präventive Lymphdrainage",
    desc: [
      "Sanfte, rhythmische Massagegriffe, die den natürlichen Lymphfluss unterstützen können. Eine wohltuende Auszeit für deinen Körper, bei der Entspannung und Prävention zusammenkommen.",
    ],
    hook: "Wenn man über Prävention spricht, darf man das Lymphsystem nicht außer Acht lassen.",
    body: [
      "Es ist ein wichtiger Bestandteil unseres Körpers und übernimmt täglich viele Aufgaben, ohne dass wir groß darüber nachdenken. Es transportiert überschüssige Gewebeflüssigkeit zurück in den Blutkreislauf und spielt eine wichtige Rolle für unser Immunsystem.",
      "Bei der präventiven Lymphdrainage werden sanfte, rhythmische Griffe eingesetzt, die den natürlichen Lymphfluss anregen und den Abtransport von Gewebeflüssigkeit unterstützen können.",
      "Mit PräFlow möchte ich dir diese sanfte Form der Massage anbieten – als nichtmedizinische Anwendung zur Entspannung und zum allgemeinen Wohlbefinden.",
    ],
    imagePreview: "/massages/praeflow_preview.jpg",
    image: "/massages/praeflow.jpg",
    options: [{ duration: "60 Minuten", price: "67 €" }],
  },
  {
    name: "PräRelease",
    slug: "praerelease",
    subtitle: "Myofasziale Gesichts- & Oberkörpermassage",
    desc: [
      "Mehr als eine klassische Gesichtsmassage. Mit gezielten myofaszialen Techniken und sanften Massagegriffen möchte ich Spannungen lösen, die Durchblutung und den Lymphfluss anregen und ein Gefühl von Leichtigkeit schaffen.",
      "Für entspannte Gesichtszüge, einen gelösten Nacken und ein frisches, vitales Aussehen.",
    ],
    hook: "Spannungen loslassen. Leichtigkeit spüren. Ausstrahlung gewinnen.",
    body: [
      "Unser Gesicht erzählt oft mehr über unseren Alltag, als uns bewusst ist. Ein angespannter Kiefer, hochgezogene Schultern oder ein verspannter Nacken können beeinflussen, wie wir uns fühlen, bewegen und wie wir auf andere wirken. Dabei betrachten wir Gesicht und Nacken häufig getrennt, obwohl die Muskulatur und die Faszien dieser Bereiche eng mit dem restlichen Oberkörper zusammenarbeiten.",
      "Genau hier setzt PräRelease an. Bei dieser Massage beziehe ich Gesicht, Kiefer, Kopf, Hals, Dekolleté, Brustmuskulatur, Schultern und den oberen Rücken mit ein. Mit gezielten myofaszialen Techniken und sanften, fließenden Massagegriffen möchte ich muskuläre und fasziale Spannungen reduzieren, die lokale Durchblutung anregen und den natürlichen Lymphfluss unterstützen.",
      "Dabei geht es nicht nur um Entspannung. Wenn sich Spannungen im Oberkörper reduzieren, können sich Bewegungen freier anfühlen und eine aufrechtere Haltung leichter fallen. Auch dein Gesicht kann davon profitieren: Entspannte Gesichtsmuskeln können dazu beitragen, dass deine Gesichtszüge weicher und frischer wirken.",
      "PräRelease verbindet gezielte Körperarbeit mit bewusster Entspannung.",
    ],
    closing: "Für ein Gefühl von Leichtigkeit, einen gelösten Oberkörper und einen frischen Ausdruck.",
    imagePreview: "/massages/praerelease_preview.jpg",
    image: "/massages/praerelease.jpg",
    comingSoon: true,
  },
];

/** Massages that are bookable and have their own detail page. */
export const availableMassages: AvailableMassage[] = massages.filter(
  (m): m is AvailableMassage => !m.comingSoon,
);

export function getAvailableMassageBySlug(slug: string): AvailableMassage | undefined {
  return availableMassages.find((m) => m.slug === slug);
}
