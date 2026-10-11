"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { practice } from "@/lib/practice";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-teal-900/10 bg-[#fffbf7]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group min-w-0">
          <span className="block truncate text-sm font-semibold text-teal-900">
            {practice.shortName}
          </span>
          <span className="block truncate text-xs text-teal-800/70">
            {practice.location.city}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-teal-900 text-white"
                    : "text-teal-900/80 hover:bg-teal-900/5 hover:text-teal-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-full bg-coral px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-coral-dark md:inline-flex"
        >
          Agendar cita
        </Link>

        <button
          type="button"
          className="inline-flex rounded-lg border border-teal-900/15 p-2 text-teal-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-teal-900/10 px-4 py-3 md:hidden"
          aria-label="Principal móvil"
        >
          <ul className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-teal-900 hover:bg-teal-900/5"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contacto"
                className="mt-2 block rounded-full bg-coral px-4 py-2 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Agendar cita
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
