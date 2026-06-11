import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Search, Book, Terminal, Code2, Shield, Settings, ChevronRight } from 'lucide-react'

export const Route = createFileRoute('/docs')({
  component: DocsPage,
})

function DocsPage() {
  const categories = [
    { title: "Getting Started", icon: Book, links: ["Quickstart Guide", "Core Concepts", "Authentication"] },
    { title: "CLI Reference", icon: Terminal, links: ["Installation", "Commands", "Configuration"] },
    { title: "API Details", icon: Code2, links: ["REST API", "GraphQL endpoint", "Webhooks"] },
    { title: "Security", icon: Shield, links: ["RBAC", "Secrets Management", "Compliance"] }
  ];

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-[1400px] mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0 md:sticky md:top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 hidden md:block">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--ig-muted)]" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-[var(--ig-card)] border border-[var(--ig-border)] rounded-lg py-2.5 pl-10 pr-4 text-sm text-[var(--ig-text)] placeholder-[var(--ig-muted)] focus:outline-none focus:border-[#8A53D6] transition-all"
            />
          </div>

          <div className="space-y-8">
            {categories.map((cat, i) => (
              <div key={i}>
                <h4 className="flex items-center gap-2 text-sm font-bold text-[var(--ig-text)] mb-3">
                  <cat.icon className="w-4 h-4 text-[#8A53D6]" /> {cat.title}
                </h4>
                <ul className="space-y-2 border-l border-[var(--ig-border)] ml-2 pl-4">
                  {cat.links.map(link => (
                    <li key={link}>
                      <a href="#" className={`text-sm font-medium transition-colors ${link === 'Quickstart Guide' ? 'text-[#8A53D6]' : 'text-[var(--ig-muted)] hover:text-[var(--ig-text)]'}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[10px] font-bold uppercase tracking-wider text-[#8A53D6] mb-6">
            Getting Started
          </div>
          
          <h1 className="font-display-family text-4xl md:text-5xl font-extrabold mb-4 tracking-tight ig-metallic">
            Quickstart Guide
          </h1>
          <p className="text-[var(--ig-muted)] text-lg mb-10 leading-relaxed">
            Welcome to InfraGlide! This guide will walk you through setting up your first project, connecting your AWS account, and deploying a basic VPC using the visual canvas.
          </p>

          <div className="space-y-12">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--ig-text)] mb-4 pb-2 border-b border-[var(--ig-border)]">1. Install the CLI</h2>
              <p className="text-[var(--ig-muted)] mb-4 leading-relaxed">
                While InfraGlide is primarily a visual tool, the CLI is essential for CI/CD integration and local state management.
              </p>
              <div className="ig-card rounded-xl overflow-hidden mb-4 border border-[#8A53D6]/20">
                <div className="bg-[#0f091a] px-4 py-2 text-xs font-mono text-[#8A53D6] flex justify-between items-center border-b border-[var(--ig-border)]">
                  <span>Terminal</span>
                  <button className="text-[var(--ig-muted)] hover:text-white">Copy</button>
                </div>
                <div className="p-4 bg-[var(--ig-bg)] text-sm font-mono text-[var(--ig-text)] overflow-x-auto">
                  <span className="text-[#00a888]">$</span> npm install -g @infraglide/cli
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--ig-text)] mb-4 pb-2 border-b border-[var(--ig-border)]">2. Authenticate</h2>
              <p className="text-[var(--ig-muted)] mb-4 leading-relaxed">
                Log in to your InfraGlide account using the CLI to link your local environment with your workspace.
              </p>
              <div className="ig-card rounded-xl overflow-hidden mb-4 border border-[#8A53D6]/20">
                <div className="bg-[#0f091a] px-4 py-2 text-xs font-mono text-[#8A53D6] flex justify-between items-center border-b border-[var(--ig-border)]">
                  <span>Terminal</span>
                  <button className="text-[var(--ig-muted)] hover:text-white">Copy</button>
                </div>
                <div className="p-4 bg-[var(--ig-bg)] text-sm font-mono text-[var(--ig-text)] overflow-x-auto">
                  <span className="text-[#00a888]">$</span> infraglide login
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] mt-4">
                <Settings className="w-5 h-5 text-[#8A53D6] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">
                  <strong className="text-[var(--ig-text)]">Note:</strong> If you are running this in a CI environment, use the <code className="text-[#8A53D6] font-mono">IG_TOKEN</code> environment variable instead of running the login command interactively.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-[var(--ig-text)] mb-4 pb-2 border-b border-[var(--ig-border)]">3. Generate Terraform</h2>
              <p className="text-[var(--ig-muted)] mb-4 leading-relaxed">
                Once you've drawn your infrastructure on the canvas, you can pull the generated Terraform code directly to your local machine.
              </p>
              <div className="ig-card rounded-xl overflow-hidden mb-4 border border-[#8A53D6]/20">
                <div className="bg-[#0f091a] px-4 py-2 text-xs font-mono text-[#8A53D6] flex justify-between items-center border-b border-[var(--ig-border)]">
                  <span>Terminal</span>
                  <button className="text-[var(--ig-muted)] hover:text-white">Copy</button>
                </div>
                <div className="p-4 bg-[var(--ig-bg)] text-sm font-mono text-[var(--ig-text)] overflow-x-auto">
                  <div className="mb-2"><span className="text-[#00a888]">$</span> infraglide pull --workspace prod-cluster</div>
                  <div className="text-[var(--ig-muted)]">Downloading main.tf...</div>
                  <div className="text-[var(--ig-muted)]">Downloading variables.tf...</div>
                  <div className="text-emerald-400 mt-2">✓ Successfully synced 14 resources.</div>
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <div className="flex justify-between items-center pt-8 border-t border-[var(--ig-border)]">
              <a href="#" className="flex flex-col gap-1 text-left group">
                <span className="text-xs text-[var(--ig-muted)] uppercase tracking-wider">Previous</span>
                <span className="text-sm font-bold text-[var(--ig-text)] group-hover:text-[#8A53D6] transition-colors">Introduction</span>
              </a>
              <a href="#" className="flex flex-col gap-1 text-right group">
                <span className="text-xs text-[var(--ig-muted)] uppercase tracking-wider">Next</span>
                <span className="text-sm font-bold text-[var(--ig-text)] group-hover:text-[#8A53D6] transition-colors">Core Concepts</span>
              </a>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
