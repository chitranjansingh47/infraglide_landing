import { createFileRoute } from '@tanstack/react-router'
import { InteractiveGrid } from '../components/InteractiveGrid'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
})

function TermsPage() {
  return (
    <div className="relative min-h-screen ig-noise bg-[var(--ig-bg)] overflow-hidden pb-32">
      <InteractiveGrid color="#8A53D6" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,83,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 pt-32 px-6 max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="font-display-family text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Terms of <span className="ig-metallic">Service.</span>
          </h1>
          <p className="text-[var(--ig-muted)] text-lg">Effective Date: May 20, 2026</p>
        </div>

        <div className="ig-card rounded-[2rem] p-8 md:p-12 prose prose-invert max-w-none">
          <p className="text-[var(--ig-text)] text-lg leading-relaxed mb-6">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the InfraGlide website and application (the "Service") operated by InfraGlide Labs ("us", "we", or "our").
          </p>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-8">
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">2. Account Registration</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-8">
            You must provide accurate and complete information when creating an account. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
          </p>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">3. Acceptable Use Policy</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-4">
            You agree not to use the Service to:
          </p>
          <ul className="list-disc pl-6 text-[var(--ig-muted)] space-y-2 mb-8">
            <li>Generate infrastructure for illegal activities, including crypto-mining malware.</li>
            <li>Attempt to bypass or break any security mechanism of the Service.</li>
            <li>Reverse engineer, decompile, or disassemble the Service.</li>
            <li>Use the Service to transmit any viruses, worms, or malicious code.</li>
          </ul>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">4. Intellectual Property</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-8">
            The Service and its original content, features, and functionality are and will remain the exclusive property of InfraGlide Labs and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of InfraGlide Labs.
          </p>

          <h2 className="text-2xl font-bold text-[var(--ig-text)] mt-10 mb-4">5. Limitation of Liability</h2>
          <p className="text-[var(--ig-muted)] leading-relaxed mb-8">
            In no event shall InfraGlide Labs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </div>
      </div>
    </div>
  )
}
