import { useState, useEffect, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import {
  Search, Book, Layout, Sparkles, Code2, FolderOpen, GitBranch,
  RefreshCw, DollarSign, Shield, BarChart2, Terminal, Zap,
  ChevronRight, ChevronDown, Copy, Check, Menu, X,
  AlertTriangle, Info, CheckCircle, ExternalLink,
  Lock, HelpCircle
} from 'lucide-react'
import { DOCS, type DocPage, type DocBlock } from '../data/docs/content'

const docsSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "name": "InfraGlide Documentation",
  "url": "https://infraglide.com/docs",
  "description": "Complete documentation for InfraGlide — the visual multi-cloud infrastructure platform. Guides for getting started, Terraform IaC, drift detection, Jane AI, RBAC, and pipeline automation.",
  "author": { "@type": "Organization", "name": "InfraGlide" },
  "publisher": { "@type": "Organization", "name": "InfraGlide", "url": "https://infraglide.com" }
};

export const Route = createFileRoute('/docs')({
  component: DocsPage,
  head: () => ({
    meta: [
      { title: "Documentation — Getting Started, Terraform, Jane AI & More | InfraGlide" },
      { name: "description", content: "InfraGlide documentation: quickstart guides, Terraform IaC generation, real-time drift detection, Jane AI copilot, RBAC governance, pipeline automation, and multi-cloud (AWS, Azure, GCP) integration references." },
      { name: "keywords", content: "InfraGlide docs, InfraGlide documentation, Terraform visual editor docs, cloud infrastructure getting started, drift detection documentation, Jane AI docs, RBAC cloud docs, multi-cloud IaC guide" },
      { property: "og:url", content: "https://infraglide.com/docs" },
      { property: "og:title", content: "Documentation — Getting Started, Terraform, Jane AI & More | InfraGlide" },
      { property: "og:description", content: "Everything you need to get started with InfraGlide: quickstart, Terraform, drift detection, Jane AI, and pipeline automation docs." },
    ],
    links: [
      { rel: "canonical", href: "https://infraglide.com/docs" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(docsSchema) },
    ],
  }),
})

// ─── Navigation & Icon Mappings ──────────────────────────────────────────────

const ICON_MAP: Record<string, React.ElementType> = {
  Book, Layout, Sparkles, Code2, FolderOpen, GitBranch,
  RefreshCw, DollarSign, Shield, BarChart2, Terminal, Zap, Lock, HelpCircle
}

const SECTION_ICONS: Record<string, string> = {
  'Getting Started': 'Book',
  'Visual Canvas': 'Layout',
  'Jane — AI Assistant': 'Sparkles',
  'Templates & Projects': 'FolderOpen',
  'Pipelines & Automation': 'GitBranch',
  'Cloud Sync & Drift': 'RefreshCw',
  'Cost & Compliance': 'DollarSign',
  'Security & Access': 'Shield',
  'Monitoring': 'BarChart2',
}

const NAV_SECTIONS = (() => {
  const sections: { title: string; icon: string; links: { label: string; id: string }[] }[] = [];
  
  DOCS.forEach(page => {
    let sec = sections.find(s => s.title === page.section);
    if (!sec) {
      sec = {
        title: page.section,
        icon: SECTION_ICONS[page.section] || 'Book',
        links: []
      };
      sections.push(sec);
    }
    sec.links.push({
      label: page.title,
      id: page.id
    });
  });

  return sections;
})();

// ─── Utility: find page by id ────────────────────────────────────────────────

function findPage(id: string): DocPage | undefined {
  return DOCS.find(d => d.id === id)
}

// ─── Flat ordered list of page ids for prev/next ────────────────────────────

const ALL_IDS = NAV_SECTIONS.flatMap(s => s.links.map(l => l.id))

// ─── Utility: split title into main + last word for gradient ─────────────────
function splitTitle(title: string) {
  const words = title.trim().split(' ');
  if (words.length <= 1) return { main: title, highlight: '' };
  const lastWord = words[words.length - 1];
  const rest = words.slice(0, words.length - 1).join(' ');
  return { main: rest, highlight: lastWord };
}

