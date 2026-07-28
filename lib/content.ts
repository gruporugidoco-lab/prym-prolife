export const siteConfig = {
  name: "PRYM 60+",
  clinic: "ProLife Centro de Saúde da Mente",
  tagline: "Mais tranquilidade, mais autonomia, mais qualidade de vida.",
  description:
    "Programa Integrado de Saúde Emocional, Memória e Qualidade de Vida para Idosos.",
  url: "https://prym60.prolife.com.br",
};

export const navigation = [
  { label: "O Programa", href: "#incluso" },
  { label: "Resultados", href: "#resultados" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "A ProLife", href: "#a-prolife" },
  { label: "Investimento", href: "#investimento" },
  { label: "Dúvidas", href: "#faq" },
];

export const hero = {
  eyebrow: "PROGRAMA PRYM 60+",
  title: "Você já tentou remédios e tratamentos, mas sente que nada resolve.",
  titleEmphasis:
    "Isso acontece porque você tratou apenas uma parte, e não o todo",
  subheadline:
    "O PRYM 60+ trata corpo, mente e emoções de forma integrada, para você ter mais qualidade de vida depois dos 60.",
  primaryCta: "Quero agendar uma avaliação gratuita",
  secondaryCta: "Conheça o programa ↓",
  ctaMicrocopy:
    "Avaliação presencial de 50 minutos, sem custo e sem compromisso.",
};

export const problemsSection = {
  eyebrow: "Por trás dos sintomas",
  title: "Um ciclo que se alimenta",
  items: [
    {
      title: "Perda de motivação",
      area: "Emoções",
      description: "Perdeu o gosto por coisas que antes davam prazer.",
    },
    {
      title: "Memória e atenção",
      area: "Mente",
      description: "Esquece nomes, compromissos, onde guardou as coisas.",
    },
    {
      title: "Falta de propósito",
      area: "Emoções",
      description: "A sensação de que os dias não têm mais direção.",
    },
    {
      title: "Sono que não descansa",
      area: "Corpo",
      description: "Demora para dormir, acorda várias vezes, levanta cansado.",
    },
    {
      title: "Baixa autoestima",
      area: "Emoções",
      description: "Não se sentir mais tão útil ou capaz quanto antes.",
    },
    {
      title: "Mobilidade reduzida",
      area: "Corpo",
      description: "Dores, menos energia e mais dificuldade para se mover.",
    },
  ],
};

export const comparisonSection = {
  connectionNodes: [
    { label: "Emoções", area: "Emoções" as const },
    { label: "Corpo", area: "Corpo" as const },
    { label: "Mente", area: "Mente" as const },
  ],
  descriptionLine1:
    "A ansiedade que tira o sono também cansa o corpo,",
  descriptionLine2:
    "o corpo cansado também pesa na mente e isso gera mais ansiedade.",
  eyebrowLine1: "Por isso o PRYM cuida de emoções, corpo e mente",
  eyebrowLine2: "ao mesmo tempo",
  consequenceLine1:
    "Cuidar de um sintoma e deixar os outros de lado quase nunca resolve.",
  consequenceLine2:
    "Veja a diferença entre o tratamento convencional e o PRYM.",
  traditional: {
    title: "Tratamento Convencional",
    items: [
      "Consulta isolada",
      "Um profissional",
      "Foco no sintoma",
      "Uma frente por vez",
      "Sem atividades",
      "Sem medida de evolução",
    ],
  },
  prym: {
    title: "PRYM 60+",
    items: [
      "Programa de 3 meses",
      "Equipe multidisciplinar",
      "Emoções, corpo e mente",
      "2 sessões por semana",
      "Oficinas e estímulos",
      "Avaliações de progresso",
    ],
  },
};

export const includedSection = {
  eyebrow: "O que está incluso",
  title: "Cinco especialidades - Um plano de 3 meses",
  subtitle:
    "Duas sessões por semana, montadas a partir da sua avaliação — não um pacote genérico.",
  featuredService: {
    title: "Acompanhamento emocional",
    eyebrow: "Emoções",
    description:
      "Psicoterapia para fortalecer as emoções, a autoestima e o sentido dos seus dias.",
    imageKey: "acompanhamento" as const,
  },
  services: [
    {
      id: "massoterapia",
      title: "Massoterapia Terapêutica",
      description: "Alívio das tensões musculares e do estresse acumulado.",
      eyebrow: "Corpo",
      imageKey: "massoterapia" as const,
    },
    {
      id: "yoga",
      title: "Yoga adaptada",
      description:
        "Movimentos seguros para equilíbrio, flexibilidade e respiração.",
      eyebrow: "Corpo",
      imageKey: "yoga" as const,
    },
    {
      id: "mente-ativa",
      title: "Oficina Mente Ativa",
      description: "Jogos e dinâmicas que estimulam raciocínio e criatividade.",
      eyebrow: "Mente",
      imageKey: "menteAtiva" as const,
    },
    {
      id: "neuropsicopedagogia",
      title: "Neuropsicopedagogia",
      description: "Exercícios para memória, atenção e concentração.",
      eyebrow: "Mente",
      imageKey: "psicoterapia" as const,
    },
  ],
  pillars: [
    "Mente equilibrada",
    "Corpo ativo",
    "Emoções saudáveis",
    "Qualidade do sono",
    "Convivência e conexão",
    "Propósito e motivação",
  ],
};

