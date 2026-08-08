"use client"

import { useEffect } from "react"
import { htmlLanguages, type Locale } from "@/lib/i18n"

export function DocumentLanguage({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = htmlLanguages[locale]
  }, [locale])

  return null
}
