"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  visible: boolean;
  onDismiss: () => void;
}

export function Toast({ message, visible, onDismiss }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onDismiss, 3000);
    return () => clearTimeout(t);
  }, [visible, onDismiss]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      className="fixed bottom-24 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 rounded-xl bg-zinc-900 text-white px-5 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.2)] animate-fade-in"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
