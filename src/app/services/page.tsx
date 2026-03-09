import { Hero } from "@/components/sections/Hero";
import { ServiceCategoryCard } from "@/components/sections/ServiceCategoryCard";
import { ServiceCtaLink } from "@/components/ui/ServiceCtaLink";

const serviceCategories = [
  {
    title: "شتر شبابيك",
    desc: "تركيب شتر رول، شتر داخلي، شتر خارجي، شتر كهربائي ويدوي. خبرة 10 سنوات.",
    subtypes: ["شتر رول", "شتر داخلي", "شتر خارجي", "شتر كهربائي", "شتر يدوي"],
  },
  {
    title: "شبابيك ألمنيوم",
    desc: "شبابيك ألمنيوم مزدوجة ومفردة. تركيب وتصميم حسب الطلب.",
    subtypes: ["شبابيك مزدوجة", "شبابيك مفردة", "شبابيك زجاجي"],
  },
  {
    title: "أبواب ألمنيوم",
    desc: "أبواب ألمنيوم للواجهات والمداخل. جودة نوافذ شتر.",
    subtypes: ["أبواب واجهات", "أبواب مداخل", "أبواب زجاجية"],
  },
];

import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "خدمات الشتر | نوافذ شتر",
  description: "خدمات الشتر: شتر رول، شتر داخلي، شتر خارجي، شتر كهربائي، شتر يدوي، شبابيك وأبواب ألمنيوم. الرياض وجدة.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="خدمات الشتر"
        subtitle="شتر شبابيك، شتر رول، شتر نوافذ، تركيب شتر، شبابيك وأبواب ألمنيوم. خبرة 10 سنوات."
        showCta={true}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {serviceCategories.map((cat) => (
              <ServiceCategoryCard
                key={cat.title}
                title={cat.title}
                desc={cat.desc}
                subtypes={cat.subtypes}
              />
            ))}
          </div>
          <div className="mt-16 text-center">
            <ServiceCtaLink
              href="/contact#quote-form"
              service="عرض سعر"
              className="inline-flex rounded-2xl bg-primary px-8 py-3.5 font-medium text-white transition-colors hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              احصل على عرض سعر
            </ServiceCtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
