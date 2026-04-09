import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ui/ProductCard";
import HeroSection from "@/components/sections/HeroSection";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: `${category.name} - Plastik Ambalaj Ürünleri`,
    description: category.description,
    alternates: { canonical: `/kategori/${category.slug}` },
    openGraph: {
      title: `${category.name} | Antplast`,
      description: category.description,
      url: `/kategori/${category.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <HeroSection
        title={category.name}
        description={category.description}
        size="sm"
      />

      <nav className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-primary">Ana Sayfa</Link></li>
            <li>/</li>
            <li><Link href="/urunlerimiz" className="hover:text-primary">Ürünlerimiz</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{category.name}</li>
          </ol>
        </div>
      </nav>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {categoryProducts.length === 0 && (
            <p className="text-center text-gray-500 py-12">Bu kategoride henüz ürün bulunmamaktadır.</p>
          )}
        </div>
      </section>
    </>
  );
}
