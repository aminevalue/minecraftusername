import Link from "next/link";
import { COLOR_CODE_LINKS, IDEA_CATEGORY_LINKS, LEGAL_LINKS, SITE_NAME, TOOL_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-white">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-slate-400">
            Free Minecraft username tools and name ideas. An independent fan project —
            not affiliated with Mojang or Microsoft.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Tools</p>
          <ul className="mt-3 space-y-2 text-sm">
            {TOOL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-emerald-400">
                  {link.label}
                </Link>
              </li>
            ))}
            {COLOR_CODE_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-emerald-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Name Ideas</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/minecraft-username-ideas" className="hover:text-emerald-400">
                All Name Ideas
              </Link>
            </li>
            {IDEA_CATEGORY_LINKS.filter(
              (link) => !TOOL_LINKS.some((tool) => tool.href === link.href)
            ).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-emerald-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-emerald-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-6 text-xs text-slate-500 sm:px-6">
        <p>
          © {new Date().getFullYear()} {SITE_NAME}. Minecraft is a trademark of Mojang Synergies AB /
          Microsoft. This site is not endorsed by or affiliated with Mojang or Microsoft.
        </p>
      </div>
    </footer>
  );
}
