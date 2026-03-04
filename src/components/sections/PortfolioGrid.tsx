"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { portfolioItems, type PortfolioTag } from "@/lib/portfolioData";
import { track } from "@/lib/analytics";

const filters: { value: PortfolioTag | "all"; label: string }[] = [
  { value: "all", label: "الكل" },
  { value: "شتر", label: "شتر" },
  { value: "شبابيك ألمنيوم", label: "شبابيك ألمنيوم" },
  { value: "أبواب ألمنيوم", label: "أبواب ألمنيوم" },
];

function getCityFromPath(path: string | null): string {
  if (!path) return "";
  if (path.startsWith("/jeddah")) return "جدة";
  if (path.startsWith("/riyadh")) return "الرياض";
  return "";
}

export function PortfolioGrid() {
  const pathname = usePathname();
  const [activeFilter, setActiveFilter] = useState<PortfolioTag | "all">("all");
  const [lightboxItem, setLightboxItem] = useState<
    (typeof portfolioItems)[0] | null
  >(null);

  const validItems = portfolioItems.filter(
    (item) => item.image && item.image.startsWith("/")
  );
  const filtered =
    activeFilter === "all"
      ? validItems
      : validItems.filter((item) => item.tags.includes(activeFilter));

  const handleItemClick = (item: (typeof portfolioItems)[0]) => {
    track("portfolio_open", {
      itemId: item.id,
      city: getCityFromPath(pathname),
    });
    setLightboxItem(item);
  };

  useEffect(() => {
    if (!lightboxItem) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxItem(null);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightboxItem]);

  return (
    <section>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActiveFilter(f.value)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              activeFilter === f.value
                ? "bg-primary text-white shadow-[0_2px_8px_rgba(13,92,61,0.3)]"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleItemClick(item)}
            className="group rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50 text-right w-full cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            aria-label={`عرض ${item.title}`}
          >
            <div className="relative aspect-[4/3] bg-zinc-200 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <span className="text-white text-sm font-medium">
                  {item.title}
                </span>
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
          </button>
        ))}
      </div>

      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl">
              <Image
                src={lightboxItem.image}
                alt={lightboxItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <h2
              id="lightbox-title"
              className="text-white text-lg font-bold mt-4 text-center"
            >
              {lightboxItem.title}
            </h2>
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              className="absolute top-3 right-3 rounded-full bg-white/20 p-2.5 text-white hover:bg-white/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label="إغلاق"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
