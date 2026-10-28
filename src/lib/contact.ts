/**
 * Studio contact details — the only place they are defined.
 * TODO: replace the placeholders with the studio's real details before going live.
 */
export const contact = {
    /** The studio's number in international format (+49…), no spaces. Used for calls and, by default, WhatsApp. */
    phone: "+490000000000",
    /** The same number, formatted for display. Keep in sync with `phone`. */
    phoneDisplay: "+49 (0) 000 000 000",
    /**
     * Only set this if WhatsApp runs on a DIFFERENT number than `phone` (same +49… format).
     * Left undefined, WhatsApp uses `phone`.
     */
    whatsappPhone: undefined as string | undefined,
    email: "hallo@praeyou.de",
    address: "Musterstraße 12, 70000 Stuttgart",
};

export const phoneLink = `tel:${contact.phone}`;
export const emailLink = `mailto:${contact.email}`;

/** wa.me expects digits only: country code first, no "+", spaces or leading 0. */
const whatsappDigits = (contact.whatsappPhone ?? contact.phone).replace(/\D/g, "");

/** Opens a WhatsApp chat with the studio, with a pre-filled message. */
export const whatsappLink = (message: string) =>
    `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;

/** Pre-filled appointment request, optionally naming a specific massage. */
export const bookingMessage = (massageName?: string) =>
    massageName
        ? `Hallo, ich möchte gerne einen Termin für ${massageName} anfragen.`
        : "Hallo, ich möchte gerne einen Termin anfragen.";
