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
      <div className="navy-gradient overflow-hidden rounded-tl-3xl rounded-br-3xl px-6 pt-8 pb-10 text-white sm:px-8 sm:pt-9 sm:pb-11 md:rounded-tl-[2rem] md:rounded-br-[2rem] md:px-12 md:pt-10 md:pb-12 lg:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="heading-card mb-10 text-center text-white md:mb-12">
            {howItWorksSection.title}
          </h2>

          <div className="-mx-1 overflow-x-auto pb-1 sm:-mx-2 lg:overflow-visible lg:pb-0">
            <div className="flex min-w-[820px] items-start px-1 sm:min-w-[900px] lg:min-w-0 lg:w-full">
              {howItWorksSection.steps.map((step, index) => {
                const Icon = icons[index];

                return (
                  <Fragment key={step.step}>
                    {index > 0 && (
                      <div
                        aria-hidden
                        className="flex shrink-0 items-center self-start pt-[1.15rem] px-1 sm:pt-[1.25rem] sm:px-1.5 lg:px-2"
                      >
                        <ChevronRight
                          className="size-3.5 text-gold-400/80 sm:size-4"
                          strokeWidth={2}
                        />
                      </div>
                    )}

                    <div className="flex min-w-0 flex-1 flex-col items-center px-1.5 text-center sm:px-2">
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
                      <h3 className="text-strip-title mt-3.5 md:mt-4">
                        {step.title}
                      </h3>
                      <p className="text-strip-body mt-2 max-w-[12rem] text-pretty lg:max-w-[11.5rem]">
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
