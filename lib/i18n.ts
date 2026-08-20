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
      available: "Disponible para proyectos y roles",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      kicker: "Portafolio / 2026",
      location: "Concepción, CL",
      aria: "Construyo software para procesos reales",
      line1: "Software para",
      line2: "procesos",
      emphasis: "reales.",
      introBefore: "Soy",
      introAfter: "desarrollador full-stack de Concepción. Diseño aplicaciones web que ordenan procesos, conectan datos y reducen trabajo manual.",
      explore: "Explorar proyectos",
      downloadCv: "Descargar CV",
      sticker: ["HECHO EN", "CONCEPCIÓN"],
    },
    tickerAria: "Tecnologías principales",
    about: {
      eyebrow: "01 / SOBRE MÍ",
      title: "Software con contexto",
      emphasis: "operativo.",
      large: "Construyo software a partir del trabajo real:",
      largeEmphasis: "personas, datos y decisiones.",
      bio: "Soy egresado de Ingeniería de Ejecución en Computación e Informática de la Universidad del Bío-Bío y vivo en Concepción. Mi experiencia se ha formado construyendo sistemas completos: desde el levantamiento de requisitos y el modelado de procesos hasta la interfaz, la API, los datos y el despliegue.",
      codeMindset: "analítico",
      codeFocus: "procesos reales",
      codeLearning: "continuo",
      codeStatus: "disponible para aportar",
      skills: [
        { number: "01", title: "Producto completo", description: "Conecto interfaz, lógica, datos y despliegue para que el sistema funcione como una unidad." },
        { number: "02", title: "Procesos y datos", description: "Modelo flujos, permisos y validaciones a partir de cómo trabaja realmente cada organización." },
        { number: "03", title: "Entrega responsable", description: "Priorizo código claro, rendimiento y decisiones técnicas que otro equipo pueda mantener." },
      ],
    },
    work: {
      eyebrow: "02 / TRABAJO SELECCIONADO",
      title: "Proyectos con contexto,",
      emphasis: "decisiones y ejecución.",
      github: "Ver GitHub",
      viewCase: "Ver caso",
      exploreAdmin: "Explorar panel administrador",
      publicDemo: "Demo pública",
      activeOperation: "operación activa",
      projects: [
        { number: "01", title: "Industrial Commerce", label: "E-commerce full-stack", color: "cyan", description: "Caso demostrativo de comercio industrial con catálogo, compra, cotizaciones y un panel administrativo público en modo de solo lectura.", tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app", action: "Visitar tienda", adminHref: "https://industrial-commerce-web.vercel.app/admin", caseSlug: "industrial-commerce" },
        { number: "02", title: "Sistema Avícola IECI", label: "Plataforma de gestión", color: "lime", description: "Proyecto de título construido a partir de una operación avícola real para centralizar inventario, ventas, sanidad y reportes.", tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "Ver código", adminHref: null, caseSlug: "sistema-avicola-ieci" },
        { number: "03", title: "OpenCV App", label: "Aplicación móvil en desarrollo", color: "violet", description: "Proyecto móvil en desarrollo para trabajar con procesamiento de imágenes y visión computacional mediante OpenCV.", tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "Ver código", adminHref: null, caseSlug: null },
        { number: "04", title: "PERRINES UBB", label: "Proyecto universitario en equipo", color: "orange", description: "Experiencia colaborativa de desarrollo web enfocada en organizar y publicar contenido académico con una solución simple.", tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "Ver código", adminHref: null, caseSlug: null },
      ],
    },
    process: {
      eyebrow: "03 / CÓMO TRABAJO",
      title: "Trabajo con método",
      connector: "y",
      emphasis: "comunicación clara.",
      items: [
        { number: "01", title: "Entender", description: "Reviso el proceso actual, las personas involucradas y el resultado que se necesita mejorar.", label: "DIAGNOSTICAR" },
        { number: "02", title: "Definir", description: "Delimito alcance, datos, flujos y riesgos antes de comprometer una solución técnica.", label: "PLANIFICAR" },
        { number: "03", title: "Implementar", description: "Construyo por etapas, pruebo los flujos críticos y dejo una base preparada para mantenerse.", label: "ENTREGAR" },
      ],
    },
    contact: {
      kicker: "DISPONIBLE PARA ROLES Y PROYECTOS DE SOFTWARE",
      title: "Conversemos sobre",
      emphasis: "el problema.",
      body: "Si buscas un desarrollador o necesitas ordenar un proceso mediante software, envíame el objetivo, el estado actual y las principales restricciones. Te responderé personalmente con preguntas concretas y una evaluación honesta de cómo puedo aportar.",
      email: "Contactar directamente por correo",
      location: "Concepción, Chile",
      form: {
        heading: "CONTEXTO DEL TRABAJO", reply: "Responderé personalmente a tu correo.", name: "Nombre", namePlaceholder: "Tu nombre", email: "Correo", emailPlaceholder: "tu@correo.cl", reason: "Motivo", reasonPlaceholder: "Selecciona una opción",
        inquiryOptions: [{ value: "job", label: "Oportunidad laboral" }, { value: "software", label: "Proyecto de software" }, { value: "collaboration", label: "Colaboración" }, { value: "other", label: "Otro" }],
        company: "Empresa", optional: "opcional", companyPlaceholder: "Empresa o equipo", budget: "Presupuesto estimado", budgetPlaceholder: "Selecciona un rango",
        budgetOptions: [{ value: "undefined", label: "Por definir" }, { value: "under-500k-clp", label: "Menos de $500.000 CLP" }, { value: "500k-1500k-clp", label: "$500.000–$1.500.000 CLP" }, { value: "over-1500k-clp", label: "Más de $1.500.000 CLP" }],
        timeline: "Plazo aproximado", timelinePlaceholder: "Selecciona un plazo", timelineOptions: [{ value: "flexible", label: "Flexible" }, { value: "under-month", label: "Menos de 1 mes" }, { value: "one-three-months", label: "1–3 meses" }, { value: "over-three-months", label: "Más de 3 meses" }],
        message: "Mensaje", messagePlaceholder: "Describe el objetivo, el proceso actual y qué necesitas resolver…", privacy: "Tus datos se usarán únicamente para responder este contacto.", send: "Enviar contexto", sending: "Enviando…", success: "Mensaje recibido. Te responderé personalmente.", error: "No se pudo enviar. Intenta nuevamente o escríbeme por correo.", unavailable: "El formulario todavía no está configurado.", verification: "Verificación anti-spam", verificationHint: "Protegido por Cloudflare", verificationRequired: "Completa la verificación anti-spam antes de enviar.", verificationError: "La verificación venció o falló. Inténtalo nuevamente.", subject: "Nuevo contacto desde andrestorres.cl",
      },
    },
  },
  en: {
    languageLabel: "Change language",
    nav: { aria: "Main navigation", home: "Go to homepage", about: "About", projects: "Projects", cv: "CV", contact: "Contact", available: "Available for software roles and projects", openMenu: "Open menu", closeMenu: "Close menu" },
    hero: { kicker: "Portfolio / 2026", location: "Concepción, CL", aria: "I build software for real-world operations", line1: "I build software", line2: "for real-world", emphasis: "operations.", introBefore: "I'm", introAfter: "a full-stack developer based in Concepción. I design web applications that organize workflows, connect data and reduce manual work.", explore: "Explore projects", downloadCv: "Download CV", sticker: ["BUILT IN", "CONCEPCIÓN"] },
    tickerAria: "Core technologies",
    about: {
      eyebrow: "01 / ABOUT ME", title: "Software grounded in", emphasis: "operations.", large: "I build software around the work itself:", largeEmphasis: "people, data and decisions.",
      bio: "I graduated in Computer Engineering from Universidad del Bío-Bío and live in Concepción, Chile. My experience comes from building complete systems: from requirements gathering and process modeling to interfaces, APIs, data and deployment.", codeMindset: "analytical", codeFocus: "real workflows", codeLearning: "continuous", codeStatus: "available to contribute",
      skills: [{ number: "01", title: "Complete products", description: "I connect interface, logic, data and deployment so the system works as one unit." }, { number: "02", title: "Processes and data", description: "I model workflows, permissions and validations around how each organization actually works." }, { number: "03", title: "Responsible delivery", description: "I prioritize clear code, performance and technical decisions another team can maintain." }],
    },
    work: {
      eyebrow: "02 / SELECTED WORK", title: "Projects with context,", emphasis: "decisions and execution.", github: "View GitHub", viewCase: "View case study", exploreAdmin: "Explore admin dashboard", publicDemo: "Public demo", activeOperation: "active operation",
      projects: [
        { number: "01", title: "Industrial Commerce", label: "Full-stack e-commerce", color: "cyan", description: "Industrial commerce demonstration with a catalog, purchasing, quotations and a public read-only admin dashboard.", tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app", action: "Visit store", adminHref: "https://industrial-commerce-web.vercel.app/admin", caseSlug: "industrial-commerce" },
        { number: "02", title: "Sistema Avícola IECI", label: "Management platform", color: "lime", description: "Degree project based on a real poultry operation to centralize inventory, sales, health records and reporting.", tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "View code", adminHref: null, caseSlug: "sistema-avicola-ieci" },
        { number: "03", title: "OpenCV App", label: "Mobile app in development", color: "violet", description: "Mobile project in development for image processing and computer vision work with OpenCV.", tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "View code", adminHref: null, caseSlug: null },
        { number: "04", title: "PERRINES UBB", label: "Team university project", color: "orange", description: "Collaborative web development experience focused on organizing and publishing academic content with a simple solution.", tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "View code", adminHref: null, caseSlug: null },
      ],
    },
    process: { eyebrow: "03 / HOW I WORK", title: "A methodical process", connector: "and", emphasis: "clear communication.", items: [{ number: "01", title: "Understand", description: "I review the current process, the people involved and the outcome that needs to improve.", label: "DIAGNOSE" }, { number: "02", title: "Define", description: "I define scope, data, workflows and risks before committing to a technical solution.", label: "PLAN" }, { number: "03", title: "Implement", description: "I build in stages, test critical flows and leave a foundation that can be maintained.", label: "DELIVER" }] },
    contact: {
      kicker: "AVAILABLE FOR SOFTWARE ROLES AND PROJECTS", title: "Let's discuss", emphasis: "the problem.", body: "If you are looking for a developer or need to improve a process through software, send me the objective, current situation and main constraints. I will reply personally with specific questions and an honest assessment of how I can contribute.", email: "Contact me directly by email", location: "Concepción, Chile",
      form: {
        heading: "WORK CONTEXT", reply: "I'll reply personally by email.", name: "Name", namePlaceholder: "Your name", email: "Email", emailPlaceholder: "you@email.com", reason: "Reason", reasonPlaceholder: "Choose an option",
        inquiryOptions: [{ value: "job", label: "Job opportunity" }, { value: "software", label: "Software project" }, { value: "collaboration", label: "Collaboration" }, { value: "other", label: "Other" }], company: "Company", optional: "optional", companyPlaceholder: "Company or team", budget: "Estimated budget", budgetPlaceholder: "Choose a range",
        budgetOptions: [{ value: "undefined", label: "To be defined" }, { value: "under-500k-clp", label: "Under CLP 500,000" }, { value: "500k-1500k-clp", label: "CLP 500,000–1,500,000" }, { value: "over-1500k-clp", label: "Over CLP 1,500,000" }], timeline: "Approximate timeline", timelinePlaceholder: "Choose a timeline", timelineOptions: [{ value: "flexible", label: "Flexible" }, { value: "under-month", label: "Under 1 month" }, { value: "one-three-months", label: "1–3 months" }, { value: "over-three-months", label: "Over 3 months" }], message: "Message", messagePlaceholder: "Describe the objective, current process and what needs to be solved…", privacy: "Your data will only be used to reply to this message.", send: "Send context", sending: "Sending…", success: "Message received. I'll reply personally.", error: "The message could not be sent. Try again or email me directly.", unavailable: "The form is not configured yet.", verification: "Anti-spam verification", verificationHint: "Protected by Cloudflare", verificationRequired: "Complete the anti-spam verification before sending.", verificationError: "The verification expired or failed. Please try again.", subject: "New contact from andrestorres.cl",
      },
    },
  },
  pt: {
    languageLabel: "Mudar idioma",
    nav: { aria: "Navegação principal", home: "Ir para o início", about: "Sobre mim", projects: "Projetos", cv: "CV", contact: "Contato", available: "Disponível para projetos e vagas", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
    hero: { kicker: "Portfólio / 2026", location: "Concepción, CL", aria: "Construo software para operações reais", line1: "Construo software", line2: "para operações", emphasis: "reais.", introBefore: "Sou", introAfter: "desenvolvedor full-stack de Concepción. Crio aplicações web que organizam processos, conectam dados e reduzem o trabalho manual.", explore: "Explorar projetos", downloadCv: "Baixar CV (EN)", sticker: ["FEITO EM", "CONCEPCIÓN"] },
    tickerAria: "Principais tecnologias",
    about: {
      eyebrow: "01 / SOBRE MIM", title: "Software com contexto", emphasis: "operacional.", large: "Construo software a partir do trabalho real:", largeEmphasis: "pessoas, dados e decisões.", bio: "Sou formado em Engenharia de Computação pela Universidad del Bío-Bío e moro em Concepción, Chile. Minha experiência vem da construção de sistemas completos: do levantamento de requisitos e modelagem de processos à interface, API, dados e implantação.", codeMindset: "analítico", codeFocus: "processos reais", codeLearning: "contínuo", codeStatus: "disponível para contribuir",
      skills: [{ number: "01", title: "Produto completo", description: "Conecto interface, lógica, dados e implantação para que o sistema funcione como uma unidade." }, { number: "02", title: "Processos e dados", description: "Modelo fluxos, permissões e validações conforme o funcionamento real de cada organização." }, { number: "03", title: "Entrega responsável", description: "Priorizo código claro, desempenho e decisões técnicas que outra equipe possa manter." }],
    },
    work: {
      eyebrow: "02 / TRABALHOS SELECIONADOS", title: "Projetos com contexto,", emphasis: "decisões e execução.", github: "Ver GitHub", viewCase: "Ver estudo de caso", exploreAdmin: "Explorar painel administrativo", publicDemo: "Demo pública", activeOperation: "operação ativa",
      projects: [
        { number: "01", title: "Industrial Commerce", label: "E-commerce full-stack", color: "cyan", description: "Caso demonstrativo de comércio industrial com catálogo, compra, cotações e painel administrativo público em modo somente leitura.", tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app", action: "Visitar loja", adminHref: "https://industrial-commerce-web.vercel.app/admin", caseSlug: "industrial-commerce" },
        { number: "02", title: "Sistema Avícola IECI", label: "Plataforma de gestão", color: "lime", description: "Projeto de graduação baseado em uma operação avícola real para centralizar estoque, vendas, sanidade e relatórios.", tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "Ver código", adminHref: null, caseSlug: "sistema-avicola-ieci" },
        { number: "03", title: "OpenCV App", label: "Aplicativo móvel em desenvolvimento", color: "violet", description: "Projeto móvel em desenvolvimento para trabalhar com processamento de imagens e visão computacional por meio do OpenCV.", tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "Ver código", adminHref: null, caseSlug: null },
        { number: "04", title: "PERRINES UBB", label: "Projeto universitário em equipe", color: "orange", description: "Experiência colaborativa de desenvolvimento web focada em organizar e publicar conteúdo acadêmico com uma solução simples.", tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "Ver código", adminHref: null, caseSlug: null },
      ],
    },
    process: { eyebrow: "03 / COMO TRABALHO", title: "Trabalho com método", connector: "e", emphasis: "comunicação clara.", items: [{ number: "01", title: "Entender", description: "Analiso o processo atual, as pessoas envolvidas e o resultado que precisa melhorar.", label: "DIAGNOSTICAR" }, { number: "02", title: "Definir", description: "Delimito escopo, dados, fluxos e riscos antes de assumir uma solução técnica.", label: "PLANEJAR" }, { number: "03", title: "Implementar", description: "Construo por etapas, testo os fluxos críticos e deixo uma base que possa ser mantida.", label: "ENTREGAR" }] },
    contact: {
      kicker: "DISPONÍVEL PARA VAGAS E PROJETOS DE SOFTWARE", title: "Vamos conversar sobre", emphasis: "o problema.", body: "Se você procura um desenvolvedor ou precisa melhorar um processo por meio de software, envie o objetivo, a situação atual e as principais restrições. Responderei pessoalmente com perguntas específicas e uma avaliação honesta de como posso contribuir.", email: "Entrar em contato diretamente por e-mail", location: "Concepción, Chile",
      form: {
        heading: "CONTEXTO DO TRABALHO", reply: "Responderei pessoalmente por e-mail.", name: "Nome", namePlaceholder: "Seu nome", email: "E-mail", emailPlaceholder: "voce@email.com", reason: "Motivo", reasonPlaceholder: "Selecione uma opção", inquiryOptions: [{ value: "job", label: "Oportunidade de trabalho" }, { value: "software", label: "Projeto de software" }, { value: "collaboration", label: "Colaboração" }, { value: "other", label: "Outro" }], company: "Empresa", optional: "opcional", companyPlaceholder: "Empresa ou equipe", budget: "Orçamento estimado", budgetPlaceholder: "Selecione uma faixa", budgetOptions: [{ value: "undefined", label: "A definir" }, { value: "under-500k-clp", label: "Menos de CLP 500.000" }, { value: "500k-1500k-clp", label: "CLP 500.000–1.500.000" }, { value: "over-1500k-clp", label: "Mais de CLP 1.500.000" }], timeline: "Prazo aproximado", timelinePlaceholder: "Selecione um prazo", timelineOptions: [{ value: "flexible", label: "Flexível" }, { value: "under-month", label: "Menos de 1 mês" }, { value: "one-three-months", label: "1–3 meses" }, { value: "over-three-months", label: "Mais de 3 meses" }], message: "Mensagem", messagePlaceholder: "Descreva o objetivo, o processo atual e o que precisa ser resolvido…", privacy: "Seus dados serão usados apenas para responder a este contato.", send: "Enviar contexto", sending: "Enviando…", success: "Mensagem recebida. Responderei pessoalmente.", error: "Não foi possível enviar. Tente novamente ou escreva por e-mail.", unavailable: "O formulário ainda não está configurado.", verification: "Verificação antispam", verificationHint: "Protegido pela Cloudflare", verificationRequired: "Conclua a verificação antispam antes de enviar.", verificationError: "A verificação expirou ou falhou. Tente novamente.", subject: "Novo contato de andrestorres.cl",
      },
    },
  },
  fr: {
    languageLabel: "Changer de langue",
    nav: { aria: "Navigation principale", home: "Aller à l'accueil", about: "À propos", projects: "Projets", cv: "CV", contact: "Contact", available: "Disponible pour des postes et projets", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
    hero: { kicker: "Portfolio / 2026", location: "Concepción, CL", aria: "Je développe des logiciels pour des opérations réelles", line1: "Je développe", line2: "des logiciels pour", emphasis: "le terrain.", introBefore: "Je suis", introAfter: "développeur full-stack établi à Concepción. Je conçois des applications web qui structurent les processus, relient les données et réduisent le travail manuel.", explore: "Voir les projets", downloadCv: "Télécharger le CV (EN)", sticker: ["CRÉÉ À", "CONCEPCIÓN"] },
    tickerAria: "Technologies principales",
    about: {
      eyebrow: "01 / À PROPOS", title: "Des logiciels ancrés dans", emphasis: "les opérations.", large: "Je construis des logiciels à partir du travail réel :", largeEmphasis: "les personnes, les données et les décisions.", bio: "Je suis diplômé en génie informatique de l'Universidad del Bío-Bío et je vis à Concepción, au Chili. Mon expérience vient de la construction de systèmes complets : de la collecte des besoins et la modélisation des processus jusqu'à l'interface, l'API, les données et le déploiement.", codeMindset: "analytique", codeFocus: "processus réels", codeLearning: "continu", codeStatus: "disponible pour contribuer",
      skills: [{ number: "01", title: "Produit complet", description: "Je relie interface, logique, données et déploiement pour que le système fonctionne comme un tout." }, { number: "02", title: "Processus et données", description: "Je modélise les parcours, les permissions et les validations selon le fonctionnement réel de chaque organisation." }, { number: "03", title: "Livraison responsable", description: "Je privilégie un code clair, la performance et des décisions techniques qu'une autre équipe peut maintenir." }],
    },
    work: {
      eyebrow: "02 / PROJETS SÉLECTIONNÉS", title: "Des projets avec du contexte,", emphasis: "des décisions et une exécution.", github: "Voir GitHub", viewCase: "Voir l'étude de cas", exploreAdmin: "Explorer le tableau d'administration", publicDemo: "Démo publique", activeOperation: "opération active",
      projects: [
        { number: "01", title: "Industrial Commerce", label: "E-commerce full-stack", color: "cyan", description: "Cas de démonstration de commerce industriel avec catalogue, achat, demandes de devis et tableau d'administration public en lecture seule.", tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app", action: "Visiter la boutique", adminHref: "https://industrial-commerce-web.vercel.app/admin", caseSlug: "industrial-commerce" },
        { number: "02", title: "Sistema Avícola IECI", label: "Plateforme de gestion", color: "lime", description: "Projet de fin d'études fondé sur une exploitation avicole réelle pour centraliser inventaire, ventes, suivi sanitaire et rapports.", tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "Voir le code", adminHref: null, caseSlug: "sistema-avicola-ieci" },
        { number: "03", title: "OpenCV App", label: "Application mobile en développement", color: "violet", description: "Projet mobile en développement consacré au traitement d'images et à la vision par ordinateur avec OpenCV.", tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "Voir le code", adminHref: null, caseSlug: null },
        { number: "04", title: "PERRINES UBB", label: "Projet universitaire en équipe", color: "orange", description: "Expérience collaborative de développement web visant à organiser et publier du contenu académique avec une solution simple.", tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "Voir le code", adminHref: null, caseSlug: null },
      ],
    },
    process: { eyebrow: "03 / MA FAÇON DE TRAVAILLER", title: "Une méthode de travail", connector: "et", emphasis: "une communication claire.", items: [{ number: "01", title: "Comprendre", description: "J'analyse le processus actuel, les personnes concernées et le résultat à améliorer.", label: "DIAGNOSTIQUER" }, { number: "02", title: "Définir", description: "Je délimite le périmètre, les données, les parcours et les risques avant de retenir une solution technique.", label: "PLANIFIER" }, { number: "03", title: "Mettre en œuvre", description: "Je construis par étapes, teste les parcours critiques et laisse une base qui peut être maintenue.", label: "LIVRER" }] },
    contact: {
      kicker: "DISPONIBLE POUR DES POSTES ET PROJETS LOGICIELS", title: "Parlons du", emphasis: "problème.", body: "Si vous cherchez un développeur ou souhaitez améliorer un processus grâce au logiciel, envoyez-moi l'objectif, la situation actuelle et les principales contraintes. Je répondrai personnellement avec des questions précises et une évaluation honnête de ma contribution possible.", email: "Me contacter directement par courriel", location: "Concepción, Chili",
      form: {
        heading: "CONTEXTE DU TRAVAIL", reply: "Je répondrai personnellement par courriel.", name: "Nom", namePlaceholder: "Votre nom", email: "Courriel", emailPlaceholder: "vous@courriel.com", reason: "Objet", reasonPlaceholder: "Choisissez une option", inquiryOptions: [{ value: "job", label: "Opportunité d'emploi" }, { value: "software", label: "Projet logiciel" }, { value: "collaboration", label: "Collaboration" }, { value: "other", label: "Autre" }], company: "Entreprise", optional: "facultatif", companyPlaceholder: "Entreprise ou équipe", budget: "Budget estimé", budgetPlaceholder: "Choisissez une fourchette", budgetOptions: [{ value: "undefined", label: "À définir" }, { value: "under-500k-clp", label: "Moins de 500 000 CLP" }, { value: "500k-1500k-clp", label: "500 000–1 500 000 CLP" }, { value: "over-1500k-clp", label: "Plus de 1 500 000 CLP" }], timeline: "Délai approximatif", timelinePlaceholder: "Choisissez un délai", timelineOptions: [{ value: "flexible", label: "Flexible" }, { value: "under-month", label: "Moins d'un mois" }, { value: "one-three-months", label: "1–3 mois" }, { value: "over-three-months", label: "Plus de 3 mois" }], message: "Message", messagePlaceholder: "Décrivez l'objectif, le processus actuel et ce qui doit être résolu…", privacy: "Vos données seront utilisées uniquement pour répondre à ce message.", send: "Envoyer le contexte", sending: "Envoi…", success: "Message reçu. Je vous répondrai personnellement.", error: "Le message n'a pas pu être envoyé. Réessayez ou écrivez-moi par courriel.", unavailable: "Le formulaire n'est pas encore configuré.", verification: "Vérification anti-spam", verificationHint: "Protégé par Cloudflare", verificationRequired: "Effectuez la vérification anti-spam avant l'envoi.", verificationError: "La vérification a expiré ou échoué. Réessayez.", subject: "Nouveau contact depuis andrestorres.cl",
      },
    },
  },
}

export const seoCopy: Record<Locale, { title: string; description: string; ogDescription: string; locale: string }> = {
  es: { title: "Andrés Torres | Desarrollador Full-Stack en Chile", description: "Andrés Torres desarrolla aplicaciones web para ordenar procesos, conectar datos y reducir trabajo manual. Portafolio full-stack desde Concepción, Chile.", ogDescription: "Software para operaciones reales: procesos, interfaces, APIs, datos y despliegue.", locale: "es_CL" },
  en: { title: "Andrés Torres | Full-Stack Developer in Chile", description: "Andrés Torres builds web applications that organize workflows, connect data and reduce manual work. Full-stack portfolio from Concepción, Chile.", ogDescription: "Software for real-world operations: processes, interfaces, APIs, data and deployment.", locale: "en_US" },
  pt: { title: "Andrés Torres | Desenvolvedor Full-Stack no Chile", description: "Andrés Torres desenvolve aplicações web que organizam processos, conectam dados e reduzem trabalho manual. Portfólio full-stack de Concepción, Chile.", ogDescription: "Software para operações reais: processos, interfaces, APIs, dados e implantação.", locale: "pt_BR" },
  fr: { title: "Andrés Torres | Développeur Full-Stack au Chili", description: "Andrés Torres développe des applications web qui structurent les processus, relient les données et réduisent le travail manuel. Portfolio full-stack depuis Concepción, au Chili.", ogDescription: "Des logiciels pour les opérations réelles : processus, interfaces, API, données et déploiement.", locale: "fr_CA" },
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
