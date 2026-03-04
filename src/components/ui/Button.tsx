"use client";

import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline";

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
  icon?: ReactNode;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-light focus-visible:outline-primary active:bg-primary-dark",
  secondary:
    "bg-zinc-100 text-zinc-800 hover:bg-zinc-200 focus-visible:outline-primary",
  ghost:
    "bg-transparent text-zinc-700 hover:bg-zinc-100 focus-visible:outline-primary",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#20bd5a] focus-visible:outline-[#25D366]",
  outline:
    "border-2 border-zinc-800 bg-transparent text-zinc-800 hover:bg-zinc-100 focus-visible:outline-primary",
};

export function Button({
  variant = "primary",
  children,
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
