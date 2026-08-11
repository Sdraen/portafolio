import { ArrowLeft, ArrowUpRight, Check, Github, Layers3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DocumentLanguage } from "@/components/document-language"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { caseUi, type CaseStudyContent } from "@/lib/case-studies"
import {
  homeCopy, homeSectionHref, type Locale, type ProjectSlug,
} from "@/lib/i18n"

export function ProjectCaseStudy({ locale, slug, content }: {
  locale: Locale
  slug: ProjectSlug
  content: CaseStudyContent
}) {
  const ui = caseUi[locale]
  const {
    eyebrow, title, summary, accent, image, imageAlt = "", links, highlights,
    challenge, solution, features, stack, role, context, outcome,
  } = content

  return (
    <main className={`case-page case-${accent}`}>
      <DocumentLanguage locale={locale} />
      <nav className="case-nav" aria-label={ui.navAria}>
        <Link href={homeSectionHref(locale, "proyectos")}><ArrowLeft /> {ui.back}</Link>
        <div className="case-nav-actions">
          <LanguageSwitcher locale={locale} path={`proyectos/${slug}`} label={homeCopy[locale].languageLabel} />
          <ThemeToggle locale={locale} />
          <Link href={homeSectionHref(locale, "contacto")}>{ui.available} <i /></Link>
        </div>
      </nav>

      <header className="case-hero">
        <div className="case-eyebrow">{ui.caseStudy} · {eyebrow}</div>
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

      <section className="case-visual" aria-label={`${ui.preview} ${title}`}>
        {image ? (
          <div className="case-browser">
            <div className="case-browser-bar"><i /><i /><i /><span>{links[0]?.href.replace("https://", "")}</span></div>
            <div className="case-browser-image"><Image src={image} alt={imageAlt} fill priority sizes="(max-width: 900px) 94vw, 1200px" /></div>
          </div>
        ) : (
          <div className="case-architecture" aria-hidden="true">
            <div><span>{ui.interface}</span><b>React + TypeScript</b></div>
            <ArrowUpRight />
            <div><span>API REST</span><b>Node.js + Express</b></div>
            <ArrowUpRight />
            <div><span>{ui.data}</span><b>PostgreSQL + Supabase</b></div>
          </div>
        )}
      </section>

      <section className="case-highlights" aria-label={ui.highlights}>
        {highlights.map(item => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}
      </section>

      <section className="case-content">
        <aside>
          <div><span>{ui.role}</span><p>{role}</p></div>
          <div><span>{ui.context}</span><p>{context}</p></div>
          <div><span>{ui.stack}</span><div className="case-tags">{stack.map(item => <b key={item}>{item}</b>)}</div></div>
        </aside>
        <div className="case-story">
          <article>
            <span>{ui.challengeLabel}</span>
            <h2>{ui.challengeTitle}</h2>
            <p>{challenge}</p>
          </article>
          <article>
            <span>{ui.solutionLabel}</span>
            <h2>{ui.solutionTitle}</h2>
            <p>{solution}</p>
            <ul>{features.map(feature => <li key={feature}><Check />{feature}</li>)}</ul>
          </article>
          <article>
            <span>{ui.resultLabel}</span>
            <h2>{ui.resultTitle}</h2>
            <p>{outcome}</p>
          </article>
        </div>
      </section>

      <section className="case-contact">
        <Layers3 />
        <span>{ui.similarChallenge}</span>
        <h2>{ui.ctaLine1}<br />{ui.ctaLine2}</h2>
        <Link href={homeSectionHref(locale, "contacto")}>{ui.write} <ArrowUpRight /></Link>
      </section>
    </main>
  )
}
