import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  ArrowRight as Arrow, 
  Menu, 
  X, 
  ChevronDown,
  Sparkles,
  DollarSign,
  BookOpen,
  History,
  LayoutGrid,
  Info,
  FileText,
  Users,
  Mail,
  Shield,
  FileCheck,
  Lock,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { Link, useRouterState } from '@tanstack/react-router';
import logoUrl from "@/assets/infraglide-logo.png";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const router = useRouterState();
  const isHome = router.location.pathname === '/';

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f); 
    return () => window.removeEventListener("scroll", f);
  }, []);

  // When scrolled OR not on home page, act as a floating, rounded pill.
  // When at top of home page, act as the top cap of the Hero card.
  const isFloating = scrolled || !isHome;

  return (
    <header 
      className={`fixed ${isHome && !scrolled ? 'top-6' : 'top-4'} left-1/2 -translate-x-1/2 w-[min(1200px,calc(100%-2rem))] z-[200] transition-all duration-500`}
    >
      <nav 
        className="relative px-6 py-4 flex items-center justify-between transition-all duration-500 z-10"
      >
        {/* Background layer to prevent clipping / opacity fading bugs on absolute dropdown children */}
        <div 
          className={`absolute inset-0 z-[-1] transition-all duration-500 ${isFloating ? 'rounded-[2.5rem] shadow-2xl' : 'rounded-t-[2.5rem]'}`}
          style={{ 
            background: isFloating
              ? (isDark ? "rgba(19, 9, 34, 0.75)" : "rgba(255, 255, 255, 0.75)") 
              : (isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.4)"),
            borderBottom: isFloating 
              ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(138, 83, 214, 0.2)")
              : (isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(138, 83, 214, 0.1)"),
            borderTop: isFloating 
              ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(138, 83, 214, 0.2)")
              : "1px solid transparent",
            borderLeft: isFloating 
              ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(138, 83, 214, 0.2)")
              : "1px solid transparent",
            borderRight: isFloating 
              ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(138, 83, 214, 0.2)")
              : "1px solid transparent",
            backdropFilter: isFloating ? "blur(16px)" : "blur(0px)",
            WebkitBackdropFilter: isFloating ? "blur(16px)" : "blur(0px)",
          }}
        />
        <Link to="/" className="flex items-center gap-2 pl-2">
          <img src={logoUrl} alt="InfraGlide" className={`h-8 w-auto transition-all ${isDark ? 'drop-shadow-[0_1px_12px_rgba(255,255,255,0.75)]' : ''}`} />
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          <li className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Product <ChevronDown className="w-3 h-3 opacity-50" />
            </button>
            <div className="absolute top-[calc(100%+8px)] left-0 min-w-[210px] bg-white dark:bg-[#120822] border border-[var(--ig-border)] rounded-2xl p-2 opacity-0 pointer-events-none -translate-y-2 transition-all duration-200 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)] z-[300] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
              
              <Link to="/" hash="features" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <Sparkles className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Features</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/pricing" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <DollarSign className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Pricing</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/docs" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <BookOpen className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Documentation</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/changelog" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <History className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Changelog</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/templates" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <LayoutGrid className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Templates</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Company <ChevronDown className="w-3 h-3 opacity-50" />
            </button>
            <div className="absolute top-[calc(100%+8px)] left-0 min-w-[210px] bg-white dark:bg-[#120822] border border-[var(--ig-border)] rounded-2xl p-2 opacity-0 pointer-events-none -translate-y-2 transition-all duration-200 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)] z-[300] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
              
              <Link to="/about" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <Info className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>About</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/blog" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <FileText className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Blog</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/team" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <Users className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Team</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/contact" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <Mail className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Legal <ChevronDown className="w-3 h-3 opacity-50" />
            </button>
            <div className="absolute top-[calc(100%+8px)] left-0 min-w-[210px] bg-white dark:bg-[#120822] border border-[var(--ig-border)] rounded-2xl p-2 opacity-0 pointer-events-none -translate-y-2 transition-all duration-200 shadow-[0_12px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.5)] z-[300] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <div className="absolute -top-2 left-0 right-0 h-2 bg-transparent" />
              
              <Link to="/privacy" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <Shield className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Privacy</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/terms" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <FileCheck className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Terms</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/security" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <Lock className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Security</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
              
              <Link to="/status" className="group/item flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs md:text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-[#b07eff] hover:bg-[#8A53D6]/5 dark:hover:bg-[#8A53D6]/10 transition-all font-medium">
                <Activity className="w-4 h-4 text-[#8A53D6] opacity-70 group-hover/item:opacity-100 transition-opacity" />
                <span>Status</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--ig-muted)] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all ml-auto" />
              </Link>
            </div>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="ig-ghost p-2 rounded-full text-[var(--ig-muted)] hover:text-[var(--ig-text)]" aria-label="Toggle Theme">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/demo" className="hidden sm:inline-flex ig-cta px-4 py-2 text-sm items-center gap-1 font-semibold transition-all">
            Get Demo <Arrow className="w-3.5 h-3.5" />
          </Link>
          <button onClick={() => setOpen((o) => !o)} className="md:hidden ig-ghost p-2 text-[var(--ig-muted)]" aria-label="menu">
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div 
          className="md:hidden mt-2 rounded-2xl p-4 flex flex-col gap-2 transition-all duration-500"
          style={{
            background: isFloating 
              ? (isDark ? "rgba(19, 9, 34, 0.9)" : "rgba(255, 255, 255, 0.9)") 
              : "rgba(255, 255, 255, 0.05)",
            border: "1px solid var(--ig-border)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <Link to="/" hash="features" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">Features</Link>
          <Link to="/pricing" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">Pricing</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">About</Link>
        </div>
      )}
    </header>
  );
}
