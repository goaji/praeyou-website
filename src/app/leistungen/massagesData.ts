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
  /** Short text for the card on /leistungen. */
  desc: string;
  icon: "leaf" | "body" | "drop" | "spine" | "face";
  imagePreview: string;
  image: string;
};

/** A bookable massage with its own detail page. */
export type AvailableMassage = MassageBase & {
  comingSoon?: false;
  /** Opening line on the detail page, shown in italics. */
  hook: string;
  /** Paragraphs of the detail page, after the hook. */
  body: string[];
  /** Optional closing line on the detail page, shown in italics after the prices. */
  closing?: string;
  options: MassageOption[];
};

/** Shown as "Demnächst" on /leistungen, without prices or a detail page. */
export type ComingSoonMassage = MassageBase & {
  comingSoon: true;
};

export type Massage = AvailableMassage | ComingSoonMassage;

export const massages: Massage[] = [
  {
    name: "PräYou",
    slug: "praeyou",
    subtitle: "Individuelle Entspannungsmassage",
    desc: "Ich passe die Massage individuell an deine Wünsche und daran an, wie es dir gerade geht. Mal ruhig und fließend, mal etwas kräftiger und gezielter.",
    hook: "Jeder Mensch ist anders – und auch das, was uns an einem bestimmten Tag guttut, kann ganz unterschiedlich sein.",
    body: [
      "Deshalb gibt es bei PräYou keine Massage nach einem starren Ablauf. Ich passe die Massage individuell an deine Wünsche und daran an, wie es dir gerade geht.",
      "Mal ruhig und fließend, mal etwas kräftiger und gezielter.",
      "Du entscheidest, wie viel Zeit du dir nehmen möchtest und welche Körperbereiche im Mittelpunkt stehen.",
    ],
    closing: "Denn nicht du sollst zu meiner Massage passen, sondern die Massage zu dir.",
    icon: "leaf",
    imagePreview: "/massages/massage_1_preview.jpg",
    image: "/massages/massage_1.jpg",
    options: [
      {
        duration: "30 Minuten",
        title: "Teilmassage",
        note: "Eine Massage für den Rücken oder die Beine.",
      },
      {
        duration: "60 Minuten",
        title: "Ganzkörpermassage",
        note: "Eine entspannende Massage des gesamten Körpers, ohne Kopf und Gesicht.",
        price: "75 €",
      },
      {
        duration: "90 Minuten",
        title: "Ganzkörpermassage",
        note: "Eine ausführliche Ganzkörpermassage inklusive Kopf, Gesicht und Kiefer.",
        price: "109 €",
      },
    ],
  },
  {
    name: "PräFlow",
    slug: "praeflow",
    subtitle: "Präventive Lymphdrainage",
    desc: "Sanfte, rhythmische Griffe, die den natürlichen Lymphfluss anregen und den Abtransport von Gewebeflüssigkeit unterstützen können.",
    hook: "Wenn man über Prävention spricht, darf man das Lymphsystem nicht außer Acht lassen.",
    body: [
      "Es ist ein wichtiger Bestandteil unseres Körpers und übernimmt täglich viele Aufgaben, ohne dass wir groß darüber nachdenken. Es transportiert überschüssige Gewebeflüssigkeit zurück in den Blutkreislauf und spielt eine wichtige Rolle für unser Immunsystem.",
      "Bei der präventiven Lymphdrainage werden sanfte, rhythmische Griffe eingesetzt, die den natürlichen Lymphfluss anregen und den Abtransport von Gewebeflüssigkeit unterstützen können.",
      "Mit PräFlow möchte ich dir diese sanfte Form der Massage anbieten – als nichtmedizinische Anwendung zur Entspannung und zum allgemeinen Wohlbefinden.",
    ],
    icon: "drop",
    imagePreview: "/massages/massage_3_preview.jpg",
    image: "/massages/massage_3.jpg",
    options: [{ duration: "60 Minuten", price: "79 €" }],
  },
  {
    name: "PräRaum",
    slug: "praeraum",
    subtitle: "Entlastende Wirbelsäulenmassage nach Breuss",
    desc: "Sanfte, fließende Ausstreichungen entlang der Wirbelsäule entlasten Rücken und Nervensystem. Eine achtsame Technik, die Druck nimmt und ein Gefühl von Weite und Ruhe hinterlässt.",
    icon: "spine",
    imagePreview: "/massages/massage_4_preview.jpg",
    image: "/massages/massage_4.jpg",
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
