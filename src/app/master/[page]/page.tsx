import type { Metadata } from "next";
import SectionDetailInfoMaster from "@/components/common/sections/SectionDetailInfoMaster/SectionDetailInfoMaster";
import MasterJsonLd from "@/utils/MasterJsonLd";
import { DataCardMaster, dataMaster } from "@/data/dataMaster";
import { dataDetailInfoMaster } from "@/data/dataDetailInfoMaster";
import { notFound } from "next/navigation";
import { buildPageMetadata, getAbsoluteUrl } from "@/lib/seo";

type PageParam = Pick<DataCardMaster, "page">["page"];
type Props = { params: Promise<{ page: PageParam }> };

const masterMetadataMap: Record<
  PageParam,
  {
    primaryKeyword: string;
    description: string;
  }
> = {
  pizza_tiramisu: {
    primaryKeyword: "Book Pizza and Tiramisu Class Rome",
    description:
      "Забронюйте pizza and tiramisu class у Rome: hands-on формат, україномовний супровід, центральна локація та швидке підтвердження заявки в Cucina Roma.",
  },
  pasta_tiramisu: {
    primaryKeyword: "Book Pasta and Tiramisu Class Rome",
    description:
      "Забронюйте pasta and tiramisu class у Rome: автентичні техніки, україномовна підтримка, локація в центрі та direct booking на сторінці Cucina Roma.",
  },
  nioki_tiramisu: {
    primaryKeyword: "Book Gnocchi and Tiramisu Class Rome",
    description:
      "Забронюйте gnocchi and tiramisu class у Rome: покроковий формат, central city location та просте online booking підтвердження в Cucina Roma.",
  },
  wino: {
    primaryKeyword: "Book Wine Tasting Rome Experience",
    description:
      "Забронюйте wine tasting Rome experience: італійські pairings, україномовний супровід, локація в центрі та швидке підтвердження бронювання в Cucina Roma.",
  },
};

export function generateStaticParams() {
  return dataMaster.map((item) => ({ page: item.page }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const detail = dataDetailInfoMaster[page];
  const metadataConfig = masterMetadataMap[page];

  if (!detail || !metadataConfig) {
    return buildPageMetadata({
      pathname: "/",
      primaryKeyword: "Ukrainian Cooking Classes in Rome",
      description:
        "Cucina Roma для україномовних гостей: кулінарні майстер-класи в Римі, персональний супровід, центральна локація та зручне онлайн-бронювання форматів.",
      type: "website",
    });
  }

  return buildPageMetadata({
    pathname: `/master/${page}`,
    primaryKeyword: metadataConfig.primaryKeyword,
    description: metadataConfig.description,
    type: "article",
    image: getAbsoluteUrl(detail.imageUrl),
  });
}

export default async function MasterPage({ params }: Props) {
  const { page } = await params;
  const existsPage = dataMaster.some((item) => item.page === page);

  if (!existsPage) {
    notFound();
  }

  return (
    <>
      <SectionDetailInfoMaster page={page} />
      <MasterJsonLd page={page} />
    </>
  );
}

