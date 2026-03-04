import type { Metadata } from "next";
import SectionDetailInfoMaster, {
  MasterDetailContent,
} from "@/components/common/sections/SectionDetailInfoMaster/SectionDetailInfoMaster";
import MasterJsonLd, { MasterJsonLdContent } from "@/utils/MasterJsonLd";
import { buildPageMetadata, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  pathname: "/master/pizza_tiramisu",
  primaryKeyword: "Book Pizza and Tiramisu Class Rome",
  description:
    "Забронюйте pizza and tiramisu class у Rome: hands-on формат, україномовний супровід, центральна локація та швидке підтвердження заявки в Cucina Roma.",
  type: "article",
  image: getAbsoluteUrl("/images/info_pizza.jpg"),
});

const detailContent: MasterDetailContent = {
  subtitle: "ПІЦА ТА ТІРАМІСУ",
  imageUrl: "/images/info_pizza.jpg",
  title: "Приготування піци та тірамісу",
  location: "00184 Roma RM Via del Pellegrino, 24",
  describe: [
    "Відкрийте секрети італійської піци на майстер-класі в Римі!",
    "Навчіться готувати ідеальне тісто, обирати начинки та випікати піцу, що вразить навіть італійців. Завершіть заняття, насолоджуючись власноруч створеним шедевром із келихом вина.",
  ],
  priceEur: 75,
  durationHours: 2,
  includeProsecco: true,
};

const jsonLdContent: MasterJsonLdContent = {
  pathname: "/master/pizza_tiramisu",
  title: detailContent.title,
  description: detailContent.describe.join(" "),
  imageUrl: detailContent.imageUrl,
  durationHours: detailContent.durationHours,
  priceEur: detailContent.priceEur,
};

export default function MasterPizzaTiramisuPage() {
  return (
    <>
      <SectionDetailInfoMaster content={detailContent} />
      <MasterJsonLd content={jsonLdContent} />
    </>
  );
}
