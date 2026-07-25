"use client";

import { faqSection } from "@/lib/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader, FadeIn } from "@/components/shared/motion-primitives";

export function FaqSection() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeader
          eyebrow={faqSection.eyebrow}
          title={faqSection.title}
          className="section-header-spacing"
        />

        <FadeIn className="mx-auto max-w-2xl rounded-xl bg-cream-50 px-6 py-4 shadow-sm shadow-navy-950/5 md:px-8 md:py-5">
          <Accordion type="single" collapsible className="w-full">
            {faqSection.items.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-body font-medium text-navy-950 md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-navy-900/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
