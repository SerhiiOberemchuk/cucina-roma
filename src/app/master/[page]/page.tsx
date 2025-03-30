import SectionDetailInfoMaster from "@/components/common/sections/SectionDetailInfoMaster/SectionDetailInfoMaster";

import { DataCardMaster } from "@/data/dataMaster";

export default async function MasterPage({
  params,
}: {
  params: Promise<{ page: Pick<DataCardMaster, "page">["page"] }>;
}) {
  const { page } = await params;

  return <SectionDetailInfoMaster page={page} />;
}
