import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <Section title="آراء العملاء" muted>
      <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 pb-2 scrollbar-hide">
        <div className="flex gap-4 md:gap-6" style={{ width: "max-content" }}>
          {testimonials.map((t) => (
            <Card
              key={t.id}
              variant="testimonial"
              className="flex-shrink-0 w-[82vw] max-w-[300px] md:w-[45vw] md:min-w-[280px] md:max-w-[400px] lg:w-[30vw] lg:min-w-[280px] lg:max-w-[380px] snap-center min-h-[200px]"
            >
              <div className="flex flex-col h-full">
                <p className="text-zinc-600 italic leading-relaxed flex-1">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center justify-between gap-2 mt-auto pt-4">
                  <p className="text-sm text-zinc-500">
                    — {t.name}
                    {t.city ? `، ${t.city}` : ""}
                  </p>
                  {t.rating > 0 && (
                    <span className="text-amber-500 text-sm shrink-0" aria-label={`${t.rating} نجوم`}>
                      {"★".repeat(t.rating)}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
