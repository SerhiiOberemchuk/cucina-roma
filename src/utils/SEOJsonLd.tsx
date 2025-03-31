import Script from "next/script";

export default function SEOJsonLd() {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Cucina Roma",
          image: "https://www.cucinaroma.com.ua/images/hero_foto1.jpg",
          "@id": "https://www.cucinaroma.com.ua",
          url: "https://www.cucinaroma.com.ua",
          telephone: "+39 324 988 8194",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IT",
            addressLocality: "Roma",
            addressRegion: "Lazio",
          },
          description:
            "Україномовні авторські екскурсії у Римі, трансфери, гастротури, події та супровід.",
          geo: {
            "@type": "GeoCoordinates",
            latitude: 41.8960565,
            longitude: 12.4712456,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "09:00",
              closes: "15:00",
            },
          ],
          sameAs: [
            "https://www.instagram.com/guide_transfer_roma?igsh=eGNhZjg4NThhNXRl&utm_source=qr", // заміни
            // "https://www.tiktok.com/@...",  // заміни
          ],
        }),
      }}
    />
  );
}
