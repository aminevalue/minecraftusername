import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Tryhard Minecraft Usernames — Sweaty & Competitive Ideas";
const PAGE_DESCRIPTION =
  "Tryhard Minecraft username ideas and the xX_Name_Xx bracket convention explained — why it works within Minecraft's format rules, streamer suffixes, rank-flexing numbers, and how to build your own.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-tryhard-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-tryhard-usernames`,
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
  { emoji: "🅧", label: "Classic xX_Xx format", names: ["xX_ShadowKil_Xx", "xX_RankZero_Xx", "xX_ClutchGod_Xx", "xX_NoMercyy_Xx", "xX_FragLord_Xx", "xX_ZeroDeathz_Xx", "xX_TopTierr_Xx", "xX_SweatByte_Xx"] },
  { emoji: "📺", label: "Streamer-style suffixes", names: ["FragKingTTV", "ClutchGodYT", "SweatWaveTTV", "RankPusherYT", "NoScopeTTV", "TopFragYT", "GrindModeTTV", "ZeroDeathYT"] },
  { emoji: "🔢", label: "Numbers & rank flexing", names: ["Rank1Player", "TopOne99", "MaxStreak7", "Elo2400", "Wins500Plus", "KDR10x", "Season1Champ", "Grind999"] },
  { emoji: "🔠", label: "ALL CAPS intensity", names: ["SWEATLORD", "NOMERCYX", "FULLSEND7", "MAXPRESSURE", "FULLINTENT", "CLUTCHKING", "TRYHARDX", "GRINDSET"] },
  { emoji: "⚡", label: "Short & punchy", names: ["Zryn", "Volk7", "Vox_", "Isek", "Ithal", "Krix", "Ozz7", "Fenx"] },
  { emoji: "🏆", label: "Pure competitive energy", names: ["WinOrRespawn", "GrindNeverStop", "NoOffDays", "RankGrindr", "TopOfBoard", "OnlyWinsCount", "FullTryMode", "NeverTiltz"] },
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

