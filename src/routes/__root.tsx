import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

// JSON-LD Structured Data for Organization + SoftwareApplication
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "InfraGlide",
  "url": "https://infraglide.com",
  "logo": "https://infraglide.com/favicon.png",
  "description": "InfraGlide is a multi-cloud infrastructure design and deployment platform powered by AI. Visualize, design, and deploy AWS, Azure, and GCP infrastructure on one collaborative canvas with Terraform-native output.",
  "email": "connect@infraglide.com",
  "sameAs": [
    "https://twitter.com/infraglide",
    "https://linkedin.com/company/infraglide",
    "https://github.com/infraglide"
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "First Floor, E-49/5, Okhla Industrial Area",
      "addressLocality": "Delhi",
      "postalCode": "110020",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "First Floor, CYB-5, Cyber Park, 102, H.I.A",
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "postalCode": "342003",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "BLOCK-L, Embassy TechVillage, Outer Ring Rd, Devarabisanahalli, Bellandur",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560103",
      "addressCountry": "IN"
    }
  ]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "InfraGlide",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free demo available"
  },
  "description": "Visual cloud infrastructure platform for AWS, Azure, and GCP. Design with drag-and-drop, deploy with Terraform, detect drift in real-time, and get AI-powered reviews from Jane.",
  "url": "https://infraglide.com",
  "screenshot": "https://infraglide.com/og-image.png",
  "featureList": [
    "Visual drag-and-drop infrastructure designer",
    "Terraform-native IaC generation",
    "Multi-cloud support (AWS, Azure, GCP)",
    "Real-time drift detection",
    "AI-powered infrastructure reviews with Jane",
    "Pipeline automation and CI/CD",
    "RBAC and governance",
    "Cost optimization insights",
    "SOC 2 Type II compliant"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "InfraGlide",
  "url": "https://infraglide.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://infraglide.com/docs?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // === Primary SEO ===
      { title: "InfraGlide — Visual Cloud Infrastructure Platform | AWS, Azure & GCP" },
      { name: "description", content: "InfraGlide is the AI-powered visual cloud infrastructure platform. Design, deploy, and observe AWS, Azure, and GCP on one collaborative canvas with Terraform-native IaC, real-time drift detection, and Jane AI copilot." },
      { name: "keywords", content: "cloud infrastructure platform, visual infrastructure designer, Terraform GUI, AWS infrastructure tool, Azure infrastructure management, GCP infrastructure, cloud IaC tool, drift detection, multi-cloud platform, infrastructure as code, DevOps automation, cloud cost optimization, RBAC cloud governance, InfraGlide, Jane AI" },
      { name: "author", content: "InfraGlide" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#8A53D6" },
      { name: "application-name", content: "InfraGlide" },

      // === Canonical ===
      // Note: per-page canonical is set in individual route heads

      // === Open Graph ===
      { property: "og:site_name", content: "InfraGlide" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://infraglide.com" },
      { property: "og:title", content: "InfraGlide — Visual Cloud Infrastructure Platform | AWS, Azure & GCP" },
      { property: "og:description", content: "Design, deploy, and observe cloud infrastructure on one cinematic visual canvas. Terraform-native, AI-powered drift detection, and Jane AI copilot — for AWS, Azure, and GCP." },
      { property: "og:image", content: "https://infraglide.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "InfraGlide — Visual Cloud Infrastructure Platform" },
      { property: "og:locale", content: "en_US" },

      // === Twitter Card ===
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@infraglide" },
      { name: "twitter:creator", content: "@infraglide" },
      { name: "twitter:title", content: "InfraGlide — Visual Cloud Infrastructure Platform | AWS, Azure & GCP" },
      { name: "twitter:description", content: "Design, deploy, and observe cloud infrastructure on one visual canvas. Terraform-native IaC, real-time drift detection, and Jane AI copilot." },
      { name: "twitter:image", content: "https://infraglide.com/og-image.png" },
      { name: "twitter:image:alt", content: "InfraGlide — Visual Cloud Infrastructure Platform" },

      // === Mobile & PWA ===
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "InfraGlide" },
      { name: "mobile-web-app-capable", content: "yes" },

      // === Verification (add your actual keys) ===
      // { name: "google-site-verification", content: "YOUR_GOOGLE_VERIFICATION_CODE" },
      // { name: "msvalidate.01", content: "YOUR_BING_VERIFICATION_CODE" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "canonical", href: "https://infraglide.com" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://api.emailjs.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(softwareSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
