import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Username Ideas — Browse by Category",
  description:
    "Explore curated Minecraft username ideas organized by category: cool, funny, short, OG, aesthetic, tryhard, PvP, YouTuber, clan names, and more.",
  alternates: { canonical: `${SITE_URL}/minecraft-username-ideas` },
};

export default function IdeasHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Name Ideas", href: "/minecraft-username-ideas" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Username Ideas</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Picking a username is easier when you start from a clear style instead of a blank page. Each
        category below has its own curated names, grouped further by tone, plus practical tips for
        that specific style. Every name links directly to a live availability check.
      </p>

      <div className="mt-8">
        <AdSlot size="banner" />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {IDEA_CATEGORY_LINKS.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="rounded-xl border border-slate-200 p-5 transition-colors hover:border-emerald-400 hover:shadow-sm"
          >
            <h2 className="font-semibold text-slate-900">{cat.label}</h2>
            <p className="mt-2 text-sm text-slate-600">{cat.description}</p>
          </Link>
        ))}
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to use these lists</h2>
        <p>
          None of the names in these lists are pre-checked as available — think of them as a starting
          point, not a guarantee. Click any name to send it straight to our{" "}
          <Link href="/minecraft-username-checker" className="text-emerald-600 underline">
            Username Checker
          </Link>
          , or use the{" "}
          <Link href="/minecraft-username-generator" className="text-emerald-600 underline">
            Username Generator
          </Link>{" "}
          to create fresh combinations in the same style if everything on a list is taken.
        </p>
      </section>

      <RelatedLinks title="Tools" links={TOOL_LINKS} />
    </div>
  );
}
