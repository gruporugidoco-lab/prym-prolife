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
            <br className="md:hidden" />{" "}
            {pricingSection.titleLine3}
          </h2>
        </FadeIn>

        <FadeIn className="mx-auto max-w-2xl rounded-2xl border border-navy-900/8 bg-white p-5 text-center sm:p-6 md:p-8">
          <p className="text-label">{pricingSection.planLabel}</p>
          <p className="heading-display mt-2 text-navy-950">
            {pricingSection.planPrice}
          </p>

          <div className="mx-auto mt-7 w-fit max-w-full border-t border-navy-900/8 pt-7 text-left">
            <p className="text-label mb-3 text-center text-gold-600">
              {pricingSection.highlightsLabel}
            </p>
            <ul className="flex flex-col gap-2.5">
              {pricingSection.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-body flex items-start gap-2.5 text-navy-950"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-gold-500"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <p className="text-label mb-3 mt-6 text-center text-gold-600">
              {pricingSection.specialtiesLabel}
            </p>
            <ul className="flex flex-col gap-2.5">
              {pricingSection.specialties.map((item) => (
                <li
                  key={item}
                  className="text-body flex items-start gap-2.5 text-navy-900/75"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-gold-500"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <WhatsAppButton
              messageKey="pricing"
              size="lg"
              className="h-auto min-h-12 w-full whitespace-normal rounded-md px-5 py-3 text-sm shadow-md shadow-gold-600/20 sm:w-auto sm:whitespace-nowrap sm:px-6"
            >
              {pricingSection.cta}
            </WhatsAppButton>
          </div>

          <p className="text-caption mx-auto mt-3.5 max-w-md text-navy-900/55">
            {pricingSection.microcopyLine1}
            <br />
            {pricingSection.microcopyLine2}
          </p>

          <p className="text-body-sm mt-6 border-t border-navy-900/8 pt-5 text-navy-900/60">
            {pricingSection.coupleNote}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
