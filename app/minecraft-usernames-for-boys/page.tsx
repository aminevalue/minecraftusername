import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Minecraft Usernames for Boys — Cool, Funny & PvP Ideas";
const PAGE_DESCRIPTION =
  "Minecraft username ideas across cool, funny, gaming, PvP/tryhard, short, dark, and unique styles commonly searched for boys, plus how to pick one that matches your own playstyle.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-usernames-for-boys` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-usernames-for-boys`,
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
  { emoji: "😎", label: "Cool", names: ["Kaidren", "Vosric", "Zephlan", "Bryxton", "Corvid_J", "Ashkane", "Draymor", "Nolvex"] },
  { emoji: "😂", label: "Funny", names: ["NoobishNate", "Sir_Snacksalot", "AccidentalTNT", "Lag_Lord99", "Chunky_Steve", "Yeeted_Off", "Grief_Magnet", "CritFailKid"] },
  { emoji: "🎮", label: "Gaming & competitive", names: ["RankPusher", "QueueDodger", "ClutchFactorX", "TopFragTyler", "MetaChaser", "SeasonGrinder7", "ComboBreaker_", "StatCheckSam"] },
  { emoji: "⚔️", label: "PvP & tryhard-style", names: ["SweatlordJax", "FullSendFinn", "NoScopeNoah", "ClutchOrDie7", "GodmodeGriff", "1v9Ready", "MaxPressure_", "ZeroMercyMax"] },
  { emoji: "⚡", label: "Short & simple", names: ["Beck", "Toren", "Jace_R", "Reyes", "Kade7", "Milo_B", "Vance", "Wynn"] },
  { emoji: "🖤", label: "Dark & mysterious", names: ["Nightfen", "Grimhollow_J", "Nightspire", "Ashvane_K", "Wraithcolt", "Voidmarsh", "Hollowfang", "Emberfen"] },
  { emoji: "🌀", label: "Creative & unique", names: ["Zynthex", "Korrivan", "Vexbrook", "Thallowick", "Ombrine", "Fenwrix", "Yulendor", "Isvane"] },
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

