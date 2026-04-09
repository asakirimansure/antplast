import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/utils";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IML BML Baskılı Plastik Şişe Bidon Kapak Üretim Tesisi - Antplast",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "plastik şişe",
    "HDPE ambalaj",
    "IML baskı",
    "BML baskı",
    "NFC ambalaj",
    "plastik bidon",
    "Antplast",
    "ambalaj üretimi",
    "mikroçipli ambalaj",
    "plastik kapak",
    "enjeksiyon",
    "COEX ambalaj",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "IML BML Baskılı Plastik Şişe Bidon Kapak Üretim Tesisi - Antplast",
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/logo/logo-300px-1.png", width: 600, height: 126, alt: "Antplast Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Plastik Şişe ve Ambalaj Üretimi`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Antplast Plastik Sanayi",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo-300px-1.png`,
    description: SITE_DESCRIPTION,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "8438 Sk No:6 Altıayak Mh. Varsak San.Sit.",
        addressLocality: "Kepez",
        addressRegion: "Antalya",
        addressCountry: "TR",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Absberggasse 27/1/3",
        addressLocality: "Wien",
        postalCode: "1100",
        addressCountry: "AT",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+90-242-434-35-34",
        contactType: "customer service",
        availableLanguage: ["Turkish", "English", "German"],
      },
    ],
    sameAs: [
      "https://www.instagram.com/antplast07/",
      "https://www.facebook.com/antplast07",
    ],
  };

  return (
    <html lang="tr" className={`${roboto.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
