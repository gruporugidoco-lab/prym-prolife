import { HeroSection } from "@/components/sections/hero-section";
import { ProblemsSection } from "@/components/sections/problems-section";
import { IncludedSection } from "@/components/sections/included-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { MidCtaSection } from "@/components/sections/mid-cta-section";
import { AuthoritySection } from "@/components/sections/authority-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { siteConfig } from "@/lib/content";
import { CLINIC_PHONE } from "@/lib/whatsapp";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.clinic,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: CLINIC_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua José Evaristo Fogaça, 73",
    addressLocality: "Tubarão",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  medicalSpecialty: "Saúde Emocional e Qualidade de Vida para Idosos",
  offers: [
    {
      "@type": "Offer",
      name: "Plano Individual PRYM 60+",
      price: "297.00",
      priceCurrency: "BRL",
    },
    {
      "@type": "Offer",
      name: "Plano Casal 60+",
      price: "497.00",
      priceCurrency: "BRL",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <ProblemsSection />
      <IncludedSection />
      <BenefitsSection />
      <MidCtaSection />
      <AuthoritySection />
      <PricingSection />
      <FaqSection />
    </>
  );
}
