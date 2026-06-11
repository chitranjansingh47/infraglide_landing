import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import logoUrl from "@/assets/infraglide-logo.png";

export function Footer() {
  return (
    <footer className="border-t py-12 mt-10 z-[100] relative bg-[var(--ig-bg)]" style={{ borderColor: "rgba(138,83,214,.15)" }}>
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-4 gap-8">
        <div>
          <img src={logoUrl} alt="InfraGlide" className="h-9 w-auto mb-3" />
          <p className="text-sm text-[var(--ig-muted)] max-w-xs">Design, deploy, scale — the visual cloud platform.</p>
        </div>
        {[
          { 
            h: "Product", 
            l: [
              { name: "Features", path: "/#features" },
              { name: "Pricing", path: "/pricing" },
              { name: "Documentation", path: "/docs" },
              { name: "Changelog", path: "/changelog" },
              { name: "Templates", path: "/templates" }
            ] 
          },
          { 
            h: "Company", 
            l: [
              { name: "About", path: "/about" },
              { name: "Blog", path: "/blog" },
              { name: "Team", path: "/team" },
              { name: "Contact", path: "/contact" }
            ] 
          },
          { 
            h: "Legal", 
            l: [
              { name: "Privacy", path: "/privacy" },
              { name: "Terms", path: "/terms" },
              { name: "Security", path: "/security" },
              { name: "Status", path: "/status" }
            ] 
          },
        ].map((col) => (
          <div key={col.h}>
            <div className="text-xs uppercase tracking-widest text-[var(--ig-accent)] mb-3 font-semibold">{col.h}</div>
            <ul className="space-y-3">
              {col.l.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm font-medium text-[var(--ig-muted)] hover:text-[var(--ig-text)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-6xl px-6 mt-10 flex flex-wrap items-center justify-between gap-4 border-t pt-6" style={{ borderColor: "rgba(138,83,214,.12)" }}>
        <div className="text-xs font-medium text-[var(--ig-dim)]">© {new Date().getFullYear()} InfraGlide Labs. All rights reserved.</div>
        <div className="flex items-center gap-4 text-[var(--ig-muted)]">
          <a href="https://github.com/infraglide" aria-label="GitHub" className="hover:text-[var(--ig-text)] transition-colors"><Github className="w-4 h-4" /></a>
          <a href="https://twitter.com/infraglide" aria-label="Twitter" className="hover:text-[var(--ig-text)] transition-colors"><Twitter className="w-4 h-4" /></a>
          <a href="https://linkedin.com/company/infraglide" aria-label="LinkedIn" className="hover:text-[var(--ig-text)] transition-colors"><Linkedin className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}
