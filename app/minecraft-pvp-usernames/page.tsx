import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Minecraft PvP Usernames — Cool, Short & Tryhard Name Ideas";
const PAGE_DESCRIPTION =
  "Minecraft PvP username ideas across short, cool, tryhard, competitive, funny, and dark styles, plus what actually makes a good PvP name and how to build your own.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-pvp-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-pvp-usernames`,
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
  {
    emoji: "⚡",
    label: "Short PvP usernames",
    names: ["Zynk", "Bexo", "Kryv", "Jolq", "Vryn", "Ossk", "Faxx", "Nyro"],
  },
  {
    emoji: "😎",
    label: "Cool PvP usernames",
    names: ["Ashfen", "Kordyn", "Vantrix", "Ryzek", "Emberix", "Halveon", "Wraithyn", "Duskarn"],
  },
  {
    emoji: "🥵",
    label: "Tryhard PvP usernames",
    names: ["SweatMode", "FullTryhard", "GrindLords", "MaxEffort99", "NoDaysOff_", "GrindNeverStops", "TryhardNation", "SweatEquity"],
  },
  {
    emoji: "🏆",
    label: "Competitive Minecraft names",
    names: ["TopLB_", "RankClimber", "LeaderboardX", "StatCheck99", "EloGrinder", "SeasonOne_", "QueueGrinder", "MMRHunter"],
  },
  {
    emoji: "😂",
    label: "Funny PvP usernames",
    names: ["Respawn_Again", "OneHPWonder", "DiedAgainLol", "ClutchOrCrutch", "PvPButBad", "AlwaysThirdParty", "FallDamageKing", "CritOrMiss"],
  },
  {
    emoji: "🧼",
    label: "Clean / simple PvP names",
    names: ["Rowen", "Astra", "Brikk", "Talven", "Merek", "Odyric", "Casven", "Lyrek"],
  },
  {
    emoji: "🖤",
    label: "Dark / edgy PvP names",
    names: ["Grimfen", "Ashvane", "Nyxrot", "Vorash", "Duskrend", "Ravengrim", "Emberrot", "Wraithcut"],
  },
  {
    emoji: "🌀",
    label: "Unique PvP usernames",
    names: ["Vryxel", "Ostrune", "Kaelvyn", "Ferrune", "Ymzeth", "Corvane", "Sylquor", "Thravyx"],
  },
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

