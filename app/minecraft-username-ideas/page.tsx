import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Minecraft Username Ideas — Browse by Category";
const PAGE_DESCRIPTION =
  "Explore curated Minecraft username ideas organized by category: cool, funny, short, OG, aesthetic, tryhard, PvP, YouTuber, clan names, and more.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-username-ideas` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-username-ideas`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

export default function IdeasHubPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft Username Ideas",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-username-ideas`,
            })
          ),
        }}
      />

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

      {/* NEW: orientation section, before the raw grid */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Which Category Actually Fits You?</h2>
        <p>
          These 14 categories split along a few different axes, and knowing which one you care about
          narrows things faster than browsing all of them:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Want a specific length?</strong>{" "}
            <Link href="/minecraft-short-usernames" className="text-emerald-600 underline">Short</Link>,{" "}
            <Link href="/minecraft-3-letter-usernames" className="text-emerald-600 underline">3-Letter</Link>, and{" "}
            <Link href="/minecraft-4-letter-usernames" className="text-emerald-600 underline">4-Letter</Link>{" "}
            are built around exact character counts, not a mood.
          </li>
          <li>
            <strong>Want a specific mood?</strong>{" "}
            <Link href="/minecraft-cool-usernames" className="text-emerald-600 underline">Cool</Link>,{" "}
            <Link href="/minecraft-aesthetic-usernames" className="text-emerald-600 underline">Aesthetic</Link>,{" "}
            <Link href="/minecraft-unique-usernames" className="text-emerald-600 underline">Unique</Link>,{" "}
            <Link href="/minecraft-og-usernames" className="text-emerald-600 underline">OG</Link>, and{" "}
            <Link href="/minecraft-funny-usernames" className="text-emerald-600 underline">Funny</Link>{" "}
            each lean into a different feel rather than a length or a use case.
          </li>
          <li>
            <strong>Naming for a specific use?</strong>{" "}
            <Link href="/minecraft-pvp-usernames" className="text-emerald-600 underline">PvP</Link> and{" "}
            <Link href="/minecraft-tryhard-usernames" className="text-emerald-600 underline">Tryhard</Link>{" "}
            are built for combat servers,{" "}
            <Link href="/minecraft-youtuber-usernames" className="text-emerald-600 underline">YouTuber</Link>{" "}
            is built for content-creator branding, and{" "}
            <Link href="/minecraft-clan-names" className="text-emerald-600 underline">Clan Names</Link>{" "}
            is for naming a group, not one account.
          </li>
          <li>
            <strong>Searching by common phrasing?</strong>{" "}
            <Link href="/minecraft-usernames-for-boys" className="text-emerald-600 underline">Boys</Link>{" "}
            and{" "}
            <Link href="/minecraft-usernames-for-girls" className="text-emerald-600 underline">Girls</Link>{" "}
            reflect how people actually search, not a restriction — every name on either page works
            for anyone.
          </li>
        </ul>
        <p>
          Still not sure? Pick whichever category&apos;s description below sounds closest, click a
          name that looks right, and check it — that&apos;s faster than reading nine of these front
          to back.
        </p>
      </section>

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
