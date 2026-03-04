"use client";

import { useConversion } from "@/components/providers/ConversionProvider";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ServiceCategoryCardProps {
  title: string;
  desc: string;
  subtypes: string[];
}

export function ServiceCategoryCard({
  title,
  desc,
  subtypes,
}: ServiceCategoryCardProps) {
  const { openBranchSelector } = useConversion();

  return (
    <Card variant="service">
      <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>
      <p className="text-zinc-600 text-sm mb-4 leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {subtypes.map((sub) => (
          <span
            key={sub}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
          >
            {sub}
          </span>
        ))}
      </div>
      <Button
        variant="primary"
        onClick={() => openBranchSelector("whatsapp", "page")}
        ariaLabel={`عرض سعر لـ ${title}`}
        className="w-full"
      >
        احصل على عرض سعر
      </Button>
    </Card>
  );
}
