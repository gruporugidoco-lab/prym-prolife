"use client";

import { useState } from "react";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import {
  authoritySection,
  testimonialsSection,
} from "@/lib/content";
import { images } from "@/lib/images";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { FadeIn } from "@/components/shared/motion-primitives";
import { cn } from "@/lib/utils";
const statIcons = [Award, Users, Stethoscope, Star];

const galleryImages = [
  {
    src: images.clinica1,
    label: authoritySection.galleryLabels[0],
    imageClassName: "object-cover object-center hover:scale-100",
  },
  { src: images.clinica3, label: authoritySection.galleryLabels[1] },
  { src: images.clinica2, label: authoritySection.galleryLabels[2] },
  { src: images.clinica4, label: authoritySection.galleryLabels[3] },
  { src: images.clinica5, label: authoritySection.galleryLabels[4] },
  { src: images.clinica6, label: authoritySection.galleryLabels[5] },
];

function AuthorityCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-5 shadow-md shadow-navy-950/[0.06] sm:p-6 md:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}

const REVIEWS_PER_PAGE = 2;

function GoogleReviewCard({
  quote,
  author,
  source,
  expanded,
  onToggle,
}: {
  quote: string;
  author: string;
  source: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  const isLong = quote.length > 140;

  return (
    <blockquote className="flex h-full flex-col rounded-xl bg-cream-50 p-4">
      <div className="flex items-center gap-0.5" aria-label="5 de 5 estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-3 fill-gold-500 text-gold-500"
            strokeWidth={0}
          />
        ))}
      </div>
      <p
        className={cn(
          "text-body-sm mt-2.5 min-h-[4lh] italic text-navy-900/70",
          expanded
            ? "max-h-[4lh] overflow-y-auto"
            : "line-clamp-4",
        )}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-1.5 flex h-5 items-center">
        {isLong ? (
          <button
            type="button"
            onClick={onToggle}
            className="text-caption font-medium text-gold-600 transition-colors hover:text-gold-500"
          >
            {expanded ? "Ver menos" : "Ver mais"}
          </button>
        ) : null}
      </div>
      <footer className="mt-auto border-t border-navy-900/8 pt-3">
        <cite className="not-italic">
          <p className="text-body-sm font-semibold text-navy-950">{author}</p>
          <p className="text-caption mt-0.5 text-navy-900/60">{source}</p>
        </cite>
      </footer>
    </blockquote>
  );
}

function GoogleReviewsCarousel() {
  const { items } = testimonialsSection;
  const pageCount = Math.ceil(items.length / REVIEWS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [expandedAuthors, setExpandedAuthors] = useState<Record<string, boolean>>(
    {},
  );

  const visibleItems = items.slice(
    page * REVIEWS_PER_PAGE,
    page * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE,
  );

  const toggleExpanded = (author: string) => {
    setExpandedAuthors((current) => ({
      ...current,
      [author]: !current[author],
    }));
  };

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    setExpandedAuthors({});
  };

  return (
    <div>
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2">
        {visibleItems.map((item) => (
          <GoogleReviewCard
            key={item.author}
            quote={item.quote}
            author={item.author}
            source={item.source}
            expanded={Boolean(expandedAuthors[item.author])}
            onToggle={() => toggleExpanded(item.author)}
          />
        ))}
      </div>

      {pageCount > 1 && (
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Avaliações anteriores"
            disabled={page === 0}
            onClick={() => goToPage(page - 1)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-navy-900/10 text-navy-900/70 transition-colors hover:border-gold-500/40 hover:text-gold-600 disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft className="size-4" strokeWidth={2} />
          </button>
          <span className="text-caption tabular-nums text-navy-900/55">
            {page + 1} / {pageCount}
          </span>
          <button
            type="button"
            aria-label="Próximas avaliações"
            disabled={page === pageCount - 1}
            onClick={() => goToPage(page + 1)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-navy-900/10 text-navy-900/70 transition-colors hover:border-gold-500/40 hover:text-gold-600 disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronRight className="size-4" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}
export function AuthoritySection() {
  return (
    <section id="a-prolife" className="section-padding bg-cream-50">
      <div className="section-container">
        <FadeIn className="section-header-spacing text-center">
          <div className="flex items-center justify-center gap-4">
            <span
              className="h-[1.5px] w-8 bg-gold-500/80 sm:w-10 md:w-12"
              aria-hidden
            />
            <h2 className="heading-section text-navy-950">
              {authoritySection.title}
            </h2>
            <span
              className="h-[1.5px] w-8 bg-gold-500/80 sm:w-10 md:w-12"
              aria-hidden
            />
          </div>
        </FadeIn>

        <div className="section-content-gap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {galleryImages.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              <figure className="overflow-hidden rounded-xl">
                <div className="relative aspect-[4/3]">
                  <PlaceholderImage
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    imageClassName={
                      "imageClassName" in item ? item.imageClassName : undefined
                    }
                  />
                </div>
                <figcaption className="text-caption-muted mt-3 text-center text-navy-900/55">
                  {item.label}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        <div className="section-stack-spacing section-content-gap grid lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <AuthorityCard>
              <div className="mb-7 flex items-center justify-center gap-3">
                <span className="h-px w-5 bg-gold-500/80" aria-hidden />
                <h3 className="heading-card text-navy-950">
                  Nossa autoridade
                </h3>
                <span className="h-px w-5 bg-gold-500/80" aria-hidden />
              </div>

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-4">
                {authoritySection.stats.map((stat, index) => {
                  const Icon = statIcons[index];
                  return (
                    <div
                      key={`${stat.value}-${stat.labelPrimary}`}
                      className="flex flex-col items-center text-center"
                    >
                      <Icon
                        className="mb-2.5 size-5 text-gold-500 sm:mb-3 sm:size-6"
                        strokeWidth={1.5}
                      />
                      <p className="text-stat-value text-navy-950">
                        {stat.value}
                      </p>
                      <p className="text-stat-label mt-1.5 text-pretty text-navy-950 sm:mt-2">
                        {stat.labelPrimary}
                      </p>
                      <p className="text-stat-accent text-pretty">
                        {stat.labelAccent}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AuthorityCard>
          </FadeIn>

          <FadeIn delay={0.08}>
            <AuthorityCard>
              <p className="text-label">{testimonialsSection.eyebrow}</p>
              <h3 className="heading-card mt-1.5 font-bold text-navy-950">
                {testimonialsSection.title}
              </h3>

              <div className="mt-7">
                <GoogleReviewsCarousel />
              </div>
            </AuthorityCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
