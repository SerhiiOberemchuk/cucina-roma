import Script from "next/script";
import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_STORAGE_KEY,
} from "@/utils/analytics";

export function Analytics() {
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            id="gtag-consent-default"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('consent', 'default', {
                  analytics_storage: 'denied',
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  wait_for_update: 500
                });
              `,
            }}
          />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', Date.now());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  anonymize_ip: true
                });
                try {
                  var consent = localStorage.getItem('${COOKIE_CONSENT_STORAGE_KEY}');
                  if (consent === '${COOKIE_CONSENT_ACCEPTED}') {
                    gtag('consent', 'update', {
                      analytics_storage: 'granted',
                      ad_storage: 'denied',
                      ad_user_data: 'denied',
                      ad_personalization: 'denied'
                    });
                  }
                } catch (e) {}
              `,
            }}
          />
        </>
      )}
    </>
  );
}
