import Container from "@/components/common/Container";
import ItemLinks from "@/components/common/Links/ItemLinks";
import WhatsAppLink from "@/components/common/Links/WhatsAppLink";

type Props = { children: React.ReactNode };

export default function Page({ children }: Props) {
  return (
    <section className="py-10 xl:py-16">
      <Container className="relative">
        <WhatsAppLink place="hero_section" />
        <nav className="mb-7 uppercase">
          <ul className="textH4 flex flex-wrap">
            <ItemLinks href="/" title="Головна" />

            <li className="px-1" role="presentation">
              /
            </li>
            <ItemLinks href="/docs" title="Документи" className="text-text" />
          </ul>
        </nav>
        {children}
      </Container>
    </section>
  );
}
