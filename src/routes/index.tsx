import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Play, Send, Github, Twitter, Linkedin, Menu, X,
  Activity, Zap, DollarSign, Server, ShieldCheck, GitBranch,
  Check, Sparkles, Cloud, Boxes, Cpu, Network, Layers, Database, Lock, Gauge, Workflow, Container,
  Settings, AlertTriangle, Shield, ChevronDown,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import logoUrl from "@/assets/infraglide-logo.png";
import awsCanvasBgUrl from "@/assets/aws_canvas_bg.png";
import driftDetectionBgUrl from "@/assets/drift_detection_bg.png";
import deployedResourcesUrl from "@/assets/deployed_resources.png";
import handCursorUrl from "@/assets/hand_cursor.png";
import pipelinesVideoUrl from "@/assets/pipelines.mp4";
import topologyVideoUrl from "@/assets/topology.mp4";

gsap.registerPlugin(ScrollTrigger);

/* ===================== Custom Arrow (theme shape) ===================== */
function Arrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 14" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 7 H24" />
      <path d="M18 1 L25 7 L18 13" />
      <circle cx="3" cy="7" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  component: InfraGlideLanding,
  head: () => ({
    meta: [
      { title: "InfraGlide — Your Cloud, Visualized" },
      { name: "description", content: "Visualize, design, and deploy cloud infrastructure with AI. Terraform-native, real-time drift detection, and cost optimization." },
    ],
  }),
});

/* ===================== Hooks ===================== */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    el.style.opacity = "0"; el.style.transform = "translateY(28px) scale(.97)";
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const t = e.target as HTMLElement;
          t.style.transition = "opacity 1s cubic-bezier(.2,.9,.3,1), transform 1s cubic-bezier(.2,.9,.3,1)";
          t.style.opacity = "1"; t.style.transform = "translateY(0) scale(1)";
          io.unobserve(t);
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { ref, val };
}

/* ===================== Cursor Glow ===================== */
function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let tx = x, ty = y;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.12; y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    const raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(138,83,214,.22) 0%, rgba(138,83,214,.08) 30%, transparent 70%)",
        filter: "blur(20px)",
        willChange: "transform",
      }}
    />
  );
}

