import Link from "next/link";
import type { Metadata } from "next";
import AdSlot from "@/components/AdSlot";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Minecraft Username Tools & Name Ideas",
  description:
    "Check Minecraft username availability, preview color styles, generate name ideas, and browse curated username lists — all free, no account required.",
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <div>
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
        <h2 className="text-2xl font-semibold text-slate-900">What is Minecraft Username?</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Minecraft Username is a free toolset for anyone picking, checking, or styling a Minecraft
          name. Every tool on this site runs against a real, current data source where one exists —
          we don&apos;t fabricate results, and we&apos;re upfront about what each tool can and can&apos;t
          tell you. This site is an independent fan project and is not affiliated with, endorsed by,
          or operated by Mojang Studios or Microsoft.
        </p>
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

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <AdSlot size="in-content" />
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
