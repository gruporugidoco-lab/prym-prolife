"use client";

import { Fragment } from "react";
import {
  CalendarRange,
  ChevronRight,
  ClipboardPen,
  TrendingUp,
  Users2,
} from "lucide-react";
import { howItWorksSection } from "@/lib/content";
import { FadeIn } from "@/components/shared/motion-primitives";

const icons = [ClipboardPen, CalendarRange, Users2, TrendingUp];

export function HowItWorksStrip() {
  return (
    <FadeIn className="w-full">
      <div className="navy-gradient overflow-hidden rounded-2xl px-4 py-7 text-white sm:px-6 md:px-8 md:py-8">
        <h2 className="heading-card mb-6 text-center text-white md:mb-7">
          {howItWorksSection.title}
        </h2>

        <div className="-mx-1 overflow-x-auto pb-1 sm:-mx-2 lg:overflow-visible lg:pb-0">
          <div className="flex min-w-[620px] items-stretch px-1 sm:min-w-[680px] lg:min-w-0 lg:w-full">
            {howItWorksSection.steps.map((step, index) => {
              const Icon = icons[index];

              return (
                <Fragment key={step.step}>
                  {index > 0 && (
                    <div
                      aria-hidden
                      className="flex shrink-0 items-center self-center px-1 sm:px-1.5 lg:px-2"
                    >
                      <ChevronRight
                        className="size-4 text-gold-400/90"
                        strokeWidth={2}
                      />
                    </div>
                  )}

                  <div className="flex min-w-0 flex-1 flex-col items-center px-1 text-center sm:px-2">
                    <div className="relative mx-auto h-[3.15rem] w-[3.15rem] sm:h-[3.4rem] sm:w-[3.4rem]">
                      <div className="absolute bottom-0 left-1/2 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-gold-400/35 bg-white/5 sm:size-11">
                        <Icon
                          className="size-4 text-gold-400 sm:size-5"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span
                        aria-hidden
                        className="absolute right-0 top-0 z-10 flex size-4 items-center justify-center rounded-full bg-gold-500 text-[9px] font-bold leading-none text-navy-950 sm:size-[1.125rem] sm:text-[10px]"
                      >
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-strip-title mt-3">{step.title}</h3>
                    <p className="text-strip-body mt-1.5 max-w-[13rem] lg:max-w-[12.5rem]">
                      {step.description}
                    </p>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="bg-cream-50 !px-0 !pt-0 !pb-10 md:!pt-1 md:!pb-12"
    >
      <div className="section-container">
        <HowItWorksStrip />
      </div>
    </section>
  );
}
