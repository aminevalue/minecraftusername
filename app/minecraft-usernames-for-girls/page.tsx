import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Minecraft Usernames for Girls — Cute, Cool & Aesthetic Ideas";
const PAGE_DESCRIPTION =
  "Minecraft username ideas across cute, aesthetic, cool, funny, fantasy, nature, animal, and PvP styles, plus a formula for building your own and checking its availability.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-usernames-for-girls` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-usernames-for-girls`,
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
    emoji: "🌸",
    label: "Cute Minecraft usernames",
    names: ["Sugarplum", "Dandy_Lion", "Peachytail", "Bunnyhop_Ivy", "Marshmelon", "Honeydew_Fox", "Cupcake_Wren", "Pixie_Petal"],
  },
  {
    emoji: "✨",
    label: "Aesthetic Minecraft usernames",
    names: ["Etherglow", "Velvet_Mist", "Opaline", "Duskpetal", "Silkwisp", "Lacewing_Moon", "Frostlace", "Hushglow"],
  },
  {
    emoji: "😎",
    label: "Cool Minecraft usernames",
    names: ["Vantavibe", "Nightshade_Rae", "Ashen_Vale", "Crimson_Wyn", "Steel_Iris", "Obsidian_Fae", "Blitzen_Fox", "Rogue_Wren"],
  },
  {
    emoji: "😂",
    label: "Funny Minecraft usernames",
    names: ["Sarcastic_Sheep", "Chaos_Muffin", "Suspicious_Latte", "Feral_Barbie", "Unbothered_Cow", "Drama_Llama_Jr", "Chronically_Late", "Emotional_Toast"],
  },
  {
    emoji: "🐉",
    label: "Fantasy-inspired usernames",
    names: ["Seraphine", "Nyxandra", "Faelynn", "Thornwyn", "Emberlark", "Wraithe_Vale", "Starling_Fae", "Moon_Sorceress"],
  },
  {
    emoji: "🌿",
    label: "Nature-inspired usernames",
    names: ["Fernheart", "Mossy_Brook", "Cedarwynn", "Petal_Drift", "Willow_Ash", "Cloverwisp", "Birchlyn", "Autumn_Fen"],
  },
  {
    emoji: "🦊",
    label: "Animal-inspired usernames",
    names: ["FoxgloveMae", "Otter_Pop", "Sparrowtail", "Kitten_Rune", "Vixen_Skye", "Falconheart", "Bunny_Ash", "Wrenlet"],
  },
  {
    emoji: "⚔️",
    label: "PvP / competitive usernames",
    names: ["Valkyra", "Blade_Wren", "Frost_Duelist", "Iron_Vixen", "Crit_Queen", "Swift_Reckoning", "Arrow_Fae", "Clutch_Iris"],
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

export default function GirlsUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft Usernames for Girls",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-usernames-for-girls`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Minecraft Names for Girls", href: "/minecraft-usernames-for-girls" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Usernames for Girls</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          There&apos;s no single style that fits every player, so the ideas below span cute,
          aesthetic, cool, funny, fantasy, nature, animal, and competitive naming styles — pick
          whichever actually matches how you want to play, not just one default lane.
        </p>
        <p>
          Browse a style, learn what makes a name stick, build your own with the formula further
          down, then check whether it&apos;s actually available.
        </p>
      </div>

      {/* 1. Best usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Minecraft Usernames for Girls</h2>
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

      {/* 2. How to choose */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Choose a Good Minecraft Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Length</strong> — shorter names are faster to type and easier for friends to recall in chat.</li>
          <li><strong>Simplicity</strong> — a name people can read once and remember beats a clever one nobody can repeat.</li>
          <li><strong>Pronunciation</strong> — if you&apos;d ever say it out loud (on a call, in a video), make sure it&apos;s actually sayable.</li>
          <li><strong>Spelling</strong> — unusual letter swaps look cool but make a name hard for others to find or type back.</li>
          <li><strong>Uniqueness</strong> — a name tied to a specific idea stands out more than a generic word plus numbers.</li>
          <li><strong>Matching your personality</strong> — a name you&apos;ll still like in a year usually reflects something real about how you play, not just a trend.</li>
          <li><strong>Matching your skin or style</strong> — a name that echoes your skin&apos;s theme (nature, fantasy, pastel) reads as more deliberate.</li>
          <li><strong>Avoiding unnecessary numbers</strong> — only add digits if the plain name is taken, not by default.</li>
          <li><strong>Avoiding confusing characters</strong> — stick to letters, numbers, and underscores others can type without guessing.</li>
        </ul>
      </section>

      {/* 3. Create your own */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Create Your Own Minecraft Username</h2>
        <p>
          A simple formula: <strong>Theme or personality word + a second word + an optional short
          variation</strong>. A few examples of it in action:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Soft/nature theme + fern → <span className="font-mono text-sm">Fernheart</span></li>
          <li>Fantasy theme + a made-up name ending → <span className="font-mono text-sm">Nyxandra</span></li>
          <li>Animal + a playful modifier → <span className="font-mono text-sm">Otter_Pop</span></li>
        </ul>
      </section>

      {/* 4. Conversion */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Check Username Availability</h2>
        <p className="mt-3 text-slate-700">
          A name you like is only useful if you can actually claim it, and availability changes
          constantly. Once you&apos;ve picked one from above (or built your own),{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check your Minecraft username
          </Link>{" "}
          against a live Mojang lookup before you get attached to it.
        </p>
      </section>

      {/* 5. Short usernames */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Short Minecraft Usernames</h2>
        <p>Looking specifically for something short? A few options from the lists above:</p>
        <NameChips names={["Wrenlet", "Opaline", "Faelynn", "Valkyra"]} />
        <p className="text-sm text-slate-500">
          For a dedicated experience, try our{" "}
          <Link href="/minecraft-3-letter-usernames" className="text-emerald-600 underline">
            3-Letter
          </Link>{" "}
          and{" "}
          <Link href="/minecraft-4-letter-usernames" className="text-emerald-600 underline">
            4-Letter
          </Link>{" "}
          checkers, or browse the full{" "}
          <Link href="/minecraft-short-usernames" className="text-emerald-600 underline">
            Short Usernames
          </Link>{" "}
          page.
        </p>
      </section>

      {/* 6. Related categories */}
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

      {/* 7. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Need More Ideas?</h2>
        <p className="mt-2 text-slate-600">
          Generate additional combinations, pick one you like, then check it:{" "}
          <strong>Get Ideas → Generate → Check Availability</strong>.
        </p>
        <Link
          href="/minecraft-username-generator?theme=nature"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 8. Tools */}
      <RelatedLinks
        title="Minecraft Username Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[2], TOOL_LINKS[6], TOOL_LINKS[3]]}
      />

      <FaqSection
        faqs={[
          {
            question: "What are good Minecraft usernames for girls?",
            answer:
              "It depends on your style — cute, aesthetic, cool, funny, fantasy, nature, animal, and competitive names are all common choices. Browse the grouped lists above and check any name you like.",
          },
          {
            question: "How do I choose a Minecraft username?",
            answer:
              "Favor something short, easy to pronounce and spell, and personal to you — a name you'll still like in a year usually beats a trendy one.",
          },
          {
            question: "Can Minecraft usernames contain spaces?",
            answer: "No. Only letters, numbers, and underscores are allowed — use an underscore to fake a space.",
          },
          {
            question: "How long can a Minecraft username be?",
            answer: "Between 3 and 16 characters on Java Edition.",
          },
          {
            question: "Can I change my Minecraft username?",
            answer: "Yes, once every 30 days for free, through your Minecraft/Mojang account profile.",
          },
          {
            question: "How do I check if a username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "What are some short Minecraft usernames?",
            answer:
              "See the Short Minecraft Usernames section above, or try the dedicated 3-Letter and 4-Letter checkers for an exact-length search.",
          },
          {
            question: "How can I make my Minecraft username unique?",
            answer:
              "Combine a personal theme with a less-common second word rather than a single popular noun plus numbers — see the naming formula above, or browse Unique Minecraft Usernames for more distinctive ideas.",
          },
        ]}
      />
    </div>
  );
}
