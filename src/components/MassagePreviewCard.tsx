import type { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Massage } from "@/app/leistungen/massagesData";
import Button from "./Button";
import { massagePath } from "@/lib/routes";
import { MEDIA_MIN_LG, MEDIA_MIN_SM } from "@/lib/breakpoints";

/**
 * One card in the /leistungen grid.
 * The card is a subgrid spanning 6 rows of the parent grid, so image, title,
 * subtitle, description, prices and button line up across all cards in a row.
 * `row-span-6` must equal the number of direct children below: adding or removing
 * one means updating it, otherwise the row alignment breaks silently.
 * A "coming soon" massage keeps all 6 rows but has no links, no prices and no button;
 * a "Demnächst verfügbar" badge sits over its faded image instead.
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
        <article className="grid grid-rows-subgrid row-span-6 pb-14 lg:pb-0">
            <LinkIfAvailable href={href} className="relative block overflow-hidden aspect-3/2" tabIndex={-1} aria-hidden="true">
                <Image
                    src={massage.imagePreview}
                    alt="" // decorative: the whole image link is hidden from screen readers anyway
                    fill
                    sizes={`${MEDIA_MIN_LG} 33vw, ${MEDIA_MIN_SM} 50vw, 100vw`}
                    className="object-cover"
                />
                {isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-cream text-olive text-caption font-semibold uppercase tracking-wider rounded-full px-5 py-2 shadow-sm">
                            Demnächst verfügbar
                        </span>
                    </div>
                )}
            </LinkIfAvailable>

            <h3 className="m-0 mt-5 mb-1 font-serif text-card-title font-extrabold px-5 text-red">
                <LinkIfAvailable href={href}>{massage.name}</LinkIfAvailable>
                {/* The image badge is aria-hidden, so screen readers get the status here */}
                {isComingSoon && <span className="sr-only"> (Demnächst verfügbar)</span>}
            </h3>

            <p className="m-0 mb-2 text-caption font-semibold text-olive px-5">
                {massage.subtitle}
            </p>

            <div className="mb-3.5 text-small text-ink leading-relaxed px-5 flex flex-col gap-2">
                {massage.desc.map((paragraph) => (
                    <p className="m-0" key={paragraph}>{paragraph}</p>
                ))}
            </div>

            <div className="flex flex-col gap-1 mb-3.5 px-5 text-small text-ink">
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

            {/* Stays in the DOM even when empty: it is the 6th subgrid row */}
            <div className="px-5 flex justify-center mt-6">
                {!isComingSoon && (
                    <Button size="small" buttonText="Mehr erfahren" link={massagePath(massage.slug)} buttonStyle="onLightBackground" hoverStyle="oliveFill" />
                )}
            </div>
        </article>
    );
}
