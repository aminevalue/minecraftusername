import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "@/components/CategoryPage";
import { getCategoryBySlug } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";

const SLUG = "minecraft-cool-usernames";
const category = getCategoryBySlug(SLUG);

export const metadata: Metadata = category
  ? {
      title: category.metaTitle,
      description: category.metaDescription,
      alternates: { canonical: `${SITE_URL}/${SLUG}` },
    }
  : {};

export default function Page() {
  if (!category) return notFound();
  return <CategoryPage category={category} />;
}
