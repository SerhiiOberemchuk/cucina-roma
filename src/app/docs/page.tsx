import type { Metadata } from "next";
import ItemLinks from "@/components/common/Links/ItemLinks";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Legal Documents | Cucina Roma",
  description:
    "Legal information, cookie policy, and disclaimers for Cucina Roma guests and website visitors.",
  alternates: {
    canonical: "/docs",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Legal Documents | Cucina Roma",
    description:
      "Legal information, cookie policy, and disclaimers for Cucina Roma website visitors.",
    url: "/docs",
    siteName: "Cucina Roma",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cucina Roma Legal Documents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Documents | Cucina Roma",
    description:
      "Legal information, cookie policy, and disclaimers for Cucina Roma website visitors.",
    images: [DEFAULT_OG_IMAGE],
  },
};

function Page() {
  return (
    <nav>
      <ul className="btn_text flex flex-col gap-4">
        {arrayCookiesPages.map((item, index) => (
          <ItemLinks
            key={index}
            href={`/docs/${item.page}`}
            title={item.titleForlistPages}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Page;
