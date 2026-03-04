import { ReactNode } from "react";

type CardVariant = "service" | "benefit" | "testimonial" | "default";

interface CardProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

const variantStyles: Record<CardVariant, string> = {
  service:
    "rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-zinc-300",
  benefit:
    "rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
  testimonial:
    "rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]",
  default:
    "rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)]",
};

export function Card({
  variant = "default",
  children,
  className = "",
  as: Component = "div",
}: CardProps) {
  return (
    <Component className={`${variantStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}
