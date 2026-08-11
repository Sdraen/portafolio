"use client"

import Script from "next/script"
import { useEffect, useRef, useState } from "react"

type TurnstileTheme = "light" | "dark"

type TurnstileApi = {
  render: (container: HTMLElement, options: {
    sitekey: string
    action: string
    theme: TurnstileTheme
    size: "flexible"
    callback: (token: string) => void
    "expired-callback": () => void
    "error-callback": () => void
  }) => string
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

export function TurnstileWidget({
  siteKey,
  theme,
  resetKey,
  onVerify,
  onExpire,
  onError,
}: {
  siteKey: string
  theme: TurnstileTheme
  resetKey: number
  onVerify: (token: string) => void
  onExpire: () => void
  onError: () => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const handlersRef = useRef({ onVerify, onExpire, onError })
  const [scriptReady, setScriptReady] = useState(false)

  useEffect(() => {
    handlersRef.current = { onVerify, onExpire, onError }
  }, [onVerify, onExpire, onError])

  useEffect(() => {
    if (!scriptReady || !containerRef.current || !window.turnstile) return

    const widgetId = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "contact",
      theme,
      size: "flexible",
      callback: token => handlersRef.current.onVerify(token),
      "expired-callback": () => handlersRef.current.onExpire(),
      "error-callback": () => handlersRef.current.onError(),
    })

    return () => window.turnstile?.remove(widgetId)
  }, [resetKey, scriptReady, siteKey, theme])

  return (
    <>
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} className="turnstile-widget" />
    </>
  )
}
