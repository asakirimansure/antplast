import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "iml-bml-baskili-urunler",
    name: "IML BML Baskılı Ürünler",
    description: "Kendinden baskılı ambalajlar. Plastik şişe ve bidonları kendinden baskılı olarak üretiyoruz.",
    image: "/images/products/1lt-iml-bidon.jpg",
    productCount: 4,
  },
  {
    id: "2",
    slug: "gida-urunleri",
    name: "Gıda Ambalajları",
    description: "Gıda uygunluğuna sahip HDPE plastik şişe ve ambalajlar üretiyoruz.",
    image: "/images/products/1000cc-hdpe-a.jpg",
    productCount: 15,
  },
  {
    id: "3",
    slug: "tarim-ambalajlari",
    name: "Tarım Ambalajları",
    description: "Tarım sektöründe kullanılan ilaç ve sıvı gübre için üretilmiş HDPE plastik şişe ve bidonlar.",
    image: "/images/products/5lt-hdpe.jpg",
    productCount: 0,
  },
  {
    id: "4",
    slug: "otomotiv-sektoru-ambalajlari",
    name: "Otomotiv Sektörü Ambalajları",
    description: "Motor yağı, antifriz, Adblue gibi ürünleriniz için ambalajlar üretiyoruz.",
    image: "/images/products/3lt-hdpe.jpg",
    productCount: 0,
  },
  {
    id: "5",
    slug: "coex-ambalajlar",
    name: "COEX Ambalajlar",
    description: "İlaç sektörü için çok katlı COEX ambalajlar üretiyoruz.",
    image: "/images/products/500cc-hdpe.jpg",
    productCount: 0,
  },
  {
    id: "6",
    slug: "kimya-sektoru-ambalajlari",
    name: "Kimya Sektörü Ambalajları",
    description: "Kimya sektöründe kullanılan şişe ve ambalajlar üretiyoruz.",
    image: "/images/products/20lt-hdpe.jpg",
    productCount: 0,
  },
  {
    id: "7",
    slug: "temizlik-urunu-ambalajlari",
    name: "Temizlik Ürünü Ambalajları",
    description: "Temizlik sektöründe kullanılan şişe ve ambalajları üretiyoruz.",
    image: "/images/products/250cc-hdpe.jpg",
    productCount: 0,
  },
  {
    id: "8",
    slug: "plastik-kapak-ve-ventiller",
    name: "Plastik Kapak ve Ventiller",
    description: "SK 38 - SK 50 - SK 63 plastik kapakları, D15 - D17 - D38 ventil üretmekteyiz.",
    image: "/images/products/100cc-hdpe-a.jpg",
    productCount: 0,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
