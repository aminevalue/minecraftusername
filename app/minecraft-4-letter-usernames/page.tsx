import type { Metadata } from "next";
import UsernameCheckerForm from "@/components/UsernameCheckerForm";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "4 Letter Minecraft Usernames — Checker & Guide",
  description:
    "Check the availability of 4-letter Minecraft usernames and learn why short names stay in demand, plus realistic tips for finding one that's actually open.",
  alternates: { canonical: `${SITE_URL}/minecraft-4-letter-usernames` },
};

export default function FourLetterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "4-Letter Usernames", href: "/minecraft-4-letter-usernames" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">4-Letter Minecraft Usernames</h1>
      <p className="mt-3 text-slate-600">
        Four-letter names give you more room than 3-letter names while staying short and clean. Check
        one below.
      </p>

      <div className="mt-6">
        <UsernameCheckerForm exactLength={4} />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How much room does 4 letters give you?</h2>
        <p>
          With 37 allowed characters (A–Z, 0–9, and underscore), there are 37⁴ — about 1.87 million —
          possible 4-character combinations. That&apos;s roughly 37 times more room than 3-letter names,
          which means genuinely word-like or pronounceable 4-letter names are still occasionally
          available, even though the pool has been actively claimed for well over a decade.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Tips for finding one</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Try initials, short nicknames, or abbreviations that mean something to you personally.</li>
          <li>Mix in a number or underscore if a pure-letter combination is taken.</li>
          <li>
            Use the{" "}
            <a href="/minecraft-username-generator" className="text-emerald-600 underline">
              generator
            </a>{" "}
            with &ldquo;short names only&rdquo; enabled for fresh 4-letter-style suggestions to check.
          </li>
          <li>Check variations quickly rather than fixating on one exact combination.</li>
        </ul>
      </section>

      <FaqSection
        faqs={[
          {
            question: "Are 4-letter names easier to get than 3-letter names?",
            answer:
              "Generally yes — there are far more possible 4-character combinations, so more genuinely usable names remain unclaimed compared to 3-letter names.",
          },
          {
            question: "Does a shorter username affect performance or permissions in-game?",
            answer:
              "No. Username length has no effect on gameplay mechanics, permissions, or server performance.",
          },
        ]}
      />

      <RelatedLinks links={[TOOL_LINKS[0], TOOL_LINKS[4], TOOL_LINKS[3], TOOL_LINKS[1]]} />
    </div>
  );
}
