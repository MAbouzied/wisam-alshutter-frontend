"use client";

import Link from "next/link";
import Image from "next/image";
import { portfolioItems } from "@/lib/portfolioData";
import { track } from "@/lib/analytics";
import { usePathname } from "next/navigation";

const DESKTOP_ITEMS = 8;
const MOBILE_ITEMS = 6;

function getCityFromPath(path: string | null): string {
  if (!path) return "";
  if (path.startsWith("/jeddah")) return "جدة";
  if (path.startsWith("/riyadh")) return "الرياض";
  return "";
}

export function PortfolioPreview() {
  const pathname = usePathname();
  const items = portfolioItems.slice(0, Math.max(DESKTOP_ITEMS, MOBILE_ITEMS));
  const desktopItems = items.slice(0, DESKTOP_ITEMS);
  const mobileItems = items.slice(0, MOBILE_ITEMS);

  const handleItemClick = (item: (typeof portfolioItems)[0]) => {
    track("portfolio_open", {
      itemId: item.id,
      city: getCityFromPath(pathname),
    });
  };

  return (
    <section>
      {/* Desktop: 2 rows, 4 columns */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {desktopItems.map((item) => (
          <Link
            key={item.id}
            href="/our-work"
            onClick={() => handleItemClick(item)}
            className="group block rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 text-right hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            aria-label={`عرض ${item.title}`}
          >
            <div className="relative aspect-[4/3] bg-zinc-200 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <span className="text-white text-sm font-medium">{item.title}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-zinc-900">{item.title}</h3>
              <div className="flex gap-1.5 mt-2 flex-wrap">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-200 text-zinc-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile: horizontal slider with peek effect (one full card + part of next) */}
      <div className="md:hidden overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-4 px-4 pb-2 mb-6 scrollbar-hide">
        <div className="flex gap-4" style={{ width: "max-content" }}>
          {mobileItems.map((item) => (
            <Link
              key={item.id}
              href="/our-work"
              onClick={() => handleItemClick(item)}
              className="flex-shrink-0 w-[82vw] max-w-[300px] snap-center group block rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 text-right"
              aria-label={`عرض ${item.title}`}
            >
              <div className="relative aspect-[4/3] bg-zinc-200 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="82vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <span className="text-white text-sm font-medium">{item.title}</span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-zinc-900 text-sm">{item.title}</h3>
                <div className="flex gap-1 mt-1.5 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/our-work"
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3.5 font-medium text-white hover:bg-primary-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
        >
          عرض المزيد
        </Link>
      </div>
    </section>
  );
}
