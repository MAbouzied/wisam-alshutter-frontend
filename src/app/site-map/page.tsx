import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/config/metadata";

const routes = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/our-work", label: "أعمالنا" },
  { href: "/jeddah", label: "شتر شبابيك جدة" },
  { href: "/riyadh", label: "شتر شبابيك الرياض" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/site-map", label: "خريطة الموقع" },
];

export const metadata = createMetadata({
  title: "خريطة الموقع | وسام الشتر",
  description: "خريطة الموقع — جميع صفحات وسام الشتر للحدادة والألمنيوم.",
  path: "/site-map",
});

export default function SiteMapPage() {
  return (
    <Section title="خريطة الموقع" subtitle="جميع صفحات موقع وسام الشتر للحدادة والألمنيوم.">
      <ul className="max-w-2xl mx-auto space-y-3 text-right">
        {routes.map((r) => (
          <li key={r.href}>
            <Link
              href={r.href}
              className="text-primary hover:underline font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded"
            >
              {r.label}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
