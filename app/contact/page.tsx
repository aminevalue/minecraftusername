import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Minecraft Username team with questions, feedback, or reports.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Contact</h1>

      <div className="mt-6 space-y-5 text-slate-700">
        <p>
          Have a question, found a bug, or want to report an issue with a tool? Email us and we&apos;ll
          get back to you as soon as we can.
        </p>
        <a
          href="mailto:hello@minecraftusername.com"
          className="inline-block rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 hover:bg-emerald-400"
        >
          hello@minecraftusername.com
        </a>
        <p>
          For copyright or trademark concerns related to Mojang or Microsoft intellectual property,
          please include specific details so we can review and respond promptly.
        </p>
      </div>
    </div>
  );
}
