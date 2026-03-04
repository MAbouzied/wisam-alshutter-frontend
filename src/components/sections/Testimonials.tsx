import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Testimonials() {
  return (
    <Section title="آراء العملاء" muted>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} variant="testimonial">
            <p className="text-zinc-600 italic mb-4 leading-relaxed">
              &quot;خدمة ممتازة وتركيب احترافي. أنصح بوسام الشتر.&quot;
            </p>
            <p className="text-sm text-zinc-500">— عميل</p>
          </Card>
        ))}
      </div>
      <p className="text-center text-sm text-zinc-500 mt-6">
        (محتوى تجريبي — سيتم استبداله بتقييمات حقيقية)
      </p>
    </Section>
  );
}
