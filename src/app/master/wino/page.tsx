import type { Metadata } from "next";
import SectionDetailInfoMaster, {
  MasterDetailContent,
} from "@/components/common/sections/SectionDetailInfoMaster/SectionDetailInfoMaster";
import MasterJsonLd, { MasterJsonLdContent } from "@/utils/MasterJsonLd";
import { buildPageMetadata, getAbsoluteUrl } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  pathname: "/master/wino",
  primaryKeyword: "Book Wine Tasting Rome Experience",
  description:
    "Забронюйте wine tasting Rome experience: італійські pairings, україномовний супровід, локація в центрі та швидке підтвердження бронювання в Cucina Roma.",
  type: "article",
  image: getAbsoluteUrl("/images/info_wino.jpg"),
});

const detailContent: MasterDetailContent = {
  subtitle: "ДЕГУСТАЦІЯ ВИНА ТА ЗАКУСКИ",
  imageUrl: "/images/info_wino.jpg",
  title: "Винна дегустація та італійські закуски",
  location: "00184 Roma RM Via del Pellegrino, 24",
  describe: [
    "Запрошуємо на винну дегустацію, що перенесе вас у Тоскану, Лаціо та Сицилію!",
    "Спробуйте добірні вина кожного регіону, доповнені брускетами, сирами, м’ясними делікатесами та моцарелою буфала.",
    "Відчуйте багатство італійської культури через смаки й традиції у душевній атмосфері Рима!",
  ],
  priceEur: 80,
  durationHours: 2,
  includeProsecco: false,
};

const jsonLdContent: MasterJsonLdContent = {
  pathname: "/master/wino",
  title: detailContent.title,
  description: detailContent.describe.join(" "),
  imageUrl: detailContent.imageUrl,
  durationHours: detailContent.durationHours,
  priceEur: detailContent.priceEur,
};

export default function MasterWinePage() {
  return (
    <>
      <SectionDetailInfoMaster content={detailContent} />
      <MasterJsonLd content={jsonLdContent} />
    </>
  );
}
