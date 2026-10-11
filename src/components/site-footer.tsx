import Link from "next/link";
import { practice } from "@/lib/practice";

export function SiteFooter() {

  return (
    <footer className="mt-auto border-t border-teal-900/10 bg-teal-950 text-teal-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold">{practice.name}</p>
          <p className="mt-1 text-sm text-teal-100/80">{practice.title}</p>
          <p className="mt-3 text-sm text-teal-100/70">
            {practice.location.city}, {practice.location.country}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-200/90">
            Enlaces
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/servicios" className="hover:text-white">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/sobre-mi" className="hover:text-white">
                Sobre mí
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="hover:text-white">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-200/90">
            Redes
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={practice.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Instagram @dra.mjmoreira
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-teal-100/60">
            {practice.disclaimer}
          </p>
        </div>
      </div>
      <div className="border-t border-teal-800/80 px-4 py-4 text-center text-xs text-teal-100/50">
        © {practice.shortName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
