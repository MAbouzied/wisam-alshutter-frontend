"use client";

import { useState, useCallback } from "react";
import { QuoteForm, type QuoteFormData } from "./QuoteForm";
import { Toast } from "@/components/ui/Toast";
import { useConversion } from "@/components/providers/ConversionProvider";
import { track } from "@/lib/analytics";

interface QuoteFormWithConversionProps {
  id?: string;
}

export function QuoteFormWithConversion({ id = "quote-form" }: QuoteFormWithConversionProps) {
  const { openBranchSelector } = useConversion();
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = useCallback(
    (data: QuoteFormData) => {
      setToastVisible(true);
      track("quote_submit", {
        city: data.city,
        contactMethod: data.contactMethod,
      });
      const mode = data.contactMethod === "واتساب" ? "whatsapp" : "call";
      openBranchSelector(mode, "form");
    },
    [openBranchSelector]
  );

  return (
    <>
      <QuoteForm id={id} onSubmit={handleSubmit} />
      <Toast
        message="تم إرسال طلبك بنجاح. سنتواصل معك قريباً."
        visible={toastVisible}
        onDismiss={() => setToastVisible(false)}
      />
    </>
  );
}
