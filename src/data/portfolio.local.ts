/**
 * Portfolio data - base from scripts/download-portfolio.js
 * Titles and categories are manually curated. Re-run script only to add new images.
 *
 * HOW TO EDIT PROJECT TITLES:
 * - Edit titleAr below to change the displayed project name.
 * - Keep titles short: 2–4 words (e.g. "شتر رول خارجي", "شباك ألمنيوم سحاب").
 * - Filters and lightbox use titleAr automatically.
 */

export type PortfolioCategoryKey = "shutter" | "aluminum_windows" | "aluminum_doors";
export type PortfolioCity = "both" | "جدة" | "الرياض";

export interface PortfolioLocalItem {
  id: string;
  src: string;
  /** Edit titleAr to change displayed project name. Keep 2–4 words. */
  titleAr: string;
  category: PortfolioCategoryKey;
  city: PortfolioCity;
}

export const portfolioLocal: PortfolioLocalItem[] = [
  // Edit titleAr below to change displayed project name. Keep 2–4 words.
  { id: "3", src: "/portfolio/portfolio-003.jpg", titleAr: "شتر رول خارجي", category: "shutter", city: "both" },
  { id: "4", src: "/portfolio/portfolio-004.jpg", titleAr: "شتر رول داخلي للنافذة", category: "shutter", city: "both" },
  { id: "5", src: "/portfolio/portfolio-005.jpg", titleAr: "شتر كهربائي للشرفة", category: "aluminum_windows", city: "both" },
  { id: "6", src: "/portfolio/portfolio-006.jpg", titleAr: "باب ألمنيوم خارجي", category: "shutter", city: "both" },
  { id: "7", src: "/portfolio/portfolio-007.jpg", titleAr: "شتر رول للنافذة", category: "shutter", city: "both" },
  { id: "8", src: "/portfolio/portfolio-008.jpg", titleAr: "شتر داخلي للمبنى", category: "aluminum_doors", city: "both" },
  { id: "9", src: "/portfolio/portfolio-009.jpg", titleAr: "شتر خارجى للنافذة", category: "shutter", city: "both" },
  { id: "10", src: "/portfolio/portfolio-010.jpg", titleAr: "شبابيك شتر ملونة", category: "aluminum_windows", city: "both" },
  { id: "11", src: "/portfolio/portfolio-011.jpg", titleAr: "تصنيع درايش آلمنيوم", category: "shutter", city: "both" },
  { id: "12", src: "/portfolio/portfolio-012.jpg", titleAr: "شباك ألمنيوم سحاب", category: "aluminum_doors", city: "both" },
  { id: "13", src: "/portfolio/portfolio-013.jpg", titleAr: "تركيب شتر يدوي", category: "shutter", city: "both" },
  { id: "14", src: "/portfolio/portfolio-014.jpg", titleAr: "باب ألمنيوم سحاب", category: "aluminum_windows", city: "both" },
  { id: "15", src: "/portfolio/portfolio-015.jpg", titleAr: "شتر رول خارجي", category: "shutter", city: "both" },
  { id: "16", src: "/portfolio/portfolio-016.jpg", titleAr: "باب ألمنيوم زجاجي", category: "aluminum_doors", city: "both" },
  { id: "17", src: "/portfolio/portfolio-017.jpg", titleAr: "شتر شباك خارجي للفيلا", category: "shutter", city: "both" },
  { id: "18", src: "/portfolio/portfolio-018.jpg", titleAr: "تركيب شتر ألمنيوم للمنزل", category: "aluminum_windows", city: "both" },
  { id: "19", src: "/portfolio/portfolio-019.jpg", titleAr: "شتر داخلي للشباك بحماية ستانلس", category: "shutter", city: "both" },
  { id: "20", src: "/portfolio/portfolio-020.jpg", titleAr: "باب شتر ألمنيوم", category: "aluminum_doors", city: "both" },
  { id: "21", src: "/portfolio/portfolio-021.jpg", titleAr: "باب ألمنيوم سحاب زجاج", category: "shutter", city: "both" },
  { id: "22", src: "/portfolio/portfolio-022.jpg", titleAr: "باب ألمنيوم سحاب ملون", category: "aluminum_windows", city: "both" },
  { id: "23", src: "/portfolio/portfolio-023.jpg", titleAr: "أعمال شتر لمبني", category: "shutter", city: "both" },
  { id: "24", src: "/portfolio/portfolio-024.jpg", titleAr: "أعمال شتر للمبنى", category: "shutter", city: "both" },
  { id: "25", src: "/portfolio/portfolio-025.jpg", titleAr: "دريشة شتر داخلي", category: "aluminum_windows", city: "both" },
  { id: "26", src: "/portfolio/portfolio-026.jpg", titleAr: "نافذة شتر ألمنيوم", category: "aluminum_doors", city: "both" },
  { id: "27", src: "/portfolio/portfolio-027.jpg", titleAr: "شتر أتوماتيك للنوافذ", category: "shutter", city: "both" },
  { id: "28", src: "/portfolio/portfolio-028.jpg", titleAr: "شتر رول للنافذة", category: "shutter", city: "both" },
  { id: "29", src: "/portfolio/portfolio-029.jpg", titleAr: "باب ألمنيوم شتر أتوماتيك", category: "aluminum_windows", city: "both" },
  { id: "30", src: "/portfolio/portfolio-030.jpg", titleAr: "شتر داخلي للشباك", category: "shutter", city: "both" },
  { id: "32", src: "/portfolio/portfolio-032.jpg", titleAr: "باب ألمنيوم زجاج", category: "shutter", city: "both" },
  { id: "33", src: "/portfolio/portfolio-033.jpg", titleAr: "أعمال تركيب شتر للمبنى", category: "aluminum_windows", city: "both" },
  { id: "34", src: "/portfolio/portfolio-034.jpg", titleAr: "أعمال تركيب نافذة شتر", category: "shutter", city: "both" },
  { id: "35", src: "/portfolio/portfolio-035.jpg", titleAr: "أعمال تركيب باب كراج ألمنيوم", category: "shutter", city: "both" },
  { id: "36", src: "/portfolio/portfolio-036.jpg", titleAr: "باب ألمنيوم خارجي", category: "aluminum_doors", city: "both" },
  { id: "37", src: "/portfolio/portfolio-037.jpg", titleAr: "باب ألمنيوم خارجي", category: "shutter", city: "both" },
  { id: "38", src: "/portfolio/portfolio-038.jpg", titleAr: "باب ألمنيوم خارجي", category: "aluminum_windows", city: "both" },
  { id: "39", src: "/portfolio/portfolio-039.jpg", titleAr: "التحكم في الشتر بريموت كنترول", category: "shutter", city: "both" },
];
