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
  title: "Minecraft Username Color Checker – Check Locator Bar Color",
  description:
    "Check your Minecraft username color — the locator bar marker Java Edition generates from your UUID. Enter a username or UUID for the hex, RGB, and preview.",
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
        Enter a Minecraft username or UUID to check your Minecraft username color — the exact
        locator bar marker color Java Edition assigns to that account.
      </p>

      <div className="mt-6">
        <LocatorColorTool />
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <section className="mt-10 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Color Checker</h2>
        <p>
          This tool checks your Minecraft username color the same way the game computes it —
          there&apos;s no separate lookup table or guesswork involved. Enter either a username or a
          raw UUID above; either way, the result is the real locator bar marker color for that
          account, shown as a swatch alongside its hex and RGB values.
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
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
          How to Check a Minecraft Username Color
        </h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Enter a Minecraft username or a UUID, if you already have one, in the tool above.</li>
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
          How Minecraft Locator Colors Are Determined
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
        <p>
          Notice your username isn&apos;t part of that calculation at all — only the account&apos;s
          UUID is, and a UUID never changes even when you rename your account. That&apos;s why your
          Minecraft username color stays exactly the same no matter how many times you change your
          username, and why this tool resolves a username to its UUID before computing anything.
          Don&apos;t have an account yet? Our{" "}
          <Link href="/minecraft-username-generator" className="text-emerald-600 underline">
            username generator
          </Link>{" "}
          can help you find one to check first. Want to see the raw UUID itself, in dashed or
          undashed format? Use our{" "}
          <Link href="/minecraft-uuid-lookup" className="text-emerald-600 underline">
            UUID Lookup tool
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 space-y-4 text-slate-700">
        <h2 className="text-2xl font-semibold text-slate-900">Java Edition vs Bedrock Edition</h2>
        <p>
          Everything above is specific to <strong>Java Edition</strong>. On <strong>Bedrock Edition</strong>,
          the locator bar exists too, but the color isn&apos;t derived from anything permanent — Bedrock
          assigns each player a color at random every time they join a session, so it changes from one
          play session to the next and can&apos;t be looked up or predicted in advance. If you&apos;re
          playing Bedrock, there&apos;s no fixed &ldquo;your color&rdquo; to check.
        </p>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-8">
        <h2 className="text-2xl font-semibold text-slate-900">Minecraft Username Color vs Chat Color</h2>
        <p className="mt-3 text-slate-600">
          Your Minecraft username color (the locator bar marker above) is a completely different
          thing from chat text color — it has nothing to do with coloring the text you type. If you
          want to style chat messages, signs, or books instead, use the chat color and formatting
          previewer below.
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
          <p>
            In vanilla Java Edition, typing <code className="font-mono text-sm">§</code> directly into
            chat disconnects you, and signs and books don&apos;t accept typed color codes at all — as of
            1.21.6, Java removed even pasting <code className="font-mono text-sm">§</code> into a book.
            These codes only work in non-gameplay text (<code className="font-mono text-sm">server.properties</code>,
            resource pack names, world/server names set via NBT) or through commands and datapacks like{" "}
            <code className="font-mono text-sm">/tellraw</code> and <code className="font-mono text-sm">/title</code>.
            Real colored chat almost always comes from a server plugin (Paper/Spigot with something like
            EssentialsChat) translating <code className="font-mono text-sm">&amp;</code> codes server-side
            — it&apos;s not a vanilla setting. Bedrock Edition is the exception: it supports typing these
            codes directly into chat, signs, and books natively.
          </p>
          <p>
            For the full breakdown — including a complete code reference and how this compares to
            Minecraft&apos;s newer hex colors — see our{" "}
            <Link href="/minecraft-chat-color-codes" className="text-emerald-600 underline">
              Minecraft Chat Color Codes guide
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqSection
        faqs={[
          {
            question: "How do I check my Minecraft username color?",
            answer:
              "Enter your username (or UUID) in the tool at the top of this page. It resolves your account's UUID if needed and shows the exact locator bar marker color Java Edition assigns to it, with hex and RGB values.",
          },
          {
            question: "How do I find my Minecraft locator bar color?",
            answer:
              "Same tool, same process — 'locator bar color' and 'username color' describe the same marker on this page. Enter your username or UUID above to see it.",
          },
          {
            question: "Can I check a Minecraft username color with a UUID?",
            answer:
              "Yes. The tool accepts either a username or a raw UUID directly — a UUID skips the username lookup step entirely, since the color is computed from the UUID either way.",
          },
          {
            question: "What determines the Minecraft locator bar color?",
            answer:
              "Your account's UUID. The game hashes it down to a raw color, then normalizes the brightness to 90% while keeping the hue and saturation, which is the color you actually see in-game. A server can still override it with a team color or the /waypoint command.",
          },
          {
            question: "Does the locator bar color work on Bedrock?",
            answer:
              "No — not because we skipped it. Bedrock Edition assigns the locator color randomly every session rather than deriving it from anything permanent, so there's no fixed value tied to your account to look up.",
          },
          {
            question: "Is Minecraft username color the same as chat color?",
            answer:
              "No. Username color refers to the locator bar marker described on this page, computed from your UUID. Chat color codes are unrelated — they style text you type in chat, signs, or books, and don't affect the locator bar at all.",
          },
          {
            question: "Why does the tool show two different color values?",
            answer:
              "The raw value is what the UUID hash produces before adjustment. The in-game value is what actually renders on the locator bar, after brightness is normalized to 90%.",
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
