import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Free Minecraft Username Tools & Name Ideas";
const PAGE_DESCRIPTION =
  "Check Minecraft username availability, preview color styles, generate name ideas, and browse curated username lists — all free, no account required.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft Username",
              description: PAGE_DESCRIPTION,
              url: SITE_URL,
            })
          ),
        }}
      />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Minecraft Username Tools, Built for Players
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Check if a username is taken, generate fresh ideas, preview chat colors, and find the
            perfect name — free, fast, and with no account needed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/minecraft-username-checker"
              className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              Check a Username
            </Link>
            <Link
              href="/minecraft-username-generator"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:border-emerald-400 hover:text-emerald-400"
            >
              Generate Ideas
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <AdSlot size="banner" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900">Why Use MinecraftUsername.com?</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Most username tools online fall into one of two problems: they guess or cache results
          instead of checking live, or they bury a simple lookup behind ads, pop-ups, or a required
          sign-up. This site is built to avoid both. Every check runs against a real, current data
          source — we don&apos;t fabricate an &ldquo;available&rdquo; result to keep you clicking, and
          we say so plainly when a tool has a real limitation (like username history, which Mojang
          stopped providing publicly in 2022) instead of faking data to fill the gap. Nothing here
          requires an account, and nothing is hidden behind a paywall.
        </p>
        <p className="mt-3 max-w-3xl text-slate-600">
          This is an independent fan project, not an official Mojang or Microsoft product — see the{" "}
          <Link href="/disclaimer" className="text-emerald-600 underline">Disclaimer</Link> for
          exactly what that means.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <AdSlot size="in-content" />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900">What you can do here</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOL_LINKS.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-slate-200 p-5 transition-colors hover:border-emerald-400 hover:shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{tool.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW: how the tools connect as one workflow */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900">How These Tools Fit Together</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Most players don&apos;t use just one of these in isolation — they move through them in
          order. Start with the{" "}
          <Link href="/minecraft-username-generator" className="text-emerald-600 underline">Generator</Link>{" "}
          or a curated{" "}
          <Link href="/minecraft-username-ideas" className="text-emerald-600 underline">
            category list
          </Link>{" "}
          to land on a few ideas, confirm one is actually free with the{" "}
          <Link href="/minecraft-username-checker" className="text-emerald-600 underline">
            Username Checker
          </Link>
          , then preview how it displays in chat with the{" "}
          <Link href="/minecraft-username-color-checker" className="text-emerald-600 underline">
            Color &amp; Style
          </Link>{" "}
          tool. If you already have an account and want to understand what&apos;s attached to it —
          its permanent ID, or what history data still exists — the{" "}
          <Link href="/minecraft-uuid-lookup" className="text-emerald-600 underline">UUID Lookup</Link>{" "}
          and{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            History Checker
          </Link>{" "}
          cover that separately, since availability and identity are two different questions.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Name Ideas by Category</h2>
          <p className="mt-2 text-slate-600">
            Not sure where to start? Browse curated username ideas organized by style and audience.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {IDEA_CATEGORY_LINKS.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-600"
              >
                {cat.label}
              </Link>
            ))}
          </div>
          <Link
            href="/minecraft-username-ideas"
            className="mt-5 inline-block font-medium text-emerald-600 hover:underline"
          >
            See all name ideas →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-semibold text-slate-900">How the checker actually works</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Our username checker asks Mojang&apos;s public account lookup directly whether a name is
          currently held by a Java Edition account. A result of &ldquo;available&rdquo; means no
          account holds that exact name right now — it is a live snapshot, not a reservation, and it
          doesn&apos;t cover Bedrock gamertags or Mojang&apos;s blocked-word filters. Read the full
          rules and limitations on the{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-600 underline">
            Username Checker page
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
