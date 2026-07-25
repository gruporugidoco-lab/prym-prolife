export const WHATSAPP_NUMBER = "554830522775";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export type WhatsAppMessageKey =
  | "default"
  | "hero-primary"
  | "hero-secondary"
  | "header"
  | "problems"
  | "comparison"
  | "included"
  | "benefits"
  | "how-it-works"
  | "mid-cta"
  | "differentials"
  | "team"
  | "testimonials"
  | "authority"
  | "pricing"
  | "faq"
  | "final-cta"
  | "floating";

const messages: Record<WhatsAppMessageKey, string> = {
  default:
    "Olá! Gostaria de agendar uma avaliação para conhecer o programa PRYM 60+.",
  "hero-primary":
    "Olá! Gostaria de agendar uma avaliação gratuita para o PRYM 60+.",
  "hero-secondary":
    "Olá! Gostaria de agendar uma avaliação inicial para o PRYM 60+.",
  header: "Olá! Gostaria de agendar uma avaliação para o PRYM 60+.",
  problems:
    "Olá! Reconheço esses desafios em minha família e quero saber mais sobre o PRYM 60+.",
  comparison:
    "Olá! Gostaria de entender como o PRYM 60+ se diferencia do tratamento convencional.",
  included:
    "Olá! Quero saber mais sobre o que está incluso no programa PRYM 60+.",
  benefits:
    "Olá! Tenho interesse nos benefícios do PRYM 60+ para minha qualidade de vida.",
  "how-it-works":
    "Olá! Gostaria de entender como funciona o acompanhamento do PRYM 60+.",
  "mid-cta":
    "Olá! Quero agendar a avaliação gratuita do PRYM 60+.",
  differentials:
    "Olá! Quero conhecer os diferenciais do PRYM 60+ da ProLife.",
  team: "Olá! Gostaria de saber mais sobre a equipe multidisciplinar do PRYM 60+.",
  testimonials:
    "Olá! Vi os depoimentos e quero saber se o PRYM 60+ é indicado para mim.",
  authority:
    "Olá! Gostaria de agendar uma visita para conhecer a ProLife e o PRYM 60+.",
  pricing:
    "Olá! Gostaria de saber as condições de pagamento do PRYM 60+ e agendar a avaliação gratuita.",
  faq: "Olá! Tenho dúvidas sobre o PRYM 60+ e gostaria de conversar com a equipe.",
  "final-cta":
    "Olá! Quero dar o primeiro passo e agendar minha avaliação para o PRYM 60+.",
  floating: "Olá! Gostaria de falar com a equipe sobre o PRYM 60+.",
};

export function getWhatsAppUrl(key: WhatsAppMessageKey = "default"): string {
  const text = encodeURIComponent(messages[key]);
  return `${WHATSAPP_BASE_URL}?text=${text}`;
}

export const CLINIC_PHONE = "(48) 3052-2775";
export const CLINIC_ADDRESS =
  "Rua José Evaristo Fogaça, 73, Vila Moema – Tubarão/SC";
