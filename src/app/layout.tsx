import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Cookies from "@/components/Cookies";
import SEOJsonLd from "@/utils/SEOJsonLd";
import { Toaster } from "sonner";
import ButtonScrollToTop from "@/components/ButtonScrollToTop";
import { Analytics } from "@/components/Analytics";
import VideoIntroduction from "@/components/VideoIntroduction";

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
  metadataBase: new URL("https://www.cucinaroma.com.ua"),
  openGraph: {
    title: "Cucina Roma",
    description:
      "Авторські екскурсії в Римі. Ватикан, гастротури, трансфери, організація свят. Українською мовою.",
    url: "https://www.cucinaroma.com.ua",
    siteName: "Cucina Roma",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "/images/hero_foto1.jpg",
        width: 1200,
        height: 630,
        alt: "Cucina Roma - Твій гід у Римі",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cucina Roma",
    description: "Мрії про Рим та справжню італійську кухню стають реальністю.",
    images: ["/images/hero_foto1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${cormorantGaramond.variable} ${ibmPlexSerif.variable} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <SEOJsonLd />
        <main className="flex-1">{children}</main>
        <Footer />
        <Cookies />
        <Toaster richColors />
        <ButtonScrollToTop />
        <Analytics />
        <VideoIntroduction />
      </body>
    </html>
  );
}
