import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Minecraft Username is an independent fan project, not affiliated with Mojang or Microsoft. Read our full disclaimer.",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Disclaimer", href: "/disclaimer" }]} />
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Disclaimer</h1>

      <div className="mt-6 space-y-5 text-slate-700">
        <h2 className="text-xl font-semibold text-slate-900">Not affiliated with Mojang or Microsoft</h2>
        <p>
          Minecraft Username is an independent, fan-made website. It is not affiliated with, endorsed
          by, sponsored by, or officially connected with Mojang Studios, Mojang Synergies AB, or
          Microsoft Corporation in any way. &ldquo;Minecraft&rdquo; and associated trademarks are the
          property of Mojang Synergies AB. This site does not claim any ownership of the Minecraft
          trademark, brand, or copyrighted assets.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">No guarantee of accuracy</h2>
        <p>
          Username availability results reflect a real-time lookup against Mojang&apos;s public data at
          the moment you check, but availability can change instantly and without notice. We do not
          guarantee that any result remains accurate after the moment it was returned. Historical
          username information is not available from any official source since September 2022, and we
          do not provide, fabricate, or infer such data.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Generated names are suggestions only</h2>
        <p>
          Names produced by our Username Generator, and names listed on our Name Ideas pages, are
          suggestions for inspiration only. We do not claim that any listed or generated name is
          available until it has been checked directly.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">External links</h2>
        <p>
          This site may link to external resources (such as Minecraft&apos;s official website) for
          reference. We are not responsible for the content or practices of external sites.
        </p>

        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p>
          Questions about this disclaimer can be sent to{" "}
          <a href="mailto:hello@minecraftusername.com" className="text-emerald-600 underline">
            hello@minecraftusername.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
