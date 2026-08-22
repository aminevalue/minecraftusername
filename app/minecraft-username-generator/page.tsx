import type { Metadata } from "next";
import GeneratorTool from "@/components/GeneratorTool";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import type { GeneratorTheme } from "@/lib/generator";
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
        ]}
      />

      <RelatedLinks
        title="Related tools & ideas"
        links={[TOOL_LINKS[0], IDEA_CATEGORY_LINKS[0], IDEA_CATEGORY_LINKS[2], TOOL_LINKS[3]]}
      />
    </div>
  );
}
