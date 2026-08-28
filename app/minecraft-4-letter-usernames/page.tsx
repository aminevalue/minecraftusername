import type { Metadata } from "next";
import Link from "next/link";
import UsernameCheckerForm from "@/components/UsernameCheckerForm";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "4-Letter Minecraft Usernames — Ideas & Availability Checker";
const PAGE_DESCRIPTION =
  "4-letter Minecraft username ideas across cool, unique, PvP, funny, aesthetic, OG, and simple styles, plus a live checker built for exactly 4-character names.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-4-letter-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-4-letter-usernames`,
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
  { emoji: "😎", label: "Cool 4-letter usernames", names: ["Ryke", "Zorn", "Vaxe", "Kryn", "Ashk", "Nyve", "Ozyn", "Fenk"] },
  { emoji: "🌀", label: "Unique 4-letter usernames", names: ["Qyve", "Zayo", "Vroy", "Ynso", "Aequ", "Ozve", "Ymra", "Kuvo"] },
  { emoji: "⚔️", label: "PvP 4-letter usernames", names: ["Riko", "Snyx", "Kazt", "Vryk", "Ozka", "Fryn", "Bexk", "Jynt"] },
  { emoji: "😂", label: "Funny 4-letter usernames", names: ["Snek", "Welp", "Yikz", "Derp", "Smol", "Nerf", "Doof", "Blep"] },
  { emoji: "✨", label: "Aesthetic 4-letter usernames", names: ["Muvi", "Sofi", "Luma", "Aire", "Wisp", "Fawn", "Mira", "Dewy"] },
  { emoji: "🕹️", label: "OG-style 4-letter usernames", names: ["Retr", "Bloc", "Vntg", "Oldy", "Crft", "Yore", "Aged", "Worn"] },
  { emoji: "🧼", label: "Simple 4-letter usernames", names: ["Kyle", "Finn", "Nora", "Jace", "Milo", "Todd", "Evan", "Ruth"] },
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

export default function FourLetterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "4-Letter Minecraft Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-4-letter-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "4-Letter Usernames", href: "/minecraft-4-letter-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">4-Letter Minecraft Usernames</h1>
      <p className="mt-3 text-slate-600">
        Four-letter names give you more room than 3-letter names while staying short, fast to type, and
        easy to remember. Check a specific name below, or browse ideas by style first.
      </p>

      <div className="mt-6">
        <UsernameCheckerForm exactLength={4} />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      {/* 1. Best 4-letter usernames */}
      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best 4-Letter Minecraft Usernames</h2>
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

      {/* 2. What is a 4-letter username */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Is a 4-Letter Minecraft Username?</h2>
        <p>
          On this page, &ldquo;4-letter&rdquo; means exactly <strong>4 characters</strong> — it doesn&apos;t
          mean 4 alphabetic letters only. Minecraft&apos;s actual username rule allows letters, numbers,
          and underscores in any combination, so a name like <span className="font-mono text-sm">Fox9</span>{" "}
          or <span className="font-mono text-sm">V_x2</span> is just as valid a &ldquo;4-letter&rdquo; name
          as <span className="font-mono text-sm">Wisp</span>. The style groups above stick to plain
          letters for readability, but the checker itself accepts any 4-character combination of
          letters, numbers, and underscores.
        </p>
      </section>

      {/* 3. How to create */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create a 4-Letter Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Shorten a longer word: Kristopher → <span className="font-mono text-sm">Kryz</span></li>
          <li>Combine two short syllables: fox + rain → <span className="font-mono text-sm">Foxr</span></li>
          <li>Use initials or a nickname: Jordan Ray → <span className="font-mono text-sm">Jray</span></li>
          <li>Trim vowels until you land on exactly 4 letters: Raven → <span className="font-mono text-sm">Rvne</span></li>
          <li>Build a pronounceable invented word: <span className="font-mono text-sm">Zeph</span></li>
          <li>Say it out loud — if it&apos;s awkward to pronounce, adjust one letter rather than starting over.</li>
        </ul>
      </section>

      {/* 4. 3 vs 4 letter bridge */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">3-Letter vs 4-Letter Minecraft Usernames</h2>
        <p>
          With 37 allowed characters per slot (A–Z, 0–9, underscore), 3-letter names have 37³ (50,653)
          possible combinations, while 4-letter names have 37⁴ — about 1.87 million — roughly 37 times
          more room. That extra room means genuinely word-like or pronounceable 4-letter names are still
          occasionally available, even though both lengths have been actively claimed for well over a
          decade.
        </p>
        <p>
          For the shortest possible names, see{" "}
          <Link href="/minecraft-3-letter-usernames" className="font-medium text-emerald-600 underline">
            3-Letter Minecraft Usernames
          </Link>
          , or browse the full range of short styles on{" "}
          <Link href="/minecraft-short-usernames" className="font-medium text-emerald-600 underline">
            Short Minecraft Usernames
          </Link>
          .
        </p>
      </section>

      {/* 5. Check conversion */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to Check a 4-Letter Username</h2>
        <p className="mt-3 text-slate-700">
          Type any 4-character name into the checker at the top of this page for a lookup built
          specifically for this length, or use the general{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            Check Minecraft username availability
          </Link>{" "}
          tool for names of any length.
        </p>
      </section>

      {/* 6. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More 4-Letter Username Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — open the generator, enable &ldquo;Short names
          only&rdquo; to bias results toward shorter combinations, then check anything you like above.
        </p>
        <Link
          href="/minecraft-username-generator"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 7. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-unique-usernames"],
          CATEGORY_LINK["/minecraft-pvp-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
          CATEGORY_LINK["/minecraft-aesthetic-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
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
            question: "What are good 4-letter Minecraft usernames?",
            answer:
              "Short, pronounceable names that read clearly in chat tend to work best — browse the style groups above (cool, unique, PvP, funny, aesthetic, OG, simple) and click any name to check it.",
          },
          {
            question: "How do I find a 4-letter Minecraft username?",
            answer:
              "Browse the style groups above, use the naming techniques in the how-to section, or generate fresh ideas with the Username Generator's 'Short names only' option, then check whatever you like.",
          },
          {
            question: "Can a Minecraft username be 4 characters long?",
            answer:
              "Yes — Java Edition usernames can be anywhere from 3 to 16 characters, so 4 characters is fully valid.",
          },
          {
            question: "Are 4-letter Minecraft usernames rare?",
            answer:
              "They're more competitive than longer names since there are only 37⁴ (about 1.87 million) possible combinations, but that's roughly 37 times more room than 3-letter names, so more genuinely usable options remain. Check a specific name to know for sure — this page doesn't track how many remain unclaimed.",
          },
          {
            question: "How do I check if a 4-letter username is available?",
            answer:
              "Type it into the checker at the top of this page, built specifically for 4-character names, or use the general Username Checker for any length.",
          },
          {
            question: "How do I create my own 4-letter Minecraft username?",
            answer:
              "Shorten a longer word, combine two short syllables, use initials, or build a pronounceable invented word — then check the result rather than assuming it's available.",
          },
          {
            question: "Are numbers allowed in Minecraft usernames?",
            answer:
              "Yes. Usernames can mix letters, numbers, and underscores in any combination — a name like V_x2 is just as valid at 4 characters as a name using only letters.",
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
