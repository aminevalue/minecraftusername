"use client";

import { useState, useEffect, useId } from "react";
import Link from "next/link";
import type { UsernameLookupResult } from "@/lib/mojang";

interface Props {
  initialUsername?: string;
  exactLength?: number;
  ctaLabel?: string;
  showSkin?: boolean;
}

function formatError(username: string, exactLength?: number): string | null {
  if (username.length === 0) return null;
  if (exactLength && username.length !== exactLength) {
    return `Enter exactly ${exactLength} characters to use this checker.`;
  }
  if (username.length < 3 || username.length > 16) {
    return "Minecraft usernames must be 3–16 characters long.";
  }
  if (!/^[A-Za-z0-9_]+$/.test(username)) {
    return "Only letters, numbers, and underscores are allowed — no spaces or symbols.";
  }
  return null;
}

export default function UsernameCheckerForm({
  initialUsername = "",
  exactLength,
  ctaLabel = "Check availability",
  showSkin = false,
}: Props) {
  const [username, setUsername] = useState(initialUsername);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<UsernameLookupResult | null>(null);
  const [httpError, setHttpError] = useState<string | null>(null);
  const inputId = useId();

  const validationError = formatError(username, exactLength);

  useEffect(() => {
    if (initialUsername) {
      // Auto-run the check once when arriving pre-filled from the generator.
      void runCheck(initialUsername);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function runCheck(value: string) {
    const trimmed = value.trim();
    if (formatError(trimmed, exactLength)) return;

    setLoading(true);
    setHttpError(null);
    setResult(null);

    try {
      const skinParam = showSkin ? "&includeSkin=true" : "";
      const res = await fetch(`/api/check-username?username=${encodeURIComponent(trimmed)}${skinParam}`);
      const data = (await res.json()) as UsernameLookupResult;
      setResult(data);
    } catch {
      setHttpError("Couldn't reach the lookup service. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void runCheck(username);
        }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <div className="flex-1">
          <label htmlFor={inputId} className="sr-only">
            Minecraft username
          </label>
          <input
            id={inputId}
            type="text"
            inputMode="text"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={16}
            value={username}
            onChange={(e) => setUsername(e.target.value.replace(/\s/g, ""))}
            placeholder={exactLength ? `Enter a ${exactLength}-letter username` : "Enter a Minecraft username"}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !username || Boolean(validationError)}
          className="rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        >
          {loading ? "Checking…" : ctaLabel}
        </button>
      </form>

      {validationError && username.length > 0 && (
        <p className="mt-3 text-sm text-amber-600">{validationError}</p>
      )}

      {loading && (
        <div className="mt-4 animate-pulse rounded-lg bg-slate-100 p-4 text-sm text-slate-400">
          Contacting Mojang&apos;s servers…
        </div>
      )}

      {!loading && httpError && (
        <div className="mt-4 rounded-lg border border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
          {httpError}
        </div>
      )}

      {!loading && result && <ResultCard result={result} exactLength={exactLength} />}
    </div>
  );
}

function ResultCard({ result, exactLength }: { result: UsernameLookupResult; exactLength?: number }) {
  if (result.status === "invalid") {
    return (
      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <p className="font-medium">That isn&apos;t a valid Minecraft username.</p>
        <p className="mt-1">
          Usernames must be {exactLength ?? "3–16"} character{exactLength === 1 ? "" : "s"}, using only letters,
          numbers, and underscores.
        </p>
      </div>
    );
  }

  if (result.status === "rate_limited") {
    return (
      <div className="mt-4 rounded-lg border border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-medium">Mojang is rate-limiting lookups right now.</p>
        <p className="mt-1">Wait a minute and try again — we don&apos;t guess results when the API is throttled.</p>
      </div>
    );
  }

  if (result.status === "error") {
    return (
      <div className="mt-4 rounded-lg border border-slate-300 bg-slate-50 p-4 text-sm text-slate-700">
        <p className="font-medium">Something went wrong reaching Mojang&apos;s servers.</p>
        <p className="mt-1">This is usually temporary. Please try again in a moment.</p>
      </div>
    );
  }

  if (result.status === "taken") {
    return (
      <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
        <div className="flex items-start gap-3">
          {result.skinUrl && <SkinAvatar skinUrl={result.skinUrl} name={result.exactName ?? result.username} />}
          <div>
            <p className="font-medium">
              &ldquo;{result.exactName ?? result.username}&rdquo; is currently taken.
            </p>
            <p className="mt-1">
              This name belongs to an active Minecraft (Java Edition) account. It can only become available again if
              that account is renamed or the name is otherwise released by Mojang.
            </p>
          </div>
        </div>
        <p className="mt-3">
          <Link href="/minecraft-username-generator" className="font-medium text-rose-900 underline">
            Try the generator for alternative ideas →
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
      <p className="font-medium">&ldquo;{result.username}&rdquo; looks available.</p>
      <p className="mt-1">
        No Java Edition account currently holds this exact name. This is a live snapshot, not a reservation —
        someone else could claim it before you do, and this check doesn&apos;t cover Bedrock gamertags or
        Mojang-blocked words.
      </p>
    </div>
  );
}

const SKIN_AVATAR_SIZE = 56;
const SKIN_TEXTURE_WIDTH = 64;

function SkinAvatar({ skinUrl, name }: { skinUrl: string; name: string }) {
  const scale = SKIN_AVATAR_SIZE / 8;
  return (
    <div
      className="shrink-0 overflow-hidden rounded-md border border-rose-200 bg-white"
      style={{ width: SKIN_AVATAR_SIZE, height: SKIN_AVATAR_SIZE }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- cropped via inline transform, next/image can't do this */}
      <img
        src={skinUrl}
        alt={`Current Minecraft skin for ${name}`}
        style={{
          maxWidth: "none",
          width: SKIN_TEXTURE_WIDTH * scale,
          height: "auto",
          imageRendering: "pixelated",
          transform: `translate(-${8 * scale}px, -${8 * scale}px)`,
        }}
      />
    </div>
  );
}
