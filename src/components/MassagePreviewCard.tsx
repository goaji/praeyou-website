import type { ComponentProps } from "react";
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
 * A "coming soon" massage keeps all 7 rows but has no links and no prices.
 */
/** A link to the detail page, or plain content (no link) when `href` is undefined. */
function LinkIfAvailable({ href, children, ...props }: Omit<ComponentProps<typeof Link>, "href"> & { href?: string }) {
    if (!href) return <div className={props.className}>{children}</div>;
    return <Link href={href} {...props}>{children}</Link>;
}

export default function MassagePreviewCard({ massage }: { massage: Massage }) {
    const isComingSoon = massage.comingSoon === true;
    const href = isComingSoon ? undefined : massagePath(massage.slug);

    return (
        <article className="grid grid-rows-subgrid row-span-7 pb-14 lg:pb-0">
            <LinkIfAvailable href={href} className="relative block overflow-hidden aspect-video" tabIndex={-1} aria-hidden="true">
                <Image
                    src={massage.image}
                    alt={massage.name}
                    fill
                    sizes={`${MEDIA_MIN_LG} 33vw, ${MEDIA_MIN_SM} 50vw, 100vw`}
                    className={`object-cover ${isComingSoon ? "grayscale-[60%] opacity-70" : ""}`}
                />
            </LinkIfAvailable>

            <div className="px-5 mt-5 mb-3">
                <div className="w-9.5 h-9.5 rounded-full bg-red/20 flex items-center justify-center shrink-0 text-olive">
                    <MassageIcon icon={massage.icon} size={19} />
                </div>
            </div>

            <h3 className={`m-0 mb-1 font-serif text-[26px] font-extrabold px-5 ${isComingSoon ? "text-red/60" : "text-red"}`}>
                <LinkIfAvailable href={href}>{massage.name}</LinkIfAvailable>
            </h3>

            <p className="m-0 mb-2 text-[13px] font-semibold text-olive px-5">
                {massage.subtitle}
            </p>

            <p className="m-0 mb-3.5 text-[15px] text-ink leading-relaxed px-5">
                {massage.desc}
            </p>

            <div className="flex flex-col gap-1 mb-3.5 px-5 text-[15px] text-ink">
                {!massage.comingSoon && massage.options.map((option) => (
                    <div className="flex justify-between gap-2.5" key={option.duration}>
                        <span>
                            {option.duration}
                            {option.title && <span className="text-olive"> · {option.title}</span>}
                        </span>
                        {option.price && <span>{option.price}</span>}
                    </div>
                ))}
            </div>

            <div className="px-5 flex justify-center mt-6">
                {isComingSoon ? (
                    <span className="text-[13px] font-semibold uppercase tracking-wider text-olive border border-olive/40 rounded-full px-4 py-2">
                        Demnächst
                    </span>
                ) : (
                    <Button size="small" buttonText="Mehr erfahren" link={massagePath(massage.slug)} buttonStyle="onLightBackground" hoverStyle="oliveFill" />
                )}
            </div>
        </article>
    );
}
