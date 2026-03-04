"use client";

import { siteConfig } from "@/config/siteConfig";

export function RamadanBar() {
  if (!siteConfig.ramadan.isRamadanMode) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[70] w-full min-w-0 bg-primary text-white py-2.5 shrink-0"
      role="banner"
    >
      <div className="mx-auto max-w-[1200px] w-full px-4 md:px-6 text-center text-sm font-medium">
        {siteConfig.ramadan.ramadanHoursText}
      </div>
    </div>
  );
}
