import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/schema";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const fullItems: BreadcrumbItem[] = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(fullItems)) }}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {fullItems.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1">
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === fullItems.length - 1 ? (
              <span className="text-slate-700" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-emerald-600">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
