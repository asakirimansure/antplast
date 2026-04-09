import { NextRequest, NextResponse } from "next/server";

const redirectMap: Record<string, string> = {
  "/about-us": "/hakkimizda",
  "/about-us/": "/hakkimizda",
  "/contact": "/iletisim",
  "/contact/": "/iletisim",
  "/bmlchip": "/bml-microchip",
  "/bmlchip/": "/bml-microchip",
  "/antplast-plastik-ambalaj-sanayi/qualitycontrol": "/kalite-kontrol",
  "/antplast-plastik-ambalaj-sanayi/qualitycontrol/": "/kalite-kontrol",
  "/qualitycontrol": "/kalite-kontrol",
  "/qualitycontrol/": "/kalite-kontrol",
  "/product-category/gida-urunleri": "/kategori/gida-urunleri",
  "/product-category/gida-urunleri/": "/kategori/gida-urunleri",
  "/product-category/iml-bml-baskili-urunler": "/kategori/iml-bml-baskili-urunler",
  "/product-category/iml-bml-baskili-urunler/": "/kategori/iml-bml-baskili-urunler",
  "/urunlerimiz/": "/urunlerimiz",
  "/mikrocipli-sise-ve-ambalaj/": "/mikrocipli-sise-ve-ambalaj",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check direct redirects
  const redirectTo = redirectMap[pathname];
  if (redirectTo) {
    return NextResponse.redirect(new URL(redirectTo, request.url), 301);
  }

  // Handle old product URLs: /product/[slug]/ -> /urun/[slug]
  if (pathname.startsWith("/product/")) {
    const slug = pathname.replace("/product/", "").replace(/\/$/, "");
    if (slug) {
      return NextResponse.redirect(new URL(`/urun/${slug}`, request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/about-us/:path*",
    "/contact/:path*",
    "/bmlchip/:path*",
    "/antplast-plastik-ambalaj-sanayi/:path*",
    "/qualitycontrol/:path*",
    "/product-category/:path*",
    "/product/:path*",
    "/urunlerimiz/",
    "/mikrocipli-sise-ve-ambalaj/",
  ],
};
