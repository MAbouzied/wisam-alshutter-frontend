import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/siteConfig";
import { ServiceCtaLink } from "@/components/ui/ServiceCtaLink";

import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "من نحن | نوافذ شتر",
  description: "نوافذ شتر للحدادة والألمنيوم — خبرة 10 سنوات في تركيب شتر شبابيك. الرياض وجدة.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        title="من نحن"
        subtitle="نوافذ شتر للحدادة والألمنيوم — خبرة 10 سنوات في تركيب شتر رول، شتر نوافذ، شبابيك وأبواب ألمنيوم."
        showCta={true}
      />
      <Section title={siteConfig.experience}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-zinc-600 leading-relaxed mb-8">
            نقدم خدمات تركيب شتر شبابيك، شتر رول، شتر داخلي، شتر خارجي، شتر
            كهربائي ويدوي. نخدم الرياض وجدة بجودة عالية وضمان شامل.
          </p>

          <h3 className="text-xl font-bold text-zinc-900 mb-4">الضمان</h3>
          <p className="text-zinc-600 leading-relaxed mb-8">
            {siteConfig.warranty}
          </p>

          <h3 className="text-xl font-bold text-zinc-900 mb-4">
            خطوات عملنا
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-zinc-600 text-right">
            {siteConfig.steps.map((step) => (
              <li key={step} className="font-medium">
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <ServiceCtaLink
              href="/contact#quote-form"
              service="تواصل"
              className="inline-flex rounded-2xl bg-primary px-8 py-3.5 font-medium text-white hover:bg-primary-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              تواصل معنا
            </ServiceCtaLink>
          </div>
        </div>
      </Section>
    </>
  );
}
