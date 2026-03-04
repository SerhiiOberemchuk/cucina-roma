import type { Metadata } from "next";
import SectionDetailInfoMaster, {
  MasterDetailContent,
} from "@/components/common/sections/SectionDetailInfoMaster/SectionDetailInfoMaster";
import MasterJsonLd, { MasterJsonLdContent } from "@/utils/MasterJsonLd";
import { buildPageMetadata, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  pathname: "/master/nioki_tiramisu",
  primaryKeyword: "Book Gnocchi and Tiramisu Class Rome",
  description:
    "Забронюйте gnocchi and tiramisu class у Rome: покроковий формат, central city location та просте online booking підтвердження в Cucina Roma.",
  type: "article",
  image: getAbsoluteUrl("/images/info_nioki.jpg"),
});

const detailContent: MasterDetailContent = {
  subtitle: "НЬОКІ ТА ТІРАМІСУ",
  imageUrl: "/images/info_nioki.jpg",
  title: "Приготування ньокі та тірамісу",
  location: "00184 Roma RM Via del Pellegrino, 24",
  describe: [
    "Дізнайтеся секрети ідеального тіста, навчіться формувати ньоккі та готувати їх із традиційними соусами. Ви створите справжній кулінарний шедевр!",
    "Приготуйте справжній тірамісу під керівництвом досвідченого кондитера та створіть десерт, що тане в роті.",
  ],
  priceEur: 75,
  durationHours: 2,
  includeProsecco: true,
};

const jsonLdContent: MasterJsonLdContent = {
  pathname: "/master/nioki_tiramisu",
  title: detailContent.title,
  description: detailContent.describe.join(" "),
  imageUrl: detailContent.imageUrl,
  durationHours: detailContent.durationHours,
  priceEur: detailContent.priceEur,
};

export default function MasterNiokiTiramisuPage() {
  return (
    <>
      <SectionDetailInfoMaster content={detailContent} />
      <MasterJsonLd content={jsonLdContent} />
    </>
  );
}
