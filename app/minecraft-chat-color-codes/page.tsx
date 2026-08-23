import type { Metadata } from "next";
import Link from "next/link";
import ColorStyleTool from "@/components/ColorStyleTool";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { softwareApplicationJsonLd } from "@/lib/schema";
import { COLOR_CODE_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Chat Color Codes — Do They Actually Work?",
  description:
    "Minecraft chat color codes don't work the way most guides claim. Here's what really happens when you type them, and how servers actually add colored chat.",
  alternates: { canonical: `${SITE_URL}/minecraft-chat-color-codes` },
};

export default function ChatColorCodesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: "Minecraft Chat Color Codes Preview",
              description:
                "Free preview and copy tool for Minecraft chat color and formatting codes.",
              url: `${SITE_URL}/minecraft-chat-color-codes`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Chat Color Codes", href: "/minecraft-chat-color-codes" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Chat Color Codes</h1>
      <p className="mt-3 text-slate-600">
        Preview and copy the codes below, then read on — what happens when you actually try to use them
        in chat is not what most guides tell you.
      </p>

      <div className="mt-6">
        <ColorStyleTool />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          Do Chat Color Codes Work in Vanilla Minecraft?
        </h2>
        <p>
          No — not by typing them yourself. In vanilla Java Edition, typing the section sign (
          <code className="font-mono text-sm">§</code>) directly into the chat box disconnects you from
          the server. There&apos;s no client-side way to type or paste a working color code into a
          normal chat message. This surprises a lot of players, because so many guides show a code list
          without mentioning that typing it in chat doesn&apos;t do anything (or actively kicks you).
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">How to Get Colored Chat in Minecraft</h2>
        <p>
          Servers with colored chat are running a plugin — commonly Paper or Spigot with a chat plugin
          like EssentialsChat — that intercepts messages server-side and translates{" "}
          <code className="font-mono text-sm">&amp;</code> codes (like{" "}
          <code className="font-mono text-sm">&amp;a</code>) into the actual color before broadcasting
          the message. Players type the ampersand version directly in chat; the plugin does the
          conversion. Without a plugin like this installed, a vanilla server has no way to let players
          color their own chat messages.
        </p>
        <p>
          Server owners can also broadcast pre-colored messages without any plugin, using{" "}
          <code className="font-mono text-sm">/tellraw</code> with a JSON color property — useful for
          automated announcements, but not something a player types themselves.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Chat Color Codes List</h2>
        <p>
          Use the tool above to preview any of the 16 colors and 6 formatting codes, and copy either the{" "}
          <code className="font-mono text-sm">§</code> form (what the game reads) or the{" "}
          <code className="font-mono text-sm">&amp;</code> form (what most chat plugins expect you to
          type). For the full color and hex value table, see the{" "}
          <Link href="/minecraft-color-codes" className="text-emerald-600 underline">
            complete Color Codes reference
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Bedrock Edition Chat Colors</h2>
        <p>
          Bedrock Edition is the exception: it supports typing{" "}
          <code className="font-mono text-sm">§</code> codes directly into chat, signs, and books
          natively, no plugin required. That native support doesn&apos;t carry over to Java Edition —
          the two editions handle formatting codes differently by design.
        </p>
      </section>

      <FaqSection
        faqs={[
          {
            question: "Why does typing § disconnect me from the server?",
            answer:
              "In vanilla Java Edition, the section sign character isn't accepted as normal chat input — the client treats it as invalid and disconnects rather than rendering it as a color code.",
          },
          {
            question: "How do server owners add colored chat?",
            answer:
              "By installing a chat plugin (commonly on Paper or Spigot, like EssentialsChat) that intercepts messages and converts & color codes into the actual rendered color before broadcasting. It's a server-side plugin feature, not a vanilla setting.",
          },
          {
            question: "Can I use color codes in my own chat messages without a plugin?",
            answer:
              "No. Without a chat plugin, there's no way for a player to send a colored chat message on Java Edition — vanilla chat is plain text only.",
          },
          {
            question: "Do chat color codes work the same on every server?",
            answer:
              "No — it depends entirely on whether the server runs a compatible chat plugin and how that plugin is configured. Two servers can behave completely differently even though the underlying color codes are the same.",
          },
        ]}
      />

      <RelatedLinks
        title="More color code guides"
        links={COLOR_CODE_LINKS.filter((l) => l.href !== "/minecraft-chat-color-codes")}
      />

      <RelatedLinks
        title="Related tools"
        links={[TOOL_LINKS[3], TOOL_LINKS[0]]}
      />
    </div>
  );
}
