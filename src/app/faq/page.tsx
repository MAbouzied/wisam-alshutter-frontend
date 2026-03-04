import { Hero } from "@/components/sections/Hero";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Section } from "@/components/ui/Section";
import { ServiceCtaLink } from "@/components/ui/ServiceCtaLink";

import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "الأسئلة الشائعة | وسام الشتر",
  description: "أسئلة شائعة عن شتر رول، تركيب شتر، الضمان، رمضان، والخدمات. وسام الشتر للحدادة والألمنيوم.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <Hero
        title="الأسئلة الشائعة"
        subtitle="إجابات على أسئلتكم حول شتر شبابيك، شتر رول، تركيب شتر، والضمان."
        showCta={true}
      />
      <Section title="الأسئلة الشائعة">
        <FAQAccordion />
        <div className="mt-12 text-center">
          <ServiceCtaLink
            href="/contact#quote-form"
            service="عرض سعر"
            className="inline-flex rounded-2xl bg-primary px-8 py-3.5 font-medium text-white hover:bg-primary-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            احصل على عرض سعر
          </ServiceCtaLink>
        </div>
      </Section>
    </>
  );
}
