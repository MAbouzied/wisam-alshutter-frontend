import { Hero } from "@/components/sections/Hero";
import { QuoteFormWithConversion } from "@/components/sections/QuoteFormWithConversion";
import { ContactBranchCards } from "@/components/sections/ContactBranchCards";
import { siteConfig } from "@/config/siteConfig";

import { createMetadata } from "@/config/metadata";

export const metadata = createMetadata({
  title: "تواصل معنا | وسام الشتر",
  description: "تواصل مع وسام الشتر — الرياض وجدة. واتساب، اتصال، أو نموذج طلب عرض سعر.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        title="تواصل معنا"
        subtitle="نرد سريعاً على واتساب. احصل على عرض سعر بدون التزام."
        showCta={true}
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <ContactBranchCards />
          <p className="text-zinc-600 mb-10">
            البريد:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary hover:underline font-medium"
            >
              {siteConfig.email}
            </a>
          </p>
          <QuoteFormWithConversion id="quote-form" />
        </div>
      </section>
    </>
  );
}
