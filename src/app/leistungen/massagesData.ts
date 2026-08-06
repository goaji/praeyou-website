export type Massage = {
  name: string;
  subtitle: string;
  hook: string;
  desc: string;
  icon: "leaf" | "body" | "drop" | "spine" | "face";
  image: string;
  duration1: string;
  price1: string;
  duration2?: string;
  price2?: string;
};

export const massages: Massage[] = [
  {
    name: "PräRelax",
    subtitle: "Ruhige, fließende Entspannungsmassage",
    hook: "Ein Moment nur für dich - zum Loslassen, Ankommen und Durchatmen.",
    desc: "Sanfte, harmonische Berührungen helfen deinem Körper und Nervensystem, zur Ruhe zu kommen. Anspannung darf weicher werden, der Atem frei fließen und du darfst einfach sein.",
    icon: "leaf",
    image: "/massages/massage_1_preview.jpg",
    duration1: "60 Minuten",
    price1: "75 €",
    duration2: "90 Minuten",
    price2: "109 €",
  },
  {
    name: "PräBalance",
    subtitle: "Klassische Ganzkörpermassage",
    hook: "Kraft und Ruhe im Gleichgewicht - für einen Körper in Balance.",
    desc: "Gezielte, kräftigere Griffe lösen tiefere Verspannungen und schaffen mehr Bewegungsfreiheit. Eine klassische Ganzkörpermassage, die Ausgeglichenheit und ein rundum gutes Körpergefühl fördert.",
    icon: "body",
    image: "/massages/massage_2_preview.jpg",
    duration1: "60 Minuten",
    price1: "75 €",
    duration2: "90 Minuten",
    price2: "109 €",
  },
  {
    name: "PräFlow",
    subtitle: "Präventive Lymphdrainage",
    hook: "Leichtigkeit spüren - sanft, rhythmisch, befreiend.",
    desc: "Mit sanften, rhythmischen Techniken wird der Lymphfluss unterstützt und der Körper natürlich entstaut. Ideal zur Vorbeugung von Schwere- und Spannungsgefühlen, für mehr Frische von innen.",
    icon: "drop",
    image: "/massages/massage_3_preview.jpg",
    duration1: "60 Minuten",
    price1: "79 €",
  },
  {
    name: "PräRaum",
    subtitle: "Entlastende Wirbelsäulenmassage nach Breuss",
    hook: "Raum schaffen entlang der Wirbelsäule - für mehr innere Weite.",
    desc: "Sanfte, fließende Ausstreichungen entlang der Wirbelsäule entlasten Rücken und Nervensystem. Eine achtsame Technik, die Druck nimmt und ein Gefühl von Weite und Ruhe hinterlässt.",
    icon: "spine",
    image: "/massages/massage_4_preview.jpg",
    duration1: "40 Minuten",
    price1: "59 €",
  },
  {
    name: "PräGlow",
    subtitle: "Gesichts-, Kopf- und Kieferentspannung",
    hook: "Loslassen bis in den Kiefer - für ein entspanntes Gesicht.",
    desc: "Sanfte Techniken für Gesicht, Kopf und Kiefer lösen oft unbewusste Anspannung. Für mehr Ausstrahlung, Leichtigkeit im Ausdruck und innere Ruhe – von innen nach außen sichtbar.",
    icon: "face",
    image: "/massages/massage_5_preview.jpg",
    duration1: "60 Minuten",
    price1: "89 €",
  },
];

export function getMassageByName(name: string): Massage | undefined {
  return massages.find((m) => m.name === name);
}
