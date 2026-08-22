import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import UsernameCheckerForm from "@/components/UsernameCheckerForm";
import { softwareApplicationJsonLd } from "@/lib/schema";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Username Checker – Check Minecraft Names",
  description:
    "Check if a Minecraft username is taken or available with a live Mojang lookup. See the account's current skin, learn the username rules, and find out how to change your own name.",
  alternates: { canonical: `${SITE_URL}/minecraft-username-checker` },
};

export default async function UsernameCheckerPage(props: PageProps<"/minecraft-username-checker">) {
  const params = await props.searchParams;
  const initial = typeof params.name === "string" ? params.name : "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
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
        Enter a Minecraft username below to check whether it&apos;s currently taken by a Java Edition
        account. The result comes from a live lookup, not a guess or a cached list.
      </p>

      <div className="mt-6">
        <UsernameCheckerForm initialUsername={initial} showSkin />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Checker</h2>
        <p>
          Most name-checker pages either fake a result or bury the real mechanics behind vague
          copy. This one does neither: every check above is a live request to Mojang&apos;s own
          account-lookup service, the same source Minecraft itself relies on, so what you see is
          what&apos;s actually true right now — including the account&apos;s current skin when a
          name is taken, not just a plain yes/no.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Check a Minecraft Username</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Type the exact username you want to check into the box above (3–16 characters).</li>
          <li>Click &ldquo;Check availability.&rdquo; The tool sends a live request to Mojang — nothing is looked up from a cached list.</li>
          <li>
            Read the result: a taken name shows the account&apos;s current skin and exact spelling; an
            available name means no Java account currently holds it (see what that really means below).
          </li>
        </ol>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Availability Checker</h2>
        <p>
          An &ldquo;available&rdquo; result is a snapshot of the moment you checked — it is not a
          reservation and nothing on this site holds the name for you. To actually use it, you (or
          someone else) would still need to claim it through a Minecraft/Mojang account, and free name
          changes are limited to once every 30 days per account. Someone else can claim an available
          name at any time, including seconds after you check it.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          Why a name might show as unavailable
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>An active account is already using it, even if that account rarely logs in.</li>
          <li>The name was recently freed by a name change, but Mojang applies a short hold before it&apos;s reusable.</li>
          <li>Mojang blocks certain words (offensive terms, impersonation of Mojang/Microsoft staff, etc.) regardless of availability.</li>
          <li>The format itself is invalid — too short, too long, or containing unsupported characters.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Name Checker</h2>
        <p>
          &ldquo;Checking a username&rdquo; and &ldquo;checking a player&rdquo; are two different
          things, and it&apos;s worth being clear about which one this tool does. This page checks a
          name&apos;s <strong>registration status</strong> — taken or available — plus, when it&apos;s
          taken, the account&apos;s current skin (see the{" "}
          <Link href="#skin-checker" className="text-emerald-600 underline">
            skin checker section
          </Link>{" "}
          below). It does not show a player&apos;s past usernames, join dates, or activity — for what
          little of that is still publicly available, see our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>
          , which explains exactly what data Mojang still exposes since 2022.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Can You Change Your Minecraft Username?</h2>
        <p>
          Yes. On Java Edition, sign into your Microsoft/Minecraft account at{" "}
          <span className="font-mono text-sm">minecraft.net</span>, open your profile, and enter a new
          username — as long as it passes the same format and blocked-word rules any name has to. On
          Bedrock Edition, your in-game name is your Xbox gamertag, changed instead through your Xbox
          profile settings, which follows Microsoft&apos;s own gamertag rules rather than Mojang&apos;s.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          How Often Can You Change Your Minecraft Username?
        </h2>
        <p>
          Java Edition allows one free username change every 30 days per account. There&apos;s no way
          to speed that cooldown up, and it applies per account regardless of how long you&apos;ve held
          your current name.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft username rules</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Java Edition usernames must be 3–16 characters long.</li>
          <li>Only letters (A–Z), numbers (0–9), and underscores (_) are allowed — no spaces or symbols.</li>
          <li>
            Bedrock Edition uses a separate gamertag system tied to your Microsoft/Xbox account, which
            follows different rules and isn&apos;t covered by this checker.
          </li>
          <li>Names are not case-sensitive for uniqueness — &ldquo;Steve&rdquo; and &ldquo;steve&rdquo; are the same name.</li>
        </ul>
      </section>

      <section id="skin-checker" className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Skin Checker</h2>
        <p>
          When a username you check turns out to be taken, the result includes that account&apos;s
          current skin, pulled directly from Mojang&apos;s own texture data — the same source the game
          itself reads from, not a third-party render. It shows the skin as it looks right now; it
          doesn&apos;t keep a history of past skins, and there&apos;s nothing to show for a name that
          isn&apos;t registered to an account yet.
        </p>
      </section>

      <FaqSection
        faqs={[
          {
            question: "Is this an official Mojang or Microsoft tool?",
            answer:
              "No. Minecraft Username is an independent, fan-made toolset. It is not affiliated with, endorsed by, or operated by Mojang Studios or Microsoft. It uses Mojang's public lookup data to report results.",
          },
          {
            question: "What's the difference between a name checker and a username checker?",
            answer:
              "On this site, they're the same tool — both terms describe checking whether a Minecraft name is currently registered to an account. Some other sites use 'name checker' to mean player-history lookups instead, which this tool doesn't do (see our History Checker for that).",
          },
          {
            question: "Can this tool reserve a username for me?",
            answer:
              "No. There is no way to reserve a Minecraft username in advance. Availability can change at any moment, and claiming a name requires changing it on your actual Minecraft/Mojang account.",
          },
          {
            question: "Does this check Bedrock Edition gamertags?",
            answer:
              "No. This checker only covers Java Edition account usernames. Bedrock uses Xbox/Microsoft gamertags, which are managed separately and aren't covered by the API this tool uses.",
          },
          {
            question: "How do I change my Minecraft username?",
            answer:
              "On Java Edition, sign in at minecraft.net and update your profile name, subject to the same format and blocked-word rules as any username. Bedrock uses your Xbox gamertag instead, changed through Xbox account settings.",
          },
          {
            question: "How often can I change my Minecraft username?",
            answer:
              "Once every 30 days for free on Java Edition. The cooldown applies per account and can't be shortened.",
          },
          {
            question: "Can I see a Minecraft account's skin without knowing if the name is taken?",
            answer:
              "The skin preview only appears for names that are actually taken, since it comes from that account's real texture data — there's nothing to preview for an unregistered name.",
          },
          {
            question: "Why did I get a rate-limit or error message?",
            answer:
              "Mojang's lookup service occasionally throttles or has downtime. Rather than guess, we show you the error or rate-limit state directly — just wait a moment and try again.",
          },
        ]}
      />

      <RelatedLinks
        title="Related tools"
        links={[TOOL_LINKS[3], TOOL_LINKS[1], TOOL_LINKS[2], TOOL_LINKS[4]]}
      />

      <section className="mt-8 text-slate-700">
        <p>
          Looking for inspiration instead?{" "}
          <Link href="/minecraft-username-ideas" className="font-medium text-emerald-600 underline">
            Browse our full Minecraft name idea library
          </Link>{" "}
          organized by style, from{" "}
          <Link href={IDEA_CATEGORY_LINKS[0].href} className="text-emerald-600 underline">
            cool names
          </Link>{" "}
          to{" "}
          <Link href={IDEA_CATEGORY_LINKS[9].href} className="text-emerald-600 underline">
            tryhard names
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
