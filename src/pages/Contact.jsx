import React, { useState } from 'react'
import { useToast } from '../contexts/ToastContext'

const Contact = () => {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      setTimeout(() => setCopied(null), 1400)
    } catch (e) {
      // fallback: select & execCommand (old browsers)
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(id)
      setTimeout(() => setCopied(null), 1400)
    }
  }

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [ripple, setRipple] = useState(false)
  const toast = useToast()

  const onChange = (e) => setFormData(f => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!formData.name || formData.name.trim().length < 2) errs.name = 'Please enter your name.'
    if (!formData.email || !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) errs.email = 'Please enter a valid email.'
    if (!formData.message || formData.message.trim().length < 10) errs.message = 'Please enter a short message.'
    return errs
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) {
      toast.show('Please fix highlighted errors', { type: 'error', duration: 3000 })
      // focus first invalid field
      const keys = Object.keys(errs)
      if (keys && keys[0]) {
        const el = document.getElementById(keys[0])
        if (el) el.focus()
      }
      return
    }
    setSubmitting(true)
    try {
      // Construct message with form data
      const messageBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      // Open WhatsApp with the message
      const phoneNumber = '+254709567000'
      const encodedMessage = encodeURIComponent(messageBody)
      const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`
      window.open(whatsappUrl, '_blank')
      
      await new Promise(r => setTimeout(r, 900))
      toast.show('Message sent via WhatsApp! We\'ll get back to you soon.', { type: 'success', duration: 3500 })
      setFormData({ name: '', email: '', subject: '', message: '' })
      // show ripple briefly on the button
      setRipple(true)
      setTimeout(() => setRipple(false), 900)
    } catch (err) {
      toast.show('Failed to open messaging app. Try again later.', { type: 'error', duration: 5000 })
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  // FAQ
  const faqs = [
    { q: 'How long does a microloan take to get approved?', a: 'Most microloan applications are reviewed within 48 hours. Exact timelines depend on the documentation provided.' },
    { q: 'Can I access my account through mobile?', a: 'Yes — our mobile app and mobile-optimized website let you manage accounts from anywhere.' },
    { q: 'What are your support hours?', a: 'Our support team is available Mon-Fri 8:30–17:00. You can also email us anytime at info@maishabank.com.' }
  ]
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <section className="page contact py-12 reveal-auto">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* LEFT: contact details + map */}
          <div className="rounded-xl bg-white/90 dark:bg-slate-900 p-8 shadow-lg contact-left animate-fadeUp">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold">Get in touch</h1>
                <p className="mt-2 text-slate-600 dark:text-slate-300">We’re here to help. Reach out for support, accounts, partnerships, or media inquiries.</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 contact-card card-stylish animate-fadeUp" style={{animationDelay: '20ms'}}>
                <div className="w-12 h-12 rounded-lg bg-onit text-white flex items-center justify-center contact-card-icon" aria-hidden>
                  {/* phone icon (solid) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.42 2.39.9 3.5a2 2 0 0 1-.45 2.11l-1.45 1.45a15.05 15.05 0 0 0 6 6l1.46-1.46a2 2 0 0 1 2.12-.45c1.12.5 2.3.79 3.51.91A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500">Phone</div>
                  <div className="mt-1 flex items-center gap-3">
                    <a className="text-lg font-semibold text-onit" href="tel:+254709567000">+254 709 567 000</a>
                    <button aria-live="polite" aria-label="Copy phone" onClick={() => copyToClipboard('+254709567000', 'phone')} className={"text-sm transition px-2 py-1 rounded-md " + (copied === 'phone' ? 'bg-onit text-white' : 'text-slate-400 hover:text-slate-600')}>{copied === 'phone' ? 'Copied' : 'Copy'}</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 contact-card card-stylish animate-fadeUp" style={{animationDelay: '120ms'}}>
                <div className="w-12 h-12 rounded-lg bg-slate-800 text-white flex items-center justify-center contact-card-icon" aria-hidden>
                  {/* email icon (envelope) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="mt-1 flex items-center gap-3">
                    <a className="text-lg font-semibold text-onit" href="mailto:info@maishabank.com">info@maishabank.com</a>
                    <button aria-live="polite" aria-label="Copy email" onClick={() => copyToClipboard('info@maishabank.com', 'email')} className={"text-sm transition px-2 py-1 rounded-md " + (copied === 'email' ? 'bg-onit text-white' : 'text-slate-400 hover:text-slate-600')}>{copied === 'email' ? 'Copied' : 'Copy'}</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 contact-card card-stylish animate-fadeUp" style={{animationDelay: '220ms'}}>
                <div className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center contact-card-icon" aria-hidden>
                  {/* location icon (map pin) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500">Postal</div>
                  <div className="mt-1 text-lg font-semibold">P.O. Box 49316-00100, Nairobi - Kenya</div>
                </div>
              </div>

              <div className="flex items-start gap-4 contact-card card-stylish animate-fadeUp" style={{animationDelay: '320ms'}}>
                <div className="w-12 h-12 rounded-lg bg-onit-dark text-white flex items-center justify-center contact-card-icon" aria-hidden>
                  {/* office/building icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M4 21V8l8-6 8 6v13"/><path d="M9 10h.01"/><path d="M15 10h.01"/></svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500">Office</div>
                  <div className="mt-1 text-lg font-semibold">Onit Microfinance, Jahazi, 2nd Floor, James Gichuru Road - Nairobi</div>
                </div>
              </div>
            </div>

            {/* small map / decorative visual */}
            <div className="mt-6 rounded-lg overflow-hidden shadow-md map-placeholder relative card-stylish" aria-hidden>
              <iframe className="w-full h-44 md:h-52" title="Onit Microfinance location" loading="lazy" src="https://maps.google.com/maps?q=James%20Gichuru%20Road%2C%20Lavington%2C%20Nairobi&t=&z=16&ie=UTF8&iwloc=&output=embed" style={{border:0}} />
              <div className="absolute right-3 bottom-3 flex gap-2">
                <a className="btn-primary inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer" href="https://maps.google.com?q=James%20Gichuru%20Road%2C%20Lavington%2C%20Nairobi">Open in Maps</a>
              </div>
            </div>

            {/* Office hours & social links */}
            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="rounded-lg p-4 bg-white/90 dark:bg-slate-800 contact-card card-stylish animate-card-enter">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Office Hours</div>
                    <div className="mt-1 text-lg font-semibold">Mon-Sat: <span className="font-medium">8:30 AM - 5:00 PM</span></div>
                    <div className="text-sm text-slate-600">Sat: <span className="font-medium">8:30 AM - 1:00 PM</span></div>
                    <div className="text-sm text-slate-600">Sun: <span className="font-medium">Closed</span></div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold badge pulse">Open now</div>
                    <div className="mt-3">
                      <a href="tel:+254709567000" className="inline-flex items-center gap-2 btn-primary-sm">Call now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg p-3 bg-white/80 dark:bg-slate-800 contact-card card-stylish animate-card-enter" style={{animationDelay:'120ms'}}>
                <div className="text-sm text-slate-500">Follow us</div>
                <div className="mt-2 flex gap-3 items-center">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-sm flex items-center justify-center text-white shadow-sm transform transition-transform duration-150 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2" style={{background:'#1877F2'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.97 3.66 9.09 8.44 9.86v-6.99H7.9v-2.88h2.54V9.4c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.89h-2.3v6.99C18.34 21.16 22 17.05 22 12.07z"/></svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-sm flex items-center justify-center text-white shadow-sm transform transition-transform duration-150 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2" style={{background:'#1DA1F2'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.06 9.06 0 0 1-2.88 1.1 4.52 4.52 0 0 0-7.7 3.28A12.82 12.82 0 0 1 1.64 2.16a4.52 4.52 0 0 0 1.4 6.03 4.47 4.47 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.13A9.06 9.06 0 0 1 1 19.54a12.77 12.77 0 0 0 6.92 2.03c8.32 0 12.87-6.9 12.87-12.88 0-.2 0-.39-.01-.58A9.2 9.2 0 0 0 23 3z"/></svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-sm flex items-center justify-center text-white shadow-sm transform transition-transform duration-150 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2" style={{background:'#0A66C2'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H8.799V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.269 2.37 4.269 5.455v6.288zM5.337 7.433c-1.144 0-2.071-.929-2.071-2.074 0-1.145.927-2.074 2.071-2.074 1.146 0 2.075.929 2.075 2.074 0 1.145-.93 2.074-2.075 2.074zM7.119 20.452H3.554V9H7.12v11.452z"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-sm flex items-center justify-center text-white shadow-sm transform transition-transform duration-150 hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2" style={{background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 8.5zM18.5 6a1 1 0 1 1-1-1 1 1 0 0 1 1 1z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: contact form */}
          <div className="rounded-xl bg-white/90 dark:bg-slate-900 p-6 md:p-8 shadow-lg contact-form card-stylish animate-fadeUp" style={{animationDelay: '80ms'}}>
            <h2 className="text-xl md:text-2xl font-bold">Send us a message</h2>
            <p className="mt-2 text-xs md:text-sm text-slate-500">We'll get back to you within the shortest time possible.</p>
            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="field">
                <label htmlFor="name" className="field-label text-xs md:text-sm">Full name</label>
                <div className="relative input-with-icon">
                  <div className="input-icon left-0 flex items-center pl-3 text-slate-500 pointer-events-none"></div>
                  <input type="text" id="name" name="name" autoComplete="name" required value={formData.name} onChange={onChange} aria-invalid={errors.name ? 'true' : 'false'} aria-describedby={errors.name ? 'err-name': undefined} className={"form-input pl-10 " + (errors.name ? 'ring-2 ring-red-400' : '') + (formData.name ? ' has-value' : '')} />
                </div>
                {errors.name && <p id="err-name" className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div className="field md:col-span-2">
                <label htmlFor="email" className="field-label text-xs md:text-sm">Email</label>
                <div className="relative input-with-icon">
                  <div className="input-icon left-0 flex items-center pl-3 text-slate-500 pointer-events-none"></div>
                  <input type="email" id="email" name="email" autoComplete="email" required value={formData.email} onChange={onChange} aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'err-email': undefined} className={"form-input pl-10 " + (errors.email ? 'ring-2 ring-red-400' : '') + (formData.email ? ' has-value' : '')} />
                </div>
                {errors.email && <p id="err-email" className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div className="field md:col-span-2">
                <label className="field-label text-xs md:text-sm">Subject</label>
                <div className="relative input-with-icon">
                  <div className="input-icon left-0 flex items-center pl-3 text-slate-500 pointer-events-none"></div>
                  <input type="text" name="subject" autoComplete="off" value={formData.subject} onChange={onChange} className={"form-input pl-10 " + (formData.subject ? 'has-value' : '')} />
                </div>
              </div>

              <div className="field md:col-span-2">
                <label className="field-label text-xs md:text-sm">Message</label>
                <div className="relative input-with-icon">
                  <div className="input-icon left-0 flex items-center pl-3 text-slate-500 pointer-events-none"></div>
                  <textarea id="message" name="message" rows="5" autoComplete="off" value={formData.message} onChange={onChange} aria-invalid={errors.message ? 'true' : 'false'} aria-describedby={errors.message ? 'err-message': undefined} className={"form-input resize-y pl-10 " + (errors.message ? 'ring-2 ring-red-400' : '') + (formData.message ? ' has-value' : '')}></textarea>
                </div>
                {errors.message && <p id="err-message" className="text-sm text-red-500 mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" disabled={submitting} className={"inline-flex items-center gap-2 relative btn-primary shadow-lg text-xs md:text-base " + (submitting ? 'opacity-60 cursor-not-allowed' : '') + (ripple ? ' success-ripple' : '')}>
                  {submitting ? (
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
                  ) : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.preventDefault(); window.location.href = 'mailto:info@maishabank.com' }}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-xs md:text-sm font-medium border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Or email us
                </button>
              </div>
            </form>

            

            {/* FAQ accordion */}
            <div className="mt-6 faq-wrap">
              <h3 className="text-lg font-bold">Frequently asked questions</h3>
              <div className="mt-3 grid gap-2">
                {faqs.map((f, idx) => (
                  <div key={idx} className="rounded-lg p-3 bg-white/80 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <button aria-expanded={openFaq === idx} aria-controls={`faq-${idx}`} onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full text-left flex items-center justify-between gap-3">
                      <div>
                        <div className="font-semibold">{f.q}</div>
                      </div>
                      <div className={"text-slate-500 transform transition " + (openFaq === idx ? 'rotate-180' : '')}>▾</div>
                    </button>
                    <div id={`faq-${idx}`} className={"mt-2 text-slate-600 overflow-hidden transition-all " + (openFaq === idx ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2')}>
                      <p className="text-sm">{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
