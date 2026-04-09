import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ContactForm from "@/components/ui/ContactForm";
import MapEmbed from "@/components/ui/MapEmbed";
import { contactLocations } from "@/data/contact";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "İletişim - Bize Ulaşın",
  description:
    "Antplast iletişim bilgileri. Sakarya fabrika ve Viyana ofis adresleri, telefon numaraları. Plastik ambalaj teklif talebi için bize ulaşın.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "İletişim | Antplast",
    description: "Plastik ambalaj teklif talebi ve iletişim bilgileri.",
    url: "/iletisim",
  },
};

export default function ContactPage() {
  const jsonLd = contactLocations.map((loc) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: loc.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressCountry: loc.country,
    },
    telephone: loc.phone[0],
    email: loc.email,
    url: SITE_URL,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection
        title="İletişim"
        description="Plastik ambalaj çözümleri için bizimle iletişime geçin."
        size="sm"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bize Yazın</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
              <div className="space-y-8">
                {contactLocations.map((location, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-4">{location.name}</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>
                          {location.address}, {location.city}, {location.country}
                        </span>
                      </li>
                      {location.phone.map((phone, j) => (
                        <li key={j} className="flex gap-3">
                          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-primary">
                            {phone}
                          </a>
                        </li>
                      ))}
                      <li className="flex gap-3">
                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${location.email}`} className="hover:text-primary">
                          {location.email}
                        </a>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <MapEmbed src={location.mapUrl} title={location.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
