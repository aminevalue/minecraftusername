"use client";

import { useState } from "react";
import Link from "next/link";
import {
  generateUsernames,
  GeneratorStyle,
  GeneratorTheme,
  STYLE_LABELS,
  THEME_LABELS,
  type GeneratorOptions,
} from "@/lib/generator";

const THEME_OPTIONS = Object.keys(THEME_LABELS) as GeneratorTheme[];
const STYLE_OPTIONS = Object.keys(STYLE_LABELS) as GeneratorStyle[];

export default function GeneratorTool({ initialTheme }: { initialTheme?: GeneratorTheme }) {
  const [theme, setTheme] = useState<GeneratorTheme>(initialTheme ?? "fantasy");
  const [style, setStyle] = useState<GeneratorStyle>("cool");
  const [useNumbers, setUseNumbers] = useState(false);
  const [shortNames, setShortNames] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  function generate() {
    const options: GeneratorOptions = { theme, style, useNumbers, shortNames, count: 12 };
    setResults(generateUsernames(options));
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-slate-700">
            Theme
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value as GeneratorTheme)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
          >
            {THEME_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {THEME_LABELS[t]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="style" className="block text-sm font-medium text-slate-700">
            Style
          </label>
          <select
            id="style"
            value={style}
            onChange={(e) => setStyle(e.target.value as GeneratorStyle)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
          >
            {STYLE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {STYLE_LABELS[s]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={(e) => setUseNumbers(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300"
          />
          Include numbers
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={shortNames}
            onChange={(e) => setShortNames(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300"
          />
          Short names only
        </label>
      </div>

      <button
        type="button"
        onClick={generate}
        className="mt-5 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
      >
        Generate names
      </button>

      {results.length > 0 && (
        <div className="mt-6">
          <p className="text-sm text-slate-500">
            These are generated suggestions, not confirmed as available. Click &ldquo;Check&rdquo; to
            verify any name against live Mojang data.
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {results.map((name) => (
              <li
                key={name}
                className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 px-4 py-3"
              >
                <span className="font-mono text-slate-900">{name}</span>
                <Link
                  href={`/minecraft-username-checker?name=${encodeURIComponent(name)}`}
                  className="shrink-0 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-700"
                >
                  Check
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
