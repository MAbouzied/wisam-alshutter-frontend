"use client";

import { useState, useCallback } from "react";
import { QuoteForm, type QuoteFormData } from "./QuoteForm";
import { Toast } from "@/components/ui/Toast";
import { useConversion } from "@/components/providers/ConversionProvider";
import { track } from "@/lib/analytics";
import { getWhatsAppQuoteUrl } from "@/lib/whatsappHelper";

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
      if (data.contactMethod === "واتساب") {
        const url = getWhatsAppQuoteUrl({
          name: data.name,
          city: data.city,
          shutterType: data.shutterType,
          message: data.message,
        });
        window.open(url, "_blank", "noopener,noreferrer");
      } else {
        openBranchSelector("call", "form");
      }
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
