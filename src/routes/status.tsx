import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { CheckCircle2, AlertTriangle, AlertCircle } from 'lucide-react'

export const Route = createFileRoute('/status')({
  component: StatusPage,
})

function StatusPage() {
  const services = [
    { name: "Canvas UI", status: "Operational", uptime: "99.99%", icon: CheckCircle2, color: "text-[#00a888]" },
    { name: "Terraform Generator", status: "Operational", uptime: "100%", icon: CheckCircle2, color: "text-[#00a888]" },
    { name: "Jane AI Engine", status: "Operational", uptime: "99.95%", icon: CheckCircle2, color: "text-[#00a888]" },
    { name: "AWS Sync API", status: "Operational", uptime: "99.98%", icon: CheckCircle2, color: "text-[#00a888]" },
    { name: "GCP Sync API", status: "Degraded Performance", uptime: "98.50%", icon: AlertTriangle, color: "text-[#ffbd2e]" },
    { name: "Azure Sync API", status: "Operational", uptime: "100%", icon: CheckCircle2, color: "text-[#00a888]" },
  ];

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,168,136,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="font-display-family text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            System <span className="ig-metallic">Status.</span>
          </h1>
          <div className="ig-card rounded-2xl p-6 flex items-center gap-4 bg-[rgba(0,168,136,0.05)] border-[#00a888]/30">
            <div className="w-12 h-12 rounded-full bg-[rgba(0,168,136,0.1)] flex items-center justify-center shrink-0 relative">
              <span className="w-4 h-4 bg-[#00a888] rounded-full"></span>
              <span className="absolute w-4 h-4 bg-[#00a888] rounded-full animate-ping"></span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--ig-text)]">All Systems Operational</h2>
              <p className="text-sm text-[var(--ig-muted)]">Last updated: Just now</p>
            </div>
          </div>
        </div>

        <div className="ig-card rounded-[2rem] overflow-hidden">
          <div className="p-6 border-b border-[var(--ig-border)] bg-[rgba(255,255,255,0.02)]">
            <h3 className="text-lg font-bold text-[var(--ig-text)]">Service Uptime</h3>
          </div>
          <div className="divide-y divide-[var(--ig-border)]">
            {services.map((service, i) => (
              <div key={i} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <div className="flex items-center gap-3 text-[var(--ig-text)] font-medium">
                  {service.name}
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-sm font-mono text-[var(--ig-muted)]">{service.uptime}</div>
                  <div className={`flex items-center gap-2 text-sm font-bold ${service.color}`}>
                    <service.icon className="w-5 h-5" />
                    {service.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
