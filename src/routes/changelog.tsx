import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { useRef, useMemo, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  Lock, 
  Activity, 
  RefreshCw, 
  ArrowUp, 
  CheckCircle,
  GitBranch,
  Terminal,
  Settings,
  ChevronRight,
  ExternalLink
} from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const changelogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "InfraGlide Changelog",
  "url": "https://infraglide.com/changelog",
  "description": "The full InfraGlide product changelog — new features, improvements, bug fixes, and platform updates for the visual cloud infrastructure platform.",
  "publisher": { "@type": "Organization", "name": "InfraGlide", "url": "https://infraglide.com" }
};

export const Route = createFileRoute('/changelog')({
  component: ChangelogPage,
  head: () => ({
    meta: [
      { title: "Changelog — Product Updates & New Features | InfraGlide" },
      { name: "description", content: "Stay up to date with InfraGlide's latest product updates, new features, improvements, and bug fixes. See what's new in the AI-powered visual cloud infrastructure platform." },
      { name: "keywords", content: "InfraGlide changelog, InfraGlide updates, cloud platform new features, infrastructure platform release notes, InfraGlide product updates" },
      { property: "og:url", content: "https://infraglide.com/changelog" },
      { property: "og:title", content: "Changelog — Product Updates & New Features | InfraGlide" },
      { property: "og:description", content: "The full InfraGlide changelog — new features, improvements, and platform updates." },
    ],
    links: [
      { rel: "canonical", href: "https://infraglide.com/changelog" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(changelogSchema) },
    ],
  }),
})

interface UpdateItem {
  version: string;
  date: string;
  tag: 'Feature' | 'Improvement' | 'Fix';
  title: string;
  desc: string;
  details: string[];
  icon: any;
  color: string;
  bgColor: string;
}

const UPDATES: UpdateItem[] = [
  {
    version: "v2.4.0",
    date: "June 18, 2026",
    tag: "Feature",
    title: "Real-time Drift Detection & Auto-Sync",
    desc: "InfraGlide now automatically checks your cloud environments (AWS & GCP) for manual, out-of-band changes. View drift details visually on your canvas and remediate with a single click.",
    details: [
      "Visual drift highlight directly on the canvas showing drifted properties",
      "One-click 'Sync Plan' generation to pull console changes back into your Terraform state",
      "Automatic drift scan cron jobs configurable per sandbox environment",
      "Slack and email notifications triggered on high-priority compliance drift events"
    ],
    icon: RefreshCw,
    color: "#8A53D6",
    bgColor: "rgba(138, 83, 214, 0.08)"
  },
  {
    version: "v2.3.5",
    date: "May 28, 2026",
    tag: "Improvement",
    title: "Enhanced GCP Support & VPC Peering Module",
    desc: "We have greatly expanded our Google Cloud Platform component library. You can now visually configure complex GKE clusters and deploy VPC peerings with automatic IP range validation.",
    details: [
      "40+ new GCP components added including Cloud Run, Cloud Spanner, and Pub/Sub",
      "Visual network connection validation to prevent IP subnet collisions in VPC peering",
      "Automatic generation of optimized, modular GKE Terraform configurations",
      "Drastic speed improvements when validating GCP credentials"
    ],
    icon: Layers,
    color: "#00A888",
    bgColor: "rgba(0, 168, 136, 0.08)"
  },
  {
    version: "v2.3.0",
    date: "May 02, 2026",
    tag: "Feature",
    title: "Jane AI Copilot 2.0 — Interactive Diagnostics",
    desc: "Jane is now integrated directly into our deployment console. When a plan or apply fail, Jane analyzes raw provider errors and gives you copy-pasteable HCL corrections in real-time.",
    details: [
      "In-context error parsing that handles cryptic AWS IAM and GCP policy failures",
      "Pre-deployment review panel to check costs and architectural rules",
      "Support for custom prompt templates so platform teams can teach Jane internal standards",
      "Improved code suggestion snippets with highlight diffs"
    ],
    icon: Cpu,
    color: "#8A53D6",
    bgColor: "rgba(138, 83, 214, 0.08)"
  },
  {
    version: "v2.2.0",
    date: "April 15, 2026",
    tag: "Feature",
    title: "Least-Privilege RBAC & Sandbox Protection",
    desc: "Secure your production pipelines with advanced access controls. Bind Auth0 directory users to specific sandboxes and require peer approval for production deployments.",
    details: [
      "Role-Based Access Control (RBAC) screen under Administration dashboard",
      "Staged sandbox permissions (dev has free apply; prod requires dual-approvals)",
      "SSO group mapping to automatically sync directory roles into InfraGlide teams",
      "Encrypted credential isolation per sandbox workspace"
    ],
    icon: Lock,
    color: "#EF4444",
    bgColor: "rgba(239, 68, 68, 0.08)"
  },
  {
    version: "v2.1.0",
    date: "March 28, 2026",
    tag: "Improvement",
    title: "Observability Dashboards & Log Streaming",
    desc: "Experience smooth, real-time terminal output during cloud deployments. Our new logs engine streams stdout/stderr output directly from the running Terraform execution environment.",
    details: [
      "Real-time log viewer at the bottom of the designer with auto-scroll and pause",
      "Historical deployment charts showing resource counts and apply times",
      "Structured JSON audit logging for security compliance and external SIEM ingestion",
      "Performance optimization: 4x faster load times for complex workspace canvases"
    ],
    icon: Activity,
    color: "#00A888",
    bgColor: "rgba(0, 168, 136, 0.08)"
  },
  {
    version: "v2.0.0",
    date: "March 05, 2026",
    tag: "Feature",
    title: "InfraGlide Visual Canvas Release",
    desc: "The launch of our flagship visual drag-and-drop designer. Convert architectural diagrams directly into production-ready, clean, and fully-compliant Terraform configurations.",
    details: [
      "Interactive multi-cloud canvas with drag-and-drop building blocks",
      "Terraform-native engine generating standard HCL modules",
      "Automatic connection tracking (injects resource attributes between nodes)",
      "Built-in state storage configurations and credential management"
    ],
    icon: Sparkles,
    color: "#8A53D6",
    bgColor: "rgba(138, 83, 214, 0.08)"
  }
];

