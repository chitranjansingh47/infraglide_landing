import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Shield, Lock, FileCheck, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/security')({
  component: SecurityPage,
  head: () => ({
    meta: [
      { title: "Enterprise Security — SOC 2, Encryption & Zero Trust | InfraGlide" },
      { name: "description", content: "InfraGlide is SOC 2 Type II certified with AES-256 encryption at rest, TLS 1.3 in transit, least-privilege cross-account roles, and automated penetration testing. Your cloud infrastructure data is protected." },
      { name: "keywords", content: "InfraGlide security, SOC 2 Type II cloud platform, cloud infrastructure security, AES-256 encryption, zero trust infrastructure, cloud RBAC security" },
      { property: "og:url", content: "https://infraglide.com/security" },
      { property: "og:title", content: "Enterprise Security — SOC 2, Encryption & Zero Trust | InfraGlide" },
      { property: "og:description", content: "InfraGlide is SOC 2 Type II certified. AES-256 at rest, TLS 1.3 in transit, least-privilege access, and automated pen testing." },
    ],
    links: [
      { rel: "canonical", href: "https://infraglide.com/security" },
    ],
  }),
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
      <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10 dark:opacity-25" />
      
      {/* Background glow styling adjustments */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.18)_0%,transparent_60%)] pointer-events-none blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.05)_0%,transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.1)_0%,transparent_65%)] pointer-events-none blur-[90px]" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.18)] flex items-center justify-center text-[#8A53D6] dark:text-[#b07eff] mb-6 shadow-sm">
            <Shield className="w-8 h-8" aria-hidden="true" />
          </div>
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[var(--ig-text)]">
            Enterprise <span className="ig-metallic">Security.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-xl max-w-2xl mx-auto font-medium">
            Security is deeply embedded in everything we do. We protect your infrastructure data as if it were our own.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {features.map((feature, i) => (
            <div key={i} className="backdrop-blur-md bg-white/70 dark:bg-[rgba(22,15,36,0.55)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-[1.5rem] p-8 flex items-start gap-6 hover:border-[#8A53D6]/40 dark:hover:border-[#8A53D6]/50 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.12)] dark:border-[rgba(138,83,214,0.2)] flex items-center justify-center text-[#8A53D6] dark:text-[#b07eff] shrink-0" aria-hidden="true">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[var(--ig-text)] mb-2">{feature.title}</h2>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="backdrop-blur-md bg-white/70 dark:bg-[rgba(22,15,36,0.55)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#8A53D6] to-[#b07eff]" />
          <h2 className="text-3xl font-bold text-[var(--ig-text)] mb-6">Report a Vulnerability</h2>
          <p className="text-[var(--ig-muted)] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            We operate a responsible disclosure program. If you believe you've found a security vulnerability in Infraglide, please let us know immediately. We will investigate all legitimate reports and do our best to quickly fix the problem.
          </p>
          <a
            href="mailto:security@infraglide.com"
            className="inline-flex py-4 px-8 rounded-xl bg-gradient-to-r from-[#8A53D6] to-[#b07eff] text-white font-semibold text-lg hover:shadow-[0_12px_24px_rgba(138,83,214,0.25)] dark:hover:shadow-[0_12px_24px_rgba(138,83,214,0.4)] transition-all"
            aria-label="Email InfraGlide security team to report a vulnerability"
          >
            Email Security Team
          </a>
        </div>
      </div>
    </div>
  )
}
