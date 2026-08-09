import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { htmlLanguages, languageNames, locales, localizedPath, type Locale } from "@/lib/i18n"

type LanguageSwitcherProps = {
  locale: Locale
  path?: string
  label: string
}

function LanguageFlag({ locale }: { locale: Locale }) {
  if (locale === "es") return (
    <svg className="language-flag" viewBox="0 0 28 20" aria-hidden="true">
      <path fill="#fff" d="M0 0h28v10H0z" /><path fill="#d52b1e" d="M0 10h28v10H0z" /><path fill="#0039a6" d="M0 0h10v10H0z" />
      <path fill="#fff" d="m5 2.2.7 1.9 2 .1-1.6 1.2.6 2L5 6.2 3.3 7.4l.6-2-1.6-1.2 2-.1z" />
    </svg>
  )

  if (locale === "en") return (
    <svg className="language-flag" viewBox="0 0 28 20" aria-hidden="true">
      <path fill="#fff" d="M0 0h28v20H0z" /><path stroke="#b22234" strokeWidth="2" strokeDasharray="2 2" d="M0 1h28M0 5h28M0 9h28M0 13h28M0 17h28" />
      <path fill="#3c3b6e" d="M0 0h12v10H0z" /><g fill="#fff"><circle cx="2.2" cy="2" r=".7" /><circle cx="6" cy="2" r=".7" /><circle cx="9.8" cy="2" r=".7" /><circle cx="4" cy="5" r=".7" /><circle cx="8" cy="5" r=".7" /><circle cx="2.2" cy="8" r=".7" /><circle cx="6" cy="8" r=".7" /><circle cx="9.8" cy="8" r=".7" /></g>
    </svg>
  )

  if (locale === "pt") return (
    <svg className="language-flag" viewBox="0 0 28 20" aria-hidden="true">
      <path fill="#009b3a" d="M0 0h28v20H0z" /><path fill="#ffdf00" d="m14 2.3 11 7.7-11 7.7L3 10z" /><circle cx="14" cy="10" r="4.3" fill="#002776" /><path fill="none" stroke="#fff" strokeWidth=".8" d="M9.9 9.2c3.1-1.3 6.2-.7 8.5 1.1" />
    </svg>
  )

  return (
    <svg className="language-flag" viewBox="0 0 28 20" aria-hidden="true">
      <path fill="#fff" d="M0 0h28v20H0z" /><path fill="#d80621" d="M0 0h6v20H0zM22 0h6v20h-6z" />
      <path fill="#d80621" d="m14 2.4 1.1 2.7 2.5-1.1-1 3 2.4.7-2.3 2 .9 1.2-3-.5.2 4.2h-1.6l.2-4.2-3 .5.9-1.2-2.3-2 2.4-.7-1-3 2.5 1.1z" />
    </svg>
  )
}

export function LanguageSwitcher({ locale, path = "", label }: LanguageSwitcherProps) {
  return (
    <details className="language-switcher">
      <summary aria-label={label} title={label}>
        <LanguageFlag locale={locale} />
        <span className="language-current-code">{locale.toUpperCase()}</span>
        <ChevronDown aria-hidden="true" />
      </summary>
      <div className="language-menu" aria-label={label}>
        {locales.map(option => (
          <Link
            key={option}
            href={localizedPath(option, path)}
            hrefLang={htmlLanguages[option]}
            lang={htmlLanguages[option]}
            aria-current={option === locale ? "page" : undefined}
          >
            <LanguageFlag locale={option} />
            <span className="language-code">{option.toUpperCase()}</span>
            <strong>{languageNames[option]}</strong>
          </Link>
        ))}
      </div>
    </details>
  )
}
