import type { Metadata } from "next"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata: Metadata = {
  title: "Industrial Commerce — E-commerce full-stack",
  description: "Caso de estudio de Industrial Commerce: catálogo, cotizaciones, checkout y panel administrativo desarrollados con Next.js, TypeScript, Express y Supabase.",
  alternates: { canonical: "/proyectos/industrial-commerce/" },
  openGraph: {
    title: "Industrial Commerce — Caso de estudio",
    description: "E-commerce industrial full-stack con catálogo, cotizaciones, checkout y administración.",
    url: "/proyectos/industrial-commerce/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Industrial Commerce, caso de estudio de Andrés Torres" }],
  },
}

export default function IndustrialCommercePage() {
  return (
    <ProjectCaseStudy
      eyebrow="E-commerce full-stack"
      title="Industrial Commerce"
      summary="Una plataforma demostrativa de comercio industrial que conecta una experiencia de compra clara con las herramientas necesarias para administrar el negocio."
      accent="cyan"
      image="/projects/industrial-commerce.png"
      imageAlt="Página principal de la plataforma Industrial Commerce"
      links={[
        { label: "Visitar tienda", href: "https://industrial-commerce-web.vercel.app", icon: "demo" },
        { label: "Explorar panel", href: "https://industrial-commerce-web.vercel.app/admin", icon: "demo" },
      ]}
      highlights={[
        { value: "End-to-end", label: "Experiencia de compra y gestión" },
        { value: "2 flujos", label: "Compra directa y cotización" },
        { value: "Demo pública", label: "Panel explorable en modo lectura" },
      ]}
      role="Diseño y desarrollo full-stack"
      context="Proyecto demostrativo de comercio B2B"
      stack={["Next.js", "TypeScript", "Express", "Supabase"]}
      challenge="El comercio industrial necesita mostrar información técnica sin convertir la compra en un proceso pesado. El desafío fue reunir catálogo, cotizaciones y checkout en una experiencia coherente, y al mismo tiempo ofrecer una forma segura de demostrar la administración del sistema."
      solution="Diseñé dos caras conectadas del producto: una tienda enfocada en explorar y convertir, y un panel administrativo que permite comprender la operación sin exponer acciones destructivas en la demostración pública."
      features={[
        "Catálogo de productos y navegación orientada a compra",
        "Flujos diferenciados para checkout y solicitudes de cotización",
        "Panel administrativo público con acceso de solo lectura",
        "Arquitectura full-stack con datos y lógica de negocio integrados",
      ]}
      outcome="El resultado es una demostración funcional que permite evaluar tanto la experiencia del cliente como la operación interna. El proyecto muestra cómo abordo producto, interfaz, backend y datos como un solo sistema."
    />
  )
}
