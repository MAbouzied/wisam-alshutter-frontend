"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { useConversion } from "@/components/providers/ConversionProvider";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدمات الشتر" },
  { href: "/our-work", label: "أعمالنا" },
  { href: "/jeddah", label: "جدة" },
  { href: "/riyadh", label: "الرياض" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
  { href: "/faq", label: "الأسئلة الشائعة" },
];

const secondaryLinks = [
  { href: "/privacy", label: "سياسة الخصوصية" },
  { href: "/site-map", label: "خريطة الموقع" },
];

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C2.95 22.5 0 19.55 0 16.5V4.5z" clipRule="evenodd" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
      <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden>
      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
    </svg>
  );
}

interface NavDrawerProps {
  open: boolean;
  onClose: () => void;
  onWhatsAppClick: () => void;
  onCallClick: () => void;
}

function NavDrawer({ open, onClose, onWhatsAppClick, onCallClick }: NavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const focusables = drawerRef.current?.querySelectorAll(
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
      firstFocusRef.current?.focus();
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={drawerRef}
      role="dialog"
      aria-modal="true"
      aria-label="القائمة الرئيسية"
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-[60] md:hidden"
    >
      <div
        className="absolute inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 h-full w-[min(85vw,320px)] bg-white shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-200">
          <span className="font-semibold text-zinc-900">القائمة</span>
          <button
            ref={firstFocusRef}
            type="button"
            onClick={onClose}
            className="p-2 -m-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            aria-label="إغلاق القائمة"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4" aria-label="روابط التنقل">
          {/* Primary CTAs at TOP */}
          <div className="px-4 pb-4 space-y-2">
            <Button
              variant="whatsapp"
              onClick={() => {
                onWhatsAppClick();
                onClose();
              }}
              ariaLabel="واتساب الآن"
              icon={<WhatsAppIcon />}
              className="w-full justify-center"
            >
              واتساب الآن
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                onCallClick();
                onClose();
              }}
              ariaLabel="اتصل الآن"
              icon={<PhoneIcon />}
              className="w-full justify-center"
            >
              اتصل الآن
            </Button>
            <Link
              href="/contact#quote-form"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium w-full bg-primary text-white hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 transition-all duration-200"
              aria-label="احصل على عرض سعر"
            >
              احصل على عرض سعر
            </Link>
          </div>

          {/* Nav links */}
          <div className="border-t border-zinc-200 pt-4 px-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-zinc-700 hover:text-primary hover:bg-primary-muted/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Secondary links */}
          <div className="mt-4 pt-4 border-t border-zinc-200 px-4">
            <div className="space-y-1">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-lg px-3 py-2 text-sm text-zinc-600 hover:text-primary hover:bg-primary-muted/30 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

interface HeaderProps {
  hasRamadanBar?: boolean;
}

function HeaderMobile({
  onHamburgerClick,
  drawerOpen,
}: {
  onHamburgerClick: () => void;
  drawerOpen: boolean;
}) {
  return (
    <div className="md:hidden flex items-center justify-between w-full">
      <Link
        href="/"
        className="flex items-center gap-2 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-lg"
        aria-label={`${siteConfig.brand.short} — الرئيسية`}
      >
        <div className="relative h-8 w-auto">
          <Image
            src={siteConfig.brand.logo}
            alt=""
            width={120}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </div>
      </Link>
      <button
        type="button"
        onClick={onHamburgerClick}
        className="p-3 -m-2 rounded-xl text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 touch-manipulation"
        aria-label="فتح القائمة"
        aria-expanded={drawerOpen}
      >
        <HamburgerIcon />
      </button>
    </div>
  );
}

function HeaderDesktop({
  openBranchSelector,
}: {
  openBranchSelector: (channel: "whatsapp" | "call", placement: "header") => void;
}) {
  return (
    <div className="hidden md:flex items-center justify-between gap-4 flex-1 min-w-0">
      <Link
        href="/"
        className="flex items-center gap-2 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-lg"
        aria-label={`${siteConfig.brand.short} — الرئيسية`}
      >
        <div className="relative h-9 w-auto">
          <Image
            src={siteConfig.brand.logo}
            alt=""
            width={120}
            height={36}
            className="h-9 w-auto object-contain"
            priority
          />
        </div>
      </Link>
      <nav className="flex items-center gap-1" aria-label="القائمة الرئيسية">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:text-primary hover:bg-primary-muted/50 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2 shrink-0">
        <Button
          variant="outline"
          onClick={() => openBranchSelector("call", "header")}
          ariaLabel="اتصل الآن"
          icon={<PhoneIcon />}
        >
          اتصل الآن
        </Button>
        <Button
          variant="whatsapp"
          onClick={() => openBranchSelector("whatsapp", "header")}
          ariaLabel="واتساب الآن"
          icon={<WhatsAppIcon />}
        >
          واتساب الآن
        </Button>
      </div>
    </div>
  );
}

export function Header({ hasRamadanBar }: HeaderProps) {
  const { openBranchSelector } = useConversion();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        className="sticky z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        style={hasRamadanBar ? { top: "44px" } : { top: 0 }}
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 py-3">
          <HeaderMobile onHamburgerClick={() => setDrawerOpen(true)} drawerOpen={drawerOpen} />
          <HeaderDesktop openBranchSelector={openBranchSelector} />
        </div>
      </header>

      <NavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onWhatsAppClick={() => openBranchSelector("whatsapp", "drawer")}
        onCallClick={() => openBranchSelector("call", "drawer")}
      />
    </>
  );
}
