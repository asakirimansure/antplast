import Image from "next/image";
import { expertiseAreas } from "@/data/services";

export default function ExpertiseSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Uzmanlık Alanlarımız
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Modern teknoloji ve iki neslin deneyimi ile plastik ambalaj sektöründe fark yaratıyoruz.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 mx-auto mb-4 relative rounded-xl overflow-hidden">
                <Image
                  src={area.icon}
                  alt={area.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
