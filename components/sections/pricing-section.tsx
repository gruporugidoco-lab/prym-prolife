"use client";

import { Check } from "lucide-react";
import { pricingSection } from "@/lib/content";
import { FadeIn } from "@/components/shared/motion-primitives";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export function PricingSection() {
  return (
    <section id="investimento" className="section-padding bg-cream-100 !py-16">
      <div className="section-container">
        <FadeIn className="mx-auto max-w-3xl text-center mb-10">
          <p className="text-eyebrow mb-4 font-semibold tracking-[0.18em] text-gold-500">
            {pricingSection.eyebrow}
          </p>
          <h2 className="heading-section text-balance text-navy-950">
            {pricingSection.title}
            <br />
            {pricingSection.titleLine2}
          </h2>
        </FadeIn>

        <FadeIn className="mx-auto max-w-2xl rounded-2xl border border-navy-900/8 bg-white p-6 text-center md:p-8">
          <p className="text-label">{pricingSection.planLabel}</p>
          <p className="heading-display mt-2 text-navy-950">
            {pricingSection.planPrice}
          </p>

          <ul className="mx-auto mt-7 flex w-fit max-w-full flex-col gap-3 border-t border-navy-900/8 pt-7">
            {pricingSection.highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-body-sm flex items-start gap-2.5 text-left text-navy-900/70"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-gold-500" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <WhatsAppButton
              messageKey="pricing"
              size="lg"
              className="h-12 w-full rounded-md px-6 text-sm shadow-md shadow-gold-600/20 sm:w-auto"
            >
              {pricingSection.cta}
            </WhatsAppButton>
          </div>

          <p className="text-caption mx-auto mt-3.5 max-w-md text-navy-900/55">
            {pricingSection.microcopy}
          </p>

          <p className="text-body-sm mt-6 border-t border-navy-900/8 pt-5 text-navy-900/60">
            {pricingSection.coupleNote}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
