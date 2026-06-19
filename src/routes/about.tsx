import { createFileRoute, Link } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { useState } from 'react'
import {
  Sparkles,
  RefreshCw,
  DollarSign,
  Terminal,
  Zap,
  Check,
  Lock,
  Eye,
  Layers,
  Cpu,
  AlertTriangle,
  CheckCircle,
  Globe,
  ShieldCheck,
  Server,
  Cloud,
  ArrowRight,
  Activity,
  GitPullRequest,
  Sliders,
  CheckSquare
} from 'lucide-react'

// Import assets
import awsCanvasBgUrl from "@/assets/aws_canvas_bg.png"
import driftDetectionBgUrl from "@/assets/drift_detection_bg.png"
import deployedResourcesUrl from "@/assets/deployed_resources.png"
import syncUrl from "@/assets/sync.png"
import architectureUrl from "@/assets/architecture.png"
import templatesUrl from "@/assets/templates.png"
import rbacUiUrl from "@/assets/RBAC.png"
import iconAwsUrl from "@/assets/icon/icons8-aws-100.png"
import iconAzureUrl from "@/assets/icon/icons8-azure-100.png"
import iconGcpUrl from "@/assets/icon/icons8-google-cloud-100.png"
import iconTerraformUrl from "@/assets/icon/icons8-terraform-100.png"
import janeUiUrl from "@/assets/accelerate_ai_ui.png"

// High-fidelity workflow PNGs for About Page
import architectureAboutUrl from "@/assets/assets/about-page/architecture-about.png"
import cloudIntegrationUrl from "@/assets/assets/about-page/cloud-integration.png"
import complainceAboutUrl from "@/assets/assets/about-page/complaince-about.png"
import rbacAboutUrl from "@/assets/assets/about-page/rbac-about.png"
import janeAboutUrl from "@/assets/assets/about-page/jane-about.png"

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About InfraGlide — Our Mission & Vision",
  "url": "https://infraglide.com/about",
  "description": "InfraGlide's mission is to make enterprise cloud infrastructure understandable, deployable, and governable. Learn about our vision for multi-cloud infrastructure.",
  "mainEntity": {
    "@type": "Organization",
    "name": "InfraGlide",
    "foundingDate": "2024",
    "description": "InfraGlide is a visual, AI-powered multi-cloud infrastructure design and deployment platform for AWS, Azure, and GCP.",
    "url": "https://infraglide.com"
  }
};

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About InfraGlide — Mission, Vision & Cloud Infrastructure Philosophy" },
      { name: "description", content: "InfraGlide's mission: make enterprise cloud infrastructure understandable, deployable, and governable. Discover why we built a Terraform-native, AI-powered visual platform for AWS, Azure, and GCP." },
      { name: "keywords", content: "InfraGlide about, cloud infrastructure mission, Terraform visual platform, multi-cloud infrastructure vision, InfraGlide company, cloud IaC platform story" },
      { property: "og:url", content: "https://infraglide.com/about" },
      { property: "og:title", content: "About InfraGlide — Mission, Vision & Cloud Infrastructure Philosophy" },
      { property: "og:description", content: "We make enterprise cloud infrastructure understandable, deployable, and governable. One visual canvas for AWS, Azure, and GCP." },
    ],
    links: [
      { rel: "canonical", href: "https://infraglide.com/about" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(aboutSchema) },
    ],
  }),
})