// ─── Utility: get Lucide icon for content sections ────────────────────────────
function getHeaderIcon(text: string): React.ElementType {
  const t = text.toLowerCase();
  if (t.includes('welcome') || t.includes('intro') || t.includes('guide')) return Book;
  if (t.includes('started') || t.includes('setup') || t.includes('install')) return Zap;
  if (t.includes('canvas') || t.includes('design') || t.includes('topology')) return Layout;
  if (t.includes('assistant') || t.includes('jane') || t.includes('ai')) return Sparkles;
  if (t.includes('template') || t.includes('project')) return FolderOpen;
  if (t.includes('pipeline') || t.includes('automation') || t.includes('deploy')) return GitBranch;
  if (t.includes('sync') || t.includes('drift')) return RefreshCw;
  if (t.includes('cost') || t.includes('price') || t.includes('budget') || t.includes('billing')) return DollarSign;
  if (t.includes('security') || t.includes('access') || t.includes('rbac') || t.includes('role') || t.includes('permission')) return Shield;
  if (t.includes('monitor') || t.includes('dashboard') || t.includes('history') || t.includes('log')) return BarChart2;
  if (t.includes('code') || t.includes('terraform') || t.includes('terminal')) return Terminal;
  return Info; // Fallback symbol
}



// ─── Code block with copy ───────────────────────────────────────────────────

