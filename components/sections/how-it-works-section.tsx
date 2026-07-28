"use client";

import { Fragment } from "react";
import {
  CalendarRange,
  ChevronRight,
  ClipboardPen,
  Share2,
  TrendingUp,
  Users2,
} from "lucide-react";
import { howItWorksSection } from "@/lib/content";
import { FadeIn } from "@/components/shared/motion-primitives";

const icons = [ClipboardPen, CalendarRange, Users2, Share2, TrendingUp];

export function HowItWorksStrip() {
  return (
    <FadeIn className="w-full">
      <div className="navy-gradient overflow-hidden rounded-tl-3xl rounded-br-3xl px-5 pt-8 pb-10 text-white sm:px-8 sm:pt-9 sm:pb-11 md:rounded-tl-[2rem] md:rounded-br-[2rem] md:px-12 md:pt-10 md:pb-12 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="heading-card mb-8 text-center text-white md:mb-12">
            {howItWorksSection.title}
          </h2>

          {/* Mobile: vertical timeline */}
          <ol className="mx-auto flex max-w-md flex-col gap-0 lg:hidden">
            {howItWorksSection.steps.map((step, index) => {
              const Icon = icons[index];
              const isLast = index === howItWorksSection.steps.length - 1;

              return (
                <li key={step.step} className="relative flex gap-4">
                  <div className="flex w-11 shrink-0 flex-col items-center">
                    <div className="relative flex size-11 items-center justify-center rounded-full border border-gold-400/35 bg-white/5">
                      <Icon
                        className="size-5 text-gold-400"
                        strokeWidth={1.5}
                      />
                      <span
                        aria-hidden
                        className="absolute -right-0.5 -top-0.5 z-10 flex size-4 items-center justify-center rounded-full bg-gold-500 text-[9px] font-bold leading-none text-navy-950"
                      >
                        {index + 1}
                      </span>
                    </div>
                    {!isLast ? (
                      <span
                        aria-hidden
                        className="mt-1 w-px flex-1 bg-gold-400/25"
                      />
                    ) : null}
                  </div>
                  <div className={isLast ? "pb-0 pt-1.5" : "pb-7 pt-1.5"}>
                    <h3 className="text-strip-title text-left">
                      {step.title}
                    </h3>
                    <p className="text-strip-body mt-1.5 text-left text-pretty">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Desktop / tablet: horizontal strip */}
          <div className="hidden lg:block">
            <div className="flex w-full items-start">
              {howItWorksSection.steps.map((step, index) => {
                const Icon = icons[index];

                return (
                  <Fragment key={step.step}>
                    {index > 0 && (
                      <div
                        aria-hidden
                        className="flex shrink-0 items-center self-start px-2 pt-[1.25rem]"
                      >
                        <ChevronRight
                          className="size-4 text-gold-400/80"
                          strokeWidth={2}
                        />
                      </div>
                    )}

                    <div className="flex min-w-0 flex-1 flex-col items-center px-2 text-center">
                      <div className="relative mx-auto h-[3.4rem] w-[3.4rem]">
                        <div className="absolute bottom-0 left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-full border border-gold-400/35 bg-white/5">
                          <Icon
                            className="size-5 text-gold-400"
                            strokeWidth={1.5}
                          />
                        </div>
                        <span
                          aria-hidden
                          className="absolute right-0 top-0 z-10 flex size-[1.125rem] items-center justify-center rounded-full bg-gold-500 text-[10px] font-bold leading-none text-navy-950"
                        >
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-strip-title mt-4">{step.title}</h3>
                      <p className="text-strip-body mt-2 max-w-[11.5rem] text-pretty">
                        {step.description}
                      </p>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-cream-50 !px-0 !py-0">
      <HowItWorksStrip />
    </section>
  );
}
