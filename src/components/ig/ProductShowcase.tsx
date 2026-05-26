import React, { useEffect, useRef, useState } from "react";
import { Settings, X, ChevronDown, CircleCheck, CircleX, Shield, Users, Database, Box, GitBranch, Play, Pause, RefreshCw, AlertTriangle, ArrowRight } from "lucide-react";

/* =========================================================================
 * GlowingEdgeCard — interactive mouse-following conic glow on the border.
 * Pure CSS via CSS variables (--p-x, --p-y, --p-deg, --p-d).
 * ========================================================================= */
export function GlowingEdgeCard({
  children,
  className = "",
  hue = "#8A53D6",
  hue2 = "#b07eff",
}: {
  children: React.ReactNode;
  className?: string;
  hue?: string;
  hue2?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const clamp = (v: number, a = 0, b = 100) => Math.min(Math.max(v, a), b);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const px = clamp((100 / r.width) * x);
    const py = clamp((100 / r.height) * y);
    const cx = r.width / 2;
    const cy = r.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
    if (deg < 0) deg += 360;
    const kx = dx !== 0 ? cx / Math.abs(dx) : Infinity;
    const ky = dy !== 0 ? cy / Math.abs(dy) : Infinity;
    const edge = Math.min(1, 1 / Math.min(kx, ky)) * 100;
    el.style.setProperty("--p-x", `${px.toFixed(2)}%`);
    el.style.setProperty("--p-y", `${py.toFixed(2)}%`);
    el.style.setProperty("--p-deg", `${deg.toFixed(1)}deg`);
    el.style.setProperty("--p-d", `${edge.toFixed(1)}`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--p-d", `0`);
  };

  // Intro sweep
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = (now - start) / 1800;
      if (t >= 1) { el.style.setProperty("--p-d", "0"); return; }
      const deg = 90 + 360 * t;
      const d = Math.sin(t * Math.PI) * 80;
      el.style.setProperty("--p-deg", `${deg.toFixed(1)}deg`);
      el.style.setProperty("--p-d", `${d.toFixed(1)}`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`ig-edge-card relative rounded-2xl ${className}`}
      style={{ ["--hue" as any]: hue, ["--hue2" as any]: hue2 }}
    >
      <div className="relative z-[2] h-full">{children}</div>
    </div>
  );
}

/* =========================================================================
 * Mini product widgets — interactive, faithful to the InfraGlide app
 * ========================================================================= */

