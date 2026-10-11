import Link from "next/link";
import { CtaButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { practice } from "@/lib/practice";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 to-[#fffbf7]">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-coral/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-teal-200/40 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800 ring-1 ring-teal-900/10">
              {practice.location.city}, {practice.location.country}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-teal-950 sm:text-5xl">
              {practice.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-teal-800">{practice.title}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-teal-900/80">
              {practice.tagline}
            </p>
            <div className="mt-8">
              <CtaButtons />
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {practice.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-teal-900 ring-1 ring-teal-900/10"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-teal-900/5">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Atención en Portoviejo
            </p>
            <p className="mt-3 font-serif text-2xl font-semibold text-teal-950">
              Salud y nutrición en cada etapa
            </p>
            <p className="mt-3 text-sm leading-relaxed text-teal-900/75">
              Desde la lactancia y la alimentación complementaria hasta la
              adolescencia: acompañamiento basado en evidencia, con tiempo para
              escuchar a la familia y resolver dudas con claridad.
            </p>
            <Link
              href="/sobre-mi"
              className="mt-6 inline-flex text-sm font-semibold text-coral hover:text-coral-dark"
            >
              Conoce mi enfoque →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Atención integral para el crecimiento"
          description="Consulta pediátrica y nutrición infantil con planes claros y seguimiento."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {practice.services.slice(0, 4).map((service) => (
            <article
              key={service.id}
              className="rounded-2xl border border-teal-900/8 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-serif text-xl font-semibold text-teal-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-teal-900/75">
                {service.description}
              </p>
              <p className="mt-3 text-xs font-medium text-teal-700">
                {service.forWho}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/servicios"
            className="text-sm font-semibold text-teal-800 hover:text-teal-950"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </section>

      <section className="bg-teal-950 text-teal-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Enfoque"
              title="Ciencia con calidez humana"
              description={practice.about.intro}
            />
          </div>
          <ul className="mt-8 space-y-3 lg:mt-0 lg:max-w-md">
            {practice.about.approach.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-teal-100/90"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-coral" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-serif text-3xl font-semibold text-teal-950">
          ¿Listo para agendar?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-teal-900/75">
          Escríbenos por WhatsApp o Instagram. Pronto podrás reservar citas
          directamente desde este sitio.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButtons layout="col" className="items-center sm:flex-row" />
        </div>
      </section>
    </>
  );
}
