import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import AboutIntro from "@/components/sections/AboutIntro";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import NFCSection from "@/components/sections/NFCSection";
import CategoryCard from "@/components/ui/CategoryCard";
import Button from "@/components/ui/Button";
import { categories } from "@/data/categories";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="Plastik Şişe ve Ambalaj Üretiminde Güvenilir İş Ortağınız"
        subtitle="Antplast"
        description="IML/BML baskılı HDPE şişeler, NFC mikroçipli akıllı ambalaj çözümleri. 100cc'den 30 litreye kadar geniş ürün yelpazesi."
        ctaText="Ürünlerimizi İnceleyin"
        ctaHref="/urunlerimiz"
        image="/images/pages/web-banner.jpg"
      />

      <AboutIntro />

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ürün Kategorilerimiz
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Gıda, tarım, kimya, otomotiv ve temizlik sektörlerine yönelik geniş ürün yelpazemizi keşfedin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/urunlerimiz" variant="primary" size="lg">
              Tüm Ürünleri Görüntüle
            </Button>
          </div>
        </div>
      </section>

      <ExpertiseSection />
      <NFCSection />

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Referanslarımız
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {["hemel", "doktor-tarsa", "agri", "sereda", "lider", "bio", "fox", "kare", "kopp", "mks", "dogatec"].map((name) => (
              <div key={name} className="w-24 h-12 relative grayscale hover:grayscale-0 transition-all">
                <Image
                  src={`/images/clients/${name}.png`}
                  alt={`${name} logo`}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Projeniz İçin Teklif Alın
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Ambalaj ihtiyaçlarınız için size özel çözümler sunalım. Hemen bizimle iletişime geçin.
          </p>
          <Button href="/iletisim" variant="white" size="lg">
            İletişime Geçin
          </Button>
        </div>
      </section>
    </>
  );
}
