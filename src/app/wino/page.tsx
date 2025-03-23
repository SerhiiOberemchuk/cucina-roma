import SectionDetailInfoMaster from "@/components/common/SectionDetailInfoMaster";
import SectionInstagram from "@/components/common/SectionInstagram";
import SectionPayCard from "@/components/common/SectionPayCard";

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
