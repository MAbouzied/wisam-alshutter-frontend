import { siteConfig } from "@/config/siteConfig";

export type BranchKey = "jeddah" | "riyadh";

export function getWhatsAppUrl(city: "جدة" | "الرياض"): string {
  const key: BranchKey = city === "جدة" ? "jeddah" : "riyadh";
  const number = siteConfig.branches[key].whatsapp.replace(/\D/g, "");
  const message = siteConfig.whatsappMessageTemplate.replace("{city}", city);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export interface QuoteFormDataForWhatsApp {
  name: string;
  city: "جدة" | "الرياض";
  shutterType: string;
  message?: string;
}

const shutterTypeLabels: Record<string, string> = {
  رول: "شتر رول",
  داخلي: "شتر داخلي",
  خارجي: "شتر خارجي",
};

export function getWhatsAppQuoteUrl(data: QuoteFormDataForWhatsApp): string {
  const key: BranchKey = data.city === "جدة" ? "jeddah" : "riyadh";
  const number = siteConfig.branches[key].whatsapp.replace(/\D/g, "");
  const shutterLabel = shutterTypeLabels[data.shutterType] ?? data.shutterType;
  const lines = [
    "السلام عليكم،",
    `الاسم: ${data.name}`,
    `المدينة: ${data.city}`,
    `نوع الشتر: ${shutterLabel}`,
    "طريقة التواصل: واتساب",
  ];
  if (data.message?.trim()) {
    lines.push(`رسالة: ${data.message.trim()}`);
  }
  const message = lines.join("\n");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getTelUrl(city: "جدة" | "الرياض"): string {
  const key: BranchKey = city === "جدة" ? "jeddah" : "riyadh";
  return `tel:${siteConfig.branches[key].phone}`;
}
