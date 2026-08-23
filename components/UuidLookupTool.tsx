"use client";

import { useId, useState } from "react";
import SkinAvatar from "@/components/SkinAvatar";
import { isValidUsernameFormat, isValidUuidFormat } from "@/lib/mojang";

type ToolState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "invalid" }
  | { kind: "username_not_found"; value: string }
  | { kind: "uuid_not_found"; value: string }
  | { kind: "rate_limited" }
  | { kind: "error" }
  | { kind: "result"; uuid: string; username: string; skinUrl?: string };

function toDashedUuid(uuid: string): string {
  const hex = uuid.replace(/-/g, "").toLowerCase();
  if (hex.length !== 32) return uuid;
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function toUndashedUuid(uuid: string): string {
  return uuid.replace(/-/g, "").toLowerCase();
}

export default function UuidLookupTool() {
  const [input, setInput] = useState("");
  const [state, setState] = useState<ToolState>({ kind: "idle" });
  const [copied, setCopied] = useState<"dashed" | "undashed" | null>(null);
  const inputId = useId();

  async function copy(value: string, kind: "dashed" | "undashed") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // Clipboard unavailable — the value is still selectable as text.
    }
  }

  async function runLookup(value: string) {
    const trimmed = value.trim();

    if (isValidUuidFormat(trimmed)) {
      setState({ kind: "loading" });
      try {
        const res = await fetch(
          `/api/lookup-uuid?uuid=${encodeURIComponent(trimmed)}&includeSkin=true`
        );
        const data = await res.json();
        if (data.status === "found") {
          setState({ kind: "result", uuid: data.uuid, username: data.username, skinUrl: data.skinUrl });
        } else if (data.status === "not_found") {
          setState({ kind: "uuid_not_found", value: trimmed });
        } else if (data.status === "rate_limited") {
          setState({ kind: "rate_limited" });
        } else if (data.status === "invalid") {
          setState({ kind: "invalid" });
        } else {
          setState({ kind: "error" });
        }
      } catch {
        setState({ kind: "error" });
      }
      return;
    }

    if (!isValidUsernameFormat(trimmed)) {
      setState({ kind: "invalid" });
      return;
    }

    setState({ kind: "loading" });
    try {
      const res = await fetch(
        `/api/check-username?username=${encodeURIComponent(trimmed)}&includeSkin=true`
      );
      const data = await res.json();
      if (data.status === "taken") {
        setState({
          kind: "result",
          uuid: data.uuid,
          username: data.exactName ?? trimmed,
          skinUrl: data.skinUrl,
        });
      } else if (data.status === "available") {
        setState({ kind: "username_not_found", value: trimmed });
      } else if (data.status === "rate_limited") {
        setState({ kind: "rate_limited" });
      } else if (data.status === "invalid") {
        setState({ kind: "invalid" });
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
          void runLookup(input);
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
          {state.kind === "loading" ? "Looking up…" : "Look up"}
        </button>
      </form>

      {state.kind === "loading" && (
        <div className="mt-4 animate-pulse rounded-lg bg-slate-100 p-4 text-sm text-slate-400">
          Contacting Mojang&apos;s servers…
        </div>
      )}

      {state.kind === "invalid" && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          Enter a valid Minecraft username (3–16 letters, numbers, underscores) or a full UUID
          (dashed or undashed).
        </div>
      )}

      {state.kind === "username_not_found" && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <p className="font-medium">No Java Edition account owns &ldquo;{state.value}&rdquo;.</p>
          <p className="mt-1">There&apos;s no UUID to look up for a name that isn&apos;t registered.</p>
        </div>
      )}

      {state.kind === "uuid_not_found" && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <p className="font-medium">No account is assigned to that UUID.</p>
          <p className="mt-1">
            The UUID is well-formed, but no Java Edition account currently holds it — it may be an
            offline-mode/local UUID rather than a real Mojang-issued one (see below).
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

      {state.kind === "result" && (
        <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
          <div className="flex items-start gap-3">
            {state.skinUrl && (
              <SkinAvatar skinUrl={state.skinUrl} name={state.username} className="border-emerald-200" />
            )}
            <div>
              <p className="font-medium">&ldquo;{state.username}&rdquo;</p>
              <p className="mt-1 text-emerald-700">Current Java Edition account for this UUID/username.</p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <p className="font-medium text-emerald-900">Dashed UUID</p>
              <div className="mt-1 flex items-center gap-2">
                <code className="flex-1 truncate rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs">
                  {toDashedUuid(state.uuid)}
                </code>
                <button
                  type="button"
                  onClick={() => copy(toDashedUuid(state.uuid), "dashed")}
                  className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-700"
                >
                  {copied === "dashed" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
            <div>
              <p className="font-medium text-emerald-900">Undashed UUID</p>
              <div className="mt-1 flex items-center gap-2">
                <code className="flex-1 truncate rounded-lg border border-emerald-200 bg-white px-3 py-2 text-xs">
                  {toUndashedUuid(state.uuid)}
                </code>
                <button
                  type="button"
                  onClick={() => copy(toUndashedUuid(state.uuid), "undashed")}
                  className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-700"
                >
                  {copied === "undashed" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
