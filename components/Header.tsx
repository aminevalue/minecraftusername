import Link from "next/link";
import { SITE_NAME, TOOL_LINKS } from "@/lib/site";

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-slate-950">
            MU
          </span>
          <span className="text-lg">{SITE_NAME}</span>
        </Link>
        <nav aria-label="Main tools" className="hidden gap-5 text-sm md:flex">
          {TOOL_LINKS.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 transition-colors hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/minecraft-username-ideas" className="text-slate-300 transition-colors hover:text-emerald-400">
            Name Ideas
          </Link>
        </nav>
        <Link
          href="/minecraft-username-checker"
          className="rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-slate-950 transition-colors hover:bg-emerald-400"
        >
          Check a name
        </Link>
      </div>
    </header>
  );
}
