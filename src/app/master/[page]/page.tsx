import type { Metadata } from "next";
import SectionDetailInfoMaster from "@/components/common/sections/SectionDetailInfoMaster/SectionDetailInfoMaster";

import { DataCardMaster, dataMaster } from "@/data/dataMaster";
import { dataDetailInfoMaster } from "@/data/dataDetailInfoMaster";
import { notFound } from "next/navigation";

type PageParam = Pick<DataCardMaster, "page">["page"];
type Props = { params: Promise<{ page: PageParam }> };

export function generateStaticParams() {
  return dataMaster.map((item) => ({ page: item.page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const detail = dataDetailInfoMaster[page];
  const service = dataMaster.find((item) => item.page === page);

  if (!detail) {
    return {
      title: "Майстер-класи",
      alternates: {
        canonical: "/",
      },
    };
  }

  const description = [
    `${detail.title} у Римі`,
    service ? `${service.duration} години` : null,
    service ? `${service.prise} EUR` : null,
    "україномовний супровід",
    "бронювання онлайн",
  ]
    .filter(Boolean)
    .join(" | ");

  return {
    title: detail.title,
    description,
    keywords: [
      "кулінарний майстер-клас Рим",
      "майстер-клас піца тірамісу Рим",
      "майстер-клас паста Рим",
      "винна дегустація Рим",
      "україномовний гід Рим",
      detail.title,
    ],
    alternates: {
      canonical: `/master/${page}`,
    },
    openGraph: {
      title: `${detail.title} | Cucina Roma`,
      description,
      url: `/master/${page}`,
      type: "article",
      locale: "uk_UA",
      images: [
        {
          url: detail.imageUrl,
          alt: detail.title,
        },
      ],
    },
  };
}

export default async function MasterPage({ params }: Props) {
  const { page } = await params;
  const existsPage = dataMaster.some((item) => item.page === page);

  if (!existsPage) {
    notFound();
  }

  return <SectionDetailInfoMaster page={page} />;
}
