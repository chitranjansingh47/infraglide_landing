import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Shield, FileText, ChevronRight, Mail, Eye, Info, AlertTriangle } from 'lucide-react'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — InfraGlide Platform Usage Agreement" },
      { name: "description", content: "Read InfraGlide's Terms of Service. Understand the terms governing use of the InfraGlide cloud infrastructure platform, including acceptable use, data ownership, and service levels." },
      { name: "robots", content: "index, follow" },
      { property: "og:url", content: "https://infraglide.com/terms" },
      { property: "og:title", content: "Terms of Service | InfraGlide" },
      { property: "og:description", content: "The terms and conditions governing use of the InfraGlide cloud infrastructure platform." },
    ],
    links: [
      { rel: "canonical", href: "https://infraglide.com/terms" },
    ],
  }),
})

const SECTIONS = [
  { id: 'the-service', label: '1. The Service' },
  { id: 'eligibility-accounts', label: '2. Eligibility and accounts' },
  { id: 'customer-data-cloud', label: '3. Customer data & cloud accounts' },
  { id: 'acceptable-use', label: '4. Acceptable use' },
  { id: 'subscription-fees', label: '5. Subscription, fees & trials' },
  { id: 'intellectual-property', label: '6. Intellectual property' },
  { id: 'ai-jane', label: '7. AI features (Jane)' },
  { id: 'confidentiality-security', label: '8. Confidentiality & security' },
  { id: 'privacy', label: '9. Privacy' },
  { id: 'third-party-services', label: '10. Third-party services' },
  { id: 'service-availability', label: '11. Service availability & changes' },
  { id: 'warranty-disclaimer', label: '12. Warranty disclaimer' },
  { id: 'limitation-liability', label: '13. Limitation of liability' },
  { id: 'indemnification', label: '14. Indemnification' },
  { id: 'term-termination', label: '15. Term and termination' },
  { id: 'export-compliance', label: '16. Export compliance' },
  { id: 'governing-law', label: '17. Governing law & disputes' },
  { id: 'general', label: '18. General' },
  { id: 'contact', label: '19. Contact' }
]

