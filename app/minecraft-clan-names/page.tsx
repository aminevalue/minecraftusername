import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Minecraft Clan Names — Team, Faction & Tag Ideas";
const PAGE_DESCRIPTION =
  "Minecraft clan and faction name ideas across competitive, funny, and community styles, how clan tags actually work within Minecraft's username rules, and how to pick a name that works for the whole team.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-clan-names` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-clan-names`,
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
  { emoji: "⚡", label: "Short & memorable", names: ["Vantek", "Korrin", "Ashryn", "Duskra", "Ferox", "Nyxar", "Ostren", "Zephar"] },
  { emoji: "⚔️", label: "Competitive & PvP clans", names: ["RuthlessSquad", "ApexRaid", "ZeroMercyCo", "SweatSyndicate", "ClutchCartel", "BloodOathClan", "RankOneAlliance", "NoMercyLegion"] },
  { emoji: "😂", label: "Funny & creative clans", names: ["ChaoticGoobers", "MossyMishaps", "SnackTimeSquad", "GremlinAlliance", "WobblyWizards", "DerpSquadron", "ChunkyChaos", "GoofyGarrison"] },
  { emoji: "🏘️", label: "SMP & community clans", names: ["HearthboundCrew", "TheSettlersGuild", "CommonGroundCo", "AshTownAlliance", "TheOutpostFam", "GreenfieldCrew", "TheHomesteaders", "RiverbendUnion"] },
  { emoji: "🏰", label: "Faction & war-themed", names: ["Ironvault", "Blackreach", "Duskhollow", "Grimspire", "Frosthaven", "Ashwarden", "Nightmarch", "Stonefall"] },
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

