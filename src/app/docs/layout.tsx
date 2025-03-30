"use client";

import { usePathname } from "next/navigation";
import Container from "@/components/common/Container";
import ItemLinks from "@/components/common/Links/ItemLinks";
import { arrayCookiesPages } from "@/data/cookies_pages/arrayCoociesPages";
import WhatsAppLink from "@/components/common/Links/WhatsAppLink";

type Props = { children: React.ReactNode };

export default function Page({ children }: Props) {
  const pathname = usePathname();
  const pageName = pathname?.startsWith("/docs/") ? pathname.slice(6) : "";
  const arr = arrayCookiesPages.find((item) => item.page === pageName);

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
            <ItemLinks
              href="/docs"
              title="Документи"
              className={
                pathname === "/docs" ? "text-yellow_main" : "text-text"
              }
            />
            {arr && (
              <>
                <li className="px-1" role="presentation">
                  /
                </li>
                <ItemLinks
                  href={`/docs/${arr.page}`}
                  title={arr.titleForlistPages}
                  className={
                    pathname === `/docs/${arr.page}`
                      ? "text-yellow_main"
                      : "text-text"
                  }
                />
              </>
            )}
          </ul>
        </nav>
        {children}
      </Container>
    </section>
  );
}
