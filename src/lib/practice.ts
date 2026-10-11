import practiceData from "@/content/practice.json";

export type Practice = typeof practiceData;

export const practice: Practice = practiceData;

export function whatsappUrl(message?: string): string | null {
  const raw = practice.contact.whatsapp.replace(/\D/g, "");
  if (!raw) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${raw}${text}`;
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dramjmoreira.com";
