import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import LinkYelow from "@/components/common/Links/LinkYelow";

function Header() {
  return (
    <header className="bg-main_blue py-5">
      <Container className="flex items-center justify-between">
        <Logo type="header" />

        <LinkYelow
          linkTitle="Бронювати"
          href="/#master"
          type="aLink"
          className="max-w-fit"
          aria_label="Посилання на секцію вибору майстер-класу"
        />
      </Container>
    </header>
  );
}

export default Header;
