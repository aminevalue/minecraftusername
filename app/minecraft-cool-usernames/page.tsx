import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Cool Minecraft Usernames — Short, Unique & PvP-Style Ideas";
const PAGE_DESCRIPTION =
  "Cool Minecraft username ideas across short, clean, unique, PvP, aesthetic, dark, funny, and classic styles, plus what actually makes a name read as 'cool' and how to build your own.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-cool-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-cool-usernames`,
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
  { emoji: "⚡", label: "Short & cool usernames", names: ["Zynt", "Vosk", "Kaeru", "Ryxo", "Fenzo", "Ashu", "Wrent", "Novik"] },
  { emoji: "🧼", label: "Clean cool usernames", names: ["Sorren", "Baylock", "Camdren", "Ashford", "Rylund", "Denvor", "Corwyn", "Halvern"] },
  { emoji: "🌀", label: "Unique cool usernames", names: ["Quorvex", "Zelthar", "Ivrenna", "Skothra", "Umbrase", "Yveline", "Threnak", "Ozerine"] },
  { emoji: "⚔️", label: "Cool PvP usernames", names: ["Blitzik", "Ravinox", "Ferrocut", "Talonrend", "Grimspar", "Nixblade", "Vantcut", "Sorrowedge"] },
  { emoji: "✨", label: "Aesthetic cool usernames", names: ["Moonrelic", "Duskglaze", "Palevein", "Softamber", "Hazeglint", "Lunarmist", "Velvetdrift", "Ashwisp"] },
  { emoji: "🖤", label: "Dark & edgy cool usernames", names: ["Nightshard", "Voidrend", "Ashencrow", "Duskveil", "Blackspire", "Wraithmoor", "Grimtide", "Sablecrest"] },
  { emoji: "😂", label: "Funny-but-cool usernames", names: ["ChillGremlin", "SmugPotato", "RogueWaffle", "SarcasmKnight", "DryHumorFox", "BlandVillain", "CoolBeans_", "SneakySnackz"] },
  { emoji: "🕹️", label: "Classic Minecraft-style usernames", names: ["OldTimberOak", "StoneAgeScout", "VanillaVeteran", "BlockyPioneer", "PickaxeSage", "CraftedLegend", "EarlyServerVet", "ClassicBuilder"] },
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

