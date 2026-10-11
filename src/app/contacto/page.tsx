import type { Metadata } from "next";
import Link from "next/link";
import { CtaButtons } from "@/components/cta-buttons";
import { SectionHeading } from "@/components/section-heading";
import { practice, whatsappUrl } from "@/lib/practice";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Agenda cita con ${practice.shortName} en ${practice.location.city}. WhatsApp, teléfono e Instagram.`,
};

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const empty = !value?.trim();
  return (
    <div className="rounded-xl border border-teal-900/8 bg-white px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
        {label}
      </p>
      {empty ? (
        <p className="mt-1 text-sm text-teal-900/50">Por configurar en el consultorio</p>
      ) : href ? (
        <a
          href={href}
          className="mt-1 block text-sm font-medium text-teal-900 hover:text-coral"
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 text-sm font-medium text-teal-900">{value}</p>
      )}
    </div>
  );
}

export default function ContactoPage() {
  const wa = whatsappUrl();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="Contacto"
        title="Agenda tu consulta"
        description="Mientras activamos la agenda en línea (Fase 1), puedes escribirnos por los canales habituales del consultorio."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <ContactRow
            label="WhatsApp"
            value={practice.contact.whatsapp ? "Enviar mensaje" : ""}
            href={wa ?? undefined}
          />
          <ContactRow label="Teléfono" value={practice.contact.phone} />
          <ContactRow
            label="Correo"
            value={practice.contact.email}
            href={
              practice.contact.email
                ? `mailto:${practice.contact.email}`
                : undefined
            }
          />
          <ContactRow
            label="Instagram"
            value="@dra.mjmoreira"
            href={practice.social.instagram}
          />
          <ContactRow label="Ciudad" value={`${practice.location.city}, ${practice.location.country}`} />
          <ContactRow label="Horario" value={practice.contact.hours} />
        </div>
        <div className="rounded-2xl bg-teal-50 p-8">
          <h2 className="font-serif text-xl font-semibold text-teal-950">
            Antes de tu cita
          </h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-teal-900/85">
            <li>• Carné de vacunas y controles previos, si los tienes</li>
            <li>• Lista de medicamentos o suplementos actuales</li>
            <li>• Dudas escritas para aprovechar mejor la consulta</li>
            <li>• En nutrición: registro breve de comidas o preferencias del niño</li>
          </ul>
          <div className="mt-6">
            <CtaButtons layout="col" />
          </div>
          <p className="mt-6 text-xs text-teal-800/70">
            Al contactarnos, aceptas nuestro{" "}
            <Link href="/privacidad" className="font-medium underline underline-offset-2">
              aviso de privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
