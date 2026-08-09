"use client"

import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react"
import { AnimatePresence, m, useReducedMotion } from "framer-motion"
import { useState, type FormEvent } from "react"
import type { ContactFormCopy } from "@/lib/i18n"

type FormStatus = "idle" | "sending" | "success" | "error"

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: .42, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -10, transition: { duration: .2 } },
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: .065, delayChildren: .08 } },
}

export function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [inquiryType, setInquiryType] = useState("")
  const [status, setStatus] = useState<FormStatus>("idle")
  const reduceMotion = useReducedMotion()

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
    <m.form
      className="proposal-form"
      id="contacto-form"
      data-status={status}
      onSubmit={submitForm}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: .985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: .22 }}
      transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="form-decor form-decor-a" aria-hidden="true" />
      <span className="form-decor form-decor-b" aria-hidden="true" />
      <AnimatePresence>
        {status === "sending" && <m.span className="form-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.8, ease: "easeInOut" }} aria-hidden="true" />}
      </AnimatePresence>
      <input type="hidden" name="access_key" value={accessKey ?? ""} />
      <input type="hidden" name="subject" value={copy.subject} />
      <input type="hidden" name="from_name" value="Portafolio de Andrés Torres" />
      <input className="contact-honeypot" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <m.div className="form-heading" initial={reduceMotion ? false : { opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .18, duration: .45 }}>
        <span>{copy.heading}</span>
        <p>{copy.reply}</p>
      </m.div>

      <m.div className="form-grid" variants={gridVariants} initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: .12 }}>
        <m.label variants={fieldVariants}>
          <span>{copy.name}</span>
          <input type="text" name="name" placeholder={copy.namePlaceholder} autoComplete="name" required />
        </m.label>
        <m.label variants={fieldVariants}>
          <span>{copy.email}</span>
          <input type="email" name="email" placeholder={copy.emailPlaceholder} autoComplete="email" required />
        </m.label>
        <m.label variants={fieldVariants}>
          <span>{copy.reason}</span>
          <select name="inquiry_type" value={inquiryType} onChange={event => setInquiryType(event.target.value)} required>
            <option value="" disabled>{copy.reasonPlaceholder}</option>
            {copy.inquiryOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </m.label>
        <m.label variants={fieldVariants}>
          <span>{copy.company} <i>{copy.optional}</i></span>
          <input type="text" name="company" placeholder={copy.companyPlaceholder} autoComplete="organization" />
        </m.label>

        <AnimatePresence initial={false}>
          {inquiryType === "software" && [
            <m.label className="conditional-field" key="budget" variants={fieldVariants} initial={reduceMotion ? false : "hidden"} animate="visible" exit="exit">
              <span>{copy.budget}</span>
              <select name="budget" defaultValue="">
                <option value="" disabled>{copy.budgetPlaceholder}</option>
                {copy.budgetOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </m.label>,
            <m.label className="conditional-field" key="timeline" variants={fieldVariants} initial={reduceMotion ? false : "hidden"} animate="visible" exit="exit">
              <span>{copy.timeline}</span>
              <select name="timeline" defaultValue="">
                <option value="" disabled>{copy.timelinePlaceholder}</option>
                {copy.timelineOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
              </select>
            </m.label>,
          ]}
        </AnimatePresence>

        <m.label className="form-message" variants={fieldVariants} layout={!reduceMotion}>
          <span>{copy.message}</span>
          <textarea name="message" placeholder={copy.messagePlaceholder} rows={5} minLength={20} required />
        </m.label>
      </m.div>

      <m.div className="form-footer" initial={reduceMotion ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .5, duration: .4 }}>
        <p>{copy.privacy}</p>
        <m.button type="submit" disabled={!accessKey || status === "sending"} whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: .97 }}>
          {status === "sending" ? <LoaderCircle className="form-spinner" /> : <Send />}
          {status === "sending" ? copy.sending : copy.send}
        </m.button>
      </m.div>

      <AnimatePresence mode="popLayout">
        {status === "success" && <m.div className="form-notice form-success" role="status" initial={{ opacity: 0, y: 10, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6 }}><CheckCircle2 /> {copy.success}</m.div>}
        {status === "error" && <m.div className="form-notice form-error" role="alert" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}><AlertCircle /> {copy.error}</m.div>}
      </AnimatePresence>
      {!accessKey && <div className="form-notice form-error" role="alert"><AlertCircle /> {copy.unavailable}</div>}
    </m.form>
  )
}
