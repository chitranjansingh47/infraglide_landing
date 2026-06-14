import { createFileRoute } from '@tanstack/react-router'
import { useRef, useEffect } from 'react'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Layers } from 'lucide-react'

export const Route = createFileRoute('/templates')({
  component: TemplatesPage,
})

function TemplatesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    const handleMouseEnter = () => {
      container.style.setProperty('--mouse-opacity', '1');
    };

    const handleMouseLeave = () => {
      container.style.setProperty('--mouse-opacity', '0');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const templates = [
    {
      title: "Centralized Monitoring",
      provider: "AWS",
      category: "Observability",
      desc: "CloudWatch log groups, metric alarms, and dashboards with deploy ordering: logs → alarms → dashboard.",
      resourcesCount: 3,
      tags: ["aws-cloudwatch"]
    },
    {
      title: "Cloud Monitoring + Alerts",
      provider: "GCP",
      category: "Observability",
      desc: "Operational monitoring foundation with Cloud Monitoring dashboards and alert policies.",
      resourcesCount: 3,
      tags: ["gcp-monitoring"]
    },
    {
      title: "Monitor + Autoscale Fleet",
      provider: "Azure",
      category: "Observability",
      desc: "Fleet of Linux VMs with autoscale rules and Azure Monitor for capacity and health observability.",
      resourcesCount: 4,
      tags: ["azure-iam", "azure-vm-linux", "azure-autoscale", "azure-monitor"]
    },
    {
      title: "EKS Microservices",
      provider: "AWS",
      category: "Compute",
      desc: "Production-ready EKS cluster with VPC, ALB ingress, and node groups.",
      resourcesCount: 6,
      tags: ["aws-eks", "aws-vpc", "aws-iam", "aws-ec2"]
    },
    {
      title: "GKE Autopilot",
      provider: "GCP",
      category: "Compute",
      desc: "Google Kubernetes Engine autopilot mode with Cloud SQL and Redis.",
      resourcesCount: 4,
      tags: ["gcp-gke", "gcp-sql", "gcp-redis"]
    },
    {
      title: "Azure VNet Hub & Spoke",
      provider: "Azure",
      category: "Networking",
      desc: "Enterprise network topology with centralized firewall and peering.",
      resourcesCount: 5,
      tags: ["azure-vnet", "azure-firewall", "azure-peering"]
    }
  ];

  const getProviderBadge = (provider: string) => {
    switch (provider.toUpperCase()) {
      case 'AWS':
        return 'bg-[#FFF0E0] text-[#C05621] border-[#FFE2C2]/40 dark:bg-amber-950/30 dark:text-amber-400 dark:border-amber-900/50';
      case 'GCP':
        return 'bg-[#E6F7ED] text-[#1E7E34] border-[#CCEED9]/40 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900/50';
      case 'AZURE':
        return 'bg-[#E1F3FD] text-[#006699] border-[#CCEAFC]/40 dark:bg-sky-950/30 dark:text-sky-400 dark:border-sky-900/50';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category.toLowerCase()) {
      case 'observability':
        return 'bg-[#F4F3FF] text-[#5C54C7] border-[#E8E6FF]/40 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-900/50';
      case 'compute':
        return 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900/50';
      case 'networking':
        return 'bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-950/30 dark:text-indigo-400 dark:border-indigo-900/50';
      default:
        return 'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-900/50';
    }
  };

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      {/* Background glow gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Interactive Grid behind the text so we can blur it underneath */}
      <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        
        {/* Header container with interactive cursor blur layer */}
        <div ref={containerRef} className="relative text-center mb-20 select-none">
          {/* Text wrapper at z-20 to keep it crisp and readable above the blur overlay */}
          <div className="relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[#8A53D6] text-xs font-bold tracking-widest uppercase mb-6">
              Blueprint Library
            </div>
            <h1 className="font-display-family text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
              Start with <span className="ig-metallic">Templates.</span>
            </h1>
            <p className="text-[var(--ig-muted)] text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Deploy production-ready infrastructure in seconds. Drag, drop, and customize to your needs.
            </p>
          </div>

          {/* Masked backdrop blur overlay that blurs the dot grid canvas underneath */}
          <div 
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
            style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              opacity: 'var(--mouse-opacity, 0)',
              maskImage: 'radial-gradient(circle 200px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 25%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle 200px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 25%, transparent 100%)',
            }}
          />
        </div>

        {/* Cards Grid: positioned at z-30 to stay crisp above grid dots overlay */}
        <div className="relative z-30 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((tpl, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(138,83,214,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col p-7 group"
            >
              {/* Badges row */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getProviderBadge(tpl.provider)}`}>
                  {tpl.provider}
                </span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryBadge(tpl.category)}`}>
                  {tpl.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5 tracking-tight">
                {tpl.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                {tpl.desc}
              </p>

              {/* Resource Count */}
              <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 dark:text-slate-500 font-medium mb-3.5">
                <Layers className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                <span>{tpl.resourcesCount} resources</span>
              </div>

              {/* Monospace Tags */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-slate-400 dark:text-slate-500 mb-6">
                {tpl.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              
              {/* CTA Button */}
              <button className="w-full py-3.5 rounded-xl bg-[#8A53D6] hover:bg-[#773fc1] text-white text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(138,83,214,0.15)] hover:shadow-[0_8px_20px_rgba(138,83,214,0.3)]">
                <span>Use Template</span>
                <span className="text-base leading-none">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
