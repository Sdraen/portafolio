import type { Metadata } from "next"

export const locales = ["es", "en", "pt", "fr"] as const
export const projectSlugs = ["industrial-commerce", "sistema-avicola-ieci"] as const

export type Locale = (typeof locales)[number]
export type ProjectSlug = "industrial-commerce" | "sistema-avicola-ieci"

export const languageNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  fr: "Français",
}

export const htmlLanguages: Record<Locale, string> = {
  es: "es-CL",
  en: "en",
  pt: "pt-BR",
  fr: "fr-CA",
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function isProjectSlug(value: string): value is ProjectSlug {
  return projectSlugs.includes(value as ProjectSlug)
}

export function localizedPath(locale: Locale, path = ""): string {
  const cleanPath = path.replace(/^\/+|\/+$/g, "")
  const prefix = locale === "es" ? "" : locale
  const segments = [prefix, cleanPath].filter(Boolean).join("/")
  return segments ? `/${segments}/` : "/"
}

export function homeSectionHref(locale: Locale, section: string): string {
  return `${localizedPath(locale)}#${section}`
}

export function caseStudyHref(locale: Locale, slug: ProjectSlug): string {
  return localizedPath(locale, `proyectos/${slug}`)
}

export function homeMetadata(locale: Exclude<Locale, "es">): Metadata {
  const seo = seoCopy[locale]
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: { canonical: localizedPath(locale), languages: languageAlternates() },
    openGraph: {
      type: "website",
      locale: seo.locale,
      url: localizedPath(locale),
      siteName: "Andrés Torres",
      title: seo.title,
      description: seo.ogDescription,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: seo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.ogDescription,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: seo.title }],
    },
  }
}

type SelectOption = { value: string; label: string }

export type ContactFormCopy = {
  heading: string
  reply: string
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  reason: string
  reasonPlaceholder: string
  inquiryOptions: SelectOption[]
  company: string
  optional: string
  companyPlaceholder: string
  budget: string
  budgetPlaceholder: string
  budgetOptions: SelectOption[]
  timeline: string
  timelinePlaceholder: string
  timelineOptions: SelectOption[]
  message: string
  messagePlaceholder: string
  privacy: string
  send: string
  sending: string
  success: string
  error: string
  unavailable: string
  verification: string
  verificationHint: string
  verificationRequired: string
  verificationError: string
  subject: string
}

export type HomeProject = {
  number: string
  title: string
  label: string
  color: "cyan" | "lime" | "violet" | "orange"
  description: string
  tags: readonly string[]
  href: string
  action: string
  adminHref: string | null
  caseSlug: ProjectSlug | null
}

type HomeCopy = {
  languageLabel: string
  nav: {
    aria: string
    home: string
    about: string
    projects: string
    cv: string
    contact: string
    available: string
    openMenu: string
    closeMenu: string
  }
  hero: {
    kicker: string
    location: string
    aria: string
    line1: string
    line2: string
    emphasis: string
    introBefore: string
    introAfter: string
    explore: string
    downloadCv: string
    sticker: [string, string]
  }
  tickerAria: string
  about: {
    eyebrow: string
    title: string
    emphasis: string
    large: string
    largeEmphasis: string
    bio: string
    codeMindset: string
    codeFocus: string
    codeLearning: string
    codeStatus: string
    skills: Array<{ number: string; title: string; description: string }>
  }
  work: {
    eyebrow: string
    title: string
    emphasis: string
    github: string
    viewCase: string
    exploreAdmin: string
    publicDemo: string
    activeOperation: string
    projects: HomeProject[]
  }
  process: {
    eyebrow: string
    title: string
    connector: string
    emphasis: string
    items: Array<{ number: string; title: string; description: string; label: string }>
  }
  contact: {
    kicker: string
    title: string
    emphasis: string
    body: string
    email: string
    location: string
    form: ContactFormCopy
  }
}

