import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Minecraft Username handles data: what we collect, what we don't, and how advertising works.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

      <div className="mt-6 space-y-5 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">No accounts, no stored searches</h2>
        <p>
          Minecraft Username does not require an account, does not ask you to log in, and does not
          store a database of the usernames you search. When you use the Username Checker, the
          username you enter is sent from your browser to our server, which forwards a lookup request
          to Mojang&apos;s public API and returns the result. That request is not logged against your
          identity or retained beyond the brief server-side cache used to reduce duplicate lookups
          (typically under a minute).
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Tools that run entirely in your browser</h2>
        <p>
          The Username Generator and Color/Style Checker process everything locally in your browser.
          No data from these tools is sent to our servers.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Advertising</h2>
        <p>
          This site is monetized through Google AdSense. Once active, AdSense and its partners may use
          cookies or similar technologies to serve ads based on your visit to this and other sites. You
          can control ad personalization through{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 underline"
          >
            Google&apos;s Ad Settings
          </a>
          . See our{" "}
          <a href="/cookie-policy" className="text-emerald-600 underline">
            Cookie Policy
          </a>{" "}
          for more detail.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Server logs</h2>
        <p>
          Like most websites, our hosting provider (Vercel) may log basic technical information (IP
          address, request timestamps, user agent) for security and reliability purposes. This is
          standard infrastructure logging, not used for tracking individual users across sessions.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Third-party data</h2>
        <p>
          Username availability results come from Mojang&apos;s public API. We don&apos;t control how
          Mojang handles that request on their end; refer to Mojang and Microsoft&apos;s own privacy
          documentation for details on their systems.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Changes to this policy</h2>
        <p>
          We may update this policy as the site evolves, particularly once AdSense is fully active.
          Material changes will be reflected on this page with an updated date.
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
