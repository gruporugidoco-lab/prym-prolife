"use client";

import { CalendarDays, Star } from "lucide-react";
import { midCtaSection } from "@/lib/content";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { FadeIn } from "@/components/shared/motion-primitives";

export function MidCtaSection() {
  return (
    <section className="section-padding bg-white !py-14 md:!py-16">
      <div className="section-container">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="heading-section text-balance text-navy-950">
            {midCtaSection.title}
            <br />
            <span className="text-gold-600">{midCtaSection.titleEmphasis}</span>
          </h2>
          <p className="text-lead mt-4 text-navy-900/70">
            {midCtaSection.subtitle}
            <br />
            {midCtaSection.subtitleLine2}
          </p>

          <div className="mt-8">
            <WhatsAppButton
              messageKey="mid-cta"
              size="lg"
              className="h-12 gap-2 rounded-md px-6 text-sm shadow-md shadow-gold-600/20"
            >
              <CalendarDays className="size-4" />
              {midCtaSection.cta}
            </WhatsAppButton>
          </div>
          <p className="text-caption mt-3.5 text-navy-900/55">
            {midCtaSection.microcopy}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="mx-auto mt-9 max-w-xl rounded-xl border border-navy-900/8 bg-cream-50 p-5"
        >
          <blockquote>
            <div className="flex items-center gap-0.5" aria-label="5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="size-3.5 fill-gold-500 text-gold-500"
                  strokeWidth={0}
                />
              ))}
            </div>
            <p className="text-body-sm mt-3 italic text-navy-900/70">
              &ldquo;{midCtaSection.quote.text}&rdquo;
            </p>
            <footer className="text-caption mt-3 text-navy-900/55">
              <cite className="not-italic font-semibold text-navy-950">
                {midCtaSection.quote.author}
              </cite>{" "}
              · {midCtaSection.quote.source}
            </footer>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  );
}