// 1) ISSUES PANEL — modeled after the screenshot
export function IssuesPanel() {
  const [open, setOpen] = useState<"deploy" | "preview" | "validate" | null>("deploy");
  const [retried, setRetried] = useState(false);

  const Row = ({
    id, title, status, time, body, ok,
  }: { id: "deploy" | "preview" | "validate"; title: string; status: string; time: string; body?: React.ReactNode; ok: boolean }) => (
    <div className="rounded-lg border border-white/10 overflow-hidden bg-white/[0.02]">
      <button onClick={() => setOpen(open === id ? null : id)} className="w-full flex items-center justify-between px-3 py-2 text-left">
        <span className="flex items-center gap-2 text-sm text-white/90">
          <ChevronDown className={`w-4 h-4 transition-transform ${open === id ? "" : "-rotate-90"}`} /> {title}
        </span>
        {!ok && <span className="text-[10px] rounded-full bg-[#f87171]/20 text-[#f87171] px-2 py-0.5 font-semibold">1</span>}
      </button>
      {open === id && (
        <div className={`px-3 pb-3 ${ok ? "bg-emerald-400/5" : "bg-[#f87171]/5"}`}>
          <div className="flex items-start gap-2">
            {ok ? <CircleCheck className="w-4 h-4 text-emerald-400 mt-0.5" /> : <CircleX className="w-4 h-4 text-[#f87171] mt-0.5" />}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] tracking-wider text-white/50 uppercase">AZURE-HDINSIGHT-7hq99q</p>
              <p className="text-sm text-white">{status}</p>
              {body}
              <p className="text-[11px] text-white/40 mt-2">{time}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-[#b07eff]" />
          <h3 className="font-display text-xl">Issues</h3>
        </div>
        <span className={`text-[11px] rounded-full px-2.5 py-1 font-semibold ${retried ? "bg-emerald-400/20 text-emerald-300" : "bg-[#f87171]/20 text-[#f87171]"}`}>
          {retried ? "Resolved" : "1 Error"}
        </span>
      </div>

      <div className="space-y-2">
        <Row id="deploy" title="Deployment" ok={retried} status={retried ? "Deployment Retried" : "Deployment Failed"} time="12:39:17 PM"
          body={
            <pre className="mt-2 rounded-md bg-black/60 border border-white/5 p-2 text-[11px] text-white/70 whitespace-pre-wrap font-mono">
{retried
  ? "Re-queued with quota request to cluster47 (cores: 22)."
  : "User SubscriptionId 'dce40f03-5bd1-41ec…' does not have cores left to create 'cluster47'. Required: 22, Available: 0."}
            </pre>
          }
        />
        <Row id="preview" title="Preview" ok status="Preview Successful" time="12:38:28 PM" />
        <Row id="validate" title="Validation" ok status="Configuration Complete" time="12:39:18 PM" />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-[11px] text-white/40">Click an issue to focus its component.</p>
        <button onClick={() => setRetried((r) => !r)} className="text-[11px] rounded-full bg-[#8A53D6]/20 hover:bg-[#8A53D6]/30 text-[#d6bfff] px-3 py-1.5 inline-flex items-center gap-1.5 transition">
          <RefreshCw className="w-3 h-3" /> {retried ? "Reset" : "Retry"}
        </button>
      </div>
    </div>
  );
}

// 2) PIPELINE — animated plan/apply/verify stages
export function PipelineStages() {
  const stages = ["Plan", "Validate", "Apply", "Verify"] as const;
  const [running, setRunning] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setActive((a) => (a + 1) % (stages.length + 1)), 1200);
    return () => clearInterval(t);
  }, [running]);

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-[#b07eff]" />
          <h3 className="font-display text-xl">Pipeline #3414</h3>
        </div>
        <button onClick={() => setRunning((r) => !r)} className="text-[11px] rounded-full bg-white/5 hover:bg-white/10 text-white/80 px-3 py-1.5 inline-flex items-center gap-1.5 transition border border-white/10">
          {running ? <><Pause className="w-3 h-3" /> Pause</> : <><Play className="w-3 h-3" /> Resume</>}
        </button>
      </div>

      <div className="flex items-center gap-1.5">
        {stages.map((s, i) => {
          const done = i < active;
          const isActive = i === active && running;
          return (
            <React.Fragment key={s}>
              <div className={`flex-1 rounded-md px-2 py-2 text-center border transition-all ${done ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300" : isActive ? "border-[#8A53D6] bg-[#8A53D6]/15 text-white" : "border-white/10 bg-white/[0.02] text-white/50"}`}>
                <div className="text-[10px] uppercase tracking-wider">{s}</div>
                <div className="text-[11px] font-mono mt-0.5">{done ? "0.8s" : isActive ? "…" : "—"}</div>
              </div>
              {i < stages.length - 1 && (
                <div className="h-px w-3 bg-gradient-to-r from-white/30 to-transparent" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="mt-4 rounded-md bg-black/50 border border-white/5 p-3 font-mono text-[11px] text-white/70 h-24 overflow-hidden">
        <p>$ infraglide pipeline run --env prod</p>
        {active >= 1 && <p className="text-emerald-300">✓ Plan: 12 to add, 3 to change, 0 to destroy</p>}
        {active >= 2 && <p className="text-emerald-300">✓ Policy checks passed (sentinel/4)</p>}
        {active >= 3 && <p className="text-[#b07eff]">→ Applying… aws_vpc.main, aws_eks.prod</p>}
        {active >= 4 && <p className="text-emerald-300">✓ Verify: 100% healthy, drift=0</p>}
      </div>
    </div>
  );
}

// 3) DRIFT REPORT — animated bar with status pills
export function DriftReport() {
  const [resources] = useState([
    { name: "aws_s3_bucket.logs", state: "drift", delta: "+ block_public_acls" },
    { name: "aws_iam_role.deploy", state: "drift", delta: "policy mutated" },
    { name: "aws_rds_instance.main", state: "ok", delta: "in sync" },
    { name: "aws_eks_cluster.prod", state: "ok", delta: "in sync" },
    { name: "azurerm_keyvault.kv01", state: "warn", delta: "rotation due" },
  ]);
  const drift = resources.filter((r) => r.state === "drift").length;
  const total = resources.length;
  const pct = (drift / total) * 100;
  const [reveal, setReveal] = useState(0);
  useEffect(() => { const t = setTimeout(() => setReveal(pct), 200); return () => clearTimeout(t); }, [pct]);

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#b07eff]" />
          <h3 className="font-display text-xl">Drift Report</h3>
        </div>
        <span className="text-[11px] text-white/50">scanned 2m ago</span>
      </div>

      <div className="rounded-md bg-white/[0.02] border border-white/10 p-3 mb-3">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-3xl font-display ig-metallic">{drift}/{total}</span>
          <span className="text-[11px] text-white/50">resources drifted</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#8A53D6] to-[#f87171] transition-all duration-1000" style={{ width: `${reveal}%` }} />
        </div>
      </div>

      <ul className="space-y-1.5 max-h-32 overflow-auto pr-1">
        {resources.map((r) => (
          <li key={r.name} className="flex items-center justify-between rounded-md bg-white/[0.02] border border-white/5 px-3 py-1.5 text-[11px]">
            <span className="font-mono text-white/80 truncate mr-2">{r.name}</span>
            <span className={`shrink-0 rounded-full px-2 py-0.5 ${r.state === "drift" ? "bg-[#f87171]/20 text-[#f87171]" : r.state === "warn" ? "bg-amber-400/20 text-amber-300" : "bg-emerald-400/20 text-emerald-300"}`}>
              {r.delta}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 4) RBAC MATRIX — click to toggle permissions
export function RBACMatrix() {
  const roles = ["Owner", "Editor", "Viewer", "Auditor"];
  const perms = ["Deploy", "Destroy", "Secrets", "Billing"];
  const initial: Record<string, boolean> = {
    "Owner-Deploy": true, "Owner-Destroy": true, "Owner-Secrets": true, "Owner-Billing": true,
    "Editor-Deploy": true, "Editor-Destroy": false, "Editor-Secrets": true, "Editor-Billing": false,
    "Viewer-Deploy": false, "Viewer-Destroy": false, "Viewer-Secrets": false, "Viewer-Billing": false,
    "Auditor-Deploy": false, "Auditor-Destroy": false, "Auditor-Secrets": false, "Auditor-Billing": true,
  };
  const [grid, setGrid] = useState(initial);

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#b07eff]" />
          <h3 className="font-display text-xl">RBAC Matrix</h3>
        </div>
        <span className="text-[11px] inline-flex items-center gap-1 text-white/50"><Users className="w-3 h-3" /> 4 roles</span>
      </div>

      <div className="overflow-hidden rounded-md border border-white/10">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-white/[0.03] text-white/60">
              <th className="text-left px-2.5 py-2 font-medium">Role</th>
              {perms.map((p) => <th key={p} className="px-2 py-2 font-medium">{p}</th>)}
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role} className="border-t border-white/5">
                <td className="px-2.5 py-2 text-white/90">{role}</td>
                {perms.map((p) => {
                  const k = `${role}-${p}`;
                  const on = grid[k];
                  return (
                    <td key={p} className="px-2 py-1.5 text-center">
                      <button
                        onClick={() => setGrid((g) => ({ ...g, [k]: !g[k] }))}
                        className={`w-7 h-5 rounded-full relative transition-all ${on ? "bg-[#8A53D6]" : "bg-white/10"}`}
                        aria-label={`${role} ${p}`}
                      >
                        <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${on ? "left-2.5" : "left-0.5"}`} />
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[11px] text-white/40">Toggle a cell — policies sync to your IdP in real time.</p>
    </div>
  );
}

/* =========================================================================
 * Section wrapper
 * ========================================================================= */
export function ProductShowcase() {
  return (
    <section id="product" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 ig-pill px-3 py-1 text-[11px] text-[#b07eff] uppercase tracking-widest mb-5">
            <Box className="w-3 h-3" /> Live in the product
          </div>
          <h2 className="font-display text-5xl md:text-6xl ig-metallic">Touch the real thing.</h2>
          <p className="mt-4 text-[#b0b0b0] text-lg">
            These aren't screenshots — they're the actual surfaces from InfraGlide. Hover, click, drag.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <GlowingEdgeCard><IssuesPanel /></GlowingEdgeCard>
          <GlowingEdgeCard><PipelineStages /></GlowingEdgeCard>
          <GlowingEdgeCard><DriftReport /></GlowingEdgeCard>
          <GlowingEdgeCard><RBACMatrix /></GlowingEdgeCard>
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#pricing" className="ig-cta px-7 py-3.5 inline-flex items-center gap-2">
            Open the canvas <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}