export default function BoysUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft Usernames for Boys",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-usernames-for-boys`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Minecraft Names for Boys", href: "/minecraft-usernames-for-boys" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Usernames for Boys</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          This page reflects the naming styles most commonly searched under this term — action
          words, competitive gaming references, and confident or moody tones tend to dominate.
          None of these are exclusive to any gender or age; pick whatever actually fits how you
          want to show up in the game.
        </p>
        <p>
          Below: ideas grouped by style, how to pick one that actually matches your playstyle
          rather than just the first name that sounds good, and a process for building your own.
        </p>
      </div>

      {/* 1. Best usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Minecraft Usernames for Boys</h2>
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

      {/* 2. What makes a good username */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Good Minecraft Username?</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Memorability</strong> — something people actually remember after seeing it once.</li>
          <li><strong>Simplicity</strong> — one clear idea rather than several themes crammed together.</li>
          <li><strong>Easy to type</strong> — useful if friends or teammates ever need to tag or search for you.</li>
          <li><strong>Matches how you actually play</strong> — a name that fits your style reads as more intentional than one copied from a trend.</li>
        </ul>
      </section>

      {/* 3. Choosing by playstyle */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Choosing a Username That Fits Your Playstyle</h2>
        <p>
          The fastest way to narrow this down is to start from how you actually play, not just
          which word sounds good:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Competitive or combat-focused? See <Link href="/minecraft-pvp-usernames" className="text-emerald-600 underline">PvP Usernames</Link> or, for the full sweaty-energy convention, <Link href="/minecraft-tryhard-usernames" className="text-emerald-600 underline">Tryhard Usernames</Link>.</li>
          <li>Building or survival-focused? A sharp, understated name usually fits better — see <Link href="/minecraft-cool-usernames" className="text-emerald-600 underline">Cool Usernames</Link>.</li>
          <li>Here for the jokes? Browse <Link href="/minecraft-funny-usernames" className="text-emerald-600 underline">Funny Usernames</Link>.</li>
          <li>Want something moody or atmospheric instead of loud? See <Link href="/minecraft-aesthetic-usernames" className="text-emerald-600 underline">Aesthetic Usernames</Link>.</li>
          <li>Mainly want to avoid the most common naming patterns? See <Link href="/minecraft-unique-usernames" className="text-emerald-600 underline">Unique Usernames</Link>.</li>
        </ul>
      </section>

      {/* 4. Length and rules */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Username Length and Format Rules</h2>
        <p>
          Java Edition usernames are 3 to 16 characters, using only letters, numbers, and
          underscores — no spaces or other symbols. Shorter names read faster in chat and are
          easier for teammates to type during a match, but they&apos;re also more competitive to
          claim: with only 37 possible characters per slot, a 3-letter name has just 37³ (50,653)
          combinations and a 4-letter name has 37⁴ (about 1.87 million), both claimed against for
          years. For a name built specifically around length, see{" "}
          <Link href="/minecraft-short-usernames" className="font-medium text-emerald-600 underline">
            Short Usernames
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

      {/* 5. How to create */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create Your Own Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Pick a concept tied to how you play: a combat word, a build style, a joke only you get.</li>
          <li>Shorten or simplify it: &ldquo;Ravager&rdquo; → <span className="font-mono text-sm">Ravgr</span></li>
          <li>Combine two short ideas if one feels thin: night + strike → <span className="font-mono text-sm">Nightstrike</span></li>
          <li>Say it out loud — if it&apos;s awkward to say or type quickly, simplify further.</li>
          <li>Check the result before you get attached to it — every name above is an idea, not a guarantee.</li>
        </ul>
      </section>

      {/* 6. Common mistakes */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Common Username Mistakes</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Copying a streamer&apos;s name with a number added.</strong> It reads as derivative, and it&apos;s exactly the pattern most likely to already be taken.</li>
          <li><strong>Stacking too many themes at once.</strong> A name that tries to be tryhard, funny, and dark all at once usually reads as none of them clearly.</li>
          <li><strong>Overloading numbers or underscores.</strong> A few extra characters to get past a taken name is normal; a long digit string mostly just adds noise.</li>
          <li><strong>Assuming a name is available because it feels personal.</strong> Only a live check actually confirms that.</li>
        </ul>
      </section>

      {/* 7. Check availability */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to Check Username Availability</h2>
        <p className="mt-3 text-slate-700">
          Nothing on this page is pre-verified — click any name above, or{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          directly against a live Mojang lookup. A result is a snapshot at the moment you check,
          not a reservation.
        </p>
      </section>

      {/* 8. Username history */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Username History</h2>
        <p>
          If a name you like is taken, the checker only shows its <strong>current</strong> status,
          not whether it was recently freed by a rename — Mojang discontinued public access to
          username history in 2022 with no official replacement. Our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>{" "}
          explains exactly what&apos;s still available today.
        </p>
      </section>

      {/* 9. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More Username Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — generate fresh combinations, pick one that
          fits, then check it above.
        </p>
        <Link
          href="/minecraft-username-generator?theme=fantasy"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 10. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
          CATEGORY_LINK["/minecraft-pvp-usernames"],
          CATEGORY_LINK["/minecraft-tryhard-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
          CATEGORY_LINK["/minecraft-unique-usernames"],
        ]}
      />

      {/* 11. Related tools */}
      <RelatedLinks
        title="Related Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[2], TOOL_LINKS[6], TOOL_LINKS[3]]}
      />

      <FaqSection
        faqs={[
          {
            question: "What makes a good Minecraft username for boys?",
            answer:
              "The same things that make any username good — memorable, easy to type, and consistent with one clear idea — matched to your own playstyle rather than copied from a trend.",
          },
          {
            question: "Are these usernames only for boys?",
            answer:
              "No — the grouping reflects common search intent, not a restriction. Anyone can use any name on this list.",
          },
          {
            question: "How do I pick a username that matches my playstyle?",
            answer:
              "Start from how you actually play: PvP or Tryhard styles for competitive players, Cool for a sharp understated feel, Funny for jokes, Aesthetic for something moody, or Unique if you mainly want to avoid common patterns.",
          },
          {
            question: "What are good PvP or tryhard usernames?",
            answer:
              "Short, easy-to-type names for competitive play, or names that lean into the classic sweaty convention — see the PvP & Tryhard-Style group above, or the dedicated PvP Usernames and Tryhard Usernames pages.",
          },
          {
            question: "How do I check if a username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Can I see who used a name before me?",
            answer:
              "Not through any official source. Mojang discontinued public access to username history in 2022 — see the Username History Checker for exactly what's still available.",
          },
          {
            question: "How long can a Minecraft username be?",
            answer: "Between 3 and 16 characters on Java Edition, using only letters, numbers, and underscores.",
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
