import { Hero } from "@/components/sections/Hero";
import { QuoteFormWithConversion } from "@/components/sections/QuoteFormWithConversion";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/config/siteConfig";

import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "شتر شبابيك جدة | نوافذ شتر",
  description: "تركيب شتر رول، شتر داخلي وخارجي في جدة. نوافذ شتر — خبرة 10 سنوات.",
  path: "/jeddah",
});

export default function JeddahPage() {
  return (
    <>
      <Hero
        title="شتر شبابيك جدة"
        subtitle="تركيب شتر رول، شتر داخلي، شتر خارجي في جدة. رد سريع على واتساب. احصل على عرض سعر بدون التزام."
      />
      <Section title="لماذا نوافذ شتر في جدة؟">
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <Card variant="benefit">
            <p className="font-bold text-primary">{siteConfig.experience}</p>
          </Card>
          <Card variant="benefit">
            <p className="font-bold text-primary">{siteConfig.warranty}</p>
          </Card>
          <Card variant="benefit">
            <p className="font-bold text-primary">رد سريع على واتساب</p>
          </Card>
        </div>
      </Section>
      <Section title="أعمالنا في جدة" muted>
        <PortfolioGrid />
      </Section>
      <Section title="احصل على عرض سعر — جدة" muted>
        <div className="flex justify-center">
          <QuoteFormWithConversion id="quote-form" />
        </div>
      </Section>
    </>
  );
}
