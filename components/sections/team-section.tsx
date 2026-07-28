"use client";

import { Users, HeartHandshake, BrainCircuit } from "lucide-react";
import { teamSection } from "@/lib/content";
import { images } from "@/lib/images";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { SectionHeader, FadeIn } from "@/components/shared/motion-primitives";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

const highlights = [
  { icon: BrainCircuit, label: "Saúde emocional e cognitiva" },
  { icon: HeartHandshake, label: "Acolhimento humanizado" },
  { icon: Users, label: "Equipe integrada" },
];

export function TeamSection() {
  return (
    <section id="equipe" className="section-padding bg-white">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow={teamSection.eyebrow}
              title={teamSection.title}
              subtitle={teamSection.subtitle}
              align="left"
              className="mb-6"
            />
            <FadeIn>
              <p className="text-body text-navy-900/65">
                {teamSection.description}
              </p>
            </FadeIn>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <FadeIn key={item.label} delay={index * 0.08}>
                  <div className="rounded-xl border border-navy-900/8 bg-cream-50 p-4 text-center">
                    <item.icon className="mx-auto size-5 text-gold-500" />
                    <p className="mt-2 text-xs font-medium text-navy-900/75">
                      {item.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-8">
              <WhatsAppButton messageKey="team" size="lg">
                Falar com a equipe
              </WhatsAppButton>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-navy-950/10">
              <PlaceholderImage
                src={images.equipe}
                alt="Equipe multidisciplinar ProLife"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
