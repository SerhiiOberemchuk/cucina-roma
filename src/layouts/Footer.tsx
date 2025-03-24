import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import NavMenu from "@/components/common/NavMenu";
import InstagramLink from "@/components/common/Links/InstagramLink";
import WhatsAppLink from "@/components/common/Links/WhatsAppLink";

function Footer() {
  const data = new Date();

  return (
    <footer className="bg-main_blue pt-10 pb-4 md:pt-6 md:pb-0">
      <Container className="flex flex-col gap-16 md:gap-10">
        <div className="flex flex-col gap-9 md:flex-row md:justify-between">
          <Logo type="footer" />
          <NavMenu
            type="footer"
            className="flex flex-col gap-4 xl:w-[304px] xl:flex-row xl:justify-between xl:gap-0"
          />
          <div className="flex flex-col gap-4 md:gap-6">
            <p className="btn_text text-white">Підпишись</p>
            <ul className="flex items-center gap-4 md:justify-around md:gap-0">
              <li className="h-8">
                <WhatsAppLink place="footer" />
              </li>
              <li className="h-8">
                <InstagramLink />
              </li>
            </ul>
          </div>
        </div>
        <p className="border-grey_stroke_logo w-full border-t py-6 text-center text-[12px] leading-[150%] font-normal text-white md:text-[16px] md:font-medium md:tracking-wide">
          <span>{data.getFullYear()}</span> © Усі права захищені
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
