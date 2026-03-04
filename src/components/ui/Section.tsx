import Link from "next/link";

interface SectionProps {
  title: string;
  subtitle?: string;
  cta?: { href: string; label: string };
  children: React.ReactNode;
  className?: string;
  /** Light gray background */
  muted?: boolean;
}

export function Section({
  title,
  subtitle,
  cta,
  children,
  className = "",
  muted = false,
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-20 ${muted ? "bg-zinc-50" : ""} ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 max-w-2xl text-lg text-zinc-600 leading-relaxed">
              {subtitle}
            </p>
          )}
          {cta && (
            <Link
              href={cta.href}
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
              {cta.label}
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
