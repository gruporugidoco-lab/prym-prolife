import Image from "next/image";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

export function PillarsDiagram({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[593/497] w-full bg-cream-50",
        className,
      )}
    >
      <Image
        src={images.pillarsDiagram}
        alt="Pilares do PRYM 60+"
        fill
        sizes="(max-width: 1024px) 440px, 480px"
        className="object-contain"
        priority={false}
      />
    </div>
  );
}
