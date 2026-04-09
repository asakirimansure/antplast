import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NFCSection() {
  return (
    <section className="py-16 lg:py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              NFC Entegre IML Etiketli Şişe Üretimi
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              NFC entegreli IML etiketli şişelerde, NFC çipi IML etiket ile şişe gövdesi arasında
              kalıp içinde kalıcı olarak muhafaza edilir. Üretim sırasında etiket şişe ile tek parça
              haline gelir; NFC dış etkenlerden korunur ve akıllı telefonlarla temassız okunarak
              ürün doğrulama, izlenebilirlik ve dijital içerik erişimi sağlar.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Ürün doğrulama ve sahtecilik önleme",
                "İzlenebilirlik ve dijital içerik erişimi",
                "Stok takibi ve depo sayımı",
                "Akıllı telefonla temassız okuma",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/mikrocipli-sise-ve-ambalaj" variant="white" size="lg">
              Detaylı Bilgi
            </Button>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/images/pages/Untitled-222.jpg"
                alt="NFC entegreli IML etiketli şişe üretimi"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
