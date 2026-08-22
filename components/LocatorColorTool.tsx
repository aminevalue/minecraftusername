"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { UsernameLookupResult } from "@/lib/mojang";
import { computeLocatorColor, isValidUuidFormat, type LocatorColorResult } from "@/lib/locator-color";

type ToolState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "invalid" }
  | { kind: "not_found"; value: string }
  | { kind: "rate_limited" }
  | { kind: "error" }
  | { kind: "result"; uuid: string; label: string; color: LocatorColorResult };

const USERNAME_FORMAT = /^[A-Za-z0-9_]{3,16}$/;

export default function LocatorColorTool() {
  const [input, setInput] = useState("");
  const [state, setState] = useState<ToolState>({ kind: "idle" });
  const inputId = useId();

  async function runCheck(value: string) {
    const trimmed = value.trim();

    if (isValidUuidFormat(trimmed)) {
      setState({ kind: "result", uuid: trimmed, label: trimmed, color: computeLocatorColor(trimmed) });
      return;
    }

    if (!USERNAME_FORMAT.test(trimmed)) {
      setState({ kind: "invalid" });
      return;
    }

    setState({ kind: "loading" });

    try {
      const res = await fetch(`/api/check-username?username=${encodeURIComponent(trimmed)}`);
      const data = (await res.json()) as UsernameLookupResult;

      if (data.status === "taken" && data.uuid) {
        setState({
          kind: "result",
          uuid: data.uuid,
          label: data.exactName ?? trimmed,
          color: computeLocatorColor(data.uuid),
        });
      } else if (data.status === "available") {
        setState({ kind: "not_found", value: trimmed });
      } else if (data.status === "rate_limited") {
        setState({ kind: "rate_limited" });
      } else {
        setState({ kind: "error" });
      }
    } catch {
      setState({ kind: "error" });
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void runCheck(input);
        }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <div className="flex-1">
          <label htmlFor={inputId} className="sr-only">
            Minecraft username or UUID
          </label>
          <input
            id={inputId}
            type="text"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={36}
            value={input}
            onChange={(e) => setInput(e.target.value.replace(/\s/g, ""))}
            placeholder="Enter a Minecraft username or UUID"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </div>
        <button
          type="submit"
          disabled={state.kind === "loading" || !input}
          className="rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {state.kind === "loading" ? "Checking…" : "Check locator color"}
        </button>
      </form>

      {state.kind === "loading" && (
        <div className="mt-4 animate-pulse rounded-lg bg-slate-100 p-4 text-sm text-slate-400">
          Resolving account…
        </div>
      )}

      {state.kind === "invalid" && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Enter a valid Minecraft username (3–16 letters, numbers, underscores) or a full UUID.
        </div>
      )}

      {state.kind === "not_found" && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <p className="font-medium">No Java Edition account owns &ldquo;{state.value}&rdquo;.</p>
          <p className="mt-1">
            The locator bar color is derived from an account&apos;s UUID, so there&apos;s nothing to compute for
            a name that isn&apos;t registered. Check the exact spelling, or try the{" "}
            <Link href="/minecraft-username-checker" className="font-medium underline">
              Username Checker
            </Link>{" "}
            first.
          </p>
        </div>
      )}

      {(state.kind === "rate_limited" || state.kind === "error") && (
        <div className="mt-4 rounded-lg border border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
          {state.kind === "rate_limited"
            ? "Mojang is rate-limiting lookups right now — wait a minute and try again."
            : "Something went wrong reaching Mojang's servers. Please try again in a moment."}
        </div>
      )}

      {state.kind === "result" && <LocatorResultCard label={state.label} uuid={state.uuid} color={state.color} />}
    </div>
  );
}

function LocatorResultCard({
  label,
  uuid,
  color,
}: {
  label: string;
  uuid: string;
  color: LocatorColorResult;
}) {
  return (
    <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
      <p className="font-medium">Locator bar color for &ldquo;{label}&rdquo;</p>
      <div className="mt-3 flex items-center gap-4">
        <div
          className="h-14 w-14 shrink-0 rounded-md border border-emerald-300"
          style={{ backgroundColor: color.inGame.hex }}
          aria-label={`In-game locator color swatch: ${color.inGame.hex}`}
        />
        <div>
          <p className="font-mono text-base">{color.inGame.hex}</p>
          <p className="text-emerald-700">
            rgb({color.inGame.rgb.r}, {color.inGame.rgb.g}, {color.inGame.rgb.b})
          </p>
        </div>
      </div>
      <p className="mt-3 text-emerald-800">
        This is the exact marker color other Java Edition players see for this account on the locator bar,
        computed the same way the game does (UUID hash → brightness pinned to 90%).
      </p>
      <details className="mt-3 text-emerald-800">
        <summary className="cursor-pointer font-medium">Raw pre-brightness value</summary>
        <p className="mt-1">
          Before the game normalizes brightness, the raw UUID-derived color is{" "}
          <span className="font-mono">{color.raw.hex}</span> (rgb({color.raw.rgb.r}, {color.raw.rgb.g},{" "}
          {color.raw.rgb.b})). Hue and saturation carry through unchanged; only brightness is adjusted for the
          final marker.
        </p>
      </details>
      <p className="mt-3 break-all text-xs text-emerald-700">UUID: {uuid}</p>
    </div>
  );
}
