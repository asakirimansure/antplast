export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  categorySlug: string;
  image: string;
  modelUrl?: string;
  features?: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface ContactInfo {
  name: string;
  address: string;
  city: string;
  country: string;
  phone: string[];
  email: string;
  mapUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}
