import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { webPageJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

const PAGE_TITLE = "Aesthetic Minecraft Usernames — Soft, Dreamy & Mysterious Ideas";
const PAGE_DESCRIPTION =
  "Aesthetic Minecraft username ideas across soft, nature-inspired, dark, clean, and dreamy styles, plus what actually gives a name that aesthetic feel and how to pair it with a matching chat color.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/minecraft-aesthetic-usernames` },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/minecraft-aesthetic-usernames`,
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
  { emoji: "🤍", label: "Soft & minimal", names: ["Softlyn", "Palemuse", "Vellure", "Hushira", "Muteworn", "Faintrue", "Sotovale", "Wispren"] },
  { emoji: "🌿", label: "Nature-inspired", names: ["Mossveil", "Willowdrift", "Fernlight", "Duskmeadow", "Petalstream", "Birchhollow", "Driftmoss", "Cloverdusk"] },
  { emoji: "🖤", label: "Dark & mysterious", names: ["Nightloom", "Shadewisp", "Duskraven", "Voidbloom", "Grimhollow", "Emberveil", "Hollowmourn", "Ashenmoor"] },
  { emoji: "🧼", label: "Clean & simple", names: ["Amell", "Corin", "Selwen", "Talise", "Brenlow", "Yvaine", "Osmara", "Delune"] },
  { emoji: "✨", label: "Fantasy & dreamy", names: ["Moonspire", "Starfen", "Dreamveil", "Silvermist", "Moonfable", "Lunareve", "Whisperfae", "Astralune"] },
  { emoji: "🎨", label: "Creative word combinations", names: ["HoneyStatic", "VelvetEcho", "PastelSignal", "DustyHalo", "MutedCompass", "SoftArchive", "HazyLantern", "QuietPixel"] },
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

export default function AestheticUsernamesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageJsonLd({
              name: "Aesthetic Minecraft Usernames",
              description: PAGE_DESCRIPTION,
              url: `${SITE_URL}/minecraft-aesthetic-usernames`,
            })
          ),
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: "Aesthetic Minecraft Names", href: "/minecraft-aesthetic-usernames" },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Aesthetic Minecraft Usernames</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        <p>
          Aesthetic naming leans on mood over meaning — soft consonants, imagery-driven words, and a
          general sense of atmosphere rather than a literal description of anything. It&apos;s less
          about picking a &ldquo;correct&rdquo; word and more about how a name feels when you say it.
        </p>
        <p>
          The groups below split that feeling into a few distinct directions, followed by what
          actually gives a name that quality, how to build your own, and how to pair it with a
          matching chat color once you&apos;ve settled on one.
        </p>
      </div>

      {/* 1. Best aesthetic usernames */}
      <section className="mt-8 space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Best Aesthetic Minecraft Usernames</h2>
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

      {/* 2. What makes a name aesthetic */}
      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Makes a Minecraft Username Feel Aesthetic?</h2>
        <p>
          There&apos;s no formula, but a few traits show up consistently in names people describe
          this way:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Soft sounds</strong> — consonants and vowel combinations that read gently rather than sharply.</li>
          <li><strong>Imagery over meaning</strong> — a word that evokes a scene or feeling more than it literally describes something.</li>
          <li><strong>A consistent mood</strong> — one atmosphere carried through the whole name, not several ideas competing.</li>
          <li><strong>Unhurried pacing</strong> — names that read a little slower tend to feel more atmospheric than punchy, fast ones.</li>
        </ul>
        <p>
          None of this is objective — a name that feels dreamy to one player reads as plain to
          another. Treat the groups above as starting directions, not a checklist.
        </p>
      </section>

      {/* 3. Rules and length */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Aesthetic Usernames and Minecraft&apos;s Format Rules</h2>
        <p>
          Java Edition usernames allow only letters, numbers, and underscores, 3 to 16 characters
          long — no accents, no spaces, no stylized Unicode letters, no matter how much softer they
          might look. That constraint shapes aesthetic naming more than people expect: longer names
          (10&ndash;16 characters) have more room to build a flowing, dreamy feel, while shorter names
          have to earn the same mood in fewer letters, which usually means leaning harder on sound
          than imagery.
        </p>
        <p>
          If you want the aesthetic feel in a shorter package, see{" "}
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
          checkers — just note that extreme brevity and a soft, atmospheric feel can pull against
          each other.
        </p>
      </section>

      {/* 4. How to create your own */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Create Your Own Aesthetic Username</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Start from a mood, not a word: quiet, hazy, overgrown, faded — a feeling you want the name to carry.</li>
          <li>Pick an image tied to that mood: mist, moss, dusk, velvet.</li>
          <li>Soften the spelling: &ldquo;Meadow&rdquo; → <span className="font-mono text-sm">Meadowe</span></li>
          <li>Combine two soft images if one alone feels thin: dusk + haze → <span className="font-mono text-sm">Duskhaze</span></li>
          <li>Say it out loud — if it feels rushed, slow it down; if it&apos;s hard to read, simplify it.</li>
          <li>Check the result before you settle on it — every name above is an idea, not a guarantee.</li>
        </ul>
      </section>

      {/* 5. Common mistakes */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Common Mistakes With Aesthetic Usernames</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li><strong>Stacking too many soft words together.</strong> One clear image usually reads better than three vague ones chained into a single name.</li>
          <li><strong>Relying on accents or stylized letters.</strong> Minecraft&apos;s format doesn&apos;t support them — a name that looks aesthetic written out with special characters won&apos;t register the same way as a real username.</li>
          <li><strong>Choosing something so soft it&apos;s hard to remember.</strong> A mood is only useful if people can actually recall and type the name.</li>
          <li><strong>Assuming a gentle-sounding name is automatically unclaimed.</strong> Popular aesthetic words get claimed quickly precisely because many players search for the same vibe — check before you commit.</li>
        </ul>
      </section>

      {/* 6. Pair with color */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Pair Your Name With a Matching Chat Color</h2>
        <p>
          Aesthetic naming culture often extends beyond the word itself to how the name is displayed
          in chat. Once you&apos;ve picked a name, use the{" "}
          <Link href="/minecraft-username-color-checker" className="text-emerald-600 underline">
            Username Color &amp; Style Checker
          </Link>{" "}
          to preview it in a soft color (light purple, aqua, or gray tend to fit this style) for
          chat, signs, and books — remember this only styles displayed text, not the account name
          itself.
        </p>
      </section>

      {/* 7. Check availability */}
      <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to Check a Username Before Choosing It</h2>
        <p className="mt-3 text-slate-700">
          A name appearing on this page is only an idea — it does not mean it&apos;s currently
          available. Click any chip above, or{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-700 underline">
            check Minecraft username availability
          </Link>{" "}
          directly against a live Mojang lookup before you get attached to one.
        </p>
      </section>

      {/* 8. Username history */}
      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Username History</h2>
        <p>
          If a soft, dreamy name you like turns out to be taken, it&apos;s natural to wonder whether
          it was recently freed by a rename. This checker only reports an account&apos;s{" "}
          <strong>current</strong> name, not its past ones — Mojang discontinued public access to
          username history in 2022 with no official replacement. Our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>{" "}
          explains exactly what&apos;s still available today instead of guessing.
        </p>
      </section>

      {/* 9. Generator CTA */}
      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Generate More Aesthetic Username Ideas</h2>
        <p className="mt-2 text-slate-600">
          <strong>Generate → Choose → Check</strong> — generate fresh combinations, pick one that
          matches the mood you&apos;re after, then check it above.
        </p>
        <Link
          href="/minecraft-username-generator?theme=nature"
          className="mt-4 inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Open the Username Generator
        </Link>
      </section>

      {/* 10. Related categories */}
      <RelatedLinks
        title="Related Username Categories"
        links={[
          CATEGORY_LINK["/minecraft-cool-usernames"],
          CATEGORY_LINK["/minecraft-unique-usernames"],
          CATEGORY_LINK["/minecraft-og-usernames"],
          CATEGORY_LINK["/minecraft-funny-usernames"],
          CATEGORY_LINK["/minecraft-usernames-for-girls"],
        ]}
      />

      {/* 11. Related tools */}
      <RelatedLinks
        title="Related Tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[2], TOOL_LINKS[3], TOOL_LINKS[6]]}
      />

      <FaqSection
        faqs={[
          {
            question: "What makes a Minecraft username feel aesthetic?",
            answer:
              "Soft-sounding consonants, imagery over literal meaning, and one consistent mood carried through the whole name rather than several ideas stacked together. It's subjective, not a fixed formula.",
          },
          {
            question: "What are good aesthetic Minecraft usernames?",
            answer:
              "It depends on the specific mood you want — browse the groups above (soft, nature-inspired, dark, clean, fantasy, creative combinations) and click any name to check it.",
          },
          {
            question: "How do I create my own aesthetic username?",
            answer:
              "Start from a mood rather than a word, pick an image tied to it, soften the spelling if needed, say it out loud to test the pacing, then check the result.",
          },
          {
            question: "Does username length affect how aesthetic a name feels?",
            answer:
              "Often, yes — longer names (10-16 characters) have more room to build a flowing feel, while short names have to carry the same mood in fewer letters, usually by leaning on sound rather than imagery.",
          },
          {
            question: "Are aesthetic usernames available to claim?",
            answer:
              "Appearing on this page never means a name is available — every example here is an idea to check, not a verified result. Popular aesthetic words in particular get claimed quickly since many players search for the same vibe.",
          },
          {
            question: "How do I check if an aesthetic username is available?",
            answer:
              "Click any name above, or use the Username Checker directly — it runs a live lookup against Mojang's account data rather than a cached list.",
          },
          {
            question: "Can I see if an aesthetic name I like was recently freed by a rename?",
            answer:
              "Not with certainty. The checker shows an account's current status, not its history — Mojang discontinued public access to username history in 2022. See the Username History Checker for exactly what's still available.",
          },
          {
            question: "Can I change my Minecraft username if I pick something I later dislike?",
            answer:
              "Yes, on Java Edition, once every 30 days for free through your account profile at minecraft.net. Bedrock Edition uses your Xbox gamertag instead, changed via Xbox account settings.",
          },
        ]}
      />
    </div>
  );
}
