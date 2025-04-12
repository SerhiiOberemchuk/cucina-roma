// import MobileMenu from "@/components/MobileMenu";
// import BookingLink from "@/components/common/Links/BookingLink";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
// import NavMenu from "@/components/common/NavMenu";
import LinkYelow from "@/components/common/Links/LinkYelow";

function Header() {
  return (
    <header className="bg-main_blue py-5">
      <Container className="flex items-center justify-between">
        <Logo type="header" />
        {/* <div className="hidden w-full max-w-[690px] items-center justify-between xl:flex">
          <NavMenu type="header" className="flex gap-[56px]" />
          <LinkYelow
            linkTitle="Бронювати"
            href="#master"
            className="max-w-fit"
          />
        </div>
        <MobileMenu /> */}
        <LinkYelow linkTitle="Бронювати" href="#master" className="max-w-fit" />
      </Container>
    </header>
  );
}

export default Header;
