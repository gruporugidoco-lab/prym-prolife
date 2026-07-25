"use client";

import {
  Frown,
  Brain,
  Compass,
  Moon,
  PersonStanding,
  UserX,
  Check,
  X,
  RefreshCw,
} from "lucide-react";
import { problemsSection, comparisonSection } from "@/lib/content";
import { FadeIn } from "@/components/shared/motion-primitives";

const icons = [Frown, Brain, Compass, Moon, UserX, PersonStanding];

const areaStyles = {
  Emoções: {
    icon: "bg-blue-500/15 text-blue-400",
    badge: "border-blue-500/30 bg-blue-500/15 text-blue-400",
  },
  Corpo: {
    icon: "bg-gold-500/15 text-gold-500",
    badge: "border-gold-500/30 bg-gold-500/15 text-gold-400",
  },
  Mente: {
    icon: "bg-green-500/15 text-green-500",
    badge: "border-green-500/30 bg-green-500/15 text-green-400",
  },
} as const;

export function ProblemsSection() {
  return (
    <section id="desafios" className="navy-gradient relative overflow-hidden text-white">
      <div className="section-container section-padding relative">
        <FadeIn className="section-header-spacing mx-auto max-w-4xl text-center">
          <p className="text-eyebrow text-gold-400">{problemsSection.eyebrow}</p>
          <h2 className="heading-section mt-3 text-white">
            {problemsSection.title}
          </h2>
        </FadeIn>

        <div className="section-content-gap mx-auto grid max-w-5xl sm:grid-cols-2 lg:grid-cols-3">
          {problemsSection.items.map((item, index) => {
            const Icon = icons[index];
            const styles = areaStyles[item.area as keyof typeof areaStyles];
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="flex h-full gap-4 rounded-lg border border-white/12 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/22">
                  <div
                    className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${styles.icon}`}
                  >
                    <Icon
                      className={index === 5 ? "size-6" : "size-5"}
                      strokeWidth={1.75}
                    />
                  </div>
                  <div>
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${styles.badge}`}
                    >
                      {item.area}
                    </span>
                    <h3 className="heading-card mt-2 text-white">{item.title}</h3>
                    <p className="text-body-sm mt-1 text-white/72">
                      {item.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            );
          })}

          <FadeIn delay={0.36} className="col-span-full">
            <article className="flex w-full justify-center rounded-lg border border-white/12 bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/22">
              <div className="flex gap-4 text-left">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-red-500/15 text-red-400">
                  <RefreshCw className="size-5" strokeWidth={1.75} aria-hidden />
                </div>
                <div>
                  <h3 className="heading-card text-white">
                    {comparisonSection.connectionCardTitle}
                  </h3>
                  <p className="text-body-sm mt-1 text-white/72">
                    {comparisonSection.descriptionLine1}
                    <br />
                    {comparisonSection.descriptionLine2}
                  </p>
                </div>
              </div>
            </article>
          </FadeIn>
        </div>

        <div className="section-stack-spacing mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="heading-subsection text-white">
              {comparisonSection.eyebrowLine1}
              <br />
              <span className="text-gold-400">{comparisonSection.eyebrowLine2}</span>
            </p>
            <p className="text-body mx-auto mt-5 max-w-2xl text-white/72">
              {comparisonSection.consequenceLine1}
              <br />
              {comparisonSection.consequenceLine2}
            </p>
          </FadeIn>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-lg bg-white p-6 text-navy-950 shadow-lg">
              <h3 className="heading-card text-navy-800">
                {comparisonSection.traditional.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {comparisonSection.traditional.items.map((item) => (
                  <li
                    key={item}
                    className="text-body-sm flex items-center gap-2 font-medium text-navy-900/70"
                  >
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-red-500/12 text-red-500">
                      <X className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <div className="flex size-12 items-center justify-center rounded-full gold-gradient font-serif text-sm font-semibold text-navy-950 shadow-lg">
              VS
            </div>
          </div>

          <FadeIn delay={0.1}>
            <div className="h-full rounded-lg bg-white p-6 shadow-xl">
              <h3 className="heading-card text-navy-950">
                {comparisonSection.prym.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {comparisonSection.prym.items.map((item) => (
                  <li
                    key={item}
                    className="text-body-sm flex items-center gap-2 font-medium text-navy-900"
                  >
                    <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-500">
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
