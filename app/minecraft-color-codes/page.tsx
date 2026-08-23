import type { Metadata } from "next";
import Link from "next/link";
import ColorStyleTool from "@/components/ColorStyleTool";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { softwareApplicationJsonLd } from "@/lib/schema";
import { MINECRAFT_COLORS, MINECRAFT_FORMATS } from "@/lib/format-codes";
import { COLOR_CODE_LINKS, SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Color Codes — Full List & Preview Tool",
  description:
    "Every Minecraft color code and formatting code in one reference, with a live preview and copy tool. Covers where these codes actually work in Java and Bedrock.",
  alternates: { canonical: `${SITE_URL}/minecraft-color-codes` },
};

export default function ColorCodesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: "Minecraft Color Codes Reference",
              description:
                "Free reference and preview tool for every Minecraft color and formatting code.",
              url: `${SITE_URL}/minecraft-color-codes`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Color Codes", href: "/minecraft-color-codes" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Minecraft Color Codes</h1>
      <p className="mt-3 text-slate-600">
        The complete reference for Minecraft&apos;s 16 color codes and 6 formatting codes, with a live
        preview and one-click copy below.
      </p>

      <div className="mt-6">
        <ColorStyleTool />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Color Codes</h2>
        <p>
          Minecraft&apos;s color codes are a fixed set of 16 colors, each triggered by a code character
          after a section sign (<code className="font-mono text-sm">§</code>) or, on most servers, an
          ampersand (<code className="font-mono text-sm">&amp;</code>) that gets translated to a section
          sign automatically. They&apos;ve been part of the game since the earliest chat-formatting
          system, well before Minecraft added custom hex colors in Java 1.16.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Color Codes List</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500">
                <th className="py-2 pr-4 font-medium">Color</th>
                <th className="py-2 pr-4 font-medium">Code</th>
                <th className="py-2 font-medium">Hex</th>
              </tr>
            </thead>
            <tbody>
              {MINECRAFT_COLORS.map((c) => (
                <tr key={c.code} className="border-b border-slate-100">
                  <td className="py-2 pr-4">
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="inline-block h-4 w-4 rounded border border-slate-300"
                        style={{ backgroundColor: c.hex }}
                        aria-hidden="true"
                      />
                      {c.name}
                    </span>
                  </td>
                  <td className="py-2 pr-4 font-mono">
                    §{c.code} <span className="text-slate-400">/ &amp;{c.code}</span>
                  </td>
                  <td className="py-2 font-mono">{c.hex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Formatting Codes</h2>
        <p>Beyond color, six codes control text style. These stack with a color code and each other:</p>
        <ul className="list-disc space-y-2 pl-5">
          {MINECRAFT_FORMATS.map((f) => (
            <li key={f.code}>
              <code className="font-mono text-sm">
                §{f.code} / &amp;{f.code}
              </code>{" "}
              — <strong>{f.name}</strong>: {f.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Where Minecraft Color Codes Work</h2>
        <p>
          In vanilla Java Edition, typing <code className="font-mono text-sm">§</code> directly into
          chat disconnects you, and signs and books don&apos;t accept typed color codes at all — Java
          1.21.6 even removed pasting <code className="font-mono text-sm">§</code> into books. These
          codes work in non-gameplay text (<code className="font-mono text-sm">server.properties</code>,
          resource pack names, world/server names set via NBT) and through commands or datapacks like{" "}
          <code className="font-mono text-sm">/tellraw</code>. Real colored chat almost always comes
          from a server plugin translating <code className="font-mono text-sm">&amp;</code> codes —
          it&apos;s not a vanilla toggle. Bedrock Edition is the exception, supporting these codes
          directly in chat, signs, and books. See our{" "}
          <Link href="/minecraft-chat-color-codes" className="text-emerald-600 underline">
            Chat Color Codes guide
          </Link>{" "}
          for the full breakdown of getting colored chat on a real server.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Color Codes vs Hex Color Codes</h2>
        <p>
          The 16 codes above are fixed — you can&apos;t mix your own shade. Java Edition 1.16 added a
          separate system, custom hex colors (<code className="font-mono text-sm">#RRGGBB</code>),
          usable in JSON text components like <code className="font-mono text-sm">/tellraw</code> for
          any RGB value, not just the 16 presets. See our{" "}
          <Link href="/minecraft-hex-color-codes" className="text-emerald-600 underline">
            Hex Color Codes guide
          </Link>{" "}
          for examples and a hex-to-command generator.
        </p>
      </section>

      <FaqSection
        faqs={[
          {
            question: "How many color codes does Minecraft have?",
            answer:
              "16 named colors, each tied to a single character code (0–9 and a–f) after a § or & symbol, plus 6 additional formatting codes for bold, italic, underline, strikethrough, obfuscated, and reset.",
          },
          {
            question: "Do I type & or § for Minecraft color codes?",
            answer:
              "Minecraft itself reads §. Most servers let you type & instead and translate it to § automatically, since § is awkward to type directly — but neither works when typed straight into vanilla Java chat, signs, or books.",
          },
          {
            question: "Are Minecraft color codes the same on Java and Bedrock?",
            answer:
              "The 16 colors and their codes are the same on both editions, but where you can use them differs — Bedrock supports typing them directly into chat, signs, and books, while vanilla Java restricts them to commands, datapacks, and config files.",
          },
          {
            question: "What's the difference between color codes and hex codes?",
            answer:
              "Color codes are a fixed palette of 16 preset colors available since the early formatting system. Hex codes, added in Java 1.16, let you specify any RGB color via JSON text components — a much larger range, but Java-only and command-based.",
          },
        ]}
      />

      <RelatedLinks
        title="More color code guides"
        links={COLOR_CODE_LINKS.filter((l) => l.href !== "/minecraft-color-codes")}
      />

      <RelatedLinks
        title="Related tools"
        links={[TOOL_LINKS[3], TOOL_LINKS[0], TOOL_LINKS[1]]}
      />
    </div>
  );
}
