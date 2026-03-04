/**
 * Analytics helper — pushes to dataLayer if available, always console.logs
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export type Placement =
  | "header"
  | "drawer"
  | "footer"
  | "hero"
  | "form"
  | "page";

export type CityKey = "jeddah" | "riyadh";

export type AnalyticsEvent =
  | { event: "whatsapp_click"; city: CityKey; placement: Placement }
  | { event: "call_click"; city: CityKey; placement: Placement }
  | { event: "quote_submit"; city: string; contactMethod: string }
  | { event: "service_cta_click"; service: string; city: string; page: string }
  | { event: "portfolio_open"; itemId: string; city: string };

export function track(eventName: string, data: Record<string, unknown>): void {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
  }
  const payload = { event: eventName, ...data };
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(payload);
  }
  console.log("[Analytics]", payload);
}
