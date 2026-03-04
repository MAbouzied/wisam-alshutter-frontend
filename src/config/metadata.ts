import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wisam-alshutter.com";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = path ? `${baseUrl}${path}` : baseUrl;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "وسام الشتر",
      locale: "ar_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
