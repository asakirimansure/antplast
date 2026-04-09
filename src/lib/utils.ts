export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const SITE_URL = "https://antplast.com";
export const SITE_NAME = "Antplast";
export const SITE_DESCRIPTION =
  "Antplast - Plastik şişe ve ambalaj üretimi. IML/BML baskılı HDPE şişeler, NFC mikroçipli akıllı ambalaj çözümleri. Antalya fabrika, Viyana ofis.";
