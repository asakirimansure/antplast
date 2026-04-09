import Image from "next/image";
import Button from "@/components/ui/Button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function HeroSection({
  title,
  subtitle,
  description,
  image,
  ctaText,
  ctaHref,
  overlay = true,
  size = "lg",
}: HeroSectionProps) {
  const heights = {
    sm: "min-h-[300px]",
    md: "min-h-[400px]",
    lg: "min-h-[500px] lg:min-h-[600px]",
  };

  return (
    <section className={`relative ${heights[size]} flex items-center`}>
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      {!image && <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />}
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {subtitle && (
            <p className="text-secondary font-semibold text-lg mb-2">{subtitle}</p>
          )}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-white/90 text-lg mb-6 leading-relaxed">{description}</p>
          )}
          {ctaText && ctaHref && (
            <Button href={ctaHref} variant="secondary" size="lg">
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
