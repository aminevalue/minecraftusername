import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "OG Minecraft Usernames — Short, Clean & Unique Name Ideas";
const PAGE_DESCRIPTION =
  "What 'OG' actually means for a Minecraft username, OG-style name ideas across short, clean, classic, and unique styles, and how to check one's real availability.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-og-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-og-usernames`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
};

const CATEGORY_LINK = Object.fromEntries(IDEA_CATEGORY_LINKS.map((l) => [l.href, l])) as Record<
  string,
  (typeof IDEA_CATEGORY_LINKS)[number]
>;

interface NameGroup {
  emoji: string;
  label: string;
  names: string[];
}

const GROUPS: NameGroup[] = [
  { emoji: "🕹️", label: "Short OG-style usernames", names: ["Zane07", "Gray14", "Finch21", "Ross88", "Beck09", "Wade17", "Cole22", "Vance03"] },
  { emoji: "🧼", label: "Clean OG-style usernames", names: ["Colton", "Garret", "Deacon", "Palmer", "Nolan", "Weston", "Harlan", "Foster"] },
  { emoji: "🪨", label: "One-word username ideas", names: ["Anchor", "Harbor", "Lantern", "Compass", "Meridian", "Foundry", "Outpost", "Bastion"] },
  { emoji: "⛏️", label: "Classic Minecraft-style names", names: ["DirtBlockDan", "CraftedRelic", "BedrockElder", "SpawnPointSam", "WoodenToolz", "AnvilAndAsh", "OldServerJoe", "FirstJoinFox"] },
  { emoji: "⚔️", label: "OG-style PvP names", names: ["PvPVeteran", "ArenaElder", "DuelistElder", "OldSchoolPvP", "CombatClassic", "RingVeteran", "BrawlerVet", "SwordSage"] },
  { emoji: "🌀", label: "Unique OG-style names", names: ["Varrek", "Oswin", "Brandt", "Corwen", "Aldric", "Wystan", "Kaldor", "Renfeld"] },
];

