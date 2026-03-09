import { Hero } from "@/components/sections/Hero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Section } from "@/components/ui/Section";
import { ServiceCtaLink } from "@/components/ui/ServiceCtaLink";

import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "أعمالنا | نوافذ شتر",
  description: "معرض أعمال نوافذ شتر: شتر، شبابيك ألمنيوم، أبواب ألمنيوم. الرياض وجدة.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <Hero
        title="أعمالنا"
        subtitle="معرض مشاريعنا في تركيب شتر شبابيك، شتر رول، شبابيك وأبواب ألمنيوم."
        showCta={true}
      />
      <Section title="معرض الأعمال" muted>
        <PortfolioGrid />
        <div className="mt-12 text-center">
          <ServiceCtaLink
            href="/contact#quote-form"
            service="عرض سعر"
            className="inline-flex rounded-2xl bg-primary px-8 py-3.5 font-medium text-white hover:bg-primary-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            اطلب عرض سعر لمشروعك
          </ServiceCtaLink>
        </div>
      </Section>
    </>
  );
}
