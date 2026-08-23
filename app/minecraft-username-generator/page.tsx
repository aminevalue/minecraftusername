import type { Metadata } from "next";
import GeneratorTool from "@/components/GeneratorTool";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import type { GeneratorTheme } from "@/lib/generator";
import { THEME_LABELS, STYLE_LABELS } from "@/lib/generator";
import { softwareApplicationJsonLd } from "@/lib/schema";
import { SITE_URL, TOOL_LINKS, IDEA_CATEGORY_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Username Generator — Cool, Short & OG Name Ideas",
  description:
    "Generate Minecraft username ideas by theme, style, and length. Filter by fantasy, tech, nature, and more, then check any name's real availability instantly.",
  alternates: { canonical: `${SITE_URL}/minecraft-username-generator` },
};

const VALID_THEMES = ["fantasy", "nature", "tech", "mythology", "animals", "food", "space", "dark"];

export default async function GeneratorPage(props: PageProps<"/minecraft-username-generator">) {
  const params = await props.searchParams;
  const themeParam = typeof params.theme === "string" ? params.theme : undefined;
  const initialTheme = VALID_THEMES.includes(themeParam ?? "") ? (themeParam as GeneratorTheme) : undefined;

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: "Minecraft Username Generator",
              description:
                "Free tool to generate Minecraft username ideas by theme, style, and length, with a direct link to check each one's real availability.",
              url: `${SITE_URL}/minecraft-username-generator`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Username Generator", href: "/minecraft-username-generator" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Username Generator</h1>
      <p className="mt-3 text-slate-600">
        Pick a theme and style, then generate combinations built from curated word lists — not random
        letter spam. Every result links straight to a real availability check.
      </p>

      <div className="mt-6">
        <GeneratorTool initialTheme={initialTheme} />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How the generator works</h2>
        <p>
          Each theme (fantasy, nature, tech, mythology, animals, food, space, dark) draws from its own
          hand-picked word list. Depending on the style you choose, the generator combines those words
          with prefixes, suffixes, or number patterns that match that style&apos;s feel — a &ldquo;tryhard&rdquo;
          style leans on sweaty gaming conventions like <code className="font-mono text-sm">xX</code> and{" "}
          <code className="font-mono text-sm">TTV</code>, while &ldquo;aesthetic&rdquo; leans softer.
        </p>
        <p>
          Generated names are <strong>suggestions only</strong>. We never claim a generated name is
          available — click &ldquo;Check&rdquo; next to any result to run it through our live{" "}
          Username Checker.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Themes and Styles</h2>
        <p>
          Themes decide the vocabulary a name draws from; styles decide how those words get combined.
          Picking both narrows results fast instead of scrolling through unrelated suggestions:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Themes:</strong> {Object.values(THEME_LABELS).join(", ")} — each pulls from its own
            hand-picked word list, not a shared generic pool.
          </li>
          <li>
            <strong>Styles:</strong> {Object.values(STYLE_LABELS).join(", ")} — these control the
            prefixes, suffixes, and number patterns layered on top (e.g. Tryhard leans on{" "}
            <code className="font-mono text-sm">xX</code>/<code className="font-mono text-sm">TTV</code>
            -style conventions, OG stays plain and simple).
          </li>
        </ul>
      </section>

      <FaqSection
        faqs={[
          {
            question: "Are the generated names guaranteed to be available?",
            answer:
              "No. The generator combines curated words into new usernames, but it doesn't check Mojang's data automatically. Always click 'Check' to verify a specific name before you try to claim it.",
          },
          {
            question: "Can I generate short names with the generator?",
            answer:
              "Yes — toggle 'Short names only' to bias results toward shorter combinations. For a dedicated experience, try our 3-Letter and 4-Letter username checkers.",
          },
          {
            question: "Why do some generated names get rejected as invalid?",
            answer:
              "Minecraft only allows letters, numbers, and underscores, 3–16 characters long. Our generator filters to these rules automatically, so every result you see is a valid format.",
          },
          {
            question: "What's the difference between this generator and the name ideas library?",
            answer:
              "The generator creates fresh, randomized combinations on demand from curated word lists. The Name Ideas library is a set of hand-curated, browsable lists organized by category (cool, funny, short, and more) for when you'd rather scroll than generate.",
          },
          {
            question: "Do generated names work for Bedrock Edition too?",
            answer:
              "The names themselves are just text and follow the same basic format rules on both editions. Checking availability, however, only works for Java Edition accounts — Bedrock uses Xbox gamertags, which aren't covered by our checker.",
          },
        ]}
      />

      <RelatedLinks
        title="Related tools & ideas"
        links={[TOOL_LINKS[0], IDEA_CATEGORY_LINKS[0], IDEA_CATEGORY_LINKS[2], TOOL_LINKS[3]]}
      />
    </div>
  );
}
