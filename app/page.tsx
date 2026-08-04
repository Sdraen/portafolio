"use client"

import {
  ArrowDownRight, ArrowUpRight, Asterisk, Braces, Github, Layers3, Linkedin,
  Mail, MapPin, Menu, MousePointer2, Sparkles, X, Zap,
} from "lucide-react"
import {
  LazyMotion, domAnimation, m, useMotionValue, useReducedMotion, useScroll,
  useSpring, useTransform, type MotionValue,
} from "framer-motion"
import Image from "next/image"
import { useState, type MouseEvent, type ReactNode } from "react"

const projects = [
  {
    number: "01", title: "Industrial Commerce", label: "E-commerce full stack", color: "cyan",
    description: "Plataforma demostrativa de comercio industrial con catálogo, cotizaciones, checkout y un panel administrativo explorable en modo de solo lectura.",
    tags: ["Next.js", "TypeScript", "Express", "Supabase"], href: "https://industrial-commerce-web.vercel.app",
    action: "Visitar tienda", adminHref: "https://industrial-commerce-web.vercel.app/admin",
  },
  {
    number: "02", title: "Sistema Avícola IECI", label: "Full-stack platform", color: "lime",
    description: "Plataforma full-stack desarrollada como proyecto de título para digitalizar la gestión de una operación avícola.",
    tags: ["TypeScript", "React", "Express", "Docker"], href: "https://github.com/Sdraen/avicola-app", action: "Ver código", adminHref: null,
  },
  {
    number: "03", title: "OpenCV App", label: "Computer vision", color: "violet",
    description: "Aplicación móvil enfocada en procesamiento de imágenes y visión computacional usando OpenCV.",
    tags: ["OpenCV", "Android", "C++", "Java"], href: "https://github.com/Sdraen/opencv-app-python", action: "Ver código", adminHref: null,
  },
  {
    number: "04", title: "PERRINES UBB", label: "Collaborative web", color: "orange",
    description: "Proyecto colaborativo universitario para organizar, gestionar y publicar contenido académico de forma simple.",
    tags: ["JavaScript", "CSS", "HTML"], href: "https://github.com/B4yr0ndg/PERRINES-UBB-", action: "Ver código", adminHref: null,
  },
] as const

const stack = ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "EXPRESS", "POSTGRESQL", "SUPABASE", "DOCKER", "GIT"]
const ease = [0.16, 1, 0.3, 1] as const
const reveal = {
  initial: { opacity: 0, y: 34 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, transition: { duration: 0.75, ease },
}

function MagneticLink({ href, children, className = "", external = false }: {
  href: string; children: ReactNode; className?: string; external?: boolean
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 22 })
  const springY = useSpring(y, { stiffness: 280, damping: 22 })
  function move(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.14)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.14)
  }
  return (
    <m.a href={href} className={className} style={{ x: springX, y: springY }} onMouseMove={move}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </m.a>
  )
}

