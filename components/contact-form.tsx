"use client"

import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react"
import { useState, type FormEvent } from "react"
import type { ContactFormCopy } from "@/lib/i18n"

type FormStatus = "idle" | "sending" | "success" | "error"

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

export function ContactForm({ copy }: { copy: ContactFormCopy }) {
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

      if (!response.ok || !result.success) throw new Error(result.message || copy.error)

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
      <input type="hidden" name="subject" value={copy.subject} />
      <input type="hidden" name="from_name" value="Portafolio de Andrés Torres" />
      <input className="contact-honeypot" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form-heading">
        <span>{copy.heading}</span>
        <p>{copy.reply}</p>
      </div>

      <div className="form-grid">
        <label>
          <span>{copy.name}</span>
          <input type="text" name="name" placeholder={copy.namePlaceholder} autoComplete="name" required />
        </label>
        <label>
          <span>{copy.email}</span>
          <input type="email" name="email" placeholder={copy.emailPlaceholder} autoComplete="email" required />
        </label>
        <label>
          <span>{copy.reason}</span>
          <select name="inquiry_type" value={inquiryType} onChange={event => setInquiryType(event.target.value)} required>
            <option value="" disabled>{copy.reasonPlaceholder}</option>
            {copy.inquiryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label>
          <span>{copy.company} <i>{copy.optional}</i></span>
          <input type="text" name="company" placeholder={copy.companyPlaceholder} autoComplete="organization" />
        </label>

        {inquiryType === "software" && (
          <>
            <label className="conditional-field">
              <span>{copy.budget}</span>
              <select name="budget" defaultValue="">
                <option value="" disabled>{copy.budgetPlaceholder}</option>
                {copy.budgetOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </label>
            <label className="conditional-field">
              <span>{copy.timeline}</span>
              <select name="timeline" defaultValue="">
                <option value="" disabled>{copy.timelinePlaceholder}</option>
                {copy.timelineOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </label>
          </>
        )}

        <label className="form-message">
          <span>{copy.message}</span>
          <textarea name="message" placeholder={copy.messagePlaceholder} rows={5} minLength={20} required />
        </label>
      </div>

      <div className="form-footer">
        <p>{copy.privacy}</p>
        <button type="submit" disabled={!accessKey || status === "sending"}>
          {status === "sending" ? <LoaderCircle className="form-spinner" /> : <Send />}
          {status === "sending" ? copy.sending : copy.send}
        </button>
      </div>

      {status === "success" && <div className="form-notice form-success" role="status"><CheckCircle2 /> {copy.success}</div>}
      {status === "error" && <div className="form-notice form-error" role="alert"><AlertCircle /> {copy.error}</div>}
      {!accessKey && <div className="form-notice form-error" role="alert"><AlertCircle /> {copy.unavailable}</div>}
    </form>
  )
}
