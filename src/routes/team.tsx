import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Github, Twitter, Linkedin } from 'lucide-react'

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "InfraGlide Team",
  "url": "https://infraglide.com/team",
  "description": "Meet the builders behind InfraGlide — the team making cloud infrastructure accessible to every engineer.",
  "mainEntity": {
    "@type": "Organization",
    "name": "InfraGlide",
    "url": "https://infraglide.com",
    "member": [
      { "@type": "OrganizationMember", "member": { "@type": "Person", "name": "Manish Sharma", "jobTitle": "Founder & CEO" } },
      { "@type": "OrganizationMember", "member": { "@type": "Person", "name": "Umesh Sharma", "jobTitle": "Managing Director" } },
      { "@type": "OrganizationMember", "member": { "@type": "Person", "name": "Sunil Kumar", "jobTitle": "Chief Sales Officer" } },
      { "@type": "OrganizationMember", "member": { "@type": "Person", "name": "Monika Sharma", "jobTitle": "Head of Engineering" } },
      { "@type": "OrganizationMember", "member": { "@type": "Person", "name": "Ravindra Sharma", "jobTitle": "Head of Marketing" } }
    ]
  }
};

export const Route = createFileRoute('/team')({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Meet the Team — Founders, Engineers & Leaders | InfraGlide" },
      { name: "description", content: "Meet the passionate builders behind InfraGlide — founders, engineers, and leaders making multi-cloud infrastructure accessible to every DevOps and platform engineering team." },
      { name: "keywords", content: "InfraGlide team, InfraGlide founders, cloud infrastructure startup team, Manish Sharma InfraGlide, InfraGlide engineering team" },
      { property: "og:url", content: "https://infraglide.com/team" },
      { property: "og:title", content: "Meet the Team — Founders, Engineers & Leaders | InfraGlide" },
      { property: "og:description", content: "The builders behind InfraGlide — passionate about making cloud infrastructure accessible to every engineer." },
    ],
    links: [
      { rel: "canonical", href: "https://infraglide.com/team" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(teamSchema) },
    ],
  }),
})

