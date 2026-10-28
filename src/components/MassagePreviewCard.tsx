import Image from "next/image";
import Link from "next/link";
import type { Massage } from "@/app/leistungen/massagesData";
import { MassageIcon } from "@/components/MassageIcon";
import Button from "./Button";
import { massagePath } from "@/lib/routes";
import { MEDIA_MIN_LG, MEDIA_MIN_SM } from "@/lib/breakpoints";

/**
 * One card in the /leistungen grid.
 * The card is a subgrid spanning 7 rows of the parent grid, so image, icon, title,
 * subtitle, description, prices and button line up across all cards in a row.
 * `row-span-7` must equal the number of direct children below: adding or removing
 * one means updating it, otherwise the row alignment breaks silently.
 */
export default function MassagePreviewCard({ massage }: { massage: Massage }) {
    const href = massagePath(massage.slug);

    return (
        <article className="grid grid-rows-subgrid row-span-7 pb-14 lg:pb-0">
            <Link
                href={href}
                className="relative block overflow-hidden aspect-video"
                tabIndex={-1}
                aria-hidden="true"
            >
                <Image
                    src={massage.image}
                    alt={massage.name}
                    fill
                    sizes={`${MEDIA_MIN_LG} 20vw, ${MEDIA_MIN_SM} 50vw, 100vw`}
                    className="object-cover"
                />
            </Link>

            <div className="px-5 mt-5 mb-3">
                <div className="w-9.5 h-9.5 rounded-full bg-red/20 flex items-center justify-center shrink-0 text-olive">
                    <MassageIcon icon={massage.icon} size={19} />
                </div>
            </div>

            <h3 className="m-0 mb-1 font-serif text-[26px] lg:text-[24px] font-extrabold text-red px-5">
                <Link href={href}>{massage.name}</Link>
            </h3>

            <p className="m-0 mb-2 text-[13px] lg:text-[11.5px] font-semibold text-olive px-5">
                {massage.subtitle}
            </p>

            <p className="m-0 mb-3.5 text-[15px] lg:text-[12.5px] text-ink leading-relaxed px-5">
                {massage.desc}
            </p>

            <div className="flex flex-col gap-1 mb-3.5 px-5 text-[15px] lg:text-[12.5px] text-ink">
                <div className="flex justify-between gap-2.5">
                    <span>{massage.duration1}</span>
                    <span>{massage.price1}</span>
                </div>
                {massage.duration2 && (
                    <div className="flex justify-between gap-2.5">
                        <span>{massage.duration2}</span>
                        <span>{massage.price2}</span>
                    </div>
                )}
            </div>

            <div className="px-5 flex justify-center mt-6">
                <Button size="small" buttonText="Mehr erfahren" link={href} buttonStyle="onLightBackground" hoverStyle="oliveFill" />
            </div>
        </article>
    );
}
