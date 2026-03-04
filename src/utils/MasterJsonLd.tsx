import Script from "next/script";
import { BASE_URL, getAbsoluteUrl } from "@/lib/seo";

export type MasterJsonLdContent = {
  pathname: string;
  title: string;
  description: string;
  imageUrl: string;
  durationHours: number;
  priceEur: number;
};

type Props = {
  content: MasterJsonLdContent;
};

export default function MasterJsonLd({ content }: Props) {
  const pageUrl = getAbsoluteUrl(content.pathname);
  const offerId = `${pageUrl}#offer`;
  const eventId = `${pageUrl}#event`;

  return (
    <Script
      id={`master-schema-${content.pathname.replace(/\W+/g, "-")}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Offer",
              "@id": offerId,
              url: pageUrl,
              price: content.priceEur,
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              category: "CookingClass",
              itemOffered: {
                "@id": eventId,
              },
            },
            {
              "@type": "Event",
              "@id": eventId,
              name: content.title,
              description: content.description,
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              duration: `PT${content.durationHours}H`,
              location: {
                "@type": "Place",
                name: "Cucina Roma",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Via del Pellegrino, 24",
                  addressLocality: "Rome",
                  postalCode: "00184",
                  addressRegion: "Lazio",
                  addressCountry: "IT",
                },
              },
              organizer: {
                "@type": "Organization",
                "@id": `${BASE_URL}#organization`,
                name: "Cucina Roma",
                url: BASE_URL,
                telephone: "+39 324 988 8194",
              },
              offers: {
                "@id": offerId,
              },
              image: [getAbsoluteUrl(content.imageUrl)],
            },
          ],
        }),
      }}
    />
  );
}
