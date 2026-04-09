import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import FeatureBox from "@/components/ui/FeatureBox";
import ProcessSteps from "@/components/ui/ProcessSteps";
import Button from "@/components/ui/Button";
import { microchipFeatures, aboutProcessSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Mikroçipli Şişe ve Ambalaj - NFC Akıllı Ambalaj Çözümleri",
  description:
    "Dünya'da bir ilk: Ambalajlar kendinden Micro Chip teknolojisi ile üretiliyor. Sahtecilik önleme, stok takibi, tüketici bilgilendirme. NFC akıllı ambalaj.",
  alternates: { canonical: "/mikrocipli-sise-ve-ambalaj" },
  openGraph: {
    title: "Mikroçipli Şişe ve Ambalaj | Antplast",
    description: "Ambalajınız hiç bu kadar akıllı olmamıştı. NFC mikroçipli akıllı ambalaj çözümleri.",
    url: "/mikrocipli-sise-ve-ambalaj",
  },
};

export default function MicrochipPage() {
  return (
    <>
      <HeroSection
        title="Ambalajınız Hiç Bu Kadar Akıllı Olmamıştı"
        subtitle="Dünya'da Bir İlk"
        description="Ambalajlar kendinden Micro Chip teknolojisi ile üretiliyor. Cep telefonunuzun temas etmesi ile uyanıyor ve size istediğiniz tüm bilgileri birkaç saniyede iletiyor."
        image="/images/pages/Untitled-222.jpg"
        ctaText="İletişime Geçin"
        ctaHref="/iletisim"
      />

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mikroçip Teknolojisi Özellikleri
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {microchipFeatures.map((feature, i) => (
              <FeatureBox key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nasıl Çalışır?
            </h2>
          </div>
          <ProcessSteps steps={aboutProcessSteps} />
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/pages/Gorsel-1.webp"
                alt="IML etiketli NFC mikroçipli şişe üretimi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                NFC Entegreli IML Etiketli Şişeler
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Mikroçipler, kalıplama sırasında etiket ile şişe arasına kalıcı olarak gömülür.
                Bu sayede ürün doğrulama ve dijital içerik erişimi sağlanır.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Klonlanmaya karşı tam koruma",
                  "Üretimden tüketime ürün takibi",
                  "Depo ve stok sayımı kolaylığı",
                  "Tüketici bilgilendirme ve sadakat sistemi",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/iletisim" variant="primary" size="lg">
                Detaylı Bilgi Alın
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
