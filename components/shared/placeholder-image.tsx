"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
}

export function PlaceholderImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  fill = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 85,
}: PlaceholderImageProps) {
  const imageProps = fill
    ? { fill: true as const, sizes }
    : { width: width ?? 800, height: height ?? 600 };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-cream-100",
        fill && "h-full w-full",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        priority={priority}
        quality={quality}
        className={cn(
          "object-cover transition-transform duration-700 hover:scale-[1.03]",
          fill ? "object-cover" : "h-full w-full",
          imageClassName
        )}
      />
    </div>
  );
}