function TermsPage() {
  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] pb-12">
      <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10 dark:opacity-25" />
      
      {/* Background glow styling adjustments */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.18)_0%,transparent_60%)] pointer-events-none blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.05)_0%,transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.1)_0%,transparent_65%)] pointer-events-none blur-[90px]" />

      <div className="relative z-10 pt-24 lg:pt-28 px-6 max-w-6xl mx-auto pb-24">
        {/* Content Layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:flex flex-col self-start bg-white/70 dark:bg-[rgba(22,15,36,0.6)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-2xl p-5 backdrop-blur-md shadow-sm sticky top-24 max-h-[calc(100vh-8rem)] min-h-0 overflow-y-auto">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ig-muted)] mb-4 flex items-center gap-2 shrink-0">
              <FileText className="w-4 h-4 text-[#8A53D6] dark:text-[#b07eff]" /> Table of Contents
            </h4>
            <nav className="space-y-1 overflow-y-auto flex-1 pr-1">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex items-center justify-between text-xs text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-white transition-colors py-1 group"
                >
                  <span className="truncate max-w-[210px]">{sec.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#8A53D6] dark:text-[#b07eff]" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Right Column: Header & Main Document Content */}
          <div className="space-y-12">
            {/* Header */}
            <div className="text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.12)] dark:border-[rgba(138,83,214,0.18)] text-[#8A53D6] dark:text-[#b07eff] text-xs font-bold tracking-widest uppercase mb-3 backdrop-blur-md">
                Legal Terms
              </div>
              <h1 className="font-display-family text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-[var(--ig-text)]">
                Terms of <span className="ig-metallic">Service.</span>
              </h1>
              <p className="text-[var(--ig-muted)] text-sm">Last updated: June 17, 2026</p>
            </div>

            {/* Main Document Content */}
            <div className="space-y-12">

            <p className="text-[var(--ig-text)] text-lg leading-relaxed border-b border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] pb-8">
              These Terms of Service (&quot;<strong>Terms</strong>&quot;) govern access to and use of the InfraGlide platform, website, and related services (collectively, the &quot;<strong>Service</strong>&quot;) provided by <strong>InfraGlide</strong> (&quot;<strong>InfraGlide</strong>,&quot; &quot;<strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;<strong>our</strong>&quot;). By creating an account, accepting an invitation, or using the Service, you (&quot;<strong>you</strong>,&quot; &quot;<strong>User</strong>,&quot; or &quot;<strong>Customer</strong>&quot;) agree to these Terms. If you use the Service on behalf of an organization, you represent that you have authority to bind that organization, and &quot;you&quot; refers to that organization. If you do not agree, do not use the Service.
            </p>

            {/* SECTION 1 */}
            <section id="the-service" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">1. The Service</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                InfraGlide is a cloud infrastructure platform that enables Users to:
              </p>
              <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5 text-sm">
                <li>Design infrastructure visually on a multi-cloud canvas</li>
                <li>Configure resources through guided forms</li>
                <li>Generate Terraform-compatible infrastructure code</li>
                <li>Execute plan, apply, and destroy operations against connected cloud accounts</li>
                <li>Manage workspaces, sandboxes, pipelines, versions, and deployments</li>
                <li>Detect configuration drift and view deployed resource inventory</li>
                <li>Apply organizational policies, cost insights, security scanning, and AI-assisted guidance (including Jane)</li>
              </ul>
              <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                Features available to you may depend on your <strong>subscription plan</strong>, organization configuration, and role assignments.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="eligibility-accounts" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">2. Eligibility and accounts</h2>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">2.1 Invitation-based access</h3>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  The Service is intended for business use. Self-service public registration may be disabled. Access is typically granted through <strong>invitation</strong> by an organization administrator or through enterprise identity provisioning.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">2.2 Account responsibility</h3>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5 text-sm">
                  <li>Maintaining the confidentiality of your login credentials</li>
                  <li>All activity under your account</li>
                  <li>Ensuring information you provide is accurate and current</li>
                  <li>Notifying your administrator or support@infraglide.com promptly of unauthorized access</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">2.3 Administrators</h3>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  Organization administrators may manage Users, roles, credentials, policies, and data within their organization subject to these Terms and applicable subscription limits.
                </p>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="customer-data-cloud" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">3. Customer data and cloud accounts</h2>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">3.1 Your data</h3>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  &quot;<strong>Customer Data</strong>&quot; includes pipelines, configurations, deployment history, credentials (encrypted), audit logs, and other content you or your Users submit to the Service. You retain ownership of Customer Data. You grant InfraGlide a limited license to host, process, transmit, and display Customer Data <strong>solely to provide and improve the Service</strong> as permitted by these Terms and your subscription agreement.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">3.2 Cloud credentials and provider relationship</h3>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  To deploy infrastructure, you provide credentials for AWS, Google Cloud, Azure, or other supported providers. You represent that:
                </p>
                <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5 text-sm">
                  <li>You have authority to connect those cloud accounts</li>
                  <li>Credentials comply with your cloud provider agreements and internal policies</li>
                  <li>You will use least-privilege permissions appropriate for the Service</li>
                </ul>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  <strong>InfraGlide is not a cloud provider.</strong> Your relationship with AWS, GCP, Azure, and other providers is governed by their terms and pricing. You are responsible for all fees charged by cloud providers for resources created, modified, or destroyed through the Service.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">3.3 Infrastructure operations disclaimer</h3>
                <div className="flex gap-2 items-start p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl text-yellow-300/80 text-xs">
                  <AlertTriangle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-sm text-[var(--ig-text)]">Warning on destructive actions</p>
                    <p className="leading-relaxed">
                      Deploy, destroy, drift remediation, and related actions <strong>modify real cloud resources</strong> and may cause downtime, data loss, or charges. You are solely responsible for reviewing plans before applying, testing in non-production environments, maintaining backups, and deciding to apply production changes. InfraGlide provides previews and tools; you remain accountable for production outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="acceptable-use" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">4. Acceptable use</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5 text-sm">
                <li>Use the Service in violation of law or third-party rights</li>
                <li>Attempt unauthorized access to the Service, other accounts, or underlying systems</li>
                <li>Upload malware or interfere with Service integrity or performance</li>
                <li>Use the Service to mine cryptocurrency or for unrelated high-load abuse</li>
                <li>Reverse engineer the Service except where permitted by law</li>
                <li>Misrepresent identity or affiliation</li>
                <li>Share credentials in plain text outside designated Service forms</li>
                <li>Use Jane or other AI features to generate content that violates law or infringes rights</li>
              </ul>
              <p className="text-[var(--ig-muted)] text-sm">
                We may suspend or terminate access for violations, security risks, or non-payment, with notice where reasonable.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="subscription-fees" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">5. Subscription, fees, and trials</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                Access to certain features may require a paid subscription. Unless otherwise agreed in writing:
              </p>
              <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5 text-sm">
                <li>Fees, billing cycles, and plan limits are described at purchase or in your order form.</li>
                <li>Subscriptions may renew automatically until cancelled.</li>
                <li>Failure to pay may result in suspension.</li>
                <li>We may change pricing for renewals with advance notice.</li>
              </ul>
              <p className="text-[var(--ig-muted)] text-sm">
                Free trials or beta features are offered &quot;as is&quot; with limited support and may be discontinued at any time.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="intellectual-property" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">6. Intellectual property</h2>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">6.1 InfraGlide property</h3>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  The Service, including software, visual design, documentation, trademarks, and logos (excluding Customer Data), is owned by InfraGlide or its licensors and protected by intellectual property laws. These Terms do not grant you ownership of the Service.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">6.2 Terraform output</h3>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  Terraform JSON and related artifacts generated from your pipeline designs are produced for your use in operating your infrastructure, subject to applicable open-source licenses for Terraform and cloud provider modules you incorporate. You are responsible for compliance with those licenses.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">6.3 Feedback</h3>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  If you provide suggestions or feedback, you grant InfraGlide a perpetual, royalty-free license to use it without obligation to you.
                </p>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="ai-jane" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">7. AI features (Jane)</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                Jane and related AI capabilities generate suggestions, reviews, explanations, and drafts based on your inputs and context. You acknowledge that:
              </p>
              <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5 text-sm">
                <li>AI output may be incomplete or incorrect.</li>
                <li>AI responses are not professional legal, financial, or security advice.</li>
                <li>You must review AI-generated configurations, policies, and remediation steps before applying them in production.</li>
                <li>Jane does not autonomously modify production infrastructure without your explicit actions in the Service.</li>
              </ul>
              <p className="text-[var(--ig-muted)] text-xs">
                Use of AI features may be subject to additional usage limits on your plan.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="confidentiality-security" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">8. Confidentiality and security</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                Each party will protect the other&apos;s confidential information with reasonable care. InfraGlide implements security measures described in our <a href="/privacy" className="text-[#8A53D6] hover:underline">Privacy Policy</a>. No system is perfectly secure; you are responsible for configuring RBAC, credentials, and cloud permissions appropriately.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="privacy" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">9. Privacy</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                Our collection and use of personal information is described in the <a href="/privacy" className="text-[#8A53D6] hover:underline">Privacy Policy</a>, incorporated into these Terms by reference.
              </p>
            </section>

            {/* SECTION 10 */}
            <section id="third-party-services" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">10. Third-party services</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                The Service integrates with third parties (identity providers, cloud APIs, AI providers, email, storage). Your use of those services may be subject to their terms. InfraGlide is not responsible for third-party services outside our reasonable control.
              </p>
            </section>

            {/* SECTION 11 */}
            <section id="service-availability" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">11. Service availability and changes</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                We strive for reliable availability but do not guarantee uninterrupted access. We may perform maintenance with notice when practicable, modify or discontinue features, and update security requirements. Material adverse changes to paid features will be communicated.
              </p>
            </section>

            {/* SECTION 12 */}
            <section id="warranty-disclaimer" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">12. Warranty disclaimer</h2>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl text-red-200/80 text-xs font-mono uppercase space-y-2">
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
                <p>WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, THAT TERRAFORM RUNS WILL SUCCEED IN ALL ENVIRONMENTS, OR THAT DRIFT DETECTION WILL IDENTIFY EVERY CHANGE IN YOUR CLOUD ACCOUNTS.</p>
              </div>
            </section>

            {/* SECTION 13 */}
            <section id="limitation-liability" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">13. Limitation of liability</h2>
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl text-red-200/80 text-xs font-mono uppercase space-y-2">
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>INFRAGLIDE WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION.</li>
                  <li>INFRAGLIDE&apos;S TOTAL LIABILITY ARISING FROM THESE TERMS OR THE SERVICE WILL NOT EXCEED THE GREATER OF (A) AMOUNTS YOU PAID TO INFRAGLIDE IN THE TWELVE (12) MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS ($100).</li>
                </ul>
              </div>
            </section>

            {/* SECTION 14 */}
            <section id="indemnification" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">14. Indemnification</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                You will defend and indemnify InfraGlide against claims arising from:
              </p>
              <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5 text-sm">
                <li>Your Customer Data or cloud resources you manage through the Service</li>
                <li>Your violation of these Terms or applicable law</li>
                <li>Your cloud provider accounts or credentials</li>
                <li>Production changes you approve (including apply and destroy operations)</li>
              </ul>
            </section>

            {/* SECTION 15 */}
            <section id="term-termination" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">15. Term and termination</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                These Terms remain in effect while you use the Service. You may stop using the Service at any time. We may suspend or terminate access for breach, risk, non-payment, or discontinuation of the Service. Upon termination, your right to access the Service ends. Sections that by nature should survive (including payment, disclaimers, liability limits, and indemnification) survive termination.
              </p>
            </section>

            {/* SECTION 16 */}
            <section id="export-compliance" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">16. Export compliance</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                You represent that you are not located in, under control of, or a national of any country subject to comprehensive U.S. embargo, and that you are not on denied-party lists. You will not use the Service in violation of export control laws.
              </p>
            </section>

            {/* SECTION 17 */}
            <section id="governing-law" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">17. Governing law and disputes</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict-of-law principles. Disputes will be resolved in the state or federal courts located in Delaware. Each party waives jury trial to the extent permitted. Before formal proceedings, parties agree to attempt good-faith resolution.
              </p>
            </section>

            {/* SECTION 18 */}
            <section id="general" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">18. General</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                These Terms, the Privacy Policy, and any order form constitute the entire agreement. If any provision is invalid, the remainder continues. Failure to enforce a provision is not a waiver. You may not assign these Terms without consent.
              </p>
            </section>

            {/* SECTION 19 */}
            <section id="contact" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">19. Contact</h2>
              <div className="p-6 bg-[rgba(138,83,214,0.03)] border border-[var(--ig-border-soft)] rounded-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#8A53D6]" />
                  <span className="text-sm font-semibold">Email:</span>
                  <a href="mailto:support@infraglide.com" className="text-[#8A53D6] hover:underline text-sm">support@infraglide.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-[#8A53D6]" />
                  <span className="text-sm font-semibold">Website:</span>
                  <a href="https://infraglide.com" target="_blank" rel="noopener noreferrer" className="text-[#8A53D6] hover:underline text-sm">https://infraglide.com</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

