"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

type AdSlotSize = "banner" | "in-content" | "sidebar";

const SIZE_CLASSES: Record<AdSlotSize, string> = {
  banner: "min-h-[90px] w-full max-w-full sm:min-h-[90px]",
  "in-content": "min-h-[100px] w-full",
  sidebar: "min-h-[250px] w-full max-w-[300px]",
};

const AD_CLIENT = "ca-pub-6402641178305242";

// Real AdSense ad units, keyed by slot size. Only "in-content" has a real
// unit today ("Minecraft Username - In Content"); sizes with no entry here
// render nothing at all, since there's no ad to ever fill that spot.
const DEFAULT_AD_SLOT: Partial<Record<AdSlotSize, string>> = {
  "in-content": "8884592061",
};

// How long to keep the slot's normal reserved space for a still-pending ad
// request before collapsing it. Google doesn't always set data-ad-status on
// a genuine no-fill, so this timeout is what guarantees the slot never stays
// visually reserved forever when that happens.
const FILL_TIMEOUT_MS = 5000;

/**
 * Ad slot. Renders a real AdSense <ins class="adsbygoogle"> unit when a real
 * ad-slot ID is available for this size (via the `adSlot` prop or
 * DEFAULT_AD_SLOT); otherwise renders nothing. Assumes the AdSense loader
 * script is already present site-wide (see app/layout.tsx) — this component
 * never loads it again.
 *
 * No placeholder label or box is ever shown. A filled ad (data-ad-status
 * "filled") displays normally; an unfilled one, or one Google never resolves
 * within FILL_TIMEOUT_MS, collapses its reserved space to zero height so it
 * never leaves a large blank section. The <ins> itself is never removed, so
 * Google keeps receiving legitimate requests and a late fill still un-collapses it.
 */
export default function AdSlot({
  size = "in-content",
  className = "",
  adSlot,
}: {
  size?: AdSlotSize;
  className?: string;
  /** Real AdSense data-ad-slot ID. Defaults to the known unit for this size, if any. */
  adSlot?: string;
}) {
  const slot = adSlot ?? DEFAULT_AD_SLOT[size];
  const insRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);
  const [phase, setPhase] = useState<"loading" | "filled" | "collapsed">("loading");

  // Request the ad exactly once per mounted <ins> element — but only once its
  // container actually has a measurable width. Pushing before layout settles
  // (e.g. the instant a page mounts) makes AdSense throw
  // "No slot size for availableWidth=0" for a data-full-width-responsive unit.
  useEffect(() => {
    if (!slot || pushedRef.current || !insRef.current) return;
    const container = insRef.current.parentElement;

    const tryPush = () => {
      if (pushedRef.current) return true;
      if (!container || container.getBoundingClientRect().width <= 0) return false;
      pushedRef.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // AdSense script not ready/blocked — the loading timeout below will collapse the slot.
      }
      return true;
    };

    if (tryPush()) return;

    const observer = new ResizeObserver(() => {
      if (tryPush()) observer.disconnect();
    });
    if (container) observer.observe(container);
    return () => observer.disconnect();
  }, [slot]);

  // Watch Google's own fill status, with a bounded grace period for a still-
  // pending request — Google doesn't always set data-ad-status even on a
  // genuine no-fill, so a status-only check could stay reserved forever.
  useEffect(() => {
    if (!slot || !insRef.current) return;
    const el = insRef.current;

    const sync = () => {
      const status = el.getAttribute("data-ad-status");
      if (status === "filled") setPhase("filled");
      else if (status === "unfilled") setPhase("collapsed");
    };
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(el, { attributes: true, attributeFilter: ["data-ad-status"] });

    const timeout = window.setTimeout(() => {
      setPhase((current) => (current === "loading" ? "collapsed" : current));
    }, FILL_TIMEOUT_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [slot]);

  if (!slot) return null;

  return (
    <div className={`mx-auto ${phase === "collapsed" ? "h-0 overflow-hidden" : SIZE_CLASSES[size]} ${className}`}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
