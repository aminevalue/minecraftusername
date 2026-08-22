import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import RelatedLinks from "@/components/RelatedLinks";
import type { CategoryContent } from "@/lib/categories";
import { CATEGORIES } from "@/lib/categories";
import { TOOL_LINKS } from "@/lib/site";

export default function CategoryPage({ category }: { category: CategoryContent }) {
  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { name: "Name Ideas", href: "/minecraft-username-ideas" },
          { name: category.navLabel, href: `/${category.slug}` },
        ]}
      />

      <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">{category.h1}</h1>
      <div className="mt-3 space-y-3 text-slate-600">
        {category.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-8 space-y-8">
        {category.groups.map((group) => (
          <div key={group.label}>
            <h2 className="text-xl font-semibold text-slate-900">{group.label}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.names.map((name) => (
                <li key={name}>
                  <Link
                    href={`/minecraft-username-checker?name=${encodeURIComponent(name.replace(/[^A-Za-z0-9_]/g, ""))}`}
                    className="inline-block rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-mono text-sm text-slate-800 transition-colors hover:border-emerald-400 hover:text-emerald-700"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <AdSlot size="in-content" />
      </div>

      <div className="mt-10 space-y-8">
        {category.tips.map((tip) => (
          <section key={tip.heading} className="space-y-3 text-slate-700">
            <h2 className="text-2xl font-semibold text-slate-900">{tip.heading}</h2>
            {tip.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
        <p>
          Click any name above to run it through our live{" "}
          <Link href="/minecraft-username-checker" className="font-medium text-emerald-600 underline">
            Username Checker
          </Link>{" "}
          — none of these names are pre-verified as available. Want more like these? Try the{" "}
          <Link
            href={`/minecraft-username-generator?theme=${category.generatorTheme}`}
            className="font-medium text-emerald-600 underline"
          >
            generator
          </Link>{" "}
          with a matching theme.
        </p>
      </div>

      <FaqSection faqs={category.faqs} />

      <RelatedLinks title="More name ideas" links={otherCategories.map((c) => ({ href: `/${c.slug}`, label: c.navLabel, description: c.metaDescription.slice(0, 80) }))} />

      <RelatedLinks title="Tools" links={[TOOL_LINKS[0], TOOL_LINKS[1]]} />
    </div>
  );
}
