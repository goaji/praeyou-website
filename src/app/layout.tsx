import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Work_Sans } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/contact";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"], weight: ["500", "600"], variable: "--font-serif",
});
const workSans = Work_Sans({
  subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"], weight: ["500"], style: ["italic"], variable: "--font-hero",
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND} – Du zuerst.`,
    // Pages only set their own name, e.g. "Impressum" → "Impressum – PRÄYou"
    template: `%s – ${BRAND}`,
  },
  description: "Massage & Prävention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${workSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
