import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Mail, MapPin, Check, AlertCircle } from 'lucide-react'

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact InfraGlide",
  "url": "https://infraglide.com/contact",
  "description": "Get in touch with InfraGlide. Reach our team for demos, enterprise inquiries, and support.",
  "mainEntity": {
    "@type": "Organization",
    "name": "InfraGlide",
    "email": "connect@infraglide.com",
    "url": "https://infraglide.com",
    "address": [
      { "@type": "PostalAddress", "addressLocality": "Delhi", "addressCountry": "IN" },
      { "@type": "PostalAddress", "addressLocality": "Jodhpur", "addressRegion": "Rajasthan", "addressCountry": "IN" },
      { "@type": "PostalAddress", "addressLocality": "Bangalore", "addressRegion": "Karnataka", "addressCountry": "IN" }
    ]
  }
};

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact InfraGlide — Get a Demo or Enterprise Quote" },
      { name: "description", content: "Contact InfraGlide to schedule a demo, request enterprise pricing, or get support. Offices in Delhi, Jodhpur, and Bangalore. Email: connect@infraglide.com" },
      { name: "keywords", content: "contact InfraGlide, InfraGlide demo, InfraGlide enterprise pricing, InfraGlide support, cloud infrastructure platform contact" },
      { property: "og:url", content: "https://infraglide.com/contact" },
      { property: "og:title", content: "Contact InfraGlide — Get a Demo or Enterprise Quote" },
      { property: "og:description", content: "Reach InfraGlide for demos, enterprise pricing, and support. Offices in Delhi, Jodhpur, and Bangalore." },
    ],
    links: [
      { rel: "canonical", href: "https://infraglide.com/contact" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(contactPageSchema) },
    ],
  }),
})

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    role: '',
    cloud: 'AWS',
    message: ''
  })
  
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.mobile || !formData.company) {
      setError('Please fill in all required fields (Name, Email, Mobile, and Company).')
      return
    }

    setSubmitting(true)
    setError(null)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_pky4dwb'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'WAVeCXF2tLIdKx9Qt'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_0uxnxlb'

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      company: formData.company,
      role: formData.role || 'Not specified',
      cloud: formData.cloud,
      use_cases: `Contact Form Message:\n${formData.message || 'No message provided'}`
    }

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      })

      if (!res.ok) {
        const errText = await res.text()
        throw new Error(errText || 'Failed to send your message.')
      }

      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        mobile: '',
        company: '',
        role: '',
        cloud: 'AWS',
        message: ''
      })
    } catch (err: any) {
      console.error('Submission error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10 dark:opacity-25" />
      
      {/* Background glow styling adjustments */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.18)_0%,transparent_60%)] pointer-events-none blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.05)_0%,transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.1)_0%,transparent_65%)] pointer-events-none blur-[90px]" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[var(--ig-text)]">
            Get in <span className="ig-metallic">Touch.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-xl max-w-2xl mx-auto font-medium">
            Have questions about Infraglide? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Side: Contact Info & Offices */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="backdrop-blur-md bg-white/70 dark:bg-[rgba(22,15,36,0.55)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.10)] border border-[rgba(138,83,214,0.12)] dark:border-[rgba(138,83,214,0.2)] flex items-center justify-center text-[#8A53D6] dark:text-[#b07eff]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ig-dim)]">Email</h4>
                  <a href="mailto:connect@infraglide.com" className="text-sm font-semibold text-[#8A53D6] dark:text-[#b07eff] hover:underline">
                    connect@infraglide.com
                  </a>
                </div>
              </div>
            </div>

            {/* Offices Container */}
            <div className="backdrop-blur-md bg-white/70 dark:bg-[rgba(22,15,36,0.55)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-2xl p-8 shadow-sm space-y-8">
              <div className="flex items-center gap-2 border-b border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] pb-3">
                <MapPin className="w-5 h-5 text-[#8A53D6]" />
                <h3 className="text-lg font-bold text-[var(--ig-text)]">Our Offices</h3>
              </div>

              {/* Delhi Office */}
              <div className="space-y-2">
                <h4 className="font-bold text-[var(--ig-text)] text-sm flex items-center gap-2">
                  <span>🏢</span> Delhi Office
                </h4>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed pl-6">
                  First Floor,<br />
                  E-49/5, Okhla Industrial Area,<br />
                  Delhi - 110020
                </p>
              </div>

              {/* Jodhpur Office */}
              <div className="space-y-2">
                <h4 className="font-bold text-[var(--ig-text)] text-sm flex items-center gap-2">
                  <span>🏢</span> Jodhpur Office
                </h4>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed pl-6">
                  First Floor,<br />
                  CYB-5, Cyber Park, 102, H.I.A, Jodhpur<br />
                  Rajasthan - 342003
                </p>
              </div>

              {/* Bangalore Office */}
              <div className="space-y-2">
                <h4 className="font-bold text-[var(--ig-text)] text-sm flex items-center gap-2">
                  <span>🏢</span> Bangalore Office
                </h4>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed pl-6">
                  BLOCK-L,<br />
                  Embassy TechVillage, Outer Ring Rd, Devarabisanahalli, Bellandur, Bangalore<br />
                  Karnataka - 560103
                </p>
              </div>

            </div>

          </div>

          {/* Right Side: Message Form (Matching stepper fields but distinct UI) */}
          <div className="lg:col-span-7">
            <div className="backdrop-blur-md bg-white/70 dark:bg-[rgba(22,15,36,0.55)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-[2rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#8A53D6] to-[#b07eff]" />
              <h2 className="text-2xl font-bold text-[var(--ig-text)] mb-8">Send a message</h2>
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto animate-bounce text-emerald-500">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ig-text)]">Message Sent!</h3>
                  <p className="text-sm text-[var(--ig-muted)] max-w-sm mx-auto">
                    Thank you for reaching out. We have received your query and our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl border border-[var(--ig-border)] hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm font-semibold transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-500 text-sm font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-dim)]">Full Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-white/50 dark:bg-[rgba(10,5,16,0.4)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.18)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] focus:ring-2 focus:ring-[#8A53D6]/20 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-dim)]">Work Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. jane@company.com"
                        className="w-full bg-white/50 dark:bg-[rgba(10,5,16,0.4)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.18)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] focus:ring-2 focus:ring-[#8A53D6]/20 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-dim)]">Mobile No <span className="text-red-500">*</span></label>
                      <input 
                        type="tel" 
                        required
                        value={formData.mobile}
                        onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white/50 dark:bg-[rgba(10,5,16,0.4)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.18)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] focus:ring-2 focus:ring-[#8A53D6]/20 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-dim)]">Company Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        required
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full bg-white/50 dark:bg-[rgba(10,5,16,0.4)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.18)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] focus:ring-2 focus:ring-[#8A53D6]/20 transition-all" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-dim)]">Role / Title</label>
                      <input 
                        type="text" 
                        value={formData.role}
                        onChange={e => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Cloud Architect"
                        className="w-full bg-white/50 dark:bg-[rgba(10,5,16,0.4)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.18)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] focus:ring-2 focus:ring-[#8A53D6]/20 transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-dim)]">Primary Cloud</label>
                      <select 
                        value={formData.cloud}
                        onChange={e => setFormData({ ...formData, cloud: e.target.value })}
                        className="w-full bg-white/50 dark:bg-[rgba(10,5,16,0.4)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.18)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] focus:ring-2 focus:ring-[#8A53D6]/20 transition-all"
                      >
                        <option value="AWS">AWS</option>
                        <option value="Azure">Azure</option>
                        <option value="GCP">GCP</option>
                        <option value="Multi-cloud">Multi-cloud</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-dim)]">Message</label>
                    <textarea 
                      rows={4} 
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full bg-white/50 dark:bg-[rgba(10,5,16,0.4)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.18)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] focus:ring-2 focus:ring-[#8A53D6]/20 transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full py-4 rounded-xl ig-cta font-semibold flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
