import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Short Minecraft Usernames — 3, 4-Letter & More Ideas";
const PAGE_DESCRIPTION =
  "Short Minecraft username ideas across cool, funny, aesthetic, gaming, PvP, and unique styles, plus dedicated 3-letter and 4-letter tools and a formula for building your own.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-short-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-short-usernames`,
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
    emoji: "😎",
    label: "Cool short usernames",
    names: ["Vantyx", "Ashlok", "Kryos", "Duskryn", "Ravyn", "Onxis", "Ashryx", "Emberyx"],
  },
  {
    emoji: "😂",
    label: "Funny short usernames",
    names: ["Yeetus", "Bonkr", "Noobzy", "Derpzz", "Sussyy", "Oofster", "Cringed", "Yikesy"],
  },
  {
    emoji: "✨",
    label: "Aesthetic short usernames",
    names: ["Luvae", "Mothly", "Petla", "Softi", "Muvae", "Hazely", "Dewlit", "Glowy"],
  },
  {
    emoji: "🎮",
    label: "Gaming short usernames",
    names: ["Zephr", "Vyprx", "Kruxx", "Nyxo", "Glitchy", "Pwnzr", "Rezzed", "Fragz"],
  },
  {
    emoji: "⚔️",
    label: "PvP short usernames",
    names: ["Slyce", "Kritz", "Duelyx", "Zerkr", "Ryft", "Blytz", "Clashr", "Fintz"],
  },
  {
    emoji: "🌀",
    label: "Unique short usernames",
    names: ["Qyxen", "Vylo", "Zynkk", "Fablo", "Emryx", "Ostwyn", "Thryn", "Wisqo"],
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

export default function ShortUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft Short Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-short-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Short Minecraft Names", href: "/minecraft-short-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Short Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          Short usernames trade personality for speed — they&apos;re quick to type in chat, easy for
          friends to remember, and they read as established even if the account is brand new.
        </p>
        <p>
          If you want a name constrained to an exact length, our dedicated{" "}
          <Link href="/minecraft-3-letter-usernames" className="text-emerald-600 underline">
            3-letter
          </Link>{" "}
          and{" "}
          <Link href="/minecraft-4-letter-usernames" className="text-emerald-600 underline">
            4-letter
          </Link>{" "}
          checkers are a faster way to test specific combinations than scanning a list.
        </p>
      </div>

      {/* 1. Best short usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Short Minecraft Usernames</h2>
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

      {/* 2. What counts as short */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Counts as a Short Minecraft Username?</h2>
        <p>
          Java Edition usernames must be between 3 and 16 characters, so &ldquo;short&rdquo; usually
          means anywhere from 3 to about 6–7 characters — there&apos;s no official cutoff, just a
          practical one based on how fast a name reads in chat. The shorter the name, the fewer
          possible combinations exist (only 37 characters — letters, numbers, and underscore — are
          allowed per slot), which is why 3- and 4-letter names specifically are competitive enough to
          deserve their own dedicated tools:{" "}
          <Link href="/minecraft-3-letter-usernames" className="text-emerald-600 underline">
            3-Letter Usernames
          </Link>{" "}
          and{" "}
          <Link href="/minecraft-4-letter-usernames" className="text-emerald-600 underline">
            4-Letter Usernames
          </Link>
          .
        </p>
      </section>

      {/* 3. 3-letter bridge */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">3-Letter Minecraft Usernames</h2>
        <p>
          Three letters is the shortest a Java Edition username can be, and with only 37³ (50,653)
          possible combinations that have existed since 2009, genuinely word-like 3-letter names are
          largely claimed — checking is still worth it, but don&apos;t expect common syllables to be
          open. See{" "}
          <Link href="/minecraft-3-letter-usernames" className="font-medium text-emerald-600 underline">
            3-Letter Minecraft Usernames
          </Link>{" "}
          for the dedicated checker and a fuller breakdown.
        </p>
      </section>

      {/* 4. 4-letter bridge */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">4-Letter Minecraft Usernames</h2>
        <p>
          One extra letter opens up roughly 37 times more combinations (37⁴, about 1.87 million), so
          genuinely usable 4-letter names are still occasionally available. Try initials, short
          nicknames, or a word with one letter swapped if your first pick is taken. See{" "}
          <Link href="/minecraft-4-letter-usernames" className="font-medium text-emerald-600 underline">
            4-Letter Minecraft Usernames
          </Link>{" "}
          for the dedicated checker.
        </p>
      </section>

      {/* 5. How to create */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create a Short Minecraft Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Combine two short concepts: fox + glow → <span className="font-mono text-sm">Foxglo</span></li>
          <li>Remove unnecessary characters: Kristoph → <span className="font-mono text-sm">Kryst</span></li>
          <li>Use a memorable abbreviation: Night Owl → <span className="font-mono text-sm">Nowl</span></li>
          <li>Try an unusual word combination: mist + fox → <span className="font-mono text-sm">Mistfx</span></li>
          <li>Create a fictional word that&apos;s easy to say: <span className="font-mono text-sm">Zephr</span></li>
          <li>Keep pronunciation simple — if you&apos;d stumble saying it out loud, shorten it further.</li>
        </ul>
      </section>

      {/* 6. Conversion */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Check a Short Username</h2>
        <p className="mt-3 text-slate-700">
          Found a name you like? Short names get claimed fast, so check it before you get attached to
          it —{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          against a live Mojang lookup.
        </p>
      </section>

      {/* 7. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Short Username Generator</h2>
        <p className="mt-2 text-slate-600">
          Need more options? <strong>Generate → Choose → Check</strong> — generate fresh short
          combinations, pick one you like, then check it above.
        </p>
        <Link
          href="/minecraft-username-generator?theme=nature"
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
          CATEGORY_LINK["/minecraft-aesthetic-usernames"],
          CATEGORY_LINK["/minecraft-unique-usernames"],
          CATEGORY_LINK["/minecraft-pvp-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
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
            question: "What is a short Minecraft username?",
            answer:
              "There's no official cutoff, but names in the 3–6 character range are generally considered short — fast to type and easy to remember.",
          },
          {
            question: "How short can a Minecraft username be?",
            answer: "3 characters is the minimum on Java Edition; 16 is the maximum.",
          },
          {
            question: "Are 3-letter Minecraft usernames possible?",
            answer:
              "Yes, they're allowed by the format rules, but with only 50,653 possible 3-character combinations that have existed since 2009, most word-like ones are already claimed. Check a specific name to know for sure.",
          },
          {
            question: "Are 4-letter Minecraft usernames available?",
            answer:
              "Some are — 4-letter names have about 37 times more possible combinations than 3-letter ones, so more genuinely usable options remain, though it's still a competitive length.",
          },
          {
            question: "How do I find a short Minecraft username?",
            answer:
              "Browse the style groups above, try the naming formula in the how-to section, or use the Username Generator with short results in mind.",
          },
          {
            question: "How do I check if a short username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Can Minecraft usernames contain spaces?",
            answer: "No. Only letters, numbers, and underscores are allowed.",
          },
          {
            question: "Can I change my Minecraft username?",
            answer: "Yes, once every 30 days for free, through your Minecraft/Mojang account profile.",
          },
        ]}
      />
    </div>
  );
}