export const benefitsSection = {
  eyebrow: "Resultados",
  title: "O que muda no seu dia a dia.",
  subtitle:
    "Os objetivos que o plano de cada participante persegue ao longo dos 3 meses.",
  items: [
    "Menos ansiedade no dia a dia",
    "Mais facilidade para lembrar e se concentrar",
    "Noites de sono mais tranquilas",
    "Mais disposição para sair de casa",
    "Voltar a se sentir capaz",
    "Menos dependência dos outros",
    "Mais convivência, menos isolamento",
    "Vontade de voltar a fazer planos",
  ],
};

export const howItWorksSection = {
  eyebrow: "Como funciona",
  title: "Do primeiro contato ao fim dos 3 meses",
  steps: [
    {
      step: "01",
      title: "Avaliação gratuita",
      description:
        "Presencial, 50 minutos, com especialista em terapia cognitivo-comportamental.",
    },
    {
      step: "02",
      title: "Plano personalizado",
      description: "Montado a partir da avaliação, com duração de 3 meses.",
    },
    {
      step: "03",
      title: "2 Sessões por semana",
      description:
        "Uma de acompanhamento emocional, outra de especialidade alternada.",
    },
    {
      step: "04",
      title: "Acompanhamento integrado",
      description:
        "Os profissionais se alinham com o que acontece em cada especialidade — um só olhar sobre o seu caso.",
    },
    {
      step: "05",
      title: "Avaliações de progresso",
      description: "Acompanhamento que mostra a sua evolução durante o programa.",
    },
  ],
};

export const midCtaSection = {
  title: "Você já tentou uma parte.",
  titleEmphasis: "Agora falta o conjunto.",
  subtitle: "O próximo passo é simples: avaliação presencial de 50 minutos,",
  subtitleLine2: "sem custo e sem compromisso.",
  cta: "Quero agendar minha avaliação gratuita",
  microcopy: "Você fala direto com a nossa equipe pelo WhatsApp.",
  quote: {
    text: "Ambiente muito aconchegante e limpo! Secretária agenda com rapidez a consulta e é muito atenciosa, psicólogos super profissionais! Nota mil para o espaço e o atendimento.",
    author: "Natalia Alves",
    source: "Avaliação no Google",
  },
};

export const differentialsSection = {
  eyebrow: "Diferenciais do PRYM 60+",
  title: "Por que famílias confiam no PRYM 60+.",
  subtitle:
    "Mais do que um programa — um compromisso com a dignidade, a autonomia e o bem-estar de quem você ama.",
  items: [
    {
      title: "Avaliação inicial",
      description:
        "Compreensão profunda das necessidades individuais antes de qualquer intervenção.",
    },
    {
      title: "Plano individual de acompanhamento",
      description:
        "Cuidado personalizado que respeita o ritmo e a história de cada pessoa.",
    },
    {
      title: "Equipe multidisciplinar especializada",
      description:
        "Profissionais integrados que olham para a pessoa — não apenas para o sintoma.",
    },
    {
      title: "Acompanhamento familiar",
      description:
        "Orientação e suporte para que a família caminhe junto nessa jornada.",
    },
    {
      title: "Ambiente seguro, acolhedor e humanizado",
      description:
        "Espaço pensado para transmitir confiança, conforto e respeito em cada encontro.",
    },
  ],
};

export const teamSection = {
  eyebrow: "Equipe multidisciplinar",
  title: "Profissionais dedicados ao cuidado integral do idoso.",
  subtitle:
    "Na ProLife, cada especialista contribui para um plano único — porque emoções, corpo e mente caminham juntos.",
  description:
    "Neuropsicopedagogia, massoterapia, yoga adaptada, oficinas cognitivas e acompanhamento emocional reunidos em uma equipe que conversa entre si e cuida de você com atenção genuína.",
};

export const testimonialsSection = {
  eyebrow: "Avaliações no Google",
  title: "O que dizem sobre a ProLife",
  items: [
    {
      quote:
        "Fui atendida pelo Jurandir, muito atencioso. Fazendo uma investigação mais detalhada, quando notou a necessidade. Além do tempo a mais dedicado a me explicar detalhadamente o diagnóstico.",
      author: "Karolina Zanelatto",
      source: "Avaliação no Google",
    },
    {
      quote:
        "Ótimos profissionais atendimento especializado, muito humanizado. Cliente com ótima recuperação.",
      author: "Diana Lima",
      source: "Avaliação no Google",
    },
    {
      quote:
        "Ótima opção para cuidar da sua saúde mental! Sou paciente há anos, e super recomendo!",
      author: "Kah Cardoso",
      source: "Avaliação no Google",
    },
    {
      quote:
        "Excelente atendimento, muito prestativos. Meu terapeuta João também é excelente e toda a equipe tem um atendimento humano!",
      author: "Kevin Gonçalves",
      source: "Avaliação no Google",
    },
  ],
};

