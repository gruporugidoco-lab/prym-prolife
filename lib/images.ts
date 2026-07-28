export const images = {
  hero: "/images/hero.png",
  idosoCasal: "/images/idoso-casal.jpg",
  psicoterapia: "/images/psicoterapia.png",
  massoterapia: "/images/massoterapia.png",
  yoga: "/images/yoga.png",
  menteAtiva: "/images/mente-ativa.png",
  acompanhamento: "/images/acompanhamento-emocional.png",
  equipe: "/images/equipe.jpg",
  depoimento1: "/images/depoimento1.jpg",
  depoimento2: "/images/depoimento2.jpg",
  clinica1: "/images/clinica-1.png",
  clinica2: "/images/clinica-2.png",
  clinica3: "/images/clinica-3.png",
  clinica4: "/images/atividades-em-grupo.png",
  clinica5: "/images/equipe-multidisciplinar.png",
  clinica6: "/images/clinica-6.png",
  pillarsDiagram: "/images/pilares-prym1.png",
  logo: "/images/logo-prolife.png",
} as const;

export type ImageKey = keyof typeof images;
