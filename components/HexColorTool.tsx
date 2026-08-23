"use client";

import { useId, useState } from "react";

const DEFAULT_HEX = "#55FFAA";
const HEX_FORMAT = /^#[0-9A-Fa-f]{6}$/;

export default function HexColorTool() {
  const [text, setText] = useState("Steve");
  const [hex, setHex] = useState(DEFAULT_HEX);
  const [copied, setCopied] = useState<"tellraw" | "plugin" | null>(null);
  const textId = useId();
  const hexId = useId();

  const isValidHex = HEX_FORMAT.test(hex);
  const displayHex = isValidHex ? hex : DEFAULT_HEX;
  const safeText = text || "Steve";

  const tellrawSnippet = `/tellraw @a {"text":"${safeText}","color":"${displayHex.toLowerCase()}"}`;
  const pluginSnippet = `&${displayHex.replace("#", "#")}${safeText}`;

  async function copy(value: string, kind: "tellraw" | "plugin") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard unavailable — the snippet text itself is still selectable.
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={textId} className="block text-sm font-medium text-slate-700">
            Text to color
          </label>
          <input
            id={textId}
            type="text"
            maxLength={32}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-base outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </div>
        <div>
          <label htmlFor={hexId} className="block text-sm font-medium text-slate-700">
            Hex color
          </label>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="color"
              aria-label="Pick a hex color"
              value={displayHex}
              onChange={(e) => setHex(e.target.value)}
              className="h-11 w-12 shrink-0 cursor-pointer rounded-lg border border-slate-300"
            />
            <input
              id={hexId}
              type="text"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              placeholder="#55FFAA"
              maxLength={7}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 font-mono text-base outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>
          {!isValidHex && hex.length > 0 && (
            <p className="mt-1 text-xs text-amber-600">Enter a 6-digit hex code, like #55FFAA.</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-700">Live preview</p>
        <div className="mt-2 rounded-lg bg-slate-900 p-6 text-xl" style={{ fontFamily: "monospace" }}>
          <span style={{ color: displayHex }}>{safeText}</span>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-slate-700">/tellraw command (vanilla Java)</p>
          <div className="mt-2 flex items-center gap-2">
            <code className="flex-1 truncate rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs">
              {tellrawSnippet}
            </code>
            <button
              type="button"
              onClick={() => copy(tellrawSnippet, "tellraw")}
              className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
            >
              {copied === "tellraw" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">Legacy hex code (plugin-dependent)</p>
          <div className="mt-2 flex items-center gap-2">
            <code className="flex-1 truncate rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-xs">
              {pluginSnippet}
            </code>
            <button
              type="button"
              onClick={() => copy(pluginSnippet, "plugin")}
              className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
            >
              {copied === "plugin" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        The <code className="font-mono">/tellraw</code> command works in vanilla Java Edition. The
        legacy <code className="font-mono">&amp;#RRGGBB</code> format only works on servers running a
        chat plugin that specifically parses hex codes — it isn&apos;t vanilla syntax.
      </p>
    </div>
  );
}
