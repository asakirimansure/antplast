import Link from "next/link";
import Image from "next/image";
import { footerNavItems } from "@/data/navigation";
import { contactLocations, companyInfo } from "@/data/contact";

export default function Footer() {
  const turkeyOffice = contactLocations[0];

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo/logo-300px-1.png"
              alt="Antplast Logo"
              width={150}
              height={40}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hızlı Menü</h3>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-primary-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{turkeyOffice.address}, {turkeyOffice.city}</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-primary-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{turkeyOffice.phone[0]}</span>
              </li>
              <li className="flex gap-2">
                <svg className="w-5 h-5 text-primary-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{turkeyOffice.email}</span>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ürünlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kategori/gida-urunleri" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Gıda Ürünleri
                </Link>
              </li>
              <li>
                <Link href="/kategori/iml-bml-baskili-urunler" className="text-gray-400 hover:text-white text-sm transition-colors">
                  IML BML Baskılı Ürünler
                </Link>
              </li>
              <li>
                <Link href="/mikrocipli-sise-ve-ambalaj" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Mikroçipli Şişe ve Ambalaj
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.shortName}. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-600 text-xs">
            Tasarım:{" "}
            <a
              href="https://242fikirefabrikasi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              242 Fikir Fabrikası
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
