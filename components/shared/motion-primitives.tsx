"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const offset = direction === "up" ? 20 : direction === "down" ? -20 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  eyebrowClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
  eyebrowClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-eyebrow mb-4 font-semibold tracking-[0.18em]",
            light ? "text-gold-400" : "text-gold-500",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "heading-section text-balance",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-lead mt-5 md:mt-6",
            light ? "text-white/75" : "text-navy-900/70",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
