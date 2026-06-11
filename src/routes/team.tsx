import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Github, Twitter, Linkedin } from 'lucide-react'

export const Route = createFileRoute('/team')({
  component: TeamPage,
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
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[#8A53D6] text-xs font-bold tracking-widest uppercase mb-6">
            OUR PEOPLE
          </div>
          <h1 className="font-display-family text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Meet the <span className="ig-metallic">Team.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-lg md:text-xl max-w-2xl mx-auto font-medium">
            The builders behind InfraGlide — passionate about making cloud infrastructure accessible to every engineer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {team.map((member, i) => (
            <div key={i} className="ig-card rounded-[2rem] p-8 text-center group hover:-translate-y-2 hover:border-[#8A53D6]/40 transition-all duration-300">
              <div className="w-24 h-24 mx-auto rounded-full mb-6 flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-[#5a3ef8] to-[#00a888] shadow-[0_12px_24px_rgba(90,62,248,0.3)] group-hover:scale-105 transition-transform">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-[var(--ig-text)] mb-1">{member.name}</h3>
              <div className="text-sm font-semibold text-[#8A53D6] mb-4">{member.role}</div>
              <p className="text-sm text-[var(--ig-muted)] leading-relaxed mb-6">
                {member.desc}
              </p>
              <div className="flex items-center justify-center gap-4 text-[var(--ig-dim)]">
                <a href="#" className="hover:text-[var(--ig-text)] transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[var(--ig-text)] transition-colors"><Github className="w-4 h-4" /></a>
                <a href="#" className="hover:text-[var(--ig-text)] transition-colors"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.1)] border border-[rgba(138,83,214,0.2)] text-[#8A53D6] text-xs font-bold tracking-widest uppercase mb-6">
            MENTORS
          </div>
          <h2 className="font-display-family text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Our <span className="ig-metallic">guiding lights.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((member, i) => (
            <div key={i} className="ig-card rounded-[2rem] p-8 text-center group hover:-translate-y-2 hover:border-[#8A53D6]/40 transition-all duration-300">
              <div className="w-24 h-24 mx-auto rounded-full mb-6 flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br from-[#f59e0b] to-[#d97706] shadow-[0_12px_24px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-[var(--ig-text)] mb-1">{member.name}</h3>
              <div className="text-sm font-semibold text-[#f59e0b] mb-4">{member.role}</div>
              <p className="text-sm text-[var(--ig-muted)] leading-relaxed mb-6">
                {member.desc}
              </p>
              <div className="flex items-center justify-center gap-4 text-[var(--ig-dim)]">
                <a href="#" className="hover:text-[var(--ig-text)] transition-colors"><Linkedin className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
