import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Mail, MapPin, MessageSquare } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Get in <span className="ig-metallic">Touch.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-xl max-w-2xl mx-auto font-medium">
            Have questions about Infraglide? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 max-w-5xl mx-auto">
          <div className="md:col-span-5 space-y-8">
            <div className="ig-card rounded-[1.5rem] p-8 hover:border-[#8A53D6]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] flex items-center justify-center text-[#8A53D6] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--ig-text)] mb-2">Email Us</h3>
              <p className="text-sm text-[var(--ig-muted)] mb-4">For general inquiries and support.</p>
              <a href="mailto:hello@infraglide.com" className="text-[#8A53D6] font-semibold hover:underline">hello@infraglide.com</a>
            </div>

            <div className="ig-card rounded-[1.5rem] p-8 hover:border-[#8A53D6]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] flex items-center justify-center text-[#8A53D6] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--ig-text)] mb-2">Join the Community</h3>
              <p className="text-sm text-[var(--ig-muted)] mb-4">Chat with the team and other developers.</p>
              <a href="#" className="text-[#8A53D6] font-semibold hover:underline">Discord Server &rarr;</a>
            </div>

            <div className="ig-card rounded-[1.5rem] p-8 hover:border-[#8A53D6]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] flex items-center justify-center text-[#8A53D6] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[var(--ig-text)] mb-2">Office</h3>
              <p className="text-sm text-[var(--ig-muted)]">
                123 Cloud Way<br />
                Suite 404<br />
                San Francisco, CA 94107
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="ig-card rounded-[2rem] p-8 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5a3ef8] to-[#00a888]" />
              <h2 className="text-2xl font-bold text-[var(--ig-text)] mb-8">Send a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-muted)]">First Name</label>
                    <input type="text" className="w-full bg-[var(--ig-bg)] border border-[var(--ig-border)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-muted)]">Last Name</label>
                    <input type="text" className="w-full bg-[var(--ig-bg)] border border-[var(--ig-border)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-muted)]">Work Email</label>
                  <input type="email" className="w-full bg-[var(--ig-bg)] border border-[var(--ig-border)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--ig-muted)]">Message</label>
                  <textarea rows={5} className="w-full bg-[var(--ig-bg)] border border-[var(--ig-border)] rounded-xl px-4 py-3 text-[var(--ig-text)] focus:outline-none focus:border-[#8A53D6] transition-colors resize-none"></textarea>
                </div>
                <button type="button" className="w-full py-4 rounded-xl ig-cta font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
