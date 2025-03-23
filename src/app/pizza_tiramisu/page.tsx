import SectionDetailInfoMaster from "@/components/common/SectionDetailInfoMaster";
import SectionInstagram from "@/components/common/SectionInstagram";
import SectionPayCard from "@/components/common/SectionPayCard";

function PagePizzaTiramisu() {
  return (
    <>
      <SectionDetailInfoMaster page="/pizza_tiramisu" />
      <SectionPayCard />
      <SectionInstagram />
    </>
  );
}

export default PagePizzaTiramisu;
