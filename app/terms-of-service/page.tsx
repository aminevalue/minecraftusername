import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing your use of Minecraft Username's free tools and content.",
  alternates: { canonical: `${SITE_URL}/terms-of-service` },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Terms of Service", href: "/terms-of-service" }]} />
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-5 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">Acceptance of terms</h2>
        <p>
          By using Minecraft Username, you agree to these terms. If you don&apos;t agree, please
          discontinue use of the site.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">The tools are provided as-is</h2>
        <p>
          All tools on this site — the Username Checker, History Checker, Color/Style Checker,
          Generator, and short-username checkers — are provided free of charge, without warranty of
          any kind. Availability results reflect a live snapshot from Mojang&apos;s public data at the
          time of your request and can change at any moment; we make no guarantee that a name reported
          as available will remain available, or that a name reported as taken will remain taken.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">No affiliation with Mojang or Microsoft</h2>
        <p>
          This site is independent and unofficial. It is not affiliated with, endorsed by, or operated
          by Mojang Studios or Microsoft. All Minecraft trademarks and copyrights belong to their
          respective owners.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Acceptable use</h2>
        <p>
          You agree not to abuse, scrape at high volume, or attempt to disrupt the tools on this site.
          The Username Checker forwards requests to a third-party API on your behalf and is intended
          for individual, reasonable use — not automated bulk lookups.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">No liability for name disputes</h2>
        <p>
          We are not responsible for disputes, losses, or issues arising from usernames you choose,
          check, or attempt to claim, including but not limited to a name becoming unavailable after
          you checked it, or a name being rejected by Mojang for other reasons (blocked words, format
          restrictions, etc.).
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Changes to the service</h2>
        <p>
          We may modify, suspend, or discontinue any tool or feature on this site at any time without
          notice.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:hello@minecraftusername.com" className="text-emerald-600 underline">
            hello@minecraftusername.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
