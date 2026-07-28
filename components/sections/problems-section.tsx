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
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import { problemsSection, comparisonSection } from "@/lib/content";
import { FadeIn } from "@/components/shared/motion-primitives";

const icons = [Frown, Brain, Compass, Moon, UserX, PersonStanding];

const areaStyles = {
  Emoções: {
    icon: "bg-blue-500/15 text-blue-400",
    badge: "border-blue-500/30 bg-blue-500/15 text-blue-400",
    node: "border-blue-400/35 bg-blue-500/10 text-blue-300",
  },
  Corpo: {
    icon: "bg-gold-500/15 text-gold-500",
    badge: "border-gold-500/30 bg-gold-500/15 text-gold-400",
    node: "border-gold-400/40 bg-gold-500/10 text-gold-400",
  },
  Mente: {
    icon: "bg-green-500/15 text-green-500",
    badge: "border-green-500/30 bg-green-500/15 text-green-400",
    node: "border-green-400/35 bg-green-500/10 text-green-300",
  },
} as const;

export function ProblemsSection() {
  return (
    <section id="desafios" className="navy-gradient relative overflow-hidden text-white">
      <div className="section-container section-padding relative">
        <div className="mx-auto mb-8 max-w-5xl md:mb-10">
          <FadeIn className="mx-auto max-w-4xl text-center">
            <p className="text-eyebrow text-gold-400">{problemsSection.eyebrow}</p>
            <h2 className="heading-section mt-2 text-white md:mt-3">
              {problemsSection.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="mx-auto mt-6 max-w-5xl md:mt-8">
            <aside
              aria-label="Ciclo entre emoções, corpo e mente"
              className="relative overflow-hidden rounded-xl border border-gold-500/25 bg-white/[0.025] px-4 py-5 sm:px-8 sm:py-7"
            >
              <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
                <div
                  className="flex w-full flex-wrap items-center justify-center gap-1.5 sm:gap-3"
                  role="img"
                  aria-label="Emoções, corpo e mente se alimentando em ciclo"
                >
                  {comparisonSection.connectionNodes.map((node, index) => {
                    const styles = areaStyles[node.area];
                    const isLast =
                      index === comparisonSection.connectionNodes.length - 1;

                    return (
                      <div
                        key={node.label}
                        className="flex items-center gap-1.5 sm:gap-3"
                      >
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-1.5 text-[11px] font-semibold tracking-wide sm:px-4 sm:text-[13px] ${styles.node}`}
                        >
                          {node.label}
                        </span>

                        {!isLast ? (
                          <ArrowRight
                            className="size-3.5 shrink-0 text-white/35 sm:size-4"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        ) : (
                          <>
                            <RefreshCw
                              className="size-3.5 shrink-0 text-gold-400 sm:size-4"
                              strokeWidth={1.75}
                              aria-hidden
                            />
                            <span
                              className={`inline-flex items-center rounded-full border px-2.5 py-1.5 text-[11px] font-semibold tracking-wide sm:px-4 sm:text-[13px] ${areaStyles.Emoções.node}`}
                            >
                              Emoções
                            </span>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>

                <p className="text-body-sm mx-auto mt-4 max-w-lg text-pretty text-white/72 md:mt-5">
                  {comparisonSection.descriptionLine1}
                  <br />
                  {comparisonSection.descriptionLine2}
                </p>
              </div>
            </aside>
          </FadeIn>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {problemsSection.items.map((item, index) => {
            const Icon = icons[index];
            const styles = areaStyles[item.area as keyof typeof areaStyles];
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="flex h-full gap-3.5 rounded-lg border border-white/12 bg-white/[0.025] p-4 transition-colors duration-300 hover:border-white/22 sm:gap-4 sm:p-5">
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
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center md:mt-20 lg:mt-24">
          <FadeIn>
            <p className="text-eyebrow text-gold-400">
              {comparisonSection.bridgeEyebrow}
            </p>
            <p className="heading-subsection mt-3 text-white md:mt-4">
              {comparisonSection.bridgeTitle}
            </p>
            <p className="text-body mx-auto mt-4 max-w-2xl text-white/72 md:mt-5">
              {comparisonSection.consequenceLine1}{" "}
              {comparisonSection.consequenceLine2}
            </p>
          </FadeIn>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-3xl gap-4 md:mt-12 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-lg bg-white p-5 text-navy-950 shadow-lg sm:p-6">
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
            <div className="h-full rounded-lg bg-white p-5 shadow-xl sm:p-6">
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
