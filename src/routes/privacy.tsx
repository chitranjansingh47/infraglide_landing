import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'
import { Shield, Lock, Eye, Mail, FileText, ChevronRight, Sparkles } from 'lucide-react'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — How InfraGlide Protects Your Data" },
      { name: "description", content: "Read InfraGlide's privacy policy. Understand how we collect, use, and protect your data as you use the cloud infrastructure platform. GDPR and data residency compliant." },
      { name: "robots", content: "index, follow" },
      { property: "og:url", content: "https://infraglide.com/privacy" },
      { property: "og:title", content: "Privacy Policy | InfraGlide" },
      { property: "og:description", content: "How InfraGlide collects, uses, and protects your personal and infrastructure data." },
    ],
    links: [
      { rel: "canonical", href: "https://infraglide.com/privacy" },
    ],
  }),
})

const SECTIONS = [
  { id: 'applies-to', label: '1. Who this policy applies to' },
  { id: 'info-we-collect', label: '2. Information we collect' },
  { id: 'how-we-use', label: '3. How we use information' },
  { id: 'sensitive-data', label: '4. Handling sensitive data' },
  { id: 'how-we-share', label: '5. How we share information' },
  { id: 'data-retention', label: '6. Data retention' },
  { id: 'security', label: '7. Security' },
  { id: 'intl-transfers', label: '8. International transfers' },
  { id: 'rights-choices', label: '9. Your rights and choices' },
  { id: 'children', label: "10. Children's privacy" },
  { id: 'third-party', label: '11. Third-party links' },
  { id: 'policy-changes', label: '12. Changes to this policy' },
  { id: 'contact', label: '13. Contact us' }
]