export const homeCopy: Record<Locale, HomeCopy> = {
  es: {
    languageLabel: "Cambiar idioma",
    nav: {
      aria: "Navegación principal",
      home: "Ir al inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      cv: "CV",
      contact: "Contacto",
      available: "Disponible para oportunidades",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      kicker: "Portafolio / 2026",
      location: "Concepción, CL",
      aria: "Desarrollo ideas que se sienten vivas",
      line1: "Desarrollo ideas",
      line2: "que se sienten",
      emphasis: "vivas.",
      introBefore: "Soy",
      introAfter: "desarrollador full-stack. Creo productos web rápidos, útiles y con una identidad que no pasa desapercibida.",
      explore: "Explorar proyectos",
      downloadCv: "Descargar CV",
      sticker: ["HECHO CON", "CURIOSIDAD"],
    },
    tickerAria: "Tecnologías principales",
    about: {
      eyebrow: "01 / SOBRE MÍ",
      title: "Del problema a una experiencia",
      emphasis: "clara.",
      large: "Ingeniería, diseño y atención al detalle para construir software que",
      largeEmphasis: "resuelve de verdad.",
      bio: "Egresado de Ingeniería de Ejecución en Computación e Informática de la Universidad del Bío-Bío. Me especializo en aplicaciones web end-to-end, desde una interfaz pulida hasta APIs y despliegues confiables.",
      codeMindset: "curioso",
      codeFocus: "productos útiles",
      codeLearning: "siempre",
      codeStatus: "listo para construir",
      skills: [
        { number: "01", title: "Full-stack", description: "Interfaces, lógica, datos y despliegue conectados como un solo producto." },
        { number: "02", title: "UI con intención", description: "Diseño funcional, accesible y con movimiento que guía en lugar de distraer." },
        { number: "03", title: "Rendimiento", description: "Código mantenible y experiencias rápidas en cualquier dispositivo." },
      ],
    },
    work: {
      eyebrow: "02 / TRABAJO SELECCIONADO",
      title: "Proyectos con código,",
      emphasis: "contexto y propósito.",
      github: "Ver GitHub",
      viewCase: "Ver caso",
      exploreAdmin: "Explorar panel administrador",
      publicDemo: "Demo pública",
      activeOperation: "operación activa",
      projects: [
        { number: "01", title: "Industrial Commerce", label: "E-commerce full-stack", color: "cyan", description: "Plataforma demostrativa de comercio industrial con catálogo, cotizaciones, checkout y un panel administrativo explorable en modo de solo lectura.", tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app", action: "Visitar tienda", adminHref: "https://industrial-commerce-web.vercel.app/admin", caseSlug: "industrial-commerce" },
        { number: "02", title: "Sistema Avícola IECI", label: "Plataforma full-stack", color: "lime", description: "Plataforma full-stack desarrollada como proyecto de título para digitalizar la gestión de una operación avícola.", tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "Ver código", adminHref: null, caseSlug: "sistema-avicola-ieci" },
        { number: "03", title: "OpenCV App", label: "Visión computacional", color: "violet", description: "Aplicación móvil enfocada en procesamiento de imágenes y visión computacional usando OpenCV.", tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "Ver código", adminHref: null, caseSlug: null },
        { number: "04", title: "PERRINES UBB", label: "Web colaborativa", color: "orange", description: "Proyecto colaborativo universitario para organizar, gestionar y publicar contenido académico de forma simple.", tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "Ver código", adminHref: null, caseSlug: null },
      ],
    },
    process: {
      eyebrow: "03 / CÓMO TRABAJO",
      title: "Simple, colaborativo",
      connector: "y",
      emphasis: "sin humo.",
      items: [
        { number: "01", title: "Entender", description: "Primero aclaro el problema, el usuario y la señal concreta de éxito.", label: "DESCUBRIR" },
        { number: "02", title: "Diseñar", description: "Convierto requisitos en flujos, jerarquía visual y una dirección clara.", label: "DEFINIR" },
        { number: "03", title: "Construir", description: "Desarrollo, pruebo, optimizo y preparo una entrega que pueda evolucionar.", label: "ENTREGAR" },
      ],
    },
    contact: {
      kicker: "DISPONIBLE PARA OPORTUNIDADES FULL-STACK",
      title: "Hagamos algo",
      emphasis: "extraordinario.",
      body: "¿Tienes una oportunidad laboral, un proyecto de software o una idea que necesita tomar forma? Cuéntame el contexto y conversemos.",
      email: "Prefiero escribir por correo",
      location: "Concepción, Chile",
      form: {
        heading: "CUÉNTAME QUÉ NECESITAS", reply: "Responderé directamente a tu correo.", name: "Nombre", namePlaceholder: "Tu nombre", email: "Correo", emailPlaceholder: "tu@correo.cl", reason: "Motivo", reasonPlaceholder: "Selecciona una opción",
        inquiryOptions: [{ value: "job", label: "Oportunidad laboral" }, { value: "software", label: "Proyecto de software" }, { value: "collaboration", label: "Colaboración" }, { value: "other", label: "Otro" }],
        company: "Empresa", optional: "opcional", companyPlaceholder: "Empresa o equipo", budget: "Presupuesto estimado", budgetPlaceholder: "Selecciona un rango",
        budgetOptions: [{ value: "undefined", label: "Por definir" }, { value: "under-500k-clp", label: "Menos de $500.000 CLP" }, { value: "500k-1500k-clp", label: "$500.000–$1.500.000 CLP" }, { value: "over-1500k-clp", label: "Más de $1.500.000 CLP" }],
        timeline: "Plazo aproximado", timelinePlaceholder: "Selecciona un plazo", timelineOptions: [{ value: "flexible", label: "Flexible" }, { value: "under-month", label: "Menos de 1 mes" }, { value: "one-three-months", label: "1–3 meses" }, { value: "over-three-months", label: "Más de 3 meses" }],
        message: "Mensaje", messagePlaceholder: "Háblame del rol, proyecto o desafío…", privacy: "Tus datos se usarán únicamente para responder este contacto.", send: "Enviar mensaje", sending: "Enviando…", success: "Mensaje enviado. Te responderé pronto.", error: "No se pudo enviar. Intenta nuevamente o escríbeme por correo.", unavailable: "El formulario todavía no está configurado.", verification: "Verificación anti-spam", verificationHint: "Protegido por Cloudflare", verificationRequired: "Completa la verificación anti-spam antes de enviar.", verificationError: "La verificación venció o falló. Inténtalo nuevamente.", subject: "Nuevo contacto desde andrestorres.cl",
      },
    },
  },
  en: {
    languageLabel: "Change language",
    nav: { aria: "Main navigation", home: "Go to homepage", about: "About", projects: "Projects", cv: "CV", contact: "Contact", available: "Available for opportunities", openMenu: "Open menu", closeMenu: "Close menu" },
    hero: { kicker: "Portfolio / 2026", location: "Concepción, CL", aria: "I build ideas that feel alive", line1: "I build ideas", line2: "that feel", emphasis: "alive.", introBefore: "I'm", introAfter: "a full-stack developer. I create fast, useful web products with an identity that stands out.", explore: "Explore projects", downloadCv: "Download CV", sticker: ["BUILT WITH", "CURIOSITY"] },
    tickerAria: "Core technologies",
    about: {
      eyebrow: "01 / ABOUT ME", title: "From a problem to a", emphasis: "clear experience.", large: "Engineering, design and attention to detail to build software that", largeEmphasis: "solves real problems.",
      bio: "Graduate in Computer Engineering from Universidad del Bío-Bío. I specialize in end-to-end web applications, from polished interfaces to APIs and reliable deployments.", codeMindset: "curious", codeFocus: "useful products", codeLearning: "always", codeStatus: "ready to build",
      skills: [{ number: "01", title: "Full-stack", description: "Interfaces, logic, data and deployment connected as one product." }, { number: "02", title: "Purposeful UI", description: "Functional, accessible design with motion that guides instead of distracting." }, { number: "03", title: "Performance", description: "Maintainable code and fast experiences on every device." }],
    },
    work: {
      eyebrow: "02 / SELECTED WORK", title: "Projects with code,", emphasis: "context and purpose.", github: "View GitHub", viewCase: "View case study", exploreAdmin: "Explore admin dashboard", publicDemo: "Public demo", activeOperation: "active operation",
      projects: [
        { number: "01", title: "Industrial Commerce", label: "Full-stack e-commerce", color: "cyan", description: "Industrial commerce demo with a catalog, quotes, checkout and a read-only admin dashboard open for exploration.", tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app", action: "Visit store", adminHref: "https://industrial-commerce-web.vercel.app/admin", caseSlug: "industrial-commerce" },
        { number: "02", title: "Sistema Avícola IECI", label: "Full-stack platform", color: "lime", description: "Full-stack degree project built to digitize the management of a real poultry operation.", tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "View code", adminHref: null, caseSlug: "sistema-avicola-ieci" },
        { number: "03", title: "OpenCV App", label: "Computer vision", color: "violet", description: "Mobile application focused on image processing and computer vision with OpenCV.", tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "View code", adminHref: null, caseSlug: null },
        { number: "04", title: "PERRINES UBB", label: "Collaborative web", color: "orange", description: "Collaborative university project for organizing, managing and publishing academic content simply.", tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "View code", adminHref: null, caseSlug: null },
      ],
    },
    process: { eyebrow: "03 / HOW I WORK", title: "Simple, collaborative", connector: "and", emphasis: "straightforward.", items: [{ number: "01", title: "Understand", description: "First I clarify the problem, the user and the concrete signal of success.", label: "DISCOVER" }, { number: "02", title: "Design", description: "I turn requirements into flows, visual hierarchy and a clear direction.", label: "DEFINE" }, { number: "03", title: "Build", description: "I develop, test, optimize and prepare a delivery that can evolve.", label: "DELIVER" }] },
    contact: {
      kicker: "AVAILABLE FOR FULL-STACK OPPORTUNITIES", title: "Let's build something", emphasis: "extraordinary.", body: "Do you have a job opportunity, a software project or an idea that needs to take shape? Share the context and let's talk.", email: "I prefer email", location: "Concepción, Chile",
      form: {
        heading: "TELL ME WHAT YOU NEED", reply: "I'll reply directly to your email.", name: "Name", namePlaceholder: "Your name", email: "Email", emailPlaceholder: "you@email.com", reason: "Reason", reasonPlaceholder: "Choose an option",
        inquiryOptions: [{ value: "job", label: "Job opportunity" }, { value: "software", label: "Software project" }, { value: "collaboration", label: "Collaboration" }, { value: "other", label: "Other" }], company: "Company", optional: "optional", companyPlaceholder: "Company or team", budget: "Estimated budget", budgetPlaceholder: "Choose a range",
        budgetOptions: [{ value: "undefined", label: "To be defined" }, { value: "under-500k-clp", label: "Under CLP 500,000" }, { value: "500k-1500k-clp", label: "CLP 500,000–1,500,000" }, { value: "over-1500k-clp", label: "Over CLP 1,500,000" }], timeline: "Approximate timeline", timelinePlaceholder: "Choose a timeline", timelineOptions: [{ value: "flexible", label: "Flexible" }, { value: "under-month", label: "Under 1 month" }, { value: "one-three-months", label: "1–3 months" }, { value: "over-three-months", label: "Over 3 months" }], message: "Message", messagePlaceholder: "Tell me about the role, project or challenge…", privacy: "Your data will only be used to reply to this message.", send: "Send message", sending: "Sending…", success: "Message sent. I'll get back to you soon.", error: "The message could not be sent. Try again or email me directly.", unavailable: "The form is not configured yet.", verification: "Anti-spam verification", verificationHint: "Protected by Cloudflare", verificationRequired: "Complete the anti-spam verification before sending.", verificationError: "The verification expired or failed. Please try again.", subject: "New contact from andrestorres.cl",
      },
    },
  },
  pt: {
    languageLabel: "Mudar idioma",
    nav: { aria: "Navegação principal", home: "Ir para o início", about: "Sobre mim", projects: "Projetos", cv: "CV", contact: "Contato", available: "Disponível para oportunidades", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
    hero: { kicker: "Portfólio / 2026", location: "Concepción, CL", aria: "Desenvolvo ideias que ganham vida", line1: "Desenvolvo ideias", line2: "que ganham", emphasis: "vida.", introBefore: "Sou", introAfter: "desenvolvedor full-stack. Crio produtos web rápidos, úteis e com uma identidade que se destaca.", explore: "Explorar projetos", downloadCv: "Baixar CV (EN)", sticker: ["FEITO COM", "CURIOSIDADE"] },
    tickerAria: "Principais tecnologias",
    about: {
      eyebrow: "01 / SOBRE MIM", title: "Do problema a uma experiência", emphasis: "clara.", large: "Engenharia, design e atenção aos detalhes para criar software que", largeEmphasis: "resolve de verdade.", bio: "Formado em Engenharia de Computação pela Universidad del Bío-Bío. Sou especializado em aplicações web end-to-end, de interfaces bem acabadas a APIs e implantações confiáveis.", codeMindset: "curioso", codeFocus: "produtos úteis", codeLearning: "sempre", codeStatus: "pronto para construir",
      skills: [{ number: "01", title: "Full-stack", description: "Interfaces, lógica, dados e implantação conectados como um único produto." }, { number: "02", title: "UI com propósito", description: "Design funcional e acessível, com movimento que orienta sem distrair." }, { number: "03", title: "Desempenho", description: "Código sustentável e experiências rápidas em qualquer dispositivo." }],
    },
    work: {
      eyebrow: "02 / TRABALHOS SELECIONADOS", title: "Projetos com código,", emphasis: "contexto e propósito.", github: "Ver GitHub", viewCase: "Ver estudo de caso", exploreAdmin: "Explorar painel administrativo", publicDemo: "Demo pública", activeOperation: "operação ativa",
      projects: [
        { number: "01", title: "Industrial Commerce", label: "E-commerce full-stack", color: "cyan", description: "Demonstração de comércio industrial com catálogo, cotações, checkout e painel administrativo em modo somente leitura.", tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app", action: "Visitar loja", adminHref: "https://industrial-commerce-web.vercel.app/admin", caseSlug: "industrial-commerce" },
        { number: "02", title: "Sistema Avícola IECI", label: "Plataforma full-stack", color: "lime", description: "Plataforma full-stack desenvolvida como projeto de graduação para digitalizar a gestão de uma operação avícola real.", tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "Ver código", adminHref: null, caseSlug: "sistema-avicola-ieci" },
        { number: "03", title: "OpenCV App", label: "Visão computacional", color: "violet", description: "Aplicativo móvel focado em processamento de imagens e visão computacional com OpenCV.", tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "Ver código", adminHref: null, caseSlug: null },
        { number: "04", title: "PERRINES UBB", label: "Web colaborativa", color: "orange", description: "Projeto universitário colaborativo para organizar, gerenciar e publicar conteúdo acadêmico de forma simples.", tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "Ver código", adminHref: null, caseSlug: null },
      ],
    },
    process: { eyebrow: "03 / COMO TRABALHO", title: "Simples, colaborativo", connector: "e", emphasis: "sem enrolação.", items: [{ number: "01", title: "Entender", description: "Primeiro esclareço o problema, o usuário e o sinal concreto de sucesso.", label: "DESCOBRIR" }, { number: "02", title: "Projetar", description: "Transformo requisitos em fluxos, hierarquia visual e uma direção clara.", label: "DEFINIR" }, { number: "03", title: "Construir", description: "Desenvolvo, testo, otimizo e preparo uma entrega que possa evoluir.", label: "ENTREGAR" }] },
    contact: {
      kicker: "DISPONÍVEL PARA OPORTUNIDADES FULL-STACK", title: "Vamos criar algo", emphasis: "extraordinário.", body: "Você tem uma oportunidade de trabalho, um projeto de software ou uma ideia que precisa ganhar forma? Conte o contexto e vamos conversar.", email: "Prefiro escrever por e-mail", location: "Concepción, Chile",
      form: {
        heading: "CONTE O QUE VOCÊ PRECISA", reply: "Responderei diretamente ao seu e-mail.", name: "Nome", namePlaceholder: "Seu nome", email: "E-mail", emailPlaceholder: "voce@email.com", reason: "Motivo", reasonPlaceholder: "Selecione uma opção", inquiryOptions: [{ value: "job", label: "Oportunidade de trabalho" }, { value: "software", label: "Projeto de software" }, { value: "collaboration", label: "Colaboração" }, { value: "other", label: "Outro" }], company: "Empresa", optional: "opcional", companyPlaceholder: "Empresa ou equipe", budget: "Orçamento estimado", budgetPlaceholder: "Selecione uma faixa", budgetOptions: [{ value: "undefined", label: "A definir" }, { value: "under-500k-clp", label: "Menos de CLP 500.000" }, { value: "500k-1500k-clp", label: "CLP 500.000–1.500.000" }, { value: "over-1500k-clp", label: "Mais de CLP 1.500.000" }], timeline: "Prazo aproximado", timelinePlaceholder: "Selecione um prazo", timelineOptions: [{ value: "flexible", label: "Flexível" }, { value: "under-month", label: "Menos de 1 mês" }, { value: "one-three-months", label: "1–3 meses" }, { value: "over-three-months", label: "Mais de 3 meses" }], message: "Mensagem", messagePlaceholder: "Conte sobre a vaga, o projeto ou o desafio…", privacy: "Seus dados serão usados apenas para responder a este contato.", send: "Enviar mensagem", sending: "Enviando…", success: "Mensagem enviada. Responderei em breve.", error: "Não foi possível enviar. Tente novamente ou escreva por e-mail.", unavailable: "O formulário ainda não está configurado.", verification: "Verificação antispam", verificationHint: "Protegido pela Cloudflare", verificationRequired: "Conclua a verificação antispam antes de enviar.", verificationError: "A verificação expirou ou falhou. Tente novamente.", subject: "Novo contato de andrestorres.cl",
      },
    },
  },
  fr: {
    languageLabel: "Changer de langue",
    nav: { aria: "Navigation principale", home: "Aller à l'accueil", about: "À propos", projects: "Projets", cv: "CV", contact: "Contact", available: "Disponible pour des opportunités", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
    hero: { kicker: "Portfolio / 2026", location: "Concepción, CL", aria: "Je développe des idées qui prennent vie", line1: "Je développe", line2: "des idées qui prennent", emphasis: "vie.", introBefore: "Je suis", introAfter: "développeur full-stack. Je crée des produits web rapides, utiles et dotés d'une identité qui se démarque.", explore: "Voir les projets", downloadCv: "Télécharger le CV (EN)", sticker: ["CRÉÉ AVEC", "CURIOSITÉ"] },
    tickerAria: "Technologies principales",
    about: {
      eyebrow: "01 / À PROPOS", title: "Du problème à une expérience", emphasis: "claire.", large: "Ingénierie, design et souci du détail pour créer des logiciels qui", largeEmphasis: "résolvent de vrais problèmes.", bio: "Diplômé en génie informatique de l'Universidad del Bío-Bío. Je me spécialise dans les applications web de bout en bout, des interfaces soignées aux API et aux déploiements fiables.", codeMindset: "curieux", codeFocus: "produits utiles", codeLearning: "toujours", codeStatus: "prêt à construire",
      skills: [{ number: "01", title: "Full-stack", description: "Interfaces, logique, données et déploiement reliés en un seul produit." }, { number: "02", title: "UI intentionnelle", description: "Un design fonctionnel et accessible, avec des mouvements qui guident sans distraire." }, { number: "03", title: "Performance", description: "Un code maintenable et des expériences rapides sur tous les appareils." }],
    },
    work: {
      eyebrow: "02 / PROJETS SÉLECTIONNÉS", title: "Des projets avec du code,", emphasis: "du contexte et un objectif.", github: "Voir GitHub", viewCase: "Voir l'étude de cas", exploreAdmin: "Explorer le tableau d'administration", publicDemo: "Démo publique", activeOperation: "opération active",
      projects: [
        { number: "01", title: "Industrial Commerce", label: "E-commerce full-stack", color: "cyan", description: "Démonstration de commerce industriel avec catalogue, demandes de devis, paiement et tableau d'administration en lecture seule.", tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app", action: "Visiter la boutique", adminHref: "https://industrial-commerce-web.vercel.app/admin", caseSlug: "industrial-commerce" },
        { number: "02", title: "Sistema Avícola IECI", label: "Plateforme full-stack", color: "lime", description: "Plateforme full-stack développée comme projet de fin d'études pour numériser la gestion d'une exploitation avicole réelle.", tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "Voir le code", adminHref: null, caseSlug: "sistema-avicola-ieci" },
        { number: "03", title: "OpenCV App", label: "Vision par ordinateur", color: "violet", description: "Application mobile axée sur le traitement d'images et la vision par ordinateur avec OpenCV.", tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "Voir le code", adminHref: null, caseSlug: null },
        { number: "04", title: "PERRINES UBB", label: "Web collaboratif", color: "orange", description: "Projet universitaire collaboratif pour organiser, gérer et publier simplement du contenu académique.", tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "Voir le code", adminHref: null, caseSlug: null },
      ],
    },
    process: { eyebrow: "03 / MA FAÇON DE TRAVAILLER", title: "Simple, collaboratif", connector: "et", emphasis: "sans détour.", items: [{ number: "01", title: "Comprendre", description: "Je clarifie d'abord le problème, l'utilisateur et le signal concret de réussite.", label: "DÉCOUVRIR" }, { number: "02", title: "Concevoir", description: "Je transforme les exigences en parcours, hiérarchie visuelle et direction claire.", label: "DÉFINIR" }, { number: "03", title: "Construire", description: "Je développe, teste, optimise et prépare une livraison capable d'évoluer.", label: "LIVRER" }] },
    contact: {
      kicker: "DISPONIBLE POUR DES OPPORTUNITÉS FULL-STACK", title: "Créons quelque chose", emphasis: "d'extraordinaire.", body: "Vous avez une opportunité d'emploi, un projet logiciel ou une idée à concrétiser? Expliquez-moi le contexte et discutons-en.", email: "Je préfère écrire par courriel", location: "Concepción, Chili",
      form: {
        heading: "DITES-MOI CE QU'IL VOUS FAUT", reply: "Je répondrai directement à votre courriel.", name: "Nom", namePlaceholder: "Votre nom", email: "Courriel", emailPlaceholder: "vous@courriel.com", reason: "Objet", reasonPlaceholder: "Choisissez une option", inquiryOptions: [{ value: "job", label: "Opportunité d'emploi" }, { value: "software", label: "Projet logiciel" }, { value: "collaboration", label: "Collaboration" }, { value: "other", label: "Autre" }], company: "Entreprise", optional: "facultatif", companyPlaceholder: "Entreprise ou équipe", budget: "Budget estimé", budgetPlaceholder: "Choisissez une fourchette", budgetOptions: [{ value: "undefined", label: "À définir" }, { value: "under-500k-clp", label: "Moins de 500 000 CLP" }, { value: "500k-1500k-clp", label: "500 000–1 500 000 CLP" }, { value: "over-1500k-clp", label: "Plus de 1 500 000 CLP" }], timeline: "Délai approximatif", timelinePlaceholder: "Choisissez un délai", timelineOptions: [{ value: "flexible", label: "Flexible" }, { value: "under-month", label: "Moins d'un mois" }, { value: "one-three-months", label: "1–3 mois" }, { value: "over-three-months", label: "Plus de 3 mois" }], message: "Message", messagePlaceholder: "Parlez-moi du poste, du projet ou du défi…", privacy: "Vos données seront utilisées uniquement pour répondre à ce message.", send: "Envoyer", sending: "Envoi…", success: "Message envoyé. Je vous répondrai bientôt.", error: "Le message n'a pas pu être envoyé. Réessayez ou écrivez-moi par courriel.", unavailable: "Le formulaire n'est pas encore configuré.", verification: "Vérification anti-spam", verificationHint: "Protégé par Cloudflare", verificationRequired: "Effectuez la vérification anti-spam avant l'envoi.", verificationError: "La vérification a expiré ou échoué. Réessayez.", subject: "Nouveau contact depuis andrestorres.cl",
      },
    },
  },
}

export const seoCopy: Record<Locale, { title: string; description: string; ogDescription: string; locale: string }> = {
  es: { title: "Andrés Torres | Desarrollador Full-Stack en Chile", description: "Portafolio de Andrés Torres, desarrollador full-stack en Chile. Proyectos web con React, Next.js, TypeScript, Node.js y PostgreSQL.", ogDescription: "Aplicaciones web end-to-end: interfaces, APIs, datos y despliegue.", locale: "es_CL" },
  en: { title: "Andrés Torres | Full-Stack Developer in Chile", description: "Portfolio of Andrés Torres, a full-stack developer in Chile building web products with React, Next.js, TypeScript, Node.js and PostgreSQL.", ogDescription: "End-to-end web applications: interfaces, APIs, data and deployment.", locale: "en_US" },
  pt: { title: "Andrés Torres | Desenvolvedor Full-Stack no Chile", description: "Portfólio de Andrés Torres, desenvolvedor full-stack no Chile. Projetos web com React, Next.js, TypeScript, Node.js e PostgreSQL.", ogDescription: "Aplicações web end-to-end: interfaces, APIs, dados e implantação.", locale: "pt_BR" },
  fr: { title: "Andrés Torres | Développeur Full-Stack au Chili", description: "Portfolio d'Andrés Torres, développeur full-stack au Chili. Projets web avec React, Next.js, TypeScript, Node.js et PostgreSQL.", ogDescription: "Applications web de bout en bout : interfaces, API, données et déploiement.", locale: "fr_CA" },
}

export function languageAlternates(path = "") {
  return {
    "es-CL": localizedPath("es", path),
    en: localizedPath("en", path),
    "pt-BR": localizedPath("pt", path),
    "fr-CA": localizedPath("fr", path),
    "x-default": localizedPath("es", path),
  }
}
