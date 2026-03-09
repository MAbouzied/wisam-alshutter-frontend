import { Hero } from "@/components/sections/Hero";
import { QuoteFormWithConversion } from "@/components/sections/QuoteFormWithConversion";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/siteConfig";

import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "شتر شبابيك الرياض | نوافذ شتر",
  description: "تركيب شتر رول، شتر داخلي وخارجي في الرياض. نوافذ شتر — خبرة 10 سنوات. العنوان: بدر، الرياض.",
  path: "/riyadh",
});

export default function RiyadhPage() {
  return (
    <>
      <Hero
        title="شتر شبابيك الرياض"
        subtitle="تركيب شتر رول، شتر داخلي، شتر خارجي في الرياض. رد سريع على واتساب. احصل على عرض سعر بدون التزام."
      />
      <Section title="لماذا نوافذ شتر في الرياض؟">
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <Card variant="benefit">
            <p className="font-bold text-primary">{siteConfig.experience}</p>
          </Card>
          <Card variant="benefit">
            <p className="font-bold text-primary">{siteConfig.warranty}</p>
          </Card>
          <Card variant="benefit">
            <p className="font-bold text-primary">
              العنوان: {siteConfig.branches.riyadh.address}
            </p>
          </Card>
        </div>
      </Section>
      <Section title="أعمالنا في الرياض" muted>
        <PortfolioGrid />
      </Section>
      <Section title="احصل على عرض سعر — الرياض" muted>
        <div className="flex justify-center">
          <QuoteFormWithConversion id="quote-form" />
        </div>
      </Section>
    </>
  );
}