function PrivacyPage() {
  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] pb-32">
      <InteractiveGrid color="#8A53D6" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10 dark:opacity-25" />
      
      {/* Background glow styling adjustments */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(138,83,214,0.18)_0%,transparent_60%)] pointer-events-none blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.05)_0%,transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(90,62,248,0.1)_0%,transparent_65%)] pointer-events-none blur-[90px]" />

      <div className="relative z-10 pt-32 px-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(138,83,214,0.06)] dark:bg-[rgba(138,83,214,0.08)] border border-[rgba(138,83,214,0.12)] dark:border-[rgba(138,83,214,0.18)] text-[#8A53D6] dark:text-[#b07eff] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            Trust & Security
          </div>
          <h1 className="font-display-family text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-[var(--ig-text)]">
            Privacy <span className="ig-metallic">Policy.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-lg">Last updated: June 17, 2026</p>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block self-start sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto bg-white/70 dark:bg-[rgba(22,15,36,0.6)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-2xl p-6 backdrop-blur-md shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ig-muted)] mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#8A53D6] dark:text-[#b07eff]" /> Table of Contents
            </h4>
            <nav className="space-y-1.5">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex items-center justify-between text-sm text-[var(--ig-muted)] hover:text-[#8A53D6] dark:hover:text-white transition-colors py-1 group"
                >
                  <span>{sec.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#8A53D6] dark:text-[#b07eff]" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Document Content */}
          <div className="backdrop-blur-md bg-white/70 dark:bg-[rgba(22,15,36,0.55)] border border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] rounded-[2rem] p-8 md:p-12 shadow-sm relative overflow-hidden space-y-12">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#8A53D6] to-[#b07eff]" />
            
            <p className="text-[var(--ig-text)] text-lg leading-relaxed border-b border-[var(--ig-border)] dark:border-[rgba(138,83,214,0.15)] pb-8">
              <strong>InfraGlide</strong> (&quot;InfraGlide,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides a multi-cloud infrastructure design and deployment platform available at <strong>infraglide.com</strong> and associated subdomains (such as <strong>app.infraglide.com</strong>). This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, create an account, or use the InfraGlide platform (the &quot;Service&quot;). By using the Service, you agree to the practices described in this policy. If you do not agree, please do not use the Service.
            </p>

            {/* SECTION 1 */}
            <section id="applies-to" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">1. Who this policy applies to</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                This policy applies to:
              </p>
              <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5">
                <li><strong>Website visitors</strong> — people who browse infraglide.com or related marketing pages</li>
                <li><strong>Account holders</strong> — users invited to or provisioned within a customer organization</li>
                <li><strong>Organization administrators</strong> — admins who configure workspaces, credentials, policies, and user access</li>
              </ul>
              <p className="text-[var(--ig-muted)] leading-relaxed text-sm">
                If you use InfraGlide through an employer or other organization (&quot;<strong>Customer</strong>&quot;), that organization may also have policies governing your use. Where Customer agreements conflict with this policy regarding Customer data processed on their behalf, the Customer agreement typically controls.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="info-we-collect" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">2. Information we collect</h2>
              
              {/* 2.1 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">2.1 Information you provide</h3>
                <div className="overflow-x-auto rounded-xl border border-[var(--ig-border-soft)]">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[rgba(138,83,214,0.05)] border-b border-[var(--ig-border)]">
                        <th className="p-3 font-bold">Category</th>
                        <th className="p-3 font-bold">Examples</th>
                        <th className="p-3 font-bold">How it is collected</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--ig-border-soft)] text-[var(--ig-muted)]">
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Account information</td>
                        <td className="p-3">Name, email address, organization affiliation</td>
                        <td className="p-3">Sign-up, invitation acceptance, profile settings</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Authentication data</td>
                        <td className="p-3">Username, SSO identifiers</td>
                        <td className="p-3">Login via Auth0, Google OAuth, LDAP, or other configured providers</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Organization config</td>
                        <td className="p-3">Workspace names, sandbox names, RBAC settings</td>
                        <td className="p-3">Onboarding wizard and administration screens</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Infrastructure designs</td>
                        <td className="p-3">Pipeline canvas data, component configurations, connections, versions</td>
                        <td className="p-3">Saved pipelines in the Service</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Cloud credentials</td>
                        <td className="p-3">Access keys, service account references, tokens (stored encrypted)</td>
                        <td className="p-3">Credentials management page</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Communications</td>
                        <td className="p-3">Support requests, feedback</td>
                        <td className="p-3">Email to support@infraglide.com or in-app contact</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Jane AI interactions</td>
                        <td className="p-3">Questions, prompts, chat history</td>
                        <td className="p-3">Jane assistant panel and related features</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex gap-2 items-start p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl text-yellow-300/80 text-xs">
                  <Shield className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span>We ask that you <strong>do not</strong> submit passwords, private keys, or other secrets in support tickets or Jane chat messages. Cloud credential secrets should only be entered through designated credential forms in the Service.</span>
                </div>
              </div>

              {/* 2.2 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">2.2 Information collected automatically</h3>
                <div className="overflow-x-auto rounded-xl border border-[var(--ig-border-soft)]">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[rgba(138,83,214,0.05)] border-b border-[var(--ig-border)]">
                        <th className="p-3 font-bold">Category</th>
                        <th className="p-3 font-bold">Examples</th>
                        <th className="p-3 font-bold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--ig-border-soft)] text-[var(--ig-muted)]">
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Usage data</td>
                        <td className="p-3">Pages viewed, features used, deploy actions, timestamps</td>
                        <td className="p-3">Operate, improve, and secure the Service</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Device and browser data</td>
                        <td className="p-3">IP address, browser type, operating system</td>
                        <td className="p-3">Security, fraud prevention, diagnostics</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Log data</td>
                        <td className="p-3">API requests, error logs, deployment execution metadata</td>
                        <td className="p-3">Reliability, audit, troubleshooting</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Cookies and session data</td>
                        <td className="p-3">Session identifiers, preference cookies</td>
                        <td className="p-3">Authentication and session management</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  We may use analytics and observability tools (including OpenTelemetry-compatible telemetry when enabled) to understand performance and usage patterns. We configure these tools to avoid collecting credential values or raw cloud secrets.
                </p>
              </div>

              {/* 2.3 */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--ig-text)]">2.3 Information from third parties</h3>
                <div className="overflow-x-auto rounded-xl border border-[var(--ig-border-soft)]">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[rgba(138,83,214,0.05)] border-b border-[var(--ig-border)]">
                        <th className="p-3 font-bold">Source</th>
                        <th className="p-3 font-bold">What we may receive</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--ig-border-soft)] text-[var(--ig-muted)]">
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Identity providers</td>
                        <td className="p-3">Name, email, authentication tokens, organization identifiers</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Cloud providers</td>
                        <td className="p-3">Resource metadata when you connect credentials and run deploy, drift, or inventory operations — not your cloud account password</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-[var(--ig-text)]">Customer administrators</td>
                        <td className="p-3">Role assignments, workspace access, invitation details</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  We do not receive your cloud provider console password through InfraGlide. Access uses credentials or federated identities you or your administrator configure.
                </p>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="how-we-use" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">3. How we use information</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                We use collected information to:
              </p>
              <ol className="list-decimal pl-6 text-[var(--ig-muted)] space-y-2">
                <li><strong>Provide the Service</strong> — authenticate users, save pipelines, generate Terraform, execute deployments, detect drift, enforce policies, and display observability data</li>
                <li><strong>Operate Jane AI</strong> — route prompts, generate reviews, explanations, and recommendations using configured AI providers</li>
                <li><strong>Secure the Service</strong> — detect abuse, enforce access controls, maintain audit logs, and protect encrypted credentials</li>
                <li><strong>Communicate with you</strong> — send invitations, service notices, security alerts, and support responses</li>
                <li><strong>Improve the product</strong> — analyze aggregated usage patterns and fix defects (we do not use Customer pipeline content to train public third-party models without explicit agreement)</li>
                <li><strong>Comply with law</strong> — respond to lawful requests and enforce our Terms of Service</li>
              </ol>
            </section>

            {/* SECTION 4 */}
            <section id="sensitive-data" className="scroll-mt-24 space-y-6">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">4. How we handle sensitive data</h2>
              
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[var(--ig-text)] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#8A53D6]" /> Cloud credentials
                </h4>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  Cloud credentials are encrypted at rest using industry-standard encryption. They are decrypted <strong>only at deployment or cloud API execution time</strong>, injected into isolated execution environments, and not written to application logs or returned in API responses.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold text-[var(--ig-text)] flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#8A53D6]" /> Deployment and Terraform data
                </h4>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  Terraform artifacts and state files may be stored in secure object storage (e.g., AWS S3) with encryption enabled. Access is restricted to authorized Service components and Customer users with appropriate roles.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-base font-bold text-[var(--ig-text)] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#8A53D6]" /> Jane AI
                </h4>
                <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                  Jane processes your prompts and relevant context (such as open pipeline configuration, drift events, or deployment log excerpts) to generate responses. Context is scoped to your organization and access permissions. We instruct AI subprocessors not to retain prompts beyond what is necessary to provide the Service, subject to their own terms.
                </p>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="how-we-share" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">5. How we share information</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                We do <strong>not sell</strong> your personal information. We may share information in these circumstances:
              </p>
              
              <div className="overflow-x-auto rounded-xl border border-[var(--ig-border-soft)]">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-[rgba(138,83,214,0.05)] border-b border-[var(--ig-border)]">
                      <th className="p-3 font-bold w-1/3">Recipient</th>
                      <th className="p-3 font-bold">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--ig-border-soft)] text-[var(--ig-muted)]">
                    <tr>
                      <td className="p-3 font-medium text-[var(--ig-text)]">Service providers</td>
                      <td className="p-3">Hosting (e.g., cloud infrastructure, databases), email delivery, authentication (Auth0), AI inference providers, monitoring — under contracts requiring appropriate safeguards</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-[var(--ig-text)]">Your organization</td>
                      <td className="p-3">Administrators within your Customer org can see user activity, audit logs, and infrastructure data according to RBAC settings</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-[var(--ig-text)]">Legal and safety</td>
                      <td className="p-3">When required by law, court order, or to protect rights, safety, and integrity of the Service</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-[var(--ig-text)]">Business transfers</td>
                      <td className="p-3">In connection with a merger, acquisition, or sale of assets, with notice where required by law</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                Customer infrastructure data is shared with <strong>cloud providers you authorize</strong> when you deploy or sync resources — that is necessary to operate the Service on your behalf.
              </p>
            </section>

            {/* SECTION 6 */}
            <section id="data-retention" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">6. Data retention</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                We retain information for as long as needed to provide the Service and fulfill the purposes in this policy:
              </p>
              <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-2 text-sm">
                <li><strong>Account data</strong> — while the account is active and for a reasonable period after deletion for backup, audit, and legal compliance.</li>
                <li><strong>Pipeline and deployment data</strong> — according to Customer configuration and subscription terms.</li>
                <li><strong>Audit logs</strong> — typically retained for security and compliance periods defined by plan or Customer agreement.</li>
                <li><strong>Jane chat sessions</strong> — retained to support session continuity and may be deleted according to retention settings.</li>
              </ul>
              <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                Customers may request deletion of organization data subject to technical, legal, and backup constraints.
              </p>
            </section>

            {/* SECTION 7 */}
            <section id="security" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">7. Security</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                We implement administrative, technical, and organizational measures designed to protect information, including:
              </p>
              <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-1.5 text-sm">
                <li>Encryption of credentials at rest and encryption in transit (TLS)</li>
                <li>Role-based access control within the Service</li>
                <li>Structured audit logging for sensitive actions</li>
                <li>Separation of Customer organizations and workspace scopes</li>
                <li>Restricted access to production systems for InfraGlide personnel</li>
              </ul>
              <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                No method of transmission or storage is completely secure. We encourage Customers to use strong authentication (including SSO and MFA where available), least-privilege cloud IAM, and separate credentials per environment.
              </p>
            </section>

            {/* SECTION 8 */}
            <section id="intl-transfers" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">8. International transfers</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                InfraGlide may process and store information in the United States and other countries where we or our service providers operate. By using the Service, you consent to transfer of information to countries that may have different data protection laws than your country. Where required, we use appropriate safeguards for cross-border transfers.
              </p>
            </section>

            {/* SECTION 9 */}
            <section id="rights-choices" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">9. Your rights and choices</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                Depending on your location, you may have rights to:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-[var(--ig-muted)]">
                <div className="p-4 bg-[rgba(138,83,214,0.02)] border border-[var(--ig-border-soft)] rounded-xl">
                  <strong>Access & Export</strong>
                  <p className="text-xs mt-1">Access personal information we hold or export it in a portable format where feasible.</p>
                </div>
                <div className="p-4 bg-[rgba(138,83,214,0.02)] border border-[var(--ig-border-soft)] rounded-xl">
                  <strong>Correction & Deletion</strong>
                  <p className="text-xs mt-1">Correct inaccurate information or request deletion subject to legal constraints.</p>
                </div>
                <div className="p-4 bg-[rgba(138,83,214,0.02)] border border-[var(--ig-border-soft)] rounded-xl">
                  <strong>Restriction & Objection</strong>
                  <p className="text-xs mt-1">Object to or restrict processing, or withdraw consent where it is consent-based.</p>
                </div>
                <div className="p-4 bg-[rgba(138,83,214,0.02)] border border-[var(--ig-border-soft)] rounded-xl">
                  <strong>Cookie Controls</strong>
                  <p className="text-xs mt-1">Control cookies through browser settings (disabling may restrict Service functions).</p>
                </div>
              </div>
              <p className="text-[var(--ig-muted)] text-sm leading-relaxed">
                To exercise these rights, contact <a href="mailto:support@infraglide.com" className="text-[#8A53D6] hover:underline">support@infraglide.com</a>. We may verify your identity before responding. If you are an end user of a Customer organization, you may also contact your organization administrator.
              </p>
            </section>

            {/* SECTION 10 */}
            <section id="children" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">10. Children&apos;s privacy</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                The Service is not directed to individuals under 16. We do not knowingly collect personal information from children. Contact us if you believe we have collected such information.
              </p>
            </section>

            {/* SECTION 11 */}
            <section id="third-party" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">11. Third-party links and services</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                The Service may link to third-party websites or integrate with third-party identity and cloud providers. Their privacy practices are governed by their own policies. We encourage you to review Auth0, Google, AWS, GCP, Azure, and other providers&apos; policies as applicable.
              </p>
            </section>

            {/* SECTION 12 */}
            <section id="policy-changes" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">12. Changes to this policy</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                We may update this Privacy Policy from time to time. We will post the revised policy with an updated &quot;Last updated&quot; date and, where appropriate, notify administrators by email or in-app notice. Continued use after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* SECTION 13 */}
            <section id="contact" className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-bold text-[var(--ig-text)] font-display-family">13. Contact us</h2>
              <p className="text-[var(--ig-muted)] leading-relaxed">
                Questions about this Privacy Policy or our data practices:
              </p>
              <div className="p-6 bg-[rgba(0,168,136,0.03)] border border-[rgba(0,168,136,0.15)] rounded-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00a888]" />
                  <span className="text-sm font-semibold">Email:</span>
                  <a href="mailto:support@infraglide.com" className="text-[#00a888] hover:underline text-sm">support@infraglide.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-[#00a888]" />
                  <span className="text-sm font-semibold">Website:</span>
                  <a href="https://infraglide.com" target="_blank" rel="noopener noreferrer" className="text-[#00a888] hover:underline text-sm">https://infraglide.com</a>
                </div>
              </div>
              <p className="text-[var(--ig-muted)] text-xs leading-relaxed italic pt-4 border-t border-[var(--ig-border-soft)]">
                This document is a product-aligned draft. InfraGlide recommends review by qualified legal counsel before publication.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

