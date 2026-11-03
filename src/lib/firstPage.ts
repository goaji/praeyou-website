/**
 * Tells whether the current page is the first one shown since the site was loaded
 * (typed address, external link, reload), or was reached via a link inside the site.
 * Module state: it resets on every full page load and survives client-side navigation.
 */
let siteHasLoaded = false;

/** Called once, after the first page has rendered (see FirstPageTracker). */
export function markSiteLoaded() {
    siteHasLoaded = true;
}

/** True when the visitor arrived here from another page of the site. */
export function cameFromInsideSite() {
    return siteHasLoaded;
}
