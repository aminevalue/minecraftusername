import type { Metadata } from "next";
import ColorStyleTool from "@/components/ColorStyleTool";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Username Color & Style Checker — Preview Chat Formatting",
  description:
    "Preview Minecraft chat colors and text formatting (bold, italic, underline, strikethrough, obfuscated) and copy the exact codes to use in chat, signs, books, and server configs.",
  alternates: { canonical: `${SITE_URL}/minecraft-username-color-checker` },
};

export default function ColorCheckerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Color & Style Checker", href: "/minecraft-username-color-checker" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
        Minecraft Username Color & Style Checker
      </h1>
      <p className="mt-3 text-slate-600">
        Preview how text looks with Minecraft&apos;s built-in chat colors and formatting, then copy the
        exact code to use in-game.
      </p>

      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <p className="font-medium">Important: this does not change your actual account username</p>
        <p className="mt-1">
          Mojang only allows plain letters, numbers, and underscores in account usernames — no color or
          formatting codes. This tool styles <em>displayed text</em>: chat messages, signs, books,
          server MOTDs, nicknames set by plugins, and similar places where Minecraft renders formatting
          codes. It is a visual preview and copyable code, not a way to recolor your login name.
        </p>
      </div>

      <div className="mt-6">
        <ColorStyleTool />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Where formatting codes actually work</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Chat messages (if the server allows color codes in chat)</li>
          <li>Signs and written/lectern books</li>
          <li>Server MOTDs and tab-list names, when configured by a server admin</li>
          <li>Nicknames set through server plugins (e.g. Essentials-style nickname commands)</li>
          <li>Text components in commands, like <code className="font-mono text-sm">/tellraw</code> and <code className="font-mono text-sm">/title</code></li>
        </ul>
        <p>
          Vanilla single-player and most servers will <strong>not</strong> apply these codes to a
          player&apos;s actual username above their head or in the player list — that always shows the
          plain account name.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Section sign vs. ampersand codes</h2>
        <p>
          Minecraft itself reads the section sign (<code className="font-mono">§</code>) followed by a
          code character. Since <code className="font-mono">§</code> is awkward to type, most server
          plugins let admins write <code className="font-mono">&amp;</code> instead and translate it
          internally — that&apos;s why we give you both formats to copy.
        </p>
      </section>

      <FaqSection
        faqs={[
          {
            question: "Can I make my username a different color permanently?",
            answer:
              "No. Account usernames are always displayed in plain text by Minecraft and Mojang — color codes only apply to text rendered in chat, signs, books, and similar formatted-text contexts, not to the username itself.",
          },
          {
            question: "Why doesn't the obfuscated code do anything in the preview?",
            answer:
              "The obfuscated format code (k) tells Minecraft to rapidly cycle the displayed characters at random — a live animation that only happens inside the actual game. Our preview shows the underlying text with a note instead of faking the animation.",
          },
          {
            question: "Will color codes work on every server?",
            answer:
              "It depends on the server's configuration. Some servers disable color codes in chat entirely, while others enable them fully. Signs and books generally support formatting in both single-player and most servers.",
          },
        ]}
      />

      <RelatedLinks links={[TOOL_LINKS[0], TOOL_LINKS[1]]} />
    </div>
  );
}
