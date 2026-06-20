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

  // Act as a floating, rounded glassmorphic pill from initial load.
  const isFloating = true;

  return (
    <header 
      className={`fixed ${isHome && !scrolled ? 'top-6' : 'top-4'} left-1/2 -translate-x-1/2 w-[min(1200px,calc(100%-2rem))] z-[200] transition-all duration-500`}
    >
      <nav 
        className="relative px-6 py-4 flex items-center justify-between transition-all duration-500 z-10"
        aria-label="InfraGlide main navigation"
        role="navigation"
      >
        {/* Background layer to prevent clipping / opacity fading bugs on absolute dropdown children */}
        <div 
          className={`absolute inset-0 z-[-1] transition-all duration-500 ${isFloating ? 'rounded-[2.5rem]' : 'rounded-t-[2.5rem]'} ${scrolled ? 'shadow-2xl' : 'shadow-none'}`}
          style={{ 
            background: scrolled
              ? (isFloating
                  ? (isDark ? "rgba(19, 9, 34, 0.75)" : "rgba(255, 255, 255, 0.75)") 
                  : (isDark ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.4)"))
              : "transparent",
            borderBottom: scrolled
              ? (isFloating 
                  ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(138, 83, 214, 0.2)")
                  : (isDark ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(138, 83, 214, 0.1)"))
              : "1px solid transparent",
            borderTop: scrolled
              ? (isFloating 
                  ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(138, 83, 214, 0.2)")
                  : "1px solid transparent")
              : "1px solid transparent",
            borderLeft: scrolled
              ? (isFloating 
                  ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(138, 83, 214, 0.2)")
                  : "1px solid transparent")
              : "1px solid transparent",
            borderRight: scrolled
              ? (isFloating 
                  ? (isDark ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(138, 83, 214, 0.2)")
                  : "1px solid transparent")
              : "1px solid transparent",
            backdropFilter: scrolled && isFloating ? "blur(16px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled && isFloating ? "blur(16px)" : "blur(0px)",
          }}
        />
        <Link to="/" className="flex items-center gap-2 pl-2">
          <img src={logoUrl} alt="InfraGlide — Visual Cloud Infrastructure Platform" className={`h-8 w-auto transition-all ${isDark ? 'drop-shadow-[0_1px_12px_rgba(255,255,255,0.75)]' : ''}`} />
        </Link>

        <ul className="hidden md:flex items-center gap-1.5 text-sm font-medium">
          <li>
            <Link to="/" className="px-3.5 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" hash="features" className="px-3.5 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-3.5 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/docs" className="px-3.5 py-2 rounded-lg text-[var(--ig-muted)] hover:text-[var(--ig-text)] hover:bg-[var(--ig-border-soft)] transition-colors">
              Documentation
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="ig-ghost p-2 rounded-full text-[var(--ig-muted)] hover:text-[var(--ig-text)]" aria-label="Toggle Theme">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/" hash="get-started" className="hidden sm:inline-flex ig-cta px-4 py-2 text-sm items-center gap-1 font-semibold transition-all">
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
          <Link to="/" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">Home</Link>
          <Link to="/" hash="features" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">Features</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">About</Link>
          <Link to="/docs" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-sm text-[var(--ig-muted)] hover:bg-[var(--ig-border-soft)] hover:text-[var(--ig-text)]">Documentation</Link>
        </div>
      )}
    </header>
  );
}
