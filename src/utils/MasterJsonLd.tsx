import Script from "next/script";
import { DataCardMaster, dataMaster } from "@/data/dataMaster";
import { dataDetailInfoMaster } from "@/data/dataDetailInfoMaster";
import { BASE_URL, getAbsoluteUrl } from "@/lib/seo";

type Props = {
  page: DataCardMaster["page"];
};

export default function MasterJsonLd({ page }: Props) {
  const master = dataMaster.find((item) => item.page === page);
  const detail = dataDetailInfoMaster[page];

  if (!master || !detail) {
    return null;
  }

  const pageUrl = getAbsoluteUrl(`/master/${page}`);
  const offerId = `${pageUrl}#offer`;
  const eventId = `${pageUrl}#event`;

  return (
    <Script
      id={`master-schema-${page}`}
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
              price: master.prise,
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
              name: detail.title,
              description: detail.describe.join(" "),
              eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              duration: `PT${master.duration}H`,
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
              image: [getAbsoluteUrl(detail.imageUrl)],
            },
          ],
        }),
      }}
    />
  );
}