/* ===================== Tilt Card ===================== */
function TiltCard({ children, className = "", strength = 8 }: { children: React.ReactNode; className?: string; strength?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${px * strength}deg) rotateX(${-py * strength}deg) translateZ(0)`;
  };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = "perspective(1200px) rotateY(0) rotateX(0)"; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className} style={{ transition: "transform .35s cubic-bezier(.2,.9,.3,1)" }}>
      {children}
    </div>
  );
}

/* ===================== Floating Nav ===================== */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const links = ["Workspace", "Pipelines", "Topology", "Security", "Pricing"];
  return (
    <header className={`fixed top-4 left-1/2 z-50 w-[min(1200px,calc(100%-2rem))] -translate-x-1/2 transition-all duration-500 ${scrolled ? "top-3" : "top-6"}`}>
      <nav 
        className="rounded-full px-4 py-2 flex items-center justify-between transition-all duration-500" 
        style={{ 
          background: scrolled ? "rgba(10, 5, 16, 0.75)" : "rgba(255, 255, 255, 0.15)",
          borderColor: scrolled ? "rgba(138, 83, 214, 0.25)" : "rgba(255, 255, 255, 0.22)",
          borderWidth: "1px",
          borderStyle: "solid",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "0 4px 30px rgba(255, 255, 255, 0.05)",
        }}
      >
        <a href="#" className="flex items-center gap-2 pl-2">
          <img src={logoUrl} alt="InfraGlide" className="h-8 w-auto" />
          <span className="h-2 w-2 rounded-full bg-[#8A53D6] ig-blink" />
        </a>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="px-3 py-2 rounded-full text-[#b0b0b0] hover:text-white hover:bg-[rgba(138,83,214,0.1)] transition-colors">{l}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#jane" className="hidden sm:inline-flex ig-cta px-4 py-2 text-sm items-center gap-1">
            Launch App <Arrow />
          </a>
          <button onClick={() => setOpen((o) => !o)} className="md:hidden ig-ghost p-2" aria-label="menu">
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>
      {open && (
        <div 
          className="md:hidden mt-2 rounded-2xl p-4 flex flex-col gap-2 transition-all duration-500"
          style={{
            background: scrolled ? "rgba(10, 5, 16, 0.75)" : "rgba(255, 255, 255, 0.15)",
            borderColor: scrolled ? "rgba(138, 83, 214, 0.25)" : "rgba(255, 255, 255, 0.22)",
            borderWidth: "1px",
            borderStyle: "solid",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-[#b0b0b0] hover:bg-[rgba(138,83,214,0.1)] hover:text-white">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ===================== Terminal Deploy logs data ===================== */
interface TerminalLine {
  text: string;
  type: 'info' | 'warn' | 'success' | 'structural' | 'provider' | 'region' | 'welcome';
}

const TERMINAL_LOGS: TerminalLine[] = [
  { text: "[INFO] Starting deployment process...", type: "info" },
  // { text: "[INFO] Getting pipeline information...", type: "info" },
  { text: "Executing command...", type: "warn" },
  { text: "", type: "structural" },
  { text: "┌─────────────────────────────────────────┐", type: "structural" },
  { text: "│   Welcome to  Infraglide  ☁            |", type: "welcome" },
  { text: "│   Terraform-driven multi-cloud platform │", type: "welcome" },
  { text: "└─────────────────────────────────────────┘", type: "structural" },
  { text: "", type: "structural" },
  { text: "[INFO] Initializing provider registry...", type: "info" },
  { text: "  ✓ aws     v5.48.0  (hashicorp/aws)", type: "provider" },
  { text: "  ✓ google  v5.28.0  (hashicorp/google)", type: "provider" },
  { text: "  ✓ azurerm v3.103   (hashicorp/azurerm)", type: "provider" },
  { text: "", type: "structural" },
  { text: "[INFO] Infraglide manages your infra so you don't.", type: "info" },
  { text: "[INFO] One config. Every cloud. Zero drift.", type: "info" },
  { text: "", type: "structural" },
  { text: "Plan:  12 to add,  0 to change,  0 to destroy.", type: "warn" },
  { text: "", type: "structural" },
  // { text: "[INFO] Applying across regions...", type: "info" },
  // { text: "  → us-east-1    [vpc, subnet, ec2, rds]", type: "region" },
  // { text: "  → eu-west-1    [vpc, subnet, ec2]", type: "region" },
  // { text: "  → ap-south-1   [vpc, cdn, s3-replication]", type: "region" },
  // { text: "", type: "structural" },
  { text: "Apply complete! Resources: 12 added, 0 changed.", type: "warn" },
  { text: "", type: "structural" },
  { text: "[INFO] About Infraglide ─────────────────────", type: "info" },
  { text: "  Ship infra changes in seconds, not sprints.", type: "welcome" },
  { text: "  Git-native. Policy-aware. Drift-free.", type: "welcome" },
  { text: "  Built for teams who ship fast and sleep well.", type: "welcome" },
  { text: "", type: "structural" },
  { text: "[SUCCESS] Your stack is live. ✓", type: "success" }
];

function RenderTerminalLine({ line, isLast }: { line: TerminalLine; isLast: boolean }) {
  const cursor = isLast ? <span className="terminal-cursor" /> : null;
  
  if (line.text === "") {
    return <div className="h-4 flex items-center">{cursor}</div>;
  }

  switch (line.type) {
    case "info":
      return (
        <div style={{ color: "#3fb950" }}>
          {line.text}
          {cursor}
        </div>
      );
    case "warn":
      return (
        <div style={{ color: "#d29922" }}>
          {line.text}
          {cursor}
        </div>
      );
    case "success":
      return (
        <div style={{ color: "#3fb950", fontWeight: "bold" }}>
          {line.text}
          {cursor}
        </div>
      );
    case "structural":
      return (
        <div style={{ color: "#8b949e" }}>
          {line.text}
          {cursor}
        </div>
      );
    case "welcome": {
      if (line.text.startsWith("│") && line.text.endsWith("│")) {
        const content = line.text.slice(1, -1);
        return (
          <div style={{ color: "#8b949e" }}>
            <span>│</span>
            <span style={{ color: "#e6edf3" }}>{content}</span>
            <span>│</span>
            {cursor}
          </div>
        );
      }
      return (
        <div style={{ color: "#e6edf3" }}>
          {line.text}
          {cursor}
        </div>
      );
    }
    case "provider": {
      const match = line.text.match(/^(\s+)(✓)(\s+)(\w+)(\s+)(v[\d\.]+)(\s+)(\(.*\))$/);
      if (match) {
        const [, spaces1, check, spaces2, name, spaces3, version, spaces4, details] = match;
        return (
          <div>
            <span style={{ color: "#e6edf3" }}>{spaces1}</span>
            <span style={{ color: "#3fb950" }}>{check}</span>
            <span style={{ color: "#e6edf3" }}>{spaces2 + name + spaces3}</span>
            <span style={{ color: "#e6edf3" }}>{version}</span>
            <span style={{ color: "#e6edf3" }}>{spaces4}</span>
            <span style={{ color: "#8b949e" }}>{details}</span>
            {cursor}
          </div>
        );
      }
      return (
        <div style={{ color: "#e6edf3" }}>
          {line.text}
          {cursor}
        </div>
      );
    }
    case "region": {
      const match = line.text.match(/^(\s+)(→)(\s+)([\w\-]+)(\s+)(\[.*\])$/);
      if (match) {
        const [, spaces1, arrow, spaces2, region, spaces3, resources] = match;
        return (
          <div>
            <span style={{ color: "#e6edf3" }}>{spaces1}</span>
            <span style={{ color: "#58a6ff" }}>{arrow}</span>
            <span style={{ color: "#e6edf3" }}>{spaces2 + region + spaces3}</span>
            <span style={{ color: "#8b949e" }}>{resources}</span>
            {cursor}
          </div>
        );
      }
      return (
        <div style={{ color: "#e6edf3" }}>
          {line.text}
          {cursor}
        </div>
      );
    }
    default:
      return (
        <div style={{ color: "#e6edf3" }}>
          {line.text}
          {cursor}
        </div>
      );
  }
}

/* ===================== Hero ===================== */
function Hero() {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subheadingRef = useRef<HTMLParagraphElement | null>(null);
  const consoleRef = useRef<HTMLDivElement | null>(null);

  // Scroll visibility for Terminal UI: every 80px scroll reveals one more line
  const [visibleLinesCount, setVisibleLinesCount] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const count = Math.min(TERMINAL_LOGS.length, Math.floor(scrollY / 16) + 3);
      setVisibleLinesCount(prev => Math.max(prev, count));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll terminal console to bottom when new lines appear
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [visibleLinesCount]);

  useEffect(() => {
    const el = gridRef.current; if (!el) return;
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom -50%",
          scrub: 4.5,
        }
      });

      tl.fromTo(
        [".hero-heading-char", ".hero-subheading"],
        { fontWeight: 500, fontVariationSettings: "'wght' 500" },
        { fontWeight: 600, fontVariationSettings: "'wght' 600", duration: 1.2 },
        0
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const word = "InfraGlide";

  return (
    <section ref={heroRef} className="relative pt-40 pb-28 overflow-hidden ig-noise" style={{ background: "radial-gradient(ellipse at top, #1a0b2e 0%, #0a0510 40%, #000 80%)" }}>
      <div ref={gridRef} className="ig-grid-bg absolute inset-0 -z-0" style={{ transition: "transform .8s ease-out" }} />
      <div className="ig-portal-bg absolute inset-0 -z-0 opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Left-aligned Text Content */}
        <div className="md:col-span-7 text-left flex flex-col justify-center">
          <h1 ref={headingRef} className="font-display-family text-[13vw] leading-[0.85] sm:text-7xl md:text-[8.5rem]">
            {word.split("").map((c, i) => (
              <span key={i} className="hero-heading-char ig-metallic inline-block" style={{ animationDelay: `${i * 0.04}s` }}>{c}</span>
            ))}
          </h1>
          <p ref={subheadingRef} className="hero-subheading mt-4 text-2xl md:text-5xl font-display-family text-[#b07eff]">
            Your Cloud, Visualized.
          </p>
          <p className="mt-6 text-[#b0b0b0] text-lg max-w-xl">
            Visualize, design, and deploy cloud infrastructure with AI. Terraform-native, real-time drift detection, and cost optimization — all on one canvas.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
            <a href="#jane" className="ig-cta px-8 py-4 inline-flex items-center gap-2 text-lg">
              Start Designing <Arrow />
            </a>
            <a href="#features" className="ig-ghost px-8 py-4 inline-flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" /> Watch Demo
            </a>
          </div>
        </div>

        {/* Right Column: Terminal Deploy UI */}
        <div className="md:col-span-5 flex items-center justify-center relative min-h-[440px]">
          <div className="w-full max-w-[480px] rounded-xl overflow-hidden bg-[#0d1117] border border-[#30363d] flex flex-col font-mono text-[13px] leading-relaxed select-none h-[420px]">
            
            {/* macOS Title Bar */}
            <div className="w-full bg-[#161b22] border-b border-[#30363d] px-4 py-3 flex items-center justify-between relative shrink-0">
              {/* macOS Traffic Lights */}
              <div className="flex items-center gap-1.5 z-10">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
              </div>
              
              {/* Centered Title */}
              <div className="absolute inset-0 flex items-center justify-center text-[#8b949e] font-semibold text-xs pointer-events-none">
                &gt;_ Terraform Deploy ↻
              </div>
              
              {/* Right side spacer for centering */}
              <div className="w-16" />
            </div>

            {/* Terminal Body Console */}
            <div ref={consoleRef} className="flex-1 p-4 overflow-y-auto space-y-1 text-left scrollbar-thin">
              {TERMINAL_LOGS.slice(0, visibleLinesCount).map((line, idx) => (
                <div 
                  key={idx} 
                  className="terminal-line"
                >
                  <RenderTerminalLine 
                    line={line} 
                    isLast={idx === visibleLinesCount - 1} 
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      {/* Floating orb */}
      <div aria-hidden className="absolute left-1/2 top-[68%] -translate-x-1/2 h-[420px] w-[420px] rounded-full ig-portal-pulse"
        style={{ background: "radial-gradient(circle, rgba(138,83,214,.5) 0%, rgba(138,83,214,.15) 40%, transparent 70%)", filter: "blur(40px)" }} />
    </section>
  );
}

/* ===================== Metric Card ===================== */
function Metric({ target, suffix = "", label, decimals = 0, icon: Icon }: { target: number; suffix?: string; label: string; decimals?: number; icon: React.ComponentType<{ className?: string }> }) {
  const { ref, val } = useCounter(target);
  const display = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return (
    <TiltCard className="ig-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="h-9 w-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(138,83,214,.15)", border: "1px solid rgba(138,83,214,.3)" }}>
          <Icon className="w-4 h-4 text-[#b07eff]" />
        </div>
        <span className="text-xs text-[#5a3a8a]">live</span>
      </div>
      <div className="font-display text-4xl md:text-5xl ig-metallic">
        <span ref={ref}>{display}</span>{suffix}
      </div>
      <div className="mt-1 text-sm text-[#b0b0b0]">{label}</div>
    </TiltCard>
  );
}

/* ===================== Trend Chart (canvas) ===================== */
function TrendChart() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d"); if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const draw = () => {
      const w = c.clientWidth, h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);
      const data = [82, 88, 91, 95, 92, 97, 99.8];
      const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
      const bw = w / data.length;
      data.forEach((d, i) => {
        const bh = (d / 100) * (h - 30);
        const x = i * bw + bw * 0.18;
        const y = h - bh - 18;
        const grd = ctx.createLinearGradient(0, y, 0, h);
        grd.addColorStop(0, "#8A53D6"); grd.addColorStop(1, "rgba(138,83,214,.05)");
        ctx.fillStyle = grd;
        const rw = bw * 0.64;
        ctx.beginPath();
        const r = 6;
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + rw - r, y); ctx.quadraticCurveTo(x + rw, y, x + rw, y + r);
        ctx.lineTo(x + rw, h - 18); ctx.lineTo(x, h - 18); ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath(); ctx.fill();
        ctx.fillStyle = "#5a3a8a"; ctx.font = "10px Satoshi, sans-serif"; ctx.textAlign = "center";
        ctx.fillText(days[i], x + rw / 2, h - 4);
      });
    };
    draw();
    const ro = new ResizeObserver(draw); ro.observe(c);
    return () => ro.disconnect();
  }, []);
  return <canvas ref={ref} className="w-full h-32" />;
}

/* ===================== Metrics Section ===================== */
function Metrics() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 working-cursor" id="workspace" style={{ background: "radial-gradient(ellipse at top, #140b24 0%, #0a0510 50%, #000 90%)" }}>
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#8A53D6] mb-2">Visual Workspace</div>
            <h2 className="font-display text-4xl md:text-5xl ig-metallic">Real-time, every second.</h2>
          </div>
        </div>
        <InteractiveCanvas />
      </div>
    </section>
  );
}

/* ===================== Jane AI ===================== */
type Msg = { from: "jane" | "user"; text: string };
const replies: { keywords: string[]; text: string }[] = [
  { keywords: ["vpc", "network"], text: "I'll create a VPC with 10.0.0.0/16, public subnets in us-east-1a/b, an internet gateway, and a NAT for private subnets. Ready to deploy?" },
  { keywords: ["debug", "drift"], text: "Detected drift in subnet configuration. Run `terraform plan` to fix — I can auto-generate the patch if you'd like." },
  { keywords: ["deploy"], text: "Triggering pipeline `web-prod` → Stages: Plan ✓ · Apply ⏳ · Verify. ETA 2m 14s." },
  { keywords: ["cost"], text: "You can save $4,210/mo by right-sizing 7 EC2 instances and switching `rds-prod` to Graviton. Apply optimization?" },
  { keywords: ["3-tier", "3 tier", "app"], text: "Designing 3-tier: ALB → ECS (Fargate) → RDS Multi-AZ. Adding CloudFront + WAF in front. Estimated cost: $312/mo." },
  { keywords: ["health", "check"], text: "All 56 deploys healthy. 1 warning: `worker-eu` CPU at 87% — recommend scaling out." },
];
function janeAnswer(text: string): string {
  const l = text.toLowerCase();
  for (const r of replies) if (r.keywords.some((k) => l.includes(k))) return r.text;
  return "I can design networks, generate Terraform, debug drift, and forecast cost. Try: 'design a VPC', 'check health', or 'cost optimization'.";
}
function Jane() {
  const ref = useReveal<HTMLDivElement>();
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "jane", text: "Hi — I'm Jane. Ask me to design a VPC, debug drift, or forecast your cloud cost." },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => { scrollRef.current?.scrollTo({ top: 9e9, behavior: "smooth" }); }, [msgs, typing]);
  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { from: "user", text }]); setInput(""); setTyping(true);
    setTimeout(() => { setMsgs((m) => [...m, { from: "jane", text: janeAnswer(text) }]); setTyping(false); }, 700);
  };
  const suggestions = ["Design a 3-tier app", "Check health", "Cost optimization"];
  return (
    <section className="relative py-24 working-cursor" id="jane">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <TiltCard strength={4} className="ig-card rounded-3xl p-8 md:p-12 ig-glow-lg overflow-hidden relative" >
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(138,83,214,.35), transparent 70%)", filter: "blur(40px)" }} />
          <div className="grid md:grid-cols-2 gap-10 relative">
            <div>
              <div className="inline-flex items-center gap-2 ig-pill px-3 py-1 text-xs text-[#b07eff] mb-6">
                <Sparkles className="w-3 h-3" /> Jane AI · v3
              </div>
              <h2 className="font-display text-4xl md:text-6xl ig-metallic leading-[0.95]">Meet Jane,<br/>your AI infrastructure architect.</h2>
              <p className="mt-5 text-[#b0b0b0] max-w-md">She speaks Terraform, reads your topology, and ships production changes — with the receipts.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)} className="ig-ghost px-3 py-1.5 text-xs">{s}</button>
                ))}
              </div>
            </div>
            <div className="ig-card rounded-2xl p-4 flex flex-col h-[420px]" style={{ background: "rgba(0,0,0,.5)" }}>
              <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-3 pr-2">
                {msgs.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.from === "user"
                        ? "bg-[#8A53D6] text-white"
                        : "bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.2)] text-[#e5e5e5]"
                    }`}>{m.text}</div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl px-4 py-3 bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.2)] flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b07eff] ig-blink" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b07eff] ig-blink" style={{ animationDelay: ".2s" }} />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b07eff] ig-blink" style={{ animationDelay: ".4s" }} />
                    </div>
                  </div>
                )}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="mt-3 flex gap-2">
                <input value={input} onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask AI to design a VPC or debug a pipeline..."
                  className="flex-1 bg-black/60 border border-[rgba(138,83,214,0.3)] rounded-full px-4 py-2.5 text-sm text-white placeholder:text-[#5a3a8a] focus:outline-none focus:border-[#8A53D6] focus:ig-glow" />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="group relative isolate overflow-hidden rounded-full bg-neutral-950 px-5 py-2 text-[14px] font-medium text-white transition-all hover:bg-neutral-900 shrink-0 shadow-[0_0_20px_-5px_rgba(138,83,214,0.4)] hover:shadow-[0_0_25px_-5px_rgba(138,83,214,0.6)]"
                  aria-label="send"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    ask AI <Sparkles className="w-4 h-4 text-violet-300" />
                  </span>
                  
                  {/* Gradient Border Simulation */}
                  <div 
                    className="absolute inset-0 -z-10 rounded-full p-[1px] animate-border-spin" 
                    style={{ 
                      '--gradient-angle': '0deg',
                      background: 'conic-gradient(from var(--gradient-angle), transparent 0%, #8A53D6 40%, #38bdf8 50%, transparent 60%, transparent 100%)'
                    } as React.CSSProperties} 
                  />
                  
                  {/* Inner Background (keeps text readable) */}
                  <div className="absolute inset-[1px] -z-10 rounded-full bg-neutral-950" />
                  
                  {/* Shine Effect Overlay */}
                  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(138,83,214,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.button>
              </form>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}

