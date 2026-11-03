import type { ReactNode } from "react";
import { contact, emailLink, phoneLink } from "@/lib/contact";

/** Street and city on two lines. Place inside a <p> or <address>. */
export function PostalAddress() {
    return (
        <>
            {contact.address.street}
            <br />
            {contact.address.city}
        </>
    );
}

/** The studio's phone number as a tel: link. */
export function PhoneLink() {
    return <a href={phoneLink} className="underline">{contact.phoneDisplay}</a>;
}

/** The studio's email address as a mailto: link. */
export function EmailLink() {
    return <a href={emailLink} className="underline">{contact.email}</a>;
}

/**
 * The studio's details in the owner's layout (contact section, Impressum, Datenschutz):
 * business name and owner, then (after a blank line) address and phone.
 * `addressLabel` (contact section only) is shown between the two, right above the street.
 */
export function LegalAddress({ addressLabel }: { addressLabel?: ReactNode }) {
    return (
        <>
            <p>
                <strong>{contact.businessName}</strong>
                <br />
                Inh. {contact.legalName}
            </p>
            <div>
                {addressLabel}
                <p>
                    <PostalAddress />
                    <br />
                    Telefon: <PhoneLink />
                </p>
            </div>
        </>
    );
}
