import { Hero } from "@/components/sections/Hero";

import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "سياسة الخصوصية | نوافذ شتر",
  description: "سياسة الخصوصية لموقع نوافذ شتر للحدادة والألمنيوم.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Hero
        title="سياسة الخصوصية"
        subtitle="نلتزم بحماية خصوصيتكم."
        showCta={false}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-right space-y-8">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-2">جمع المعلومات</h2>
            <p className="text-zinc-600 leading-relaxed">
              نجمع المعلومات التي تقدمها لنا عبر نموذج التواصل وطلبات عرض السعر
              لخدمتك بشكل أفضل.
            </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-2">استخدام المعلومات</h2>
            <p className="text-zinc-600 leading-relaxed">
              نستخدم معلوماتك للرد على استفساراتك وتقديم عروض الأسعار وخدمة
              العملاء.
            </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-2">حماية البيانات</h2>
            <p className="text-zinc-600 leading-relaxed">
              نحرص على حماية بياناتك ولا نشاركها مع أطراف ثالثة دون موافقتك.
            </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-zinc-900 mb-2">التواصل</h2>
            <p className="text-zinc-600 leading-relaxed">
              لأي استفسار حول الخصوصية، تواصل معنا عبر البريد الإلكتروني أو
              واتساب.
            </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
