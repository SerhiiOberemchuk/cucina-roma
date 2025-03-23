import SectionDetailInfoMaster from "@/components/common/SectionDetailInfoMaster/SectionDetailInfoMaster";
import SectionInstagram from "@/components/common/SectionInstagram";
import SectionPayCard from "@/components/common/SectionPayCard/SectionPayCard";

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