function CodeBlock({ lines }: { lines: string[] }) {
  const [copied, setCopied] = useState(false)
  const code = lines.join('\n')
  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-[rgba(138,83,214,0.2)] bg-slate-50/50 dark:bg-[rgba(15,9,26,0.4)] backdrop-blur-md my-6 shadow-md group">
      <div className="bg-slate-100/80 dark:bg-[#0f091a] px-4 py-2.5 text-xs font-mono text-[#8A53D6] flex justify-between items-center border-b border-slate-200 dark:border-[rgba(138,83,214,0.12)]">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-slate-500 dark:text-white/30 font-mono flex items-center gap-1">
            <Terminal className="w-3 h-3 text-[#8A53D6]/70" /> bash
          </span>
        </div>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 text-slate-600 dark:text-[rgba(255,255,255,0.4)] hover:text-slate-900 dark:hover:text-white transition-colors font-medium bg-white/60 dark:bg-[rgba(255,255,255,0.03)] border border-slate-300 dark:border-[rgba(255,255,255,0.06)] px-2 py-0.5 rounded hover:border-[#8A53D6]/40 dark:hover:border-[rgba(138,83,214,0.3)]"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="p-4 bg-slate-50/80 dark:bg-[#090510]/90 text-sm font-mono text-slate-800 dark:text-[var(--ig-text)] overflow-x-auto leading-relaxed scrollbar-thin">
        {lines.map((l, i) => (
          <div key={i}>
            {l.startsWith('#') ? (
              <span className="text-slate-400 dark:text-white/30">{l}</span>
            ) : l.startsWith('$') || l.startsWith('infraglide') || l.startsWith('npm') ? (
              <span><span className="text-[#00a888] font-bold">$</span> {l.replace(/^\$\s*/, '')}</span>
            ) : l.startsWith('✓') ? (
              <span className="text-emerald-500 dark:text-emerald-400 font-semibold">{l}</span>
            ) : l.startsWith('Downloading') ? (
              <span className="text-slate-500 dark:text-white/40">{l}</span>
            ) : (
              <span>{l}</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  )
}

// ─── Callout boxes ──────────────────────────────────────────────────────────

function Note({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[rgba(138,83,214,0.03)] dark:bg-[rgba(138,83,214,0.04)] border-l-4 border-l-[#8A53D6] border-y border-r border-slate-200/80 dark:border-[rgba(138,83,214,0.12)] my-6 backdrop-blur-sm shadow-sm">
      <div className="p-1 rounded-lg bg-[rgba(138,83,214,0.08)] text-[#8A53D6] shrink-0">
        <Info className="w-4 h-4" />
      </div>
      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{text}</p>
    </div>
  )
}

// ─── Content renderer ────────────────────────────────────────────────────────

function renderBlock(block: DocBlock, i: number) {
  switch (block.type) {
    case 'h2': {
      const { main, highlight } = splitTitle(block.text);
      const Icon = getHeaderIcon(block.text);
      return (
        <h2 key={i} className="group relative text-xl font-extrabold text-slate-900 dark:text-white mt-12 mb-4 pb-2.5 border-b border-slate-200 dark:border-[rgba(138,83,214,0.12)] flex items-center gap-2.5">
          <Icon className="w-5 h-5 text-[#8A53D6] opacity-80 group-hover:opacity-100 transition-opacity shrink-0" />
          <span className="flex-1">
            {main} {highlight && <span className="ig-metallic">{highlight}</span>}
          </span>
          <span className="text-[rgba(138,83,214,0.3)] hover:text-[#8A53D6] opacity-0 group-hover:opacity-100 transition-all font-mono text-sm font-normal cursor-pointer select-none">#</span>
        </h2>
      )
    }
    case 'h3': {
      const { main, highlight } = splitTitle(block.text);
      return (
        <h3 key={i} className="text-base font-bold text-slate-800 dark:text-slate-200 mt-7 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8A53D6]/70 shadow-[0_0_6px_#8A53D6]" />
          <span>
            {main} {highlight && <span className="text-[#a78bfa] font-semibold">{highlight}</span>}
          </span>
        </h3>
      )
    }
    case 'p':
      return <p key={i} className="text-slate-600 dark:text-[var(--ig-muted)] leading-relaxed mb-4">{block.text}</p>
    case 'note':
      return <Note key={i} text={block.text} />
    case 'warning':
      return (
        <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-[rgba(234,179,8,0.03)] border-l-4 border-l-yellow-500 border-y border-r border-slate-200/80 dark:border-[rgba(234,179,8,0.12)] my-6 backdrop-blur-sm shadow-sm">
          <div className="p-1 rounded-lg bg-[rgba(234,179,8,0.08)] text-yellow-600 dark:text-yellow-500 shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <p className="text-sm text-yellow-800 dark:text-yellow-200/80 leading-relaxed font-medium">{block.text}</p>
        </div>
      )
    case 'success':
      return (
        <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-[rgba(34,197,94,0.03)] border-l-4 border-l-emerald-500 border-y border-r border-slate-200/80 dark:border-[rgba(34,197,94,0.12)] my-6 backdrop-blur-sm shadow-sm">
          <div className="p-1 rounded-lg bg-[rgba(34,197,94,0.08)] text-emerald-600 dark:text-emerald-500 shrink-0">
            <CheckCircle className="w-4 h-4" />
          </div>
          <p className="text-sm text-emerald-800 dark:text-emerald-300/80 leading-relaxed font-medium">{block.text}</p>
        </div>
      )
    case 'code':
      return <CodeBlock key={i} lines={block.lines} />
    case 'list':
      return (
        <ul key={i} className="space-y-2.5 my-5 ml-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-[var(--ig-muted)] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8A53D6] shrink-0 mt-2 shadow-[0_0_8px_#8A53D6]" />
              <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      )
    case 'steps':
      return (
        <ol key={i} className="space-y-4 my-5 ml-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium font-body">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.25)] text-[#8A53D6] text-xs font-bold flex items-center justify-center mt-0.5 shadow-sm">
                {j + 1}
              </span>
              <span className="pt-0.5">{item}</span>
            </li>
          ))}
        </ol>
      )
    case 'table':
      return (
        <div key={i} className="overflow-x-auto my-5 rounded-xl border border-slate-200 dark:border-[var(--ig-border)] shadow-sm bg-white/40 dark:bg-black/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-[var(--ig-border)] bg-[rgba(138,83,214,0.05)] dark:bg-[rgba(138,83,214,0.06)]">
                {block.headers.map((h, j) => (
                  <th key={j} className="text-left px-4 py-3 text-xs font-bold text-[#8A53D6] uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, j) => (
                <tr key={j} className={`border-b border-slate-100 dark:border-[var(--ig-border)] last:border-0 ${j % 2 === 0 ? '' : 'bg-[rgba(138,83,214,0.02)] dark:bg-[rgba(138,83,214,0.03)]'}`}>
                  {row.map((cell, k) => (
                    <td key={k} className={`px-4 py-3 ${k === 0 ? 'text-slate-800 dark:text-[var(--ig-text)] font-semibold' : 'text-slate-600 dark:text-[var(--ig-muted)]'} leading-relaxed`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

// ─── Sidebar nav ─────────────────────────────────────────────────────────────

function Sidebar({ activeId, onSelect, searchQ, onSearch }: {
  activeId: string
  onSelect: (id: string) => void
  searchQ: string
  onSearch: (q: string) => void
}) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const obj: Record<string, boolean> = {}
    NAV_SECTIONS.forEach(s => {
      if (s.links.some(l => l.id === activeId)) obj[s.title] = true
    })
    return obj
  })

  const filteredSections = NAV_SECTIONS.map(s => ({
    ...s,
    links: searchQ
      ? s.links.filter(l => l.label.toLowerCase().includes(searchQ.toLowerCase()))
      : s.links,
  })).filter(s => s.links.length > 0)

  return (
    <aside className="w-full h-full flex flex-col">
      {/* Search */}
      <div className="relative mb-5 shrink-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 dark:text-[var(--ig-muted)]" />
        <input
          type="text"
          placeholder="Search docs..."
          value={searchQ}
          onChange={e => onSearch(e.target.value)}
          className="w-full bg-slate-100 dark:bg-[rgba(138,83,214,0.06)] border border-slate-200 dark:border-[var(--ig-border)] rounded-lg py-2 pl-9 pr-4 text-xs text-slate-800 dark:text-[var(--ig-text)] placeholder-slate-400 dark:placeholder-[var(--ig-muted)] focus:outline-none focus:border-[#8A53D6] transition-all"
        />
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto space-y-1 pr-1 scrollbar-thin">
        {filteredSections.map(section => {
          const Icon = ICON_MAP[section.icon] ?? Book
          const isOpen = searchQ ? true : (expanded[section.title] ?? false)
          const hasActive = section.links.some(l => l.id === activeId)

          return (
            <div key={section.title}>
              <button
                onClick={() => setExpanded(p => ({ ...p, [section.title]: !isOpen }))}
                className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${hasActive ? 'text-[#8A53D6]' : 'text-slate-500 dark:text-[var(--ig-muted)] hover:text-slate-800 dark:hover:text-[var(--ig-text)]'}`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="flex-1 text-left">{section.title}</span>
                {!searchQ && (
                  isOpen
                    ? <ChevronDown className="w-3 h-3 shrink-0" />
                    : <ChevronRight className="w-3 h-3 shrink-0" />
                )}
              </button>

              {isOpen && (
                <ul className="ml-5 border-l border-slate-200 dark:border-[var(--ig-border)] pl-3 mt-0.5 mb-1 space-y-0.5">
                  {section.links.map(link => (
                    <li key={link.id}>
                      <button
                        onClick={() => onSelect(link.id)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-md text-sm transition-all duration-200 flex items-center gap-1.5 ${link.id === activeId
                          ? 'text-[#8A53D6] font-semibold bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.1)] border-l-2 border-l-[#8A53D6] pl-2'
                          : 'text-slate-500 dark:text-[var(--ig-muted)] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-[rgba(138,83,214,0.05)]'
                          }`}
                      >
                        {link.id === activeId && <span className="w-1 h-1 rounded-full bg-[#8A53D6] animate-pulse shrink-0" />}
                        <span className="truncate">{link.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────

function DocsPage() {
  const [activeId, setActiveId] = useState('welcome')
  const [searchQ, setSearchQ] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const page = findPage(activeId) ?? findPage('welcome')!

  const currentIdx = ALL_IDS.indexOf(activeId)
  const prevId = currentIdx > 0 ? ALL_IDS[currentIdx - 1] : null
  const nextId = currentIdx < ALL_IDS.length - 1 ? ALL_IDS[currentIdx + 1] : null

  const prevPage = prevId ? findPage(prevId) : null
  const nextPage = nextId ? findPage(nextId) : null

  const handleSelect = (id: string) => {
    setActiveId(id)
    setMobileOpen(false)
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const { main, highlight } = splitTitle(page.title)
  const PageIcon = ICON_MAP[SECTION_ICONS[page.section]] ?? Book
  


  // auto-expand section containing active page
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 })
  }, [activeId])

  return (
    <div className="relative min-h-screen md:h-screen md:overflow-hidden ig-noise bg-[var(--ig-bg)] flex flex-col ig-docs-page">
      {/* Background Interactive grid with a soft blurry overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.45]">
        <InteractiveGrid color="#8A53D6" />
        <div className="absolute inset-0 bg-[var(--ig-bg)]/80 backdrop-blur-[14px]" />
      </div>

      {/* Ultra-smooth Blurry Mesh Glow Orbs in the background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] bg-indigo-500/8 dark:bg-indigo-500/12 rounded-full blur-[150px]" />
        <div className="absolute top-[45%] left-[30%] w-[500px] h-[500px] bg-teal-500/4 dark:bg-teal-500/8 rounded-full blur-[120px]" />
      </div>

      {/* Original Mesh Glow Backgrounds for compatibility */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.1)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,168,136,0.04)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.05)_0%,transparent_70%)] pointer-events-none z-0" />

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-72 ig-card border-r border-slate-200 dark:border-[var(--ig-border)] p-5 overflow-y-auto z-10 bg-white dark:bg-[rgba(10,5,20,0.95)]">
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm font-bold text-slate-900 dark:text-[var(--ig-text)]">Documentation</span>
              <button onClick={() => setMobileOpen(false)} className="text-slate-500 dark:text-[var(--ig-muted)] hover:text-slate-800 dark:hover:text-[var(--ig-text)]">
                <X className="w-4 h-4" />
              </button>
            </div>
            <Sidebar activeId={activeId} onSelect={handleSelect} searchQ={searchQ} onSearch={setSearchQ} />
          </div>
        </div>
      )}

      <div className="relative z-10 pt-24 px-4 md:px-6 max-w-[1400px] mx-auto flex-1 min-h-0 flex flex-col w-full pb-6">

        {/* Mobile top bar */}
        <div className="md:hidden mb-4 flex items-center gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="ig-card rounded-xl px-3 py-2 flex items-center gap-2 text-sm text-slate-600 dark:text-[var(--ig-muted)] border border-slate-200 dark:border-[var(--ig-border)] bg-white/80 dark:bg-black/20"
          >
            <Menu className="w-4 h-4" />
            <span>Menu</span>
          </button>
          <span className="text-xs text-slate-500 dark:text-[var(--ig-muted)]">{page.section} / {page.title}</span>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-6 flex-1 min-h-0">

          {/* Sidebar — desktop */}
          <aside className="hidden md:flex flex-col w-60 shrink-0 ig-card rounded-[1.5rem] p-5 shadow-md overflow-hidden border-slate-200/60 dark:border-[rgba(138,83,214,0.18)] bg-white/75 dark:bg-[rgba(22,15,36,0.3)] backdrop-blur-xl">
            <Sidebar activeId={activeId} onSelect={handleSelect} searchQ={searchQ} onSearch={setSearchQ} />
          </aside>

          {/* Main content */}
          <main ref={mainRef} className="flex-1 min-w-0 overflow-y-auto pr-1 scrollbar-thin">
            <div className="ig-card rounded-[1.5rem] p-7 md:p-12 shadow-md border-slate-200/60 dark:border-[rgba(138,83,214,0.18)] bg-white/75 dark:bg-[rgba(22,15,36,0.3)] backdrop-blur-xl">

              {/* Badge Row */}
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.15)] dark:border-[rgba(138,83,214,0.2)] text-[10px] font-bold uppercase tracking-wider text-[#8A53D6]">
                  {page.section}
                </span>
                {page.badge && (
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[rgba(234,179,8,0.06)] dark:bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.15)] dark:border-[rgba(234,179,8,0.2)] text-[10px] font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400">
                    {page.badge}
                  </span>
                )}
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-center gap-4 mb-5 pb-6 border-b border-slate-200/80 dark:border-[rgba(138,83,214,0.12)]">
                <div className="w-12 h-12 rounded-2xl bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.15)] dark:border-[rgba(138,83,214,0.18)] flex items-center justify-center text-[#8A53D6] shadow-sm shrink-0">
                  <PageIcon className="w-6 h-6 animate-pulse" />
                </div>
                <h1 className="font-display-family text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                  {main} {highlight && <span className="ig-metallic">{highlight}</span>}
                </h1>
              </div>

              {/* Intro text */}
              <p className="text-slate-600 dark:text-[var(--ig-muted)] text-base md:text-lg mb-8 leading-relaxed">
                {page.intro}
              </p>



              {/* Content blocks */}
              <div className="space-y-4">
                {page.content.map((block, i) => renderBlock(block, i))}
              </div>

              {/* Prev / Next nav */}
              <div className="flex justify-between items-center pt-10 mt-12 border-t border-slate-200 dark:border-[var(--ig-border)]">
                {prevPage ? (
                  <button
                    onClick={() => handleSelect(prevId!)}
                    className="group flex flex-col gap-1 text-left cursor-pointer"
                  >
                    <span className="text-[10px] text-slate-400 dark:text-[var(--ig-muted)] uppercase tracking-widest flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5 rotate-180 transition-transform group-hover:-translate-x-0.5" /> Previous
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-[var(--ig-text)] group-hover:text-[#8A53D6] transition-colors">
                      {prevPage.title}
                    </span>
                  </button>
                ) : <div />}

                {nextPage ? (
                  <button
                    onClick={() => handleSelect(nextId!)}
                    className="group flex flex-col gap-1 text-right cursor-pointer"
                  >
                    <span className="text-[10px] text-slate-400 dark:text-[var(--ig-muted)] uppercase tracking-widest flex items-center gap-1 justify-end">
                      Next <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                    <span className="text-sm font-bold text-slate-800 dark:text-[var(--ig-text)] group-hover:text-[#8A53D6] transition-colors">
                      {nextPage.title}
                    </span>
                  </button>
                ) : <div />}
              </div>

            </div>

            {/* On this page (quick links for h2 headings) */}
            <div className="mt-4 ig-card rounded-[1.5rem] p-6 shadow-md border-slate-200/60 dark:border-[rgba(138,83,214,0.18)] bg-white/75 dark:bg-[rgba(22,15,36,0.3)] backdrop-blur-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[var(--ig-muted)] mb-3 flex items-center gap-1.5">
                <Menu className="w-3.5 h-3.5 text-[#8A53D6]" /> On this page
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {page.content
                  .filter(b => b.type === 'h2')
                  .map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500 dark:text-[var(--ig-muted)] hover:text-[#8A53D6] transition-colors cursor-pointer">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-[var(--ig-border)]" />
                      <span className="truncate">{'text' in b ? b.text : ''}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </main>

          {/* Right sticky "on this page" — large screens */}
          <aside className="hidden xl:flex flex-col w-48 shrink-0 overflow-y-auto">
            <div className="ig-card rounded-[1.5rem] p-4 shadow-md border-slate-200/60 dark:border-[rgba(138,83,214,0.18)] bg-white/75 dark:bg-[rgba(22,15,36,0.3)] backdrop-blur-xl">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[var(--ig-muted)] mb-3 flex items-center gap-1.5">
                <Menu className="w-3 h-3 text-[#8A53D6]" /> In this guide
              </p>
              <ul className="space-y-1.5 border-l border-slate-200 dark:border-[var(--ig-border)] pl-3">
                {page.content
                  .filter(b => b.type === 'h2')
                  .map((b, i) => (
                    <li key={i} className="text-xs text-slate-500 dark:text-[var(--ig-muted)] hover:text-[#8A53D6] transition-colors cursor-pointer leading-snug">
                      {'text' in b ? b.text : ''}
                    </li>
                  ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-[var(--ig-border)]">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-[var(--ig-muted)] mb-2 flex items-center gap-1">
                  <HelpCircle className="w-3 h-3 text-[#8A53D6]" /> Support
                </p>
                <a href="mailto:support@infraglide.com" className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-[var(--ig-muted)] hover:text-[#8A53D6] transition-colors">
                  <ExternalLink className="w-3 h-3" /> Contact support
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
