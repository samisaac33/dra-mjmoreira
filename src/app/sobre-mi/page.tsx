import type { Metadata } from "next";
import { CtaButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: `Conoce a ${practice.name}, pediatra y nutricionista pediátrica en ${practice.location.city}.`,
};

export default function SobreMiPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="rounded-3xl bg-gradient-to-br from-teal-100 to-teal-50 p-8 ring-1 ring-teal-900/5">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-800">
            Perfil profesional
          </p>
          <p className="mt-4 font-serif text-3xl font-semibold text-teal-950">
            {practice.name}
          </p>
          <p className="mt-2 text-teal-800">{practice.title}</p>
          <ul className="mt-6 space-y-2 text-sm text-teal-900/85">
            {practice.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden>✓</span>
                {h}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-teal-800/70">
            Fotografía profesional y credenciales: pendiente de cargar con
            autorización de la doctora.
          </p>
        </div>
        <div>
          <SectionHeading
            eyebrow="Sobre mí"
            title="Acompañamiento a familias en Portoviejo"
            description={practice.about.intro}
          />
          <h3 className="mt-8 font-serif text-xl font-semibold text-teal-950">
            Mi forma de trabajar
          </h3>
          <ul className="mt-4 space-y-3">
            {practice.about.approach.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-teal-900/8 bg-white px-4 py-3 text-sm leading-relaxed text-teal-900/85"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-teal-900/75">
            Sigue contenido educativo y novedades del consultorio en{" "}
            <a
              href={practice.social.instagram}
              className="font-semibold text-teal-800 underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            .
          </p>
          <div className="mt-8">
            <CtaButtons />
          </div>
        </div>
      </div>
    </main>
  );
}
