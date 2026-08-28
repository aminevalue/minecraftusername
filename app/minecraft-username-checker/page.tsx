import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import UsernameCheckerForm from "@/components/UsernameCheckerForm";
import { softwareApplicationJsonLd, webPageJsonLd } from "@/lib/schema";
import { COLOR_CODE_LINKS, IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_DESCRIPTION =
  "Check Minecraft usernames, learn about availability, username history, rules, length limits, UUIDs, and find useful Minecraft username tools — all from one live Mojang lookup.";

export const metadata: Metadata = {
  title: "Minecraft Username Checker – Check Username Availability",
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-username-checker` },
};

const TOOL = {
  checker: TOOL_LINKS[0],
  generator: TOOL_LINKS[1],
  history: TOOL_LINKS[2],
  color: TOOL_LINKS[3],
  threeLetterLink: TOOL_LINKS[4],
  fourLetterLink: TOOL_LINKS[5],
  uuid: TOOL_LINKS[6],
};

const CATEGORY = Object.fromEntries(IDEA_CATEGORY_LINKS.map((l) => [l.href, l])) as Record<
  string,
  (typeof IDEA_CATEGORY_LINKS)[number]
>;

interface ExampleGroup {
  href: string;
  label: string;
  names: string[];
}

const EXAMPLE_GROUPS: ExampleGroup[] = [
  { href: "/minecraft-short-usernames", label: "Short Minecraft Usernames", names: ["Kip", "Zor", "Vye", "Lume", "Fenn", "Skye"] },
  { href: "/minecraft-cool-usernames", label: "Cool Minecraft Usernames", names: ["Vex", "Kade", "Rune", "Zephyr", "Onyx", "Kestrel"] },
  { href: "/minecraft-funny-usernames", label: "Funny Minecraft Usernames", names: ["Cobblestoned", "Creeper_Nap", "Enderminate", "PortalToWork", "BlockAndRoll", "MineOverMatter"] },
  { href: "/minecraft-pvp-usernames", label: "PvP Minecraft Usernames", names: ["Fang", "Rip", "Grit", "Snap", "Rook", "Krux"] },
  { href: "/minecraft-og-usernames", label: "OG Minecraft Usernames", names: ["Miner_Joe", "CraftKing", "BlockHunter", "PixelPioneer", "RetroBuilder", "ClassicCrafter"] },
  { href: "/minecraft-aesthetic-usernames", label: "Aesthetic Minecraft Usernames", names: ["Moonhaze", "Softglow", "Duskbloom", "Etherlynn", "Cloudmere", "Mistvale"] },
  { href: "/minecraft-usernames-for-girls", label: "Minecraft Usernames for Girls", names: ["Wildrose", "Moonlit_Fern", "Hazel_Brook", "Willowmere", "Meadowlark", "Ivywren"] },
  { href: "/minecraft-usernames-for-boys", label: "Minecraft Usernames for Boys", names: ["Ironstrike", "Shockblade", "Bladefury", "Steelrunner", "Frostblade", "Nightstrike"] },
];

const MORE_CATEGORIES = [
  CATEGORY["/minecraft-3-letter-usernames"],
  CATEGORY["/minecraft-4-letter-usernames"],
  CATEGORY["/minecraft-unique-usernames"],
  CATEGORY["/minecraft-tryhard-usernames"],
  CATEGORY["/minecraft-youtuber-usernames"],
  CATEGORY["/minecraft-clan-names"],
];

const FAQS = [
  {
    question: "What is a Minecraft username checker?",
    answer:
      "A tool that checks whether a Minecraft (Java Edition) username is currently registered to an account, using a live request to Mojang's own account-lookup service — not a cached list or a guess.",
  },
  {
    question: "How do I check if a Minecraft username is available?",
    answer:
      "Type it into the box above and click \"Check availability.\" The result reflects the exact moment you checked; it isn't a reservation.",
  },
  {
    question: "Are Minecraft usernames case-sensitive?",
    answer:
      "Not for uniqueness. \"Steve\" and \"steve\" are the same registered name, though the account's display capitalization can differ from what you type.",
  },
  {
    question: "How long can a Minecraft username be?",
    answer: "Between 3 and 16 characters on Java Edition. Shorter or longer input is rejected before any lookup runs.",
  },
  {
    question: "Can Minecraft usernames contain spaces?",
    answer:
      "No. Only letters (A–Z), numbers (0–9), and underscores are allowed — no spaces or other symbols.",
  },
  {
    question: "Can I change my Minecraft username?",
    answer:
      "Yes, on Java Edition, through your account profile at minecraft.net, subject to the same format and blocked-word rules as any name. Bedrock uses your Xbox gamertag instead, changed via Xbox account settings.",
  },
  {
    question: "How often can I change my Minecraft username?",
    answer: "Once every 30 days for free. The cooldown applies per account and can't be shortened.",
  },
  {
    question: "Can I see someone's previous Minecraft usernames?",
    answer:
      "Only in limited ways. Mojang discontinued public username-history data in 2022 with no official replacement — see our Username History Checker for exactly what's still available.",
  },
  {
    question: "What is a Minecraft UUID?",
    answer:
      "A permanent ID Mojang assigns to a Java Edition account, which never changes even when the username does. Our UUID Lookup tool resolves it from a username, or the username from a UUID.",
  },
  {
    question: "Why is a Minecraft username unavailable?",
    answer:
      "Usually an active account already holds it. It can also be in a short post-rename hold period, blocked by Mojang as a restricted word, or simply an invalid format.",
  },
  {
    question: "How do I find a good Minecraft username?",
    answer:
      "Browse curated ideas by style below, or use the Username Generator to create fresh combinations — then check any name you like directly above.",
  },
  {
    question: "Where can I find short Minecraft usernames?",
    answer:
      "See our dedicated 3-Letter and 4-Letter checkers, or the broader Short Usernames page — short combinations are the most competitive category, so treat any list as a starting point to check, not a guarantee.",
  },
  {
    question: "Is this an official Mojang or Microsoft tool?",
    answer:
      "No. This is an independent, fan-made toolset, not affiliated with, endorsed by, or operated by Mojang Studios or Microsoft. It uses Mojang's public lookup data to report results.",
  },
  {
    question: "Can this tool reserve a username for me?",
    answer:
      "No. There's no way to reserve a Minecraft username in advance. Claiming one requires changing your name on your actual Minecraft/Mojang account, and someone else can take an available name at any time.",
  },
];

export default async function UsernameCheckerPage(props: PageProps<"/minecraft-username-checker">) {
  const params = await props.searchParams;
  const initial = typeof params.name === "string" ? params.name : "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Minecraft Username Checker",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-username-checker`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: "Minecraft Username Checker",
              description:
                "Free tool to check whether a Minecraft username is taken or available, using a live Mojang lookup.",
              url: `${SITE_URL}/minecraft-username-checker`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Username Checker", href: "/minecraft-username-checker" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Username Checker</h1>
      <p className="mt-3 text-slate-600">
        Check whether a Minecraft username is taken or available, then read on for username history,
        rules, length limits, UUIDs, and other tools — all in one place.
      </p>

      <div className="mt-6">
        <UsernameCheckerForm initialUsername={initial} showSkin />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      {/* Result & availability meaning */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Your Result Means</h2>
        <p>
          An <strong>available</strong> result is a live snapshot, not a reservation — nothing on this
          site holds the name for you, and claiming it still requires changing it on an actual
          Minecraft/Mojang account. A <strong>taken</strong> result means an active account already
          holds the exact name, shown alongside that account&apos;s current skin.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>An active account is already using it — even one that rarely logs in.</li>
          <li>The name was recently freed by a rename, but Mojang applies a short hold before it&apos;s reusable.</li>
          <li>Mojang blocks certain words (offensive terms, staff impersonation) regardless of availability.</li>
          <li>The format itself is invalid — wrong length or unsupported characters.</li>
        </ul>
      </section>

      {/* How the checker works */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How the Checker Works</h2>
        <p>
          Every check above is a live request to Mojang&apos;s own account-lookup service — the same
          source Minecraft itself relies on — not a cached list or a guess. Type a username (3–16
          characters), click &ldquo;Check availability,&rdquo; and the result reflects exactly what
          Mojang reports right now, including the account&apos;s current skin if the name is taken.
          Rate limits or connection issues are shown as exactly that, never disguised as an answer.
        </p>
      </section>

      {/* Rules */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Rules</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
            <p className="font-medium text-emerald-900">Allowed</p>
            <ul className="mt-2 space-y-1 text-sm text-emerald-800">
              <li>3–16 characters long</li>
              <li>Letters A–Z (any case)</li>
              <li>Numbers 0–9</li>
              <li>Underscores ( _ )</li>
            </ul>
          </div>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
            <p className="font-medium text-rose-900">Not allowed</p>
            <ul className="mt-2 space-y-1 text-sm text-rose-800">
              <li>Fewer than 3 or more than 16 characters</li>
              <li>Spaces</li>
              <li>Symbols other than underscore (!, @, -, etc.)</li>
              <li>Mojang-blocked words (offensive terms, staff impersonation)</li>
            </ul>
          </div>
        </div>
        <ul className="list-disc space-y-2 pl-5">
          <li>Names aren&apos;t case-sensitive for uniqueness — &ldquo;Steve&rdquo; and &ldquo;steve&rdquo; are the same registered name.</li>
          <li>
            You can change your username once every 30 days for free, through your profile at{" "}
            <span className="font-mono text-sm">minecraft.net</span>.
          </li>
          <li>Your old username enters a short hold period before anyone else can claim it.</li>
          <li>
            Bedrock Edition uses your Xbox gamertag instead, governed by Microsoft&apos;s own rules —
            it isn&apos;t covered by this checker.
          </li>
        </ul>
      </section>

      {/* Length */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Length</h2>
        <p>
          Java Edition usernames must be between <strong>3 and 16 characters</strong>. Length matters
          mostly for practical and social reasons: shorter names are faster to type in chat, easier for
          friends to remember, and far more competitive to claim, since there are only 37 possible
          characters (A–Z, 0–9, underscore) per slot — the shorter the name, the fewer combinations
          exist, and the longer they&apos;ve had to get claimed.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Kip", "Zor", "Vye", "Lume", "Fenn", "Skye"].map((name) => (
            <Link
              key={name}
              href={`/minecraft-username-checker?name=${encodeURIComponent(name)}`}
              className="inline-block rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-sm text-slate-800 transition-colors hover:border-emerald-400 hover:text-emerald-700"
            >
              {name}
            </Link>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          Ideas to check, not confirmed as available. For a dedicated experience, try our{" "}
          <Link href={TOOL.threeLetterLink.href} className="text-emerald-600 underline">
            3-Letter
          </Link>{" "}
          and{" "}
          <Link href={TOOL.fourLetterLink.href} className="text-emerald-600 underline">
            4-Letter
          </Link>{" "}
          checkers, or browse the full{" "}
          <Link href="/minecraft-short-usernames" className="text-emerald-600 underline">
            Short Usernames
          </Link>{" "}
          page.
        </p>
      </section>

      {/* How usernames work */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How Do Minecraft Usernames Work?</h2>
        <p>
          Your username is just a display label — the real, permanent identity behind your Minecraft
          account is its <strong>UUID</strong>, an ID that never changes even when you rename yourself.
          That&apos;s why a username can become unavailable (someone else&apos;s account holds it),
          available (no account currently holds it), or previously-used-but-now-free (the account
          behind it renamed) — the UUID underneath stays fixed the whole time. Want to see a specific
          account&apos;s UUID, or find the current username behind one? Use our{" "}
          <Link href={TOOL.uuid.href} className="text-emerald-600 underline">
            UUID Lookup tool
          </Link>
          .
        </p>
        <p>
          This distinction also explains the difference between &ldquo;checking a username&rdquo; and
          &ldquo;checking a player.&rdquo; This tool checks a name&apos;s registration status — taken or
          available — plus, when it&apos;s taken, that account&apos;s current skin. It does not show a
          player&apos;s past usernames, join dates, or activity history.
        </p>
      </section>

      {/* History */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username History</h2>
        <p>
          &ldquo;Username history&rdquo; means the past names an account has used before its current
          one — useful for recognizing a renamed friend, researching a server&apos;s history, or simply
          curiosity about a name you remember. This checker only reports an account&apos;s{" "}
          <strong>current</strong> name; it doesn&apos;t look up past ones, because Mojang discontinued
          public access to that data in 2022 with no official replacement.
        </p>
        <p>
          <Link href={TOOL.history.href} className="font-medium text-emerald-600 underline">
            Check Minecraft Username History
          </Link>{" "}
          explains exactly what history data still exists today (very little) and what genuinely
          doesn&apos;t, instead of guessing or pulling from unverified third-party sources.
        </p>
      </section>

      {/* Skin checker */}
      <section id="skin-checker" className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Skin Checker</h2>
        <p>
          When a username you check turns out to be taken, the result includes that account&apos;s
          current skin, pulled directly from Mojang&apos;s own texture data — the same source the game
          itself reads from, not a third-party render. It shows the skin as it looks right now, with no
          history of past skins, and nothing to show for a name that isn&apos;t registered yet.
        </p>
      </section>

      {/* Examples */}
      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Examples</h2>
          <p className="mt-2 text-slate-600">
            Browse ideas by style, then click any name to check it above. These are name{" "}
            <strong>ideas</strong>, not confirmed-available names — nothing here is verified until you
            check it.
          </p>
        </div>
        {EXAMPLE_GROUPS.map((group) => (
          <div key={group.href}>
            <Link href={group.href} className="font-semibold text-slate-900 hover:text-emerald-600">
              {group.label}
            </Link>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.names.map((name) => (
                <Link
                  key={name}
                  href={`/minecraft-username-checker?name=${encodeURIComponent(name)}`}
                  className="inline-block rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-sm text-slate-800 transition-colors hover:border-emerald-400 hover:text-emerald-700"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      {/* Tools hub */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Tools</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[TOOL.checker, TOOL.history, TOOL.uuid, TOOL.generator, TOOL.color].map((tool) => {
            const isCurrent = tool.href === "/minecraft-username-checker";
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className={`rounded-xl border p-4 transition-colors ${
                  isCurrent
                    ? "border-emerald-400 bg-emerald-50"
                    : "border-slate-200 bg-white hover:border-emerald-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{tool.label}</span>
                  {isCurrent && (
                    <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-medium text-slate-950">
                      You&apos;re here
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-600">{tool.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Need a Minecraft Username?</h2>
        <p className="mt-2 text-slate-600">
          If you don&apos;t have a name yet, generate ideas first, then check them here:{" "}
          <strong>Generate → Choose → Check Availability</strong>.
        </p>
        <Link
          href={TOOL.generator.href}
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* More categories */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">More Username Categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {MORE_CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-600"
            >
              {cat.label}
            </Link>
          ))}
          <Link
            href="/minecraft-username-ideas"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-600"
          >
            All Name Ideas
          </Link>
          <Link
            href={COLOR_CODE_LINKS[0].href}
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-600"
          >
            Minecraft Color Codes
          </Link>
        </div>
      </section>

      <FaqSection faqs={FAQS} />

      {/* Final CTA */}
      <section className="mt-10 border-t border-slate-200 pt-8 text-center">
        <p className="text-slate-600">Ready to check another name?</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="#main-content"
            className="rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
          >
            Back to the Checker
          </a>
          <Link
            href={TOOL.generator.href}
            className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition-colors hover:border-emerald-400 hover:text-emerald-600"
          >
            Generate Ideas Instead
          </Link>
        </div>
      </section>
    </div>
  );
}
