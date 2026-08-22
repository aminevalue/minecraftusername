import Link from "next/link";
import type { NavLink } from "@/lib/site";

export default function RelatedLinks({ title = "Related tools", links }: { title?: string; links: NavLink[] }) {
  if (links.length === 0) return null;

  return (
    <section className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block rounded-lg border border-slate-200 bg-white p-3 transition-colors hover:border-emerald-400"
            >
              <span className="font-medium text-slate-900">{link.label}</span>
              <span className="mt-1 block text-sm text-slate-500">{link.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
