import { createFileRoute } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { InteractiveGrid } from '../components/InteractiveGrid'

export const Route = createFileRoute('/pricing')({
  component: PricingPage,
})

function PricingPage() {
  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden">
      {/* Background elements */}
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[#8A53D6] text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(138,83,214,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a888] shadow-[0_0_8px_#00a888] animate-pulse" />
            Pricing Plans
          </div>
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Simple, transparent <span className="ig-metallic">pricing.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Start for free, upgrade when you need to scale your team or infrastructure.
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-12 font-mono">
            <span className="text-sm font-semibold text-[var(--ig-muted)]">Monthly</span>
            <button className="w-12 h-6 bg-[#8A53D6] rounded-full relative transition-all shadow-[0_0_15px_rgba(138,83,214,0.4)] border border-[#8A53D6]/50" aria-label="Toggle billing period">
              <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
            <span className="text-sm font-bold text-[#8A53D6] flex items-center gap-2">
              Annually 
              <span className="bg-[rgba(0,168,136,0.15)] border border-[rgba(0,168,136,0.3)] text-[#00a888] px-2 py-0.5 rounded-full text-[9px] tracking-widest uppercase">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Solo */}
          <div className="ig-card rounded-[1.5rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#8A53D6]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
            <div className="font-mono text-[10px] tracking-[0.15em] text-[#8A53D6] font-bold uppercase mb-4">Solo</div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-extrabold text-[var(--ig-text)]">$0</span>
            </div>
            <div className="text-[var(--ig-muted)] text-sm mb-8 pb-8 border-b border-[var(--ig-border)] leading-relaxed">Free forever for individuals.</div>
            
            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ig-muted)] mb-5 font-semibold">Included</div>
            <ul className="flex flex-col gap-4 mb-10">
              {["1 workspace", "Unlimited canvas designs", "Basic AWS support", "Community discord"].map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-[var(--ig-text)] font-medium">
                  <Check className="w-4 h-4 text-[#00a888] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-auto py-3.5 rounded-xl ig-ghost text-sm font-semibold transition-all">Get Started</button>
          </div>

          {/* Team */}
          <div className="ig-card rounded-[1.5rem] p-8 relative transition-all duration-300 hover:-translate-y-2 border-[#8A53D6]/50 bg-gradient-to-br from-[rgba(138,83,214,0.1)] to-[var(--ig-card)] shadow-[0_0_0_1px_rgba(138,83,214,0.3),0_24px_80px_rgba(138,83,214,0.15)] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#5a3ef8] to-[#7c5cfc] text-white text-[9px] font-bold tracking-[0.15em] uppercase px-5 py-1.5 rounded-b-xl shadow-[0_4px_12px_rgba(90,62,248,0.4)]">Most Popular</div>
            
            <div className="font-mono text-[10px] tracking-[0.15em] text-[#8A53D6] font-bold uppercase mb-4 mt-4">Team</div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-extrabold text-[var(--ig-text)]">$19</span>
              <span className="text-[var(--ig-muted)] font-medium text-sm">/user/mo</span>
            </div>
            <div className="text-[var(--ig-muted)] text-sm mb-8 pb-8 border-b border-[var(--ig-border)] leading-relaxed">For fast-moving engineering teams.</div>
            
            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ig-muted)] mb-5 font-semibold">Everything in Solo, plus</div>
            <ul className="flex flex-col gap-4 mb-10">
              {["Unlimited workspaces", "Multi-cloud (AWS, GCP, Azure)", "Real-time drift detection", "Private Github integration", "Role-based access"].map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-[var(--ig-text)] font-medium">
                  <Check className="w-4 h-4 text-[#00a888] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-auto py-3.5 rounded-xl ig-cta text-sm font-semibold transition-all">Start Free Trial</button>
          </div>

          {/* Enterprise */}
          <div className="ig-card rounded-[1.5rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#8A53D6]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
            <div className="font-mono text-[10px] tracking-[0.15em] text-[#8A53D6] font-bold uppercase mb-4">Enterprise</div>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl font-extrabold text-[var(--ig-text)]">Custom</span>
            </div>
            <div className="text-[var(--ig-muted)] text-sm mb-8 pb-8 border-b border-[var(--ig-border)] leading-relaxed">For organizations with strict compliance.</div>
            
            <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--ig-muted)] mb-5 font-semibold">Everything in Team, plus</div>
            <ul className="flex flex-col gap-4 mb-10">
              {["Self-hosted runners", "SSO / SAML", "Custom Policy Enforcement", "Dedicated TAM", "99.99% Uptime SLA"].map(f => (
                <li key={f} className="flex items-start gap-3 text-sm text-[var(--ig-text)] font-medium">
                  <Check className="w-4 h-4 text-[#00a888] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-auto py-3.5 rounded-xl ig-ghost text-sm font-semibold transition-all">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  )
}
