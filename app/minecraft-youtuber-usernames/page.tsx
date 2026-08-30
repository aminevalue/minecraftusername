import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Minecraft YouTuber Usernames — Brandable Creator Name Ideas";
const PAGE_DESCRIPTION =
  "Minecraft username ideas for content creators across gaming, PvP, SMP, survival, building, and technical styles, plus how to pick a name that actually works as a brand across YouTube, Twitch, and Discord.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-youtuber-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-youtuber-usernames`,
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
  { emoji: "🎮", label: "Gaming", names: ["BlockBrightCast", "PixelPulseTV", "CraftLoopMedia", "MineWaveStudio", "QuestBlockHub", "LevelUpLumber", "RespawnReel", "GameplayGrove"] },
  { emoji: "⚔️", label: "PvP", names: ["ClashCraftTV", "DuelReelMedia", "ArenaFrameHub", "CombatCutTV", "BladeBriefing", "StrikeStreamCo", "RushFrameTV", "ClutchCraftCo"] },
  { emoji: "😂", label: "Funny", names: ["ChuckleChunk", "GoofyGriefer", "SillySpawner", "LaughLootTV", "JestBlockMedia", "PunPickaxe", "GiggleGrove", "WittyWither"] },
  { emoji: "🧑‍🤝‍🧑", label: "SMP", names: ["SMPScribe", "ServerSagaTV", "CommunityCraftTV", "FactionFrameHub", "GroupGriefLog", "AllianceArc", "ClanChronicle", "SMPStoryteller"] },
  { emoji: "🏕️", label: "Survival", names: ["WildernessWatch", "LoneCrafterTV", "SoloSurviveHub", "HardcoreHollow", "DayOneDiary", "SurvivalSagaTV", "RationRunner", "EmberEnduranceTV"] },
  { emoji: "🏗️", label: "Building", names: ["BlueprintBloomTV", "ArchCraftStudio", "StructureScribe", "BuildBriefHub", "DesignDirtTV", "MasonMediaCo", "SketchAndStoneTV", "ArchitectAnvil"] },
  { emoji: "🔧", label: "Technical", names: ["RedstoneReelTV", "CircuitCraftHub", "LogicLootMedia", "WireframeWorldTV", "MechanismMediaCo", "TechTinkerTV", "ComponentCraftTV", "EngineerEmberTV"] },
  { emoji: "🎬", label: "Shorts & content creator", names: ["QuickClipCraft", "ShortformSpawn", "ClipCraftTV", "SnapBlockMedia", "MicroMineClips", "FlashFrameTV", "BiteSizeBuildTV", "RapidReelCraft"] },
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

