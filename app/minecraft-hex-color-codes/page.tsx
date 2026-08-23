import type { Metadata } from "next";
import Link from "next/link";
import HexColorTool from "@/components/HexColorTool";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { softwareApplicationJsonLd } from "@/lib/schema";
import { COLOR_CODE_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Hex Color Codes — Custom RGB Colors",
  description:
    "How Minecraft's hex color codes work: custom RGB colors for Java Edition text, with a hex picker that generates the /tellraw command for you.",
  alternates: { canonical: `${SITE_URL}/minecraft-hex-color-codes` },
};

export default function HexColorCodesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: "Minecraft Hex Color Code Generator",
              description:
                "Free tool to preview a custom Minecraft hex color and generate the matching /tellraw command.",
              url: `${SITE_URL}/minecraft-hex-color-codes`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Hex Color Codes", href: "/minecraft-hex-color-codes" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Hex Color Codes</h1>
      <p className="mt-3 text-slate-600">
        Pick any RGB color and preview it, then copy the exact command Minecraft needs to render it.
      </p>

      <div className="mt-6">
        <HexColorTool />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          How to Use Hex Colors in Minecraft
        </h2>
        <p>
          Java Edition 1.16 added support for custom hex colors in JSON text components — the format
          used by commands like <code className="font-mono text-sm">/tellraw</code> and{" "}
          <code className="font-mono text-sm">/title</code>. Instead of picking from the 16 preset
          colors, you set a <code className="font-mono text-sm">color</code> field to any hex value:
        </p>
        <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm text-emerald-300">
{`/tellraw @a {"text":"Welcome!","color":"#55FFAA"}`}
        </pre>
        <p>
          This works in datapacks, command blocks, and directly typed into the chat command line by an
          operator — it doesn&apos;t require a plugin.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          Minecraft Hex Color Codes vs the 16 Standard Colors
        </h2>
        <p>
          The legacy system (<code className="font-mono text-sm">§</code>/<code className="font-mono text-sm">&amp;</code>{" "}
          codes) is limited to 16 fixed colors and predates hex support by years. Hex colors cover the
          entire RGB range — over 16 million possible colors — but only work through JSON text
          components, never as a typed character sequence the way legacy codes are. See our{" "}
          <Link href="/minecraft-color-codes" className="text-emerald-600 underline">
            full color codes reference
          </Link>{" "}
          for the standard 16-color list.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Where Hex Colors Work (and Don&apos;t)</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Works:</strong> JSON text components in <code className="font-mono text-sm">/tellraw</code>,{" "}
            <code className="font-mono text-sm">/title</code>, book pages and sign text set via commands,
            and datapacks.
          </li>
          <li>
            <strong>Doesn&apos;t work:</strong> typing a hex code directly into chat, a sign, or a book
            in vanilla Java — there&apos;s no keyboard sequence for it, the same restriction that applies
            to legacy color codes.
          </li>
          <li>
            <strong>Bedrock Edition:</strong> does not support hex text colors at all — this is a
            Java-only feature.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Hex Colors in Server Chat Plugins</h2>
        <p>
          Some server chat plugins built on the Adventure/MiniMessage API (or older BungeeCord-style hex
          parsers) extend hex colors into player chat, typically through a syntax like{" "}
          <code className="font-mono text-sm">&amp;#55FFAA</code>. This is entirely plugin-dependent —
          it only works if the specific server you&apos;re on has that plugin installed and configured,
          not as a built-in Minecraft feature. Our{" "}
          <Link href="/minecraft-chat-color-codes" className="text-emerald-600 underline">
            Chat Color Codes guide
          </Link>{" "}
          covers how server-side chat coloring works in general.
        </p>
      </section>

      <FaqSection
        faqs={[
          {
            question: "Do hex color codes work in vanilla Minecraft?",
            answer:
              "Yes, but only in Java Edition and only through JSON text components in commands like /tellraw and /title — not by typing a hex code directly into chat, a sign, or a book.",
          },
          {
            question: "Does Bedrock Edition support hex colors?",
            answer:
              "No. Hex color codes are a Java Edition-only feature, added in version 1.16. Bedrock is limited to the 16 standard color codes.",
          },
          {
            question: "Can I use hex colors in Minecraft chat?",
            answer:
              "Only if the server is running a chat plugin that specifically parses hex codes (commonly via the Adventure/MiniMessage API). There's no vanilla way for a player to send a hex-colored chat message.",
          },
          {
            question: "What's the difference between hex codes and the 16 standard color codes?",
            answer:
              "The 16 standard codes are a fixed palette from Minecraft's original formatting system. Hex codes, added in Java 1.16, allow any RGB value but only work through JSON text components — never as a typed character sequence.",
          },
        ]}
      />

      <RelatedLinks
        title="More color code guides"
        links={COLOR_CODE_LINKS.filter((l) => l.href !== "/minecraft-hex-color-codes")}
      />

      <RelatedLinks
        title="Related tools"
        links={[TOOL_LINKS[3], TOOL_LINKS[0]]}
      />
    </div>
  );
}
