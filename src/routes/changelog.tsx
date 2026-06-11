import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'

export const Route = createFileRoute('/changelog')({
  component: ChangelogPage,
})

function ChangelogPage() {
  const updates = [
    {
      version: "v2.4.0",
      date: "May 24, 2026",
      tag: "Feature",
      title: "Real-time Drift Detection",
      desc: "Infraglide now automatically detects configuration drift across your AWS and Azure environments without requiring a manual plan step. View drift directly on the canvas."
    },
    {
      version: "v2.3.5",
      date: "May 12, 2026",
      tag: "Improvement",
      title: "Enhanced GCP Support",
      desc: "Added 40+ new Google Cloud resources to the palette, including advanced GKE configurations and Cloud Run visual builders."
    },
    {
      version: "v2.3.0",
      date: "April 28, 2026",
      tag: "Feature",
      title: "Jane AI 2.0",
      desc: "Our AI assistant can now understand cross-cloud architectures and automatically generate multi-cloud Terraform modules."
    }
  ];

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-4xl mx-auto">
        <div className="mb-20">
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="ig-metallic">Changelog</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-xl max-w-2xl font-medium">
            New updates and improvements to Infraglide.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[rgba(138,83,214,0.3)] before:to-transparent">
          {updates.map((update, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--ig-border)] bg-[var(--ig-bg)] shadow-[0_0_15px_rgba(138,83,214,0.2)] text-[#8A53D6] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                <div className="w-3 h-3 bg-[#8A53D6] rounded-full shadow-[0_0_10px_#8A53D6]"></div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ig-card rounded-[1.5rem] p-6 transition-all hover:border-[#8A53D6]/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#8A53D6] tracking-widest">{update.version}</span>
                  <span className="text-xs font-medium text-[var(--ig-dim)]">{update.date}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[10px] font-bold uppercase tracking-wider text-[#8A53D6] mb-3">
                  {update.tag}
                </div>
                <h3 className="text-xl font-bold text-[var(--ig-text)] mb-3">{update.title}</h3>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">{update.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
