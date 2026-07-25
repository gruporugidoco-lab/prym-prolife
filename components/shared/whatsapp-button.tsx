import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, type WhatsAppMessageKey } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  messageKey?: WhatsAppMessageKey;
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "ghost" | "navy" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function WhatsAppButton({
  messageKey = "default",
  children,
  variant = "default",
  size = "default",
  className,
}: WhatsAppButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={cn(className)}>
      <Link
        href={getWhatsAppUrl(messageKey)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    </Button>
  );
}
