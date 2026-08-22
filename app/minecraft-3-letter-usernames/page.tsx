import type { Metadata } from "next";
import UsernameCheckerForm from "@/components/UsernameCheckerForm";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "3 Letter Minecraft Usernames — Checker & Guide",
  description:
    "Check the availability of 3-letter Minecraft usernames and learn why they're the rarest, most sought-after names in the game.",
  alternates: { canonical: `${SITE_URL}/minecraft-3-letter-usernames` },
};

export default function ThreeLetterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "3-Letter Usernames", href: "/minecraft-3-letter-usernames" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">3-Letter Minecraft Usernames</h1>
      <p className="mt-3 text-slate-600">
        Three-letter usernames are the shortest possible on Java Edition and among the most competitive
        names in the game. Check one below.
      </p>

      <div className="mt-6">
        <UsernameCheckerForm exactLength={3} />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Why 3-letter names are so desirable</h2>
        <p>
          Minecraft usernames can use letters, numbers, and underscores — 37 possible characters — so
          there are only 37³ (50,653) possible 3-character combinations in total, and that pool has
          existed since Minecraft launched in 2009. Short names are faster to type, easier to
          remember, and often signal that an account is old — all of which makes them attractive on
          active servers and in trading communities, even though owning one has no in-game gameplay
          benefit.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Realistic expectations</h2>
        <p>
          The overwhelming majority of 3-letter combinations have been registered for years. Most
          &ldquo;available&rdquo; 3-letter results you&apos;ll see are unusual letter combinations that
          are hard to read as words, or names sitting in the brief hold period after a name change.
          Genuinely clean, word-like 3-letter names are essentially fully claimed at this point —
          checking is still worthwhile, but don&apos;t expect common syllables to be open.
        </p>
      </section>

      <FaqSection
        faqs={[
          {
            question: "Are any good 3-letter names still available?",
            answer:
              "Occasionally, when an account is renamed or a name is released. Availability changes constantly, so the only reliable way to know is to check a specific name directly.",
          },
          {
            question: "Do 3-letter names give any gameplay advantage?",
            answer:
              "No. A username's length has no effect on gameplay, stats, or permissions — the appeal is purely aesthetic and social.",
          },
        ]}
      />

      <RelatedLinks links={[TOOL_LINKS[0], TOOL_LINKS[5], TOOL_LINKS[3], TOOL_LINKS[1]]} />
    </div>
  );
}