function ScrollJourneyLine({
  strokeWidth = 3,
  color = "#8A53D6",
  trackColor = "rgba(138, 83, 214, 0.08)",
  className,
}: {
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
    restDelta: 1e-3
  });

  const pathD = useMemo(() => {
    return `
      M 50 0 
      C 50 100, 80 150, 80 250 
      S 20 350, 20 500 
      S 80 650, 80 800 
      S 50 900, 50 1000
    `;
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 pointer-events-none overflow-hidden", className)}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="50%" stopColor={color} />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={pathD}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}

function ChangelogPage() {
  const [filter, setFilter] = useState<'All' | 'Feature' | 'Improvement' | 'Fix'>('All');

  const filteredUpdates = useMemo(() => {
    if (filter === 'All') return UPDATES;
    return UPDATES.filter(u => u.tag === filter);
  }, [filter]);

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] pb-32">
      <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10 dark:opacity-25" />
      
      {/* Dynamic Glow Blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.18)_0%,transparent_60%)] pointer-events-none blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.05)_0%,transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.1)_0%,transparent_65%)] pointer-events-none blur-[90px]" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.12)] dark:border-[rgba(138,83,214,0.18)] text-[#8A53D6] dark:text-[#b07eff] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Product Timeline
          </div>
          <h1 className="font-display-family text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-[var(--ig-text)]">
            Platform <span className="ig-metallic">Evolution.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-xl max-w-2xl mx-auto font-medium">
            Explore the latest feature releases, performance improvements, and critical updates to InfraGlide.
          </p>

          {/* Filter Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {(['All', 'Feature', 'Improvement', 'Fix'] as const).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs font-bold border transition-all duration-300 backdrop-blur-sm cursor-pointer select-none",
                  filter === tag
                    ? "bg-[#8A53D6] text-white border-[#8A53D6] shadow-[0_4px_12px_rgba(138,83,214,0.3)] scale-105"
                    : "bg-white/40 dark:bg-[rgba(22,15,36,0.3)] text-[var(--ig-muted)] border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] hover:border-[#8A53D6]/50 hover:text-[var(--ig-text)]"
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative mt-24">
          
          {/* Scroll Drawing Journey Line */}
          <ScrollJourneyLine className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-12 md:w-20 z-0" />

          {/* Timeline Cards Container */}
          <div className="space-y-16 relative z-10 pl-16 md:pl-0">
            {filteredUpdates.map((update, i) => {
              const Icon = update.icon;
              const isEven = i % 2 === 0;

              return (
                <div 
                  key={update.version}
                  className="relative flex flex-col md:flex-row md:items-center justify-between md:gap-0"
                >
                  
                  {/* Left Column (Desktop) */}
                  <div className={cn(
                    "w-full md:w-[44%] flex flex-col",
                    isEven ? "md:items-end md:text-right" : "md:items-start md:text-left order-2 md:order-none"
                  )}>
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                      >
                        {/* Card */}
                        <div className="ig-card rounded-[2rem] p-6 md:p-8 backdrop-blur-md border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] hover:border-[#8A53D6]/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left">
                          <Icon className="absolute -right-4 -top-4 w-24 h-24 text-[var(--ig-border-soft)]/20 pointer-events-none group-hover:scale-110 group-hover:text-[var(--ig-accent)]/10 transition-all duration-500" />
                          <div className="flex items-center justify-between mb-4 relative z-10">
                            <span className="font-mono text-sm font-bold text-[#8A53D6] dark:text-[#b07eff] tracking-widest">{update.version}</span>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ color: update.color, backgroundColor: update.bgColor }}>
                              {update.tag}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-[var(--ig-muted)] mb-2 block">{update.date}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-[var(--ig-text)] mb-3 font-display-family">{update.title}</h3>
                          <p className="text-sm text-[var(--ig-muted)] leading-relaxed mb-6">{update.desc}</p>
                          
                          <ul className="space-y-2 border-t border-[var(--ig-border-soft)] pt-5 text-xs text-[var(--ig-muted)] font-medium">
                            {update.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[#00A888] shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="hidden md:flex flex-col items-start pl-8">
                        <span className="font-mono text-3xl font-extrabold text-[var(--ig-dim)]/50 tracking-wider mb-2">{update.version}</span>
                        <span className="text-sm font-semibold text-[var(--ig-muted)]">{update.date}</span>
                      </div>
                    )}
                  </div>

                  {/* Centered Timeline Node Dot */}
                  <div className="absolute left-[-44px] md:left-1/2 md:-translate-x-1/2 top-8 md:top-auto w-8 h-8 flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0.5 }}
                      whileInView={{ scale: 1.2, opacity: 1 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-4.5 h-4.5 rounded-full border-2 bg-[var(--ig-bg)] shadow-[0_0_15px_rgba(138,83,214,0.4)]"
                      style={{ borderColor: update.color }}
                    />
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className={cn(
                    "w-full md:w-[44%] flex flex-col mt-4 md:mt-0",
                    isEven ? "order-2 md:order-none" : ""
                  )}>
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                      >
                        {/* Card */}
                        <div className="ig-card rounded-[2rem] p-6 md:p-8 backdrop-blur-md border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] hover:border-[#8A53D6]/50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left">
                          <Icon className="absolute -right-4 -top-4 w-24 h-24 text-[var(--ig-border-soft)]/20 pointer-events-none group-hover:scale-110 group-hover:text-[var(--ig-accent)]/10 transition-all duration-500" />
                          <div className="flex items-center justify-between mb-4 relative z-10">
                            <span className="font-mono text-sm font-bold text-[#8A53D6] dark:text-[#b07eff] tracking-widest">{update.version}</span>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ color: update.color, backgroundColor: update.bgColor }}>
                              {update.tag}
                            </span>
                          </div>
                          <span className="text-xs font-medium text-[var(--ig-muted)] mb-2 block">{update.date}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-[var(--ig-text)] mb-3 font-display-family">{update.title}</h3>
                          <p className="text-sm text-[var(--ig-muted)] leading-relaxed mb-6">{update.desc}</p>
                          
                          <ul className="space-y-2 border-t border-[var(--ig-border-soft)] pt-5 text-xs text-[var(--ig-muted)] font-medium">
                            {update.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-[#00A888] shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="hidden md:flex flex-col items-end pr-8 text-right">
                        <span className="font-mono text-3xl font-extrabold text-[var(--ig-dim)]/50 tracking-wider mb-2">{update.version}</span>
                        <span className="text-sm font-semibold text-[var(--ig-muted)]">{update.date}</span>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Journey Destination Reached & Scroll to Top */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 max-w-lg mx-auto text-center"
        >
          <div className="relative rounded-[2.5rem] border border-[rgba(138,83,214,0.18)] bg-[rgba(22,15,36,0.35)] backdrop-blur-xl p-10 overflow-hidden">
            <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" />
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8A53D6] to-[#00A888] flex items-center justify-center text-white mx-auto shadow-[0_8px_20px_rgba(138,83,214,0.3)]">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display-family">Journey Complete</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                You are completely up to date with InfraGlide platform updates. Revisit this page to follow our ongoing product evolution.
              </p>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="ig-cta px-6 py-3.5 inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase select-none cursor-pointer"
              >
                Back to Top <ArrowUp className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

