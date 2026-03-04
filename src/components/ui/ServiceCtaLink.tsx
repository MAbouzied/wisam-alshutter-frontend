"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

interface ServiceCtaLinkProps {
  href: string;
  service: string;
  children: React.ReactNode;
  className?: string;
}

export function ServiceCtaLink({ href, service, children, className }: ServiceCtaLinkProps) {
  const pathname = usePathname();
  const page = pathname ?? "/";

  return (
    <Link
      href={href}
      className={className}
      onClick={() => track("service_cta_click", { service, city: "", page })}
    >
      {children}
    </Link>
  );
}
