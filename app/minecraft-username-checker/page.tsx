import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import UsernameCheckerForm from "@/components/UsernameCheckerForm";
import { IDEA_CATEGORY_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Username Checker — Is a Name Taken or Available?",
  description:
    "Check whether a Minecraft username is currently taken or available using a live lookup against Mojang's account data. Instant results, no account required.",
  alternates: { canonical: `${SITE_URL}/minecraft-username-checker` },
};

export default async function UsernameCheckerPage(props: PageProps<"/minecraft-username-checker">) {
  const params = await props.searchParams;
  const initial = typeof params.name === "string" ? params.name : "";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Username Checker", href: "/minecraft-username-checker" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Username Checker</h1>
      <p className="mt-3 text-slate-600">
        Enter a Minecraft username below to check whether it&apos;s currently taken by a Java Edition
        account. The result comes from a live lookup, not a guess or a cached list.
      </p>

      <div className="mt-6">
        <UsernameCheckerForm initialUsername={initial} />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How this tool works</h2>
        <p>
          When you submit a name, our server asks Mojang&apos;s public account-lookup endpoint whether
          any Java Edition account currently holds that exact username. If an account is found, the
          name is taken. If none is found, it&apos;s reported as available. We never invent or cache
          fake results — every check is a live request, and errors or rate limits are shown as exactly
          that, not disguised as an answer.
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

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What &ldquo;available&rdquo; really means</h2>
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

      <FaqSection
        faqs={[
          {
            question: "Is this an official Mojang or Microsoft tool?",
            answer:
              "No. Minecraft Username is an independent, fan-made toolset. It is not affiliated with, endorsed by, or operated by Mojang Studios or Microsoft. It uses Mojang's public lookup data to report results.",
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
            question: "Why did I get a rate-limit or error message?",
            answer:
              "Mojang's lookup service occasionally throttles or has downtime. Rather than guess, we show you the error or rate-limit state directly — just wait a moment and try again.",
          },
        ]}
      />

      <RelatedLinks
        title="Related tools"
        links={[
          TOOL_LINKS[1],
          TOOL_LINKS[2],
          TOOL_LINKS[4],
          TOOL_LINKS[5],
        ]}
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
