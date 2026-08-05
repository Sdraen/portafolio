"use client"

import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react"
import { useState, type FormEvent } from "react"

type FormStatus = "idle" | "sending" | "success" | "error"

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

export function ContactForm() {
  const [inquiryType, setInquiryType] = useState("")
  const [status, setStatus] = useState<FormStatus>("idle")

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!accessKey || status === "sending") return

    const form = event.currentTarget
    const formData = new FormData(form)
    setStatus("sending")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || !result.success) throw new Error(result.message || "No se pudo enviar el mensaje")

      form.reset()
      setInquiryType("")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className="proposal-form" id="contacto-form" onSubmit={submitForm}>
      <input type="hidden" name="access_key" value={accessKey ?? ""} />
      <input type="hidden" name="subject" value="Nuevo contacto desde andrestorres.cl" />
      <input type="hidden" name="from_name" value="Portafolio de Andrés Torres" />
      <input className="contact-honeypot" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-heading">
        <span>CUÉNTAME QUÉ NECESITAS</span>
        <p>Responderé directamente a tu correo.</p>
      </div>

      <div className="form-grid">
        <label>
          <span>Nombre</span>
          <input type="text" name="name" placeholder="Tu nombre" autoComplete="name" required />
        </label>
        <label>
          <span>Correo</span>
          <input type="email" name="email" placeholder="tu@correo.cl" autoComplete="email" required />
        </label>
        <label>
          <span>Motivo</span>
          <select name="inquiry_type" value={inquiryType} onChange={event => setInquiryType(event.target.value)} required>
            <option value="" disabled>Selecciona una opción</option>
            <option value="Oportunidad laboral">Oportunidad laboral</option>
            <option value="Proyecto de software">Proyecto de software</option>
            <option value="Colaboración">Colaboración</option>
            <option value="Otro">Otro</option>
          </select>
        </label>
        <label>
          <span>Empresa <i>opcional</i></span>
          <input type="text" name="company" placeholder="Empresa o equipo" autoComplete="organization" />
        </label>

        {inquiryType === "Proyecto de software" && (
          <>
            <label className="conditional-field">
              <span>Presupuesto estimado</span>
              <select name="budget" defaultValue="">
                <option value="" disabled>Selecciona un rango</option>
                <option value="Por definir">Por definir</option>
                <option value="Menos de CLP 500.000">Menos de $500.000 CLP</option>
                <option value="CLP 500.000 a 1.500.000">$500.000–$1.500.000 CLP</option>
                <option value="Más de CLP 1.500.000">Más de $1.500.000 CLP</option>
              </select>
            </label>
            <label className="conditional-field">
              <span>Plazo aproximado</span>
              <select name="timeline" defaultValue="">
                <option value="" disabled>Selecciona un plazo</option>
                <option value="Flexible">Flexible</option>
                <option value="Menos de 1 mes">Menos de 1 mes</option>
                <option value="1 a 3 meses">1–3 meses</option>
                <option value="Más de 3 meses">Más de 3 meses</option>
              </select>
            </label>
          </>
        )}

        <label className="form-message">
          <span>Mensaje</span>
          <textarea name="message" placeholder="Háblame del rol, proyecto o desafío…" rows={5} minLength={20} required />
        </label>
      </div>

      <div className="form-footer">
        <p>Tus datos se usarán únicamente para responder este contacto.</p>
        <button type="submit" disabled={!accessKey || status === "sending"}>
          {status === "sending" ? <LoaderCircle className="form-spinner" /> : <Send />}
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>

      {status === "success" && <div className="form-notice form-success" role="status"><CheckCircle2 /> Mensaje enviado. Te responderé pronto.</div>}
      {status === "error" && <div className="form-notice form-error" role="alert"><AlertCircle /> No se pudo enviar. Intenta nuevamente o escríbeme por correo.</div>}
      {!accessKey && <div className="form-notice form-error" role="alert"><AlertCircle /> El formulario todavía no está configurado.</div>}
    </form>
  )
}
