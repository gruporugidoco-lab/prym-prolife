import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";
import { siteConfig } from "@/lib/content";
import { CLINIC_ADDRESS, CLINIC_PHONE } from "@/lib/whatsapp";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.clinic}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.description} ${siteConfig.tagline}`,
  keywords: [
    "PRYM 60+",
    "ProLife",
    "saúde emocional idosos",
    "programa idosos Tubarão",
    "neuropsicopedagogia",
    "qualidade de vida terceira idade",
    "centro saúde da mente",
  ],
  authors: [{ name: siteConfig.clinic }],
  openGraph: {
    title: `${siteConfig.name} — Programa Integrado para Idosos`,
    description: siteConfig.description,
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.clinic,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "contact:phone_number": CLINIC_PHONE,
    "contact:street_address": CLINIC_ADDRESS,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
