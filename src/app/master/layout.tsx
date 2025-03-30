import SectionInstagram from "@/components/common/sections/SectionInstagram";
import SectionPayCard from "@/components/common/sections/SectionPayCard/SectionPayCard";

type Props = { children: React.ReactNode };

function Layout({ children }: Props) {
  return (
    <>
      {children}
      <SectionPayCard />
      <SectionInstagram />
    </>
  );
}

export default Layout;
