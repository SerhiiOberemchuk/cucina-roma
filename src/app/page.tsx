import type { Metadata } from "next";
import HomePage from "@/views/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/",
    primaryKeyword: "Cooking Class Rome",
    description:
      "Кулінарні майстер-класи в Римі для україномовних гостей: pizza, pasta, tiramisu і wine tasting у центрі міста з простим online booking.",
    type: "website",
  });
}

export default function Home() {
  return <HomePage />;
}

