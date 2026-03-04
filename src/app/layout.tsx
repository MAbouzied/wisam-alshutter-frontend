import type { Metadata } from "next";
import Script from "next/script";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RamadanBar } from "@/components/layout/RamadanBar";
import { ConversionProvider } from "@/components/providers/ConversionProvider";
import { siteConfig } from "@/config/siteConfig";

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://wisam-alshutter.com"),
  title: "وسام الشتر — شتر شبابيك ورول",
  description:
    "وسام الشتر للحدادة والألمنيوم — تركيب شتر رول، شتر داخلي وخارجي، شتر كهربائي ويدوي. الرياض وجدة. خبرة 10 سنوات.",
  openGraph: {
    title: "وسام الشتر — شتر شبابيك ورول",
    description:
      "وسام الشتر للحدادة والألمنيوم — تركيب شتر رول، شتر داخلي وخارجي، شتر كهربائي ويدوي. الرياض وجدة. خبرة 10 سنوات.",
    locale: "ar_SA",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KGHHGVK9');`}
        </Script>
      </head>
      <body className={`${tajawal.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGHHGVK9"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ConversionProvider>
          {siteConfig.ramadan.isRamadanMode && <RamadanBar />}
          {siteConfig.ramadan.isRamadanMode && (
            <div className="h-[44px] shrink-0" aria-hidden />
          )}
          <Header hasRamadanBar={siteConfig.ramadan.isRamadanMode} />
          <main className="pb-24 md:pb-0 overflow-x-hidden">{children}</main>
          <Footer />
        </ConversionProvider>
      </body>
    </html>
  );
}
