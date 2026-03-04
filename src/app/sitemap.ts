import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wisam-alshutter.com";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/our-work", priority: 0.9 },
  { path: "/jeddah", priority: 0.9 },
  { path: "/riyadh", priority: 0.9 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.9 },
  { path: "/faq", priority: 0.8 },
  { path: "/privacy", priority: 0.5 },
  { path: "/site-map", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : ("monthly" as const),
    priority,
  }));
}
