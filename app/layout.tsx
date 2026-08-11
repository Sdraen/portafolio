import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import { languageAlternates } from "@/lib/i18n"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.andrestorres.cl"),
  title: {
    default: "Andrés Torres | Desarrollador Full-Stack en Chile",
    template: "%s | Andrés Torres",
  },
  description: "Portafolio de Andrés Torres, desarrollador full-stack en Chile. Proyectos web con React, Next.js, TypeScript, Node.js y PostgreSQL.",
  alternates: { canonical: "/", languages: languageAlternates() },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "Andrés Torres",
    title: "Andrés Torres | Desarrollador Full-Stack en Chile",
    description: "Aplicaciones web end-to-end: interfaces, APIs, datos y despliegue.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Andrés Torres, desarrollador full-stack en Chile" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Torres | Desarrollador Full-Stack en Chile",
    description: "Aplicaciones web end-to-end: interfaces, APIs, datos y despliegue.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Andrés Torres, desarrollador full-stack en Chile" }],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Andrés Torres",
  url: "https://www.andrestorres.cl",
  image: "https://www.andrestorres.cl/android-chrome-512x512.png",
  jobTitle: "Desarrollador Full-Stack",
  email: "mailto:andrestorresdev@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Concepción",
    addressCountry: "CL",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad del Bío-Bío",
  },
  sameAs: [
    "https://github.com/sdraen",
    "https://www.linkedin.com/in/andr%C3%A9s-felipe-torres-castro-016587327/",
  ],
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Docker"],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
          />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