export const authoritySection = {
  eyebrow: "Nossa autoridade",
  title: "Conheça a ProLife",
  subtitle:
    "Centro de Saúde da Mente com ambiente seguro, acolhedor e humanizado.",
  stats: [
    { value: "15+", labelPrimary: "anos", labelAccent: "de clínica" },
    { value: "20+", labelPrimary: "profissionais", labelAccent: "na equipe" },
    { value: "55+", labelPrimary: "áreas", labelAccent: "de atuação" },
    { value: "4,9/5", labelPrimary: "nota", labelAccent: "no Google" },
  ],
  googleRating: {
    title: "Avaliação Google",
    score: "4,9/5",
    reviewCount: "60+",
    reviewLabel: "avaliações reais",
  },
  galleryLabels: [
    "Recepção que acolhe",
    "A equipe que vai te atender",
    "Sala de espera tranquila",
    "Consultório de psicoterapia",
    "Sala de avaliação",
    "Sala de massoterapia",
  ],
};

export const pricingSection = {
  eyebrow: "Investimento",
  title: "O programa dura 3 meses.",
  titleLine2: "O valor pode ser dividido em até 12 vezes.",
  highlightsLabel: "Do programa",
  highlights: [
    "3 meses de programa",
    "2 sessões por semana, de 50 minutos",
    "Cerca de 24 encontros com a equipe",
  ],
  specialtiesLabel: "Inclui",
  specialties: [
    "Psicoterapia",
    "Massoterapia terapêutica",
    "Yoga adaptada",
    "Neuropsicopedagogia",
    "Oficina Mente Ativa",
    "Avaliações de progresso",
    "Acompanhamento contínuo",
    "Plano personalizado",
  ],
  planLabel: "Plano Individual",
  planPrice: "12x de R$297,00",
  coupleNote:
    "Existe também o Plano Casal 60+, para quem quer fazer o programa junto.",
  cta: "Quero conhecer o investimento",
  microcopy:
    "A avaliação inicial é gratuita. As condições de pagamento você combina direto com a nossa equipe.",
};

export const faqSection = {
  eyebrow: "Dúvidas frequentes",
  title: "Tire suas dúvidas antes de agendar",
  items: [
    {
      question: "Preciso parar meus remédios ou a terapia que já faço?",
      answer:
        "Não. Nada do que você já faz precisa ser suspenso. Nossa equipe usa essas informações para montar um plano alinhado à sua realidade atual e acompanha os resultados ao longo do programa.",
    },
    {
      question: "Como é a avaliação inicial gratuita?",
      answer:
        "É presencial, dura cerca de 50 minutos e é conduzida por uma profissional especializada em terapia cognitivo-comportamental. Não tem custo e não compromete você com nada.",
    },
    {
      question: "Como funciona o programa e quanto tempo dura?",
      answer:
        "São 3 meses, com duas sessões de 50 minutos por semana. Uma delas é sempre de acompanhamento emocional. A outra é de uma especialidade diferente, que se alterna a cada semana entre massoterapia, yoga adaptada, oficina mente ativa e neuropsicopedagogia.",
    },
    {
      question: "Quem pode participar do programa?",
      answer:
        "Pessoas com mais de 60 anos que querem cuidar das emoções, do corpo e da mente — para prevenir, acompanhar ou recuperar autonomia e bem-estar.",
    },
    {
      question: "E se eu faltar a uma sessão?",
      answer:
        "A sessão é remarcada. Ninguém perde conteúdo do programa por causa de uma falta.",
    },
    {
      question: "Onde acontece o programa?",
      answer:
        "Na ProLife Centro de Saúde da Mente, na Rua José Evaristo Fogaça, 73, Vila Moema, em Tubarão. Todas as sessões são presenciais.",
    },
    {
      question: "E se meu pai ou minha mãe não quiser participar?",
      answer:
        "É comum. A avaliação inicial existe justamente para isso: uma conversa de 50 minutos, sem custo e sem compromisso, para a pessoa conhecer o espaço e a equipe antes de decidir qualquer coisa.",
    },
    {
      question: "Quanto custa?",
      answer:
        "O Plano Individual sai por 12x de R$ 297 e o Plano Casal 60+ por 12x de R$ 497, com opção de pagamento à vista. Fale com a nossa equipe pelo WhatsApp (48) 3052-2775 para ver qual condição funciona melhor para você.",
    },
  ],
};

export const finalCtaSection = {
  eyebrow: "Primeiro passo",
  title: "Você já tentou uma parte. Agora falta o conjunto.",
  subtitle:
    "Comece pela avaliação gratuita: 50 minutos, presencial, sem compromisso. Nossa equipe agenda o seu horário pelo WhatsApp.",
  cta: "Quero agendar minha avaliação gratuita",
};

export const footerSection = {
  description:
    "ProLife Centro de Saúde da Mente — cuidado integrado para emoções, corpo e mente.",
  copyright: `© ${new Date().getFullYear()} ProLife Centro de Saúde da Mente. Todos os direitos reservados.`,
};
