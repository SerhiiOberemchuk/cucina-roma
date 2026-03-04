import Script from "next/script";
import { LINK_INSTAGRAM } from "@/data/linkInstagram";
import { BASE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

export default function SEOJsonLd() {
  return (
    <Script
      id="global-business-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${BASE_URL}#organization`,
              name: "Cucina Roma",
              url: BASE_URL,
              logo: `${BASE_URL}/icons/logo_horiz.svg`,
              sameAs: [LINK_INSTAGRAM, "https://wa.me/393249888194"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+39 324 988 8194",
                  contactType: "customer service",
                  areaServed: "IT",
                  availableLanguage: ["English", "Ukrainian", "Italian"],
                },
              ],
            },
            {
              "@type": "LocalBusiness",
              "@id": `${BASE_URL}#localbusiness`,
              name: "Cucina Roma",
              image: DEFAULT_OG_IMAGE,
              url: BASE_URL,
              telephone: "+39 324 988 8194",
              priceRange: "EUR 75-80",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via del Pellegrino, 24",
                postalCode: "00184",
                addressLocality: "Rome",
                addressRegion: "Lazio",
                addressCountry: "IT",
              },
              areaServed: {
                "@type": "City",
                name: "Rome",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.8960565,
                longitude: 12.4712456,
              },
              sameAs: [LINK_INSTAGRAM, "https://wa.me/393249888194"],
              parentOrganization: {
                "@id": `${BASE_URL}#organization`,
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
                  closes: "19:00",
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${BASE_URL}#website`,
              url: BASE_URL,
              name: "Cucina Roma",
              inLanguage: ["uk", "en"],
              publisher: {
                "@id": `${BASE_URL}#organization`,
              },
            },
          ],
        }),
      }}
    />
  );
}

