import type { Metadata } from "next"
import {
  caseStudyHref, languageAlternates, type Locale, type ProjectSlug,
} from "@/lib/i18n"

type ProjectLink = { label: string; href: string; icon?: "github" | "demo" }

export type CaseStudyContent = {
  eyebrow: string
  title: string
  summary: string
  accent: "cyan" | "lime"
  image?: string
  imageAlt?: string
  links: ProjectLink[]
  highlights: Array<{ value: string; label: string }>
  challenge: string
  solution: string
  features: string[]
  stack: string[]
  role: string
  context: string
  outcome: string
  metadataTitle: string
  metadataDescription: string
  metadataImageAlt: string
}

export const caseUi: Record<Locale, {
  navAria: string
  back: string
  available: string
  caseStudy: string
  preview: string
  highlights: string
  interface: string
  data: string
  role: string
  context: string
  stack: string
  challengeLabel: string
  challengeTitle: string
  solutionLabel: string
  solutionTitle: string
  resultLabel: string
  resultTitle: string
  similarChallenge: string
  ctaLine1: string
  ctaLine2: string
  write: string
}> = {
  es: { navAria: "Navegación del proyecto", back: "Volver al portafolio", available: "Disponible para proyectos y roles", caseStudy: "CASO DE ESTUDIO", preview: "Vista de", highlights: "Aspectos destacados", interface: "INTERFAZ", data: "DATOS", role: "ROL", context: "CONTEXTO", stack: "STACK", challengeLabel: "01 / EL DESAFÍO", challengeTitle: "Entender antes de construir.", solutionLabel: "02 / LA SOLUCIÓN", solutionTitle: "Un producto completo, no solo una interfaz.", resultLabel: "03 / EL RESULTADO", resultTitle: "Una base útil y preparada para evolucionar.", similarChallenge: "¿NECESITAS ORDENAR UN PROCESO?", ctaLine1: "Conversemos sobre", ctaLine2: "el contexto real.", write: "Escríbeme" },
  en: { navAria: "Project navigation", back: "Back to portfolio", available: "Available for software roles and projects", caseStudy: "CASE STUDY", preview: "Preview of", highlights: "Key highlights", interface: "INTERFACE", data: "DATA", role: "ROLE", context: "CONTEXT", stack: "STACK", challengeLabel: "01 / THE CHALLENGE", challengeTitle: "Understand before building.", solutionLabel: "02 / THE SOLUTION", solutionTitle: "A complete product, not just an interface.", resultLabel: "03 / THE OUTCOME", resultTitle: "A useful foundation built to evolve.", similarChallenge: "NEED TO IMPROVE A PROCESS?", ctaLine1: "Let's discuss", ctaLine2: "the real context.", write: "Contact me" },
  pt: { navAria: "Navegação do projeto", back: "Voltar ao portfólio", available: "Disponível para projetos e vagas", caseStudy: "ESTUDO DE CASO", preview: "Vista de", highlights: "Destaques", interface: "INTERFACE", data: "DADOS", role: "FUNÇÃO", context: "CONTEXTO", stack: "STACK", challengeLabel: "01 / O DESAFIO", challengeTitle: "Entender antes de construir.", solutionLabel: "02 / A SOLUÇÃO", solutionTitle: "Um produto completo, não apenas uma interface.", resultLabel: "03 / O RESULTADO", resultTitle: "Uma base útil e pronta para evoluir.", similarChallenge: "PRECISA ORGANIZAR UM PROCESSO?", ctaLine1: "Vamos conversar sobre", ctaLine2: "o contexto real.", write: "Fale comigo" },
  fr: { navAria: "Navigation du projet", back: "Retour au portfolio", available: "Disponible pour des postes et projets", caseStudy: "ÉTUDE DE CAS", preview: "Aperçu de", highlights: "Points forts", interface: "INTERFACE", data: "DONNÉES", role: "RÔLE", context: "CONTEXTE", stack: "STACK", challengeLabel: "01 / LE DÉFI", challengeTitle: "Comprendre avant de construire.", solutionLabel: "02 / LA SOLUTION", solutionTitle: "Un produit complet, pas seulement une interface.", resultLabel: "03 / LE RÉSULTAT", resultTitle: "Une base utile et prête à évoluer.", similarChallenge: "UN PROCESSUS À AMÉLIORER?", ctaLine1: "Parlons du", ctaLine2: "contexte réel.", write: "Écrivez-moi" },
}