export default function ClanNamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft Clan Names",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-clan-names`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Minecraft Clan Names", href: "/minecraft-clan-names" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Clan Names</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          Naming a clan is a different problem than naming yourself. A clan name has to work for a
          group, not just one person — it needs to sound right as a tag in chat, hold up across
          every member&apos;s individual username, and usually needs a short abbreviation for
          factions or team-tag plugins.
        </p>
        <p>
          Below: what makes a clan name actually work, how tags function within Minecraft&apos;s own
          rules, and a process for landing on a name your whole group agrees on.
        </p>
      </div>

      {/* 1. Best clan names */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Minecraft Clan Names</h2>
        <p className="text-sm text-slate-500">
          These are name ideas, not confirmed-available usernames — click any one to check it
          against live Mojang data if you&apos;d also use it as an individual username.
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

      {/* 2. What makes a good clan name */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Good Minecraft Clan Name?</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Abbreviates cleanly</strong> — the name should reduce to a short, readable tag without getting awkward.</li>
          <li><strong>Says something about the group</strong> — competitive, casual, funny, or community-focused, matching the tone your members actually want.</li>
          <li><strong>Doesn&apos;t depend on one member&apos;s name</strong> — a name built around a single player&apos;s handle gets awkward if that player leaves.</li>
          <li><strong>Easy to say and type in chat</strong> — the same practical bar as any individual username, just applied to a group label instead.</li>
        </ul>
      </section>

      {/* 3. Clan names vs usernames */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Clan Names vs Individual Minecraft Usernames</h2>
        <p>
          A clan or faction name isn&apos;t a Minecraft username at all — it&apos;s a label used in a
          server plugin, a Discord server, or informally in chat. Each member of the clan still
          needs their own valid Minecraft account username, following the same 3–16 character,
          letters/numbers/underscore rule as everyone else. That distinction matters for
          availability: there&apos;s no such thing as &ldquo;checking if a clan name is taken&rdquo;
          the way you&apos;d check a username, since a clan name isn&apos;t registered to any
          account. What you can check is whether a specific member&apos;s individual username is
          available.
        </p>
      </section>

      {/* 4. Choosing for the team */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Choosing a Name That Works for the Whole Team</h2>
        <p>
          The most common way a clan name fails isn&apos;t a bad word choice — it&apos;s picking one
          person&apos;s favorite without the group actually agreeing on it. A few things help:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Get a real yes from every member, not just the person who suggested it first.</li>
          <li>Agree on the tone (competitive, casual, funny) before individual names are pitched, so suggestions aren&apos;t working against each other.</li>
          <li>Decide on a naming convention for members&apos; own usernames — a shared prefix or suffix, for example — before people start claiming individual names, since it&apos;s much harder to standardize after the fact.</li>
        </ul>
      </section>

      {/* 5. Clan tags explained */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Clan Tags and Abbreviations, Explained</h2>
        <p>
          Most factions and team-tag plugins prefix a short tag — typically 2 to 4 letters — before
          each member&apos;s username in chat, like <span className="font-mono text-sm">[IPC]</span>{" "}
          for a clan called IronPact. That bracketed tag is added by the plugin as a display
          feature; it isn&apos;t part of anyone&apos;s actual registered username, since Minecraft
          usernames can&apos;t contain brackets or symbols beyond an underscore. A few examples of
          how a full clan name reduces to a workable tag:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>IronPact → <span className="font-mono text-sm">[IPC]</span></li>
          <li>RuthlessSquad → <span className="font-mono text-sm">[RSQ]</span></li>
          <li>AshTownAlliance → <span className="font-mono text-sm">[ATA]</span></li>
        </ul>
        <p>
          Pick a name that abbreviates cleanly before you commit to it — an awkward tag shows up in
          front of every member&apos;s name, every message, for as long as the group uses it.
        </p>
      </section>

      {/* 6. How to create */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create Your Clan Name and Tag</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Agree on tone and theme as a group first.</li>
          <li>Draft two or three full name options, not just one.</li>
          <li>Try abbreviating each to 2–4 letters and say the tag out loud in a sentence.</li>
          <li>Vote or get explicit agreement from every member before it&apos;s final.</li>
          <li>Once the name is set, each member checks and claims their own individual username separately.</li>
        </ul>
      </section>

      {/* 7. Mistakes */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Common Clan Naming Mistakes</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Choosing a name that only abbreviates awkwardly.</strong> Test the tag before finalizing the full name, not after.</li>
          <li><strong>Building the name around one member.</strong> It creates confusion if that person leaves or the roster changes.</li>
          <li><strong>Skipping group buy-in.</strong> A name one person picked alone rarely sticks the same way as one everyone agreed to.</li>
          <li><strong>Not planning a member-naming convention early.</strong> It&apos;s much harder to standardize individual usernames after people have already claimed names independently.</li>
        </ul>
      </section>

      {/* 8. Length and rules */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Rules for Individual Members</h2>
        <p>
          The clan name itself isn&apos;t bound by Minecraft&apos;s format rules, but every
          member&apos;s personal username is: 3 to 16 characters, letters, numbers, and underscores
          only. If your group is looking for individual naming styles to go with the clan identity,
          see{" "}
          <Link href="/minecraft-pvp-usernames" className="text-emerald-600 underline">
            PvP
          </Link>
          ,{" "}
          <Link href="/minecraft-tryhard-usernames" className="text-emerald-600 underline">
            Tryhard
          </Link>
          ,{" "}
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
          </Link>
          , or the dedicated{" "}
          <Link href="/minecraft-short-usernames" className="text-emerald-600 underline">
            Short
          </Link>
          ,{" "}
          <Link href="/minecraft-3-letter-usernames" className="text-emerald-600 underline">
            3-Letter
          </Link>
          , and{" "}
          <Link href="/minecraft-4-letter-usernames" className="text-emerald-600 underline">
            4-Letter
          </Link>{" "}
          checkers for members who want the shortest names the format allows.
        </p>
      </section>

      {/* 9. Check availability */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">Checking Availability</h2>
        <p className="mt-3 text-slate-700">
          There&apos;s no availability check for a clan name itself, since it isn&apos;t a
          registered Minecraft account. For each member&apos;s individual username, click any name
          above, or{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          directly against a live Mojang lookup. A result is a snapshot at the moment you check,
          not a reservation.
        </p>
      </section>

      {/* 10. Username history */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Checking an Existing Member&apos;s Username</h2>
        <p>
          If you&apos;re trying to confirm whether a name a prospective member already uses is
          genuinely theirs, the checker only shows an account&apos;s <strong>current</strong>{" "}
          status, not its past names — Mojang discontinued public access to username history in
          2022 with no official replacement. Our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>{" "}
          explains exactly what&apos;s still available today.
        </p>
      </section>

      {/* 11. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate Ideas for Individual Members</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — once the clan identity is set, members can
          generate fresh personal username ideas and check them individually.
        </p>
        <Link
          href="/minecraft-username-generator?theme=dark"
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
          CATEGORY_LINK["/minecraft-tryhard-usernames"],
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
            question: "Does a clan name need to be a Minecraft username?",
            answer:
              "No — a clan or faction name is usually just a label used in a plugin, Discord server, or informally in chat. Individual members still each need their own valid Minecraft account username.",
          },
          {
            question: "How short should a clan tag be?",
            answer:
              "Most factions-style plugins work best with 2-4 character tags, since longer tags eat into the visible space before each player's name in chat.",
          },
          {
            question: "What makes a good Minecraft clan name?",
            answer:
              "A name that abbreviates cleanly into a tag, reflects the group's actual tone, doesn't depend on one member's identity, and is easy to say and type in chat.",
          },
          {
            question: "How is a clan name different from a Minecraft username?",
            answer:
              "A clan name isn't registered to any account and isn't bound by Minecraft's username format rules. Each individual member's username is separate and does follow the standard 3-16 character, letters/numbers/underscore rule.",
          },
          {
            question: "Can everyone in a clan use the same tag?",
            answer:
              "Yes — that's the point of a clan tag. A plugin displays the same short bracketed tag in front of every member's individual username; the tag itself isn't part of anyone's registered account name.",
          },
          {
            question: "How do I check if a clan tag is already used by another community?",
            answer:
              "There's no official registry to check against, since tags are plugin-specific labels, not Minecraft accounts. Searching the exact tag and full name on Discord and the web is the most practical way to avoid an obvious collision.",
          },
          {
            question: "How do I check if a member's Minecraft username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Can members change their Minecraft username later if the group's naming convention changes?",
            answer:
              "Yes, on Java Edition, once every 30 days for free through their account profile at minecraft.net. Bedrock Edition uses an Xbox gamertag instead, changed via Xbox account settings.",
          },
        ]}
      />
    </div>
  );
}
