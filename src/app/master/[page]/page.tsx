import SectionDetailInfoMaster from "@/components/common/SectionDetailInfoMaster/SectionDetailInfoMaster";
import SectionInstagram from "@/components/common/SectionInstagram";
import SectionPayCard from "@/components/common/SectionPayCard/SectionPayCard";
import { DataCardMaster } from "@/data/dataMaster";

export default async function MasterPage({
  params,
}: {
  params: Promise<{ page: Pick<DataCardMaster, "page">["page"] }>;
}) {
  const { page } = await params;

  return (
    <>
      <SectionDetailInfoMaster page={page} />
      <SectionPayCard />
      <SectionInstagram />
    </>
  );
}
