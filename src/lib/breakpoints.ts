/**
 * Must match Tailwind's `lg` breakpoint (Tailwind 4 default: 64rem = 1024px).
 * Used where JavaScript or image `sizes` hints need to know the breakpoint.
 */
export const LG_BREAKPOINT = 1024;

export const MEDIA_MIN_LG = `(min-width: ${LG_BREAKPOINT}px)`;
