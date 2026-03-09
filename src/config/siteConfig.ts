export const siteConfig = {
  brand: {
    short: "نوافذ شتر",
    long: "نوافذ شتر للحدادة والألمنيوم",
    logo: "/brand/logo.svg",
  },
  branches: {
    riyadh: {
      city: "الرياض",
      phone: "+966557886159",
      whatsapp: "+966557886159",
      address: "2152-2234 يزيد الحميري، بدر، الرياض 14727",
    },
    jeddah: {
      city: "جدة",
      phone: "+966557886159",
      whatsapp: "+966557886159",
    },
  },
  email: "info@nwafzshutter.shop",
  warranty: "5 أعوام على المحركات و 10 أعوام على الشرائح",
  experience: "خبرة 10 سنوات",
  steps: [
    "المقابلة والاتفاق",
    "التقييم والتسعير",
    "البدء في التصنيع",
    "التركيب والتسليم",
  ],
  ramadan: {
    isRamadanMode: true,
    ramadanHoursText: "أوقات العمل في رمضان: مساءً",
    ctas: [
      "احصل على عرض سعر بدون التزام",
      "رد سريع على واتساب",
      "أفضل وقت للتواصل مساءً",
    ],
  },
  keywords: [
    "شتر شبابيك",
    "شتر رول",
    "شتر نوافذ",
    "تركيب شتر",
    "شتر داخلي",
    "شتر خارجي",
    "شتر كهربائي",
    "شتر يدوي",
  ],
  whatsappMessageTemplate:
    "السلام عليكم، أبغى عرض سعر لـ شتر شبابيك (شتر رول). المدينة: {city}. ممكن تحديد موعد معاينة؟",
} as const;

export type SiteConfig = typeof siteConfig;