function ProjectVisual({ color }: { color: (typeof projects)[number]["color"] }) {
  if (color === "cyan") return (
    <div className="project-art art-cyan" aria-hidden="true">
      <div className="commerce-browser">
        <div className="commerce-browser-top"><i /><i /><i /><span>industrial-commerce-web.vercel.app</span></div>
        <div className="commerce-screenshot"><Image src="/projects/industrial-commerce.png" alt="" fill sizes="(max-width: 680px) 88vw, 1040px" priority /></div>
      </div>
      <div className="commerce-live"><i /> Demo pública</div>
    </div>
  )
  if (color === "lime") return (
    <div className="project-art art-lime" aria-hidden="true">
      <div className="dashboard-shell">
        <div className="dashboard-side"><span /><span /><span /></div>
        <div className="dashboard-main">
          <div className="dash-head"><i /><i /></div>
          <div className="dash-metric"><b>98.4%</b><span>operación activa</span></div>
          <div className="dash-chart">{[35,58,42,78,64,92,72].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
        </div>
      </div>
      <div className="float-chip chip-one">LIVE</div><div className="float-chip chip-two">+24%</div>
    </div>
  )
  if (color === "violet") return (
    <div className="project-art art-violet" aria-hidden="true">
      <div className="vision-grid" /><div className="scan-box"><span /><span /><span /><span /></div>
      <div className="scan-line" /><div className="vision-label">OBJECT DETECTED · 99.8%</div><div className="vision-orb" />
    </div>
  )
  return (
    <div className="project-art art-orange" aria-hidden="true">
      <div className="browser-card">
        <div className="browser-top"><i /><i /><i /><span /></div>
        <div className="browser-content"><div className="browser-copy"><i /><i /><i /></div><div className="browser-photo"><Asterisk /></div></div>
      </div>
      <div className="orange-ring ring-a" /><div className="orange-ring ring-b" />
    </div>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const smoothX = useSpring(rotateX, { stiffness: 180, damping: 22 })
  const smoothY = useSpring(rotateY, { stiffness: 180, damping: 22 })
  const reduced = useReducedMotion()
  function tilt(event: MouseEvent<HTMLElement>) {
    if (reduced) return
    const rect = event.currentTarget.getBoundingClientRect()
    rotateY.set(((event.clientX - rect.left) / rect.width - 0.5) * 7)
    rotateX.set(((event.clientY - rect.top) / rect.height - 0.5) * -7)
  }
  return (
    <m.article className={`project-card project-${project.color}`} style={{ rotateX: smoothX, rotateY: smoothY, transformPerspective: 1200 }}
      onMouseMove={tilt} onMouseLeave={() => { rotateX.set(0); rotateY.set(0) }}
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}>
      <a className="project-primary-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.action}: ${project.title}`}>
        <div className="project-meta"><span>{project.number}</span><span>{project.label}</span><ArrowUpRight /></div>
        <ProjectVisual color={project.color} />
        <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="project-copy-footer"><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-action">{project.action} <ArrowUpRight /></span></div></div>
      </a>
      {project.adminHref && <a className="project-admin-link" href={project.adminHref} target="_blank" rel="noreferrer"><span><Layers3 /> Explorar panel administrador</span><ArrowUpRight /></a>}
    </m.article>
  )
}

function CursorGlow({ mouseX, mouseY }: { mouseX: MotionValue<number>; mouseY: MotionValue<number> }) {
  return <m.div className="cursor-glow" style={{ x: useSpring(mouseX, { stiffness: 55, damping: 18 }), y: useSpring(mouseY, { stiffness: 55, damping: 18 }) }} aria-hidden="true" />
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const mouseX = useMotionValue(-400)
  const mouseY = useMotionValue(-400)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0.15])

  return (
    <LazyMotion features={domAnimation}>
      <div className="site-shell" onMouseMove={event => { mouseX.set(event.clientX - 250); mouseY.set(event.clientY - 250) }}>
        <m.div className="scroll-progress" style={{ scaleX }} />
        <CursorGlow mouseX={mouseX} mouseY={mouseY} /><div className="noise" aria-hidden="true" />

        <header className="topbar-wrap">
          <m.nav className="topbar" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }} aria-label="Navegación principal">
            <a className="brand" href="#inicio" aria-label="Ir al inicio"><span>AT</span><i /></a>
            <div className="nav-links"><a href="#sobre-mi">Sobre mí</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a></div>
            <a className="nav-status" href="mailto:andrestorresdev@gmail.com"><i /> Disponible</a>
            <button className="menu-button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
          </m.nav>
          {menuOpen && <m.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            {[["Sobre mí", "#sobre-mi"], ["Proyectos", "#proyectos"], ["Contacto", "#contacto"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowDownRight /></a>)}
          </m.div>}
        </header>

        <main>
          <section id="inicio" className="hero-section">
            <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
            <m.div className="hero-content" style={{ y: heroY, opacity: heroOpacity }}>
              <m.div className="hero-kicker" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .6 }}>
                <Sparkles /> Portfolio / 2026 <span>Concepción, CL</span>
              </m.div>
              <h1 className="hero-title" aria-label="Desarrollo ideas que se sienten vivas">
                <m.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .1, duration: .9, ease }}>Desarrollo ideas</m.span>
                <m.span className="title-shift" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .2, duration: .9, ease }}>que se sienten <i>vivas.</i></m.span>
              </h1>
              <m.div className="hero-bottom" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55, duration: .7 }}>
                <div className="hero-intro"><span className="intro-line" /><p>Soy <strong>Andrés Torres</strong>, desarrollador full-stack. Creo productos web rápidos, útiles y con una identidad que no pasa desapercibida.</p></div>
                <div className="hero-actions">
                  <MagneticLink href="#proyectos" className="button button-primary">Explorar proyectos <ArrowDownRight /></MagneticLink>
                  <MagneticLink href="mailto:andrestorresdev@gmail.com" className="button button-ghost">Hablemos <span>↗</span></MagneticLink>
                </div>
              </m.div>
            </m.div>
            <m.div className="hero-sticker" initial={{ opacity: 0, scale: .5, rotate: -25 }} animate={{ opacity: 1, scale: 1, rotate: 8 }} transition={{ delay: .65, type: "spring", stiffness: 160, damping: 14 }} aria-hidden="true"><MousePointer2 /><span>BUILT WITH<br />CURIOSITY</span></m.div>
          </section>

          <div className="ticker" aria-label="Tecnologías principales"><div className="ticker-track">{[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}>{item}<Asterisk /></span>)}</div></div>

          <section id="sobre-mi" className="section about-section">
            <m.div className="section-heading" {...reveal}><span className="section-index">01 / SOBRE MÍ</span><h2>Del problema a una experiencia <em>clara.</em></h2></m.div>
            <div className="about-grid">
              <m.article className="bento bento-story" {...reveal}>
                <div className="bento-icon"><Braces /></div>
                <p className="large-copy">Ingeniería, diseño y atención al detalle para construir software que <span>resuelve de verdad.</span></p>
                <div className="story-footer"><p>Egresado de Ingeniería de Ejecución en Computación e Informática de la Universidad del Bío-Bío. Me especializo en aplicaciones web end-to-end, desde una interfaz pulida hasta APIs y despliegues confiables.</p><span>ANDRÉS<br />TORRES</span></div>
              </m.article>
              <m.article className="bento bento-code" {...reveal} transition={{ ...reveal.transition, delay: .08 }}>
                <div className="code-top"><span>andres.ts</span><i /><i /><i /></div>
                <div className="code-lines" aria-hidden="true"><p><b>const</b> developer = &#123;</p><p>&nbsp;&nbsp;mindset: <i>&quot;curious&quot;</i>,</p><p>&nbsp;&nbsp;focus: <i>&quot;useful products&quot;</i>,</p><p>&nbsp;&nbsp;detail: <i>true</i>,</p><p>&nbsp;&nbsp;learning: <i>&quot;always&quot;</i></p><p>&#125;</p></div>
                <div className="code-status"><i /> ready to build</div>
              </m.article>
              <m.article className="bento bento-skill skill-yellow" {...reveal}><Layers3 /><div><span>01</span><h3>Full-stack</h3><p>Interfaces, lógica, datos y despliegue conectados como un solo producto.</p></div></m.article>
              <m.article className="bento bento-skill skill-pink" {...reveal} transition={{ ...reveal.transition, delay: .08 }}><Sparkles /><div><span>02</span><h3>UI con intención</h3><p>Diseño funcional, accesible y con movimiento que guía en lugar de distraer.</p></div></m.article>
              <m.article className="bento bento-skill skill-blue" {...reveal} transition={{ ...reveal.transition, delay: .16 }}><Zap /><div><span>03</span><h3>Performance</h3><p>Código mantenible y experiencias rápidas en cualquier dispositivo.</p></div></m.article>
            </div>
          </section>

          <section id="proyectos" className="section projects-section">
            <m.div className="section-heading projects-heading" {...reveal}><span className="section-index">02 / TRABAJO SELECCIONADO</span><h2>Proyectos con código,<br /><em>contexto y propósito.</em></h2><a href="https://github.com/sdraen" target="_blank" rel="noreferrer">Ver GitHub <ArrowUpRight /></a></m.div>
            <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
          </section>

          <section className="section process-section">
            <m.div className="section-heading" {...reveal}><span className="section-index">03 / CÓMO TRABAJO</span><h2>Simple, colaborativo<br />y <em>sin humo.</em></h2></m.div>
            <div className="process-list">{[
              ["01", "Entender", "Primero aclaro el problema, el usuario y la señal concreta de éxito.", "DISCOVER"],
              ["02", "Diseñar", "Convierto requisitos en flujos, jerarquía visual y una dirección clara.", "DEFINE"],
              ["03", "Construir", "Desarrollo, pruebo, optimizo y preparo una entrega que pueda evolucionar.", "DELIVER"],
            ].map(([number, title, description, label], index) => <m.article key={title} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .65, delay: index * .08, ease }}><span>{number}</span><h3>{title}</h3><p>{description}</p><i>{label}</i><ArrowUpRight /></m.article>)}</div>
          </section>

          <section id="contacto" className="contact-section">
            <div className="contact-orbit orbit-a" aria-hidden="true" /><div className="contact-orbit orbit-b" aria-hidden="true" />
            <m.div {...reveal} className="contact-inner"><span className="contact-kicker"><i /> DISPONIBLE PARA NUEVOS DESAFÍOS</span><h2>¿Creamos algo<br /><em>extraordinario?</em></h2><p>Cuéntame tu idea, desafío o proyecto. Estoy a un mensaje de distancia.</p><MagneticLink href="mailto:andrestorresdev@gmail.com" className="contact-button"><span>Escríbeme</span><Mail /></MagneticLink></m.div>
            <div className="contact-footer"><span><MapPin /> Concepción, Chile</span><span>© {new Date().getFullYear()} Andrés Torres</span><div><a href="https://github.com/sdraen" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-torres-castro-016587327/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:andrestorresdev@gmail.com" aria-label="Email"><Mail /></a></div></div>
          </section>
        </main>
      </div>
    </LazyMotion>
  )
}