export const caseStudies: Record<ProjectSlug, Record<Locale, CaseStudyContent>> = {
  "industrial-commerce": {
    es: {
      eyebrow: "E-commerce full-stack", title: "Industrial Commerce", summary: "Una plataforma demostrativa de comercio industrial que conecta una experiencia de compra clara con las herramientas necesarias para administrar el negocio.", accent: "cyan", image: "/projects/industrial-commerce.png", imageAlt: "Página principal de la plataforma Industrial Commerce",
      links: [{ label: "Visitar tienda", href: "https://industrial-commerce-web.vercel.app", icon: "demo" }, { label: "Explorar panel", href: "https://industrial-commerce-web.vercel.app/admin", icon: "demo" }],
      highlights: [{ value: "End-to-end", label: "Experiencia de compra y gestión" }, { value: "2 flujos", label: "Compra directa y cotización" }, { value: "Demo pública", label: "Panel explorable en modo lectura" }],
      role: "Diseño y desarrollo full-stack", context: "Proyecto demostrativo de comercio B2B", stack: ["Next.js", "TypeScript", "Express", "Supabase"],
      challenge: "El comercio industrial necesita mostrar información técnica sin convertir la compra en un proceso pesado. El desafío fue reunir catálogo, cotizaciones y checkout en una experiencia coherente, y al mismo tiempo ofrecer una forma segura de demostrar la administración del sistema.",
      solution: "Diseñé dos caras conectadas del producto: una tienda enfocada en explorar y convertir, y un panel administrativo que permite comprender la operación sin exponer acciones destructivas en la demostración pública.",
      features: ["Catálogo de productos y navegación orientada a compra", "Flujos diferenciados para checkout y solicitudes de cotización", "Panel administrativo público con acceso de solo lectura", "Arquitectura full-stack con datos y lógica de negocio integrados"],
      outcome: "El resultado es una demostración funcional que permite evaluar tanto la experiencia del cliente como la operación interna. El proyecto muestra cómo abordo producto, interfaz, backend y datos como un solo sistema.",
      metadataTitle: "Industrial Commerce — E-commerce full-stack", metadataDescription: "Caso de estudio de Industrial Commerce: catálogo, cotizaciones, checkout y panel administrativo desarrollados con Next.js, TypeScript, Express y Supabase.", metadataImageAlt: "Industrial Commerce, caso de estudio de Andrés Torres",
    },
    en: {
      eyebrow: "Full-stack e-commerce", title: "Industrial Commerce", summary: "An industrial commerce demo that connects a clear purchasing experience with the tools needed to run the business.", accent: "cyan", image: "/projects/industrial-commerce.png", imageAlt: "Industrial Commerce platform homepage",
      links: [{ label: "Visit store", href: "https://industrial-commerce-web.vercel.app", icon: "demo" }, { label: "Explore dashboard", href: "https://industrial-commerce-web.vercel.app/admin", icon: "demo" }],
      highlights: [{ value: "End-to-end", label: "Purchasing and management experience" }, { value: "2 flows", label: "Direct purchase and quotation" }, { value: "Public demo", label: "Read-only dashboard" }],
      role: "Full-stack design and development", context: "B2B commerce demonstration project", stack: ["Next.js", "TypeScript", "Express", "Supabase"],
      challenge: "Industrial commerce must present technical information without making purchasing cumbersome. The challenge was to combine catalog, quotation and checkout flows into one coherent experience while safely demonstrating the system's administration.",
      solution: "I designed two connected sides of the product: a storefront focused on discovery and conversion, and an admin dashboard that explains the operation without exposing destructive actions in the public demo.",
      features: ["Product catalog and purchase-focused navigation", "Separate checkout and quotation request flows", "Public admin dashboard with read-only access", "Full-stack architecture with integrated data and business logic"],
      outcome: "The result is a functional demo where both the customer experience and internal operation can be evaluated. It shows how I approach product, interface, backend and data as one system.",
      metadataTitle: "Industrial Commerce — Full-Stack E-commerce", metadataDescription: "Industrial Commerce case study: catalog, quotations, checkout and admin dashboard built with Next.js, TypeScript, Express and Supabase.", metadataImageAlt: "Industrial Commerce case study by Andrés Torres",
    },
    pt: {
      eyebrow: "E-commerce full-stack", title: "Industrial Commerce", summary: "Uma demonstração de comércio industrial que conecta uma experiência de compra clara às ferramentas necessárias para administrar o negócio.", accent: "cyan", image: "/projects/industrial-commerce.png", imageAlt: "Página inicial da plataforma Industrial Commerce",
      links: [{ label: "Visitar loja", href: "https://industrial-commerce-web.vercel.app", icon: "demo" }, { label: "Explorar painel", href: "https://industrial-commerce-web.vercel.app/admin", icon: "demo" }],
      highlights: [{ value: "End-to-end", label: "Experiência de compra e gestão" }, { value: "2 fluxos", label: "Compra direta e cotação" }, { value: "Demo pública", label: "Painel em modo somente leitura" }],
      role: "Design e desenvolvimento full-stack", context: "Projeto demonstrativo de comércio B2B", stack: ["Next.js", "TypeScript", "Express", "Supabase"],
      challenge: "O comércio industrial precisa apresentar informações técnicas sem tornar a compra pesada. O desafio foi reunir catálogo, cotações e checkout em uma experiência coerente e, ao mesmo tempo, demonstrar a administração do sistema com segurança.",
      solution: "Projetei dois lados conectados do produto: uma loja focada em exploração e conversão e um painel administrativo que permite entender a operação sem expor ações destrutivas na demonstração pública.",
      features: ["Catálogo de produtos e navegação orientada à compra", "Fluxos separados para checkout e solicitações de cotação", "Painel administrativo público com acesso somente leitura", "Arquitetura full-stack com dados e lógica de negócio integrados"],
      outcome: "O resultado é uma demonstração funcional que permite avaliar tanto a experiência do cliente quanto a operação interna. O projeto mostra como abordo produto, interface, backend e dados como um único sistema.",
      metadataTitle: "Industrial Commerce — E-commerce Full-Stack", metadataDescription: "Estudo de caso do Industrial Commerce: catálogo, cotações, checkout e painel administrativo com Next.js, TypeScript, Express e Supabase.", metadataImageAlt: "Estudo de caso Industrial Commerce de Andrés Torres",
    },
    fr: {
      eyebrow: "E-commerce full-stack", title: "Industrial Commerce", summary: "Une démonstration de commerce industriel qui relie une expérience d'achat claire aux outils nécessaires pour gérer l'entreprise.", accent: "cyan", image: "/projects/industrial-commerce.png", imageAlt: "Page d'accueil de la plateforme Industrial Commerce",
      links: [{ label: "Visiter la boutique", href: "https://industrial-commerce-web.vercel.app", icon: "demo" }, { label: "Explorer le tableau", href: "https://industrial-commerce-web.vercel.app/admin", icon: "demo" }],
      highlights: [{ value: "De bout en bout", label: "Expérience d'achat et de gestion" }, { value: "2 parcours", label: "Achat direct et devis" }, { value: "Démo publique", label: "Tableau en lecture seule" }],
      role: "Design et développement full-stack", context: "Projet de démonstration de commerce B2B", stack: ["Next.js", "TypeScript", "Express", "Supabase"],
      challenge: "Le commerce industriel doit présenter des informations techniques sans alourdir l'achat. Le défi consistait à réunir catalogue, devis et paiement dans une expérience cohérente tout en démontrant l'administration du système de façon sécuritaire.",
      solution: "J'ai conçu deux facettes connectées : une boutique axée sur la découverte et la conversion, et un tableau d'administration qui explique l'opération sans exposer d'actions destructives dans la démo publique.",
      features: ["Catalogue et navigation orientée vers l'achat", "Parcours distincts pour le paiement et les demandes de devis", "Tableau d'administration public en lecture seule", "Architecture full-stack intégrant données et logique métier"],
      outcome: "Le résultat est une démonstration fonctionnelle qui permet d'évaluer l'expérience client et l'opération interne. Le projet montre comment j'aborde le produit, l'interface, le backend et les données comme un seul système.",
      metadataTitle: "Industrial Commerce — E-commerce Full-Stack", metadataDescription: "Étude de cas Industrial Commerce : catalogue, devis, paiement et tableau d'administration avec Next.js, TypeScript, Express et Supabase.", metadataImageAlt: "Étude de cas Industrial Commerce par Andrés Torres",
    },
  },
  "sistema-avicola-ieci": {
    es: {
      eyebrow: "Plataforma de gestión", title: "Sistema Avícola IECI", summary: "Proyecto de título desarrollado para digitalizar procesos administrativos, logísticos y contables de una operación avícola real.", accent: "lime",
      links: [{ label: "Ver código", href: "https://github.com/Sdraen/avicola-app", icon: "github" }], highlights: [{ value: "40–60%", label: "Reducción estimada del registro manual" }, { value: "4 módulos", label: "Inventario, ventas, sanidad y reportes" }, { value: "3 roles", label: "Administrador, gerente y operario" }],
      role: "Análisis, diseño y desarrollo full-stack", context: "Proyecto de título · Universidad del Bío-Bío · 2025", stack: ["React", "TypeScript", "Express", "PostgreSQL", "Supabase", "Docker"],
      challenge: "La operación dependía de registros manuales y datos distribuidos, lo que dificultaba la trazabilidad y aumentaba la duplicación de información. Para diseñar una solución útil fue necesario levantar requisitos con usuarios no técnicos y modelar los procesos reales antes de escribir código.",
      solution: "Construí una SPA modular conectada a una API REST y una base de datos relacional. La arquitectura integra autenticación, roles, validación de datos y políticas de acceso, además de un despliegue reproducible con Docker.",
      features: ["Inventario centralizado e historial de movimientos", "Pedidos, ventas y cálculos automáticos", "Seguimiento sanitario, tratamientos y alertas", "Dashboards, filtros y exportación de reportes", "Control de acceso por roles y trazabilidad por usuario"],
      outcome: "La plataforma centraliza información que antes estaba dispersa, reduce trabajo manual y deja una trazabilidad consultable de la operación. También demuestra un proceso completo: entrevistas, BPMN, diseño de datos, implementación y despliegue.",
      metadataTitle: "Sistema Avícola IECI — Plataforma de gestión", metadataDescription: "Caso de estudio de una plataforma full-stack para digitalizar procesos administrativos, logísticos y contables de una operación avícola.", metadataImageAlt: "Sistema Avícola IECI, caso de estudio de Andrés Torres",
    },
    en: {
      eyebrow: "Management platform", title: "Sistema Avícola IECI", summary: "Degree project built to digitize administrative, logistics and accounting processes for a real poultry operation.", accent: "lime",
      links: [{ label: "View code", href: "https://github.com/Sdraen/avicola-app", icon: "github" }], highlights: [{ value: "40–60%", label: "Estimated reduction in manual entry" }, { value: "4 modules", label: "Inventory, sales, health and reports" }, { value: "3 roles", label: "Administrator, manager and operator" }],
      role: "Analysis, design and full-stack development", context: "Degree project · Universidad del Bío-Bío · 2025", stack: ["React", "TypeScript", "Express", "PostgreSQL", "Supabase", "Docker"],
      challenge: "The operation relied on manual records and scattered data, making traceability difficult and increasing duplication. Building a useful solution required gathering requirements from non-technical users and modeling real processes before writing code.",
      solution: "I built a modular SPA connected to a REST API and relational database. The architecture includes authentication, roles, data validation and access policies, plus reproducible deployment with Docker.",
      features: ["Centralized inventory and movement history", "Orders, sales and automated calculations", "Health tracking, treatments and alerts", "Dashboards, filters and report exports", "Role-based access control and user traceability"],
      outcome: "The platform centralizes previously scattered information, reduces manual work and creates searchable operational traceability. It also demonstrates a complete process: interviews, BPMN, data design, implementation and deployment.",
      metadataTitle: "Sistema Avícola IECI — Management Platform", metadataDescription: "Case study of a full-stack platform that digitizes administrative, logistics and accounting processes for a poultry operation.", metadataImageAlt: "Sistema Avícola IECI case study by Andrés Torres",
    },
    pt: {
      eyebrow: "Plataforma de gestão", title: "Sistema Avícola IECI", summary: "Projeto de graduação desenvolvido para digitalizar processos administrativos, logísticos e contábeis de uma operação avícola real.", accent: "lime",
      links: [{ label: "Ver código", href: "https://github.com/Sdraen/avicola-app", icon: "github" }], highlights: [{ value: "40–60%", label: "Redução estimada do registro manual" }, { value: "4 módulos", label: "Estoque, vendas, sanidade e relatórios" }, { value: "3 funções", label: "Administrador, gerente e operador" }],
      role: "Análise, design e desenvolvimento full-stack", context: "Projeto de graduação · Universidad del Bío-Bío · 2025", stack: ["React", "TypeScript", "Express", "PostgreSQL", "Supabase", "Docker"],
      challenge: "A operação dependia de registros manuais e dados dispersos, dificultando a rastreabilidade e aumentando a duplicação. Para criar uma solução útil, foi necessário levantar requisitos com usuários não técnicos e modelar os processos reais antes de escrever código.",
      solution: "Construí uma SPA modular conectada a uma API REST e a um banco de dados relacional. A arquitetura integra autenticação, funções, validação de dados e políticas de acesso, além de implantação reproduzível com Docker.",
      features: ["Estoque centralizado e histórico de movimentações", "Pedidos, vendas e cálculos automáticos", "Acompanhamento sanitário, tratamentos e alertas", "Dashboards, filtros e exportação de relatórios", "Controle de acesso por função e rastreabilidade por usuário"],
      outcome: "A plataforma centraliza informações antes dispersas, reduz o trabalho manual e cria uma rastreabilidade consultável da operação. Também demonstra um processo completo: entrevistas, BPMN, design de dados, implementação e implantação.",
      metadataTitle: "Sistema Avícola IECI — Plataforma de Gestão", metadataDescription: "Estudo de caso de uma plataforma full-stack para digitalizar processos administrativos, logísticos e contábeis de uma operação avícola.", metadataImageAlt: "Estudo de caso Sistema Avícola IECI de Andrés Torres",
    },
    fr: {
      eyebrow: "Plateforme de gestion", title: "Sistema Avícola IECI", summary: "Projet de fin d'études conçu pour numériser les processus administratifs, logistiques et comptables d'une exploitation avicole réelle.", accent: "lime",
      links: [{ label: "Voir le code", href: "https://github.com/Sdraen/avicola-app", icon: "github" }], highlights: [{ value: "40–60 %", label: "Réduction estimée de la saisie manuelle" }, { value: "4 modules", label: "Inventaire, ventes, santé et rapports" }, { value: "3 rôles", label: "Administrateur, gestionnaire et opérateur" }],
      role: "Analyse, design et développement full-stack", context: "Projet de fin d'études · Universidad del Bío-Bío · 2025", stack: ["React", "TypeScript", "Express", "PostgreSQL", "Supabase", "Docker"],
      challenge: "L'exploitation dépendait de registres manuels et de données dispersées, ce qui compliquait la traçabilité et augmentait les doublons. Il a fallu recueillir les besoins d'utilisateurs non techniques et modéliser les processus réels avant d'écrire le code.",
      solution: "J'ai construit une SPA modulaire connectée à une API REST et à une base relationnelle. L'architecture intègre authentification, rôles, validation et politiques d'accès, ainsi qu'un déploiement reproductible avec Docker.",
      features: ["Inventaire centralisé et historique des mouvements", "Commandes, ventes et calculs automatisés", "Suivi sanitaire, traitements et alertes", "Tableaux de bord, filtres et exportation de rapports", "Contrôle d'accès par rôle et traçabilité des utilisateurs"],
      outcome: "La plateforme centralise l'information auparavant dispersée, réduit le travail manuel et fournit une traçabilité consultable. Elle démontre aussi un processus complet : entrevues, BPMN, conception des données, mise en œuvre et déploiement.",
      metadataTitle: "Sistema Avícola IECI — Plateforme de Gestion", metadataDescription: "Étude de cas d'une plateforme full-stack qui numérise les processus administratifs, logistiques et comptables d'une exploitation avicole.", metadataImageAlt: "Étude de cas Sistema Avícola IECI par Andrés Torres",
    },
  },
}

export function caseMetadata(locale: Locale, slug: ProjectSlug): Metadata {
  const content = caseStudies[slug][locale]
  const path = `proyectos/${slug}`
  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
    alternates: { canonical: caseStudyHref(locale, slug), languages: languageAlternates(path) },
    openGraph: {
      title: content.metadataTitle,
      description: content.metadataDescription,
      url: caseStudyHref(locale, slug),
      locale: locale === "es" ? "es_CL" : locale === "pt" ? "pt_BR" : locale === "fr" ? "fr_CA" : "en_US",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: content.metadataImageAlt }],
    },
  }
}
