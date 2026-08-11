interface Env {
  TURNSTILE_SECRET_KEY: string
  WEB3FORMS_ACCESS_KEY: string
  ALLOWED_ORIGINS: string
}

type TurnstileResult = {
  success: boolean
  hostname?: string
  action?: string
}

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify"
const WEB3FORMS_URL = "https://api.web3forms.com/submit"

function json(data: unknown, status: number, origin?: string) {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  })

  if (origin) {
    headers.set("Access-Control-Allow-Origin", origin)
    headers.set("Vary", "Origin")
  }

  return new Response(JSON.stringify(data), { status, headers })
}

function readText(formData: FormData, key: string, maxLength: number) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") ?? ""
    const allowedOrigins = new Set(env.ALLOWED_ORIGINS.split(",").map(value => value.trim()).filter(Boolean))
    const originAllowed = allowedOrigins.has(origin)

    if (request.method === "OPTIONS") {
      if (!originAllowed) return json({ success: false }, 403)
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
          "Vary": "Origin",
        },
      })
    }

    if (request.method !== "POST") return json({ success: false }, 405)
    if (!originAllowed) return json({ success: false }, 403)
    if (!env.TURNSTILE_SECRET_KEY || !env.WEB3FORMS_ACCESS_KEY) {
      return json({ success: false, code: "service_unavailable" }, 503, origin)
    }

    const contentLength = Number(request.headers.get("Content-Length") ?? 0)
    if (contentLength > 64_000) return json({ success: false, code: "invalid_form" }, 413, origin)

    let formData: FormData
    try {
      formData = await request.formData()
    } catch {
      return json({ success: false, code: "invalid_form" }, 400, origin)
    }

    if (formData.get("botcheck")) return json({ success: true }, 200, origin)

    const token = readText(formData, "cf-turnstile-response", 2_048)
    if (!token) return json({ success: false, code: "turnstile_failed" }, 400, origin)

    const verificationBody = new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      idempotency_key: crypto.randomUUID(),
    })
    const visitorIp = request.headers.get("CF-Connecting-IP")
    if (visitorIp) verificationBody.set("remoteip", visitorIp)

    let verification: TurnstileResult | null = null
    try {
      const verificationResponse = await fetch(TURNSTILE_VERIFY_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: verificationBody,
      })
      if (verificationResponse.ok) verification = await verificationResponse.json() as TurnstileResult
    } catch {
      verification = null
    }
    const requestHostname = new URL(origin).hostname

    if (!verification?.success || verification.action !== "contact" || verification.hostname !== requestHostname) {
      return json({ success: false, code: "turnstile_failed" }, 400, origin)
    }

    const name = readText(formData, "name", 100)
    const email = readText(formData, "email", 254)
    const message = readText(formData, "message", 5_000)
    const inquiryType = readText(formData, "inquiry_type", 40)

    if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 20 || !inquiryType) {
      return json({ success: false, code: "invalid_form" }, 400, origin)
    }

    const outbound = new FormData()
    outbound.set("access_key", env.WEB3FORMS_ACCESS_KEY)
    outbound.set("from_name", "Portafolio de Andrés Torres")
    outbound.set("subject", readText(formData, "subject", 160) || "Nuevo contacto desde andrestorres.cl")
    outbound.set("name", name)
    outbound.set("email", email)
    outbound.set("replyto", email)
    outbound.set("inquiry_type", inquiryType)
    outbound.set("message", message)

    for (const [key, maxLength] of [["company", 120], ["budget", 80], ["timeline", 80]] as const) {
      const value = readText(formData, key, maxLength)
      if (value) outbound.set(key, value)
    }

    const deliveryResponse = await fetch(WEB3FORMS_URL, { method: "POST", body: outbound })
    const delivery = await deliveryResponse.json().catch(() => null) as { success?: boolean } | null

    if (!deliveryResponse.ok || !delivery?.success) {
      return json({ success: false, code: "delivery_failed" }, 502, origin)
    }

    return json({ success: true }, 200, origin)
  },
}
