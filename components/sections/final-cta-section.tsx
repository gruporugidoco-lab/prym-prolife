"use client";

import { finalCtaSection, pricingSection } from "@/lib/content";
import { images } from "@/lib/images";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { FadeIn } from "@/components/shared/motion-primitives";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export function FinalCtaSection() {
  return (
    <section className="bg-cream-50">
      <div className="grid overflow-hidden lg:grid-cols-2">
        <FadeIn direction="none" className="relative min-h-[220px] lg:min-h-0">
          <PlaceholderImage
            src={images.idosoCasal}
            alt="Casal idoso sorrindo, representando qualidade de vida no PRYM 60+"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent p-10 md:p-12">
            <p className="font-serif text-lg italic text-white">
              {finalCtaSection.eyebrow}
            </p>
          </div>
        </FadeIn>

        <FadeIn className="navy-gradient flex flex-col justify-center p-10 md:p-12 lg:p-16">
          <h2 className="heading-section text-balance text-white">
            {finalCtaSection.title}
            <br />
            {finalCtaSection.titleLine2}
          </h2>
          <p className="mt-5 leading-relaxed text-white/70 md:mt-6">
            {finalCtaSection.subtitle}
          </p>
          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-5 md:mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              {pricingSection.planLabel}
            </p>
            <p className="mt-2 font-serif text-2xl text-white">
              {pricingSection.planPrice}
            </p>
            <p className="text-xs text-white/55">{pricingSection.coupleNote}</p>
          </div>
          <div className="mt-10 md:mt-12">
            <WhatsAppButton messageKey="final-cta" size="lg">
              {finalCtaSection.cta}
            </WhatsAppButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
