import Image from "next/image";
import Button from "@/components/ui/Button";

export default function AboutIntro() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/pages/makina-resim.jpg"
              alt="Antplast üretim tesisi ve makineler"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Kısaca Antplast
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              İki Nesilden Aktarılan Tecrübe
            </h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Bir ürünün dış görünümü, o ambalajın kapağının altındakinin kimliğini gösterir.
              Satın alma gerçekleşmeden güven duygusunu tetiklemek istiyorsanız ambalajın en iyisini
              yapmalı, teknolojiyi yakından takip etmelisiniz.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              Bizler bu farkındalıkla ambalajın olmazsa olmazı etiketi, bidona entegre düşünerek
              faydalı hale dönüştürmek istedik. Kendi ürettiğimiz robotlarımızı şişirme makinelerine
              adapte edip birlikte çalışmalarını sağladık.
            </p>
            <p className="text-gray-700 font-semibold italic mb-6">
              &quot;Bir plastik şişe neden kendinden baskılı olmasın?&quot;
            </p>
            <Button href="/hakkimizda" variant="primary">
              Hakkımızda
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
