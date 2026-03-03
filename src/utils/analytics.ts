export const COOKIE_CONSENT_STORAGE_KEY = "cookieConsent";
export const COOKIE_CONSENT_ACCEPTED = "accepted";
export const COOKIE_CONSENT_DECLINED = "declined";

type EventParams = Record<string, string | number | boolean | undefined>;

type ConsentModeState = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

type GtagFn = {
  (command: "consent", action: "update", params: ConsentModeState): void;
  (command: "event", eventName: string, params?: EventParams): void;
};

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

function getConsentModeState(isGranted: boolean): ConsentModeState {
  return {
    analytics_storage: isGranted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
}

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  return typeof window.gtag === "function" ? window.gtag : null;
}

export function updateConsent(isGranted: boolean) {
  const gtag = getGtag();
  if (!gtag) return;

  gtag("consent", "update", getConsentModeState(isGranted));
}

export function trackEvent(eventName: string, params: EventParams = {}) {
  const gtag = getGtag();
  if (!gtag) return;

  const consent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (consent !== COOKIE_CONSENT_ACCEPTED) return;

  gtag("event", eventName, params);
}
