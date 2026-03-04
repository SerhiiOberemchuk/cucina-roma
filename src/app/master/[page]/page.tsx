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
    primaryKeyword: "Pizza and Tiramisu Class Rome",
    description:
      "Майстер-клас pizza and tiramisu у Rome з україномовним супроводом, hands-on форматом, central location та швидким бронюванням у Cucina Roma.",
  },
  pasta_tiramisu: {
    primaryKeyword: "Pasta and Tiramisu Class Rome",
    description:
      "Майстер-клас pasta and tiramisu у Rome: автентичні техніки, україномовна підтримка, локація в центрі та direct booking на сторінці Cucina Roma.",
  },
  nioki_tiramisu: {
    primaryKeyword: "Gnocchi and Tiramisu Class Rome",
    description:
      "Gnocchi and tiramisu class у Rome для україномовних гостей: покроковий формат, central city location і просте online booking підтвердження.",
  },
  wino: {
    primaryKeyword: "Wine Tasting Rome Experience",
    description:
      "Wine tasting Rome experience з італійськими pairings, україномовним супроводом, локацією в центрі та швидким бронюванням у Cucina Roma.",
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
      primaryKeyword: "Cooking Class Rome",
      description:
        "Кулінарні майстер-класи в Римі для україномовних гостей: pizza, pasta, tiramisu і wine tasting у центрі міста з простим online booking.",
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

