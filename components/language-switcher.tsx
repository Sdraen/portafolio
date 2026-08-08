import { ChevronDown, Languages } from "lucide-react"
import Link from "next/link"
import { htmlLanguages, languageNames, locales, localizedPath, type Locale } from "@/lib/i18n"

type LanguageSwitcherProps = {
  locale: Locale
  path?: string
  label: string
}

export function LanguageSwitcher({ locale, path = "", label }: LanguageSwitcherProps) {
  return (
    <details className="language-switcher">
      <summary aria-label={label} title={label}>
        <Languages aria-hidden="true" />
        <span>{locale.toUpperCase()}</span>
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
            <span>{option.toUpperCase()}</span>
            {languageNames[option]}
          </Link>
        ))}
      </div>
    </details>
  )
}
