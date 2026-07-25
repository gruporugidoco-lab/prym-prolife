"use client";

import {
  ClipboardList,
  UserCog,
  Users,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { differentialsSection } from "@/lib/content";
import { SectionHeader, FadeIn } from "@/components/shared/motion-primitives";

const icons = [ClipboardList, UserCog, Users, HeartHandshake, ShieldCheck];

export function DifferentialsSection() {
  return (
    <section className="section-padding bg-white !py-14">
      <div className="section-container">
        <SectionHeader
          eyebrow={differentialsSection.eyebrow}
          title={differentialsSection.title}
          subtitle={differentialsSection.subtitle}
          className="mb-10"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {differentialsSection.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <FadeIn
                key={item.title}
                delay={index * 0.06}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <p className="text-sm font-medium leading-snug text-navy-950">
                  {item.title}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
