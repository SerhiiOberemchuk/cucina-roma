import type { Metadata } from "next";
import HomePage from "@/views/HomePage";
import { buildPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    pathname: "/",
    primaryKeyword: "Ukrainian Cooking Classes in Rome",
    description:
      "Cucina Roma для україномовних гостей: кулінарні майстер-класи в Римі, персональний супровід, центральна локація та зручне онлайн-бронювання форматів.",
    type: "website",
  });
}

export default function Home() {
  return <HomePage />;
}

