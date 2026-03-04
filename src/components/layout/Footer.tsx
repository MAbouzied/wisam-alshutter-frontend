import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

const linksColumnA = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/our-work", label: "أعمالنا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

const linksColumnB = [
  { href: "/faq", label: "الأسئلة الشائعة" },
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/site-map", label: "خريطة الموقع" },
  { href: "/jeddah", label: "جدة" },
  { href: "/riyadh", label: "الرياض" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Image
                src={siteConfig.brand.logo}
                alt=""
                width={100}
                height={30}
                className="h-8 w-auto object-contain [filter:brightness(0)_invert(1)]"
              />
            </Link>
            <p className="text-lg font-semibold text-white mb-2">
              {siteConfig.brand.long}
            </p>
            <p className="text-sm text-zinc-400">{siteConfig.experience}</p>
            <p className="text-sm text-zinc-400 mt-1">{siteConfig.warranty}</p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">روابط</h3>
              <ul className="space-y-2">
                {linksColumnA.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">معلومات</h3>
              <ul className="space-y-2">
                {linksColumnB.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">تواصل معنا</h3>
            <p className="text-sm text-zinc-400">
              <span className="text-zinc-500">الرياض:</span>{" "}
              {siteConfig.branches.riyadh.address}
            </p>
            <p className="text-sm mt-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="text-sm text-zinc-400 mt-3">
              <span className="text-zinc-500">{siteConfig.branches.jeddah.city}:</span>{" "}
              <a
                href={`tel:${siteConfig.branches.jeddah.phone}`}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {siteConfig.branches.jeddah.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-700 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {siteConfig.brand.long}
        </div>
      </div>
    </footer>
  );
}
