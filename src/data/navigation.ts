import { NavItem } from "@/types";

export const mainNavItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  {
    label: "Ürünlerimiz",
    href: "/urunlerimiz",
    children: [
      { label: "Gıda Ürünleri", href: "/kategori/gida-urunleri" },
      { label: "IML BML Baskılı Ürünler", href: "/kategori/iml-bml-baskili-urunler" },
    ],
  },
  { label: "Mikroçipli Şişe", href: "/mikrocipli-sise-ve-ambalaj" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "BML Microchip", href: "/bml-microchip" },
  { label: "Kalite Kontrol", href: "/kalite-kontrol" },
  { label: "İletişim", href: "/iletisim" },
];

export const footerNavItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Ürünlerimiz", href: "/urunlerimiz" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Kalite Kontrol", href: "/kalite-kontrol" },
  { label: "İletişim", href: "/iletisim" },
];
