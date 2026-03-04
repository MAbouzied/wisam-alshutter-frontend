import { portfolioLocal } from "@/data/portfolio.local";
import type { PortfolioLocalItem, PortfolioCategoryKey } from "@/data/portfolio.local";

export type PortfolioTag = "شتر" | "شبابيك ألمنيوم" | "أبواب ألمنيوم";

export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  tags: PortfolioTag[];
}

const CATEGORY_TO_TAG: Record<PortfolioCategoryKey, PortfolioTag> = {
  shutter: "شتر",
  aluminum_windows: "شبابيك ألمنيوم",
  aluminum_doors: "أبواب ألمنيوم",
};

/**
 * Map portfolioLocal to PortfolioItem format for PortfolioGrid.
 * Uses local images from /public/portfolio (no remote URLs).
 */
function mapToPortfolioItem(item: PortfolioLocalItem): PortfolioItem {
  return {
    id: item.id,
    title: item.titleAr,
    image: item.src,
    tags: [CATEGORY_TO_TAG[item.category]],
  };
}

/** Fallback mock data when portfolio.local is empty (script not run) */
const fallbackItems: PortfolioItem[] = [
  { id: "1", title: "شتر رول للنافذة", image: "/images/portfolio/placeholder.svg", tags: ["شتر"] },
  { id: "2", title: "شتر داخلي للمكتب", image: "/images/portfolio/placeholder.svg", tags: ["شتر"] },
  { id: "3", title: "شتر خارجي للمبنى", image: "/images/portfolio/placeholder.svg", tags: ["شتر"] },
];

const rawItems =
  portfolioLocal.length > 0 ? portfolioLocal.map(mapToPortfolioItem) : fallbackItems;

/** Filter out items with missing/invalid image src to avoid broken cards */
export const portfolioItems: PortfolioItem[] = rawItems.filter(
  (item) => item.image && item.image.startsWith("/")
);
