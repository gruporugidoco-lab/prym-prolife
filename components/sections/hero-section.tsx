"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { hero } from "@/lib/content";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/shared/motion-primitives";

export function HeroSection() {
  return (
    <section
      id="programa"
      className="relative isolate overflow-hidden"
    >
      <Image
        src="/images/hero.png"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="pointer-events-none -z-10 object-cover object-[10%_center] max-md:object-[34%_26%] md:max-lg:object-[12%_center] lg:object-[8%_center]"
      />
      <div className="section-container px-5 pb-12 pt-10 md:px-8 md:pb-14 md:pt-12 lg:px-12 lg:pb-20 lg:pt-16">
        <div className="grid items-center gap-6 lg:min-h-[360px] lg:grid-cols-[45fr_55fr] lg:gap-8">
          <div className="relative z-10 max-w-[510px]">
            <FadeIn>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-600/20 bg-white px-3 py-1.5 shadow-[0_0_20px_rgba(196,163,90,0.18)] md:mb-4">
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 animate-dot-pulse rounded-full bg-gold-500"
                />
                <p className="text-eyebrow text-gold-600">{hero.eyebrow}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="heading-hero max-w-[560px] text-navy-950">
                {hero.title}
                <br />
                <span className="italic text-gold-600">{hero.titleEmphasis}</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="text-lead mt-6 max-w-[470px] text-navy-900/70 lg:mt-5">
                {hero.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-7">
                <WhatsAppButton
                  messageKey="hero-primary"
                  size="sm"
                  className="h-11 rounded-md px-5 text-sm shadow-md shadow-gold-600/20 hover:-translate-y-0.5"
                >
                  <CalendarDays className="size-4" />
                  {hero.primaryCta}
                </WhatsAppButton>
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="h-11 rounded-md border-navy-900/20 px-5 text-sm shadow-sm hover:-translate-y-0.5 hover:bg-white"
                >
                  <Link href="#incluso">{hero.secondaryCta}</Link>
                </Button>
              </div>
              <p className="text-body-sm mt-3.5 max-w-[430px] text-navy-900/60">
                {hero.ctaMicrocopy}
              </p>
            </FadeIn>
          </div>

          <div
            aria-hidden
            className="relative hidden min-h-[360px] lg:block"
          />
        </div>
      </div>
    </section>
  );
}
