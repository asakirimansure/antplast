import type { Metadata } from "next";
import ProductCard from "@/components/ui/ProductCard";
import CategoryCard from "@/components/ui/CategoryCard";
import HeroSection from "@/components/sections/HeroSection";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Ürünlerimiz - HDPE Plastik Şişe ve Ambalaj Çözümleri",
  description:
    "Antplast plastik ambalaj ürünleri. 100cc-30LT HDPE şişeler, IML/BML baskılı bidonlar, COEX ambalajlar. Gıda, tarım, kimya ve temizlik sektörlerine uygun.",
  alternates: { canonical: "/urunlerimiz" },
  openGraph: {
    title: "Ürünlerimiz | Antplast",
    description: "HDPE plastik şişe, bidon ve IML baskılı ambalaj ürünleri.",
    url: "/urunlerimiz",
  },
};

export default function ProductsPage() {
  return (
    <>
      <HeroSection
        title="Ürünlerimiz"
        description="100cc'den 30 litreye kadar HDPE plastik şişe ve ambalaj çözümlerimizi keşfedin."
        size="sm"
      />

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Kategoriler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Tüm Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
