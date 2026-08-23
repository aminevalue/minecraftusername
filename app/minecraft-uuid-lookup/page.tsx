import type { Metadata } from "next";
import Link from "next/link";
import UuidLookupTool from "@/components/UuidLookupTool";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { softwareApplicationJsonLd } from "@/lib/schema";
import { SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft UUID Lookup – Find a Player's UUID or Username",
  description:
    "Look up a Minecraft account's UUID from a username, or find the username behind a UUID. Live Mojang data, dashed and undashed formats, and a current skin preview.",
  alternates: { canonical: `${SITE_URL}/minecraft-uuid-lookup` },
};

export default function UuidLookupPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: "Minecraft UUID Lookup",
              description:
                "Free tool to look up a Minecraft account's UUID from a username, or find the username behind a UUID.",
              url: `${SITE_URL}/minecraft-uuid-lookup`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "UUID Lookup", href: "/minecraft-uuid-lookup" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft UUID Lookup</h1>
      <p className="mt-3 text-slate-600">
        Enter a Minecraft username to find its UUID, or a UUID to find the username behind it —
        both directions, from live Mojang data.
      </p>

      <div className="mt-6">
        <UuidLookupTool />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft UUID Checker</h2>
        <p>
          Every Java Edition Minecraft account has a UUID — a permanent ID that never changes, even
          across username changes. This tool resolves it either way: give it a username to get the
          account&apos;s UUID, or give it a UUID to get the username currently attached to it.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Is a Minecraft UUID?</h2>
        <p>
          A UUID (Universally Unique Identifier) is a 32-character hex ID Mojang assigns to a Java
          Edition account when it&apos;s created. Real, Mojang-issued account UUIDs are randomly
          generated (technically &ldquo;version 4&rdquo;) and stay fixed for the life of the account
          — it&apos;s the actual permanent identity behind a username, which is just a display label
          that can change.
        </p>
        <p>
          There&apos;s a common source of confusion worth flagging: servers running in
          &ldquo;offline mode&rdquo; (no Mojang account verification, common on private or
          non-premium setups) generate a <em>different</em> kind of UUID locally, derived by hashing{" "}
          <code className="font-mono text-sm">OfflinePlayer:&lt;username&gt;</code>. It&apos;s
          deterministic — the same username always produces the same offline UUID — but it has
          nothing to do with any real Mojang account and only means something on that one server.
          If a UUID you look up here doesn&apos;t match one you got from an offline-mode server,
          this is almost always why.
        </p>
        <p>
          Bedrock Edition doesn&apos;t use this UUID system at all. Bedrock players are identified by
          their Xbox Live XUID, a Microsoft-issued identifier with no official public lookup — this
          tool, like Mojang&apos;s own API, only covers Java Edition accounts. Crossplay proxies like
          Geyser/Floodgate construct a synthetic UUID that embeds a player&apos;s XUID so Java-side
          plugins can handle Bedrock players, but that&apos;s a proxy workaround, not an official
          Mojang or Microsoft identifier.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Find Your Minecraft UUID</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Enter your username in the tool above.</li>
          <li>Click &ldquo;Look up.&rdquo; This resolves it via the same live lookup behind our{" "}
            <Link href="/minecraft-username-checker" className="text-emerald-600 underline">
              Username Checker
            </Link>
            .
          </li>
          <li>Copy either the dashed or undashed format, depending on what you need it for.</li>
        </ol>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          Minecraft Player Name / UUID Lookup
        </h2>
        <p>
          Going the other direction — from a UUID to the username currently attached to it — is
          useful whenever you have a UUID but not a name: ban lists, server logs, plugin data, and
          API responses commonly reference players by UUID rather than username, since a UUID never
          changes but a username can. Paste the UUID (dashes optional) into the tool above and it
          resolves the current username the same way.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Dashed vs Undashed UUID Format</h2>
        <p>
          Mojang&apos;s own API returns UUIDs without dashes (32 continuous characters), but the
          standard UUID format most tools, plugins, and commands expect uses dashes in an 8-4-4-4-12
          pattern. Both forms represent the exact same ID — this tool shows both, ready to copy,
          since Mojang&apos;s lookup accepts either format as input too.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft UUID and Username History</h2>
        <p>
          This tool shows the <strong>current</strong> username tied to a UUID — it doesn&apos;t
          show past usernames an account has used. Mojang discontinued public access to that
          historical data in 2022 with no official replacement; our{" "}
          <Link href="/minecraft-username-history-checker" className="text-emerald-600 underline">
            Username History Checker
          </Link>{" "}
          explains exactly what&apos;s still available and why.
        </p>
      </section>

      <FaqSection
        faqs={[
          {
            question: "How do I find my Minecraft UUID?",
            answer:
              "Enter your username in the tool above. It resolves your account's UUID via a live Mojang lookup, shown in both dashed and undashed formats.",
          },
          {
            question: "Can I look up a username from a UUID?",
            answer:
              "Yes — enter the UUID (dashes optional) instead of a username, and the tool resolves the current username attached to that account.",
          },
          {
            question: "Why does my offline-mode server show a different UUID?",
            answer:
              "Offline-mode servers generate their own local UUID from a hash of your username rather than using your real Mojang account UUID. It's consistent on that server, but it isn't your actual account's UUID and won't match what this tool shows.",
          },
          {
            question: "Does this work for Bedrock Edition?",
            answer:
              "No. Bedrock Edition doesn't use Mojang UUIDs at all — players are identified by an Xbox Live XUID instead, which has no official public lookup. This tool only covers Java Edition accounts, the same limitation as Mojang's own API.",
          },
          {
            question: "Does a Minecraft UUID change if I rename my account?",
            answer:
              "No. The UUID is permanent for the life of the account — only the username changes. That's exactly why UUIDs are used in places (server logs, ban lists, plugin data) where a stable reference matters more than the current display name.",
          },
          {
            question: "What's the difference between this and the Username Checker?",
            answer:
              "The Username Checker tells you whether a name is taken or available. This tool is about identity — resolving the UUID behind a username, or the username behind a UUID, plus a current skin preview.",
          },
        ]}
      />

      <RelatedLinks
        title="Related tools"
        links={[TOOL_LINKS[0], TOOL_LINKS[2], TOOL_LINKS[3]]}
      />
    </div>
  );
}
