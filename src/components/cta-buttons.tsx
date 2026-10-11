import Link from "next/link";
import { practice, whatsappUrl } from "@/lib/practice";

type Props = {
  className?: string;
  layout?: "row" | "col";
};

export function CtaButtons({ className = "", layout = "row" }: Props) {
  const wa = whatsappUrl(
    "Hola, me gustaría agendar una cita con la Dra. María José Moreira.",
  );
  const flex =
    layout === "col"
      ? "flex flex-col gap-3"
      : "flex flex-col gap-3 sm:flex-row sm:flex-wrap";

  return (
    <div className={`${flex} ${className}`}>
      {wa ? (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-coral-dark"
        >
          WhatsApp — Agendar cita
        </a>
      ) : (
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-coral-dark"
        >
          Agendar cita
        </Link>
      )}
      <a
        href={practice.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border border-teal-900/15 bg-white px-6 py-3 text-sm font-semibold text-teal-900 transition hover:bg-teal-50"
      >
        Instagram
      </a>
    </div>
  );
}
