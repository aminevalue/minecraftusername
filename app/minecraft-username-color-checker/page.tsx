import type { Metadata } from "next";
import Link from "next/link";
import ColorStyleTool from "@/components/ColorStyleTool";
import LocatorColorTool from "@/components/LocatorColorTool";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import { softwareApplicationJsonLd } from "@/lib/schema";
import { SITE_URL, TOOL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Minecraft Username Color Checker – Locator Bar Color",
  description:
    "Check your Minecraft username's locator bar color — the exact marker color Java Edition assigns from your UUID — plus a separate tool to preview chat text colors and formatting.",
  alternates: { canonical: `${SITE_URL}/minecraft-username-color-checker` },
};

export default function ColorCheckerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            softwareApplicationJsonLd({
              name: "Minecraft Username Color Checker",
              description:
                "Free tool to check a Minecraft account's locator bar color, computed from its UUID the same way Java Edition does, plus a chat text color and formatting previewer.",
              url: `${SITE_URL}/minecraft-username-color-checker`,
            })
          ),
        }}
      />

      <Breadcrumbs items={[{ name: "Color Checker", href: "/minecraft-username-color-checker" }]} />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
        Minecraft Username Color Checker
      </h1>
      <p className="mt-3 text-slate-600">
        Enter a Minecraft username or UUID to see the exact locator bar marker color Java Edition
        assigns to that account.
      </p>

      <div className="mt-6">
        <LocatorColorTool />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">What Is the Minecraft Locator Bar Color?</h2>
        <p>
          The locator bar is the HUD strip that shows the direction of nearby players in multiplayer,
          added in Java Edition 1.21.6 (Bedrock Edition 1.21.90). Each player appears on it as a
          colored marker, and by default that color is generated automatically from the player&apos;s
          account UUID — not chosen by the player, and not related to their username, skin, or cape.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          How to Check Your Minecraft Locator Bar Color
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Enter your Minecraft username (or a UUID, if you already have it) in the tool above.</li>
          <li>Click &ldquo;Check locator color.&rdquo; For a username, we first resolve it to its account UUID.</li>
          <li>
            The swatch shown is the color that actually renders on the locator bar for that account — you can
            expand &ldquo;Raw pre-brightness value&rdquo; to see the unadjusted UUID-derived color too.
          </li>
        </ol>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Locator Bar Color Checker</h2>
        <p>
          This checker reproduces Minecraft&apos;s own color computation rather than approximating it:
          it takes the account&apos;s UUID, runs the same hashing step the game runs, and applies the
          same brightness normalization before drawing the swatch. If you enter a username, we resolve
          it to a UUID first using a live Mojang lookup — the same one behind our{" "}
          <Link href="/minecraft-username-checker" className="text-emerald-600 underline">
            Username Checker
          </Link>
          — so a name that isn&apos;t registered to any account has no color to compute.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Locator Bar Colors</h2>
        <p>
          There isn&apos;t a fixed palette of locator bar colors the way there is for chat text — each
          UUID produces its own color across the full RGB range, so two players can end up with very
          similar or very different markers with no pattern to predict in advance. A server can still
          override the automatic color for any player using a scoreboard team color or the{" "}
          <code className="font-mono text-sm">/waypoint</code> command, both of which take priority
          over the UUID-derived default.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">
          How Is a Minecraft Player&apos;s Locator Color Determined?
        </h2>
        <p>
          The game runs the account&apos;s UUID through Java&apos;s standard{" "}
          <code className="font-mono text-sm">UUID.hashCode()</code> method, which folds the 128-bit
          UUID down to a single 32-bit number. The lowest 24 bits of that number become a raw
          red/green/blue color. The renderer then converts that raw color to hue/saturation/brightness,
          keeps the hue and saturation exactly as they are, and resets the brightness to a fixed 90%
          before drawing the marker — which is why the color you see in-game is usually a bit brighter
          than the raw UUID-derived value.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username, UUID and Locator Color</h2>
        <p>
          Your username isn&apos;t part of this calculation at all — only your account&apos;s UUID is,
          and a UUID never changes even when you rename your account. That means your locator bar color
          stays exactly the same for as long as you keep the same Mojang/Microsoft account, no matter
          how many times you change your username. It&apos;s also why this tool needs to resolve a
          username to its UUID before it can compute anything.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Java Edition Locator Bar Color</h2>
        <p>
          Everything above is specific to <strong>Java Edition</strong>. On <strong>Bedrock Edition</strong>,
          the locator bar exists too, but the color isn&apos;t derived from anything permanent — Bedrock
          assigns each player a color at random every time they join a session, so it changes from one
          play session to the next and can&apos;t be looked up or predicted in advance. If you&apos;re
          playing Bedrock, there&apos;s no fixed &ldquo;your color&rdquo; to check.
        </p>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-semibold text-slate-900">Looking for chat text colors instead?</h2>
        <p className="mt-3 text-slate-600">
          The locator bar color above is a marker shown on the multiplayer HUD — it has nothing to do
          with coloring the text you type. If you want to style chat messages, signs, or books instead,
          use the chat color and formatting previewer below.
        </p>

        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <p className="font-medium">Important: this does not change your actual account username</p>
          <p className="mt-1">
            Mojang only allows plain letters, numbers, and underscores in account usernames — no color or
            formatting codes. This tool styles <em>displayed text</em>: chat messages, signs, books,
            server MOTDs, nicknames set by plugins, and similar places where Minecraft renders formatting
            codes.
          </p>
        </div>

        <div className="mt-6">
          <ColorStyleTool />
        </div>

        <div className="mt-8 space-y-4 text-slate-700">
          <h3 className="text-xl font-semibold text-slate-900">Where formatting codes actually work</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>Chat messages (if the server allows color codes in chat)</li>
            <li>Signs and written/lectern books</li>
            <li>Server MOTDs and tab-list names, when configured by a server admin</li>
            <li>Nicknames set through server plugins (e.g. Essentials-style nickname commands)</li>
            <li>Text components in commands, like <code className="font-mono text-sm">/tellraw</code> and <code className="font-mono text-sm">/title</code></li>
          </ul>
        </div>

      </section>

      <FaqSection
        faqs={[
          {
            question: "Can I change my Minecraft locator bar color?",
            answer:
              "Not by yourself in vanilla Java Edition — it's derived automatically from your account UUID. A server admin can override it for you using a scoreboard team color or the /waypoint command.",
          },
          {
            question: "Does my locator bar color change when I rename my account?",
            answer:
              "No. The color comes from your UUID, which stays the same for the life of the account regardless of how many times you change your username.",
          },
          {
            question: "Does this work for Bedrock Edition?",
            answer:
              "No — and not because we skipped it. Bedrock assigns the locator color randomly every session, so there's no fixed value tied to your account to check. Only Java Edition derives it from your UUID.",
          },
          {
            question: "Why does the tool show two different colors?",
            answer:
              "The raw color is what the UUID hash produces before adjustment. The in-game color is what actually renders on the locator bar, after the game resets brightness to 90% while keeping the same hue and saturation.",
          },
          {
            question: "Is the locator bar color the same as the chat text color tool on this page?",
            answer:
              "No — they're unrelated Minecraft features. The locator bar color is a per-account marker color shown on the multiplayer HUD; chat color codes style text you type in chat, signs, or books. This page covers both, separately.",
          },
          {
            question: "Can I make my username a different color permanently?",
            answer:
              "No. Account usernames are always displayed in plain text by Minecraft and Mojang — color codes only apply to text rendered in chat, signs, books, and similar formatted-text contexts, not to the username itself.",
          },
          {
            question: "Why doesn't the obfuscated code do anything in the chat color preview?",
            answer:
              "The obfuscated format code (k) tells Minecraft to rapidly cycle the displayed characters at random — a live animation that only happens inside the actual game. Our preview shows the underlying text with a note instead of faking the animation.",
          },
          {
            question: "Will chat color codes work on every server?",
            answer:
              "It depends on the server's configuration. Some servers disable color codes in chat entirely, while others enable them fully. Signs and books generally support formatting in both single-player and most servers.",
          },
        ]}
      />

      <RelatedLinks links={[TOOL_LINKS[0], TOOL_LINKS[1]]} />
    </div>
  );
}
