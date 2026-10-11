import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Información sobre el tratamiento de datos personales en el sitio web del consultorio.",
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="Legal"
        title="Aviso de privacidad (borrador)"
        description="Documento inicial para la Fase 0. Debe ser revisado y adaptado por asesoría legal según la normativa aplicable en Ecuador."
      />
      <div className="prose prose-teal mt-10 max-w-none space-y-6 text-sm leading-relaxed text-teal-900/85">
        <section>
          <h2 className="font-serif text-lg font-semibold text-teal-950">
            1. Responsable
          </h2>
          <p>
            {practice.name}, con consultorio en {practice.location.city},{" "}
            {practice.location.country}, es responsable del tratamiento de los
            datos personales recabados a través de este sitio web y los canales
            de contacto asociados.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-teal-950">
            2. Datos que podemos recopilar
          </h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Datos de identificación y contacto (nombre, teléfono, correo)</li>
            <li>Datos proporcionados al solicitar cita o información</li>
            <li>Datos técnicos de navegación (cookies analíticas, si se activan)</li>
          </ul>
          <p className="mt-2">
            Los <strong>datos de salud</strong> no deben enviarse por formularios
            públicos no cifrados. Las fases futuras del proyecto incluirán un
            portal seguro para información clínica.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-teal-950">
            3. Finalidad
          </h2>
          <p>
            Agendar citas, responder solicitudes, enviar recordatorios (cuando
            el paciente lo autorice), mejorar el servicio y cumplir obligaciones
            legales del ejercicio profesional.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-teal-950">
            4. Derechos
          </h2>
          <p>
            Puede solicitar acceso, rectificación, eliminación u oposición al
            tratamiento escribiendo al correo de contacto del consultorio (cuando
            esté publicado en la página de{" "}
            <Link href="/contacto" className="font-semibold text-teal-800 hover:underline">
              contacto
            </Link>
            ).
          </p>
        </section>
        <section>
          <h2 className="font-serif text-lg font-semibold text-teal-950">
            5. Aviso médico
          </h2>
          <p>{practice.disclaimer}</p>
        </section>
        <p className="rounded-xl bg-amber-50 px-4 py-3 text-xs text-amber-950 ring-1 ring-amber-200">
          Este texto es un borrador informativo y no constituye asesoría legal.
          Sustituir antes del lanzamiento público definitivo.
        </p>
      </div>
    </main>
  );
}