export default function CoolUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Cool Minecraft Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-cool-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Cool Minecraft Names", href: "/minecraft-cool-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Cool Minecraft Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          &ldquo;Cool&rdquo; is the broadest style on this site, and also the most subjective — what
          reads as cool to one player is forgettable to another. In practice, most names people call
          cool share a few traits: they sound sharp said out loud, they&apos;re short enough to read
          at a glance, or they hint at a personality without overdoing it.
        </p>
        <p>
          The groups below split &ldquo;cool&rdquo; into styles you can actually pick a lane from,
          followed by what makes a name read as cool, how to build your own, and how it overlaps
          with the site&apos;s other styles.
        </p>
      </div>

      {/* 1. Best cool usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Cool Minecraft Usernames</h2>
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

      {/* 2. What makes a good cool username */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Good Cool Minecraft Username?</h2>
        <p>
          There&apos;s no test that objectively proves a name is cool — it&apos;s a matter of taste.
          That said, a few traits consistently show up in names players describe that way:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Memorability</strong> — something people actually remember after seeing it once.</li>
          <li><strong>Simplicity</strong> — one clear idea, not several themes stacked together.</li>
          <li><strong>Pronunciation</strong> — easy to say out loud, not a string you have to sound out.</li>
          <li><strong>Length</strong> — shorter names tend to read faster and sharper, though not always.</li>
          <li><strong>Distinctiveness</strong> — doesn&apos;t blend into a wall of similar-looking names.</li>
          <li><strong>Readability</strong> — clean spelling over stacked symbols or hard-to-parse casing.</li>
          <li><strong>Matching your own style</strong> — consistency with how you actually want to come across reads better than chasing a trend.</li>
        </ul>
        <p>
          None of this is a formula — plenty of names that break every one of these rules still land
          for the right person. Treat it as a starting filter, not a checklist.
        </p>
      </section>

      {/* 3. How to create your own */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create Your Own Cool Username</h2>
        <p className="font-medium text-slate-900">Choose a concept → simplify it → combine ideas → test variations → check availability</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Pick a concept: a mood, a short word, an image you like the feel of.</li>
          <li>Simplify it: &ldquo;Wanderer&rdquo; → <span className="font-mono text-sm">Wandr</span></li>
          <li>Combine two short ideas if one word alone feels thin: dusk + rune → <span className="font-mono text-sm">Duskrune</span></li>
          <li>Say a few variations out loud — swap a letter or trim a syllable until it reads clean.</li>
          <li>Check the result before you get attached to it — every name above is an idea, not a guarantee.</li>
        </ul>
      </section>

      {/* 4. Cool usernames by length */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Cool Usernames by Length</h2>
        <p>
          Shorter names often read as cooler simply because they&apos;re faster to take in — but
          length alone doesn&apos;t guarantee a name lands, and a longer name built well can easily
          out-cool a short one. With 37 allowed characters per slot (A–Z, 0–9, underscore), 3-letter
          names have 37³ (50,653) possible combinations and 4-letter names have 37⁴ (about 1.87
          million) — meaningfully more room, though both lengths have been actively claimed for years.
        </p>
        <p>
          If shortness specifically is what you&apos;re after, see{" "}
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

      {/* 5. Cool vs OG/PvP/Aesthetic/Unique/Funny */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Cool vs OG / PvP / Aesthetic / Unique / Funny</h2>
        <p>
          These styles overlap constantly but aren&apos;t interchangeable. A cool name isn&apos;t
          automatically OG-style, built for PvP, aesthetic, unique, or funny — each of those is its
          own specific angle with its own page:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><Link href="/minecraft-og-usernames" className="text-emerald-600 underline">OG Minecraft Usernames</Link> — plain, old-school, early-Minecraft simplicity.</li>
          <li><Link href="/minecraft-pvp-usernames" className="text-emerald-600 underline">PvP Minecraft Usernames</Link> — built to be quick to type and read in combat chat.</li>
          <li><Link href="/minecraft-aesthetic-usernames" className="text-emerald-600 underline">Aesthetic Minecraft Usernames</Link> — mood and vibe over meaning.</li>
          <li><Link href="/minecraft-unique-usernames" className="text-emerald-600 underline">Unique Minecraft Usernames</Link> — built to dodge the most common naming patterns.</li>
          <li><Link href="/minecraft-funny-usernames" className="text-emerald-600 underline">Funny Minecraft Usernames</Link> — jokes and wordplay over a sharp or sleek feel.</li>
        </ul>
        <p>A name can sit in several of these at once — the categories describe emphasis, not exclusive boxes.</p>
      </section>

      {/* 6. Check availability */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Check Availability</h2>
        <p className="mt-3 text-slate-700">
          A username appearing on this page is only an idea — it does not mean the username is
          currently available. Click any name above, or{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          directly against a live Mojang lookup before you get attached to one.
        </p>
      </section>

      {/* 7. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More Cool Username Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — generate fresh combinations, pick one that
          feels right, then check it above.
        </p>
        <Link
          href="/minecraft-username-generator?theme=fantasy"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 8. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-og-usernames"],
          CATEGORY_LINK["/minecraft-pvp-usernames"],
          CATEGORY_LINK["/minecraft-aesthetic-usernames"],
          CATEGORY_LINK["/minecraft-unique-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
          CATEGORY_LINK["/minecraft-short-usernames"],
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
            question: "What makes a Minecraft username cool?",
            answer:
              "There's no objective test — it's subjective. Traits that commonly read as cool include memorability, simplicity, easy pronunciation, distinctiveness, and matching your own style rather than chasing a trend.",
          },
          {
            question: "What are good cool Minecraft usernames?",
            answer:
              "It depends on the specific style you want — browse the groups above (short, clean, unique, PvP, aesthetic, dark, funny-but-cool, classic) and click any name to check it.",
          },
          {
            question: "How do I create a cool Minecraft username?",
            answer:
              "Choose a concept, simplify it, combine it with another short idea if needed, test a few variations out loud, then check whichever one you land on.",
          },
          {
            question: "What are short cool Minecraft usernames?",
            answer:
              "Brief, easy-to-type names that still carry a distinct feel — see the Short & Cool group above, or the dedicated Short, 3-Letter, and 4-Letter pages for names built specifically around length.",
          },
          {
            question: "Are cool Minecraft usernames available?",
            answer:
              "Appearing on this page never means a name is available — every example here is an idea to check, not a verified result. Availability changes constantly, so the only way to know is to check a specific name directly.",
          },
          {
            question: "How do I check a Minecraft username?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Can I change my Minecraft username?",
            answer:
              "Yes, on Java Edition, once every 30 days for free through your account profile at minecraft.net. Bedrock Edition uses your Xbox gamertag instead, changed via Xbox account settings.",
          },
          {
            question: "Are numbers allowed in Minecraft usernames?",
            answer:
              "Yes. Usernames can mix letters, numbers, and underscores in any combination, 3 to 16 characters long — numbers aren't required, but they're fully valid.",
          },
        ]}
      />
    </div>
  );
}
