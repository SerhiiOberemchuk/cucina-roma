import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Кулінарні майстер-класи в Римі українською",
  description:
    "Кулінарні майстер-класи в Римі з україномовним супроводом: піца, паста, тірамісу, ньокі та винна дегустація. Бронювання онлайн.",
  keywords: [
    "кулінарний майстер-клас Рим",
    "майстер-клас піца Рим",
    "майстер-клас паста Рим",
    "тірамісу майстер-клас Рим",
    "винна дегустація Рим",
    "україномовний гід Рим",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Кулінарні майстер-класи в Римі українською | Cucina Roma",
    description:
      "Піца, паста, тірамісу, ньокі та винна дегустація в Римі. Україномовний супровід і швидке бронювання.",
    url: "/",
    type: "website",
    locale: "uk_UA",
  },
};

export default function Home() {
  return <HomePage />;
}
