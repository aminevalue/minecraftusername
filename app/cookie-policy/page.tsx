import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Minecraft Username uses cookies, including Google AdSense advertising cookies.",
  alternates: { canonical: `${SITE_URL}/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Cookie Policy", href: "/cookie-policy" }]} />
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Cookie Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-5 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">What are cookies</h2>
        <p>
          Cookies are small text files stored on your device by your browser. They can be used to
          remember preferences or, in the case of advertising cookies, to help serve relevant ads.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Cookies this site uses</h2>
        <p>
          Minecraft Username itself does not set functional or tracking cookies for its core tools —
          the Username Checker, Generator, and Color/Style Checker work without any cookies at all.
        </p>
        <p>
          Once Google AdSense is active on this site, Google and its advertising partners may set
          cookies to serve and measure ads, including cookies used for personalized advertising based
          on your browsing activity across sites. This is standard for AdSense-supported websites and
          is outside our direct control.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Managing ad cookies</h2>
        <p>
          You can review and adjust how Google personalizes ads at{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 underline"
          >
            adssettings.google.com
          </a>
          , or opt out of personalized advertising from participating companies via{" "}
          <a
            href="https://optout.aboutads.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 underline"
          >
            optout.aboutads.info
          </a>
          . Most browsers also let you block or delete cookies entirely in their privacy settings.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href="mailto:hello@minecraftusername.com" className="text-emerald-600 underline">
            hello@minecraftusername.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