function TeamPage() {
  const team = [
    { name: "Umesh Sharma", role: "Managing Director", desc: "15+ years in enterprise cloud infrastructure. Drives InfraGlide's strategic vision and executive relationships.", initials: "US" },
    { name: "Manish Sharma", role: "Founder & CEO", desc: "Serial entrepreneur and cloud infrastructure expert. Founded InfraGlide to democratize enterprise-grade infrastructure tooling.", initials: "MS" },
    { name: "Sunil Kumar", role: "Chief Sales Officer", desc: "Enterprise sales veteran with deep expertise in cloud software. Scaled sales teams at Fortune 500 technology companies.", initials: "SK" },
    { name: "Monika Sharma", role: "Head of Engineering", desc: "Full-stack architect leading the world-class team building the future of cloud automation and AI provisioning.", initials: "MoS" },
    { name: "Ravindra Sharma", role: "Head of Marketing", desc: "Technical product marketer and community builder. Specialises in developer-first GTM strategy and content.", initials: "RS" },
    { name: "Nakshtra Singh Bhati", role: "Engineering Manager", desc: "Infrastructure enthusiast leading the platform squad responsible for the core deployment engine and AI features.", initials: "NB" },
    { name: "Harsh Shrivastav", role: "Engineering Manager", desc: "DevOps and Kubernetes specialist managing the integrations team across all major cloud providers.", initials: "HS" },
    { name: "Kamal Gaur", role: "Senior Developer", desc: "Backend wizard specialising in distributed systems and the high-performance Terraform execution engine. Go + Rust expert.", initials: "KG" },
    { name: "Kartikey Purohit", role: "Senior Developer", desc: "Frontend architect who built the visual infrastructure designer — making InfraGlide instantly intuitive for any engineer.", initials: "KP" },
  ];

  const mentors = [
    { name: "Mukesh Purohit", role: "Mentor", desc: "Strategic guidance and technical vision. Decades of enterprise software architecture experience.", initials: "MP" },
    { name: "Prashant Kumar Jinega", role: "Mentor", desc: "Expert in cloud-native transformations and DevOps culture. Key advisor on product and platform direction.", initials: "PJ" },
  ];

  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10 dark:opacity-25" />
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.08)_0%,transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.18)_0%,transparent_65%)] pointer-events-none blur-[80px]" />
      <div className="absolute top-[40%] right-10 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.05)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.12)_0%,transparent_60%)] pointer-events-none blur-[90px]" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.1)_0%,transparent_70%)] pointer-events-none blur-[80px]" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.12)] dark:border-[rgba(138,83,214,0.18)] text-[#8A53D6] dark:text-[#b07eff] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            OUR PEOPLE
          </div>
          <h1 className="font-display-family text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-[var(--ig-text)]">
            Meet the <span className="ig-metallic">Team.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-lg md:text-xl max-w-2xl mx-auto font-medium">
            The builders behind InfraGlide — passionate about making cloud infrastructure accessible to every engineer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24" role="list" aria-label="InfraGlide team members">
          {team.map((member, i) => (
            <article key={i} className="backdrop-blur-md bg-white/70 dark:bg-[rgba(22,15,36,0.55)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-[2rem] p-8 text-center group hover:-translate-y-2 hover:border-[#8A53D6]/40 dark:hover:border-[#8A53D6]/50 hover:shadow-md transition-all duration-300" role="listitem">
              <div className="w-24 h-24 mx-auto rounded-full mb-6 flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-[#8A53D6] to-[#b07eff] shadow-[0_12px_24px_rgba(138,83,214,0.25)] dark:shadow-[0_12px_24px_rgba(138,83,214,0.4)] group-hover:scale-105 transition-transform border border-white/10" aria-hidden="true">
                {member.initials}
              </div>
              <h2 className="text-xl font-bold text-[var(--ig-text)] mb-1">{member.name}</h2>
              <div className="text-sm font-semibold text-[#8A53D6] dark:text-[#b07eff] mb-4">{member.role}</div>
              <p className="text-sm text-[var(--ig-muted)] leading-relaxed mb-6">
                {member.desc}
              </p>
              <div className="flex items-center justify-center gap-4 text-[var(--ig-dim)]" aria-label={`${member.name} social links`}>
                <a href="#" className="hover:text-[var(--ig-text)] transition-colors" aria-label={`${member.name} on Twitter`}><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[var(--ig-text)] transition-colors" aria-label={`${member.name} on GitHub`}><Github className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[var(--ig-text)] transition-colors" aria-label={`${member.name} on LinkedIn`}><Linkedin className="w-4 h-4" /></a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.12)] dark:border-[rgba(138,83,214,0.18)] text-[#8A53D6] dark:text-[#b07eff] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            MENTORS
          </div>
          <h2 className="font-display-family text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[var(--ig-text)]">
            Our <span className="ig-metallic">guiding lights.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" role="list" aria-label="InfraGlide mentors">
          {mentors.map((member, i) => (
            <article key={i} className="backdrop-blur-md bg-white/70 dark:bg-[rgba(22,15,36,0.55)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-[2rem] p-8 text-center group hover:-translate-y-2 hover:border-[#8A53D6]/40 dark:hover:border-[#8A53D6]/50 hover:shadow-md transition-all duration-300" role="listitem">
              <div className="w-24 h-24 mx-auto rounded-full mb-6 flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-[#5B2FB2] to-[#8A53D6] shadow-[0_12px_24px_rgba(91,47,178,0.25)] dark:shadow-[0_12px_24px_rgba(91,47,178,0.4)] group-hover:scale-105 transition-transform border border-white/10" aria-hidden="true">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-[var(--ig-text)] mb-1">{member.name}</h3>
              <div className="text-sm font-semibold text-[#8A53D6] dark:text-[#b07eff] mb-4">{member.role}</div>
              <p className="text-sm text-[var(--ig-muted)] leading-relaxed mb-6">
                {member.desc}
              </p>
              <div className="flex items-center justify-center gap-4 text-[var(--ig-dim)]">
                <a href="#" className="hover:text-[var(--ig-text)] transition-colors" aria-label={`${member.name} on LinkedIn`}><Linkedin className="w-4 h-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
