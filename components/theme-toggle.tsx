"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import type { Locale } from "@/lib/i18n"

const labels: Record<Locale, { dark: string; light: string }> = {
  es: { dark: "Cambiar a modo oscuro", light: "Cambiar a modo claro" },
  en: { dark: "Switch to dark mode", light: "Switch to light mode" },
  pt: { dark: "Mudar para o modo escuro", light: "Mudar para o modo claro" },
  fr: { dark: "Passer au mode sombre", light: "Passer au mode clair" },
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"
  const label = isDark ? labels[locale].light : labels[locale].dark

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      disabled={!mounted}
    >
      <span className="theme-toggle-icons" aria-hidden="true">
        <Sun className="theme-icon-sun" />
        <Moon className="theme-icon-moon" />
      </span>
    </button>
  )
}
