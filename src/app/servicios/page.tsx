import type { Metadata } from "next";
import { CtaButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Consulta pediátrica, nutrición pediátrica, seguimiento de crecimiento y orientación a familias en Portoviejo.",
};

export default function ServiciosPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="Servicios"
        title="¿En qué puedo ayudarte?"
        description="Cada consulta se adapta a la edad del niño, el contexto familiar y los objetivos acordados."
      />
      <div className="mt-12 grid gap-6">
        {practice.services.map((service, index) => (
          <article
            key={service.id}
            className="grid gap-4 rounded-2xl border border-teal-900/8 bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-8"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-900">
              {index + 1}
            </div>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-teal-950">
                {service.title}
              </h2>
              <p className="mt-2 leading-relaxed text-teal-900/80">
                {service.description}
              </p>
              <p className="mt-3 text-sm font-medium text-teal-700">
                Ideal para: {service.forWho}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 rounded-2xl bg-teal-50 p-8">
        <p className="text-sm font-semibold text-teal-900">Importante</p>
        <p className="mt-2 text-sm leading-relaxed text-teal-900/80">
          {practice.disclaimer} Si tu hijo presenta dificultad respiratoria,
          deshidratación severa, convulsiones o cualquier signo de urgencia,
          acude de inmediato a emergencias.
        </p>
        <div className="mt-6">
          <CtaButtons />
        </div>
      </div>
    </main>
  );
}
