import Image from "next/image";
import type { Massage } from "@/app/leistungen/massagesData";
import { MassageIcon } from "@/components/MassageIcon";
import Button from "./Button";

export default function MassagePreviewCard({ massage }: { massage: Massage }) {
    return (
        <div className="contents ">
            <div className="relative overflow-hidden aspect-video ">
                <Image
                    src={massage.image}
                    alt={massage.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, 100vw"
                    className="object-cover"
                />
            </div>

            <div className="pl-5 pr-5 mt-5 mb-3">
                <div className="w-9.5 h-9.5 rounded-full bg-ink/20 flex items-center justify-center shrink-0 text-olive">
                    <MassageIcon icon={massage.icon} size={19} />
                </div>
            </div>

            <h3 className="m-0 mb-1 font-serif text-[24px] font-extrabold text-gold pl-5 pr-5 ">
                {massage.name}
            </h3>

            <p className="m-0 mb-2 text-[11.5px] font-semibold text-olive pl-5 pr-5">
                {massage.subtitle}
            </p>

            <p className="m-0 mb-3.5 text-[12.5px] text-body leading-relaxed pl-5 pr-5">
                {massage.desc}
            </p>

            <div className="flex flex-col gap-1 mb-3.5 pl-5 pr-5 ">
                <div className="flex justify-between gap-2.5 text-[12.5px] text-body">
                    <span>{massage.duration1}</span>
                    <span className="text-ink">{massage.price1}</span>
                </div>
                {massage.duration2 && (
                    <div className="flex justify-between gap-2.5 text-[12.5px] text-body">
                        <span>{massage.duration2}</span>
                        <span className="text-ink">{massage.price2}</span>
                    </div>
                )}
            </div>
            <div className="pl-5 pr-5 flex justify-center mt-6 ">
                <Button size='small' buttonText="Mehr erfahren" link="/#kontakt" backgroundColor="bg-olive" />
            </div>
        </div>
    );
}
