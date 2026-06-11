import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Play } from 'lucide-react'

export const Route = createFileRoute('/demo')({
  component: DemoPage,
})

function DemoPage() {
  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            See Infraglide in <span className="ig-metallic">Action.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-xl max-w-2xl mx-auto font-medium mb-10">
            Watch a 3-minute walkthrough of how to design a multi-tier AWS architecture and deploy it using AI-generated Terraform.
          </p>
        </div>

        <div className="ig-card rounded-[2rem] p-4 shadow-[0_24px_80px_rgba(138,83,214,0.2)] relative max-w-4xl mx-auto mb-20 group">
          <div className="aspect-video bg-[#0d1117] rounded-xl overflow-hidden relative border border-[var(--ig-border)]">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/assets/aws_canvas_bg.png')" }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-[#8A53D6]/90 flex items-center justify-center pl-2 text-white shadow-[0_0_30px_rgba(138,83,214,0.5)] group-hover:scale-110 group-hover:bg-[#8A53D6] transition-all">
                <Play className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-[var(--ig-text)] mb-6">Ready to try it yourself?</h2>
          <div className="flex items-center justify-center gap-4">
            <a href="/pricing" className="ig-cta py-4 px-8 text-lg font-semibold rounded-xl">Start Free Trial</a>
            <a href="/contact" className="ig-ghost py-4 px-8 text-lg font-semibold rounded-xl">Contact Sales</a>
          </div>
        </div>

      </div>
    </div>
  )
}
