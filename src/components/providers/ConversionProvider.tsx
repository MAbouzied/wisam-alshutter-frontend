"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { BranchSelector, type BranchSelectorMode } from "@/components/ui/BranchSelector";
import { StickyMobileBar } from "@/components/ui/StickyMobileBar";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import type { Placement } from "@/lib/analytics";

interface ConversionContextValue {
  openBranchSelector: (mode: BranchSelectorMode, placement: Placement) => void;
}

const ConversionContext = createContext<ConversionContextValue | null>(null);

export function useConversion() {
  const ctx = useContext(ConversionContext);
  if (!ctx) throw new Error("useConversion must be used within ConversionProvider");
  return ctx;
}

export function ConversionProvider({ children }: { children: React.ReactNode }) {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [selectorMode, setSelectorMode] = useState<BranchSelectorMode>("whatsapp");
  const [selectorPlacement, setSelectorPlacement] = useState<Placement>("page");

  const openBranchSelector = useCallback((mode: BranchSelectorMode, placement: Placement) => {
    setSelectorMode(mode);
    setSelectorPlacement(placement);
    setSelectorOpen(true);
  }, []);

  const closeBranchSelector = useCallback(() => setSelectorOpen(false), []);

  const handleSelect = useCallback(() => {
    // BranchSelector handles the action internally
  }, []);

  return (
    <ConversionContext.Provider value={{ openBranchSelector }}>
      {children}
      <BranchSelector
        mode={selectorMode}
        open={selectorOpen}
        onClose={closeBranchSelector}
        onSelect={handleSelect}
        placement={selectorPlacement}
      />
      <StickyMobileBar onOpenBranchSelector={openBranchSelector} />
      <FloatingWhatsApp
        onClick={() => openBranchSelector("whatsapp", "page")}
        className="hidden md:flex"
      />
    </ConversionContext.Provider>
  );
}
