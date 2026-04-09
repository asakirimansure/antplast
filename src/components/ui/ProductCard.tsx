import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/urun/${product.slug}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
      </div>
    </Link>
  );
}
