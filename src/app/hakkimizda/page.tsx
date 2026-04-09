import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import FeatureBox from "@/components/ui/FeatureBox";
import ProcessSteps from "@/components/ui/ProcessSteps";
import TabSection from "@/components/ui/TabSection";
import { aboutValues, aboutProcessSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Hakkımızda - Plastik Şişe ve Ambalaj Üretimi",
  description:
    "Antplast hakkında. İki nesildir sürdürülen üretim tutkusu. IML/BML baskı teknolojisi, HDPE/COEX/PP ambalajlar. Antalya fabrika, Viyana ofis.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: "Hakkımızda | Antplast",
    description: "Plastik şişe ve ambalaj üretiminde güvenilir çözüm ortağınız.",
    url: "/hakkimizda",
  },
};

function IMLContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          IML (In Mold Label) Baskılı HDPE / COEX / PP Ambalajlar
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          IML teknolojisi ile etiket, kalıp içinde şişe ile bütünleşir ve ayrılmaz bir parça haline gelir.
          Bu sayede ambalaj özgünlüğü ve tüketici güveni sağlanır.
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Sizin için üretiyoruz</h4>
            <p className="text-gray-600 text-sm">Müşteriye özel üretim ile etiket stoku ihtiyacı ortadan kalkar.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Kalite ve Güvenilirlik</h4>
            <p className="text-gray-600 text-sm">Su, toz ve çevresel faktörlere karşı %100 dayanıklılık.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Sürdürülebilirlik ve Çevre Sorumluluğu</h4>
            <p className="text-gray-600 text-sm">Yapıştırıcı veya laminat kullanılmadan tamamen geri dönüştürülebilir ambalaj.</p>
          </div>
        </div>
      </div>
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src="/images/pages/Gorsel-1.webp"
          alt="IML baskı teknolojisi ile üretim"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

function ProductionContent() {
  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">Üretim Kapasitemiz</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        Antalya&apos;daki modern üretim tesisimizde, son teknoloji şişirme ve enjeksiyon makineleri
        ile yüksek kapasiteli üretim gerçekleştiriyoruz. IML-BML robotlarımızı kendi bünyemizde geliştiriyoruz.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        Üretirken gelişiyor, gelişirken üretiyoruz.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {[
          { label: "Ürün Aralığı", value: "100cc - 30LT" },
          { label: "Hammadde", value: "HDPE / PP / COEX" },
          { label: "Teknoloji", value: "IML / BML / NFC" },
        ].map((stat, i) => (
          <div key={i} className="text-center bg-gray-50 rounded-xl p-6">
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MachineContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Makine Üretimlerimiz</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Entegre etiketleme teknolojisindeki uzmanlığımızla, kendi ürettiğimiz robotları
          şişe şişirme makineleriyle sorunsuz çalışacak şekilde uyarladık.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Otomatik dolum makineleri
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Otomatik kapak kapama ekipmanları
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            IML-BML robotları
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Kaçak test makineleri
          </li>
        </ul>
      </div>
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src="/images/pages/makina-resim.jpg"
          alt="Antplast makine üretimi"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const tabs = [
    { id: "iml", label: "IML Teknolojisi", content: <IMLContent /> },
    { id: "production", label: "Üretim", content: <ProductionContent /> },
    { id: "machines", label: "Makine Üretimi", content: <MachineContent /> },
  ];

  return (
    <>
      <HeroSection
        title="Hakkımızda"
        subtitle="Üretirken Gelişiyor, Gelişirken Üretiyoruz"
        description="İki nesildir sürdürdüğümüz üretim tutkumuzla plastik ambalaj sektöründe fark yaratıyoruz."
        image="/images/pages/Gorsel-1.webp"
        size="md"
      />

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Biz İki Nesildir Sürdürdüğümüz Üretim Sevdamızı Şu Sebeplere Bağladık
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutValues.map((value, i) => (
              <FeatureBox key={i} feature={value} />
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TabSection tabs={tabs} />
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nasıl Çalışıyoruz
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Bilgi toplamadan teslimat&apos;a kadar her aşamada profesyonellik ve değer katma taahhüdü.
            </p>
          </div>
          <ProcessSteps steps={aboutProcessSteps} />
        </div>
      </section>
    </>
  );
}
