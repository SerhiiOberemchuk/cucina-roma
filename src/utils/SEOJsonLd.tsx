import Script from "next/script";
import { dataMaster } from "@/data/dataMaster";
import { dataDetailInfoMaster } from "@/data/dataDetailInfoMaster";
import { LINK_INSTAGRAM } from "@/data/linkInstagram";

const BASE_URL = "https://www.cucinaroma.com.ua";

export default function SEOJsonLd() {
  const serviceItems = dataMaster.map((item, index) => {
    const detail = dataDetailInfoMaster[item.page];
    const serviceUrl = `${BASE_URL}/master/${item.page}`;

    return {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: detail.title,
      serviceType: "Cooking Class",
      description: detail.describe[0] ?? detail.title,
      areaServed: {
        "@type": "City",
        name: "Rome",
      },
      provider: {
        "@id": `${BASE_URL}#localbusiness`,
      },
      offers: {
        "@type": "Offer",
        price: item.prise,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: serviceUrl,
      },
      position: index + 1,
    };
  });

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": `${BASE_URL}#localbusiness`,
              name: "Cucina Roma",
              image: `${BASE_URL}/images/hero_foto1.jpg`,
              url: BASE_URL,
              telephone: "+39 324 988 8194",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Via del Pellegrino, 24",
                postalCode: "00184",
                addressLocality: "Roma",
                addressRegion: "Lazio",
                addressCountry: "IT",
              },
              description:
                "Кулінарні майстер-класи в Римі з україномовним супроводом: піца, паста, тірамісу, ньокі та винна дегустація.",
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
                  closes: "19:00",
                },
              ],
              sameAs: [LINK_INSTAGRAM],
            },
            {
              "@type": "OfferCatalog",
              "@id": `${BASE_URL}#offers`,
              name: "Майстер-класи в Римі",
              itemListElement: serviceItems.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@id": service["@id"],
                },
                price: service.offers.price,
                priceCurrency: "EUR",
                url: service.offers.url,
              })),
            },
            ...serviceItems,
          ],
        }),
      }}
    />
  );
}