/* Custom Arrow (theme shape) */
function Arrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 14" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 7 H24" />
      <path d="M18 1 L25 7 L18 13" />
      <circle cx="3" cy="7" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function AboutPage() {
  const [activeTab, setActiveTab] = useState<'console' | 'terraform'>('console')

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <InteractiveGrid color="#8A53D6" />
        <div className="absolute inset-0 bg-[var(--ig-bg)]/70 backdrop-blur-[8px]" />
      </div>

      {/* Mesh Glow Backgrounds */}
      <div className="absolute top-0 right-0 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.14)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[1000px] left-[-300px] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,168,136,0.06)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-[2200px] right-[-200px] w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.08)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[-200px] w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,168,136,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 pt-32 px-6 max-w-7xl mx-auto space-y-36">

        {/* ==================== 1. HERO SECTION ==================== */}
        <section className="max-w-4xl mx-auto text-center space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.15)] text-[#8A53D6] text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(138,83,214,0.06)]">
            <Sparkles className="w-3.5 h-3.5 text-[#8A53D6] fill-current" /> OUR MISSION & VISION
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--ig-text)] leading-[1.05] text-center">
            Building the future of <br/>
            <span className="ig-metallic">cloud architecture.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto text-center">
            We remove the unnecessary distance between designing cloud infrastructure and operating it safely at scale. InfraGlide offers engineering teams a single visual, collaborative, and fully governed workspace.
          </p>

          {/* Native Multi-Cloud Badges */}
          <div className="pt-8 border-t border-[var(--ig-border-soft)] space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold text-[var(--ig-muted)] tracking-wider uppercase block text-center">Native Multi-Cloud Support</span>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {[
                { img: iconAwsUrl, name: "AWS" },
                { img: iconGcpUrl, name: "Google Cloud" },
                { img: iconAzureUrl, name: "Azure" },
                { img: iconTerraformUrl, name: "Terraform IaC" },
              ].map((provider, i) => (
                <div key={i} className="flex gap-2.5 items-center px-3.5 py-2 rounded-xl bg-[var(--ig-card)] border border-[var(--ig-border-soft)] shadow-sm hover:border-[var(--ig-accent)]/30 hover:shadow-md transition-all duration-300">
                  <img src={provider.img} alt={provider.name} className="w-5 h-5 object-contain" />
                  <span className="text-xs font-bold text-[var(--ig-text)]">{provider.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 2. THE PROBLEM SECTION ==================== */}
        <section className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--ig-accent)] font-bold">The Challenge</div>
            <h2 className="font-display text-3xl md:text-4xl text-[var(--ig-text)] leading-[1.1]">
              Cloud infrastructure has <br/>
              <span className="ig-metallic">outgrown the console.</span>
            </h2>
            <p className="text-[var(--ig-muted)] text-base leading-relaxed">
              Organizations run critical workloads across multi-cloud environments. What started as simple setups has become a massive, untracked web of databases, networks, and policies spread across regions, teams, and accounts.
            </p>
            <p className="text-[var(--ig-muted)] text-base leading-relaxed">
              The tools meant to help have not kept pace, splitting workflows awkwardly between two incomplete paradigms:
            </p>

            {/* Checklist of challenges */}
            <div className="space-y-4 pt-4">
              {[
                { title: "Specialist Bottlenecks", desc: "HCL syntax limits infrastructure creation and reviews to a handful of Terraform experts." },
                { title: "Silent Drift", desc: "Console modifications go untracked and trigger errors when standard pipelines are applied." },
                { title: "Lagging Governance", desc: "Budget overrides and security openings are flagged weeks after code has reached staging." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-5.5 h-5.5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-0.5 border border-red-500/15">
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-sm text-[var(--ig-muted)] leading-relaxed">
                    <strong className="text-[var(--ig-text)] block mb-0.5">{item.title}</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Comparison UI */}
          <div className="lg:col-span-7 space-y-6">
            <div className="ig-card rounded-3xl p-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col justify-between border-[rgba(138,83,214,0.18)]">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#8A53D6] to-[#00a888]" />
              
              <div className="flex justify-between items-center border-b border-[var(--ig-border-soft)] pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold text-[var(--ig-accent)] uppercase tracking-wider">Traditional Tool Split</span>
                  <h4 className="text-lg font-bold text-[var(--ig-text)] mt-0.5">Where Work Happens</h4>
                </div>
                
                {/* Tab Switcher */}
                <div className="flex p-1.5 rounded-2xl bg-[var(--ig-bg-2)] border border-[var(--ig-border-soft)]">
                  <button
                    onClick={() => setActiveTab('console')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                      activeTab === 'console'
                        ? 'bg-[var(--ig-accent)] text-white shadow-md'
                        : 'text-[var(--ig-muted)] hover:text-[var(--ig-text)]'
                    }`}
                  >
                    Cloud Consoles
                  </button>
                  <button
                    onClick={() => setActiveTab('terraform')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                      activeTab === 'terraform'
                        ? 'bg-[var(--ig-accent)] text-white shadow-md'
                        : 'text-[var(--ig-muted)] hover:text-[var(--ig-text)]'
                    }`}
                  >
                    Terraform Repos
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="min-h-[160px] flex flex-col justify-center">
                {activeTab === 'console' ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-wider">Pros & Cons</span>
                      <span className="text-xs text-[var(--ig-muted)] font-medium">Fast but completely untracked</span>
                    </div>
                    <p className="text-sm text-[var(--ig-muted)] leading-relaxed">
                      Consoles are fast and visual for one-off changes, but they introduce silent configuration drift. Changes are untracked, unreproducible, and invisible to the rest of your organization.
                    </p>
                    <div className="bg-red-500/[0.03] border border-red-500/15 rounded-xl p-4 text-xs text-red-500 leading-relaxed font-mono flex gap-2">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>Warning: Console change to security group sg-04d3e bypassed CI/CD pipeline review.</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[#8A53D6] text-[10px] font-bold uppercase tracking-wider">Pros & Cons</span>
                      <span className="text-xs text-[var(--ig-muted)] font-medium">Reproducible but abstract</span>
                    </div>
                    <p className="text-sm text-[var(--ig-muted)] leading-relaxed">
                      Terraform files ensure reproducibility and code reviews, but they are hard to visualize. Understanding resource dependencies, network subnets, and the overall blast radius remains abstract.
                    </p>
                    <div className="bg-purple-500/[0.03] border border-[rgba(138,83,214,0.2)] rounded-xl p-4 text-xs text-[var(--ig-accent)] leading-relaxed font-mono flex gap-2">
                      <Terminal className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>$ terraform plan -out=tfplan.binary -- 288 resources to create. HCL syntax matches standards.</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Summary Quote */}
              <div className="mt-8 border-t border-[var(--ig-border-soft)] pt-6 flex gap-4 items-center">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-[#8A53D6] shrink-0 border border-purple-500/15">
                  <Activity className="w-5 h-5" />
                </div>
                <p className="text-xs text-[var(--ig-muted)] leading-relaxed">
                  <strong>The missing layer:</strong> Nobody has a single, accurate picture of what the organization intended to build versus what actually runs today. That gap is where outages, security exposures, and surprise bills arise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 3. OUR MISSION SECTION ==================== */}
        <section className="space-y-12 text-left">
          <div className="max-w-4xl space-y-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--ig-accent)] font-bold">Our Mission</div>
            <h2 className="font-display text-3xl md:text-5xl text-[var(--ig-text)] leading-[1.15]">
              Make enterprise cloud infrastructure <br/>
              <span className="ig-metallic">understandable, deployable, & governable.</span>
            </h2>
            <p className="text-[var(--ig-muted)] text-base md:text-lg">
              We remove the unnecessary distance between designing cloud infrastructure and operating it safely. InfraGlide combines a visual canvas, production-grade Terraform, and AI-assisted reviews so platform teams and developers share the same picture.
            </p>
          </div>

          {/* Principles Grid - 6 styled cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Terraform-native",
                desc: "You get standard IaC output and isolated state — not lock-in to a hidden proprietary configuration engine.",
                icon: Sliders,
                badge: "Native Output",
                color: "border-purple-500/20 bg-purple-500/[0.01]"
              },
              {
                title: "Visual-first, not visual-only",
                desc: "The drag-and-drop canvas lowers the barrier to entry, while Terraform under the hood preserves portability and auditability.",
                icon: Layers,
                badge: "Visual Canvas",
                color: "border-purple-500/20 bg-purple-500/[0.01]"
              },
              {
                title: "Multi-cloud by design",
                desc: "One single operating plane, workspace structure, and pipeline setup spans AWS, GCP, and Azure configurations.",
                icon: Globe,
                badge: "Consolidated Plan",
                color: "border-purple-500/20 bg-purple-500/[0.01]"
              },
              {
                title: "Governance in the path",
                desc: "Cost, compliance, and security participate during the design phase — not just in post-deployment checklists.",
                icon: ShieldCheck,
                badge: "Strict Policies",
                color: "border-[#00a888]/20 bg-[#00a888]/[0.01]"
              },
              {
                title: "AI as a copilot",
                desc: "Jane reviews, explains, and recommends fixes — but humans always stay explicitly accountable for production applies.",
                icon: Cpu,
                badge: "Jane Assistant",
                color: "border-[#00a888]/20 bg-[#00a888]/[0.01]"
              },
              {
                title: "Honest operations",
                desc: "Enjoy clear deployment status, continuous drift visibility, and full audit logs with absolutely no hidden changes.",
                icon: Eye,
                badge: "Transparency",
                color: "border-[#00a888]/20 bg-[#00a888]/[0.01]"
              }
            ].map((p, i) => {
              const Icon = p.icon
              return (
                <div
                  key={i}
                  className={`ig-card rounded-[2rem] p-8 border transition-all duration-500 flex flex-col justify-between group h-full hover:border-[var(--ig-accent)] hover:shadow-xl hover:translate-y-[-4px] ${p.color}`}
                >
                  <div className="space-y-5">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--ig-bg-2)] border border-[var(--ig-border-soft)] flex items-center justify-center text-[var(--ig-accent)] group-hover:scale-110 group-hover:bg-[var(--ig-accent)] group-hover:text-white transition-all duration-300">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--ig-muted)] bg-[var(--ig-bg-2)] border border-[var(--ig-border-soft)] px-2.5 py-1 rounded-md">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--ig-text)]">{p.title}</h3>
                    <p className="text-xs text-[var(--ig-muted)] leading-relaxed font-medium">
                      {p.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ==================== 4. OUR VISION SECTION ==================== */}
        <section className="space-y-24 text-left">
          <div className="max-w-4xl space-y-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--ig-accent)] font-bold">Our Vision</div>
            <h2 className="font-display text-3xl md:text-5xl text-[var(--ig-text)] leading-[1.15]">
              A world where every team operates with <br/>
              <span className="ig-metallic">clarity, confidence, and control.</span>
            </h2>
            <p className="text-[var(--ig-muted)] text-base md:text-lg">
              We envision a future where the gap between architecture diagrams and production reality disappears, and where engineering teams no longer choose between deployment speed and operational discipline.
            </p>
          </div>

          {/* Alternating Row Pillars */}
          <div className="space-y-28">
            
            {/* Pillar 1: Understandable */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex h-8 w-8 rounded-lg bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.18)] items-center justify-center text-[#8A53D6] font-bold font-mono text-sm shadow-sm">
                  01
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--ig-text)] font-display-family">
                  Infrastructure everyone can understand
                </h3>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">
                  Infrastructure knowledge shouldn't stay locked in specialists' heads. InfraGlide builds a shared visual language for cloud assets, bringing architects, finance partners, and compliance auditors onto the same workspace.
                </p>
                <ul className="space-y-3 pt-2 text-xs text-[var(--ig-muted)] font-medium">
                  {[
                    "New engineers open a pipeline and see the visual topography — not folders of code.",
                    "Security reviewers validate exposure and encryption on the canvas before applying.",
                    "Finance partners view resource choices mapped directly to cost estimates.",
                    "Incident responders compare desired state to live state to isolate failures in minutes."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4.5 h-4.5 text-[#00a888] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="ig-card rounded-3xl overflow-hidden border-[var(--ig-border-soft)] bg-[rgba(22,15,36,0.25)] shadow-2xl">
                  <img src={architectureAboutUrl} alt="Visual canvas architecture screenshot" className="w-full block" />
                </div>
              </div>
            </div>

            {/* Pillar 2: One Operating Model */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-6">
                <div className="inline-flex h-8 w-8 rounded-lg bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.18)] items-center justify-center text-[#8A53D6] font-bold font-mono text-sm shadow-sm">
                  02
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--ig-text)] font-display-family">
                  One operating model across every cloud
                </h3>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">
                  Organizations will run workloads on heterogeneous environments. InfraGlide unifies multi-cloud complexities without wiping out provider-specific benefits, providing a consistent execution plane.
                </p>
                <ul className="space-y-3 pt-2 text-xs text-[var(--ig-muted)] font-medium">
                  {[
                    "One disciplined hierarchy of workspaces and environments.",
                    "One centralized, version-controlled deployment lifecycle.",
                    "One integrated drift tracking and cloud inventory interface.",
                    "One role-based access control (RBAC) and audit log format.",
                    "One AI assistant that speaks raw infrastructure, not provider jargon."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4.5 h-4.5 text-[#00a888] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 lg:order-1">
                <div className="ig-card rounded-3xl overflow-hidden border-[var(--ig-border-soft)] bg-[rgba(22,15,36,0.25)] shadow-2xl">
                  <img src={cloudIntegrationUrl} alt="Multi-cloud integration diagram" className="w-full block" />
                </div>
              </div>
            </div>

            {/* Pillar 3: Drift & Sync */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex h-8 w-8 rounded-lg bg-[#00a888]/8 border border-[#00a888]/20 items-center justify-center text-[#00a888] font-bold font-mono text-sm shadow-sm">
                  03
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--ig-text)] font-display-family">
                  Desired state and live state always in sync
                </h3>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">
                  Drift is the silent tax on cloud maturity. Our vision is an industry where drift is visible the moment it happens — explained in plain language, prioritized by risk, and quickly resolvable within the designer.
                </p>
                <ul className="space-y-3 pt-2 text-xs text-[var(--ig-muted)] font-medium">
                  {[
                    "Console changes do not disappear into manual audit black holes.",
                    "Terraform remains the source of truth because reality is continuously compared to HCL.",
                    "Compliance and policy checks run continuously, not just during quarterly audits.",
                    "Drift resolution flows let you accept the live change or restore pipeline configurations."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4.5 h-4.5 text-[#00a888] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="ig-card rounded-3xl overflow-hidden border-[var(--ig-border-soft)] bg-[rgba(22,15,36,0.25)] shadow-2xl">
                  <img src={complainceAboutUrl} alt="Cloud Drift and Compliance screenshot" className="w-full block" />
                </div>
              </div>
            </div>

            {/* Pillar 4: Security & Governance */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-6">
                <div className="inline-flex h-8 w-8 rounded-lg bg-[#00a888]/8 border border-[#00a888]/20 items-center justify-center text-[#00a888] font-bold font-mono text-sm shadow-sm">
                  04
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--ig-text)] font-display-family">
                  Least-privilege security and governance
                </h3>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">
                  Establish clear trust boundaries and secure environments. InfraGlide connects access control directly to visual subnets, workspaces, and pipeline release gates.
                </p>
                <ul className="space-y-3 pt-2 text-xs text-[var(--ig-muted)] font-medium">
                  {[
                    "Define granular roles and resource bindings directly on the canvas.",
                    "Verify IAM permissions and policies prior to deployment.",
                    "Maintain absolute compliance with continuous audit trails.",
                    "Limit access to sensitive credentials using secure environment variables."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4.5 h-4.5 text-[#00a888] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6 lg:order-1">
                <div className="ig-card rounded-3xl overflow-hidden border-[var(--ig-border-soft)] bg-[rgba(22,15,36,0.25)] shadow-2xl">
                  <img src={rbacAboutUrl} alt="Least-privilege security and RBAC policy screenshot" className="w-full block" />
                </div>
              </div>
            </div>

            {/* Pillar 5: Jane AI */}
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex h-8 w-8 rounded-lg bg-[#00a888]/8 border border-[#00a888]/20 items-center justify-center text-[#00a888] font-bold font-mono text-sm shadow-sm">
                  05
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--ig-text)] font-display-family">
                  AI that earns trust in production
                </h3>
                <p className="text-sm text-[var(--ig-muted)] leading-relaxed">
                  AI will accelerate cloud engineering—but only if it keeps engineers accountable. Jane, our assistant, is designed to analyze code and recommend safe changes without applying them automatically.
                </p>
                <ul className="space-y-3 pt-2 text-xs text-[var(--ig-muted)] font-medium">
                  {[
                    "Jane translates raw deploy logs and plan differences into clear plain text.",
                    "Jane reviews architectures against cost, performance, security, and well-architected policies.",
                    "Jane suggests copy-pasteable configuration fixes rather than making silent changes.",
                    "Jane operates with context from your active sandboxes, deployment history, and pipelines."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4.5 h-4.5 text-[#00a888] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="ig-card rounded-3xl overflow-hidden border-[var(--ig-border-soft)] bg-[rgba(22,15,36,0.25)] shadow-2xl">
                  <img src={janeAboutUrl} alt="Jane AI assistant panel screenshot" className="w-full block" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 5. TODAY VS TOMORROW COMPARISON ==================== */}
        <section className="space-y-12 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-display text-3xl md:text-4xl text-[var(--ig-text)] leading-[1.15]">
              The future we are <br/>
              <span className="ig-metallic">building toward.</span>
            </h2>
            <p className="text-xs text-[var(--ig-muted)] font-bold tracking-wide uppercase">
              How cloud infrastructure shifts when design and execution align.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Traditional Cloud Ops */}
            <div className="ig-card rounded-[2rem] p-8 border-red-500/15 bg-gradient-to-b from-red-500/[0.01] to-transparent relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-red-500/25" />
              <div>
                <h3 className="text-2xl font-bold font-display-family text-red-400 mb-6">Traditional Cloud Ops</h3>
                <div className="space-y-6">
                  {[
                    { title: "IaC for specialists", desc: "Terraform is written, modified, and reviewed by a small team, causing pipeline bottlenecks." },
                    { title: "Invisible console drift", desc: "Console modifications go untracked and trigger errors when standard pipelines are applied." },
                    { title: "Fragmented tooling", desc: "AWS, GCP, and Azure teams run separate tooling scripts, silos, and review channels." },
                    { title: "Post-deploy audits", desc: "Budget overrides and security openings are flagged weeks after code has reached staging." },
                    { title: "Log archaeology", desc: "Failing applies require engineers to scan lines of build output to identify root issues." }
                  ].map((row, idx) => (
                    <div key={idx} className="flex gap-3 items-start border-b border-[var(--ig-border-soft)] pb-4 last:border-0 last:pb-0">
                      <div className="w-5.5 h-5.5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 mt-0.5 border border-red-500/15">
                        <span className="text-xs font-bold">×</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-[var(--ig-text)]">{row.title}</h5>
                        <p className="text-xs text-[var(--ig-muted)] mt-1">{row.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tomorrow with InfraGlide */}
            <div className="ig-card rounded-[2rem] p-8 border-[#00a888]/20 bg-gradient-to-b from-[#00a888]/[0.01] to-transparent relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(138,83,214,0.06)]">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#8A53D6] to-[#00a888]" />
              <div>
                <h3 className="text-2xl font-bold font-display-family text-[#8A53D6] mb-6">InfraGlide Workspace</h3>
                <div className="space-y-6">
                  {[
                    { title: "IaC for everyone", desc: "The visual canvas lets any team member participate, creating compliant HCL under the hood." },
                    { title: "Continuous drift tracking", desc: "Changes outside the editor are flagged immediately, providing direct mitigation choices." },
                    { title: "Unified operating plane", desc: "One product library, workspace layout, and pipeline model spans AWS, Azure, and GCP." },
                    { title: "Governance in-the-path", desc: "Compliance verification, security checks, and cost reviews run before apply." },
                    { title: "AI failure diagnostics", desc: "Jane outlines failing blocks, parses errors, and recommends copy-paste patches." }
                  ].map((row, idx) => (
                    <div key={idx} className="flex gap-3 items-start border-b border-[var(--ig-border-soft)] pb-4 last:border-0 last:pb-0">
                      <div className="w-5.5 h-5.5 rounded-full bg-[#00a888]/10 flex items-center justify-center text-[#00a888] shrink-0 mt-0.5 border border-[#00a888]/15">
                        <span className="text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-sm text-[var(--ig-text)]">{row.title}</h5>
                        <p className="text-xs text-[var(--ig-muted)] mt-1">{row.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 6. JOIN US ON THE PATH (CTA) ==================== */}
        <section className="relative rounded-[2.5rem] border border-[rgba(138,83,214,0.18)] bg-[rgba(22,15,36,0.35)] backdrop-blur-xl p-8 md:p-16 overflow-hidden text-center z-10">
          <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A53D6]/10 to-[#00a888]/10 pointer-events-none z-0" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(138,83,214,0.2),transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-5xl text-white font-extrabold tracking-tight">
              Ready to bridge the <br/>
              <span className="ig-metallic">design-deploy gap?</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Experience a modern multi-cloud platform designed for platform teams, developers, and leaders alike. Start drawing your cloud topology on a single collaborative canvas today.
            </p>
            <div className="pt-4 flex justify-center">
              <Link to="/demo" className="ig-cta px-8 py-4 inline-flex items-center gap-2.5 text-sm font-bold tracking-wide uppercase select-none cursor-pointer">
                Start Designing <Arrow />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
