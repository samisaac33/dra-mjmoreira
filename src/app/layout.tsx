import type { Metadata } from "next";
import { Nunito, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";
import { practice, siteUrl } from "@/lib/practice";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${practice.shortName} | Pediatría y nutrición pediátrica en ${practice.location.city}`,
    template: `%s | ${practice.shortName}`,
  },
  description: `${practice.name}. ${practice.title} en ${practice.location.city}, ${practice.location.country}. Consulta pediátrica, nutrición infantil y acompañamiento a familias.`,
  openGraph: {
    type: "website",
    locale: "es_EC",
    siteName: practice.shortName,
    title: practice.name,
    description: practice.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-teal-950">
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
