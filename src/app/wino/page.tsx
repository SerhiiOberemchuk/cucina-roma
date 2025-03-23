import SectionDetailInfoMaster from "@/components/common/SectionDetailInfoMaster/SectionDetailInfoMaster";
import SectionInstagram from "@/components/common/SectionInstagram";
import SectionPayCard from "@/components/common/SectionPayCard/SectionPayCard";

function PageWino() {
  return (
    <>
      <SectionDetailInfoMaster page="/wino" />
      <SectionPayCard />
      <SectionInstagram />
    </>
  );
}

export default PageWino;
