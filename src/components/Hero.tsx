"use client";

import { MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import Header from "./Header";
import Button from "./Button";
import { routes } from "@/lib/routes";

const heroParagraphs = [
  "Unser Körper leistet jeden Tag unglaublich viel. Oft nehmen wir das erst wahr, wenn wir müde sind, uns verspannt fühlen oder einfach nicht mehr richtig abschalten können.",
  "Dabei lohnt es sich, dem eigenen Körper schon vorher Aufmerksamkeit zu schenken.",
  "Genau darum geht es mir bei PRÄYou. Mit Massagen, die auf deine persönlichen Bedürfnisse abgestimmt sind, möchte ich Entspannung und Prävention miteinander verbinden.",
  "Denn bei all dem, was im Alltag wichtig ist, solltest du selbst nicht zu kurz kommen.",
];

// Seconds between each paragraph starting to fade in
const PARAGRAPH_STAGGER = 2.4;

// Seconds between "Du" and "zuerst." starting to fade in
const HEADLINE_WORD_GAP = 1.5;

// Seconds between "zuerst." and the button starting to fade in
const BUTTON_GAP = 1.5;

export default function Hero() {
  return (
    // reducedMotion="user": respects the visitor's "reduce motion" system setting
    <MotionConfig reducedMotion="user">
      <section className="relative min-h-svh flex flex-col overflow-hidden">
        {/* Photo "highlights" curve, like the Highlights slider in a photo editor:
            dark and mid tones stay as they are, only the brightest parts (the window) are toned down,
            so the white text stands out without dimming the whole picture.
            tableValues = output brightness at input 0%, 25%, 50%, 75%, 100%. */}
        <svg aria-hidden="true" className="absolute h-0 w-0">
          <filter id="hero-highlights" colorInterpolationFilters="sRGB">
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0 0.22 0.47 0.6 0.65" />
              <feFuncG type="table" tableValues="0 0.22 0.47 0.6 0.65" />
              <feFuncB type="table" tableValues="0 0.22 0.47 0.6 0.65" />
            </feComponentTransfer>
          </filter>
        </svg>
        <Image
          src="/heroImage.jpeg"
          alt="Massagebehandlung"
          className="object-cover z-0"
          style={{ filter: "url(#hero-highlights) saturate(1.25) sepia(0.06) contrast(1.12)" }}
          fill
        />
        {/* Terracotta tint: warms up the grey-green tones of the photo */}
        <div
          className="absolute inset-0 z-1"
          style={{
            background: "var(--color-red)",
            mixBlendMode: "soft-light",
            opacity: 0.6,
          }}
        />
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(180deg, rgba(36,20,12,0.4) 0%, rgba(36,20,12,0.1) 25%, rgba(36,20,12,0.1) 70%, rgba(36,20,12,0.5) 100%)",
          }}
        />
        <div className="relative z-50">
          <Header />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 pt-28 lg:pt-0">
          <div
            className="absolute inset-y-[-10%] inset-x-[-20%] z-[-1]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(36,20,12,0.4) 0%, rgba(36,20,12,0.15) 55%, rgba(36,20,12,0) 75%)",
            }}
          />
          <div
            className="max-w-2xl mb-7 space-y-4 text-[17px] sm:text-[21px] leading-relaxed text-white"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
          >
            {heroParagraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                  delay: i * PARAGRAPH_STAGGER,
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>
          <h1
            className="font-hero italic text-6xl sm:text-8xl lg:text-[112px] leading-[0.98] text-white"
            style={{
              textShadow:
                "0 6px 30px rgba(0,0,0,0.75), 0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            {["Du", "zuerst."].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 2.5,
                  ease: "easeOut",
                  delay:
                    heroParagraphs.length * PARAGRAPH_STAGGER +
                    i * HEADLINE_WORD_GAP,
                }}
              >
                {word}
                {i === 0 && " "}
              </motion.span>
            ))}
          </h1>
        </div>
        <motion.div
          className="relative z-10 flex justify-center pt-8 pb-10 sm:pb-14"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay:
              heroParagraphs.length * PARAGRAPH_STAGGER +
              HEADLINE_WORD_GAP +
              BUTTON_GAP,
          }}
        >
          <Button
            buttonText="Mehr erfahren"
            filledFromStart
            link={routes.leistungen}
            buttonStyle="onDarkBackground"
            hoverStyle="redFill"
          />
        </motion.div>
      </section>
    </MotionConfig>
  );
}
