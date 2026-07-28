"use client";

import { CheckCircle2 } from "lucide-react";
import { benefitsSection } from "@/lib/content";
import { SectionHeader, FadeIn } from "@/components/shared/motion-primitives";

export function BenefitsSection() {
  return (
    <section id="resultados" className="section-padding bg-white !py-16">
      <div className="section-container">
        <SectionHeader
          eyebrow={benefitsSection.eyebrow}
          title={benefitsSection.title}
          subtitle={benefitsSection.subtitle}
          className="mb-12"
          eyebrowClassName="mb-2"
          subtitleClassName="mt-3 md:mt-4"
        />

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {benefitsSection.items.map((benefit, index) => (
            <FadeIn key={benefit} delay={index * 0.05}>
              <article className="flex h-full items-start gap-3 rounded-xl border border-navy-900/8 bg-cream-50 p-5 transition-colors duration-300 hover:border-gold-500/25">
                <CheckCircle2 className="size-5 shrink-0 text-gold-500" />
                <p className="text-body-sm font-medium leading-snug text-navy-950">
                  {benefit}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
