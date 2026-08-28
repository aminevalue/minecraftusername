import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Funny Minecraft Usernames — 60+ Clever, Random & Troll Ideas";
const PAGE_DESCRIPTION =
  "Looking for a funny Minecraft username? Browse clever, random, and Minecraft-themed ideas grouped by style, learn what actually makes a name land, then check your favorite one's availability.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-funny-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-funny-usernames`,
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
    emoji: "😂",
    label: "Clever funny usernames",
    names: ["Cobblestoned", "Netherlands", "PortalToWork", "BlockAndRoll", "MineOverMatter", "Enderminate", "GrassIsGreener", "DiggingDeepDebt"],
  },
  {
    emoji: "🤪",
    label: "Random funny usernames",
    names: ["Ok_Boomerang", "Suspicious_Stew", "Discount_Steve", "Sentient_Dirt", "Goblin_CFO", "Emotional_Cow", "Chicken_Overlord", "Sir_Waffles_III"],
  },
  {
    emoji: "🐔",
    label: "Animal-based funny usernames",
    names: ["CowThatStares", "SheepInDisguise", "Turtle_On_WiFi", "Feral_Parrot", "Llama_Of_Chaos", "Angry_Bee_CEO", "Squid_But_Sus", "Judgmental_Cat"],
  },
  {
    emoji: "⛏️",
    label: "Minecraft-themed funny usernames",
    names: ["CreeperMagnet", "LagSpikeVictim", "TooManyRespawns", "FallDamageFan", "DiedToAZombie", "BadAtPvP", "AFKMostly", "StillNoDiamonds"],
  },
  {
    emoji: "💀",
    label: "Dark/humor-style names",
    names: ["Perpetually_Lost", "Grave_Discount", "Doomed_By_Design", "Reaper_Intern", "Deadchat_Fan", "Funeral_Vibes", "Slowly_Fading", "Cursed_Default"],
  },
  {
    emoji: "🍕",
    label: "Food-inspired funny usernames",
    names: ["Waffle_Overlord", "Discount_Pizza", "Cake_Is_A_Lie", "Pumpkin_Pie_CEO", "Melon_Enthusiast", "Rotten_Flesh_Fan", "NetherWartFan", "Suspicious_Soup"],
  },
  {
    emoji: "🧌",
    label: "Troll-style usernames",
    names: ["Definitely_Human", "Not_A_Hacker", "Totally_Legit", "Griefer_Reform", "Professional_Lag", "Trapdoor_Victim", "Bedrock_Remover", "TNT_Enjoyer"],
  },
  {
    emoji: "🎮",
    label: "Gamer-style funny usernames",
    names: ["Rage_Quit_Pro", "Noob_With_Style", "Speedrun_Denied", "One_HP_Legend", "Respawn_Fanatic", "Ping_Of_Death", "Controller_Yeet", "GG_But_Cursed"],
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

export default function FunnyUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Funny Minecraft Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-funny-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Funny Minecraft Names", href: "/minecraft-funny-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Funny Minecraft Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          Funny usernames work best when the joke is legible in under two seconds — a pun someone has
          to sound out, or a reference only you get, falls flat in a server chat scrolling past at
          full speed.
        </p>
        <p>
          The lists below are grouped by comedic style, so you can pick a lane, click a name to check
          it, or read on for how to build your own.
        </p>
      </div>

      {/* 1. Best funny usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Funny Minecraft Usernames</h2>
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

      {/* 2. What makes it funny */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Minecraft Username Funny?</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Unexpected combinations</strong> — pairing two words that don&apos;t normally go
            together, like <span className="font-mono text-sm">Suspicious_Stew</span>.
          </li>
          <li>
            <strong>Wordplay</strong> — a pun that lands the moment you read it, like{" "}
            <span className="font-mono text-sm">Cobblestoned</span> or{" "}
            <span className="font-mono text-sm">BlockAndRoll</span>.
          </li>
          <li>
            <strong>Minecraft references</strong> — jokes about the game&apos;s own mechanics, like{" "}
            <span className="font-mono text-sm">StillNoDiamonds</span> or{" "}
            <span className="font-mono text-sm">LagSpikeVictim</span>.
          </li>
          <li>
            <strong>Short names</strong> — a quick, punchy word reads faster in chat than a long
            sentence-style name, even when it&apos;s dead simple.
          </li>
          <li>
            <strong>Absurd combinations</strong> — pairing a mundane word with an inflated title,
            like <span className="font-mono text-sm">Goblin_CFO</span> or{" "}
            <span className="font-mono text-sm">Angry_Bee_CEO</span>.
          </li>
          <li>
            <strong>Funny character references</strong> — nodding to a Minecraft figure or mob without
            spelling out the whole joke, like <span className="font-mono text-sm">Real_Herobrine</span>.
          </li>
          <li>
            <strong>Clever spelling</strong> — a near-miss on a real word or phrase, like{" "}
            <span className="font-mono text-sm">Netherlands</span>.
          </li>
        </ul>
      </section>

      {/* 3. How to create your own */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          How to Create Your Own Funny Minecraft Username
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Start with a Minecraft concept: a mob, item, or mechanic.</li>
          <li>Add an unexpected word or title that doesn&apos;t belong with it.</li>
          <li>Shorten it until it reads in under two seconds.</li>
          <li>Check whether it&apos;s actually available before you get attached to it.</li>
        </ol>
        <p>A few examples of the process in action:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Creeper → add &ldquo;Magnet&rdquo; → shorten → <span className="font-mono text-sm">CreeperMagnet</span></li>
          <li>Diamond → add a complaint → shorten → <span className="font-mono text-sm">StillNoDiamonds</span></li>
          <li>Cow → add a corporate title → shorten → <span className="font-mono text-sm">Emotional_Cow</span></li>
        </ul>
      </section>

      {/* 4. Conversion section */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Check If Your Funny Username Is Available</h2>
        <p className="mt-3 text-slate-700">
          A funny name only works if you can actually claim it — and availability changes constantly,
          so a name that looks free today can be gone by the time you decide. Once you&apos;ve picked
          one from the lists above (or thought of your own),{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check your Minecraft username
          </Link>{" "}
          against a live Mojang lookup before you get attached to it.
        </p>
      </section>

      {/* 5. Short funny usernames */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Short Funny Minecraft Usernames</h2>
        <p>
          Shorter names read faster and are easier for friends to remember, though they&apos;re also
          the most competitive length to claim. A few short, punchy options from the lists above:
        </p>
        <NameChips names={["BadAtPvP", "AFKMostly", "Goblin_CFO", "TNT_Enjoyer"]} />
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

      {/* 6. Examples by style */}
      <section className="mt-8 space-y-6 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Funny Minecraft Username Examples</h2>
        <p>A different cut of the same idea — organized by how the name is built rather than its topic:</p>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">One-word jokes</h3>
          <NameChips names={["Cobblestoned", "Netherlands", "Enderminate"]} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Phrase-style with underscores</h3>
          <NameChips names={["Not_A_Hacker", "Ok_Boomerang", "Sentient_Dirt"]} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Character or reference-based</h3>
          <NameChips names={["Real_Herobrine", "Chicken_Overlord", "Bedrock_Remover"]} />
        </div>
      </section>

      {/* Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Can&apos;t Find the Right Name?</h2>
        <p className="mt-2 text-slate-600">
          Generate ideas, pick one you like, then check it: <strong>Get Ideas → Generate → Check
          Availability</strong>.
        </p>
        <Link
          href="/minecraft-username-generator?theme=food"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      <FaqSection
        faqs={[
          {
            question: "What are some funny Minecraft usernames?",
            answer:
              "Names built on wordplay (Cobblestoned), absurd titles (Goblin_CFO), or Minecraft-mechanic jokes (StillNoDiamonds) tend to land best — see the full grouped list above.",
          },
          {
            question: "How do I make a funny Minecraft username?",
            answer:
              "Start with a Minecraft concept, add an unexpected word, shorten it until it reads fast, then check whether it's actually available.",
          },
          {
            question: "What makes a Minecraft username funny?",
            answer:
              "Speed of the joke landing matters most — unexpected word pairings, clean wordplay, and references to Minecraft's own mechanics tend to work better than long, explained-out jokes.",
          },
          {
            question: "Can I use spaces in a Minecraft username?",
            answer:
              "No. Only letters, numbers, and underscores are allowed — use an underscore to fake a space, like Suspicious_Stew.",
          },
          {
            question: "How long can a Minecraft username be?",
            answer: "Between 3 and 16 characters. Longer joke names need to be shortened to fit.",
          },
          {
            question: "How can I check if a funny Minecraft username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Can I change my Minecraft username?",
            answer:
              "Yes, once every 30 days for free through your Minecraft/Mojang account profile, so you can try a funny name without a permanent commitment.",
          },
          {
            question: "Can I create my own funny Minecraft username?",
            answer:
              "Yes — use the process above, or try the Username Generator for fresh combinations to riff on.",
          },
        ]}
      />

      <RelatedLinks
        title="More name ideas"
        links={[
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
          CATEGORY_LINK["/minecraft-aesthetic-usernames"],
          CATEGORY_LINK["/minecraft-unique-usernames"],
        ]}
      />

      <RelatedLinks
        title="Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[2]]}
      />

      <section className="mt-8 text-sm text-slate-500">
        <p>
          Building a competitive server name instead?{" "}
          <Link href="/minecraft-pvp-usernames" className="text-emerald-600 underline">
            Minecraft PvP Usernames
          </Link>{" "}
          covers short, aggressive naming styles, or browse the full{" "}
          <Link href="/minecraft-username-ideas" className="text-emerald-600 underline">
            Name Ideas library
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
