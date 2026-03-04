# وسام الشتر — Orchestration Plan

**Orchestrator:** Aly | Lead Architect  
**Agents:** Hany (UI/UX + Content) | Alaa (Conversion + Tech)  
**Last updated:** From user clarifications

---

## 1. Resolved Decisions (Source of Truth)

| Topic | Decision |
|-------|----------|
| **Quote form placement** | On `/`, `/jeddah`, `/riyadh`, `/contact`. Sticky bar "احصل على عرض سعر" scrolls to form on these pages. On other pages → navigate to `/contact#quote-form`. |
| **Form submit flow** | Validate → toast success → fire `quote_submit`. Then: if واتساب → open WhatsApp branch selector + WhatsApp; if اتصال → open Call branch selector + `tel:`. |
| **Desktop vs mobile** | Sticky bar: mobile only (hidden on desktop). Desktop: header CTAs + floating WhatsApp icon (branch selector). Call in header. |
| **Portfolio** | 12 placeholder items. Filters: شتر / شبابيك ألمنيوم / أبواب ألمنيوم. Placeholder images; structure ready for real images. |
| **FAQ** | Hany creates 12–15 FAQs from buyer intent + keywords. Include: "هل تتغير مواعيد العمل في رمضان؟". |
| **Privacy** | Clean Arabic placeholder structure (sections). No exact legal text. |
| **Sitemap** | `/sitemap` = HTML (خريطة الموقع). `/sitemap.xml` = SEO XML. |
| **Jeddah address** | None. Show city + contacts only. Riyadh: 2152-2234 يزيد الحميري، بدر، الرياض 14727. |
| **Font** | Tajawal only, sitewide. |
| **Services title** | "خدمات الشتر" (include aluminium services inside it). |
| **4-step process** | المقابلة والاتفاق → التقييم والتسعير → البدء في التصنيع → التركيب والتسليم |
| **siteConfig** | `src/config/siteConfig.ts` — single source of truth. |

---

## 2. File Tree (Target Structure)

```
wisam-alshutter-frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, RTL, Tajawal font, metadata
│   │   ├── page.tsx                # / الرئيسية
│   │   ├── globals.css
│   │   ├── not-found.tsx           # Custom 404
│   │   ├── sitemap.ts              # Dynamic sitemap.xml (or route)
│   │   ├── services/
│   │   │   └── page.tsx            # /services خدمات الشتر
│   │   ├── our-work/
│   │   │   └── page.tsx            # /our-work أعمالنا
│   │   ├── jeddah/
│   │   │   └── page.tsx            # /jeddah شتر شبابيك جدة (landing)
│   │   ├── riyadh/
│   │   │   └── page.tsx            # /riyadh شتر شبابيك الرياض (landing)
│   │   ├── about/
│   │   │   └── page.tsx            # /about من نحن
│   │   ├── contact/
│   │   │   └── page.tsx            # /contact تواصل معنا
│   │   ├── faq/
│   │   │   └── page.tsx            # /faq الأسئلة الشائعة
│   │   ├── privacy/
│   │   │   └── page.tsx            # /privacy سياسة الخصوصية
│   │   └── sitemap/
│   │       └── page.tsx            # /sitemap خريطة الموقع (HTML)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── RamadanBar.tsx      # Top bar when isRamadanMode
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── QuoteForm.tsx       # Reusable quote form
│   │   │   ├── PortfolioGrid.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── Testimonials.tsx    # Placeholder
│   │   │   └── ...
│   │   ├── ui/
│   │   │   ├── BranchSelector.tsx   # Modal/bottom-sheet (Alaa)
│   │   │   ├── StickyMobileBar.tsx  # Mobile only (Alaa)
│   │   │   └── FloatingWhatsApp.tsx # Desktop (Alaa)
│   │   └── ...
│   ├── config/
│   │   └── siteConfig.ts           # Single source of truth
│   ├── lib/
│   │   ├── analytics.ts            # dataLayer + console.log (Alaa)
│   │   └── portfolioData.ts        # 12 mock items + filters
│   └── ...
├── public/
│   └── images/                     # Placeholder images
├── docs/
│   └── ORCHESTRATION_PLAN.md       # This file
└── README.md
```

---

## 3. siteConfig.ts Contract

