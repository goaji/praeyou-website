import { Massage } from "@/app/leistungen/massagesData";
import Image from "next/image";
import Button from "./Button";

type MassageDetailsProps = {
    massage: Massage;
    others: Massage[];
};


export default function MassageDetails({ massage, others }: MassageDetailsProps) {
    return (
        <main className="pt-26 max-w-7xl mx-auto">
            <section className="grid grid-cols-2 ">
                <div className="relative overflow-hidden ">
                    <Image
                        src={massage.imagePreview}
                        alt={massage.name}
                        fill
                        sizes="50vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col px-10 py-10 max-w-140 mx-auto">
                    <h1 className="font-serif font-medium text-5xl text-ink mb-3">
                        {massage.name}
                    </h1>
                    <p className="text-[13px] font-semibold uppercase tracking-wider text-olive mb-5">
                        {massage.subtitle}
                    </p>
                    <div className="w-11 h-px bg-olive/50 mb-5" />
                    <p className="italic text-[17px] text-ink mb-4 leading-relaxed">
                        {massage.hook}
                    </p>
                    <p className="text-[15px] text-ink leading-relaxed mb-8">
                        {massage.desc}
                    </p>
                    <div className="h-px bg-ink/10 mb-5" />

                    <div className="flex gap-6 mb-10 justify-center">
                        <div className="flex flex-col justify-center mx-auto">
                            <span className="text-[16px] uppercase text-ink">{massage.duration1}</span>
                            <span className="text-[36px] font-serif text-ink">{massage.price1}</span>
                        </div>
                        {massage.duration2 && (
                            <>
                                <div className="w-px h-10 bg-ink/10" />
                                <div className="flex flex-col justify-center mx-auto">
                                    <span className="text-[16px] uppercase text-ink">{massage.duration2}</span>
                                    <span className="text-[36px] font-serif text-ink">{massage.price2}</span>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <Button size='medium' buttonText="Termin anfragen" link="/#kontakt" buttonStyle="onLightBackground" hoverStyle="oliveFill" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center text-center py-6 px-14">
                <p className="text-[13px] font-semibold uppercase tracking-wider text-olive mb-6">
                    Weitere Massagen
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {others.map((o) => (
                        <Button size='small' buttonText={o.name} link={`/leistungen/${o.slug}`} buttonStyle="onLightBackground" hoverStyle="oliveFill" key={o.slug} />
                    ))}
                </div>
            </section>
        </main >
    );
}
