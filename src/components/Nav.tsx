import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowRight as Arrow, Menu, X, ChevronDown } from 'lucide-react';
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
        className={`px-6 py-4 flex items-center justify-between transition-all duration-500 ${isFloating ? 'rounded-[2.5rem] shadow-2xl' : 'rounded-t-[2.5rem]'}`}
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
      >
        <Link to="/" className="flex items-center gap-2 pl-2">
          <img src={logoUrl} alt="InfraGlide" className={`h-8 w-auto transition-all ${isDark ? 'drop-shadow-[0_1px_12px_rgba(255,255,255,0.75)]' : ''}`} />
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          <li className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Product <ChevronDown className="w-3 h-3 opacity-50" />
            </button>
            <div className="absolute top-[calc(100%+8px)] left-0 min-w-[185px] bg-[var(--ig-card)] border border-[var(--ig-border)] rounded-xl p-1.5 opacity-0 pointer-events-none -translate-y-2 transition-all duration-200 shadow-[0_24px_80px_rgba(60,50,120,0.14)] z-[300] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <Link to="/#features" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Features</Link>
              <Link to="/pricing" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Pricing</Link>
              <Link to="/docs" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Documentation</Link>
              <Link to="/changelog" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Changelog</Link>
              <Link to="/templates" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Templates</Link>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Company <ChevronDown className="w-3 h-3 opacity-50" />
            </button>
            <div className="absolute top-[calc(100%+8px)] left-0 min-w-[185px] bg-[var(--ig-card)] border border-[var(--ig-border)] rounded-xl p-1.5 opacity-0 pointer-events-none -translate-y-2 transition-all duration-200 shadow-[0_24px_80px_rgba(60,50,120,0.14)] z-[300] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <Link to="/about" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">About</Link>
              <Link to="/blog" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Blog</Link>
              <Link to="/team" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Team</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Contact</Link>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Legal <ChevronDown className="w-3 h-3 opacity-50" />
            </button>
            <div className="absolute top-[calc(100%+8px)] left-0 min-w-[185px] bg-[var(--ig-card)] border border-[var(--ig-border)] rounded-xl p-1.5 opacity-0 pointer-events-none -translate-y-2 transition-all duration-200 shadow-[0_24px_80px_rgba(60,50,120,0.14)] z-[300] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">
              <Link to="/privacy" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Privacy</Link>
              <Link to="/terms" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Terms</Link>
              <Link to="/security" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Security</Link>
              <Link to="/status" className="block px-3 py-2 rounded-md text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">Status</Link>
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
          <Link to="/#features" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">Features</Link>
          <Link to="/pricing" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">Pricing</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">About</Link>
        </div>
      )}
    </header>
  );
}
