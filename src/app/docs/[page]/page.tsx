import type { Metadata } from "next";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";
import { notFound } from "next/navigation";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

type Props = { params: Promise<{ page: string }> };

export function generateStaticParams() {
  return arrayCookiesPages.map((item) => ({ page: item.page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const pageInfo = arrayCookiesPages.find((item) => item.page === page);

  if (!pageInfo) {
    return {
      title: "Legal Documents | Cucina Roma",
      description: "Legal information for Cucina Roma guests and visitors.",
      alternates: {
        canonical: "/docs",
      },
      robots: {
        index: false,
        follow: true,
      },
      openGraph: {
        title: "Legal Documents | Cucina Roma",
        description: "Legal information for Cucina Roma guests and visitors.",
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
        description: "Legal information for Cucina Roma guests and visitors.",
        images: [DEFAULT_OG_IMAGE],
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
      siteName: "Cucina Roma",
      type: "article",
      locale: "uk_UA",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${pageInfo.titleDocument} | Cucina Roma`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageInfo.titleDocument} | Cucina Roma`,
      description: pageInfo.dataValid,
      images: [DEFAULT_OG_IMAGE],
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
