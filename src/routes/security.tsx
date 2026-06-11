import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Shield, Lock, FileCheck, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/security')({
  component: SecurityPage,
})

function SecurityPage() {
  const features = [
    { title: "SOC 2 Type II", icon: FileCheck, desc: "Independently audited for security, availability, and confidentiality." },
    { title: "End-to-End Encryption", icon: Lock, desc: "AES-256 at rest, TLS 1.3 in transit. Your infrastructure state is fully encrypted." },
    { title: "Least Privilege Access", icon: Shield, desc: "We use cross-account roles. We only need read access to visualize your cloud." },
    { title: "Automated Pen Testing", icon: CheckCircle2, desc: "Continuous security scanning and regular third-party penetration testing." }
  ];

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,168,136,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[rgba(0,168,136,0.1)] border border-[rgba(0,168,136,0.2)] flex items-center justify-center text-[#00a888] mb-6 shadow-[0_0_30px_rgba(0,168,136,0.2)]">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Enterprise <span className="ig-metallic">Security.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-xl max-w-2xl mx-auto font-medium">
            Security is deeply embedded in everything we do. We protect your infrastructure data as if it were our own.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {features.map((feature, i) => (
            <div key={i} className="ig-card rounded-[1.5rem] p-8 flex items-start gap-6 hover:border-[#00a888]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,168,136,0.1)] border border-[rgba(0,168,136,0.2)] flex items-center justify-center text-[#00a888] shrink-0">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--ig-text)] mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ig-card rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--ig-text)] mb-6">Report a Vulnerability</h2>
          <p className="text-[var(--ig-muted)] text-lg mb-8 max-w-2xl mx-auto">
            We operate a responsible disclosure program. If you believe you've found a security vulnerability in Infraglide, please let us know immediately. We will investigate all legitimate reports and do our best to quickly fix the problem.
          </p>
          <a href="mailto:security@infraglide.com" className="inline-flex py-4 px-8 rounded-xl bg-gradient-to-r from-[#5a3ef8] to-[#00a888] text-white font-semibold text-lg hover:shadow-[0_12px_24px_rgba(90,62,248,0.3)] transition-all">
            Email Security Team
          </a>
        </div>
      </div>
    </div>
  )
}
