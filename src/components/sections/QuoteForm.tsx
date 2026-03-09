"use client";

import { useState, FormEvent } from "react";

export interface QuoteFormData {
  name: string;
  city: "جدة" | "الرياض";
  shutterType: "رول" | "داخلي" | "خارجي";
  contactMethod: "واتساب" | "اتصال";
  message?: string;
}

interface QuoteFormProps {
  id?: string;
  onSubmit?: (data: QuoteFormData) => void;
}

const initialData: QuoteFormData = {
  name: "",
  city: "الرياض",
  shutterType: "رول",
  contactMethod: "واتساب",
  message: "",
};

const inputBase =
  "w-full rounded-xl border border-zinc-300 px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

export function QuoteForm({ id = "quote-form", onSubmit }: QuoteFormProps) {
  const [data, setData] = useState<QuoteFormData>(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof QuoteFormData, string>>
  >({});

  function validate(): boolean {
    const next: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!data.name.trim()) next.name = "الاسم مطلوب";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit?.(data);
    setData(initialData);
    setErrors({});
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
    >
      <h2 className="text-xl font-bold text-zinc-900 mb-6">
        احصل على عرض سعر بدون التزام
      </h2>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="quote-name"
            className="block text-sm font-medium text-zinc-700 mb-1.5"
          >
            الاسم *
          </label>
          <input
            id="quote-name"
            type="text"
            value={data.name}
            onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
            className={inputBase}
            placeholder="الاسم الكامل"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="quote-city"
            className="block text-sm font-medium text-zinc-700 mb-1.5"
          >
            المدينة
          </label>
          <select
            id="quote-city"
            value={data.city}
            onChange={(e) =>
              setData((d) => ({ ...d, city: e.target.value as "جدة" | "الرياض" }))
            }
            className={inputBase}
          >
            <option value="جدة">جدة</option>
            <option value="الرياض">الرياض</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="quote-shutter"
            className="block text-sm font-medium text-zinc-700 mb-1.5"
          >
            نوع الشتر
          </label>
          <select
            id="quote-shutter"
            value={data.shutterType}
            onChange={(e) =>
              setData((d) => ({
                ...d,
                shutterType: e.target.value as QuoteFormData["shutterType"],
              }))
            }
            className={inputBase}
          >
            <option value="رول">شتر رول</option>
            <option value="داخلي">شتر داخلي</option>
            <option value="خارجي">شتر خارجي</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            طريقة التواصل
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="واتساب"
                checked={data.contactMethod === "واتساب"}
                onChange={() =>
                  setData((d) => ({ ...d, contactMethod: "واتساب" }))
                }
                className="text-primary focus:ring-primary"
              />
              <span>واتساب</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="اتصال"
                checked={data.contactMethod === "اتصال"}
                onChange={() =>
                  setData((d) => ({ ...d, contactMethod: "اتصال" }))
                }
                className="text-primary focus:ring-primary"
              />
              <span>اتصال</span>
            </label>
          </div>
        </div>

        <div>
          <label
            htmlFor="quote-message"
            className="block text-sm font-medium text-zinc-700 mb-1.5"
          >
            رسالة اختيارية
          </label>
          <textarea
            id="quote-message"
            value={data.message ?? ""}
            onChange={(e) =>
              setData((d) => ({ ...d, message: e.target.value }))
            }
            rows={3}
            className={`${inputBase} resize-none`}
            placeholder="تفاصيل إضافية..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-primary px-6 py-3.5 font-medium text-white hover:bg-primary-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
      >
        إرسال الطلب
      </button>
    </form>
  );
}
