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
import { ContactForm } from "@/components/contact-form"
import { DocumentLanguage } from "@/components/document-language"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  caseStudyHref, homeCopy, homeSectionHref, type HomeProject, type Locale,
} from "@/lib/i18n"

const stack = ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "EXPRESS", "POSTGRESQL", "SUPABASE", "DOCKER", "GIT"]
const ease = [0.16, 1, 0.3, 1] as const
const reveal = {
  initial: { opacity: 0, y: 34 }, whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, transition: { duration: 0.75, ease },
}

function MagneticLink({ href, children, className = "", external = false, download }: {
  href: string; children: ReactNode; className?: string; external?: boolean; download?: string
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
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(download ? { download } : {})}>
      {children}
    </m.a>
  )
}

function ProjectVisual({ color, publicDemo, activeOperation }: {
  color: HomeProject["color"]
  publicDemo: string
  activeOperation: string
}) {
  if (color === "cyan") return (
    <div className="project-art art-cyan" aria-hidden="true">
      <div className="commerce-browser">
        <div className="commerce-browser-top"><i /><i /><i /><span>industrial-commerce-web.vercel.app</span></div>
        <div className="commerce-screenshot"><Image src="/projects/industrial-commerce.png" alt="" fill sizes="(max-width: 680px) 88vw, 1040px" priority /></div>
      </div>
      <div className="commerce-live"><i /> {publicDemo}</div>
    </div>
  )
  if (color === "lime") return (
    <div className="project-art art-lime" aria-hidden="true">
      <div className="dashboard-shell">
        <div className="dashboard-side"><span /><span /><span /></div>
        <div className="dashboard-main">
          <div className="dash-head"><i /><i /></div>
          <div className="dash-metric"><b>98.4%</b><span>{activeOperation}</span></div>
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

function ProjectCard({ project, index, locale, viewCase, exploreAdmin, publicDemo, activeOperation }: {
  project: HomeProject
  index: number
  locale: Locale
  viewCase: string
  exploreAdmin: string
  publicDemo: string
  activeOperation: string
}) {
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
  const primaryHref = project.caseSlug ? caseStudyHref(locale, project.caseSlug) : project.href
  const primaryAction = project.caseSlug ? viewCase : project.action
  return (
    <m.article className={`project-card project-${project.color}`} style={{ rotateX: smoothX, rotateY: smoothY, transformPerspective: 1200 }}
      onMouseMove={tilt} onMouseLeave={() => { rotateX.set(0); rotateY.set(0) }}
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}>
      <a className="project-primary-link" href={primaryHref}
        {...(!project.caseSlug ? { target: "_blank", rel: "noreferrer" } : {})}
        aria-label={`${primaryAction}: ${project.title}`}>
        <div className="project-meta"><span>{project.number}</span><span>{project.label}</span><ArrowUpRight /></div>
        <ProjectVisual color={project.color} publicDemo={publicDemo} activeOperation={activeOperation} />
        <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="project-copy-footer"><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-action">{primaryAction} <ArrowUpRight /></span></div></div>
      </a>
      {project.adminHref && <a className="project-admin-link" href={project.adminHref} target="_blank" rel="noreferrer"><span><Layers3 /> {exploreAdmin}</span><ArrowUpRight /></a>}
    </m.article>
  )
}

function CursorGlow({ mouseX, mouseY }: { mouseX: MotionValue<number>; mouseY: MotionValue<number> }) {
  return <m.div className="cursor-glow" style={{ x: useSpring(mouseX, { stiffness: 55, damping: 18 }), y: useSpring(mouseY, { stiffness: 55, damping: 18 }) }} aria-hidden="true" />
}

export function Portfolio({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const content = homeCopy[locale]
  const cvHref = locale === "es" ? "/cv-andres-torres.pdf" : "/cv-andres-torres-en.pdf"
  const cvFilename = locale === "es" ? "Andres-Torres-CV.pdf" : "Andres-Torres-CV-EN.pdf"
  const mouseX = useMotionValue(-400)
  const mouseY = useMotionValue(-400)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 })
  const heroY = useTransform(scrollYProgress, [0, 0.18], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0.15])

  return (
    <LazyMotion features={domAnimation}>
      <div className="site-shell" data-locale={locale} onMouseMove={event => { mouseX.set(event.clientX - 250); mouseY.set(event.clientY - 250) }}>
        <DocumentLanguage locale={locale} />
        <m.div className="scroll-progress" style={{ scaleX }} />
        <CursorGlow mouseX={mouseX} mouseY={mouseY} /><div className="noise" aria-hidden="true" />

        <header className="topbar-wrap">
          <m.nav className="topbar" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease }} aria-label={content.nav.aria}>
            <a className="brand" href={homeSectionHref(locale, "inicio")} aria-label={content.nav.home}><span>AT</span><i /></a>
            <div className="nav-links"><a href="#sobre-mi">{content.nav.about}</a><a href="#proyectos">{content.nav.projects}</a><a href={cvHref} download={cvFilename}>{content.nav.cv}</a><a href="#contacto">{content.nav.contact}</a></div>
            <div className="topbar-actions">
              <a className="nav-status" href="#contacto"><i /> {content.nav.available}</a>
              <LanguageSwitcher locale={locale} label={content.languageLabel} />
              <ThemeToggle locale={locale} />
              <button className="menu-button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? content.nav.closeMenu : content.nav.openMenu} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
            </div>
          </m.nav>
          {menuOpen && <m.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
            {[[content.nav.about, "#sobre-mi"], [content.nav.projects, "#proyectos"], [content.hero.downloadCv, cvHref], [content.nav.contact, "#contacto"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowDownRight /></a>)}
          </m.div>}
        </header>

        <main>
          <section id="inicio" className="hero-section">
            <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
            <m.div className="hero-content" style={{ y: heroY, opacity: heroOpacity }}>
              <m.div className="hero-kicker" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .6 }}>
                <Sparkles /> {content.hero.kicker} <span>{content.hero.location}</span>
              </m.div>
              <h1 className="hero-title" aria-label={content.hero.aria}>
                <m.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .1, duration: .9, ease }}>{content.hero.line1}</m.span>
                <m.span className="title-shift" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: .2, duration: .9, ease }}>{content.hero.line2} <i>{content.hero.emphasis}</i></m.span>
              </h1>
              <m.div className="hero-bottom" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55, duration: .7 }}>
                <div className="hero-intro"><span className="intro-line" /><p>{content.hero.introBefore} <strong>Andrés Torres</strong>, {content.hero.introAfter}</p></div>
                <div className="hero-actions">
                  <MagneticLink href="#proyectos" className="button button-primary">{content.hero.explore} <ArrowDownRight /></MagneticLink>
                  <MagneticLink href={cvHref} download={cvFilename} className="button button-ghost">{content.hero.downloadCv} <span>↓</span></MagneticLink>
                </div>
              </m.div>
            </m.div>
            <m.div className="hero-sticker" initial={{ opacity: 0, scale: .5, rotate: -25 }} animate={{ opacity: 1, scale: 1, rotate: 8 }} transition={{ delay: .65, type: "spring", stiffness: 160, damping: 14 }} aria-hidden="true"><MousePointer2 /><span>{content.hero.sticker[0]}<br />{content.hero.sticker[1]}</span></m.div>
          </section>

          <div className="ticker" aria-label={content.tickerAria}><div className="ticker-track">{[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}>{item}<Asterisk /></span>)}</div></div>

          <section id="sobre-mi" className="section about-section">
            <m.div className="section-heading" {...reveal}><span className="section-index">{content.about.eyebrow}</span><h2>{content.about.title} <em>{content.about.emphasis}</em></h2></m.div>
            <div className="about-grid">
              <m.article className="bento bento-story" {...reveal}>
                <div className="bento-icon"><Braces /></div>
                <p className="large-copy">{content.about.large} <span>{content.about.largeEmphasis}</span></p>
                <div className="story-footer"><p>{content.about.bio}</p><span>ANDRÉS<br />TORRES</span></div>
              </m.article>
              <m.article className="bento bento-code" {...reveal} transition={{ ...reveal.transition, delay: .08 }}>
                <div className="code-top"><span>andres.ts</span><i /><i /><i /></div>
                <div className="code-lines" aria-hidden="true"><p><b>const</b> developer = &#123;</p><p>&nbsp;&nbsp;mindset: <i>&quot;{content.about.codeMindset}&quot;</i>,</p><p>&nbsp;&nbsp;focus: <i>&quot;{content.about.codeFocus}&quot;</i>,</p><p>&nbsp;&nbsp;detail: <i>true</i>,</p><p>&nbsp;&nbsp;learning: <i>&quot;{content.about.codeLearning}&quot;</i></p><p>&#125;</p></div>
                <div className="code-status"><i /> {content.about.codeStatus}</div>
              </m.article>
              <m.article className="bento bento-skill skill-yellow" {...reveal}><Layers3 /><div><span>{content.about.skills[0].number}</span><h3>{content.about.skills[0].title}</h3><p>{content.about.skills[0].description}</p></div></m.article>
              <m.article className="bento bento-skill skill-pink" {...reveal} transition={{ ...reveal.transition, delay: .08 }}><Sparkles /><div><span>{content.about.skills[1].number}</span><h3>{content.about.skills[1].title}</h3><p>{content.about.skills[1].description}</p></div></m.article>
              <m.article className="bento bento-skill skill-blue" {...reveal} transition={{ ...reveal.transition, delay: .16 }}><Zap /><div><span>{content.about.skills[2].number}</span><h3>{content.about.skills[2].title}</h3><p>{content.about.skills[2].description}</p></div></m.article>
            </div>
          </section>

          <section id="proyectos" className="section projects-section">
            <m.div className="section-heading projects-heading" {...reveal}><span className="section-index">{content.work.eyebrow}</span><h2>{content.work.title}<br /><em>{content.work.emphasis}</em></h2><a href="https://github.com/sdraen" target="_blank" rel="noreferrer">{content.work.github} <ArrowUpRight /></a></m.div>
            <div className="projects-grid">{content.work.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} locale={locale} viewCase={content.work.viewCase} exploreAdmin={content.work.exploreAdmin} publicDemo={content.work.publicDemo} activeOperation={content.work.activeOperation} />)}</div>
          </section>

          <section className="section process-section">
            <m.div className="section-heading" {...reveal}><span className="section-index">{content.process.eyebrow}</span><h2>{content.process.title}<br />{content.process.connector} <em>{content.process.emphasis}</em></h2></m.div>
            <div className="process-list">{content.process.items.map((item, index) => <m.article key={item.title} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .65, delay: index * .08, ease }}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p><i>{item.label}</i><ArrowUpRight /></m.article>)}</div>
          </section>

          <section id="contacto" className="contact-section">
            <div className="contact-orbit orbit-a" aria-hidden="true" /><div className="contact-orbit orbit-b" aria-hidden="true" />
            <m.div {...reveal} className="contact-inner contact-layout">
              <div className="contact-copy">
                <span className="contact-kicker"><i /> {content.contact.kicker}</span>
                <h2>{content.contact.title}<br /><em>{content.contact.emphasis}</em></h2>
                <p>{content.contact.body}</p>
                <a className="contact-email" href="mailto:andrestorresdev@gmail.com"><Mail /> {content.contact.email}</a>
              </div>
              <ContactForm copy={content.contact.form} />
            </m.div>
            <div className="contact-footer"><span><MapPin /> {content.contact.location}</span><span>© {new Date().getFullYear()} Andrés Torres</span><div><a href="https://github.com/sdraen" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-torres-castro-016587327/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="mailto:andrestorresdev@gmail.com" aria-label="Email"><Mail /></a></div></div>
          </section>
        </main>
      </div>
    </LazyMotion>
  )
}
