import type { MetadataRoute } from "next"
import { caseStudyHref, locales, localizedPath, projectSlugs } from "@/lib/i18n"

const baseUrl = "https://www.andrestorres.cl"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return locales.flatMap(locale => [
    {
      url: `${baseUrl}${localizedPath(locale)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "es" ? 1 : 0.9,
    },
    ...projectSlugs.map(slug => ({
      url: `${baseUrl}${caseStudyHref(locale, slug)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ])
}
