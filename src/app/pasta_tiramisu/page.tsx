import SectionDetailInfoMaster from "@/components/common/SectionDetailInfoMaster/SectionDetailInfoMaster";
import SectionInstagram from "@/components/common/SectionInstagram";
import SectionPayCard from "@/components/common/SectionPayCard/SectionPayCard";

function PagePastaTiramisu() {
  return (
    <>
      <SectionDetailInfoMaster page="/pasta_tiramisu" />
      <SectionPayCard />
      <SectionInstagram />
    </>
  );
}

export default PagePastaTiramisu;