export default function YoutuberUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft YouTuber Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-youtuber-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Minecraft YouTuber Names", href: "/minecraft-youtuber-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft YouTuber Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          A username you&apos;ll use as a content brand has different priorities than a personal
          name: it needs to be searchable without colliding with existing channels, easy to say out
          loud in a video, and consistent enough to use as your handle across platforms — not just
          inside Minecraft.
        </p>
        <p>
          Below: ideas grouped by the kind of content you actually make, what separates a name that
          works as a brand from one that doesn&apos;t, and how to build your own.
        </p>
      </div>

      {/* 1. Best youtuber usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Minecraft YouTuber Usernames by Style</h2>
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

      {/* 2. What makes a good creator username */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Good Minecraft YouTuber Username?</h2>
        <p>
          A creator name has to work for an audience, not just for you. A few traits consistently
          separate names that stick from names people forget by the next video:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Brandable</strong> — sounds like a name, not a random word string, and is easy to imagine as a logo or channel banner.</li>
          <li><strong>Memorable</strong> — a viewer who hears it once in a video should be able to search for it later without misspelling it.</li>
          <li><strong>Easy to say out loud</strong> — you&apos;ll be saying it in your own intros; if it&apos;s awkward to pronounce, it&apos;ll stay awkward every video.</li>
          <li><strong>Distinctive enough to search</strong> — a name that&apos;s also a common word or an existing brand makes you hard to find in results.</li>
        </ul>
      </section>

      {/* 3. Minecraft identity vs broader brand */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Your Minecraft Username vs Your Broader Creator Brand</h2>
        <p>
          Your Minecraft username and your channel name don&apos;t have to be identical, but
          consistency helps — viewers who see your in-game name in a video are more likely to
          remember and find your channel if the names match or are clearly related. Keep in mind
          the two operate under different rules: Minecraft usernames are capped at 16 characters
          and only allow letters, numbers, and underscores, while YouTube, Twitch, and Discord
          handles have their own separate length and character rules. A name that fits neatly in
          Minecraft&apos;s format won&apos;t automatically fit everywhere else, and vice versa.
        </p>
      </section>

      {/* 4. Cross platform */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Choosing a Name That Works Across Platforms</h2>
        <p>
          Before committing to a name, check it in every place your audience might look for you,
          not just Minecraft:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Search it on YouTube and Twitch to see if an existing channel already uses it.</li>
          <li>Check whether the handle is free on Discord, since server invites and DMs will use it.</li>
          <li>Do a general web search — a name can be open everywhere you&apos;ve checked and still collide with an unrelated brand or public figure.</li>
          <li>Check the matching domain if you plan to build a site around the brand eventually.</li>
        </ul>
      </section>

      {/* 5. Short readable names */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Short, Readable Names for Creators</h2>
        <p>
          Short, sayable names tend to perform better for word-of-mouth recall — a name your
          audience can casually recommend without spelling it out. If you want the shortest names
          the format allows, see{" "}
          <Link href="/minecraft-short-usernames" className="text-emerald-600 underline">
            Short Usernames
          </Link>
          , or the dedicated{" "}
          <Link href="/minecraft-3-letter-usernames" className="text-emerald-600 underline">
            3-Letter
          </Link>{" "}
          and{" "}
          <Link href="/minecraft-4-letter-usernames" className="text-emerald-600 underline">
            4-Letter
          </Link>{" "}
          checkers — just note that extremely short names can be harder to search for online since
          they collide more often with unrelated results.
        </p>
      </section>

      {/* 6. How to create */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create a Strong Creator Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Start from the content you actually make, not a generic gaming word.</li>
          <li>Combine a content-relevant word with a media-style suffix: block + reel → <span className="font-mono text-sm">BlockReelTV</span></li>
          <li>Say it out loud as an intro line — if it&apos;s clunky, simplify it.</li>
          <li>Search it across YouTube, Twitch, Discord, and the web before you commit.</li>
          <li>Check the Minecraft username itself before you get attached to it — every name above is an idea, not a guarantee.</li>
        </ul>
      </section>

      {/* 7. Mistakes */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Naming Mistakes to Avoid</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Picking a name that&apos;s also a common word.</strong> It gets buried in search results next to unrelated content.</li>
          <li><strong>Checking only Minecraft.</strong> A name can be available in-game and already claimed as a channel handle elsewhere, confusing your own audience.</li>
          <li><strong>Overloading numbers or underscores to force availability.</strong> It makes the name harder to say and spell back correctly.</li>
          <li><strong>Choosing something so niche it doesn&apos;t survive a content pivot.</strong> A name tied too tightly to one game mode can feel limiting if your content grows beyond it.</li>
        </ul>
      </section>

      {/* 8. Length and rules */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Username Length &amp; Minecraft Formatting Rules</h2>
        <p>
          Java Edition usernames are 3 to 16 characters, using only letters, numbers, and
          underscores — no spaces, dashes, or other symbols. Media-style suffixes like{" "}
          <span className="font-mono text-sm">TV</span> or <span className="font-mono text-sm">Media</span>{" "}
          eat into that limit fast, so budget for them from the start rather than trying to squeeze
          one on after the fact.
        </p>
      </section>

      {/* 9. Check availability */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Checking Availability</h2>
        <p className="mt-3 text-slate-700">
          Nothing on this page is pre-verified — click any name above, or{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          directly against a live Mojang lookup. A result is a snapshot at the moment you check,
          not a reservation, and it doesn&apos;t confirm whether the name is free anywhere else.
        </p>
      </section>

      {/* 10. Username history */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Username History</h2>
        <p>
          If a brand name you want is taken in Minecraft, the checker only shows its{" "}
          <strong>current</strong> status, not whether it was recently freed by a rename — Mojang
          discontinued public access to username history in 2022 with no official replacement. Our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>{" "}
          explains exactly what&apos;s still available today.
        </p>
      </section>

      {/* 11. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More Creator Name Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — generate fresh combinations, pick one that
          fits your content, then check it above.
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
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
          CATEGORY_LINK["/minecraft-pvp-usernames"],
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
            question: "What makes a good Minecraft YouTuber username?",
            answer:
              "Brandable, memorable, easy to say out loud, and distinctive enough that it doesn't get buried in search results next to unrelated content.",
          },
          {
            question: "Should my Minecraft username match my channel name?",
            answer:
              "It's not required, but consistency helps — viewers who see your in-game name in a video are more likely to remember and find your channel if the names match or are clearly related.",
          },
          {
            question: "How do I check if a creator name is available across platforms?",
            answer:
              "Search it directly on YouTube, Twitch, and Discord, plus a general web search — availability in Minecraft doesn't tell you anything about those other platforms.",
          },
          {
            question: "What length should a YouTuber username be?",
            answer:
              "Shorter, sayable names generally perform better for word-of-mouth recall, but the more important factor is that the name is unique enough to search for without competing against unrelated results.",
          },
          {
            question: "Can I use the same username on YouTube, Twitch, and Discord?",
            answer:
              "Only if it's available on all of them — each platform has its own separate handle rules and availability, unrelated to whether the name works as a Minecraft username.",
          },
          {
            question: "How do I check if a Minecraft username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Can I see who used a username before me?",
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
