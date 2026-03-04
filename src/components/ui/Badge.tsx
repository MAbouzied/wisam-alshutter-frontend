type BadgeVariant = "ramadan" | "warranty" | "experience" | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  ramadan:
    "rounded-full bg-primary-muted px-4 py-1.5 text-sm font-medium text-primary-dark",
  warranty:
    "rounded-full bg-primary-muted px-4 py-1.5 text-sm font-medium text-primary-dark",
  experience:
    "rounded-full bg-primary-muted px-4 py-1.5 text-sm font-medium text-primary-dark",
  default:
    "rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-700",
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span className={`inline-flex ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
