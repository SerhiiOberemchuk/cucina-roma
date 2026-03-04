import type { Metadata } from "next";
import { Suspense } from "react";
import { Cormorant_Garamond, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import Cookies from "@/components/Cookies";
import SEOJsonLd from "@/utils/SEOJsonLd";
import { Toaster } from "sonner";
import ButtonScrollToTop from "@/components/ButtonScrollToTop";
import { Analytics } from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import VideoIntroduction from "@/components/VideoIntroduction";
import { BASE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

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
  metadataBase: new URL(BASE_URL),
  title: "Cooking Class Rome | Cooking Class in Rome | Cucina Roma",
  description:
    "Кулінарні майстер-класи в Римі для україномовних гостей: pizza, pasta, tiramisu і wine tasting у центрі міста з прямим online booking у Cucina Roma.",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/icons/lady.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cooking Class Rome | Cooking Class in Rome | Cucina Roma",
    description:
      "Кулінарні майстер-класи в Римі для україномовних гостей: pizza, pasta, tiramisu і wine tasting у центрі міста з прямим online booking у Cucina Roma.",
    url: BASE_URL,
    siteName: "Cucina Roma",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Cooking Class Rome - Cucina Roma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cooking Class Rome | Cooking Class in Rome | Cucina Roma",
    description:
      "Кулінарні майстер-класи в Римі для україномовних гостей: pizza, pasta, tiramisu і wine tasting у центрі міста з прямим online booking у Cucina Roma.",
    images: [DEFAULT_OG_IMAGE],
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
        <Suspense fallback={null}>
          <Cookies />
        </Suspense>
        <Suspense fallback={null}>
          <Toaster richColors />
        </Suspense>
        <Analytics />
        <VercelAnalytics />
        <div className="fixed right-4 bottom-[34px] z-[10000] md:right-10">
          <Suspense fallback={null}>
            <VideoIntroduction />
          </Suspense>
          <div className="flex justify-end">
            <Suspense fallback={null}>
              <ButtonScrollToTop />
            </Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}