export default function PvpUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft PvP Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-pvp-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Minecraft PvP Names", href: "/minecraft-pvp-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft PvP Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          A good PvP username has practical constraints a purely aesthetic name doesn&apos;t:
          it needs to be quick to type if it ever comes up in combat chat, easy to say out loud
          to a teammate, and memorable enough that an opponent actually registers it mid-fight.
        </p>
        <p>
          The groups below cover the styles PvP players search for most, followed by what
          actually makes a PvP name work and a simple process for building your own.
        </p>
      </div>

      {/* 1. Best PvP usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Minecraft PvP Usernames</h2>
        <p className="text-sm text-slate-500">
          These are name ideas, not confirmed-available names — click any one to check it
          against live Mojang data.
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

      {/* 2. What makes a good PvP username */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Good PvP Username?</h2>
        <p>
          PvP names get judged differently than a name you&apos;ll only ever see on your own
          screen — other players read it in kill feeds, chat, and party invites, often at
          speed. A few traits consistently make that easier:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Easy to remember</strong> — a name someone glances at once and can recall after the match.</li>
          <li><strong>Easy to type</strong> — useful if a teammate ever needs to tag or search for you in chat.</li>
          <li><strong>Short</strong> — shorter names read faster in fast-moving combat chat than long ones.</li>
          <li><strong>Distinctive</strong> — something that doesn&apos;t blend into a wall of similar-looking names.</li>
          <li><strong>Easy to pronounce</strong> — a name people can say out loud in voice chat without stumbling.</li>
          <li><strong>Matches your style</strong> — sweaty and competitive, dark and edgy, or clean and simple; consistency reads as intentional.</li>
          <li><strong>Avoids unnecessary numbers or characters</strong> — a long digit string or stacked symbols usually just adds noise, not personality.</li>
        </ul>
      </section>

      {/* 3. How to create your own */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create Your Own PvP Username</h2>
        <p>A simple process for building a name instead of picking straight off a list:</p>
        <p className="font-medium text-slate-900">Choose a concept → shorten it → combine words → test the result → check availability</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Pick a concept: something sharp or combat-flavored — a blade, a strike, a status effect.</li>
          <li>Shorten it: &ldquo;Ravenous&rdquo; → <span className="font-mono text-sm">Ravnos</span></li>
          <li>Combine two short words: blade + rift → <span className="font-mono text-sm">Bladrift</span></li>
          <li>Say it out loud — if it&apos;s hard to pronounce or type quickly, trim it further.</li>
          <li>Check the result before you get attached to it — names below are ideas, not guarantees.</li>
        </ul>
      </section>

      {/* 4. Short PvP bridge */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Short PvP Usernames</h2>
        <p>
          Short names come up constantly in PvP naming because there&apos;s a practical reason
          behind it: in fast-paced combat, other players often type your name in chat to call
          out kills, trades, or warnings, and a name that&apos;s quick to type gets referenced
          more accurately and more often than a long or hard-to-spell one.
        </p>
        <p>
          For names built around an exact length, see{" "}
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
          checkers — both are competitive lengths, so treat any result there as a starting
          point to verify, not a guarantee.
        </p>
      </section>

      {/* 5. Tryhard & competitive bridge */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Tryhard & Competitive Names</h2>
        <p>
          The Tryhard and Competitive groups above lean into the sweaty, all-in energy of
          competitive PvP and Bedwars/Skywars-style game modes — it&apos;s usually a bit
          everyone&apos;s in on rather than a genuine skill claim. If you want the full classic
          bracket-and-suffix convention (<span className="font-mono text-sm">xX_Name_Xx</span>,
          streamer-style suffixes), see{" "}
          <Link href="/minecraft-tryhard-usernames" className="font-medium text-emerald-600 underline">
            Tryhard Minecraft Usernames
          </Link>{" "}
          for the dedicated breakdown.
        </p>
      </section>

      {/* 6. Conversion */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Check Your PvP Username</h2>
        <p className="mt-3 text-slate-700">
          Found a PvP name you like?{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            Check Minecraft username availability
          </Link>{" "}
          against a live Mojang lookup before you get attached to it.
        </p>
      </section>

      {/* 7. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More PvP Username Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — generate fresh PvP-style combinations,
          pick one you like, then check it above.
        </p>
        <Link
          href="/minecraft-username-generator?theme=dark"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 8. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
          CATEGORY_LINK["/minecraft-short-usernames"],
          CATEGORY_LINK["/minecraft-4-letter-usernames"],
          CATEGORY_LINK["/minecraft-3-letter-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
          CATEGORY_LINK["/minecraft-aesthetic-usernames"],
          CATEGORY_LINK["/minecraft-unique-usernames"],
        ]}
      />

      {/* 9. Related tools */}
      <RelatedLinks
        title="Related Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[2], TOOL_LINKS[6], TOOL_LINKS[3]]}
      />

      <FaqSection
        faqs={[
          {
            question: "What are good Minecraft PvP usernames?",
            answer:
              "Short, easy-to-type names that read fast in combat chat tend to work best — browse the style groups above (short, cool, tryhard, competitive, funny, clean, dark, unique) and click any name to check it.",
          },
          {
            question: "What makes a good PvP username?",
            answer:
              "One that's memorable, easy to type and pronounce, short, distinctive, matches your playstyle, and doesn't rely on unnecessary numbers or symbols to stand out.",
          },
          {
            question: "What are tryhard Minecraft usernames?",
            answer:
              "Names that lean into competitive PvP culture — classic bracket formatting like xX_Name_Xx, streamer-style suffixes, or pure sweaty energy. See Tryhard Minecraft Usernames for the full breakdown.",
          },
          {
            question: "How do I create a PvP username?",
            answer:
              "Choose a concept, shorten it, combine it with another short word if needed, say it out loud to test how it reads, then check whether it's available.",
          },
          {
            question: "How do I check if a PvP username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Are short usernames good for Minecraft PvP?",
            answer:
              "Often, yes — shorter names are faster for other players to type when calling out kills, trades, or warnings in combat chat, though it's a practical advantage, not an official one.",
          },
          {
            question: "How long can a Minecraft username be?",
            answer: "Between 3 and 16 characters on Java Edition, using only letters, numbers, and underscores.",
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
