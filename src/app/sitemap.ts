import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${SITE_URL}/urunlerimiz`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/mikrocipli-sise-ve-ambalaj`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/hakkimizda`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/bml-microchip`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/iletisim`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${SITE_URL}/kalite-kontrol`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  const categoryPages = categories.map((cat) => ({
    url: `${SITE_URL}/kategori/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productPages = products.map((product) => ({
    url: `${SITE_URL}/urun/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
