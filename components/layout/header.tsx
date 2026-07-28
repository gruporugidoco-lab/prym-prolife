"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navigation } from "@/lib/content";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="relative z-40 bg-[#faf6f3] py-4">
      <div className="section-container flex items-center justify-between px-5 md:px-8 lg:px-12">
        <Link
          href="#"
          className="group block transition-opacity hover:opacity-85"
          aria-label="ProLife Centro de Saúde da Mente"
        >
          <Image
            src="/images/logo-prolife.png"
            alt="ProLife Centro de Saúde da Mente"
            width={236}
            height={88}
            priority
            unoptimized
            className="h-12 w-auto object-contain object-left md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9375rem] font-semibold text-navy-900/70 transition-colors hover:text-gold-500 sm:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton messageKey="header" size="sm">
            <CalendarDays className="size-4" />
            Agende sua avaliação
          </WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          className="inline-flex size-11 items-center justify-center rounded-full border border-navy-900/10 bg-[#faf6f3] text-navy-900 transition-colors hover:border-gold-500/40 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-navy-900/5 bg-[#faf6f3] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-body rounded-xl px-4 py-3 font-medium text-navy-900/80 transition-colors hover:bg-navy-900/5 hover:text-gold-500"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 px-2">
                <WhatsAppButton
                  messageKey="header"
                  className="h-auto min-h-12 w-full whitespace-normal px-4 py-3"
                >
                  <CalendarDays className="size-4 shrink-0" />
                  Agende sua avaliação
                </WhatsAppButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
