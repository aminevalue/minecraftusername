import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Unique Minecraft Usernames — Ideas & Creation Guide";
const PAGE_DESCRIPTION =
  "Unique Minecraft username ideas that dodge the most common naming patterns, how the site's format rules affect uniqueness, and a practical process for building a name that's actually yours.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-unique-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-unique-usernames`,
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
  { emoji: "🌀", label: "Invented words", names: ["Vandrel", "Ozmerith", "Kelvane", "Thassik", "Ombrelle", "Nyxwren", "Farlune", "Iskavar"] },
  { emoji: "🔗", label: "Unexpected pairings", names: ["PaperFalcon", "QuietTornado", "VelvetAsteroid", "SilentTrombone", "LazyComet", "ForgottenLantern", "PoliteHurricane", "SlowMotionRaven"] },
  { emoji: "⚡", label: "Short & distinctive", names: ["Isby", "Quen", "Thess", "Ambo", "Kelu", "Fyra", "Onse", "Yrix"] },
  { emoji: "🧑", label: "Personal & nickname-style", names: ["Marnie_V", "Coby_Rey", "Talven_J", "Sable_Wren", "Odric_M", "Fenna_K", "Brix_Oren", "Junie_Vale"] },
  { emoji: "📖", label: "Rare-looking real words", names: ["Petrichor", "Selvedge", "Quillon", "Isthmus", "Thicket", "Verglas", "Bellwort", "Sennet"] },
  { emoji: "🧬", label: "Cross-genre unique", names: ["Frostcircuit", "EmberArchive", "MossReactor", "DuskProtocol", "GlacierByte", "VelvetVortex", "AshTelemetry", "BloomStatic"] },
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

