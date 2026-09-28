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

const PLACEHOLDER_LOOK =
  "flex items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 text-xs uppercase tracking-wide text-slate-400";

const AD_CLIENT = "ca-pub-6402641178305242";

// Real AdSense ad units, keyed by slot size. Only "in-content" has a real
// unit today ("Minecraft Username - In Content"); sizes with no entry here
// keep rendering the plain reserved placeholder until a unit exists for them.
const DEFAULT_AD_SLOT: Partial<Record<AdSlotSize, string>> = {
  "in-content": "8884592061",
};

/**
 * Ad slot. Renders a real AdSense <ins class="adsbygoogle"> unit when a real
 * ad-slot ID is available for this size (via the `adSlot` prop or
 * DEFAULT_AD_SLOT); otherwise falls back to the original reserved
 * placeholder. Assumes the AdSense loader script is already present
 * site-wide (see app/layout.tsx) — this component never loads it again.
 *
 * The "Advertisement" fallback overlays the reserved space and stays visible
 * until Google actually fills the slot (data-ad-status="filled"), so an
 * unfilled or still-loading slot never looks like a blank hole in the page,
 * and a successfully rendered ad is never hidden by our own code.
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
  const [filled, setFilled] = useState(false);

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
        // AdSense script not ready/blocked — the placeholder overlay stays visible.
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

  // Watch Google's own fill status on the element instead of guessing timing.
  useEffect(() => {
    if (!slot || !insRef.current) return;
    const el = insRef.current;
    const sync = () => setFilled(el.getAttribute("data-ad-status") === "filled");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(el, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => observer.disconnect();
  }, [slot]);

  if (!slot) {
    return (
      <div aria-hidden="true" className={`mx-auto ${PLACEHOLDER_LOOK} ${SIZE_CLASSES[size]} ${className}`}>
        Advertisement
      </div>
    );
  }

  return (
    <div className={`relative mx-auto ${SIZE_CLASSES[size]} ${className}`}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      {!filled && <div aria-hidden="true" className={`absolute inset-0 ${PLACEHOLDER_LOOK}`}>Advertisement</div>}
    </div>
  );
}
