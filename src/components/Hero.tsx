"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./Header";
import Button from "./Button";


export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col overflow-hidden">
            <Image
                src="/heroImage.jpg"
                alt="Massagebehandlung"
                className="object-cover z-0"
                fill
            />
            <div className="absolute inset-0 bg-olive-mid/45 mix-blend-multiply z-1" />
            <div
                className="absolute inset-0 z-1"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(20,21,14,0.45) 0%, rgba(20,21,14,0.25) 30%, rgba(20,21,14,0.35) 70%, rgba(20,21,14,0.65) 100%)",
                }}
            />
            <div className="relative z-50">
                <Header />
            </div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-10">
                <div
                    className="absolute inset-y-[-10%] inset-x-[-20%] z-[-1]"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, rgba(15,16,10,0.55) 0%, rgba(15,16,10,0.25) 55%, rgba(15,16,10,0) 75%)",
                    }}
                />
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="max-w-xl mb-7 text-[17px] leading-relaxed text-white"
                    style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
                >
                    Jeder Tag verlangt deinem Körper etwas ab — Verspannungen, Stress, zu
                    wenig Bewegung. Bevor wir behandeln, hören wir zu: wo es zwickt, was
                    dich belastet, was du gerade brauchst. Denn bei uns steht eines im
                    Mittelpunkt: du.
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.5, ease: "easeOut", delay: 2 }}
                    className="font-hero italic text-[112px] leading-[0.98] text-white"
                    style={{ textShadow: "0 6px 30px rgba(0,0,0,0.75), 0 2px 8px rgba(0,0,0,0.6)" }}
                >
                    Du zuerst.
                </motion.h1>
            </div>

            <div className="relative z-10 flex justify-center pb-14">
                <Button buttonText="Termin anfragen" filledFromStart link="/#kontakt" buttonStyle="onDarkBackground" hoverStyle="redFill" />
            </div>
        </section>
    );
}