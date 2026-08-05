import type { Metadata } from "next"
import { ProjectCaseStudy } from "@/components/project-case-study"

export const metadata: Metadata = {
  title: "Sistema Avícola IECI — Plataforma de gestión",
  description: "Caso de estudio de una plataforma full-stack para digitalizar procesos administrativos, logísticos y contables de una operación avícola.",
  alternates: { canonical: "/proyectos/sistema-avicola-ieci/" },
  openGraph: {
    title: "Sistema Avícola IECI — Caso de estudio",
    description: "Digitalización de inventario, ventas, sanidad y reportería para una operación avícola.",
    url: "/proyectos/sistema-avicola-ieci/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sistema Avícola IECI, caso de estudio de Andrés Torres" }],
  },
}

export default function SistemaAvicolaPage() {
  return (
    <ProjectCaseStudy
      eyebrow="Plataforma de gestión"
      title="Sistema Avícola IECI"
      summary="Proyecto de título desarrollado para digitalizar procesos administrativos, logísticos y contables de una operación avícola real."
      accent="lime"
      links={[
        { label: "Ver código", href: "https://github.com/Sdraen/avicola-app", icon: "github" },
      ]}
      highlights={[
        { value: "40–60%", label: "Reducción estimada del registro manual" },
        { value: "4 módulos", label: "Inventario, ventas, sanidad y reportes" },
        { value: "3 roles", label: "Administrador, gerente y operario" },
      ]}
      role="Análisis, diseño y desarrollo full-stack"
      context="Proyecto de título · Universidad del Bío-Bío · 2025"
      stack={["React", "TypeScript", "Express", "PostgreSQL", "Supabase", "Docker"]}
      challenge="La operación dependía de registros manuales y datos distribuidos, lo que dificultaba la trazabilidad y aumentaba la duplicación de información. Para diseñar una solución útil fue necesario levantar requisitos con usuarios no técnicos y modelar los procesos reales antes de escribir código."
      solution="Construí una SPA modular conectada a una API REST y una base de datos relacional. La arquitectura integra autenticación, roles, validación de datos y políticas de acceso, además de un despliegue reproducible con Docker."
      features={[
        "Inventario centralizado e historial de movimientos",
        "Pedidos, ventas y cálculos automáticos",
        "Seguimiento sanitario, tratamientos y alertas",
        "Dashboards, filtros y exportación de reportes",
        "Control de acceso por roles y trazabilidad por usuario",
      ]}
      outcome="La plataforma centraliza información que antes estaba dispersa, reduce trabajo manual y deja una trazabilidad consultable de la operación. También demuestra un proceso completo: entrevistas, BPMN, diseño de datos, implementación y despliegue."
    />
  )
}
