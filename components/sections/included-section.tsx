"use client";

import { includedSection } from "@/lib/content";
import { images, type ImageKey } from "@/lib/images";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { HowItWorksStrip } from "@/components/sections/how-it-works-section";
import { SectionHeader, FadeIn } from "@/components/shared/motion-primitives";

function ServiceImageSlot({
  imageKey,
  alt,
  sizes = "280px",
  imageClassName,
}: {
  imageKey?: ImageKey;
  alt: string;
  sizes?: string;
  imageClassName?: string;
}) {
  return (
    <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-cream-100">
      {imageKey ? (
        <PlaceholderImage
          src={images[imageKey]}
          alt={alt}
          fill
          sizes={sizes}
          quality={92}
          imageClassName={imageClassName}
        />
      ) : null}
    </div>
  );
}

export function IncludedSection() {
  const { featuredService } = includedSection;

  return (
    <section
      id="incluso"
      className="bg-cream-50 pt-16 md:pt-20 lg:pt-24"
    >
      <div className="section-container px-5 md:px-8 lg:px-12">
        <SectionHeader
          eyebrow={includedSection.eyebrow}
          title={
            <>
              Cinco especialidades
              <span className="md:hidden"> </span>
              <span className="hidden md:inline"> - </span>
              Um plano de 3 meses
            </>
          }
          subtitle={
            <>
              Duas sessões por semana, montadas a partir{" "}
              <br className="md:hidden" />
              da sua avaliação — não um pacote genérico.
            </>
          }
          className="section-header-spacing"
          subtitleClassName="mt-3 md:mt-4"
        />

        <div className="section-content-gap mx-auto flex max-w-5xl flex-col items-center">
          <div className="section-content-gap flex w-full flex-col items-center lg:flex-row lg:items-stretch lg:justify-center">
            <FadeIn className="w-full max-w-[520px] sm:max-w-[280px]">
              <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-navy-950 shadow-lg shadow-navy-950/10 sm:min-h-[420px]">
                <div className="p-3 pb-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                    <PlaceholderImage
                      src={images[featuredService.imageKey]}
                      alt={featuredService.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 320px"
                      quality={92}
                      imageClassName="object-top"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 pt-4">
                  <p className="text-label text-gold-400">
                    {featuredService.eyebrow}
                  </p>
                  <h3 className="heading-card-lg mt-2 text-white">
                    {featuredService.title}
                  </h3>
                  <p className="text-body-sm mt-2 text-white/72">
                    {featuredService.description}
                  </p>
                </div>
              </article>
            </FadeIn>

            <div className="section-content-gap grid w-full max-w-[520px] grid-cols-1 sm:grid-cols-2">
              {includedSection.services.map((service, index) => (
                <FadeIn key={service.id} delay={index * 0.06}>
                  <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl bg-white shadow-sm shadow-navy-950/5 sm:min-h-[200px]">
                    <ServiceImageSlot
                      imageKey={service.imageKey}
                      alt={service.title}
                      sizes="(max-width: 640px) 100vw, 240px"
                      imageClassName={
                        service.id === "yoga"
                          ? "object-[50%_42%]"
                          : service.id === "neuropsicopedagogia"
                            ? "object-[50%_28%]"
                            : undefined
                      }
                    />
                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-label">
                        {service.eyebrow}
                      </p>
                      <h3 className="heading-card mt-1.5 text-navy-950">
                        {service.title}
                      </h3>
                      <p className="text-body-sm mt-2 text-navy-900/70">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        id="como-funciona"
        className="relative mt-10 w-full scroll-mt-24 md:mt-12 lg:mt-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 top-1/2 bg-white"
        />
        <div className="relative">
          <HowItWorksStrip />
        </div>
      </div>
    </section>
  );
}
