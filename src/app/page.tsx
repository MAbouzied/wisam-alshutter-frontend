import { Hero } from "@/components/sections/Hero";
import { QuoteFormWithConversion } from "@/components/sections/QuoteFormWithConversion";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Testimonials } from "@/components/sections/Testimonials";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/siteConfig";

export default function HomePage() {
  return (
    <>
      <Hero
        title="وسام الشتر — شتر شبابيك ورول"
        subtitle="تركيب شتر رول، شتر داخلي وخارجي، شتر كهربائي ويدوي. خبرة 10 سنوات. الضمان: 5 أعوام على المحركات و 10 أعوام على الشرائح."
      />
      <Section
        title="لماذا وسام الشتر؟"
        muted={false}
      >
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <Card variant="benefit">
            <p className="font-bold text-primary text-lg">
              {siteConfig.experience}
            </p>
            <p className="text-zinc-600 text-sm mt-1">
              في تركيب شتر نوافذ وشتر شبابيك
            </p>
          </Card>
          <Card variant="benefit">
            <p className="font-bold text-primary text-lg">
              {siteConfig.warranty}
            </p>
            <p className="text-zinc-600 text-sm mt-1">ضمان شامل على المنتجات</p>
          </Card>
          <Card variant="benefit">
            <p className="font-bold text-primary text-lg">الرياض وجدة</p>
            <p className="text-zinc-600 text-sm mt-1">خدمة في فرعين</p>
          </Card>
        </div>
      </Section>
      <Section title="أعمالنا" muted>
        <PortfolioPreview />
      </Section>
      <Section title="الأسئلة الشائعة">
        <FAQAccordion />
      </Section>
      <Testimonials />
      <Section
        title="احصل على عرض سعر بدون التزام"
        muted
      >
        <div className="flex justify-center">
          <QuoteFormWithConversion id="quote-form" />
        </div>
      </Section>
    </>
  );
}