/* ===================== Drift Gauge ===================== */
function DriftGauge() {
  const [pct, setPct] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setPct(98); io.disconnect(); } });
    }, { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const C = 2 * Math.PI * 56;
  return (
    <div ref={ref} className="flex flex-col items-center justify-center h-full">
      <svg viewBox="0 0 140 140" className="w-36 h-36">
        <circle cx="70" cy="70" r="56" stroke="rgba(138,83,214,.15)" strokeWidth="10" fill="none" />
        <circle cx="70" cy="70" r="56" stroke="#8A53D6" strokeWidth="10" fill="none" strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={C - (C * pct) / 100}
          style={{ transition: "stroke-dashoffset 2s cubic-bezier(.2,.9,.3,1)", transform: "rotate(-90deg)", transformOrigin: "70px 70px", filter: "drop-shadow(0 0 8px rgba(138,83,214,.7))" }} />
        <text x="70" y="76" textAnchor="middle" className="font-display" fill="#fff" fontSize="28">{pct}%</text>
      </svg>
      <div className="text-xs text-[#b0b0b0] mt-2">Compliant infrastructure</div>
    </div>
  );
}

/* ===================== Mini Bar Chart ===================== */
function MiniBars() {
  const data = [42, 55, 38, 61, 48, 72, 65, 80];
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1.5 h-24">
      {data.map((d, i) => (
        <div key={i} className="flex-1 rounded-t" style={{
          height: `${(d / max) * 100}%`,
          background: "linear-gradient(to top, rgba(138,83,214,.1), #8A53D6)",
          animation: `ig-reveal .8s ${i * 0.06}s both`,
        }} />
      ))}
    </div>
  );
}

