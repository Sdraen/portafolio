import { ArrowLeft, ArrowUpRight, Check, Github, Layers3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ProjectLink = {
  label: string
  href: string
  icon?: "github" | "demo"
}

type ProjectCaseStudyProps = {
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
}

export function ProjectCaseStudy({
  eyebrow,
  title,
  summary,
  accent,
  image,
  imageAlt = "",
  links,
  highlights,
  challenge,
  solution,
  features,
  stack,
  role,
  context,
  outcome,
}: ProjectCaseStudyProps) {
  return (
    <main className={`case-page case-${accent}`}>
      <nav className="case-nav" aria-label="Navegación del proyecto">
        <Link href="/#proyectos"><ArrowLeft /> Volver al portafolio</Link>
        <Link href="/#contacto">Disponible para oportunidades <i /></Link>
      </nav>

      <header className="case-hero">
        <div className="case-eyebrow">CASO DE ESTUDIO · {eyebrow}</div>
        <h1>{title}</h1>
        <div className="case-hero-bottom">
          <p>{summary}</p>
          <div className="case-actions">
            {links.map((link, index) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className={index === 0 ? "case-button case-button-primary" : "case-button"}>
                {link.icon === "github" ? <Github /> : <ArrowUpRight />}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="case-visual" aria-label={`Vista de ${title}`}>
        {image ? (
          <div className="case-browser">
            <div className="case-browser-bar"><i /><i /><i /><span>{links[0]?.href.replace("https://", "")}</span></div>
            <div className="case-browser-image"><Image src={image} alt={imageAlt} fill priority sizes="(max-width: 900px) 94vw, 1200px" /></div>
          </div>
        ) : (
          <div className="case-architecture" aria-hidden="true">
            <div><span>INTERFAZ</span><b>React + TypeScript</b></div>
            <ArrowUpRight />
            <div><span>API REST</span><b>Node.js + Express</b></div>
            <ArrowUpRight />
            <div><span>DATOS</span><b>PostgreSQL + Supabase</b></div>
          </div>
        )}
      </section>

      <section className="case-highlights" aria-label="Aspectos destacados">
        {highlights.map(item => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}
      </section>

      <section className="case-content">
        <aside>
          <div><span>ROL</span><p>{role}</p></div>
          <div><span>CONTEXTO</span><p>{context}</p></div>
          <div><span>STACK</span><div className="case-tags">{stack.map(item => <b key={item}>{item}</b>)}</div></div>
        </aside>
        <div className="case-story">
          <article>
            <span>01 / EL DESAFÍO</span>
            <h2>Entender antes de construir.</h2>
            <p>{challenge}</p>
          </article>
          <article>
            <span>02 / LA SOLUCIÓN</span>
            <h2>Un producto completo, no solo una interfaz.</h2>
            <p>{solution}</p>
            <ul>{features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul>
          </article>
          <article>
            <span>03 / EL RESULTADO</span>
            <h2>Una base útil y preparada para evolucionar.</h2>
            <p>{outcome}</p>
          </article>
        </div>
      </section>

      <section className="case-contact">
        <Layers3 />
        <span>¿TIENES UN DESAFÍO SIMILAR?</span>
        <h2>Conversemos sobre<br />tu próximo producto.</h2>
        <Link href="/#contacto">Escríbeme <ArrowUpRight /></Link>
      </section>
    </main>
  )
}
