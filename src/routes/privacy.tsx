import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="font-display-family text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Privacy <span className="ig-metallic">Policy.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-lg">Last updated: May 20, 2026</p>
        </div>

        <div className="ig-card rounded-[2rem] p-8 md:p-12 prose prose-invert max-w-none">
          <p className="text-[var(--ig-text)] text-lg leading-relaxed mb-6">
            At InfraGlide, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our application.
          </p>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-4">
            We collect information that you provide directly to us when you register for an account, create or modify your profile, connect your cloud provider accounts, or communicate with us. This may include:
          </p>
          <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-2 mb-8">
            <li>Name and contact information</li>
            <li>Authentication credentials</li>
            <li>Cloud provider metadata (ARNs, IDs) required to render your canvas</li>
            <li>Billing information (processed securely by Stripe)</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-4">
            We use the information we collect to operate, maintain, and provide the features and functionality of the Service. Specifically, we use it to:
          </p>
          <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-2 mb-8">
            <li>Generate accurate infrastructure diagrams and Terraform code</li>
            <li>Detect configuration drift in your connected environments</li>
            <li>Process transactions and send related information</li>
            <li>Respond to your comments, questions, and customer service requests</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">3. Cloud Provider Access</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-8">
            When you connect your AWS, GCP, or Azure accounts, we strictly use cross-account IAM roles with least-privilege read-only permissions (unless you explicitly grant write access for deployment). We do not read or store your application data or database contents, only infrastructure metadata.
          </p>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">4. Data Security</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-8">
            We have implemented industry-standard security measures, including SOC 2 Type II compliance, AES-256 encryption at rest, and TLS 1.3 in transit, to protect the personal information submitted to us.
          </p>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">5. Contact Us</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed">
            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@infraglide.com" className="text-[#8A53D6] hover:underline">privacy@infraglide.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}