```ts
// Structure (Alaa implements; Hany consumes)
{
  brand: { short: "وسام الشتر", long: "وسام الشتر للحدادة والألمنيوم" },
  branches: {
    riyadh: { city: "الرياض", phone: "+966500158650", whatsapp: "+966500158650", address: "2152-2234 يزيد الحميري، بدر، الرياض 14727" },
    jeddah: { city: "جدة", phone: "+966506023117", whatsapp: "+966506023117" }, // no address
  },
  email: "[email protected]",
  warranty: "5 أعوام على المحركات و 10 أعوام على الشرائح",
  experience: "خبرة 10 سنوات",
  steps: ["المقابلة والاتفاق", "التقييم والتسعير", "البدء في التصنيع", "التركيب والتسليم"],
  ramadan: {
    isRamadanMode: true,
    ramadanHoursText: string,  // Editable
    ctas: ["احصل على عرض سعر بدون التزام", "رد سريع على واتساب", "أفضل وقت للتواصل مساءً"],
  },
  keywords: ["شتر شبابيك", "شتر رول", "شتر نوافذ", "تركيب شتر", "شتر داخلي", "شتر خارجي", "شتر كهربائي", "شتر يدوي"],
  whatsappMessageTemplate: "السلام عليكم، أبغى عرض سعر لـ شتر شبابيك (شتر رول). المدينة: {city}. ممكن تحديد موعد معاينة؟",
}
```

---

## 4. Component Contracts

### QuoteForm (Hany builds UI; Alaa wires handlers)

- **Props:** `id?: string` (for `#quote-form` anchor), `onSubmit?: (data) => void`
- **Fields:** الاسم، رقم الجوال، المدينة (جدة/الرياض)، نوع الشتر (رول/داخلي/خارجي)، طريقة التواصل (واتساب/اتصال)، رسالة اختيارية
- **Behavior:** Alaa wires: validate → toast → `quote_submit` → branch selector (WhatsApp or Call based on contactMethod) → open WhatsApp or `tel:`

### BranchSelector (Alaa)

- **Props:** `mode: 'whatsapp' | 'call'`, `onSelect: (city) => void`, `open: boolean`, `onClose: () => void`
- **Behavior:** Bottom-sheet on mobile, modal on desktop. Two options: جدة / الرياض. On select → trigger WhatsApp or tel: based on mode.

### StickyMobileBar (Alaa)

- **Visibility:** Mobile only (hidden on desktop via CSS/media)
- **Buttons:** اتصل الآن | واتساب | احصل على عرض سعر
- **Logic:**
  - اتصل الآن → open BranchSelector (call)
  - واتساب → open BranchSelector (whatsapp)
  - احصل على عرض سعر → if page has form: scroll to `#quote-form`; else: navigate to `/contact#quote-form`

### FloatingWhatsApp (Alaa)

- **Visibility:** Desktop only
- **Behavior:** Click → BranchSelector (whatsapp)

---

## 5. Page-Level Requirements

| Route | Has Form | Sticky Bar "عرض سعر" | H1 |
|-------|----------|------------------------|-----|
| `/` | Yes | Scroll to form | وسام الشتر — شتر شبابيك ورول |
| `/services` | No | → /contact#quote-form | خدمات الشتر |
| `/our-work` | No | → /contact#quote-form | أعمالنا |
| `/jeddah` | Yes | Scroll to form | شتر شبابيك جدة |
| `/riyadh` | Yes | Scroll to form | شتر شبابيك الرياض |
| `/about` | No | → /contact#quote-form | من نحن |
| `/contact` | Yes | Scroll to form | تواصل معنا |
| `/faq` | No | → /contact#quote-form | الأسئلة الشائعة |
| `/privacy` | No | → /contact#quote-form | سياسة الخصوصية |
| `/sitemap` | No | → /contact#quote-form | خريطة الموقع |

---

## 6. Task Assignments

### Hany | Phase 1 — Foundation + Pages

**Task H1: siteConfig + layout**
- Create `src/config/siteConfig.ts` with full structure (Alaa will consume; Hany can create the structure, Alaa ensures numbers/links are used correctly).
- Update `layout.tsx`: RTL, Tajawal font (next/font/google), dir="rtl", lang="ar".

