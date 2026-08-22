type AdSlotSize = "banner" | "in-content" | "sidebar";

const SIZE_CLASSES: Record<AdSlotSize, string> = {
  banner: "min-h-[90px] w-full max-w-full sm:min-h-[90px]",
  "in-content": "min-h-[100px] w-full",
  sidebar: "min-h-[250px] w-full max-w-[300px]",
};

/**
 * Reserved ad space. Renders nothing but a labeled placeholder until an
 * AdSense <ins> unit is added here — see README for where to paste the
 * publisher/slot IDs. Kept visually distinct from buttons and tool results.
 */
export default function AdSlot({
  size = "in-content",
  className = "",
}: {
  size?: AdSlotSize;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`mx-auto flex items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 text-xs uppercase tracking-wide text-slate-400 ${SIZE_CLASSES[size]} ${className}`}
    >
      Advertisement
    </div>
  );
}
