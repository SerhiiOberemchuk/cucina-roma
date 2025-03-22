import MobileMenu from "@/components/MobileMenu";
import BookingLink from "@/components/common/BookingLink";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import NavMenu from "@/components/common/NavMenu";

function Header() {
  return (
    <header className="bg-main_blue py-5">
      <Container className="flex items-center justify-between">
        <Logo type="header" />
        <div className="hidden w-full max-w-[690px] items-center justify-between xl:flex">
          <NavMenu type="header" className="flex gap-[56px]" />
          <BookingLink className="max-w-fit" />
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}

export default Header;
