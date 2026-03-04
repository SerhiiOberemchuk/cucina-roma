import type { Metadata } from "next";
import SectionDetailInfoMaster, {
  MasterDetailContent,
} from "@/components/common/sections/SectionDetailInfoMaster/SectionDetailInfoMaster";
import MasterJsonLd, { MasterJsonLdContent } from "@/utils/MasterJsonLd";
import { buildPageMetadata, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  pathname: "/master/pasta_tiramisu",
  primaryKeyword: "Book Pasta and Tiramisu Class Rome",
  description:
    "Забронюйте pasta and tiramisu class у Rome: автентичні техніки, україномовна підтримка, локація в центрі та direct booking на сторінці Cucina Roma.",
  type: "article",
  image: getAbsoluteUrl("/images/info_pasta.jpg"),
});

const detailContent: MasterDetailContent = {
  subtitle: "ПАСТА ТА ТІРАМІСУ",
  imageUrl: "/images/info_pasta.jpg",
  title: "Приготування пасти та тірамісу",
  location: "00184 Roma RM Via del Pellegrino, 24",
  describe: [
    "В процесі приготування пасти під керівництвом шеф-кухарів ви опануєте секрети італійської кухні, створите ідеальну пасту та насолодитеся власними стравами з келихом італійського вина.",
    "Приготуйте справжній тірамісу під керівництвом досвідченого кондитера та створіть десерт, що тане в роті.",
  ],
  priceEur: 75,
  durationHours: 2,
  includeProsecco: true,
};

const jsonLdContent: MasterJsonLdContent = {
  pathname: "/master/pasta_tiramisu",
  title: detailContent.title,
  description: detailContent.describe.join(" "),
  imageUrl: detailContent.imageUrl,
  durationHours: detailContent.durationHours,
  priceEur: detailContent.priceEur,
};

export default function MasterPastaTiramisuPage() {
  return (
    <>
      <SectionDetailInfoMaster content={detailContent} />
      <MasterJsonLd content={jsonLdContent} />
    </>
  );
}