export default function TryhardUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Tryhard Minecraft Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-tryhard-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Tryhard Minecraft Names", href: "/minecraft-tryhard-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Tryhard Minecraft Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          &ldquo;Tryhard&rdquo; naming has its own established conventions, largely inherited from
          competitive shooter and console gaming culture — bracket decorations, all-caps energy,
          and suffixes that signal competitive intent. It&apos;s meant to be a little over the top
          on purpose; that&apos;s the joke and the point at the same time, not a genuine claim of
          skill.
        </p>
        <p>
          Below: the actual conventions this style is built from, why they look the way they do
          within Minecraft&apos;s own character rules, and how to build one yourself.
        </p>
      </div>

      {/* 1. Best tryhard usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Tryhard Minecraft Usernames</h2>
        <p className="text-sm text-slate-500">
          These are name ideas, not confirmed-available names — click any one to check it against
          live Mojang data.
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

      {/* 2. What makes a name tryhard */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Username Feel &ldquo;Tryhard&rdquo;?</h2>
        <p>
          A handful of specific conventions signal this style, and most players recognize them
          instantly:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Bracket-style decoration</strong> — the classic <span className="font-mono text-sm">xX_Name_Xx</span> wrapper.</li>
          <li><strong>Streamer suffixes</strong> — <span className="font-mono text-sm">TTV</span>, <span className="font-mono text-sm">YT</span>, or <span className="font-mono text-sm">Live</span> tacked on the end, borrowed from Twitch/YouTube handles whether or not you actually stream.</li>
          <li><strong>Numbers that imply stats</strong> — a rank, a win count, or a K/D ratio worked into the name.</li>
          <li><strong>ALL CAPS or aggressive words</strong> — intensity words (Sweat, Grind, Clutch, Zero-Mercy) that lean hard into competitive energy.</li>
        </ul>
        <p>
          It&apos;s a costume, not a resume — these names are common on competitive PvP servers and
          Bedwars/Skywars-style game modes specifically because the exaggeration is part of the
          culture there, not a genuine claim of skill.
        </p>
      </section>

      {/* 3. The xX_Xx format explained */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">The Classic xX_Xx Format, Explained</h2>
        <p>
          Minecraft usernames only allow letters, numbers, and underscores — no square brackets,
          no spaces, no punctuation. That&apos;s exactly why <span className="font-mono text-sm">xX</span>{" "}
          and <span className="font-mono text-sm">Xx</span> exist: a lowercase <span className="font-mono text-sm">x</span>{" "}
          next to an uppercase <span className="font-mono text-sm">X</span> visually mimics a
          bracket shape using only letters the format actually allows, wrapped around an underscore
          for spacing. It&apos;s a workaround for a constraint, not a random decoration — the same
          bracket-and-tag look that&apos;s common on console gamertags, rebuilt out of characters
          Minecraft will accept.
        </p>
        <p>
          That wrapper has a real cost, though: <span className="font-mono text-sm">xX_</span> and{" "}
          <span className="font-mono text-sm">_Xx</span> alone use 6 of your 16 available
          characters, leaving 10 for the actual name. Pile on a streamer suffix too and there&apos;s
          very little room left — which is why the fuller-decorated examples above tend to use
          short core words.
        </p>
      </section>

      {/* 4. Prefixes, suffixes, numbers, capitalization */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Prefixes, Suffixes, Numbers & Capitalization</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Streamer suffixes</strong> (<span className="font-mono text-sm">TTV</span>, <span className="font-mono text-sm">YT</span>) borrow Twitch/YouTube handle conventions — used as a style whether or not you actually stream.</li>
          <li><strong>Numbers</strong> work best when they read as a stat (a rank, a streak, a year) rather than a random string tacked on to get past a taken name.</li>
          <li><strong>Capitalization</strong> is purely a display choice — Minecraft usernames aren&apos;t case-sensitive for uniqueness (&ldquo;Steve&rdquo; and &ldquo;steve&rdquo; are the same registered name), but whatever case you register with is what displays, so ALL CAPS is a real stylistic option, not a functional one.</li>
          <li><strong>Symbols</strong> are limited to the underscore — no real brackets, dashes, or punctuation exist in the format, which is exactly why letter-based workarounds like <span className="font-mono text-sm">xX_Xx</span> developed in the first place.</li>
        </ul>
      </section>

      {/* 5. PvP and competitive styles */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">PvP & Competitive Naming Styles</h2>
        <p>
          Tryhard naming and PvP naming overlap but aren&apos;t the same thing: tryhard leans
          specifically on the bracket-and-suffix costume above, while PvP naming is broader and
          more practical — short, easy-to-type names that read fast in combat chat, decorated or
          not. If what you actually want is a quick, sharp combat name rather than the sweaty bit,
          see{" "}
          <Link href="/minecraft-pvp-usernames" className="font-medium text-emerald-600 underline">
            PvP Minecraft Usernames
          </Link>
          .
        </p>
      </section>

      {/* 6. How to create your own */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create Your Own Tryhard Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Pick one short core word: an intensity word or a combat term.</li>
          <li>Decide on exactly one decoration — the bracket wrapper, a suffix, or a stat number, not all three at once.</li>
          <li>Build it: &ldquo;Ranked&rdquo; → <span className="font-mono text-sm">xX_Ranked_Xx</span>, or <span className="font-mono text-sm">RankedTTV</span></li>
          <li>Count the characters — remember the wrapper alone costs 6, so keep the core word short.</li>
          <li>Check the result before you commit to it — every name above is an idea, not a guarantee.</li>
        </ul>
      </section>

      {/* 7. Common mistakes */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Common Mistakes</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Stacking every convention at once.</strong> Brackets, a suffix, and a stat number together usually blow past 16 characters before the actual name fits.</li>
          <li><strong>Forgetting the format doesn&apos;t support real brackets.</strong> A name written with actual <code className="font-mono text-sm">[ ]</code> characters isn&apos;t valid — <span className="font-mono text-sm">xX_Xx</span> is the letter-based substitute, not shorthand for literal brackets.</li>
          <li><strong>Using a random number instead of one that reads as a stat.</strong> A number that looks like a rank or streak fits the style; a number that looks like it was added just to get past a taken name doesn&apos;t.</li>
          <li><strong>Assuming the name has to be true.</strong> The style is a bit players are in on together — nobody expects <span className="font-mono text-sm">xX_ClutchGod_Xx</span> to be a literal claim.</li>
        </ul>
      </section>

      {/* 8. Length and rules */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Username Length &amp; Formatting Rules</h2>
        <p>
          Java Edition usernames are 3 to 16 characters, using only letters, numbers, and
          underscores. If the tryhard decoration doesn&apos;t leave enough room for the name you
          actually want, dropping the wrapper for something shorter and sharper is a reasonable
          trade — see{" "}
          <Link href="/minecraft-cool-usernames" className="text-emerald-600 underline">
            Cool
          </Link>
          ,{" "}
          <Link href="/minecraft-funny-usernames" className="text-emerald-600 underline">
            Funny
          </Link>
          , or{" "}
          <Link href="/minecraft-og-usernames" className="text-emerald-600 underline">
            OG Usernames
          </Link>{" "}
          for undecorated styles, or the dedicated{" "}
          <Link href="/minecraft-3-letter-usernames" className="text-emerald-600 underline">
            3-Letter
          </Link>{" "}
          and{" "}
          <Link href="/minecraft-4-letter-usernames" className="text-emerald-600 underline">
            4-Letter
          </Link>{" "}
          checkers if you want the shortest names the format allows.
        </p>
      </section>

      {/* 9. Check availability */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to Check Availability</h2>
        <p className="mt-3 text-slate-700">
          Nothing on this page is pre-verified — click any name above, or{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          directly against a live Mojang lookup. A result is a snapshot at the moment you check,
          not a reservation.
        </p>
      </section>

      {/* 10. Username history */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Username History</h2>
        <p>
          If a decorated name you like is taken, the checker only shows its <strong>current</strong>{" "}
          status, not whether it was recently freed by a rename — Mojang discontinued public
          access to username history in 2022 with no official replacement. Our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>{" "}
          explains exactly what&apos;s still available today.
        </p>
      </section>

      {/* 11. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More Tryhard Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — generate fresh combinations, pick one, then
          check it above.
        </p>
        <Link
          href="/minecraft-username-generator?theme=tech"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 12. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-pvp-usernames"],
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
        ]}
      />

      {/* 13. Related tools */}
      <RelatedLinks
        title="Related Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[2], TOOL_LINKS[6], TOOL_LINKS[3]]}
      />

      <FaqSection
        faqs={[
          {
            question: "What makes a Minecraft username tryhard?",
            answer:
              "A handful of specific conventions: bracket-style wrappers like xX_Name_Xx, streamer suffixes (TTV, YT), numbers that read as stats, and all-caps or intensity words — usually worn as a bit, not a literal skill claim.",
          },
          {
            question: "What does the xX_Name_Xx format mean?",
            answer:
              "Minecraft usernames can't use real brackets or symbols beyond an underscore, so a lowercase x next to an uppercase X visually mimics a bracket shape using only letters the format actually allows.",
          },
          {
            question: "Why do tryhard usernames use TTV or YT at the end?",
            answer:
              "They borrow the look of a Twitch or YouTube handle as a style choice, whether or not the player actually streams — it signals the same competitive-culture energy as the bracket format.",
          },
          {
            question: "Do brackets count toward the 16-character limit?",
            answer:
              "Yes — every character counts, including xX and _Xx. That wrapper alone uses 6 of your 16 characters, which is why decorated names tend to use short core words.",
          },
          {
            question: "Will a tryhard name make people think I'm actually good at PvP?",
            answer:
              "Maybe a little, in a joking way — but most players recognize the style as a bit rather than a serious skill claim, especially on servers where it's common.",
          },
          {
            question: "How do I create my own tryhard username?",
            answer:
              "Pick one short core word, choose a single decoration (the bracket wrapper, a suffix, or a stat number — not all three), and check the character count before committing to it.",
          },
          {
            question: "How do I check if a tryhard username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Can I change my Minecraft username later?",
            answer:
              "Yes, on Java Edition, once every 30 days for free through your account profile at minecraft.net. Bedrock Edition uses your Xbox gamertag instead, changed via Xbox account settings.",
          },
        ]}
      />
    </div>
  );
}
