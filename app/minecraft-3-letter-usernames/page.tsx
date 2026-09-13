import type { Metadata } from "next";
import Link from "next/link";
import UsernameCheckerForm from "@/components/UsernameCheckerForm";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "3-Letter Minecraft Usernames — Checker & Real Odds";
const PAGE_DESCRIPTION =
  "Check 3-letter Minecraft usernames against live Mojang data, understand exactly how scarce the 50,653 possible combinations really are, and see the naming patterns that still turn up something worth checking.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-3-letter-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-3-letter-usernames`,
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
  blurb: string;
  names: string[];
}

const GROUPS: NameGroup[] = [
  {
    emoji: "🔤",
    label: "Vowel-anchored",
    blurb: "One vowel in the middle or end keeps a 3-letter name pronounceable instead of a consonant cluster.",
    names: ["Wyn", "Ryo", "Zed", "Kai", "Fyn", "Obi", "Ash", "Jor"],
  },
  {
    emoji: "🔁",
    label: "Repeated-pattern",
    blurb: "Alternating vowel-consonant-vowel or a doubled sound reads as a name even with no real-word meaning.",
    names: ["Aza", "Ozo", "Ivi", "Ebe", "Odo", "Aja", "Eze", "Uku"],
  },
  {
    emoji: "🪪",
    label: "Initials-style",
    blurb: "Three consonants read like someone's actual initials — plain, and rarely tried on purpose.",
    names: ["Tjr", "Mck", "Dxr", "Jln", "Ryk", "Bnz", "Kvn", "Zlr"],
  },
  {
    emoji: "🔢",
    label: "Number-paired",
    blurb: "Two letters plus one digit is still a valid 3-character name — a different slice of the same 50,653.",
    names: ["Vx7", "K9z", "Zo3", "Rx2", "N7k", "B3x", "Q5r", "Yx9"],
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

export default function ThreeLetterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "3-Letter Minecraft Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-3-letter-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "3-Letter Usernames", href: "/minecraft-3-letter-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">3-Letter Minecraft Usernames</h1>
      <p className="mt-3 text-slate-600">
        Three letters is the shortest a Java Edition username can be — and the most exhausted length
        in the game. Check a specific combination below, or read on for what&apos;s actually left to
        find.
      </p>

      <div className="mt-6">
        <UsernameCheckerForm exactLength={3} />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      {/* 1. Why so scarce */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Why 3-Letter Names Are So Scarce</h2>
        <p>
          Minecraft usernames draw from 37 characters per slot — 26 letters, 10 digits, and an
          underscore. At exactly 3 characters, that&apos;s 37³, or <strong>50,653</strong> total
          combinations, full stop. That entire pool has existed since Minecraft&apos;s launch in
          2009, and it&apos;s been claimed against continuously ever since. There is no version of
          this length getting less competitive over time — the number of possible names is fixed,
          and it&apos;s small.
        </p>
        <p>
          In practice, that means genuinely clean, word-like, pronounceable 3-letter names are
          essentially gone. What still turns up as &ldquo;available&rdquo; is almost always one of:
          an unusual consonant cluster nobody wanted, a combination sitting in the short hold period
          right after a rename, or something that only reads as a name if you already know the
          pattern behind it — which is exactly what the groups below are built around.
        </p>
      </section>

      {/* 2. Naming patterns */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">3-Letter Naming Patterns</h2>
        <p className="text-sm text-slate-500">
          These are name ideas, not confirmed-available names — click any one to check it against
          live Mojang data.
        </p>
        {GROUPS.map((group) => (
          <div key={group.label}>
            <h3 className="text-lg font-semibold text-slate-900">
              {group.emoji} {group.label}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{group.blurb}</p>
            <NameChips names={group.names} />
          </div>
        ))}
      </section>

      {/* 3. How to build your own */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Build Your Own 3-Letter Name</h2>
        <p>
          With only three slots, there&apos;s no room for a &ldquo;concept&rdquo; the way longer
          names have — the whole approach is compression:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Trim a longer word to its first syllable: &ldquo;Kaiden&rdquo; → <span className="font-mono text-sm">Kai</span></li>
          <li>Use your own initials, or someone else&apos;s, as a plain 3-letter tag.</li>
          <li>Swap one letter in a taken combination rather than abandoning the idea entirely.</li>
          <li>Pair two letters with a single digit if a pure-letter version is gone — it&apos;s still a full 3-character name, not a compromise.</li>
          <li>Check it before you get attached to it — every name above is an idea, not a guarantee.</li>
        </ul>
      </section>

      {/* 4. Common mistakes */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Common Mistakes</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Expecting real words to be open.</strong> Almost every legitimate 3-letter English word or common abbreviation was claimed years ago.</li>
          <li><strong>Assuming an odd-looking result means it&apos;s special.</strong> An unusual combination is available because nobody wanted it, not because it&apos;s rare in a valuable sense.</li>
          <li><strong>Giving up after one taken result.</strong> At this length, checking three or four close variations is normal, not a sign you&apos;re doing it wrong.</li>
          <li><strong>Ignoring the number-paired option.</strong> Ruling out digits cuts out a real slice of the 50,653 combinations for no real reason.</li>
        </ul>
      </section>

      {/* 5. vs 4-letter / short */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">3-Letter vs 4-Letter vs Short Usernames</h2>
        <p>
          One extra character changes the math more than it looks like it should: 4-letter names
          have 37⁴ — about 1.87 million — possible combinations, roughly 37 times the room a
          3-letter name has. That&apos;s enough space that genuinely usable 4-letter words still
          exist; at 3 letters, that margin mostly doesn&apos;t. If a specific 3-letter idea keeps
          coming back taken, moving to{" "}
          <Link href="/minecraft-4-letter-usernames" className="font-medium text-emerald-600 underline">
            4-Letter Usernames
          </Link>{" "}
          is a real change in odds, not just a fallback. For the fuller range of short styles beyond
          exact lengths, see{" "}
          <Link href="/minecraft-short-usernames" className="font-medium text-emerald-600 underline">
            Short Minecraft Usernames
          </Link>
          .
        </p>
      </section>

      {/* 6. Check availability */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Checking Availability</h2>
        <p className="mt-3 text-slate-700">
          Use the checker at the top of this page for a lookup built specifically for 3-character
          names, or the general{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            Username Checker
          </Link>{" "}
          for any length. A result is a live snapshot at the moment you check, not a reservation.
        </p>
      </section>

      {/* 7. Username history */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Username History</h2>
        <p>
          A taken 3-letter name can&apos;t be traced back to when it was first claimed or who has
          held it — Mojang discontinued public access to username history in 2022 with no official
          replacement. Our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>{" "}
          explains exactly what&apos;s still available today.
        </p>
      </section>

      {/* 8. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More Short Ideas</h2>
        <p className="mt-2 text-slate-600">
          The generator doesn&apos;t produce exact-length results, but enabling{" "}
          <strong>&ldquo;Short names only&rdquo;</strong> biases combinations toward shorter output
          you can then trim down to 3 characters yourself.
        </p>
        <Link
          href="/minecraft-username-generator"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 9. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-4-letter-usernames"],
          CATEGORY_LINK["/minecraft-short-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
          CATEGORY_LINK["/minecraft-cool-usernames"],
        ]}
      />

      {/* 10. Related tools */}
      <RelatedLinks
        title="Related Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[5], TOOL_LINKS[1], TOOL_LINKS[3]]}
      />

      <FaqSection
        faqs={[
          {
            question: "Are any good 3-letter names still available?",
            answer:
              "Occasionally, when an account is renamed or a name is released. Genuinely clean, word-like combinations are essentially all claimed at this point — availability changes constantly, so the only reliable way to know is to check a specific name directly.",
          },
          {
            question: "How many 3-letter Minecraft usernames exist in total?",
            answer:
              "Exactly 50,653 — 37 characters (26 letters, 10 digits, underscore) cubed. That number is fixed and has been claimed against since 2009.",
          },
          {
            question: "Do 3-letter names give any gameplay advantage?",
            answer:
              "No. A username's length has no effect on gameplay, stats, or permissions — the appeal is purely aesthetic and social.",
          },
          {
            question: "Are 3-letter names with numbers less desirable?",
            answer:
              "Not inherently — a number-paired 3-character name (like two letters plus a digit) is just as valid a 3-letter username as an all-letter one, and it opens up combinations that are less likely to already be taken.",
          },
          {
            question: "Should I try 4-letter names instead?",
            answer:
              "If a specific 3-letter idea keeps coming back taken, yes — 4-letter names have roughly 37 times more possible combinations, a real difference in odds, not just a longer name.",
          },
          {
            question: "How do I check if a 3-letter username is available?",
            answer:
              "Use the checker at the top of this page, built specifically for 3-character names, or the general Username Checker for any length — both run a live lookup against Mojang's account data.",
          },
          {
            question: "Can I see who owned a 3-letter name before it was taken?",
            answer:
              "Not through any official source. Mojang discontinued public access to username history in 2022 — see the Username History Checker for exactly what's still available.",
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
