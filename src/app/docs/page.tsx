import type { Metadata } from "next";
import ItemLinks from "@/components/common/Links/ItemLinks";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";

export const metadata: Metadata = {
  title: "Документи",
  description:
    "Юридична інформація, політика cookies та відмова від відповідальності Cucina Roma.",
  alternates: {
    canonical: "/docs",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Документи | Cucina Roma",
    description:
      "Юридична інформація, політика cookies та відмова від відповідальності.",
    url: "/docs",
    type: "website",
    locale: "uk_UA",
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
