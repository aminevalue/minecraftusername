import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import UsernameCheckerForm from "@/components/UsernameCheckerForm";
import { SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Username History Checker — What Data Is Actually Available",
  description:
    "Look up a Minecraft username's current status and learn exactly what historical username data Mojang still provides in 2026 — and what it discontinued in 2022.",
  alternates: { canonical: `${SITE_URL}/minecraft-username-history-checker` },
};

export default function UsernameHistoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "History Checker", href: "/minecraft-username-history-checker" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
        Minecraft Username History Checker
      </h1>
      <p className="mt-3 text-slate-600">
        Before you search: Mojang shut down its public username-history API in September 2022, and no
        official replacement exists. We won&apos;t show you fake or scraped &ldquo;history&rdquo; data
        to make this page look more complete than it is. Here&apos;s exactly what you can — and
        can&apos;t — find out today.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <p className="font-medium">What this tool actually does</p>
        <p className="mt-1">
          It checks the <strong>current</strong> status of a username (taken or available) using the
          same live Mojang lookup as our{" "}
          <Link href="/minecraft-username-checker" className="underline">
            Username Checker
          </Link>
          . It cannot show past usernames, name-change dates, or account history, because that data is
          no longer publicly accessible from any official source.
        </p>
      </div>

      <div className="mt-6">
        <UsernameCheckerForm initialUsername="" ctaLabel="Check current status" />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          Why username history data is no longer available
        </h2>
        <p>
          Until 2022, Mojang ran a public API that let anyone look up a Java Edition account&apos;s
          past usernames and the dates it changed names. Mojang discontinued this endpoint on
          September 13, 2022, citing player privacy — the ability for anyone to pull a stranger&apos;s
          name-change history without consent was flagged as a privacy risk, not a feature worth
          keeping public.
        </p>
        <p>
          Since then, no official Mojang or Microsoft API has replaced it. Third-party sites that claim
          to show &ldquo;full history&rdquo; are relying on data they scraped or cached before the
          shutdown, or on unofficial community databases — neither of which we can verify as accurate,
          complete, or currently authorized. We&apos;d rather tell you that plainly than present
          numbers we can&apos;t stand behind.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What you can still find out</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Current status</strong> — whether a name is taken or available right now, using
            the tool above.
          </li>
          <li>
            <strong>Your own account&apos;s history</strong> — if it&apos;s your account, you can see
            your own past usernames by logging into your Microsoft/Minecraft account profile at{" "}
            <span className="font-mono text-sm">minecraft.net</span>.
          </li>
          <li>
            <strong>Community records</strong> — screenshots, forum posts, or server logs from before
            2022 may still reference old usernames, though these aren&apos;t official and can&apos;t be
            independently verified by us.
          </li>
          <li>
            <strong>The account&apos;s UUID</strong> — a permanent ID that stays the same across every
            username change, useful for cross-referencing an account elsewhere even without its name
            history. Our{" "}
            <Link href="/minecraft-uuid-lookup" className="text-emerald-600 underline">
              UUID Lookup tool
            </Link>{" "}
            resolves it from a current username, or the current username from a UUID.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How Minecraft name changes work</h2>
        <p>
          Java Edition players can change their username once every 30 days for free through their
          Mojang/Microsoft account settings. When a name changes, the old name enters a short holding
          period before it can be claimed by someone else — which is part of why a name can look
          &ldquo;unavailable&rdquo; even if its previous owner moved on.
        </p>
      </section>

      <FaqSection
        title="Common questions about username history"
        faqs={[
          {
            question: "Can I see anyone's full Minecraft username history?",
            answer:
              "Not through any official source. Mojang removed public access to this data in 2022. Only the account owner can see their own history, by signing into their Minecraft account.",
          },
          {
            question: "Are third-party 'history checker' sites accurate?",
            answer:
              "We can't verify that. Sites showing historical names are working from pre-2022 scrapes or unofficial databases, which may be incomplete, outdated, or wrong. We chose not to build our tool on that foundation.",
          },
          {
            question: "Will Mojang bring back the history API?",
            answer:
              "There's no indication of that. The removal was framed as a permanent privacy measure, not a temporary outage.",
          },
        ]}
      />

      <RelatedLinks
        title="Related tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[1], TOOL_LINKS[3]]}
      />
    </div>
  );
}
