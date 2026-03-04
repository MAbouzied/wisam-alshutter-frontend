"use client";

import { useEffect, useRef, useCallback } from "react";
import { siteConfig } from "@/config/siteConfig";
import { getWhatsAppUrl, getTelUrl } from "@/lib/whatsappHelper";
import { track, type Placement, type CityKey } from "@/lib/analytics";

export type BranchSelectorMode = "whatsapp" | "call";

const branches = [
  { key: "jeddah" as const, city: siteConfig.branches.jeddah.city },
  { key: "riyadh" as const, city: siteConfig.branches.riyadh.city },
];

function cityToKey(city: "جدة" | "الرياض"): CityKey {
  return city === "جدة" ? "jeddah" : "riyadh";
}

interface BranchSelectorProps {
  mode: BranchSelectorMode;
  open: boolean;
  onClose: () => void;
  onSelect: (city: "جدة" | "الرياض") => void;
  placement: Placement;
}

export function BranchSelector({
  mode,
  open,
  onClose,
  onSelect,
  placement,
}: BranchSelectorProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const lastButtonRef = useRef<HTMLButtonElement>(null);

  const handleSelect = useCallback(
    (city: "جدة" | "الرياض") => {
      const cityKey = cityToKey(city);
      if (mode === "whatsapp") {
        track("whatsapp_click", { city: cityKey, placement });
        window.open(getWhatsAppUrl(city), "_blank", "noopener,noreferrer");
      } else {
        track("call_click", { city: cityKey, placement });
        window.location.href = getTelUrl(city);
      }
      onSelect(city);
      onClose();
    },
    [mode, onSelect, onClose, placement]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const focusables = overlayRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables?.length) return;
        const first = focusables[0] as HTMLElement;
        const last = focusables[focusables.length - 1] as HTMLElement;
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [open, onClose]
  );

  useEffect(() => {
    if (open) {
      firstButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const title =
    mode === "whatsapp"
      ? "اختر الفرع للتواصل عبر واتساب"
      : "اختر الفرع للاتصال";

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="branch-selector-title"
      aria-describedby="branch-selector-desc"
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-[100] flex items-end md:items-center md:justify-center"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative w-full max-w-sm rounded-t-2xl md:rounded-2xl bg-white p-6 shadow-xl md:max-h-[90vh] transform transition-transform duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          id="branch-selector-title"
          className="text-lg font-bold text-zinc-900 mb-2"
        >
          {title}
        </h2>
        <p id="branch-selector-desc" className="text-sm text-zinc-600 mb-4">
          {mode === "whatsapp"
            ? "سيتم فتح واتساب مع رسالة جاهزة"
            : "سيتم الاتصال بالرقم المحدد"}
        </p>
        <div className="flex flex-col gap-2">
          {branches.map((b, i) => (
            <button
              key={b.key}
              ref={
                i === 0
                  ? firstButtonRef
                  : i === branches.length - 1
                    ? lastButtonRef
                    : undefined
              }
              type="button"
              onClick={() => handleSelect(b.city as "جدة" | "الرياض")}
              className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 text-right font-medium text-zinc-900 hover:bg-primary-muted/50 hover:border-primary/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
              aria-label={
                mode === "whatsapp"
                  ? `فتح واتساب لفرع ${b.city}`
                  : `الاتصال بفرع ${b.city}`
              }
            >
              <span>فرع {b.city}</span>
              {mode === "whatsapp" ? (
                <span className="text-[#25D366] text-sm">واتساب</span>
              ) : (
                <span className="text-primary text-sm">اتصال</span>
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-xl border border-zinc-300 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          aria-label="إلغاء"
        >
          إلغاء
        </button>
      </div>
    </div>
  );
}
