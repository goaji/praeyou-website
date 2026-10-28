/**
 * Must match Tailwind's breakpoints (Tailwind 4 defaults: sm = 40rem = 640px, lg = 64rem = 1024px).
 * Used where JavaScript (matchMedia) or image `sizes` hints need to know the breakpoint.
 */
export const SM_BREAKPOINT = 640;
export const LG_BREAKPOINT = 1024;

export const MEDIA_MIN_SM = `(min-width: ${SM_BREAKPOINT}px)`;
export const MEDIA_MIN_LG = `(min-width: ${LG_BREAKPOINT}px)`;
