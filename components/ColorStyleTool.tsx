"use client";

import { useMemo, useState } from "react";
import { MINECRAFT_COLORS, MINECRAFT_FORMATS, toAmpersandCode, toSectionCode } from "@/lib/format-codes";

export default function ColorStyleTool() {
  const [text, setText] = useState("Steve");
  const [colorCode, setColorCode] = useState("a");
  const [formats, setFormats] = useState<string[]>([]);
  const [copied, setCopied] = useState<"section" | "ampersand" | null>(null);
  const [copyFailed, setCopyFailed] = useState<"section" | "ampersand" | null>(null);

  const color = MINECRAFT_COLORS.find((c) => c.code === colorCode) ?? MINECRAFT_COLORS[10];

  const previewStyle = useMemo(
    () => ({
      color: color.hex,
      fontWeight: formats.includes("l") ? 700 : 400,
      fontStyle: formats.includes("o") ? ("italic" as const) : ("normal" as const),
      textDecoration:
        [formats.includes("n") ? "underline" : "", formats.includes("m") ? "line-through" : ""]
          .filter(Boolean)
          .join(" ") || "none",
    }),
    [color, formats]
  );

  const sectionCode = toSectionCode(colorCode, formats, text || "Steve");
  const ampersandCode = toAmpersandCode(colorCode, formats, text || "Steve");

  function toggleFormat(code: string) {
    setFormats((prev) => (prev.includes(code) ? prev.filter((f) => f !== code) : [...prev, code]));
  }

  async function copy(value: string, kind: "section" | "ampersand") {
    try {
      await navigator.clipboard.writeText(value);
      setCopyFailed(null);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
      setCopyFailed(kind);
      setTimeout(() => setCopyFailed(null), 3000);
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <label htmlFor="style-text" className="block text-sm font-medium text-slate-700">
        Text to style
      </label>
      <input
        id="style-text"
        type="text"
        maxLength={32}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-base outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
      />

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-700">Color</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {MINECRAFT_COLORS.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => setColorCode(c.code)}
              aria-pressed={colorCode === c.code}
              title={c.name}
              className={`h-9 w-9 rounded-md border-2 transition-transform ${
                colorCode === c.code ? "scale-110 border-slate-900" : "border-slate-200"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm font-medium text-slate-700">Formatting</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {MINECRAFT_FORMATS.filter((f) => f.code !== "r").map((f) => (
            <button
              key={f.code}
              type="button"
              onClick={() => toggleFormat(f.code)}
              aria-pressed={formats.includes(f.code)}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                formats.includes(f.code)
                  ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                  : "border-slate-300 text-slate-600 hover:border-slate-400"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-700">Live preview</p>
        <div className="mt-2 rounded-lg bg-slate-900 p-6 text-xl" style={{ fontFamily: "monospace" }}>
          <span style={previewStyle}>{text || "Steve"}</span>
          {formats.includes("k") && (
            <span className="ml-3 align-middle text-xs font-sans text-slate-400">
              (obfuscated text cycles randomly in-game — this preview shows the base text)
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-slate-700">Section-sign code (in-game chat, signs, books)</p>
          <div className="mt-2 flex items-center gap-2">
            <code className="flex-1 truncate rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm">
              {sectionCode}
            </code>
            <button
              type="button"
              onClick={() => copy(sectionCode, "section")}
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
            >
              {copied === "section" ? "Copied!" : "Copy"}
            </button>
          </div>
          {copyFailed === "section" && (
            <p className="mt-1 text-xs text-amber-600">
              Couldn&apos;t access the clipboard — select the code above and copy it manually.
            </p>
          )}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-700">Ampersand code (server plugins, MOTD configs)</p>
          <div className="mt-2 flex items-center gap-2">
            <code className="flex-1 truncate rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm">
              {ampersandCode}
            </code>
            <button
              type="button"
              onClick={() => copy(ampersandCode, "ampersand")}
              className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
            >
              {copied === "ampersand" ? "Copied!" : "Copy"}
            </button>
          </div>
          {copyFailed === "ampersand" && (
            <p className="mt-1 text-xs text-amber-600">
              Couldn&apos;t access the clipboard — select the code above and copy it manually.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
