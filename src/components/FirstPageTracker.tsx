"use client";

import { useEffect } from "react";
import { markSiteLoaded } from "@/lib/firstPage";

/**
 * Marks the site as loaded after the first page has rendered,
 * so pages opened afterwards via site links know they weren't the first.
 */
export default function FirstPageTracker() {
    useEffect(() => {
        markSiteLoaded();
    }, []);
    return null;
}
