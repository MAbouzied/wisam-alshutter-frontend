import { siteConfig } from "@/config/siteConfig";

export type BranchKey = "jeddah" | "riyadh";

export function getWhatsAppUrl(city: "جدة" | "الرياض"): string {
  const key: BranchKey = city === "جدة" ? "jeddah" : "riyadh";
  const number = siteConfig.branches[key].whatsapp.replace(/\D/g, "");
  const message = siteConfig.whatsappMessageTemplate.replace("{city}", city);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getTelUrl(city: "جدة" | "الرياض"): string {
  const key: BranchKey = city === "جدة" ? "jeddah" : "riyadh";
  return `tel:${siteConfig.branches[key].phone}`;
}
