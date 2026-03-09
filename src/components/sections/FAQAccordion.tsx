"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "ما أنواع الشتر التي تقدمونها؟",
    answer:
      "نقدم شتر رول، شتر داخلي، وشتر خارجي. كما نوفر شتر كهربائي وشتر يدوي حسب احتياجك. تركيب شتر يتم باحترافية في الرياض وجدة.",
  },
  {
    question: "ما مدة الضمان على الشتر؟",
    answer:
      "الضمان: 5 أعوام على المحركات و 10 أعوام على الشرائح. نلتزم بضمان جودة منتجاتنا وخدمة ما بعد البيع.",
  },
  {
    question: "هل تركيب الشتر يتطلب تصريح؟",
    answer:
      "تركيب شتر داخلي عادة لا يتطلب تصريح. شتر خارجي قد يحتاج موافقة إدارة المبنى. ننصح بالاستفسار من إدارة العقار قبل التركيب.",
  },
  {
    question: "ما الفرق بين شتر رول والشتر العادي؟",
    answer:
      "شتر رول يجمع عند الفتح في علبة علوية ولا يأخذ مساحة. الشتر العادي (داخلي أو خارجي) يفتح للأسفل. شتر رول مناسب للنوافذ الصغيرة والمتوسطة.",
  },
  {
    question: "هل تتغير مواعيد العمل في رمضان؟",
    answer:
      "نعم، أوقات العمل في رمضان تكون مساءً. أفضل وقت للتواصل مساءً. نرد سريعاً على واتساب ويمكنك احصل على عرض سعر بدون التزام.",
  },
  {
    question: "كم تستغرق عملية التركيب؟",
    answer:
      "تركيب شتر نوافذ عادة يستغرق يوم واحد حسب عدد النوافذ. نتبع خطواتنا: المقابلة والاتفاق، التقييم والتسعير، البدء في التصنيع، ثم التركيب والتسليم.",
  },
  {
    question: "هل تقدمون شتر للشبابيك الألمنيوم؟",
    answer:
      "نعم، نقدم شتر شبابيك وشتر نوافذ متناسقة مع شبابيك ألمنيوم. نوافذ شتر للحدادة والألمنيوم يغطي كل احتياجاتك.",
  },
  {
    question: "ما أفضل نوع شتر للمنزل؟",
    answer:
      "شتر داخلي أنسب للغرف، شتر خارجي للحماية من الشمس والحرارة. شتر رول عملي للنوافذ الصغيرة. ننصح بمعاينة مجانية لتحديد الأنسب.",
  },
  {
    question: "هل يمكن تركيب شتر على نوافذ موجودة؟",
    answer:
      "نعم، نركّب شتر على نوافذ وشبابيك ألمنيوم موجودة. نقيّم الموقع ونقدم عرض سعر دقيق بعد المعاينة.",
  },
  {
    question: "ما مدن الخدمة؟",
    answer:
      "نخدم الرياض وجدة. فرع الرياض: 2152-2234 يزيد الحميري، بدر. فرع جدة متوفر للاستفسارات والطلبات.",
  },
  {
    question: "كيف أطلب عرض سعر؟",
    answer:
      "اتصل أو راسلنا على واتساب. نحدد موعد معاينة، نقيّم، ونقدم عرض سعر بدون التزام. رد سريع على واتساب.",
  },
  {
    question: "هل الشتر الكهربائي يحتاج صيانة؟",
    answer:
      "شتر كهربائي يحتاج فحص دوري بسيط للمحرك. الضمان 5 أعوام على المحركات. نقدم دعم فني عند الحاجة.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2 max-w-3xl mx-auto">
      {faqItems.map((item, i) => (
        <div
          key={i}
          className="rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-right text-zinc-900 font-medium hover:bg-zinc-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-2xl"
            aria-expanded={openIndex === i}
          >
            <span>{item.question}</span>
            <span
              className={`shrink-0 text-primary transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 pt-0 text-zinc-600 text-sm leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