**Task H2: Layout components**
- Header (logo, nav, CTAs — placeholder handlers)
- Footer (brand long name, links, Riyadh address, email)
- RamadanBar (top bar, visible when isRamadanMode, shows ramadanHoursText)

**Task H3: Core sections**
- Hero (strong CTA block)
- QuoteForm (all fields, validation UI — Alaa wires submit)
- FAQAccordion (12–15 items, include Ramadan FAQ)
- PortfolioGrid (filters: شتر / شبابيك ألمنيوم / أبواب ألمنيوم, 12 items from lib/portfolioData)
- Testimonials (placeholder)

**Task H4: All pages**
- Build all 11 routes with correct H1, sections, Arabic copy.
- Pages with form: `/`, `/jeddah`, `/riyadh`, `/contact` — include QuoteForm with id="quote-form".
- Portfolio: use mock data from lib/portfolioData.ts.
- Privacy: placeholder sections.
- not-found.tsx: custom 404 Arabic.

**Task H5: /sitemap HTML**
- Human-readable page listing all routes with links.

**Acceptance:** All routes render, RTL correct, no hardcoded numbers, keywords woven naturally, 4-step process exact wording.

---

### Alaa | Phase 1 — Conversion + Tech

**Task A1: BranchSelector**
- Modal/bottom-sheet, mode: whatsapp | call.
- On select: open WhatsApp (prefilled) or tel:.
- Focus trap, ESC close, aria labels.

**Task A2: StickyMobileBar**
- Mobile only. Three buttons. Scroll vs navigate logic per page.
- Wire to BranchSelector.

**Task A3: FloatingWhatsApp**
- Desktop only. Opens BranchSelector (whatsapp).

**Task A4: QuoteForm wiring**
- Validate, toast, quote_submit event.
- Branch selector based on contactMethod (واتساب vs اتصال).
- Open WhatsApp or tel: accordingly.

**Task A5: Analytics helper**
- `lib/analytics.ts`: track(event, data). dataLayer push + console.log.
- Wire: whatsapp_click, call_click, quote_submit, service_cta_click, portfolio_open.

**Task A6: SEO + metadata**
- Per-route metadata (title, description).
- OG tags, canonical.
- One H1 per page.

**Task A7: sitemap.xml**
- Generate `/sitemap.xml` (Next.js route or static).

**Task A8: Performance + a11y**
- Image optimization patterns.
- Keyboard nav, focus management.

**Acceptance:** Branch selector works everywhere, form flow correct, tracking fires, metadata present, no hardcoded numbers.

---

## 7. Dependency Order

1. **Hany** creates siteConfig, layout, Header, Footer, RamadanBar, QuoteForm (UI), FAQAccordion, PortfolioGrid, portfolioData.
2. **Hany** builds all pages.
3. **Alaa** implements BranchSelector, StickyMobileBar, FloatingWhatsApp.
4. **Alaa** wires QuoteForm submit, Header CTAs, all conversion points.
5. **Alaa** adds analytics, SEO, sitemap.xml, polish.

---

## 8. Final Checklist (Orchestrator)

- [ ] All 11 routes exist and render in Arabic RTL
- [ ] Tajawal font sitewide
- [ ] Quote form on /, /jeddah, /riyadh, /contact
- [ ] Sticky bar: scroll on form pages, navigate on others
- [ ] Form submit: واتساب → WhatsApp selector; اتصال → Call selector
- [ ] Branch selector works: header, floating icon, sticky bar, form post-submit
- [ ] Numbers only in siteConfig.ts
- [ ] Ramadan messaging visible + configurable
- [ ] /sitemap (HTML) + /sitemap.xml
- [ ] No non-shutter products (portfolio filters ok: شتر, شبابيك ألمنيوم, أبواب ألمنيوم)
- [ ] 4-step process exact wording
- [ ] 12–15 FAQs including Ramadan
- [ ] Custom 404

---

## 9. README "Edit Here" Pointers (for final deliverable)

- `src/config/siteConfig.ts` — all business data, numbers, Ramadan text
- `src/lib/portfolioData.ts` — replace with real portfolio items
- `public/images/` — replace placeholder images
- Ramadan: toggle `isRamadanMode`, edit `ramadanHoursText`