function NameChips({ names }: { names: string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-2">
      {names.map((name) => (
        <li key={name}>
          <Link
            href={`/minecraft-username-checker?name=${encodeURIComponent(name)}`}
            className="inline-block rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-sm text-slate-800 transition-colors hover:border-emerald-400 hover:text-emerald-700"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function OgUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "OG Minecraft Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-og-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "OG Minecraft Names", href: "/minecraft-og-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">OG Minecraft Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          When players search for &ldquo;OG Minecraft usernames,&rdquo; they usually mean one of two
          things: a name that feels like it belongs to Minecraft&apos;s early years — plain, simple,
          unadorned — or, less literally, an actual old account with a short or memorable name. This
          page is about the first meaning: <strong>OG-style</strong> naming, not a claim about any
          specific account&apos;s real history.
        </p>
        <p>
          Every name below is a style idea to adapt or check, not a verified-available username and
          not a claim that it belongs to (or ever belonged to) an early Minecraft account.
        </p>
      </div>

      {/* 1. Best OG usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best OG Minecraft Username Ideas</h2>
        <p className="text-sm text-slate-500">
          These are OG-style name ideas, not confirmed-available names and not real historical
          accounts — click any one to check it against live Mojang data.
        </p>
        {GROUPS.map((group) => (
          <div key={group.label}>
            <h3 className="text-lg font-semibold text-slate-900">
              {group.emoji} {group.label}
            </h3>
            <NameChips names={group.names} />
          </div>
        ))}
      </section>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      {/* 2. What makes a name OG */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Minecraft Username &ldquo;OG&rdquo;?</h2>
        <p>
          &ldquo;OG&rdquo; isn&apos;t an official category or a technical property Mojang tracks —
          it&apos;s a style players associate with a handful of common traits:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Shortness</strong> — fewer characters reads as older and more established.</li>
          <li><strong>Simplicity</strong> — a plain word or name rather than a themed combination.</li>
          <li><strong>Memorability</strong> — easy to recall and repeat without effort.</li>
          <li><strong>Clean spelling</strong> — no stylized letter substitutions or decorative brackets.</li>
          <li><strong>A single-word concept</strong> — one idea, not a stacked combination of several.</li>
          <li><strong>Minimal numbers</strong> — zero or at most a short 2-digit suffix.</li>
          <li><strong>Minimal unnecessary characters</strong> — no underscores or symbols beyond what the format requires.</li>
        </ul>
        <p>
          These are subjective associations, not rules — plenty of genuinely old Minecraft accounts
          don&apos;t fit this pattern, and a brand-new account can use a name with every one of these
          traits. None of it changes an account&apos;s actual creation date or history.
        </p>
      </section>

      {/* 3. OG vs short vs 3/4 letter */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">OG vs Short vs 3-Letter vs 4-Letter Usernames</h2>
        <p>
          These categories overlap, but they&apos;re not the same thing. A short or 3-/4-letter name
          isn&apos;t automatically &ldquo;OG&rdquo; — it&apos;s just brief. And an OG-style name
          isn&apos;t necessarily short — a plain word like <span className="font-mono text-sm">Foundry</span>{" "}
          reads as OG-style without being especially short. The overlap exists because simplicity and
          brevity both contribute to the same general impression, not because they&apos;re
          interchangeable terms.
        </p>
        <p>
          If length specifically is what you&apos;re after, see{" "}
          <Link href="/minecraft-short-usernames" className="font-medium text-emerald-600 underline">
            Short Minecraft Usernames
          </Link>
          , or the dedicated{" "}
          <Link href="/minecraft-3-letter-usernames" className="font-medium text-emerald-600 underline">
            3-Letter
          </Link>{" "}
          and{" "}
          <Link href="/minecraft-4-letter-usernames" className="font-medium text-emerald-600 underline">
            4-Letter
          </Link>{" "}
          checkers.
        </p>
      </section>

      {/* 4. How to find */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Find an OG-Style Minecraft Username</h2>
        <p>
          The goal is a name that feels clean and simple — not a copy of a real early-era account,
          which is unlikely to be available and isn&apos;t the point anyway. A simple process:
        </p>
        <p className="font-medium text-slate-900">Choose a simple concept → shorten it → create variations → check the result</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Start with one plain concept: a common noun, a first name, a short trade or role.</li>
          <li>Shorten it if needed: &ldquo;Foundryman&rdquo; → <span className="font-mono text-sm">Foundry</span></li>
          <li>Create a couple of variations: add a short 2-digit number, or trim a syllable.</li>
          <li>Say it out loud — if it reads clean and simple, it&apos;s doing its job.</li>
          <li>Check the result before you get attached to it — every idea here is unverified until checked.</li>
        </ul>
      </section>

      {/* 5. Check conversion */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to Check an OG Username</h2>
        <p className="mt-3 text-slate-700">
          A name appearing on this page doesn&apos;t mean it&apos;s available — it&apos;s an idea to
          test. Click any chip above, or{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          directly. A <strong>taken</strong> result means an active account already holds that exact
          name; an <strong>available</strong> result is a live snapshot, not a reservation — someone
          else could still claim it first.
        </p>
      </section>

      {/* 6. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate OG-Style Username Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — generate fresh combinations, pick one that
          feels clean and simple, then check it above.
        </p>
        <Link
          href="/minecraft-username-generator?theme=tech"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 7. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-short-usernames"],
          CATEGORY_LINK["/minecraft-3-letter-usernames"],
          CATEGORY_LINK["/minecraft-4-letter-usernames"],
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-unique-usernames"],
          CATEGORY_LINK["/minecraft-aesthetic-usernames"],
          CATEGORY_LINK["/minecraft-pvp-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
        ]}
      />

      {/* 8. Related tools */}
      <RelatedLinks
        title="Related Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[2], TOOL_LINKS[6], TOOL_LINKS[3]]}
      />

      <FaqSection
        faqs={[
          {
            question: "What is an OG Minecraft username?",
            answer:
              "There's no official definition — it's a style term players use for names that feel plain, simple, and old-school, or occasionally to describe an actual early-era account. This page focuses on OG-style naming, not verified account history.",
          },
          {
            question: "What makes a Minecraft username OG-style?",
            answer:
              "Traits players commonly associate with it: shortness, simplicity, memorability, clean spelling, a single-word concept, and minimal numbers or extra characters. These are aesthetic associations, not rules.",
          },
          {
            question: "Are OG Minecraft usernames rare?",
            answer:
              "'OG' describes a style, not a tracked category, so there's no reliable count of how many exist or remain available. Some genuinely old, simple names are still unclaimed; others aren't. Check a specific name to know for sure.",
          },
          {
            question: "How can I find an OG-style Minecraft username?",
            answer:
              "Browse the style groups above, follow the naming process in the how-to section, or generate fresh ideas with the Username Generator — then check whatever you like.",
          },
          {
            question: "How do I check if an OG username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data. Appearing on this page never means a name is available.",
          },
          {
            question: "Are short usernames considered OG?",
            answer:
              "Often, since brevity is one trait associated with the style, but they're not the same thing — a short name isn't automatically OG-style, and an OG-style name doesn't have to be short.",
          },
          {
            question: "Are 3-letter and 4-letter usernames OG?",
            answer:
              "They can read that way since extreme brevity fits the style, but length alone doesn't make a name OG — see our dedicated 3-Letter and 4-Letter pages for those specifically.",
          },
          {
            question: "Can I change my Minecraft username?",
            answer:
              "Yes, on Java Edition, once every 30 days for free through your account profile at minecraft.net. Bedrock Edition uses your Xbox gamertag instead, changed via Xbox account settings.",
          },
        ]}
      />
    </div>
  );
}