/* ===================== Topology Mini ===================== */
function TopologyMini() {
  return (
    <svg viewBox="0 0 280 160" className="w-full h-full">
      <defs>
        <radialGradient id="np" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#8A53D6" /><stop offset="100%" stopColor="#1a0b2e" /></radialGradient>
      </defs>
      {[
        ["M140,80 L60,40","M140,80 L60,120","M140,80 L220,40","M140,80 L220,120","M60,40 L220,40","M60,120 L220,120"],
      ][0].map((d, i) => (
        <path key={i} d={d} stroke="#8A53D6" strokeOpacity=".4" strokeWidth="1.4" fill="none" className="ig-flow" />
      ))}
      {[[140,80,14],[60,40,9],[60,120,9],[220,40,9],[220,120,9]].map(([x,y,r],i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="url(#np)" stroke="#b07eff" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

interface SidebarItem {
  type: string;
  label: string;
  sublabel: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const sidebarItems: SidebarItem[] = [
  { type: "VM", label: "Linux VM", sublabel: "vm-linux", color: "blue", icon: Server },
  { type: "VM", label: "Windows VM", sublabel: "vm-win", color: "blue", icon: Server },
  { type: "AKS", label: "AKS Cluster", sublabel: "aks-prod", color: "blue", icon: Cpu },
  { type: "Container", label: "Container Instance", sublabel: "ci-app", color: "blue", icon: Container },
];

interface NodeData {
  id: string;
  type: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  color: string;
}

interface ConnectionData {
  id: string;
  from: string;
  to: string;
}

function InteractiveCanvas() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);
  const layerBgRef = useRef<HTMLDivElement | null>(null);
  const layerContainersRef = useRef<HTMLDivElement | null>(null);
  const layerSvgRef = useRef<SVGSVGElement | null>(null);
  const layerNodesRef = useRef<HTMLDivElement | null>(null);

  const [cursorUrl, setCursorUrl] = useState<string | null>(null);
  const [nodes, setNodes] = useState<NodeData[]>([
    { id: "linux-vm", type: "VM", label: "Linux VM", sublabel: "vm-linux", x: 180, y: 135, color: "blue" },
  ]);
  
  const [connections, setConnections] = useState<ConnectionData[]>([]);

  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  
  const [draggedSidebarItem, setDraggedSidebarItem] = useState<SidebarItem | null>(null);
  const [draggedSidebarPos, setDraggedSidebarPos] = useState({ x: 0, y: 0 });

  const [connectingFromId, setConnectingFromId] = useState<string | null>(null);
  const [tempLineEnd, setTempLineEnd] = useState<{ x: number; y: number } | null>(null);

  // Recolor custom hand cursor to match theme color #8A53D6
  useEffect(() => {
    const img = new Image();
    img.src = handCursorUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      ctx.drawImage(img, 0, 0, 225, 225, 0, 0, 32, 32);
      
      const imgData = ctx.getImageData(0, 0, 32, 32);
      const data = imgData.data;
      
      const rTheme = 138;
      const gTheme = 83;
      const bTheme = 214;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        
        if (a < 5) continue;
        
        const brightness = (r + g + b) / 3;
        
        if (brightness > 200) {
          // Soft translucent fill inside the glove
          data[i] = rTheme;
          data[i + 1] = gTheme;
          data[i + 2] = bTheme;
          data[i + 3] = 40;
        } else {
          // Solid theme outline
          data[i] = rTheme;
          data[i + 1] = gTheme;
          data[i + 2] = bTheme;
          data[i + 3] = 255;
        }
      }
      
      ctx.putImageData(imgData, 0, 0);
      setCursorUrl(canvas.toDataURL("image/png"));
    };
  }, []);

  // 4-Layer 3D Scroll Parallax Explosion
  useEffect(() => {
    const handleScroll = () => {
      const card = cardRef.current;
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const screenCenter = viewportHeight / 2;
      
      const maxDistance = viewportHeight * 0.75;
      const distance = Math.abs(cardCenter - screenCenter);
      const explodeFactor = Math.min(1, distance / maxDistance);

      const bg = layerBgRef.current;
      const containers = layerContainersRef.current;
      const svg = layerSvgRef.current;
      const nodesContainer = layerNodesRef.current;

      if (bg) {
        bg.style.transform = `translate3d(0, 0, ${-120 * explodeFactor}px) rotateX(${15 * explodeFactor}deg) rotateY(${-10 * explodeFactor}deg)`;
        bg.style.opacity = `${1 - 0.2 * explodeFactor}`;
      }

      if (containers) {
        containers.style.transform = `translate3d(0, 0, ${20 * explodeFactor}px) rotateX(${15 * explodeFactor}deg) rotateY(${-10 * explodeFactor}deg)`;
        containers.style.opacity = `${1 - 0.15 * explodeFactor}`;
      }

      if (svg) {
        svg.style.transform = `translate3d(0, 0, ${50 * explodeFactor}px) rotateX(${15 * explodeFactor}deg) rotateY(${-10 * explodeFactor}deg)`;
        svg.style.opacity = `${1 - 0.25 * explodeFactor}`;
      }

      if (nodesContainer) {
        nodesContainer.style.transform = `translate3d(0, 0, ${90 * explodeFactor}px) rotateX(${15 * explodeFactor}deg) rotateY(${-10 * explodeFactor}deg)`;
        
        const nodeEls = nodesContainer.querySelectorAll("[data-node-id]");
        nodeEls.forEach(el => {
          const nodeId = el.getAttribute("data-node-id");
          let tx = 0;
          let ty = 0;
          
          if (nodeId === "linux-vm") {
            tx = -80 * explodeFactor;
            ty = -30 * explodeFactor;
          } else {
            const hash = nodeId ? nodeId.charCodeAt(0) + nodeId.charCodeAt(nodeId.length - 1) : 0;
            tx = ((hash % 10) - 5) * 16 * explodeFactor;
            ty = (((hash >> 1) % 10) - 5) * 16 * explodeFactor;
          }
          
          const htmlEl = el as HTMLElement;
          htmlEl.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nodes]);

  // Handle Drag & Drop operations
  useEffect(() => {
    const handleWindowMouseMove = (e: MouseEvent) => {
      if (draggingNodeId && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        setNodes(prev => prev.map(node => {
          if (node.id === draggingNodeId) {
            const newX = Math.max(5, Math.min(rect.width - 175, mouseX - dragStartPos.x));
            const newY = Math.max(5, Math.min(rect.height - 63, mouseY - dragStartPos.y));
            return { ...node, x: newX, y: newY };
          }
          return node;
        }));
      }

      if (connectingFromId && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        setTempLineEnd({ x: mouseX, y: mouseY });
      }

      if (draggedSidebarItem) {
        setDraggedSidebarPos({ x: e.clientX, y: e.clientY });
      }
    };

    const handleWindowMouseUp = (e: MouseEvent) => {
      if (draggingNodeId) {
        setDraggingNodeId(null);
      }
      
      if (draggedSidebarItem && canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const isInside = (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
        
        if (isInside) {
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          const newNodeId = `${draggedSidebarItem.type.toLowerCase()}-${Date.now()}`;
          const newNode: NodeData = {
            id: newNodeId,
            type: draggedSidebarItem.type,
            label: draggedSidebarItem.label,
            sublabel: `${draggedSidebarItem.sublabel}-${Math.floor(Math.random() * 90) + 10}`,
            x: Math.max(5, Math.min(rect.width - 175, mouseX - 85)),
            y: Math.max(5, Math.min(rect.height - 63, mouseY - 29)),
            color: draggedSidebarItem.color
          };
          setNodes(prev => [...prev, newNode]);
        }
        setDraggedSidebarItem(null);
      }
    };

    if (draggingNodeId || draggedSidebarItem || connectingFromId) {
      window.addEventListener("mousemove", handleWindowMouseMove);
      window.addEventListener("mouseup", handleWindowMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, [draggingNodeId, dragStartPos, draggedSidebarItem, connectingFromId]);

  const handleNodeClick = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation();
    if (connectingFromId) {
      if (connectingFromId !== nodeId) {
        const exists = connections.some(c => 
          (c.from === connectingFromId && c.to === nodeId) ||
          (c.from === nodeId && c.to === connectingFromId)
        );
        if (!exists) {
          setConnections(prev => [...prev, {
            id: `c-${Date.now()}`,
            from: connectingFromId,
            to: nodeId
          }]);
        }
      }
      setConnectingFromId(null);
      setTempLineEnd(null);
    }
  };

  const handleCanvasClick = () => {
    if (connectingFromId) {
      setConnectingFromId(null);
      setTempLineEnd(null);
    }
  };

  const deleteNode = (e: React.MouseEvent, nodeId: string) => {
    e.stopPropagation();
    setNodes(prev => prev.filter(n => n.id !== nodeId));
    setConnections(prev => prev.filter(c => c.from !== nodeId && c.to !== nodeId));
  };

  const getConnectionPath = (from: NodeData, to: NodeData) => {
    const w = 170;
    const h = 58;
    
    if (from.x + w < to.x) {
      const x1 = from.x + w;
      const y1 = from.y + h / 2;
      const x2 = to.x;
      const y2 = to.y + h / 2;
      const mx = (x1 + x2) / 2;
      return `M ${x1},${y1} L ${mx},${y1} L ${mx},${y2} L ${x2},${y2}`;
    } else if (to.x + w < from.x) {
      const x1 = from.x;
      const y1 = from.y + h / 2;
      const x2 = to.x + w;
      const y2 = to.y + h / 2;
      const mx = (x1 + x2) / 2;
      return `M ${x1},${y1} L ${mx},${y1} L ${mx},${y2} L ${x2},${y2}`;
    } else {
      if (from.y + h < to.y) {
        const x1 = from.x + w / 2;
        const y1 = from.y + h;
        const x2 = to.x + w / 2;
        const y2 = to.y;
        const my = (y1 + y2) / 2;
        return `M ${x1},${y1} L ${x1},${my} L ${x2},${my} L ${x2},${y2}`;
      } else {
        const x1 = from.x + w / 2;
        const y1 = from.y;
        const x2 = to.x + w / 2;
        const y2 = to.y + h;
        const my = (y1 + y2) / 2;
        return `M ${x1},${y1} L ${x1},${my} L ${x2},${my} L ${x2},${y2}`;
      }
    }
  };

  const startNode = nodes.find(n => n.id === connectingFromId);

  return (
    <div
      ref={cardRef}
      className="flex-1 mt-4 relative border border-slate-200 bg-white rounded-2xl overflow-hidden flex flex-col min-h-[460px] w-full shadow-2xl text-slate-800"
      style={{
        perspective: "1000px",
        cursor: cursorUrl ? `url(${cursorUrl}) 16 16, auto` : 'auto',
      }}
      onClick={handleCanvasClick}
    >
      {/* Product Top Header Bar */}
      <div className="w-full shrink-0 bg-[#f8f9fa] border-b border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs select-none">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 border border-slate-200 rounded px-2.5 py-1 bg-white shadow-sm font-semibold transition-colors">
            <span className="font-mono">←</span> Back
          </button>
          <span className="font-bold text-slate-700">linux-web-app</span>
          <span className="bg-amber-50 text-amber-700 border border-amber-200/50 rounded px-2.5 py-0.5 text-[10px] font-bold">Destroyed</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-200/60 p-0.5 rounded-lg border border-slate-200/80">
          <span className="bg-white text-purple-600 rounded-md px-3 py-1 font-bold shadow-sm cursor-default">Canvas</span>
          <span className="text-slate-500 hover:text-slate-700 px-3 py-1 cursor-pointer font-medium transition-colors">Terraform Configuration</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded px-3.5 py-1.5 font-bold shadow-sm transition-colors">
            🚀 Deploy
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white rounded px-3.5 py-1.5 font-bold shadow-sm transition-colors">
            Destroy
          </button>
        </div>
      </div>

      {/* Main Workspace split */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Sidebar - left side */}
        <div className="w-[170px] shrink-0 border-r border-slate-200 bg-white flex flex-col p-3 z-30 select-none text-slate-700">
          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">Components</div>
          <input 
            type="text" 
            placeholder="Search components..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 mb-3 text-xs focus:outline-none focus:border-purple-500 focus:bg-white transition-all"
          />
          {/* Tabs */}
          <div className="flex border-b border-slate-200 mb-3 text-[10px] font-bold text-center">
            <span className="flex-1 pb-1 text-slate-400 cursor-pointer hover:text-slate-600">AWS</span>
            <span className="flex-1 pb-1 text-purple-600 border-b-2 border-purple-600 cursor-pointer">Azure</span>
            <span className="flex-1 pb-1 text-slate-400 cursor-pointer hover:text-slate-600">GCP</span>
          </div>
          
          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-2">Compute</div>
          <div className="flex-1 space-y-1.5 overflow-y-auto pr-1">
            {sidebarItems.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 rounded-lg p-2.5 flex items-center gap-2 cursor-grab active:cursor-grabbing transition-all text-slate-700 font-medium"
                  onMouseDown={(e) => {
                    setDraggedSidebarItem(item);
                    setDraggedSidebarPos({ x: e.clientX, y: e.clientY });
                  }}
                >
                  <Icon className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                  <span className="text-[10.5px] truncate">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Canvas Area - right side */}
        <div className="flex-1 relative overflow-hidden h-full flex items-center justify-center bg-[#f4f5f7]/60">
          <div 
            ref={canvasRef} 
            className="w-[580px] h-[350px] relative shrink-0 transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Layer 1: Background grid image */}
            <div 
              ref={layerBgRef}
              className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out transform-gpu"
              style={{ 
                transformStyle: "preserve-3d", 
                transform: "translate3d(0, 0, 0px)",
                background: "#f8f9fa",
                backgroundImage: "radial-gradient(#ccd0d5 1px, transparent 1px)",
                backgroundSize: "16px 16px"
              }}
            />

            {/* Layer 2: Boundaries (Region & Resource Group) */}
            <div
              ref={layerContainersRef}
              className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out transform-gpu"
              style={{ transformStyle: "preserve-3d", transform: "translate3d(0, 0, 0px)" }}
            >
              {/* Region Container */}
              <div 
                className="absolute"
                style={{ left: "40px", top: "20px", width: "500px", height: "310px" }}
              >
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="-513.75 -286 1027.5 572" preserveAspectRatio="none">
                  <path 
                    strokeLinecap="butt" 
                    strokeLinejoin="miter" 
                    fillOpacity="0.01" 
                    fill="rgb(138,83,214)" 
                    strokeMiterlimit="4" 
                    stroke="rgba(138,83,214,0.5)" 
                    strokeOpacity="1" 
                    strokeWidth="1.5" 
                    strokeDasharray="4,4"
                    d=" M513.75,-278 C513.75,-278 513.75,278 513.75,278 C513.75,282.4151916503906 510.1651916503906,286 505.75,286 C505.75,286 -505.75,286 -505.75,286 C-510.1651916503906,286 -513.75,282.4151916503906 -513.75,278 C-513.75,278 -513.75,-278 -513.75,-278 C-513.75,-282.4151916503906 -510.1651916503906,-286 -505.75,-286 C-505.75,-286 505.75,-286 505.75,-286 C510.1651916503906,-286 513.75,-282.4151916503906 513.75,-278z"
                  />
                </svg>
                <div className="absolute -top-3 left-4 bg-purple-100 border border-purple-200 text-purple-800 text-[9px] font-bold rounded px-2 py-0.5 shadow-sm pointer-events-auto">
                  region - us-east-1
                </div>
              </div>

              {/* Resource Group Container */}
              <div 
                className="absolute"
                style={{ left: "90px", top: "60px", width: "400px", height: "230px" }}
              >
                <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="-513.75 -286 1027.5 572" preserveAspectRatio="none">
                  <path 
                    strokeLinecap="butt" 
                    strokeLinejoin="miter" 
                    fillOpacity="0.02" 
                    fill="rgb(59,130,246)" 
                    strokeMiterlimit="4" 
                    stroke="rgba(59,130,246,0.5)" 
                    strokeOpacity="1" 
                    strokeWidth="1.2" 
                    d=" M513.75,-278 C513.75,-278 513.75,278 513.75,278 C513.75,282.4151916503906 510.1651916503906,286 505.75,286 C505.75,286 -505.75,286 -505.75,286 C-510.1651916503906,286 -513.75,282.4151916503906 -513.75,278 C-513.75,278 -513.75,-278 -513.75,-278 C-513.75,-282.4151916503906 -510.1651916503906,-286 -505.75,-286 C-505.75,-286 505.75,-286 505.75,-286 C510.1651916503906,-286 513.75,-282.4151916503906 513.75,-278z"
                  />
                </svg>
                <div className="absolute -top-3 left-4 bg-blue-100 border border-blue-200 text-blue-800 text-[9px] font-bold rounded px-2 py-0.5 shadow-sm pointer-events-auto">
                  Resource Group: Group
                </div>
              </div>
            </div>

            {/* Layer 3: Connection SVG Paths */}
            <svg 
              ref={layerSvgRef}
              className="absolute inset-0 pointer-events-none z-10 w-full h-full transition-transform duration-100 ease-out transform-gpu" 
              viewBox="0 0 580 350"
              style={{ transformStyle: "preserve-3d", transform: "translate3d(0, 0, 0px)" }}
            >
              <defs>
                <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#8A53D6" />
                </marker>
              </defs>
              
              {connections.map(c => {
                const fromNode = nodes.find(n => n.id === c.from);
                const toNode = nodes.find(n => n.id === c.to);
                if (!fromNode || !toNode) return null;
                
                const path = getConnectionPath(fromNode, toNode);
                return (
                  <g key={c.id}>
                    <path
                      d={path}
                      stroke="#8A53D6"
                      strokeWidth="4"
                      strokeOpacity="0.15"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d={path}
                      stroke="#8A53D6"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      markerEnd="url(#arrow-purple)"
                      className="ig-flow"
                      fill="none"
                    />
                  </g>
                );
              })}
              
              {connectingFromId && startNode && tempLineEnd && (
                <path
                  d={`M ${startNode.x + 170},${startNode.y + 29} L ${tempLineEnd.x},${tempLineEnd.y}`}
                  stroke="#8A53D6"
                  strokeWidth="1.8"
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                  fill="none"
                />
              )}
            </svg>

            {/* Layer 4: Draggable Resource Nodes */}
            <div 
              ref={layerNodesRef}
              className="absolute inset-0 w-full h-full transition-transform duration-100 ease-out transform-gpu"
              style={{ transformStyle: "preserve-3d", transform: "translate3d(0, 0, 0px)" }}
            >
              {nodes.map(node => {
                const Icon = node.type === "VM" ? Server : node.type === "AKS" ? Cpu : Container;
                const isDragging = node.id === draggingNodeId;
                const isConnecting = node.id === connectingFromId;
                
                return (
                  <div
                    key={node.id}
                    data-node-id={node.id}
                    className={`absolute w-[170px] h-[58px] border border-slate-200 hover:border-purple-500/50 rounded-xl bg-white/95 px-3 py-2 flex items-center gap-3 transition-shadow duration-300 group select-none z-20 ${isDragging ? "shadow-lg border-purple-500/60" : "shadow-sm"}`}
                    style={{
                      left: `${node.x}px`,
                      top: `${node.y}px`,
                      transformStyle: "preserve-3d",
                      transition: isDragging ? "none" : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                    onMouseDown={(e) => {
                      if ((e.target as HTMLElement).closest(".no-drag")) return;
                      setDraggingNodeId(node.id);
                      const rect = e.currentTarget.getBoundingClientRect();
                      setDragStartPos({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                      });
                    }}
                    onClick={(e) => handleNodeClick(e, node.id)}
                  >
                    <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-left overflow-hidden flex-1">
                      <div className="text-xs font-bold text-slate-800 group-hover:text-purple-600 transition-colors truncate">{node.label}</div>
                      <div className="text-[9px] text-slate-400 font-mono leading-none mt-1 truncate">{node.sublabel}</div>
                    </div>
                    
                    {/* Delete button */}
                    <button
                      onClick={(e) => deleteNode(e, node.id)}
                      className="no-drag absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[8px] font-bold shadow-md cursor-pointer z-30"
                      title="Delete Resource"
                    >
                      ✕
                    </button>

                    {/* Connection point dot */}
                    <div
                      className={`no-drag absolute -right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border border-slate-200 bg-white hover:border-purple-400 flex items-center justify-center cursor-pointer transition-all hover:scale-110 z-30 ${isConnecting ? "bg-emerald-500 text-white" : "text-slate-400 hover:text-purple-600 bg-white"}`}
                      style={{ cursor: "crosshair" }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setConnectingFromId(node.id);
                        setTempLineEnd({ x: node.x + 170, y: node.y + 29 });
                      }}
                      title="Connect Node"
                    >
                      <span className="text-[9px] font-bold leading-none">{isConnecting ? "✓" : "+"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Zoom controls bottom left */}
          <div className="absolute bottom-3 left-3 bg-white border border-slate-200 rounded-lg shadow-sm flex flex-col p-1 gap-1 z-30 select-none">
            <button className="w-6 h-6 hover:bg-slate-100 text-slate-600 rounded flex items-center justify-center font-bold text-sm">+</button>
            <button className="w-6 h-6 hover:bg-slate-100 text-slate-600 rounded flex items-center justify-center font-bold text-sm">-</button>
            <button className="w-6 h-6 hover:bg-slate-100 text-slate-600 rounded flex items-center justify-center text-[10px]">🔍</button>
            <button className="w-6 h-6 hover:bg-slate-100 text-slate-600 rounded flex items-center justify-center text-[10px]">🔒</button>
          </div>
        </div>
      </div>

      {/* Floating preview of dragged sidebar item */}
      {draggedSidebarItem && (
        <div
          className="fixed pointer-events-none z-50 rounded-xl bg-white border border-[#8A53D6] px-3 py-2 flex items-center gap-3 shadow-lg opacity-85 text-slate-800"
          style={{
            left: `${draggedSidebarPos.x + 10}px`,
            top: `${draggedSidebarPos.y + 10}px`,
            width: "170px",
            height: "58px",
          }}
        >
          <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
            {React.createElement(draggedSidebarItem.icon as React.ComponentType<{ className?: string }>, { className: "w-4 h-4" })}
          </div>
          <div className="text-left">
            <div className="text-xs font-bold text-slate-800">{draggedSidebarItem.label}</div>
            <div className="text-[9px] text-slate-400 font-mono leading-none mt-1">drag to deploy...</div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===================== Feature Grid ===================== */
function Features() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="features" className="relative py-24">
      <div aria-hidden className="absolute inset-0 ig-dots-soft opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div ref={ref} className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[#8A53D6] mb-2">Capabilities</div>
          <h2 className="font-display text-4xl md:text-6xl ig-metallic">Everything cloud, in one canvas.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 auto-rows-[260px]">
          {/* Visual Canvas (span 2) */}
          <TiltCard className="ig-card rounded-2xl p-6 md:col-span-2 md:row-span-2 relative overflow-hidden flex flex-col">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-[#8A53D6] uppercase tracking-widest">Visual Canvas</div>
                <h3 className="font-display text-3xl text-white mt-1">Drag, drop, deploy.</h3>
              </div>
              <Boxes className="w-5 h-5 text-[#b07eff]" />
            </div>
            <div className="flex-1 mt-4 relative border border-[rgba(138,83,214,0.12)] rounded-2xl bg-[rgba(10,5,16,0.65)] p-4 overflow-x-auto md:overflow-hidden flex items-center justify-center min-h-[380px]">
              <div className="w-[580px] h-[350px] relative shrink-0">
                {/* Canvas Background Image */}
                <img src={awsCanvasBgUrl} alt="AWS Cloud Canvas" className="absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none opacity-80" />

                {/* SVG Connections Overlay */}
                <svg className="absolute inset-0 pointer-events-none z-10 w-full h-full" viewBox="0 0 580 350" fill="none">
                  <defs>
                    <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#f59e0b" />
                    </marker>
                    <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3b82f6" />
                    </marker>
                    <marker id="arrow-orange" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#f97316" />
                    </marker>
                  </defs>
                  
                  {/* Line from EC2 to Lambda */}
                  <path d="M 210,154 L 310,154" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrow-amber)" className="ig-flow" />
                  
                  {/* Line from EC2 to RDS (orthogonal path: down then right) */}
                  <path d="M 125,183 L 125,264 L 175,264" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" markerEnd="url(#arrow-blue)" className="ig-flow" />
                </svg>

                {/* Resource Nodes (Code Overlays) */}
                {/* EC2 Instance */}
                <div className="absolute left-[40px] top-[125px] w-[170px] h-[58px] border border-white/10 hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] rounded-xl bg-black/85 backdrop-blur-md px-3 py-2 flex items-center gap-3 transition-all duration-300 group cursor-pointer z-20 hover:scale-[1.03]">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500 group-hover:scale-105 transition-transform shrink-0">
                    <Server className="w-5 h-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors truncate">EC2 Instance</div>
                    <div className="text-[9px] text-white/50 font-mono leading-none mt-1 truncate">web-01</div>
                  </div>
                </div>

                {/* Lambda */}
                <div className="absolute left-[310px] top-[125px] w-[170px] h-[58px] border border-white/10 hover:border-orange-500/40 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] rounded-xl bg-black/85 backdrop-blur-md px-3 py-2 flex items-center gap-3 transition-all duration-300 group cursor-pointer z-20 hover:scale-[1.03]">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors truncate">Lambda</div>
                    <div className="text-[9px] text-white/50 font-mono leading-none mt-1 truncate">process-data</div>
                  </div>
                </div>

                {/* RDS */}
                <div className="absolute left-[175px] top-[235px] w-[170px] h-[58px] border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] rounded-xl bg-black/85 backdrop-blur-md px-3 py-2 flex items-center gap-3 transition-all duration-300 group cursor-pointer z-20 hover:scale-[1.03]">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors truncate">RDS</div>
                    <div className="text-[9px] text-white/50 font-mono leading-none mt-1 truncate">mysql-db-01</div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard className="ig-card rounded-2xl pt-6 pb-0 px-0 flex flex-col justify-between overflow-hidden">
            <div className="px-6 mb-3">
              <div className="flex items-center justify-between">
                <div className="text-xs text-[#8A53D6] uppercase tracking-widest">Topology Map</div>
                <Network className="w-4 h-4 text-[#b07eff]" />
              </div>
            </div>
            <div className="flex-1 w-full border-t border-white/10 overflow-hidden rounded-t-xl bg-black/40 relative">
              <video 
                src={topologyVideoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
              />
            </div>
          </TiltCard>

          <TiltCard className="ig-card rounded-2xl pt-5 pb-0 px-0 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between mb-4 px-5">
              <div>
                <div className="text-xs text-[#8A53D6] uppercase tracking-widest">Deployed Resources</div>
                <div className="font-display text-2xl text-white mt-1">45 resources</div>
              </div>
              <Boxes className="w-4 h-4 text-[#b07eff]" />
            </div>
            <div className="mt-auto w-full flex justify-center">
              <img 
                src={deployedResourcesUrl} 
                alt="Deployed Resources" 
                className="w-full h-auto rounded-t-xl border-t border-white/10 pointer-events-none select-none" 
              />
            </div>
          </TiltCard>

          <TiltCard className="ig-card rounded-2xl p-4 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">Drift detection</h4>
                  <p className="text-[9px] text-white/40 leading-none mt-0.5">Compare Terraform vs live resources</p>
                </div>
                <ShieldCheck className="w-4 h-4 text-amber-500" />
              </div>
              
              {/* Filters */}
              <div className="flex gap-3 my-2 border-t border-b border-white/5 py-1.5">
                <div className="flex items-center gap-1 text-[9px] text-white/40">
                  <span>Status:</span>
                  <div className="flex items-center gap-0.5 border border-white/10 rounded px-1 py-0.2 bg-black/40 text-white font-medium">
                    Open <span className="text-[6px]">▼</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-white/40">
                  <span>Pipeline:</span>
                  <div className="flex items-center gap-0.5 border border-white/10 rounded px-1 py-0.2 bg-black/40 text-white font-medium truncate max-w-[85px]">
                    All pipelines <span className="text-[6px]">▼</span>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="mt-1">
                <div className="flex justify-between text-[8px] font-bold uppercase tracking-wider text-[#8A53D6] pb-1">
                  <span>Pipeline</span>
                  <span>Resource</span>
                </div>
                
                <div className="text-[8px] font-mono text-white/30 mt-1">ALB-TEST-1</div>
                
                <div className="flex justify-between items-start mt-1 bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/10 hover:border-amber-500/20 rounded-lg p-2 transition-all cursor-pointer">
                  <div className="flex items-center gap-1 text-[10px] text-white font-medium">
                    <span className="text-[7px] text-amber-500/80">▶</span>
                    <span>alb-test-1</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] text-amber-400 font-mono font-medium truncate max-w-[120px]">aws_alb_2_listener</div>
                    <div className="text-[7px] text-white/30 font-mono tracking-tighter mt-0.5 truncate max-w-[100px]">99f0eca0-b9d4-494a-9db7...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="flex items-center justify-between border-t border-white/5 pt-1.5 mt-2 text-[9px]">
              <span className="text-white/40">Drift Compliant</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 ig-blink" /> 98%
              </span>
            </div>
          </TiltCard>

          <TiltCard className="ig-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-[#8A53D6] uppercase tracking-widest">Security</div>
              <Cpu className="w-4 h-4 text-[#b07eff]" />
            </div>
            <ul className="space-y-2 text-sm">
              {["TLS 1.3 enforced", "IAM least-privilege", "KMS rotation: 90d", "No public S3"].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[#e5e5e5]">
                  <span className="h-5 w-5 rounded-full grid place-items-center" style={{ background: "rgba(52,211,153,.15)" }}>
                    <Check className="w-3 h-3 text-emerald-400" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </TiltCard>

          <TiltCard className="ig-card rounded-2xl pt-6 pb-0 px-0 flex flex-col justify-between overflow-hidden">
            <div className="px-6 mb-3">
              <div className="flex items-center justify-between">
                <div className="text-xs text-[#8A53D6] uppercase tracking-widest">Pipelines</div>
                <GitBranch className="w-4 h-4 text-[#b07eff]" />
              </div>
            </div>
            <div className="flex-1 w-full border-t border-white/10 overflow-hidden rounded-t-xl bg-black/40 relative">
              <video 
                src={pipelinesVideoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
              />
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

/* ===================== Pipeline Showcase ===================== */
function Pipelines() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { name: "checkout-service", branch: "main", status: "Draft", tone: "text-[#b0b0b0] border-[#5a3a8a]" },
    { name: "auth-gateway", branch: "release/2.4", status: "Success", tone: "text-emerald-400 border-emerald-500/40" },
    { name: "billing-worker", branch: "feature/retry", status: "Deployment Failed", tone: "text-red-400 border-red-500/40" },
  ];
  return (
    <section id="pipelines" className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl ig-metallic">Continue where you left off</h2>
          <a href="#" className="text-sm text-[#b07eff] hover:text-white inline-flex items-center gap-1">View all <Arrow /></a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((p) => (
            <TiltCard key={p.name} className="ig-card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-xl text-white">{p.name}</div>
                  <div className="text-xs text-[#b0b0b0] mt-1">{p.branch}</div>
                </div>
                <span className={`text-[10px] uppercase tracking-widest border rounded-full px-2 py-1 ${p.tone}`}>{p.status}</span>
              </div>
              <div className="mt-6 flex gap-2">
                <button onClick={() => alert("Deployment triggered")} className="ig-cta px-4 py-2 text-xs flex-1">Deploy</button>
                <button className="ig-ghost px-4 py-2 text-xs">Open</button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== Providers ===================== */
function Providers() {
  const providers = [
    { name: "AWS", desc: "Native Terraform for all 200+ services." },
    { name: "Azure", desc: "ARM + Bicep imports in one click." },
    { name: "GCP", desc: "Project, IAM, and VPC sync." },
    { name: "Kubernetes", desc: "Helm-aware topology and drift." },
    { name: "Terraform", desc: "Round-trip code · canvas · code." },
    { name: "Docker", desc: "Compose-to-cloud in seconds." },
  ];
  return (
    <section id="topology" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl ig-metallic">One canvas, every cloud.</h2>
          <span className="text-xs text-[#b0b0b0]">Scroll →</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {providers.map((p) => (
            <div key={p.name} className="ig-card rounded-2xl p-6 min-w-[260px] snap-start transition-all hover:-translate-y-1" style={{ transition: "transform .35s, border-color .35s, box-shadow .35s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(138,83,214,.7)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px rgba(138,83,214,.35)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}>
              <div className="h-10 w-10 rounded-xl grid place-items-center mb-4" style={{ background: "rgba(138,83,214,.15)", border: "1px solid rgba(138,83,214,.3)" }}>
                <Cloud className="w-5 h-5 text-[#b07eff]" />
              </div>
              <div className="font-display text-2xl text-white">{p.name}</div>
              <p className="text-sm text-[#b0b0b0] mt-2">{p.desc}</p>
              <button className="mt-5 ig-ghost px-4 py-2 text-xs">Connect</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== Marquee ===================== */
function Marquee() {
  const names = ["AWS","AZURE","GCP","KUBERNETES","TERRAFORM","DOCKER","HELM","VAULT","DATADOG","SNOWFLAKE"];
  const row = [...names, ...names];
  return (
    <section className="py-16 border-y" style={{ borderColor: "rgba(138,83,214,.15)" }}>
      <div className="text-center text-xs uppercase tracking-[0.3em] text-[#5a3a8a] mb-6">Loved by engineers at</div>
      <div className="overflow-hidden relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}>
        <div className="flex gap-12 ig-marquee whitespace-nowrap">
          {row.map((n, i) => (
            <span key={i} className="font-display text-3xl md:text-4xl ig-mono cursor-default">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== Testimonials ===================== */
const TESTIMONIALS = [
  {
    title: "No more Terraform sprawl",
    text: "We used to have thousands of lines of Terraform that nobody understood. Now we just map it on the canvas and click deploy. The SREs love it.",
    name: "Alex M.",
    role: "VP Infrastructure",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    badge: "Enterprise"
  },
  {
    title: "Jane caught $11k of drift",
    text: "Jane auto-detected that someone manually changed a subnet configuration in AWS. Saved us from a major security loophole and cost spike.",
    name: "Florian S.",
    role: "Director of Platform",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    badge: "SRE"
  },
  {
    title: "I don't need draw.io anymore",
    text: "One of my developers said: 'I don't need drawing tools anymore, I have InfraGlide!' The diagrams are the actual code now. Amazing work.",
    name: "Priya K.",
    role: "Lead Architect",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    badge: "Architect"
  },
  {
    title: "Obvious in hindsight",
    text: "We deleted four different dashboards. Having real-time metrics right next to the resource cards on a visual canvas is a game changer.",
    name: "Dev O.",
    role: "Staff Engineer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    badge: "DevOps"
  },
  {
    title: "Saves us hours of sync meetings",
    text: "Our design team and SREs both open InfraGlide. The canvas is the conversation. We design, comment, and sync instantly.",
    name: "Nathan D.",
    role: "Head of Product",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80",
    badge: "Product"
  },
  {
    title: "Best IaC tool on the market",
    text: "Terraform import was seamless. Drag and drop to connect components, and the code updates in real time. It's incredibly satisfying.",
    name: "Balin G.",
    role: "Cloud Engineer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80",
    badge: "Developer"
  },
  {
    title: "Granular access control",
    text: "Least-privilege policies synced automatically to Azure. The RBAC mapping makes audit season a breeze.",
    name: "Ant R.",
    role: "Security Architect",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100&q=80",
    badge: "Security"
  },
  {
    title: "Wish we had it sooner",
    text: "Onboarding new developers takes minutes instead of weeks. They just look at the visual topology, see what's deployed, and they're ready.",
    name: "Simon L.",
    role: "Engineering Manager",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=100&h=100&q=80",
    badge: "Manager"
  }
];

function Testimonials() {
  const row1 = [...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4)];
  const row2 = [...TESTIMONIALS.slice(4, 8), ...TESTIMONIALS.slice(4, 8)];

  return (
    <section id="security" className="py-24 overflow-hidden relative">
      <div className="mx-auto max-w-6xl px-6 mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-[#8A53D6] mb-2">In their words</div>
        <h2 className="font-display text-4xl md:text-5xl ig-metallic leading-[0.95]">Loved by developers & SREs.</h2>
      </div>

      {/* Edge Fade Overlays */}
      <div className="absolute inset-y-0 left-0 w-[12vw] bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[12vw] bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      <div className="flex flex-col gap-6 w-full relative">
        {/* Row 1: Left moving */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-6 ig-marquee-left w-max py-2">
            {row1.map((item, index) => (
              <div 
                key={`r1-${index}`} 
                className="ig-card rounded-2xl p-6 w-[340px] md:w-[380px] shrink-0 text-left flex flex-col justify-between relative overflow-hidden bg-[rgba(138,83,214,0.03)] border border-[rgba(138,83,214,0.15)] hover:border-[#8A53D6]/50 hover:bg-[rgba(138,83,214,0.06)] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div aria-hidden className="absolute inset-0 ig-dots opacity-10 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white mb-2">"{item.title}"</h3>
                  <p className="text-xs md:text-sm text-[#b0b0b0] leading-relaxed mb-6">{item.text}</p>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2.5">
                    <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full border border-slate-800 object-cover shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">{item.name}</div>
                      <div className="text-[10px] text-slate-400">{item.role}</div>
                    </div>
                  </div>
                  <span className="bg-[#1a0b2e]/60 border border-[#8A53D6]/30 text-[#b07eff] text-[9px] font-bold rounded px-2.5 py-0.5">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right moving */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-6 ig-marquee-right w-max py-2">
            {row2.map((item, index) => (
              <div 
                key={`r2-${index}`} 
                className="ig-card rounded-2xl p-6 w-[340px] md:w-[380px] shrink-0 text-left flex flex-col justify-between relative overflow-hidden bg-[rgba(138,83,214,0.03)] border border-[rgba(138,83,214,0.15)] hover:border-[#8A53D6]/50 hover:bg-[rgba(138,83,214,0.06)] transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
              >
                <div aria-hidden className="absolute inset-0 ig-dots opacity-10 pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white mb-2">"{item.title}"</h3>
                  <p className="text-xs md:text-sm text-[#b0b0b0] leading-relaxed mb-6">{item.text}</p>
                </div>
                <div className="relative z-10 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2.5">
                    <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full border border-slate-800 object-cover shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">{item.name}</div>
                      <div className="text-[10px] text-slate-400">{item.role}</div>
                    </div>
                  </div>
                  <span className="bg-[#1a0b2e]/60 border border-[#8A53D6]/30 text-[#b07eff] text-[9px] font-bold rounded px-2.5 py-0.5">
                    {item.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== CTA ===================== */
function FinalCTA() {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 ig-portal-bg" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-5xl md:text-7xl ig-metallic leading-[0.95]">Ship the cloud<br/>you can see.</h2>
        <p className="mt-6 text-[#b0b0b0]">Free for solo. $19/seat for teams. No credit card to start.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#jane" className="ig-cta px-8 py-4 inline-flex items-center gap-2">Start Designing <Arrow /></a>
          <a href="#features" className="ig-ghost px-8 py-4">Book a demo</a>
        </div>
      </div>
    </section>
  );
}

/* ===================== Footer ===================== */
function Footer() {
  return (
    <footer className="border-t py-12 mt-10" style={{ borderColor: "rgba(138,83,214,.15)" }}>
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8">
        <div>
          <img src={logoUrl} alt="InfraGlide" className="h-9 w-auto mb-3" />
          <p className="text-sm text-[#b0b0b0] max-w-xs">Design, deploy, scale — the visual cloud platform.</p>
        </div>
        {[
          { h: "Product", l: ["Workspace","Pipelines","Topology","Security"] },
          { h: "Company", l: ["About","Careers","Blog","Press"] },
          { h: "Resources", l: ["Docs","Changelog","Status","Support"] },
        ].map((col) => (
          <div key={col.h}>
            <div className="text-xs uppercase tracking-widest text-[#8A53D6] mb-3">{col.h}</div>
            <ul className="space-y-2">
              {col.l.map((x) => <li key={x}><a className="text-sm text-[#b0b0b0] hover:text-white" href="#">{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6" style={{ borderColor: "rgba(138,83,214,.12)" }}>
        <div className="text-xs text-[#5a3a8a]">© {new Date().getFullYear()} InfraGlide Labs. All rights reserved.</div>
        <div className="flex items-center gap-3 text-[#b0b0b0]">
          <a href="#" aria-label="GitHub" className="hover:text-[#b07eff]"><Github className="w-4 h-4" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-[#b07eff]"><Twitter className="w-4 h-4" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#b07eff]"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}

/* ===================== Page ===================== */
function InfraGlideLanding() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden ig-noise">
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Metrics />
        <Marquee />
        <Jane />
        <Features />
        <ScrollGallery />
        <MarqueeCards />
        <Pipelines />
        <Providers />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ===================== Mac Mockup Widget Subcomponents ===================== */
function MacHeader({ title }: { title: string }) {
  const urlPath = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="w-full select-none shrink-0 bg-slate-100/80 border-b border-slate-200/80 px-4 py-3 flex items-center justify-between">
      {/* macOS Traffic Lights */}
      <div className="flex items-center gap-1.5 w-16">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer" />
      </div>
      
      {/* Mac Window URL/Search Bar */}
      <div className="flex-1 max-w-[280px] bg-slate-200/50 border border-slate-300/30 rounded-md py-1 px-3 text-[10px] text-slate-500 font-mono text-center truncate shadow-inner">
        infraglide.dev/app/{urlPath}
      </div>
      
      {/* Right Balance Area */}
      <div className="flex items-center justify-end w-16 gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
      </div>
    </div>
  );
}

function IOSIssuesPanel({ progress }: { progress: number }) {
  const cardProgress = Math.min(1, Math.max(0, progress / 0.25));
  const isResolved = cardProgress > 0.45;
  
  return (
    <div className="flex-1 bg-white p-4 flex flex-col justify-between text-slate-800">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5 text-[#8A53D6]" /> Issues
          </h4>
          <span className={`text-[9px] rounded-full px-2 py-0.5 font-bold transition-all duration-300 ${isResolved ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600 animate-pulse"}`}>
            {isResolved ? "Resolved" : "1 Error"}
          </span>
        </div>

        <div className="space-y-2">
          {/* Deployment Row */}
          <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-2.5 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-700">Deployment</span>
              <span className={`text-[8px] px-1.5 py-0.5 rounded font-bold uppercase ${isResolved ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-600"}`}>
                {isResolved ? "Success" : "Failed"}
              </span>
            </div>
            <pre className={`mt-1.5 rounded bg-slate-900 p-2 text-[9px] font-mono text-slate-300 whitespace-pre-wrap transition-all duration-300 ${isResolved ? "border border-emerald-500/20" : "border border-red-500/20"}`}>
              {isResolved 
                ? "Re-queued with quota request to cluster47 (cores: 22). Success." 
                : "User SubscriptionId 'dce40f03...' does not have cores left. Required: 22, Available: 0."}
            </pre>
          </div>
          
          {/* Preview Row */}
          <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-slate-600">Preview</span>
            <span className="text-[8px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold uppercase">Success</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 mt-2">
        <span className="text-[8px] text-slate-400">
          {isResolved ? "Quota request approved automatically." : "Drill down to request quota limit expansion."}
        </span>
        <div className="flex items-center gap-1.5">
          <span className={`h-2 w-2 rounded-full ${isResolved ? "bg-emerald-500 animate-pulse" : "bg-red-500 animate-ping"}`} />
          <span className="text-[9px] font-bold text-slate-600">{isResolved ? "Resolved" : "Awaiting retry"}</span>
        </div>
      </div>
    </div>
  );
}

function IOSPipelineStages({ progress }: { progress: number }) {
  const cardProgress = Math.min(1, Math.max(0, (progress - 0.25) / 0.25));
  let activeStage = 0;
  if (cardProgress > 0.75) activeStage = 3;
  else if (cardProgress > 0.5) activeStage = 2;
  else if (cardProgress > 0.25) activeStage = 1;
  
  const stages = ["Plan", "Validate", "Apply", "Verify"];
  
  return (
    <div className="flex-1 bg-white p-4 flex flex-col justify-between text-slate-800">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <GitBranch className="w-3.5 h-3.5 text-[#8A53D6]" /> Pipeline #3414
          </h4>
          <span className="text-[9px] text-slate-400 font-mono">env: prod</span>
        </div>

        <div className="flex items-center gap-1">
          {stages.map((s, i) => {
            const done = i < activeStage;
            const isActive = i === activeStage;
            return (
              <React.Fragment key={s}>
                <div className={`flex-1 rounded-lg p-1.5 text-center border transition-all duration-300 ${
                  done 
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700" 
                    : isActive 
                      ? "border-[#8A53D6] bg-[#8A53D6]/10 text-[#8A53D6] font-bold shadow-sm" 
                      : "border-slate-100 bg-slate-50/50 text-slate-400"
                }`}>
                  <div className="text-[8px] uppercase tracking-wider font-semibold">{s}</div>
                  <div className="text-[9px] font-mono mt-0.5">{done ? "0.8s" : isActive ? "•••" : "—"}</div>
                </div>
                {i < stages.length - 1 && (
                  <div className={`h-px w-2 transition-all duration-300 ${i < activeStage ? "bg-emerald-300" : "bg-slate-200"}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-3.5 rounded-lg bg-slate-900 p-2.5 font-mono text-[9px] text-slate-300 h-36 overflow-hidden border border-slate-800">
          <p className="text-slate-500">$ infraglide pipeline run --env prod</p>
          {activeStage >= 0 && <p className="text-emerald-400">✓ Plan: 12 to add, 3 to change, 0 to destroy</p>}
          {activeStage >= 1 && <p className="text-emerald-400">✓ Policy checks passed (sentinel/4)</p>}
          {activeStage >= 2 && <p className="text-amber-400 animate-pulse">→ Applying… aws_vpc.main, aws_eks.prod</p>}
          {activeStage >= 3 && <p className="text-emerald-400 font-bold">✓ Verify: 100% healthy, drift=0</p>}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-2 mt-2 text-[9px] text-slate-400">
        <span>Dynamic scroll telemetry</span>
        <span className="text-[#8A53D6] font-bold uppercase tracking-wider">
          {activeStage === 3 ? "Complete" : "Running..."}
        </span>
      </div>
    </div>
  );
}

function IOSDriftReport({ progress }: { progress: number }) {
  const cardProgress = Math.min(1, Math.max(0, (progress - 0.5) / 0.25));
  let driftCount = 0;
  if (cardProgress > 0.6) driftCount = 2;
  else if (cardProgress > 0.2) driftCount = 1;
  
  const pct = (driftCount / 5) * 100;
  
  const resources = [
    { name: "aws_s3_bucket.logs", state: driftCount >= 1 ? "drift" : "ok", delta: driftCount >= 1 ? "+ block_public_acls" : "in sync" },
    { name: "aws_iam_role.deploy", state: driftCount >= 2 ? "drift" : "ok", delta: driftCount >= 2 ? "policy mutated" : "in sync" },
    { name: "aws_rds_instance.main", state: "ok", delta: "in sync" },
    { name: "aws_eks_cluster.prod", state: "ok", delta: "in sync" },
  ];

  return (
    <div className="flex-1 bg-white p-4 flex flex-col justify-between text-slate-800">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-[#8A53D6]" /> Drift Report
          </h4>
          <span className="text-[9px] text-slate-400">auto-scanning</span>
        </div>

        <div className="rounded-lg border border-slate-100 bg-slate-50/50 p-2.5 mb-2">
          <div className="flex items-baseline justify-between mb-1">
            <span className="text-2xl font-bold text-slate-800 font-display">{driftCount}/5</span>
            <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">resources drifted</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#8A53D6] to-red-500 transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <ul className="space-y-1 max-h-36 overflow-auto">
          {resources.map((r) => (
            <li key={r.name} className="flex items-center justify-between rounded border border-slate-100 px-2 py-1 text-[9px] bg-slate-50/20">
              <span className="font-mono text-slate-600 truncate mr-2">{r.name}</span>
              <span className={`shrink-0 rounded-full px-1.5 py-0.2 text-[8px] font-bold ${
                r.state === "drift" 
                  ? "bg-red-50 text-red-600 border border-red-100" 
                  : "bg-emerald-50 text-emerald-700 border border-emerald-100"
              }`}>
                {r.delta}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-2 mt-1.5 text-[9px] text-slate-400">
        <span>Drift check telemetry</span>
        <span className={driftCount > 0 ? "text-red-500 font-bold" : "text-emerald-600 font-bold"}>
          {driftCount > 0 ? `${driftCount} Alerts` : "In Sync"}
        </span>
      </div>
    </div>
  );
}

function IOSRBACMatrix({ progress }: { progress: number }) {
  const cardProgress = Math.min(1, Math.max(0, (progress - 0.75) / 0.25));
  
  const isOwnerSecrets = true;
  const isEditorDeploy = cardProgress > 0.2;
  const isEditorSecrets = cardProgress > 0.55;
  const isAuditorBilling = cardProgress > 0.85;

  const Row = ({ label, on }: { label: string; on: boolean }) => (
    <tr className="border-t border-slate-100">
      <td className="px-2 py-1.5 text-slate-700 font-medium">{label}</td>
      <td className="px-2 py-1.5 text-center">
        <div className={`w-7 h-4.5 rounded-full relative ml-auto transition-colors duration-300 ${on ? "bg-emerald-400" : "bg-slate-200"}`}>
          <span className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white shadow transition-all duration-300 ${on ? "left-3" : "left-0.5"}`} />
        </div>
      </td>
    </tr>
  );

  return (
    <div className="flex-1 bg-white p-4 flex flex-col justify-between text-slate-800">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#8A53D6]" /> RBAC Matrix
          </h4>
          <span className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Access levels</span>
        </div>

        <div className="overflow-hidden rounded-lg border border-slate-100">
          <table className="w-full text-[9px]">
            <thead>
              <tr className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                <th className="text-left px-2 py-1.5 font-medium">Role Matrix</th>
                <th className="text-right px-2 py-1.5 font-medium">Active Policy</th>
              </tr>
            </thead>
            <tbody>
              <Row label="Owner ➔ Secrets Access" on={isOwnerSecrets} />
              <Row label="Editor ➔ Deploy Cluster" on={isEditorDeploy} />
              <Row label="Editor ➔ Secrets Access" on={isEditorSecrets} />
              <Row label="Auditor ➔ Billing View" on={isAuditorBilling} />
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-2 mt-2 text-[9px] text-slate-400">
        <span>Policies synced dynamically</span>
        <span className="text-emerald-600 font-bold">Active</span>
      </div>
    </div>
  );
}

const SCROLL_CARDS = [
  { tag: "Issues", title: "Auto-resolve failures.", desc: "SRE-friendly sandbox, retry with auto-granted quotas in one click.", component: IOSIssuesPanel },
  { tag: "Pipelines", title: "Plan → Apply → Verify.", desc: "Live stage telemetry, validations and checks driven as code.", component: IOSPipelineStages },
  { tag: "Drift Report", title: "Zero configuration drift.", desc: "Auto-scans Terraform state vs cloud resources in real time.", component: IOSDriftReport },
  { tag: "RBAC Matrix", title: "Least-privilege policies.", desc: "Sync granular roles and resource bindings to your cloud provider.", component: IOSRBACMatrix },
];

function ScrollGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ctx: gsap.Context | null = null;
    let st: ScrollTrigger | null = null;

    const timer = window.setTimeout(() => {
      ctx = gsap.context(() => {
        const scrollDistance = () => {
          const dist = track.scrollWidth - window.innerWidth;
          console.log("[ScrollGallery] scrollWidth:", track.scrollWidth, "innerWidth:", window.innerWidth, "dist:", dist);
          return Math.max(100, dist);
        };

        const tween = gsap.to(track, {
          x: () => -scrollDistance(),
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 2.2,
            anticipatePin: 1,
            start: "top top",
            end: () => `+=${scrollDistance()}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setScrollProgress(self.progress);
            }
          },
        });
        st = tween.scrollTrigger || null;
        ScrollTrigger.refresh();
      }, section);
    }, 120);

    const observer = new ResizeObserver(() => {
      if (st) {
        ScrollTrigger.refresh();
      }
    });
    observer.observe(track);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      st?.kill();
      ctx?.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden" id="gallery">
      <div aria-hidden className="absolute inset-0 ig-dots opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
    <div className="absolute top-0 left-0 right-0 z-20 pt-20 pointer-events-none">
      <div className="mx-auto max-w-6xl px-6 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[#8A53D6] mb-2">Product tour</div>
          <h2 className="font-display text-4xl md:text-6xl ig-metallic leading-[0.95]">Features.</h2>
        </div>
      </div>
    </div>

    {/* Edge Fade Overlays */}
    <div className="absolute inset-y-0 left-0 w-[12vw] bg-gradient-to-r from-black to-transparent z-30 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-[12vw] bg-gradient-to-l from-black to-transparent z-30 pointer-events-none" />

    <div ref={trackRef} className="absolute top-0 left-0 bottom-0 flex items-end gap-12 pl-[38vw] pr-[15vw] pb-[8vh] will-change-transform">
      {SCROLL_CARDS.map((card, i) => {
        const Widget = card.component;
        return (
          <article 
            key={i} 
            className="w-[85vw] md:w-[580px] h-[60vh] shrink-0 relative flex flex-col rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xl overflow-hidden text-slate-800 transition-all select-none"
          >
            {/* Mac Header Shell */}
            <MacHeader title={card.tag} />
            
            {/* Coded Widget Content */}
            <Widget progress={scrollProgress} />
          </article>
        );
      })}

      {/* End cap */}
      <article className="w-[85vw] md:w-[580px] h-[60vh] shrink-0 flex items-center justify-center relative select-none">
        <div className="text-center p-6 bg-[rgba(138,83,214,0.06)] border border-[rgba(138,83,214,0.2)] rounded-3xl backdrop-blur-md">
          <h3 className="font-display text-4xl md:text-5xl ig-metallic leading-[0.95]">Experience the canvas.</h3>
          <a href="#jane" className="ig-cta px-7 py-3.5 inline-flex items-center gap-2 mt-6">Start Designing <Arrow /></a>
        </div>
      </article>
    </div>
    </section>
  );
}

/* ===================== Marquee of Cards (alpha-masked, infinite) ===================== */
function MarqueeCards() {
  const cards = [
    { t: "VPC · us-east-1",    s: "10.0.0.0/16 · 6 subnets",     i: Network,   c: "ok" },
    { t: "Auth Gateway",       s: "Deploy · 1m 04s ago",         i: Lock,      c: "ok" },
    { t: "Cost Forecast",      s: "$48,210 / mo · ▼ 12%",        i: DollarSign,c: "warn" },
    { t: "RDS · prod",         s: "Multi-AZ · Graviton",         i: Database,  c: "ok" },
    { t: "Drift Detected",     s: "subnet-9f2a · auto-patch",    i: ShieldCheck, c: "warn" },
    { t: "EKS · cluster-eu",   s: "12 nodes · 87% CPU",          i: Container, c: "warn" },
    { t: "Datadog Sync",       s: "All metrics streaming",       i: Gauge,     c: "ok" },
    { t: "Pipeline · web-prod",s: "Plan ✓ · Apply ⏳",           i: Workflow,  c: "ok" },
    { t: "S3 · assets",        s: "Public access blocked",       i: ShieldCheck, c: "ok" },
    { t: "Helm · billing",     s: "v2.4.1 · canary 10%",         i: Layers,    c: "ok" },
  ];
  const row = [...cards, ...cards];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 mb-10 flex items-end justify-between flex-wrap gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-[#8A53D6] mb-2">Live tiles</div>
          <h2 className="font-display text-4xl md:text-5xl ig-metallic">Your fleet, in motion.</h2>
        </div>
        <div className="text-xs text-[#b0b0b0]">Hover to pause</div>
      </div>
      <div className="ig-mask-x overflow-hidden">
        <div className="flex gap-4 ig-marquee-slow w-max">
          {row.map((c, i) => (
            <div key={i} className="ig-card rounded-2xl p-4 w-[260px] flex items-center gap-3 relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 ig-dots opacity-20" />
              <div className="relative h-10 w-10 rounded-xl grid place-items-center" style={{ background: "rgba(138,83,214,.15)", border: "1px solid rgba(138,83,214,.3)" }}>
                <c.i className="w-4 h-4 text-[#b07eff]" />
              </div>
              <div className="relative flex-1 min-w-0">
                <div className="text-sm text-white truncate">{c.t}</div>
                <div className="text-xs text-[#b0b0b0] truncate">{c.s}</div>
              </div>
              <span className={`relative h-2 w-2 rounded-full ig-blink ${c.c === "ok" ? "bg-emerald-400" : "bg-yellow-400"}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}