import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import ModalWindow from "@/components/ModalWindow/ModalWindow";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant_garamond",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-IBM_plex_serif",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Cucina Roma",
  description:
    "Мрії про Рим та справжню італійську кухню стають реальністю. Відкривайте Італію з душею разом з нами. Вітаємо! Мрієте про подорож до Рима? Ми — україномовний туристичний проєкт, який допоможе вам відкрити Італію. Авторські екскурсії античним Римом. Ватикан. Індивідуальні екскурсії за межі Риму. Організація та комфортний трансфер. Гастрономічні екскурсії для поціновувачів традиційної італійської кухні. Розробка індивідуальних програм для груп туристів, повне супроводження. Організація особливих подій у топових локаціях.",
  icons: {
    icon: "/icons/lady.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <Script
          src="https://secure.wayforpay.com/server/pay-widget.js"
          strategy="beforeInteractive"
          id="widget-wfp-script"
        />
      </head>

      <body
        className={`${cormorantGaramond.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <ModalWindow />
      </body>
    </html>
  );
}
