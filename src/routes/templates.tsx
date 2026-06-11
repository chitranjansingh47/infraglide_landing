import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Cloud, Layers, Database, Container, Server } from 'lucide-react'

export const Route = createFileRoute('/templates')({
  component: TemplatesPage,
})

function TemplatesPage() {
  const templates = [
    { title: "EKS Microservices", provider: "AWS", icon: Container, desc: "Production-ready EKS cluster with VPC, ALB ingress, and node groups." },
    { title: "Serverless Web App", provider: "AWS", icon: Layers, desc: "API Gateway, Lambda, DynamoDB, and CloudFront CDN setup." },
    { title: "GKE Autopilot", provider: "GCP", icon: Cloud, desc: "Google Kubernetes Engine autopilot mode with Cloud SQL and Redis." },
    { title: "Azure VNet Hub & Spoke", provider: "Azure", icon: Server, desc: "Enterprise network topology with centralized firewall and peering." },
    { title: "High-Avail RDS", provider: "AWS", icon: Database, desc: "Multi-AZ RDS Postgres cluster with read replicas and automated backups." },
    { title: "AI Training Pipeline", provider: "GCP", icon: Layers, desc: "Vertex AI pipeline with Cloud Storage buckets and GPU instances." }
  ];

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[#8A53D6] text-xs font-bold tracking-widest uppercase mb-6">
            Blueprint Library
          </div>
          <h1 className="font-display-family text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Start with <span className="ig-metallic">Templates.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Deploy production-ready infrastructure in seconds. Drag, drop, and customize to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl, i) => (
            <div key={i} className="ig-card rounded-[1.5rem] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#8A53D6]/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] flex flex-col h-full group">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-lg bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] flex items-center justify-center text-[#8A53D6] group-hover:bg-[#8A53D6] group-hover:text-white transition-colors">
                  <tpl.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--ig-dim)] px-2 py-1 border border-[var(--ig-border)] rounded-md">
                  {tpl.provider}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--ig-text)] mb-3">{tpl.title}</h3>
              <p className="text-sm text-[var(--ig-muted)] leading-relaxed mb-8 flex-1">{tpl.desc}</p>
              
              <button className="w-full py-3 rounded-xl border border-[#8A53D6]/30 text-[#8A53D6] text-sm font-semibold hover:bg-[#8A53D6] hover:text-white transition-all">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
