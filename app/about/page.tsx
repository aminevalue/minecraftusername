import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Minecraft Username",
  description:
    "Learn who operates Minecraft Username, how the tools work, and why the site exists as an independent, free resource for Minecraft players.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">About Minecraft Username</h1>

      <div className="mt-6 space-y-5 text-slate-700">
        <p>
          Minecraft Username is a free set of tools for checking, styling, and generating Minecraft
          usernames. It was built because most username tools online either fabricate results,
          overload the page with clutter, or bury a simple lookup behind an account signup. This site
          does none of that: every tool works without an account, and every result comes from a real
          data source or is clearly labeled as a generated suggestion.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Independence from Mojang and Microsoft</h2>
        <p>
          This site is an independent, unofficial fan project. It is not affiliated with, endorsed by,
          sponsored by, or in any way officially connected with Mojang Studios, Microsoft, or Minecraft.
          Minecraft is a trademark of Mojang Synergies AB. Any reference to Minecraft on this site is
          for identification and descriptive purposes only.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">How the tools work</h2>
        <p>
          The Username Checker and related tools call Mojang&apos;s public account-lookup service to
          confirm whether a username is currently registered. We don&apos;t maintain our own database
          of usernames, don&apos;t store search history, and don&apos;t require sign-in. The Generator
          and Color/Style tools run entirely in your browser using curated word lists and Minecraft&apos;s
          published formatting codes — no external requests are made for those tools at all.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">How the site is funded</h2>
        <p>
          Minecraft Username is free to use and funded by display advertising. We aim to keep ads
          clearly separated from tool results and navigation so they never get confused with buttons or
          functionality. See our{" "}
          <Link href="/privacy-policy" className="text-emerald-600 underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/cookie-policy" className="text-emerald-600 underline">
            Cookie Policy
          </Link>{" "}
          for details on advertising and data handling.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Questions or feedback</h2>
        <p>
          Reach out via the{" "}
          <Link href="/contact" className="text-emerald-600 underline">
            Contact page
          </Link>{" "}
          — we read every message.
        </p>
      </div>
    </div>
  );
}
