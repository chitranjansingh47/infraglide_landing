import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,168,136,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[#8A53D6] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(138,83,214,0.1)]">
            Our Story
          </div>
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Building the future of <span className="ig-metallic">cloud architecture.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            We believe that cloud infrastructure should be visible, collaborative, and entirely driven by code. Not scattered across fifty browser tabs.
          </p>
        </div>

        <div className="ig-card rounded-[2rem] p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.1)] mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5a3ef8] to-[#00a888]" />
          <h2 className="text-3xl font-bold text-[var(--ig-text)] mb-6">The Problem</h2>
          <p className="text-[var(--ig-muted)] text-lg leading-relaxed mb-6">
            Ten years ago, managing cloud infrastructure meant clicking through a console. Then came Infrastructure as Code (IaC), giving us version control, repeatability, and peer review. But we lost something in the transition: <strong>visibility</strong>.
          </p>
          <p className="text-[var(--ig-muted)] text-lg leading-relaxed">
            Today, understanding a complex AWS or GCP environment requires reading thousands of lines of Terraform, mentally parsing state files, and drawing whiteboard diagrams that are instantly out of date.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="ig-card rounded-[1.5rem] p-8 border-[#8A53D6]/30 bg-gradient-to-br from-[rgba(138,83,214,0.05)] to-transparent">
            <h3 className="text-xl font-bold text-[var(--ig-text)] mb-4">Our Mission</h3>
            <p className="text-[var(--ig-muted)] leading-relaxed">
              To bridge the gap between design and deployment. We're building a platform where what you see is literally what you deploy. If you draw a connection on the canvas, the underlying Terraform is generated and applied.
            </p>
          </div>
          <div className="ig-card rounded-[1.5rem] p-8 border-[#00a888]/30 bg-gradient-to-br from-[rgba(0,168,136,0.05)] to-transparent">
            <h3 className="text-xl font-bold text-[var(--ig-text)] mb-4">Our Vision</h3>
            <p className="text-[var(--ig-muted)] leading-relaxed">
              A world where DevOps engineers, software developers, and cloud architects can collaborate on infrastructure in real-time, with AI assisting in policy enforcement, cost optimization, and drift detection.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
