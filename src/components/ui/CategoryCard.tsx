import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/kategori/${category.slug}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{category.description}</p>
        <div className="mt-3 flex items-center text-primary font-medium text-sm">
          {category.productCount} Ürün
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
