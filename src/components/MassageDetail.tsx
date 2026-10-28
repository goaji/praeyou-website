import { Massage } from "@/app/leistungen/massagesData";
import Image from "next/image";
import Button from "./Button";
import Prose from "./Prose";
import { CONTAINER, PAGE_TOP_LG } from "@/lib/layout";
import { Divider } from "./PageTitle";
import { massagePath, routes } from "@/lib/routes";
import { MEDIA_MIN_LG } from "@/lib/breakpoints";

type MassageDetailsProps = {
    massage: Massage;
    others: Massage[];
};


export default function MassageDetails({ massage, others }: MassageDetailsProps) {
    return (
        <main className={`${CONTAINER} pt-24 ${PAGE_TOP_LG}`}>
            {/* Desktop: image and title start at the shared page-title height. Phones: the image comes first, the title follows below it. */}
            <section className="grid grid-cols-1 lg:grid-cols-2">
                {/* Phones/tablets: a cropped banner on top. Desktop: fills the left column at full text height. */}
                <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[2/1] lg:aspect-auto">
                    <Image
                        src={massage.imagePreview}
                        alt={massage.name}
                        fill
                        sizes={`${MEDIA_MIN_LG} 50vw, 100vw`}
                        className="object-cover"
                        fetchPriority="high"
                    />
                </div>

                <div className="flex flex-col lg:px-10 py-8 lg:pt-0 lg:pb-10 max-w-140 mx-auto">
                    <h1 className="font-serif font-medium text-4xl sm:text-5xl text-ink mb-3">
                        {massage.name}
                    </h1>
                    <p className="text-[13px] font-semibold uppercase tracking-wider text-olive mb-5">
                        {massage.subtitle}
                    </p>
                    <Divider className="mb-5" />
                    <Prose className="mb-8">
                        <p className="italic text-[17px]">{massage.hook}</p>
                        <p>{massage.desc}</p>
                    </Prose>
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
                        <Button size="medium" buttonText="Termin anfragen" link={routes.kontakt} buttonStyle="onLightBackground" hoverStyle="oliveFill" />
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center text-center pt-6 pb-12">
                <p className="text-[13px] font-semibold uppercase tracking-wider text-olive mb-6">
                    Weitere Massagen
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {others.map((o) => (
                        <Button size="small" buttonText={o.name} link={massagePath(o.slug)} buttonStyle="onLightBackground" hoverStyle="oliveFill" key={o.slug} />
                    ))}
                </div>
            </section>
        </main>
    );
}
