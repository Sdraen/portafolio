import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.andrestorres.cl/sitemap.xml",
    host: "https://www.andrestorres.cl",
  }
}
