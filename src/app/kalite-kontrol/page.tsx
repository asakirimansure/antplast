import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCard from "@/components/ui/ServiceCard";
import { qualityServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Kalite Kontrol - Ürün Takip Sistemi ve Mikroçip Güvencesi",
  description:
    "Antplast kalite kontrol ve ürün takip sistemi. Mikroçipli ambalaj doğrulama, gömülü chip tekniği, sadakat sistemi, otomasyon ve tüketici bilgilendirme.",
  alternates: { canonical: "/kalite-kontrol" },
  openGraph: {
    title: "Kalite Kontrol | Antplast",
    description: "ÜTS güvencesi ile kontrol edilen mikroçipli ambalaj sistemi.",
    url: "/kalite-kontrol",
  },
};

export default function QualityControlPage() {
  return (
    <>
      <HeroSection
        title="Kalite Kontrol"
        subtitle="Ürün Takip Sistemi (ÜTS) Güvencesi"
        description="Size güvenilir hizmet vermekten mutluluk duyuyoruz. Bu ürünü güvenle kullanabilirsiniz."
        size="md"
      />

      {/* Safety Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">
                  Micro Chip&apos;li Ambalaj Orijinaldir
                </h2>
                <p className="text-green-700">
                  Bu sorgulama Ürün Takip Sistemi (ÜTS) güvencesi ile kontrol edilmiştir.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
              <div className="flex gap-3">
                <div className="text-2xl">⚠️</div>
                <div>
                  <h3 className="font-bold text-red-800 mb-1">Dikkat</h3>
                  <p className="text-red-700 text-sm">
                    Deforme olmuş etiket ve ürünleri almayınız. Ambalajın kapak ve etiket kısmında
                    deformasyon var ise lütfen kullanmayınız.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Akıllı Ambalaj Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
