"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export default function ImageSlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full aspect-[21/9] overflow-hidden rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            index === current ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          {(slide.title || slide.subtitle) && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
              <div>
                {slide.title && (
                  <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                )}
                {slide.subtitle && (
                  <p className="text-white/90 text-lg md:text-xl">{slide.subtitle}</p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                index === current ? "bg-white" : "bg-white/50"
              )}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
