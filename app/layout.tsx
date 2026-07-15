import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.andrestorres.cl"),
  title: "Andrés Torres — Full-stack Developer",
  description: "Portfolio de Andrés Torres, desarrollador full-stack especializado en experiencias web modernas con React, Next.js, TypeScript y Node.js.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/",
    siteName: "Andrés Torres",
    title: "Andrés Torres — Full-stack Developer",
    description: "Desarrollo productos web rápidos, útiles y con una identidad que no pasa desapercibida.",
  },
  twitter: {
    card: "summary",
    title: "Andrés Torres — Full-stack Developer",
    description: "Desarrollo productos web rápidos, útiles y con una identidad que no pasa desapercibida.",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}><body>{children}</body></html>
}
