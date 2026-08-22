import Link from "next/link";
import { TOOL_LINKS } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">This page doesn&apos;t exist</h1>
      <p className="mt-3 text-slate-600">
        The page you&apos;re looking for may have been moved or never existed. Try one of the tools
        below instead.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {TOOL_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-slate-200 p-4 text-left transition-colors hover:border-emerald-400"
          >
            <span className="font-medium text-slate-900">{link.label}</span>
            <span className="mt-1 block text-sm text-slate-500">{link.description}</span>
          </Link>
        ))}
      </div>
      <Link href="/" className="mt-8 inline-block font-medium text-emerald-600 hover:underline">
        ← Back to homepage
      </Link>
    </div>
  );
}