export default function UniqueUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Unique Minecraft Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-unique-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Unique Minecraft Names", href: "/minecraft-unique-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Unique Minecraft Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          &ldquo;Unique&rdquo; is less a style than a goal: the aim is to dodge the patterns
          everyone else defaults to — a first name plus a birth year, a single popular noun, an
          obvious pun — in favor of something that reads as deliberately yours. That&apos;s a
          different job than sounding cool or aesthetic, and it takes a slightly different
          approach to get there.
        </p>
        <p>
          Below: ideas organized by how they achieve uniqueness, how Minecraft&apos;s own format
          rules affect what&apos;s realistically available, a process for building your own, and
          the mistakes that quietly undo a name that was supposed to be one-of-a-kind.
        </p>
      </div>

      {/* 1. Best unique usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Unique Minecraft Username Ideas by Style</h2>
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

      {/* 2. What makes a name unique */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Minecraft Username Actually Unique?</h2>
        <p>
          Most names that feel unique to their creator aren&apos;t actually rare — they just
          haven&apos;t been searched for. A first-name-plus-number pattern, a single dictionary
          word, or a popular meme reference all feel personal in the moment but follow a template
          thousands of other players reach for independently.
        </p>
        <p>
          Two things reliably produce a name that&apos;s genuinely distinctive: inventing a word
          that doesn&apos;t exist outside your own choice (nothing to independently collide with),
          or combining two ordinary concepts in a pairing nobody else would think to make. Before
          settling on either, search the exact name on YouTube, Discord, and a general web search
          — a name can feel original to you and still belong to an existing streamer or community
          member.
        </p>
      </section>

      {/* 3. Rules and length */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How Minecraft&apos;s Username Rules Shape Uniqueness</h2>
        <p>
          Java Edition usernames are 3 to 16 characters, using only letters, numbers, and
          underscores — no spaces, no accents, no other symbols. That constrained alphabet (37
          possible characters per slot) is exactly why length matters for uniqueness: a 3-letter
          name has only 37³ (50,653) possible combinations, a 4-letter name has 37⁴ (about 1.87
          million), and both pools have been claimed against for well over a decade. Longer,
          invented names have vastly more room, which is part of why they&apos;re more reliably
          available than a short, clean, real word.
        </p>
        <p>
          If short length specifically is the goal alongside uniqueness, see{" "}
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
          checkers — just note that short and unique pull in slightly different directions, since
          shortness shrinks the available pool while uniqueness benefits from more room to work
          with.
        </p>
      </section>

      {/* 4. How usernames work + history */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How Minecraft Usernames Actually Work</h2>
        <p>
          A username is just a display label — the permanent identity behind a Minecraft account
          is its <strong>UUID</strong>, which never changes even when the username does. That&apos;s
          why a name can be unavailable today (an active account holds it), available (nothing
          currently holds it), or previously-used-but-now-free (the account behind it renamed) —
          the account&apos;s underlying identity stays fixed the whole time. Want to see a specific
          account&apos;s UUID? Use our{" "}
          <Link href="/minecraft-uuid-lookup" className="text-emerald-600 underline">
            UUID Lookup tool
          </Link>
          .
        </p>
        <p>
          If you&apos;re wondering whether you can see a name&apos;s <em>previous</em> owners or
          past usernames: Mojang discontinued public access to that history data in September
          2022, with no official replacement. Our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>{" "}
          explains exactly what&apos;s still available today (very little) rather than guessing or
          pulling from unverified third-party sources.
        </p>
      </section>

      {/* 5. How to create your own */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create Your Own Unique Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Start from a concept, not a word: a feeling, an object, a small detail you like — not &ldquo;cool&rdquo; or &ldquo;gamer.&rdquo;</li>
          <li>Invent a variation: &ldquo;Wanderer&rdquo; → <span className="font-mono text-sm">Wandrel</span></li>
          <li>Or pair two unrelated ideas: quiet + comet → <span className="font-mono text-sm">QuietComet</span></li>
          <li>Search the exact result on YouTube, Discord, and the web before you commit to it.</li>
          <li>Check it here before you get attached to it — every name on this page is an idea, not a guarantee.</li>
        </ul>
      </section>

      {/* 6. Common mistakes */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Common Mistakes When Creating a Unique Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Misspelling a common word and assuming that makes it rare.</strong> Dropping a vowel from a popular word is one of the first tricks everyone tries, so the misspelling is often just as claimed as the original.</li>
          <li><strong>Copying a streamer or friend&apos;s name with a number tacked on.</strong> This reads as derivative rather than original, and it&apos;s exactly the pattern most likely to already be taken by someone else doing the same thing.</li>
          <li><strong>Choosing something so obscure you forget it yourself.</strong> Uniqueness that costs you memorability isn&apos;t a win — you still have to type and recognize the name.</li>
          <li><strong>Assuming a name is unclaimed because it feels personal.</strong> Feeling original and being unclaimed are unrelated — only a live check tells you the second one.</li>
          <li><strong>Overloading a name with numbers or underscores to force it to be different.</strong> This often makes a name harder to read and type without actually making it more distinctive.</li>
        </ul>
      </section>

      {/* 7. Check availability */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to Check Whether a Username Is Available</h2>
        <p className="mt-3 text-slate-700">
          Nothing on this page is pre-verified — click any name above, or{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          directly against a live Mojang lookup. A result is a snapshot at the moment you check,
          not a reservation.
        </p>
      </section>

      {/* 8. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More Unique Username Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — generate fresh combinations, pick one that
          feels genuinely yours, then check it above.
        </p>
        <Link
          href="/minecraft-username-generator?theme=mythology"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 9. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-aesthetic-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
          CATEGORY_LINK["/minecraft-pvp-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
          CATEGORY_LINK["/minecraft-short-usernames"],
        ]}
      />

      {/* 10. Related tools */}
      <RelatedLinks
        title="Related Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[2], TOOL_LINKS[6], TOOL_LINKS[3]]}
      />

      <FaqSection
        faqs={[
          {
            question: "What makes a Minecraft username actually unique?",
            answer:
              "Avoiding patterns other players reach for independently — a first name plus a number, a single popular noun, an obvious pun. Invented words and unexpected word pairings hold up best, since there's nothing else to independently collide with.",
          },
          {
            question: "Are invented or made-up names better for uniqueness?",
            answer:
              "Generally yes, since an invented word has no existing competition the way a real word does. The tradeoff is memorability — a real word or clean pairing is easier for friends to recall and spell correctly.",
          },
          {
            question: "Does a short username count as unique?",
            answer:
              "Not by itself — length and uniqueness are different things. Short names have fewer possible combinations, which actually works against uniqueness, even though they read as distinctive in other ways.",
          },
          {
            question: "How do I check if my chosen username is actually available?",
            answer:
              "Type it into the Username Checker for a live Mojang lookup. Nothing on this page or anywhere else on the site is pre-verified as available.",
          },
          {
            question: "Can I see if someone already has the exact name I want?",
            answer:
              "The Username Checker tells you whether an active account currently holds it. It won't show you that account's history or past names — Mojang discontinued public access to username history in 2022.",
          },
          {
            question: "What common mistakes make a 'unique' name not actually unique?",
            answer:
              "Misspelling a common word (others try the same misspelling), copying a streamer's name with a number added, and assuming a name is unclaimed just because it feels personal to you.",
          },
          {
            question: "How long can a Minecraft username be?",
            answer: "Between 3 and 16 characters on Java Edition, using only letters, numbers, and underscores.",
          },
          {
            question: "Can I change my Minecraft username later if I pick something I don't like?",
            answer:
              "Yes, on Java Edition, once every 30 days for free through your account profile at minecraft.net. Bedrock Edition uses your Xbox gamertag instead, changed via Xbox account settings.",
          },
        ]}
      />
    </div>
  );
}
