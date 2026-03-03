import type { Metadata } from "next";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  return arrayCookiesPages.map((item) => ({ page: item.page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const pageInfo = arrayCookiesPages.find((item) => item.page === page);

  if (!pageInfo) {
    return {
      title: "Документи",
      alternates: {
        canonical: "/docs",
      },
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: pageInfo.titleDocument,
    description: `${pageInfo.titleDocument}. ${pageInfo.dataValid}`,
    alternates: {
      canonical: `/docs/${pageInfo.page}`,
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `${pageInfo.titleDocument} | Cucina Roma`,
      description: pageInfo.dataValid,
      url: `/docs/${pageInfo.page}`,
      type: "article",
      locale: "uk_UA",
    },
  };
}

async function CookiesPage({ params }: Props) {
  const { page } = await params;
  const pageInfo = arrayCookiesPages.find((item) => item.page === page);

  if (!pageInfo) {
    notFound();
  }

  return (
    <div>
      <h1 className="textH3 mb-3"> {pageInfo.titleDocument}</h1>
      <span className="">{pageInfo.dataValid}</span>
      <ul className="mt-3 flex flex-col gap-3">
        {pageInfo.items.map((item, index) => (
          <li key={index}>
            <h3 className="big_text_medium mb-3">{item.itemTitle}</h3>
            {item.description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CookiesPage;
