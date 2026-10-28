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

/** Owner, business name and postal address, as required on the legal pages. */
export function LegalAddress() {
    return (
        <p>
            {contact.legalName}
            <br />
            {contact.businessName}
            <br />
            <PostalAddress />
        </p>
    );
}
