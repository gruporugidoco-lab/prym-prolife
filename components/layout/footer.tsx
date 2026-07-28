"use client";

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Phone } from "lucide-react";
import { finalCtaSection, footerSection } from "@/lib/content";
import { CLINIC_PHONE, getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="section-container px-5 py-12 md:px-8 md:py-14 lg:px-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
          <div>
            <h2 className="heading-footer max-w-xl">
              {finalCtaSection.title}
            </h2>
            <p className="text-footer-body mt-4 max-w-lg">
              {finalCtaSection.subtitle}
            </p>
            <div className="mt-8">
              <WhatsAppButton
                messageKey="final-cta"
                size="lg"
                className="h-12 gap-2 rounded-md px-6 text-sm shadow-md shadow-gold-600/20"
              >
                {finalCtaSection.cta}
                <CalendarDays className="size-4" />
              </WhatsAppButton>
            </div>
          </div>

          <div className="border-t border-white/12 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <Link
              href="#"
              className="relative block h-10 w-[140px] overflow-hidden md:h-11 md:w-[152px]"
              aria-label="ProLife Desenvolvimento Humano"
            >
              <Image
                src="/images/logo-prolife-footer.png"
                alt="ProLife Desenvolvimento Humano"
                fill
                quality={100}
                sizes="(max-width: 768px) 280px, 304px"
                className="object-contain object-left"
              />
            </Link>

            <div className="text-body-sm mt-6 space-y-1.5 text-white/72">
              <p>Rua José Evaristo Fogaça, 73</p>
              <p>Vila Moema – Tubarão/SC</p>
            </div>

            <p className="mt-4">
              <Link
                href={getWhatsAppUrl("default")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm inline-flex items-center gap-2.5 text-white/80 transition-colors hover:text-gold-400"
              >
                <Phone className="size-4 shrink-0 text-gold-400" />
                {CLINIC_PHONE}
              </Link>
            </p>
          </div>
        </div>

        <div className="text-caption mt-10 border-t border-white/10 pt-6 text-center text-white/40 md:text-left">
          <p>{footerSection.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
