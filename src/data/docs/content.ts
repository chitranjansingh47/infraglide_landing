export interface DocPage {
  id: string;
  section: string;
  title: string;
  badge?: string;
  intro: string;
  content: DocBlock[];
}

export type DocBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'note'; text: string }
  | { type: 'warning'; text: string }
  | { type: 'success'; text: string }
  | { type: 'code'; lang: string; lines: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'steps'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] };

export const DOCS: DocPage[] = [
  {
    "id": "welcome",
    "section": "Getting Started",
    "title": "InfraGlide User Guides",
    "intro": "Welcome to the InfraGlide user documentation. These guides explain how to use each part of the product — step by step, in plain language. If you are new to InfraGlide, start with Getting Started.",
    "content": [
      {
        "type": "h2",
        "text": "Company landing page"
      },
      {
        "type": "p",
        "text": "Marketing and legal content for infraglide.com:"
      },
      {
        "type": "table",
        "headers": [
          "Page",
          "Link"
        ],
        "rows": [
          [
            "The Problem",
            "landing/the-problem.md"
          ],
          [
            "Our Mission",
            "landing/our-mission.md"
          ],
          [
            "Our Vision",
            "landing/our-vision.md"
          ],
          [
            "Privacy Policy",
            "landing/privacy-policy.md"
          ],
          [
            "Terms of Service",
            "landing/terms-of-service.md"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Feature user guides (complete manual)"
      },
      {
        "type": "p",
        "text": "Every InfraGlide feature has its own step-by-step manual in guides/ — 42 feature guides covering Pipeline Designer, deploy, drift, Jane, RBAC, Hub, credentials, and more."
      },
      {
        "type": "p",
        "text": "Quick links: Pipeline Designer · Cloud Credentials · Drift Detection · Jane AI Assistant · Full index"
      },
      {
        "type": "h2",
        "text": "Category overviews"
      },
      {
        "type": "table",
        "headers": [
          "Guide",
          "What you'll learn"
        ],
        "rows": [
          [
            "Getting Started",
            "Sign in, set up your organization, add credentials, and deploy your first pipeline"
          ],
          [
            "Visual Canvas",
            "Design infrastructure on the canvas — add resources, connect them, and configure settings"
          ],
          [
            "Jane",
            "Use the AI assistant to build, review, troubleshoot, and optimize your infrastructure"
          ],
          [
            "Templates & Projects",
            "Organize work with workspaces and sandboxes, and start from ready-made templates"
          ],
          [
            "Pipelines & Automation",
            "Deploy, schedule, and automate pipeline runs"
          ],
          [
            "Cloud Sync & Drift",
            "Keep inventory up to date and detect when cloud resources change outside InfraGlide"
          ],
          [
            "Cost & Compliance",
            "Estimate costs, enforce policies, and run architecture reviews"
          ],
          [
            "Security & Access",
            "Manage users, roles, credentials, and security scans"
          ],
          [
            "Monitoring",
            "Track deployments, read logs, and review audit history"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Words you'll see in InfraGlide"
      },
      {
        "type": "table",
        "headers": [
          "Term",
          "What it means"
        ],
        "rows": [
          [
            "Workspace",
            "A team or business area inside your organization (for example, \"Platform Engineering\")"
          ],
          [
            "Sandbox",
            "An environment inside a workspace (for example, \"dev\", \"staging\", or \"prod\")"
          ],
          [
            "Pipeline",
            "Your saved infrastructure design on the canvas"
          ],
          [
            "Deployment",
            "One run of plan, apply, or destroy against a pipeline"
          ],
          [
            "Version",
            "A saved snapshot of a pipeline; each version tracks its own deployed resources"
          ],
          [
            "Credential",
            "Your cloud account login stored securely for deployments"
          ],
          [
            "Drift",
            "When live cloud resources no longer match what your pipeline expects"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Getting help in the app"
      },
      {
        "type": "list",
        "items": [
          "Jane — Press ⌘J (Mac) or Ctrl+J (Windows/Linux), or click Ask Jane in the sidebar.",
          "Your administrator — For access, invitations, plan upgrades, and org-wide settings.",
          "Onboarding wizard — Organization admins are guided through initial setup when they first sign in."
        ]
      }
    ]
  },
  {
    "id": "getting-started",
    "section": "Getting Started",
    "title": "Getting Started",
    "intro": "This guide walks you through your first session in InfraGlide: signing in, setting up your organization (if you are an admin), and deploying your first pipeline.",
    "content": [
      {
        "type": "h2",
        "text": "Before you begin"
      },
      {
        "type": "p",
        "text": "You will need:"
      },
      {
        "type": "list",
        "items": [
          "An InfraGlide account created by your organization administrator (you cannot sign up on your own)",
          "Access to at least one workspace and sandbox",
          "Cloud account details if you will add credentials (AWS, GCP, or Azure)"
        ]
      },
      {
        "type": "h2",
        "text": "How to sign in"
      },
      {
        "type": "steps",
        "items": [
          "Open your organization's InfraGlide URL in your browser.",
          "On the Login page, choose your sign-in method:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Sign in with Auth0 — most organizations use this for SSO",
          "Sign in with Google — if your org allows Google login"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Complete authentication on the provider's page.",
          "You are returned to InfraGlide and land on the Dashboard."
        ]
      },
      {
        "type": "h3",
        "text": "If you see \"No Access\""
      },
      {
        "type": "p",
        "text": "You signed in successfully, but no workspace has been assigned to you yet."
      },
      {
        "type": "p",
        "text": "What to do: Contact your organization administrator and ask them to send you an invitation with access to the correct workspace and role."
      },
      {
        "type": "h2",
        "text": "How to complete organization setup (admins only)"
      },
      {
        "type": "p",
        "text": "If you are an organization administrator and this is a new organization, InfraGlide opens the Onboarding Wizard automatically."
      },
      {
        "type": "p",
        "text": "Work through each step in order:"
      },
      {
        "type": "h3",
        "text": "Step 1 — Welcome"
      },
      {
        "type": "p",
        "text": "Read the overview and click Continue."
      },
      {
        "type": "h3",
        "text": "Step 2 — Workspaces"
      },
      {
        "type": "p",
        "text": "Create at least one workspace. A workspace is a top-level area for a team or unit."
      },
      {
        "type": "steps",
        "items": [
          "Click Add workspace.",
          "Enter a name (for example, `Platform Engineering`).",
          "Save and continue."
        ]
      },
      {
        "type": "h3",
        "text": "Step 3 — Sandboxes"
      },
      {
        "type": "p",
        "text": "Create at least one sandbox inside each workspace. A sandbox is an environment such as dev, staging, or production."
      },
      {
        "type": "steps",
        "items": [
          "Select a workspace.",
          "Click Add sandbox.",
          "Enter a name (for example, `dev` or `staging`).",
          "Repeat for each environment you need."
        ]
      },
      {
        "type": "h3",
        "text": "Step 4 — Credentials"
      },
      {
        "type": "p",
        "text": "Add cloud account access your team will use to deploy."
      },
      {
        "type": "steps",
        "items": [
          "Click Add credential.",
          "Choose AWS, GCP, or Azure.",
          "Fill in the fields for your provider (access keys, service account JSON, etc.).",
          "Save the credential."
        ]
      },
      {
        "type": "h3",
        "text": "Step 5 — Cloud APIs"
      },
      {
        "type": "p",
        "text": "Verify that your credentials can reach the cloud APIs InfraGlide needs."
      },
      {
        "type": "steps",
        "items": [
          "Select a credential.",
          "Click Verify.",
          "Fix any permission errors before continuing."
        ]
      },
      {
        "type": "note",
        "text": "Use Ask Jane on this step if you are unsure which permissions are required."
      },
      {
        "type": "h3",
        "text": "Step 6 — Storage"
      },
      {
        "type": "p",
        "text": "Configure where Terraform artifacts and state files are stored. Follow the on-screen instructions for your setup."
      },
      {
        "type": "h3",
        "text": "Step 7 — Git"
      },
      {
        "type": "p",
        "text": "Connect Git if your organization uses it for Hub sync or version control. You can skip or complete this later if not needed now."
      },
      {
        "type": "h3",
        "text": "Step 8 — Finish"
      },
      {
        "type": "p",
        "text": "Review your setup and click Complete onboarding."
      },
      {
        "type": "p",
        "text": "To change a step later, open Onboarding from the menu and edit the step you need."
      },
      {
        "type": "h2",
        "text": "How to choose your workspace and sandbox"
      },
      {
        "type": "p",
        "text": "The header bar at the top of the app shows your current context."
      },
      {
        "type": "steps",
        "items": [
          "Click the Workspace dropdown → select your workspace.",
          "Click the Sandbox dropdown → select your sandbox."
        ]
      },
      {
        "type": "p",
        "text": "Most pages — pipelines, deployments, drift, resources — show data for the workspace and sandbox you have selected. Always check these before creating or deploying a pipeline."
      },
      {
        "type": "h2",
        "text": "How to add a cloud credential"
      },
      {
        "type": "steps",
        "items": [
          "Open Credentials from the sidebar (under Administration).",
          "Click Add credential.",
          "Choose your cloud provider.",
          "Enter the required details:"
        ]
      },
      {
        "type": "p",
        "text": "AWS: Access key ID, secret access key, optional session token"
      },
      {
        "type": "p",
        "text": "GCP: Service account JSON"
      },
      {
        "type": "p",
        "text": "Azure: Client ID, client secret, tenant ID, subscription ID"
      },
      {
        "type": "steps",
        "items": [
          "Click Save.",
          "Click Test to confirm the credential works."
        ]
      },
      {
        "type": "warning",
        "text": "Use separate credentials for dev and production sandboxes when possible."
      },
      {
        "type": "h2",
        "text": "How to create your first pipeline"
      },
      {
        "type": "h3",
        "text": "From scratch"
      },
      {
        "type": "steps",
        "items": [
          "Select the correct workspace and sandbox in the header.",
          "Go to Dashboard or My Pipelines.",
          "Click New pipeline.",
          "Enter a name and confirm.",
          "You are taken to the Pipeline Designer (full-screen canvas)."
        ]
      },
      {
        "type": "h3",
        "text": "From a template"
      },
      {
        "type": "steps",
        "items": [
          "Go to Templates in the sidebar.",
          "Browse templates for AWS, GCP, or Azure.",
          "Click Use template on the one you want.",
          "Choose the target sandbox and confirm.",
          "InfraGlide opens the designer with components already placed."
        ]
      },
      {
        "type": "h2",
        "text": "How to design your pipeline (quick start)"
      },
      {
        "type": "steps",
        "items": [
          "Drag resources from the Component Library on the left onto the canvas.",
          "Connect related resources by drawing lines between them (network before compute, and so on).",
          "Click a resource to open the Properties panel on the right and fill in its settings.",
          "Press Save (or `Ctrl+S` / `Cmd+S`) before you deploy."
        ]
      },
      {
        "type": "p",
        "text": "Only saved changes are included when you deploy."
      },
      {
        "type": "p",
        "text": "For full designer instructions, see Visual Canvas."
      },
      {
        "type": "h2",
        "text": "How to deploy your pipeline"
      },
      {
        "type": "steps",
        "items": [
          "In the Pipeline Designer, click Deploy.",
          "Select your credential and region.",
          "Choose an action:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Plan — preview changes without modifying anything in the cloud",
          "Apply — create or update resources",
          "Destroy — remove all resources managed by this pipeline (requires confirmation)"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Start (or equivalent confirm button).",
          "Watch the console at the bottom of the designer for progress.",
          "Wait until the status shows complete — you can navigate away; InfraGlide notifies you when done."
        ]
      },
      {
        "type": "h3",
        "text": "What the status means"
      },
      {
        "type": "table",
        "headers": [
          "Status",
          "What happened",
          "What to do next"
        ],
        "rows": [
          [
            "Planned",
            "Preview finished; nothing changed in the cloud",
            "Review the plan, then run Apply if it looks correct"
          ],
          [
            "Success",
            "Everything was created or updated",
            "Open Deployed Resources to see what was created"
          ],
          [
            "Partial success",
            "Some resources were created, then an error occurred",
            "Read the logs, fix the issue, and apply again"
          ],
          [
            "Failed",
            "Nothing was successfully applied",
            "Fix configuration and try again"
          ],
          [
            "Destroyed",
            "Resources were removed",
            "Confirm in your cloud console if needed"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Best practice: Always run Plan first on production sandboxes."
      },
      {
        "type": "h2",
        "text": "How to confirm your deployment worked"
      },
      {
        "type": "p",
        "text": "After a successful apply:"
      },
      {
        "type": "steps",
        "items": [
          "Deployed Resources — See live resources InfraGlide knows about.",
          "Observability — Open deployment logs and overview stats.",
          "Drift Detection — Run a check to confirm live resources match your pipeline."
        ]
      },
      {
        "type": "h2",
        "text": "Common tasks in your first week"
      },
      {
        "type": "table",
        "headers": [
          "I want to…",
          "Go to…"
        ],
        "rows": [
          [
            "Invite a teammate",
            "Manage Users"
          ],
          [
            "Give someone edit access",
            "RBAC Management → assign a role"
          ],
          [
            "Deploy on a schedule",
            "Scheduler"
          ],
          [
            "Run several pipelines in order",
            "Topology"
          ],
          [
            "Ask AI for help",
            "Ask Jane (⌘J / Ctrl+J)"
          ],
          [
            "Import existing Terraform",
            "Pipeline Designer → Import"
          ],
          [
            "Check rules before deploy",
            "Compliance"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "I signed in but see \"No Access\" Ask your administrator to invite you and assign a workspace."
      },
      {
        "type": "p",
        "text": "Credential test fails Check that keys are valid, not expired, and have enough permissions for the services in your pipeline."
      },
      {
        "type": "p",
        "text": "Deploy stays on \"Running\" for a long time Large pipelines can take many minutes. Check Observability → Deployment Logs, or ask Jane: *\"Why did my deployment fail?\"*"
      },
      {
        "type": "p",
        "text": "Onboarding will not complete Ensure you have at least one workspace, one sandbox, and one credential that passes Cloud API verification."
      },
      {
        "type": "h2",
        "text": "Where to go next"
      },
      {
        "type": "list",
        "items": [
          "Visual Canvas — Learn the designer in detail",
          "Jane — Get help from the AI assistant",
          "Templates & Projects — Organize workspaces and use templates",
          "Security & Access — Invite users and manage roles"
        ]
      }
    ]
  },
  {
    "id": "authentication",
    "section": "Getting Started",
    "title": "Authentication",
    "intro": "This guide explains how to sign in to InfraGlide, what happens after Auth0 or Google login, why invitations are required, and what to do on the No Access page.",
    "content": [
      {
        "type": "p",
        "text": "Login URL: `/login`"
      },
      {
        "type": "h2",
        "text": "How sign-in works"
      },
      {
        "type": "p",
        "text": "InfraGlide does not offer public self-registration. Your organization administrator must invite you before you can use the product."
      },
      {
        "type": "p",
        "text": "After invitation:"
      },
      {
        "type": "steps",
        "items": [
          "You receive an email (or Auth0 organization invitation).",
          "You open the InfraGlide login page.",
          "You authenticate with your organization's configured provider.",
          "InfraGlide creates or links your user record and applies role assignments.",
          "You land on the Dashboard — or No Access if no workspace was assigned."
        ]
      },
      {
        "type": "h2",
        "text": "How to sign in (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Open your organization's InfraGlide URL (for example, `https://app.infraglide.com/login`).",
          "On the Sign in to your account page, choose your method:"
        ]
      },
      {
        "type": "h3",
        "text": "Auth0 (primary — most organizations)"
      },
      {
        "type": "steps",
        "items": [
          "Click Continue with Auth0 (or Continue with Okta SSO if your org uses Okta via Auth0).",
          "You are redirected to Auth0 Universal Login.",
          "Enter your company credentials (or complete SSO with your identity provider).",
          "Auth0 redirects back to InfraGlide (callback).",
          "InfraGlide validates the token, loads your organization membership, and opens the app."
        ]
      },
      {
        "type": "p",
        "text": "Invitation flow: If you arrived from an Auth0 organization invitation link, the page shows which organization you are joining. Click through Auth0 to accept the invitation as part of login."
      },
      {
        "type": "h3",
        "text": "Google (development / legacy)"
      },
      {
        "type": "p",
        "text": "On some environments, Google sign-in appears under Other sign-in options (collapsible section). This is typically for development or organizations that explicitly enable it — not the default production path."
      },
      {
        "type": "steps",
        "items": [
          "Expand Other sign-in options.",
          "Open the Google tab.",
          "Complete Google OAuth sign-in."
        ]
      },
      {
        "type": "h3",
        "text": "Email / LDAP (development only)"
      },
      {
        "type": "p",
        "text": "Local email/password and LDAP tabs may appear when `showLocalPasswordAuth` is enabled (dev/test environments). Production organizations normally use Auth0 only."
      },
      {
        "type": "h2",
        "text": "The Auth0 callback"
      },
      {
        "type": "p",
        "text": "After successful Auth0 login:"
      },
      {
        "type": "steps",
        "items": [
          "Auth0 redirects to InfraGlide's callback route with an authorization result.",
          "The server validates the Auth0 token and resolves (or creates) your user.",
          "A session is established (cookie-based).",
          "You are redirected to Dashboard or No Access."
        ]
      },
      {
        "type": "p",
        "text": "You do not need to bookmark the callback URL — Auth0 handles the redirect automatically."
      },
      {
        "type": "p",
        "text": "If callback fails, try signing in again. Clear cookies or use a private window if you switched Auth0 accounts."
      },
      {
        "type": "h2",
        "text": "Invitations are required"
      },
      {
        "type": "table",
        "headers": [
          "Rule",
          "Detail"
        ],
        "rows": [
          [
            "No open signup",
            "You cannot create an account without an administrator invitation"
          ],
          [
            "Email must match",
            "Invite is tied to the email your admin entered"
          ],
          [
            "Accept via login",
            "First successful Auth0 login after invite activates access"
          ],
          [
            "Seat limits",
            "Organization plan may block new invites when seats are full"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Administrators send invitations from Manage Users — see Manage Users."
      },
      {
        "type": "p",
        "text": "Enterprise organizations may use Auth0 Organizations with Okta — the invitation email routes through that flow."
      },
      {
        "type": "h2",
        "text": "No Access page"
      },
      {
        "type": "p",
        "text": "If you sign in successfully but have no workspace or sandbox assigned, InfraGlide shows Access Restricted (`/no-access`):"
      },
      {
        "type": "list",
        "items": [
          "Title: Access Restricted",
          "Message: You do not have access to any workspaces or sandboxes"
        ]
      },
      {
        "type": "h3",
        "text": "What to do"
      },
      {
        "type": "steps",
        "items": [
          "Do not share someone else's account.",
          "Contact your organization administrator.",
          "Ask them to:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Send a new invitation with the correct email, or",
          "Assign a role at organization, workspace, or sandbox scope"
        ]
      },
      {
        "type": "steps",
        "items": [
          "After they fix access, sign out and sign in again, or refresh the app."
        ]
      },
      {
        "type": "h3",
        "text": "Sign out from No Access"
      },
      {
        "type": "p",
        "text": "Click Logout on the No Access page to return to the login screen."
      },
      {
        "type": "h2",
        "text": "Sign out"
      },
      {
        "type": "steps",
        "items": [
          "Open the user menu (top-right).",
          "Click Logout."
        ]
      },
      {
        "type": "p",
        "text": "For Auth0 sessions, logout may also clear the Auth0 session depending on configuration — you may need to sign in again fully on next visit."
      },
      {
        "type": "h2",
        "text": "Session and security habits"
      },
      {
        "type": "steps",
        "items": [
          "Use your own account — do not share credentials.",
          "Sign out on shared computers.",
          "Do not paste passwords into Jane or support tickets.",
          "Report suspicious login to your administrator.",
          "Expired invitations — ask admin to resend from Manage Users."
        ]
      },
      {
        "type": "h2",
        "text": "Authentication by plan"
      },
      {
        "type": "table",
        "headers": [
          "Feature",
          "Plans",
          "Notes"
        ],
        "rows": [
          [
            "Auth0 / SSO",
            "All (SSO config Enterprise)",
            "Primary production method"
          ],
          [
            "Google (legacy tab)",
            "Dev / selected orgs",
            "Under \"Other sign-in options\""
          ],
          [
            "LDAP",
            "Enterprise (`enable_ldap`)",
            "Corporate directory login"
          ],
          [
            "Local email/password",
            "Dev only",
            "Not for production"
          ]
        ]
      },
      {
        "type": "p",
        "text": "See Subscription Tiers."
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Login redirect loop Clear site cookies. Ensure you use the correct Auth0 organization. Try incognito mode."
      },
      {
        "type": "p",
        "text": "\"Invalid response from server\" after login Contact support — session or Auth0 configuration issue."
      },
      {
        "type": "p",
        "text": "Signed in but No Access No role assignment exists. Administrator must invite or grant access."
      },
      {
        "type": "p",
        "text": "Invitation email link expired Ask admin to cancel old invite and send a new one."
      },
      {
        "type": "p",
        "text": "Wrong organization after login You may belong to multiple Auth0 orgs — use the invitation link for the correct tenant."
      },
      {
        "type": "p",
        "text": "Google tab not visible Your production org likely uses Auth0 only. Google appears in dev or legacy auth mode."
      },
      {
        "type": "p",
        "text": "LDAP login failed Verify username format with IT. LDAP requires Enterprise with `enable_ldap`."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Getting Started — First session after access is granted",
          "Manage Users — How administrators invite you",
          "Multi-Tenancy — Workspaces you receive access to",
          "RBAC Management — Roles assigned after login",
          "Audit Logging — Login events in audit trail"
        ]
      }
    ]
  },
  {
    "id": "org-onboarding",
    "section": "Getting Started",
    "title": "Org Onboarding",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Org Onboarding is a guided eight-step wizard for new InfraGlide organizations. Org admins configure Workspaces, Sandboxes, cloud Credentials, API verification, artifact Storage, Git sync, and complete setup before the rest of the app unlocks."
      },
      {
        "type": "p",
        "text": "Until onboarding completes, OnboardingGate redirects org admins to `/onboarding` when they try to use the main application."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "Detail"
        ],
        "rows": [
          [
            "Route",
            "`/onboarding`"
          ],
          [
            "Automatic redirect",
            "Org admins are sent here on login until `onboardingCompleted` is set"
          ],
          [
            "After completion",
            "Settings or onboarding review page → Edit configuration (`/onboarding?mode=edit`)"
          ],
          [
            "Partial re-run",
            "`/onboarding?mode=partial&step=N` for specific steps (e.g. Storage, Git)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The onboarding wizard runs full-screen without the main sidebar."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Organization admins only (`isOrgAdmin`). Non-admins who visit `/onboarding` are redirected to Dashboard."
      },
      {
        "type": "p",
        "text": "Regular users join an already-configured org and do not run this wizard."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Confirm you are an org admin for your InfraGlide organization.",
          "Have cloud account details ready for the Credentials step.",
          "Plan your Workspace (top-level team/area) and Sandbox (environment) naming convention.",
          "Allow 15–30 minutes for a full first-time pass; you can use Back / Next and resume later — progress is saved per step."
        ]
      },
      {
        "type": "h2",
        "text": "The eight onboarding steps"
      },
      {
        "type": "table",
        "headers": [
          "Step",
          "Title",
          "What you do"
        ],
        "rows": [
          [
            "1",
            "Welcome",
            "Overview and branded welcome message"
          ],
          [
            "2",
            "Workspaces",
            "Create top-level Workspaces (folders)"
          ],
          [
            "3",
            "Sandboxes",
            "Create Sandboxes (projects) under workspaces"
          ],
          [
            "4",
            "Credentials",
            "Add AWS/GCP/Azure credentials (same modal as `/credentials`)"
          ],
          [
            "5",
            "Cloud APIs",
            "Verify required cloud APIs are enabled"
          ],
          [
            "6",
            "Storage",
            "Configure artifact/storage settings for pipelines"
          ],
          [
            "7",
            "Git",
            "Set up Hub Git sync (PAT for sandbox)"
          ],
          [
            "8",
            "Finish",
            "Review and Complete onboarding"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Use the step list on the left (desktop) to jump between completed steps. Jane onboarding help is available on each step."
      },
      {
        "type": "h2",
        "text": "How to complete org onboarding"
      },
      {
        "type": "steps",
        "items": [
          "Sign in as an org admin — you are redirected to `/onboarding` if not finished.",
          "Read Welcome (Step 1) and click Next.",
          "Workspaces (Step 2): create at least one workspace for your team or business unit.",
          "Sandboxes (Step 3): create sandboxes (e.g. `dev`, `staging`) under those workspaces.",
          "Credentials (Step 4): add and Validate cloud credentials for your default sandbox.",
          "Cloud APIs (Step 5): run verification checks; enable any missing APIs in your cloud console as instructed.",
          "Storage (Step 6): configure pipeline artifact storage.",
          "Git (Step 7): connect Git for Hub publishing if used.",
          "Finish (Step 8): click Complete onboarding.",
          "You are redirected to Dashboard; OnboardingGate stops blocking other routes."
        ]
      },
      {
        "type": "h2",
        "text": "How to update configuration after completion"
      },
      {
        "type": "steps",
        "items": [
          "Go to Settings → link to onboarding review, or visit `/onboarding` directly as org admin.",
          "From the completed review page, use Edit configuration or step-specific Configure links.",
          "Approved config updates may require admin approval depending on org policy (`accessMode`)."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Create dev and prod sandboxes early — credentials and pipelines are sandbox-scoped.",
          "Finish Credentials before Cloud APIs verification for meaningful API checks.",
          "Use Jane on each step for contextual help.",
          "Non-admin users can be invited after Step 8 via Manage Users (when available).",
          "Partial mode (`?mode=partial&step=5`) is useful when only Storage or Git changes."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Stuck on onboarding after login — Complete Step 8 Finish, or check org admin status."
      },
      {
        "type": "p",
        "text": "Cannot access Dashboard — Expected for org admins until onboarding completes."
      },
      {
        "type": "p",
        "text": "Non-admin redirected from /onboarding — Only org admins run the wizard."
      },
      {
        "type": "p",
        "text": "Step progress lost — Steps persist server-side; refresh and continue from last saved step."
      },
      {
        "type": "p",
        "text": "Credentials step empty — Create a sandbox in Step 3 first; credentials bind to `projectId`."
      },
      {
        "type": "p",
        "text": "Gate keeps redirecting — Clear cache, confirm `onboardingCompleted` in org state; contact support if stuck."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Cloud Credentials · Credential Testing · Pipeline Designer · Hub"
      }
    ]
  },
  {
    "id": "cloud-credentials",
    "section": "Getting Started",
    "title": "Cloud Credentials",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Cloud Credentials stores encrypted access keys for AWS, GCP, and Azure. Pipelines, deployments, inventory sync, drift checks, and security scans use credentials scoped to a Sandbox (project). Each credential belongs to one sandbox via `projectId` — switching sandboxes in the header changes which credentials you see."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "Detail"
        ],
        "rows": [
          [
            "Route",
            "`/credentials`"
          ],
          [
            "Sidebar",
            "Administration → Credentials"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with the Credentials module and permission to create or edit credentials (typically Editor or Admin on the sandbox). Viewers may see the list depending on RBAC. Org-wide credential listing during onboarding uses a separate admin flow."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select the target Workspace and Sandbox in the header — credentials are scoped to the selected sandbox.",
          "Gather provider-specific secrets (see below).",
          "Ensure cloud IAM permissions are sufficient for deploy, list, and scan operations your team needs.",
          "Plan to Validate credentials before saving — see Credential Testing."
        ]
      },
      {
        "type": "h2",
        "text": "How to add a cloud credential"
      },
      {
        "type": "steps",
        "items": [
          "Go to Credentials in the sidebar.",
          "Confirm the correct Sandbox is selected in the header (the page shows credentials for that sandbox only).",
          "Click Add Credential.",
          "In the Add New Credential modal, enter a Name (e.g. `Production · AWS account`).",
          "Select Provider: AWS, Google Cloud Platform, or Microsoft Azure.",
          "Fill provider fields:"
        ]
      },
      {
        "type": "p",
        "text": "AWS"
      },
      {
        "type": "list",
        "items": [
          "IAM User (optional label for your reference)",
          "Access Key and Secret Key (required)",
          "InfraGlide stores these as encrypted JSON internally."
        ]
      },
      {
        "type": "p",
        "text": "GCP"
      },
      {
        "type": "list",
        "items": [
          "Manual: Service account email + private key, or",
          "JSON file: drag-and-drop or upload a service account JSON file",
          "Toggle between manual entry and JSON upload as needed."
        ]
      },
      {
        "type": "p",
        "text": "Azure"
      },
      {
        "type": "list",
        "items": [
          "Client ID, Client Secret, Tenant ID, Subscription ID (all required)"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Validate to test connectivity (required before Create is enabled).",
          "Click Create when validation succeeds.",
          "The credential appears in the table for the current sandbox."
        ]
      },
      {
        "type": "h2",
        "text": "How to edit or delete a credential"
      },
      {
        "type": "steps",
        "items": [
          "On Credentials, find the row in the current sandbox list.",
          "Use Edit to update name or secrets (re-validate after changing secrets).",
          "Use Delete to remove — deletion may fail if a pipeline still references the credential."
        ]
      },
      {
        "type": "p",
        "text": "Use Search and Provider filter when the list is long."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "One credential set per sandbox/environment — avoid sharing production keys across sandboxes.",
          "Use descriptive names including provider and environment.",
          "Always Validate before Create — failed tests block submission.",
          "After switching sandboxes in the header, re-open Credentials — the list refreshes for the new `projectId`.",
          "During org setup, add credentials in Org Onboarding step 4 as well."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Empty list / “Select a sandbox first” — Choose a Workspace and Sandbox in the header."
      },
      {
        "type": "p",
        "text": "Add Credential disabled — No sandbox selected, or insufficient RBAC on Credentials module."
      },
      {
        "type": "p",
        "text": "Create disabled after filling fields — Run Validate successfully first."
      },
      {
        "type": "p",
        "text": "Credential in use — cannot delete — Remove or reassign the credential from pipelines first."
      },
      {
        "type": "p",
        "text": "Deploy fails with auth errors — Re-validate credential; check IAM/policy in the cloud console."
      },
      {
        "type": "p",
        "text": "Wrong credentials showing — Wrong sandbox selected in header."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Credential Testing · Org Onboarding · Pipeline Deployment · Deployed Resources"
      }
    ]
  },
  {
    "id": "settings",
    "section": "Getting Started",
    "title": "Settings",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Settings is your personal control center for InfraGlide — profile, appearance, cloud defaults, notifications, security preferences, and Jane AI options. Organization administrators also see an Organization setup card that links to onboarding."
      },
      {
        "type": "p",
        "text": "Route: `/settings`"
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Anyone signed in with access to the Settings module."
      },
      {
        "type": "list",
        "items": [
          "All users — profile, appearance, personal cloud defaults, data, security, AI, and notifications tabs.",
          "Organization admins — additionally see the Organization setup card and (on the Cloud defaults tab) Organization cloud providers policy controls."
        ]
      },
      {
        "type": "h2",
        "text": "How to open Settings"
      },
      {
        "type": "steps",
        "items": [
          "Sign in to InfraGlide.",
          "Click Settings in the sidebar (Platform section)."
        ]
      },
      {
        "type": "h2",
        "text": "Organization setup (org admins only)"
      },
      {
        "type": "p",
        "text": "At the top of the page, org admins see an Organization setup card with status badges:"
      },
      {
        "type": "table",
        "headers": [
          "Badge",
          "Meaning"
        ],
        "rows": [
          [
            "Setup required",
            "Onboarding is not complete"
          ],
          [
            "Complete",
            "Onboarding finished"
          ],
          [
            "Update pending approval",
            "A configuration change awaits InfraGlide support"
          ],
          [
            "Update approved — apply changes",
            "Approved update ready to apply"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Click Continue setup or Open organization setup → navigates to `/onboarding`."
      },
      {
        "type": "p",
        "text": "See Org Onboarding for the full onboarding flow."
      },
      {
        "type": "h2",
        "text": "User preference tabs"
      },
      {
        "type": "p",
        "text": "Settings uses tabs across the page. Each tab has its own Save action unless noted."
      },
      {
        "type": "h3",
        "text": "Profile"
      },
      {
        "type": "p",
        "text": "Update how your name appears across InfraGlide:"
      },
      {
        "type": "list",
        "items": [
          "Email — read-only (your sign-in address)",
          "Display name — required; shown in collaboration presence and audit trails",
          "First name / Last name — optional"
        ]
      },
      {
        "type": "p",
        "text": "Click Save changes after editing."
      },
      {
        "type": "h3",
        "text": "Appearance"
      },
      {
        "type": "p",
        "text": "Choose Color mode:"
      },
      {
        "type": "table",
        "headers": [
          "Option",
          "Behavior"
        ],
        "rows": [
          [
            "Light",
            "Light theme always"
          ],
          [
            "Dark",
            "Dark theme always"
          ],
          [
            "System",
            "Follows your OS light/dark setting"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Appearance saves immediately when you change the dropdown — no separate Save button."
      },
      {
        "type": "h3",
        "text": "Cloud defaults"
      },
      {
        "type": "p",
        "text": "Two sections may appear:"
      },
      {
        "type": "p",
        "text": "Organization cloud providers (org admins only)"
      },
      {
        "type": "p",
        "text": "Allow or block AWS, GCP, and Azure for everyone in the organization. Blocked providers cannot be used when creating pipelines or running deployments."
      },
      {
        "type": "p",
        "text": "Click Save organization policy after toggling providers."
      },
      {
        "type": "p",
        "text": "Personal cloud defaults"
      },
      {
        "type": "p",
        "text": "Set your preferred Default provider and Default region for new pipelines. Only providers allowed by your organization appear in the list."
      },
      {
        "type": "p",
        "text": "Click Save changes after editing."
      },
      {
        "type": "p",
        "text": "See also Cloud Credentials."
      },
      {
        "type": "h3",
        "text": "Data"
      },
      {
        "type": "p",
        "text": "Control deployment log retention and export behavior:"
      },
      {
        "type": "list",
        "items": [
          "Retain deployment logs — 7 days, 30 days, 90 days, or 1 year",
          "Export summary on destroy — prompt to download a deployment summary when you destroy a pipeline"
        ]
      },
      {
        "type": "p",
        "text": "Click Save changes after editing."
      },
      {
        "type": "h3",
        "text": "Security"
      },
      {
        "type": "p",
        "text": "Review sign-in method and account status. Options include:"
      },
      {
        "type": "list",
        "items": [
          "Session reminder — show a reminder before your session expires on shared devices",
          "Manage cloud credentials — shortcut to `/credentials`"
        ]
      },
      {
        "type": "p",
        "text": "Click Save changes after toggling session reminder."
      },
      {
        "type": "h3",
        "text": "AI"
      },
      {
        "type": "p",
        "text": "Configure Jane AI watchdog and proactive infrastructure checks via JaneWatchdogSettings."
      },
      {
        "type": "p",
        "text": "See Jane AI Assistant."
      },
      {
        "type": "h3",
        "text": "Notifications"
      },
      {
        "type": "p",
        "text": "Toggle in-app and email alerts:"
      },
      {
        "type": "table",
        "headers": [
          "Setting",
          "When it fires"
        ],
        "rows": [
          [
            "Deployment alerts",
            "Plan, apply, and destroy outcomes for your pipelines"
          ],
          [
            "Drift alerts",
            "Live infrastructure diverges from your saved pipeline"
          ],
          [
            "Cost alerts",
            "Budget and spend threshold notifications"
          ],
          [
            "Product updates",
            "New features and maintenance windows"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Click Save changes after editing."
      },
      {
        "type": "p",
        "text": "These complement global background updates from Pipeline Status Watcher."
      },
      {
        "type": "h2",
        "text": "Need Help? quick links"
      },
      {
        "type": "p",
        "text": "At the bottom of Settings:"
      },
      {
        "type": "list",
        "items": [
          "Manage Credentials → `/credentials`",
          "Browse Hub → `/hub`",
          "View Resources → `/deployed-resources`"
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Set Cloud defaults once — new pipelines inherit your preferred provider and region.",
          "Org admins should finish Organization setup before inviting the team.",
          "Turn on Deployment alerts and Drift alerts so you are notified even when away from the designer.",
          "Use System appearance if you switch between light and dark environments."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Cloud provider missing from defaults — Your org admin may have blocked that provider. Check the Allowed cloud providers read-only card (non-admins) or ask an admin."
      },
      {
        "type": "p",
        "text": "Cannot save profile — Display name is required and cannot be empty."
      },
      {
        "type": "p",
        "text": "Onboarding card shows wrong status — Reload the page; status refreshes when the window regains focus."
      },
      {
        "type": "p",
        "text": "Settings page not in sidebar — Your role may not include the Settings module. See RBAC Management."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Org Onboarding · Cloud Credentials · Pipeline Designer · Jane AI Assistant"
      }
    ]
  },
  {
    "id": "visual-canvas",
    "section": "Visual Canvas",
    "title": "Visual Canvas",
    "intro": "The Pipeline Designer is where you build infrastructure visually. This guide explains how to add resources, connect them, configure settings, save your work, and prepare for deployment.",
    "content": [
      {
        "type": "p",
        "text": "Where to find it: Open any pipeline from My Pipelines, or create a new one from the Dashboard."
      },
      {
        "type": "h2",
        "text": "Understanding the designer screen"
      },
      {
        "type": "p",
        "text": "When you open a pipeline, the designer fills the screen:"
      },
      {
        "type": "table",
        "headers": [
          "Area",
          "What it does"
        ],
        "rows": [
          [
            "Component Library (left)",
            "List of cloud resources you can add — AWS, GCP, Azure"
          ],
          [
            "Canvas (center)",
            "Where you place and arrange resources"
          ],
          [
            "Properties panel (right)",
            "Settings for whichever resource you have selected"
          ],
          [
            "Toolbar (top)",
            "Save, Deploy, Import, version switcher, and view options"
          ],
          [
            "Console (bottom)",
            "Live output while a deployment is running"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The main sidebar is hidden in the designer so you have more room for your architecture."
      },
      {
        "type": "h2",
        "text": "How to add a resource to the canvas"
      },
      {
        "type": "steps",
        "items": [
          "Open the Component Library on the left.",
          "Click the AWS, GCP, or Azure tab.",
          "Browse or search for the resource you need (for example, EC2, VPC, S3, GKE).",
          "Drag the resource onto the canvas, or click it to place it in the center.",
          "The resource appears as a box with an icon and name."
        ]
      },
      {
        "type": "p",
        "text": "Repeat for every resource you need in your architecture."
      },
      {
        "type": "h2",
        "text": "How to connect resources"
      },
      {
        "type": "p",
        "text": "Connections tell InfraGlide how resources depend on each other — for example, a subnet must belong to a VPC, and an app server must sit in a subnet."
      },
      {
        "type": "steps",
        "items": [
          "Click and drag from one resource's connection point to another.",
          "A line appears between them.",
          "Connect in logical order: network → security → compute → data."
        ]
      },
      {
        "type": "h3",
        "text": "Example: simple web application"
      },
      {
        "type": "code",
        "lang": "text",
        "lines": [
          "VPC  →  Subnet  →  Security Group  →  App Server (EC2)",
          "                                           ↓",
          "                                      Database (RDS)"
        ]
      },
      {
        "type": "p",
        "text": "If you skip connections, deploy may fail or resources may be created in the wrong order. When in doubt, ask Jane: *\"Are my connections correct?\"*"
      },
      {
        "type": "h2",
        "text": "How to configure a resource"
      },
      {
        "type": "steps",
        "items": [
          "Click the resource on the canvas.",
          "The Properties panel opens on the right.",
          "Fill in each field — required fields are marked.",
          "Some fields only appear after you connect other resources (for example, subnet options appear after you connect a VPC).",
          "Fix any validation errors shown in red before saving."
        ]
      },
      {
        "type": "p",
        "text": "Forms vary by resource type. Some use simple fields; others use multi-step wizards for complex services like databases or clusters."
      },
      {
        "type": "h2",
        "text": "How to save your pipeline"
      },
      {
        "type": "p",
        "text": "You must save before deploying. Unsaved changes are not sent to the cloud."
      },
      {
        "type": "list",
        "items": [
          "Click Save in the toolbar, or",
          "Press Ctrl+S (Windows/Linux) or Cmd+S (Mac)"
        ]
      },
      {
        "type": "p",
        "text": "Save often while you work."
      },
      {
        "type": "h2",
        "text": "How to switch between pipeline versions"
      },
      {
        "type": "p",
        "text": "Each pipeline can have multiple versions. A new version is a snapshot you can deploy independently."
      },
      {
        "type": "steps",
        "items": [
          "Click the version switcher in the toolbar.",
          "Select an existing version to open it, or choose Create new version.",
          "When you create a new version, you get a copy to edit without changing the old one."
        ]
      },
      {
        "type": "note",
        "text": "Create a new version before major changes to a pipeline that is already deployed in production."
      },
      {
        "type": "h2",
        "text": "How to view Terraform or deployment output"
      },
      {
        "type": "p",
        "text": "Use the view toggles in the toolbar:"
      },
      {
        "type": "table",
        "headers": [
          "View",
          "When to use it"
        ],
        "rows": [
          [
            "Canvas",
            "Normal editing"
          ],
          [
            "Terraform JSON",
            "See the generated Terraform before or after deploy"
          ],
          [
            "Console",
            "Watch live logs during a deployment"
          ],
          [
            "State Inspector",
            "See what was actually created after a successful apply"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How to import existing Terraform"
      },
      {
        "type": "p",
        "text": "If you already have Terraform and want it on the canvas:"
      },
      {
        "type": "steps",
        "items": [
          "Click Import in the toolbar.",
          "Paste Terraform JSON or upload a `.tf.json` file.",
          "Click Import.",
          "Review the resources placed on the canvas.",
          "Fix any items that could not be mapped automatically.",
          "Save the pipeline."
        ]
      },
      {
        "type": "p",
        "text": "You can ask Jane to help: *\"Review this imported pipeline for missing connections.\"*"
      },
      {
        "type": "h2",
        "text": "How to import existing GCP resources"
      },
      {
        "type": "p",
        "text": "For Google Cloud resources already running in your account:"
      },
      {
        "type": "steps",
        "items": [
          "Click Import in the toolbar.",
          "Choose GCP Registry Import.",
          "Select the resources to pull in.",
          "Review and Save."
        ]
      },
      {
        "type": "h2",
        "text": "How to remove a resource"
      },
      {
        "type": "steps",
        "items": [
          "Click the resource on the canvas to select it.",
          "Press Delete or Backspace, or use the remove option in the context menu.",
          "Save the pipeline."
        ]
      },
      {
        "type": "p",
        "text": "Removing a resource from the canvas does not delete it from the cloud until you run Destroy or apply a change that removes it."
      },
      {
        "type": "h2",
        "text": "How to undo and redo"
      },
      {
        "type": "list",
        "items": [
          "Undo: `Ctrl+Z` / `Cmd+Z`",
          "Redo: `Ctrl+Shift+Z` / `Cmd+Shift+Z`"
        ]
      },
      {
        "type": "h2",
        "text": "How to use Jane on the canvas"
      },
      {
        "type": "p",
        "text": "Jane can help while you design:"
      },
      {
        "type": "table",
        "headers": [
          "Task",
          "What to do"
        ],
        "rows": [
          [
            "Build from description",
            "Open Jane (⌘J / Ctrl+J) and say: *\"Add a VPC with two subnets and an EC2 instance\"*"
          ],
          [
            "Review architecture",
            "*\"Review my pipeline for security issues\"*"
          ],
          [
            "Fill in settings",
            "*\"Configure this RDS instance for a dev environment\"*"
          ],
          [
            "Check before deploy",
            "Look at the risk badge on the toolbar and open Deploy advisor"
          ]
        ]
      },
      {
        "type": "p",
        "text": "See Jane for more examples."
      },
      {
        "type": "h2",
        "text": "How to work with others on the same pipeline"
      },
      {
        "type": "p",
        "text": "When collaboration is enabled:"
      },
      {
        "type": "list",
        "items": [
          "Other editors see the canvas update in real time.",
          "Presence indicators show who is viewing or editing.",
          "Viewers can watch but cannot edit unless they have Editor access or higher."
        ]
      },
      {
        "type": "h2",
        "text": "Validation messages"
      },
      {
        "type": "p",
        "text": "InfraGlide warns you before deploy if something is wrong:"
      },
      {
        "type": "list",
        "items": [
          "Red errors — Must be fixed before deploy (missing required fields, invalid values).",
          "Warnings on the canvas — Missing connections or unusual layout.",
          "Compliance warnings — Policy violations (see Cost & Compliance)."
        ]
      },
      {
        "type": "p",
        "text": "Fix errors in the Properties panel, then save again."
      },
      {
        "type": "h2",
        "text": "Tips for a successful design"
      },
      {
        "type": "steps",
        "items": [
          "Save before every deploy.",
          "Connect resources before filling in all fields — many dropdowns depend on connections.",
          "Run Plan before Apply on production sandboxes.",
          "Use a new version for production releases instead of editing an old deployed version.",
          "Start from a template when one matches your use case — see Templates & Projects."
        ]
      },
      {
        "type": "h2",
        "text": "Keyboard shortcuts"
      },
      {
        "type": "table",
        "headers": [
          "Shortcut",
          "Action"
        ],
        "rows": [
          [
            "`Ctrl+S` / `Cmd+S`",
            "Save"
          ],
          [
            "`Ctrl+Z` / `Cmd+Z`",
            "Undo"
          ],
          [
            "`Ctrl+Shift+Z` / `Cmd+Shift+Z`",
            "Redo"
          ],
          [
            "`Delete` / `Backspace`",
            "Remove selected resource"
          ],
          [
            "`⌘J` / `Ctrl+J`",
            "Open Jane"
          ],
          [
            "`Escape`",
            "Close Jane or deselect"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Getting Started — First pipeline walkthrough",
          "Pipelines & Automation — How to deploy",
          "Jane — AI help on the canvas",
          "Templates & Projects — Start from a template"
        ]
      }
    ]
  },
  {
    "id": "dashboard",
    "section": "Visual Canvas",
    "title": "Dashboard",
    "intro": "This guide explains the Dashboard — your home page after sign-in — including stats, quick actions, pipeline shortcuts, and the InfraGlide AI suggestions section.",
    "content": [
      {
        "type": "p",
        "text": "Where: Dashboard in the sidebar — `/dashboard`."
      },
      {
        "type": "p",
        "text": "Default landing: Most users arrive here after login."
      },
      {
        "type": "h2",
        "text": "What the Dashboard shows"
      },
      {
        "type": "p",
        "text": "The Dashboard gives a snapshot of the current sandbox (the workspace and sandbox selected in the header):"
      },
      {
        "type": "list",
        "items": [
          "Personalized greeting and health status",
          "Key metrics (when a sandbox is selected)",
          "Pipelines to resume",
          "Quick links to common tasks",
          "AI-powered tips based on your setup"
        ]
      },
      {
        "type": "p",
        "text": "If no sandbox is selected, the page prompts you to choose one in the workspace bar above."
      },
      {
        "type": "h2",
        "text": "Before you begin"
      },
      {
        "type": "steps",
        "items": [
          "Sign in (see Authentication).",
          "Select a workspace and sandbox in the header.",
          "Wait a moment for stats and pipeline lists to load."
        ]
      },
      {
        "type": "p",
        "text": "Without a sandbox selected, stat cards and pipeline sections show a placeholder message."
      },
      {
        "type": "h2",
        "text": "Page sections overview"
      },
      {
        "type": "table",
        "headers": [
          "Section",
          "Requires sandbox",
          "Plan note"
        ],
        "rows": [
          [
            "Hero greeting",
            "Optional",
            "Always visible"
          ],
          [
            "Failed pipeline alert",
            "Yes",
            "Always visible"
          ],
          [
            "Stat strip",
            "Yes",
            "Basic stats on all plans"
          ],
          [
            "Continue where you left off",
            "Yes",
            "Always visible"
          ],
          [
            "Quick actions",
            "Partial",
            "Security scan needs deployed resources"
          ],
          [
            "Active pipelines",
            "Yes",
            "Always visible"
          ],
          [
            "Deployment trend",
            "Yes",
            "Pro+ — `enable_dashboard_analytics`"
          ],
          [
            "InfraGlide AI tips",
            "Yes",
            "Always visible"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Hero and status indicator"
      },
      {
        "type": "p",
        "text": "At the top:"
      },
      {
        "type": "steps",
        "items": [
          "Greeting — time-based (\"Good morning\") plus your first name.",
          "Subtitle — sandbox name and alert count if pipelines failed.",
          "Status dot (right side):"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Dot / label",
          "Meaning"
        ],
        "rows": [
          [
            "Gray — \"Select a sandbox for status\"",
            "No sandbox in header"
          ],
          [
            "Gray — \"No pipelines in this sandbox yet\"",
            "Sandbox selected, empty"
          ],
          [
            "Amber — \"Attention recommended\"",
            "One or more pipelines failed"
          ],
          [
            "Gray — \"No successful deploys yet\"",
            "Pipelines exist but none deployed successfully"
          ],
          [
            "Green — \"All systems operational\"",
            "Active successful deploys"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Failed pipeline banner"
      },
      {
        "type": "p",
        "text": "If any pipeline's latest deployment failed, an amber banner appears:"
      },
      {
        "type": "list",
        "items": [
          "Shows count of failed pipelines",
          "View all → links to My Pipelines filtered to failed status"
        ]
      },
      {
        "type": "h2",
        "text": "Stat strip"
      },
      {
        "type": "p",
        "text": "When a sandbox is selected, five metrics appear:"
      },
      {
        "type": "table",
        "headers": [
          "Stat",
          "What it means"
        ],
        "rows": [
          [
            "Active Pipelines",
            "Pipelines with success or running deploy on latest version"
          ],
          [
            "Success Rate",
            "Percentage of successful deployments in this sandbox"
          ],
          [
            "Running Deploys",
            "Deployments currently in progress (+ pending count)"
          ],
          [
            "Regions",
            "Number of distinct regions used; subtitle shows primary region"
          ],
          [
            "Total Services",
            "Count of cloud components across all pipelines"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Success rate may show a warning tone if below 40% with multiple deployments."
      },
      {
        "type": "h2",
        "text": "Continue where you left off"
      },
      {
        "type": "p",
        "text": "Lists up to four recently updated pipelines in the current sandbox."
      },
      {
        "type": "p",
        "text": "For each row:"
      },
      {
        "type": "steps",
        "items": [
          "Status dot — draft, running, success, or failed.",
          "Pipeline name and region.",
          "Action button:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Fix & redeploy — if latest deployment failed",
          "Open canvas — otherwise"
        ]
      },
      {
        "type": "p",
        "text": "Click View all → for the full My Pipelines list."
      },
      {
        "type": "h2",
        "text": "Quick actions"
      },
      {
        "type": "p",
        "text": "Shortcut cards to common tasks:"
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "Destination",
          "Notes"
        ],
        "rows": [
          [
            "New pipeline",
            "Pipeline designer",
            "Start from scratch"
          ],
          [
            "Import Terraform",
            "Pipeline designer",
            "Visualize existing `.tf`"
          ],
          [
            "Connect GCP project",
            "Credentials",
            "Add service account"
          ],
          [
            "Security scan",
            "Security page",
            "Requires `enable_deployed_resources`"
          ],
          [
            "Cost report",
            "Deployed Resources",
            "Spend and optimization"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Click any row to navigate directly."
      },
      {
        "type": "h2",
        "text": "Active pipelines"
      },
      {
        "type": "p",
        "text": "A compact list of up to six pipelines with status tags:"
      },
      {
        "type": "table",
        "headers": [
          "Tag",
          "Meaning"
        ],
        "rows": [
          [
            "FAILED",
            "Latest deployment failed"
          ],
          [
            "RUNNING",
            "Deploy in progress"
          ],
          [
            "IDLE",
            "Successfully deployed, not running"
          ],
          [
            "DRAFT",
            "Saved but not deployed"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Click a row to open that pipeline in the designer."
      },
      {
        "type": "h2",
        "text": "Deployment trend (analytics)"
      },
      {
        "type": "p",
        "text": "Requires: `enable_dashboard_analytics` (Starter and above)."
      },
      {
        "type": "p",
        "text": "When enabled:"
      },
      {
        "type": "steps",
        "items": [
          "Mini chart — deployment count over the last 7 days.",
          "Summary numbers:"
        ]
      },
      {
        "type": "list",
        "items": [
          "This week — total deployments",
          "Success rate — percentage",
          "Healthy — approximate count of active pipelines"
        ]
      },
      {
        "type": "p",
        "text": "On Free plan, this card shows an upgrade prompt instead — a partial lock on Dashboard. The rest of the page remains usable."
      },
      {
        "type": "h2",
        "text": "InfraGlide AI section"
      },
      {
        "type": "p",
        "text": "The InfraGlide AI card shows contextual tips (not a chat — open Jane with ⌘J / Ctrl+J for chat)."
      },
      {
        "type": "p",
        "text": "Tips are based on your sandbox snapshot:"
      },
      {
        "type": "table",
        "headers": [
          "Condition",
          "Tip"
        ],
        "rows": [
          [
            "No credentials",
            "Link to Add credentials"
          ],
          [
            "No pipelines",
            "Link to New pipeline"
          ],
          [
            "Multiple service categories",
            "Suggest reviewing canvas connections"
          ],
          [
            "Otherwise healthy",
            "Link to Deployed resources for cost tips"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The badge shows how many tips apply (up to 3)."
      },
      {
        "type": "p",
        "text": "For interactive AI help, use Ask Jane in the sidebar or see Jane."
      },
      {
        "type": "h2",
        "text": "How to start a new pipeline from Dashboard"
      },
      {
        "type": "steps",
        "items": [
          "Select workspace and sandbox in the header.",
          "Use Quick actions → New pipeline, or InfraGlide AI → New pipeline link.",
          "The Pipeline Designer opens for a new pipeline in the current sandbox.",
          "Design, Save, then Plan and Apply when ready (requires deploy feature on your plan)."
        ]
      },
      {
        "type": "h2",
        "text": "Typical daily workflow"
      },
      {
        "type": "steps",
        "items": [
          "Open Dashboard after sign-in.",
          "Confirm green status or investigate amber failed banner.",
          "Continue where you left off — open a pipeline or fix a failure.",
          "Glance at Deployment trend (if on Starter+).",
          "Follow an InfraGlide AI tip if credentials or pipelines are missing."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Select sandbox first — most Dashboard content depends on header context.",
          "Failed banner is actionable — use View all then Fix & redeploy.",
          "AI tips are not Jane chat — press ⌘J for full conversational help.",
          "Free plan users — ignore the locked trend card or ask admin about Starter upgrade.",
          "Project attention dot — header may show a dot when failed deploys exist in the sandbox."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Dashboard shows \"Choose a project from the header\" Select a sandbox in the workspace bar."
      },
      {
        "type": "p",
        "text": "Stats show zero but I have pipelines Confirm the pipelines belong to the selected sandbox, not another environment."
      },
      {
        "type": "p",
        "text": "Deployment trend shows upgrade card Your plan lacks `enable_dashboard_analytics` (Free tier). See Subscription Tiers."
      },
      {
        "type": "p",
        "text": "Quick action Security scan missing Requires Pro+ operations feature `enable_deployed_resources`."
      },
      {
        "type": "p",
        "text": "InfraGlide AI always says add credentials Add a cloud credential for this sandbox on the Credentials page."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Getting Started — First pipeline and deploy",
          "Jane — Full AI assistant",
          "Pipelines & Automation — Deploy workflow",
          "Multi-Tenancy — Workspace and sandbox selection",
          "Subscription Tiers — Analytics partial lock"
        ]
      }
    ]
  },
  {
    "id": "pipeline-designer",
    "section": "Visual Canvas",
    "title": "Pipeline Designer",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "The Pipeline Designer is InfraGlide's full-screen visual editor for cloud infrastructure. You drag resources onto a canvas, connect them, configure settings, save, and deploy."
      },
      {
        "type": "p",
        "text": "Route: `/pipeline/:id` (optional version: `/pipeline/:id/:version`)"
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with Editor or Admin role on the current workspace or sandbox can edit and deploy. Viewers can open pipelines in read-only mode (including collaborative view-only sessions)."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select the correct Workspace and Sandbox in the header.",
          "Ensure you have at least Viewer access to the pipeline.",
          "For deploy actions, you need Editor access and a saved pipeline."
        ]
      },
      {
        "type": "h2",
        "text": "How to open the Pipeline Designer"
      },
      {
        "type": "h3",
        "text": "From My Pipelines"
      },
      {
        "type": "steps",
        "items": [
          "Go to My Pipelines.",
          "Click a pipeline name."
        ]
      },
      {
        "type": "h3",
        "text": "Create new"
      },
      {
        "type": "steps",
        "items": [
          "Go to Dashboard or My Pipelines.",
          "Click New pipeline.",
          "Enter a name and confirm."
        ]
      },
      {
        "type": "h3",
        "text": "From a template"
      },
      {
        "type": "steps",
        "items": [
          "Go to Templates → Use template → opens designer with pre-filled canvas."
        ]
      },
      {
        "type": "h2",
        "text": "Screen layout"
      },
      {
        "type": "table",
        "headers": [
          "Area",
          "Purpose"
        ],
        "rows": [
          [
            "Component Library (left)",
            "AWS, GCP, Azure resources to add"
          ],
          [
            "Canvas (center)",
            "Visual architecture"
          ],
          [
            "Properties panel (right)",
            "Settings for selected resource"
          ],
          [
            "Toolbar (top)",
            "Save, Deploy, Import, versions, views"
          ],
          [
            "Console (bottom)",
            "Deployment logs during runs"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How to add and connect resources"
      },
      {
        "type": "steps",
        "items": [
          "Open Component Library → choose AWS, GCP, or Azure tab.",
          "Drag a resource onto the canvas.",
          "Draw connections between resources (network → compute → data).",
          "Click each resource → fill in the Properties panel.",
          "Click Save (`Ctrl+S` / `Cmd+S`)."
        ]
      },
      {
        "type": "p",
        "text": "See AWS Resources, GCP Resources, Azure Resources."
      },
      {
        "type": "h2",
        "text": "How to save"
      },
      {
        "type": "list",
        "items": [
          "Toolbar Save button, or `Ctrl+S` / `Cmd+S`.",
          "Auto-save may run after edits when enabled — watch the save indicator.",
          "Only saved state is deployed or exported to Terraform."
        ]
      },
      {
        "type": "h2",
        "text": "How to switch pipeline versions"
      },
      {
        "type": "steps",
        "items": [
          "Click version switcher in the toolbar.",
          "Select a version to open, or Create new version for a copy."
        ]
      },
      {
        "type": "p",
        "text": "Each version deploys independently with its own state."
      },
      {
        "type": "h2",
        "text": "How to change views"
      },
      {
        "type": "table",
        "headers": [
          "View",
          "Use for"
        ],
        "rows": [
          [
            "Canvas",
            "Editing"
          ],
          [
            "Terraform JSON",
            "Preview generated code — see Terraform Generation"
          ],
          [
            "Console",
            "Live deploy output — see Pipeline Deployment"
          ],
          [
            "State Inspector",
            "Resources after successful apply"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How to import Terraform on the canvas"
      },
      {
        "type": "p",
        "text": "See Terraform Import."
      },
      {
        "type": "h2",
        "text": "How to import an existing InfraGlide pipeline file"
      },
      {
        "type": "p",
        "text": "See Import as Pipeline."
      },
      {
        "type": "h2",
        "text": "How to deploy from the designer"
      },
      {
        "type": "p",
        "text": "See Pipeline Deployment."
      },
      {
        "type": "h2",
        "text": "How to use Jane on the designer"
      },
      {
        "type": "p",
        "text": "Press ⌘J / Ctrl+J or use toolbar Jane tools. See Jane AI Assistant."
      },
      {
        "type": "h2",
        "text": "How to collaborate in real time"
      },
      {
        "type": "p",
        "text": "See Real-time Collaboration."
      },
      {
        "type": "h2",
        "text": "Keyboard shortcuts"
      },
      {
        "type": "table",
        "headers": [
          "Shortcut",
          "Action"
        ],
        "rows": [
          [
            "`Ctrl+S` / `Cmd+S`",
            "Save"
          ],
          [
            "`Ctrl+Z` / `Cmd+Z`",
            "Undo"
          ],
          [
            "`Delete`",
            "Remove selected resource"
          ],
          [
            "`⌘J` / `Ctrl+J`",
            "Open Jane"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Properties panel empty — Click a resource on the canvas first."
      },
      {
        "type": "p",
        "text": "Cannot save — Check Editor role; viewers cannot save."
      },
      {
        "type": "p",
        "text": "Deploy button disabled — Save first; fix validation errors in Properties panel."
      },
      {
        "type": "p",
        "text": "Missing subnet/VPC options — Connect network resources before configuring compute."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "My Pipelines · Terraform Generation · Pipeline Deployment · Real-time Collaboration"
      }
    ]
  },
  {
    "id": "terraform-generation",
    "section": "Visual Canvas",
    "title": "Terraform Generation",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Terraform Generation converts your saved pipeline design (canvas components + connections + configuration) into Terraform JSON (`.tf.json`) that can be planned and applied to your cloud account."
      },
      {
        "type": "p",
        "text": "Generation runs when you deploy or when you preview Terraform in the designer."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "Pipeline Designer → Terraform JSON view in the toolbar",
          "Automatically when you click Deploy → Plan or Apply"
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Any user who can open the pipeline and deploy (typically Editor or higher). Viewers can preview Terraform JSON if the designer allows read access."
      },
      {
        "type": "h2",
        "text": "How Terraform generation works (what you need to know)"
      },
      {
        "type": "steps",
        "items": [
          "You save the pipeline on the canvas.",
          "InfraGlide reads components, connections, and config.",
          "Resources are ordered by dependency (network before compute, etc.).",
          "Output is standard Terraform JSON — not a proprietary format.",
          "Artifacts are stored securely for the deployment run."
        ]
      },
      {
        "type": "p",
        "text": "You do not write HCL by hand unless you import external Terraform first."
      },
      {
        "type": "h2",
        "text": "How to preview Terraform before deploying"
      },
      {
        "type": "steps",
        "items": [
          "Open the pipeline in the Pipeline Designer.",
          "Save your latest changes.",
          "Switch the view to Terraform JSON (toolbar toggle).",
          "Review the generated `resource` and `data` blocks."
        ]
      },
      {
        "type": "p",
        "text": "Use this in reviews or to share with teammates who prefer code."
      },
      {
        "type": "h2",
        "text": "How to generate Terraform as part of deploy"
      },
      {
        "type": "steps",
        "items": [
          "Save the pipeline.",
          "Click Deploy.",
          "Select credential and region.",
          "Choose Plan (preview only) or Apply (creates/updates resources)."
        ]
      },
      {
        "type": "p",
        "text": "Generation happens automatically before Terraform runs."
      },
      {
        "type": "h2",
        "text": "How to ask Jane to explain generated Terraform"
      },
      {
        "type": "steps",
        "items": [
          "Open Jane (⌘J / Ctrl+J) on the designer.",
          "After a plan, ask: *\"Summarize this plan in plain English\"* or *\"What will change if I apply?\"*"
        ]
      },
      {
        "type": "p",
        "text": "See Jane AI Assistant."
      },
      {
        "type": "h2",
        "text": "What gets included in generated Terraform"
      },
      {
        "type": "list",
        "items": [
          "Cloud resources matching your canvas components (EC2, VPC, GKE, etc.)",
          "Dependencies implied by canvas connections",
          "Tags identifying pipeline and deployment (managed by InfraGlide)",
          "Backend configuration for remote state (managed by the platform)"
        ]
      },
      {
        "type": "p",
        "text": "Provider-specific fields come from your Properties panel settings."
      },
      {
        "type": "h2",
        "text": "Import vs generate"
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "Direction"
        ],
        "rows": [
          [
            "Terraform Import",
            "Existing Terraform → canvas"
          ],
          [
            "Terraform Generation",
            "Canvas → Terraform"
          ]
        ]
      },
      {
        "type": "p",
        "text": "See Terraform Import."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Save before every preview or deploy — unsaved canvas changes are not generated.",
          "Connect resources — missing connections can cause wrong ordering or missing references.",
          "Run Plan first on production — review generated changes before Apply.",
          "Use version switcher — each version generates against that version's saved design."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Terraform JSON is empty or incomplete — Save the pipeline; ensure components have required fields filled."
      },
      {
        "type": "p",
        "text": "Generation fails on deploy — Check validation errors on canvas; open console log for details."
      },
      {
        "type": "p",
        "text": "Resource missing from JSON — Component type may not be supported for your provider yet, or config failed validation."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · Pipeline Deployment · Terraform Import"
      }
    ]
  },
  {
    "id": "my-pipelines",
    "section": "Visual Canvas",
    "title": "My Pipelines",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "My Pipelines is the list of all infrastructure pipelines in your current sandbox (or filtered workspace context). From here you open, duplicate, deploy, and track status of each pipeline."
      },
      {
        "type": "p",
        "text": "Route: `/my-pipelines`"
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Anyone with access to the workspace/sandbox and the My Pipelines module. Actions (edit, deploy, delete) depend on your role — see RBAC Management."
      },
      {
        "type": "h2",
        "text": "How to open My Pipelines"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header.",
          "Click My Pipelines in the sidebar (Build & Deploy)."
        ]
      },
      {
        "type": "h2",
        "text": "What you see in the list"
      },
      {
        "type": "p",
        "text": "Typical columns and indicators:"
      },
      {
        "type": "table",
        "headers": [
          "Item",
          "Meaning"
        ],
        "rows": [
          [
            "Name",
            "Pipeline display name — click to open designer"
          ],
          [
            "Version",
            "Current version number"
          ],
          [
            "Provider",
            "AWS, GCP, or Azure"
          ],
          [
            "Status badge",
            "Latest deployment status — see Pipeline Status Watcher"
          ],
          [
            "Drift indicator",
            "Open drift events — see Drift Detection"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How to create a new pipeline"
      },
      {
        "type": "steps",
        "items": [
          "On My Pipelines or Dashboard, click New pipeline.",
          "Enter a name.",
          "Confirm — opens empty Pipeline Designer."
        ]
      },
      {
        "type": "p",
        "text": "Or start from Templates."
      },
      {
        "type": "h2",
        "text": "How to open a pipeline"
      },
      {
        "type": "p",
        "text": "Click the pipeline name → opens Pipeline Designer at `/pipeline/:id`."
      },
      {
        "type": "h2",
        "text": "How to view version history"
      },
      {
        "type": "steps",
        "items": [
          "Click the version number on a pipeline row, or",
          "Open the pipeline → use version switcher in the toolbar."
        ]
      },
      {
        "type": "p",
        "text": "Create a new version from the designer when you need an immutable snapshot for a new release."
      },
      {
        "type": "h2",
        "text": "How to duplicate a pipeline"
      },
      {
        "type": "steps",
        "items": [
          "Find the pipeline in the list.",
          "Use Duplicate (or copy action in the row menu).",
          "Enter a new name and target sandbox if prompted.",
          "Edit the copy in the designer."
        ]
      },
      {
        "type": "h2",
        "text": "How to delete a pipeline"
      },
      {
        "type": "steps",
        "items": [
          "Select the pipeline row menu → Delete.",
          "Confirm."
        ]
      },
      {
        "type": "p",
        "text": "Deleting a pipeline record does not automatically destroy cloud resources. Run Destroy from the designer first if you intend to remove infrastructure."
      },
      {
        "type": "h2",
        "text": "How to filter or find pipelines"
      },
      {
        "type": "list",
        "items": [
          "Ensure the correct sandbox is selected in the header — the list is scoped to your context.",
          "Use search or sort controls if shown on the page."
        ]
      },
      {
        "type": "h2",
        "text": "How deployment status updates on this page"
      },
      {
        "type": "p",
        "text": "Pipeline Status Watcher polls in the background and updates badges when deploys complete — you do not need to refresh manually."
      },
      {
        "type": "p",
        "text": "See Pipeline Status Watcher."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Check header sandbox before creating — pipelines belong to one sandbox.",
          "Watch drift badges — investigate before the next production deploy.",
          "Use meaningful names — include environment or service (e.g. `api-backend-staging`)."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Empty list — Wrong sandbox selected, or no pipelines created yet."
      },
      {
        "type": "p",
        "text": "Cannot create pipeline — Need Editor role; check Manage Users / admin."
      },
      {
        "type": "p",
        "text": "Status stuck on Running — See Pipeline Deployment troubleshooting."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · Templates · Pipeline Deployment · Dashboard"
      }
    ]
  },
  {
    "id": "real-time-collaboration",
    "section": "Visual Canvas",
    "title": "Real-time Collaboration",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Real-time collaboration lets multiple people open the same pipeline in the Pipeline Designer at once. Canvas changes sync over a live WebSocket connection (`/collab`). You see who is online, whether they can edit, and colored remote cursors on the canvas."
      },
      {
        "type": "p",
        "text": "Where it runs: Pipeline Designer — `/pipeline/:id`"
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Anyone with at least Viewer access to the pipeline can join a collaboration session."
      },
      {
        "type": "table",
        "headers": [
          "Role on pipeline",
          "In session"
        ],
        "rows": [
          [
            "Editor or Admin",
            "Can edit — moves, adds, and removes sync to others"
          ],
          [
            "Viewer",
            "View only — sees live updates but cannot change the canvas"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Your effective role is determined by workspace/sandbox RBAC and pipeline sharing. See RBAC Management."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Open a saved pipeline (collaboration requires a pipeline ID).",
          "Stay in Canvas view — collaboration connects when the designer is in edit/view mode on the canvas.",
          "Ensure you are signed in — the WebSocket uses your session."
        ]
      },
      {
        "type": "h2",
        "text": "How collaboration connects"
      },
      {
        "type": "p",
        "text": "When you open a pipeline others are viewing:"
      },
      {
        "type": "steps",
        "items": [
          "InfraGlide opens a WebSocket to `/collab?pipelineId=…` using your session cookie.",
          "The server sends a welcome message with your user ID, edit permission, and avatar color.",
          "A presence list updates whenever someone joins or leaves.",
          "The toolbar shows a green Live indicator when connected."
        ]
      },
      {
        "type": "p",
        "text": "If connection fails, the indicator shows Collab (idle). Reload the page and confirm the API server is reachable."
      },
      {
        "type": "h2",
        "text": "What you see in the toolbar"
      },
      {
        "type": "p",
        "text": "The CollaborationAvatars strip appears in the designer toolbar:"
      },
      {
        "type": "table",
        "headers": [
          "Element",
          "Meaning"
        ],
        "rows": [
          [
            "Pulsing green dot",
            "WebSocket connected"
          ],
          [
            "Live / Collab label",
            "Connected vs trying to connect"
          ],
          [
            "Colored avatars",
            "Other users online (up to five shown)"
          ],
          [
            "\"solo\" / \"N online\"",
            "Count of other collaborators"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Hover an avatar to see the person's name and can edit or view only."
      },
      {
        "type": "p",
        "text": "Your own avatar is excluded from the strip — you only see others."
      },
      {
        "type": "h2",
        "text": "Editor vs viewer behavior"
      },
      {
        "type": "h3",
        "text": "Editors"
      },
      {
        "type": "list",
        "items": [
          "Drag resources from the Component Library",
          "Move, connect, and delete nodes",
          "Edit the Properties panel and save",
          "Broadcast cursor_move events so others see your pointer"
        ]
      },
      {
        "type": "p",
        "text": "Changes batch and sync to other editors and viewers in near real time."
      },
      {
        "type": "h3",
        "text": "Viewers"
      },
      {
        "type": "list",
        "items": [
          "See the canvas and Properties panel in read-only mode",
          "Receive live node and edge updates from editors",
          "See remote cursors",
          "Cannot drag from the Component Library, change provider tabs, or mutate the canvas",
          "Component Library items appear muted; drag is disabled"
        ]
      },
      {
        "type": "p",
        "text": "Viewers remain in the session for passive sync — they are not disconnected, but their edits are not sent."
      },
      {
        "type": "h2",
        "text": "Remote cursors"
      },
      {
        "type": "p",
        "text": "When another editor moves their mouse on the canvas, you see a labeled pointer in their assigned color:"
      },
      {
        "type": "list",
        "items": [
          "Name badge follows their cursor position",
          "Cursors map from canvas coordinates to your screen (pan/zoom aware)",
          "Your own cursor is never shown back to you"
        ]
      },
      {
        "type": "p",
        "text": "Remote cursors help during design reviews and pair programming on infrastructure layouts."
      },
      {
        "type": "h2",
        "text": "How to collaborate effectively"
      },
      {
        "type": "steps",
        "items": [
          "Agree on roles — one primary editor avoids conflicting moves; others can review as viewers.",
          "Save explicitly — live sync updates the canvas view, but Save (`Ctrl+S` / `Cmd+S`) persists to the pipeline record for deploy.",
          "Watch the Live indicator — if it drops, pause edits until it reconnects.",
          "Use version switcher carefully — switching versions loads a different snapshot; collaborators may need to refresh or rejoin."
        ]
      },
      {
        "type": "h2",
        "text": "What syncs (and what does not)"
      },
      {
        "type": "table",
        "headers": [
          "Syncs live",
          "Does not sync live"
        ],
        "rows": [
          [
            "Node position, add, remove",
            "Unsaved Properties panel typing (until saved)"
          ],
          [
            "Edge add, remove",
            "Deploy / Terraform console output"
          ],
          [
            "Presence and cursors",
            "Version switcher selection on another user's screen"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Only saved pipeline JSON is used for Terraform generation and deployment."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Viewers are ideal for stakeholders who need visibility without edit risk.",
          "If two editors edit simultaneously, last sync wins on canvas structure — coordinate on major layout changes.",
          "Collaboration presence uses your display name from Settings.",
          "For deploy actions, only one person should run Plan/Apply at a time — see Pipeline Deployment."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Stuck on \"Collab\" / not Live — Reload the page. Confirm you have pipeline access and the server is running. In development, check browser console for WebSocket close codes (401/403 = auth or permission issue)."
      },
      {
        "type": "p",
        "text": "Cannot drag components — You may be a viewer. Check the avatar tooltip or ask an admin for Editor access."
      },
      {
        "type": "p",
        "text": "Changes not appearing — Verify the green Live dot. Editors must wait for the welcome handshake before edits broadcast."
      },
      {
        "type": "p",
        "text": "Remote cursors missing — Only editors send cursor events. Viewers do not show cursors to others."
      },
      {
        "type": "p",
        "text": "Unauthorized (4401) or Forbidden (4403) — Sign in again or confirm pipeline/workspace access."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · My Pipelines · RBAC Management · Settings"
      }
    ]
  },
  {
    "id": "aws-resources",
    "section": "Visual Canvas",
    "title": "AWS Resources",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "The AWS tab in the Pipeline Designer Component Library lists Amazon Web Services resources you can drag onto the canvas. Each resource opens a configuration form in the Properties panel. Saved settings become Terraform when you deploy."
      },
      {
        "type": "p",
        "text": "Use this guide when building AWS pipelines in the Pipeline Designer."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with Editor access who can open the designer. Your organization must allow AWS — check Settings → Cloud defaults if the tab is blocked or muted."
      },
      {
        "type": "h2",
        "text": "How to open the AWS component library"
      },
      {
        "type": "steps",
        "items": [
          "Open a pipeline in the Pipeline Designer.",
          "In the left Component Library, click the AWS tab.",
          "Expand categories or use Search to filter by name.",
          "Drag a resource onto the canvas.",
          "Click the resource → configure in Properties → Save."
        ]
      },
      {
        "type": "h2",
        "text": "Container hierarchy (connect dependencies)"
      },
      {
        "type": "p",
        "text": "AWS resources nest inside containers. Build from the outside in:"
      },
      {
        "type": "code",
        "lang": "text",
        "lines": [
          "Region → VPC → Subnet → (Compute, RDS, etc.)"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Container",
          "Purpose"
        ],
        "rows": [
          [
            "Region",
            "AWS region scope (e.g. `us-east-1`)"
          ],
          [
            "VPC",
            "Virtual network inside a region"
          ],
          [
            "Subnet",
            "Availability zone segment inside a VPC"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Typical flow:"
      },
      {
        "type": "steps",
        "items": [
          "Drag Region → set region in Properties.",
          "Drag VPC into or beside the region → configure CIDR.",
          "Drag Subnet into the VPC → pick AZ and CIDR.",
          "Drag EC2, RDS, Lambda, etc. → connect to subnet/VPC/security groups via canvas edges and Properties."
        ]
      },
      {
        "type": "p",
        "text": "Many compute and database resources require a subnet or VPC parent. If dropdowns are empty, connect network resources first — see Pipeline Designer troubleshooting."
      },
      {
        "type": "p",
        "text": "Draw connections between resources to express dependencies (e.g. ALB → EC2, EC2 → S3, IAM → Lambda)."
      },
      {
        "type": "h2",
        "text": "Resource categories"
      },
      {
        "type": "h3",
        "text": "Containers & networking"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Region",
            "Top-level regional scope"
          ],
          [
            "VPC",
            "Isolated network"
          ],
          [
            "Subnet",
            "AZ-scoped network segment"
          ],
          [
            "Security Group",
            "Instance/firewall rules"
          ],
          [
            "Route Table",
            "Subnet routing"
          ],
          [
            "Internet Gateway",
            "Public internet access for VPC"
          ],
          [
            "NAT Gateway",
            "Outbound internet for private subnets"
          ],
          [
            "Application Load Balancer (ALB)",
            "Layer-7 load balancing"
          ],
          [
            "VPN Connection",
            "Site-to-site VPN"
          ],
          [
            "CloudFront",
            "CDN"
          ],
          [
            "Route 53",
            "DNS"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Compute"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "EC2 Instance",
            "Virtual machines"
          ],
          [
            "Lambda",
            "Serverless functions"
          ],
          [
            "ECS",
            "Container orchestration"
          ],
          [
            "EKS",
            "Managed Kubernetes"
          ],
          [
            "Elastic Beanstalk",
            "Managed app platform"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Storage"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "S3",
            "Object storage"
          ],
          [
            "EBS",
            "Block volumes"
          ],
          [
            "EFS",
            "Shared file storage"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Database & caching"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "RDS",
            "Managed relational databases"
          ],
          [
            "Aurora",
            "AWS-native relational cluster"
          ],
          [
            "DynamoDB",
            "NoSQL key-value"
          ],
          [
            "ElastiCache",
            "In-memory cache"
          ],
          [
            "Redshift",
            "Data warehouse"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Analytics & data"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Athena, EMR, Glue, Glue Crawler, Glue Trigger",
            "Analytics and ETL"
          ],
          [
            "Kinesis",
            "Streaming data"
          ],
          [
            "SNS, SQS",
            "Messaging and queues"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Security & management"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "IAM",
            "Roles, policies, identities"
          ],
          [
            "CloudWatch",
            "Monitoring and logs"
          ],
          [
            "Auto Scaling Group (ASG)",
            "EC2 scaling"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Configuring common resources"
      },
      {
        "type": "h3",
        "text": "EC2"
      },
      {
        "type": "steps",
        "items": [
          "Place EC2 inside a Subnet (connected to VPC/Region).",
          "In Properties, choose instance type or size preset.",
          "Select OS — InfraGlide maps your OS choice to the correct image at deploy time.",
          "Attach security groups, optional key pair, and root volume size.",
          "Save."
        ]
      },
      {
        "type": "p",
        "text": "Latest AMI auto-selected: You do not need to paste an AMI ID. InfraGlide resolves the latest Amazon Machine Image via SSM Parameter Store based on your OS selection when Terraform is generated. The correct image is chosen for your target region automatically."
      },
      {
        "type": "h3",
        "text": "VPC and subnets"
      },
      {
        "type": "steps",
        "items": [
          "Set CIDR blocks that do not overlap with other VPCs in the same pipeline.",
          "Create public and private subnets per AZ as needed.",
          "Attach Internet Gateway, NAT Gateway, and Route Tables before placing private workloads."
        ]
      },
      {
        "type": "h3",
        "text": "S3"
      },
      {
        "type": "steps",
        "items": [
          "Drag S3 onto the canvas (regional).",
          "Configure bucket name, versioning, encryption, and access settings in Properties.",
          "Connect consuming resources (Lambda, EC2) via edges if your architecture requires it."
        ]
      },
      {
        "type": "h3",
        "text": "RDS / Aurora"
      },
      {
        "type": "steps",
        "items": [
          "Place in a Subnet group context (subnet connections on canvas).",
          "Choose engine, instance class, storage, and backup options.",
          "Ensure Security Group allows database port from application tier."
        ]
      },
      {
        "type": "h3",
        "text": "Lambda"
      },
      {
        "type": "steps",
        "items": [
          "Configure runtime, handler, memory, and environment.",
          "Connect IAM role and trigger sources (ALB, SQS, etc.) on the canvas."
        ]
      },
      {
        "type": "h3",
        "text": "ECS / EKS"
      },
      {
        "type": "steps",
        "items": [
          "Define cluster and service/workload settings in Properties.",
          "Connect VPC subnets, security groups, and IAM roles.",
          "For EKS, ensure subnet tags and IAM prerequisites match your cluster config."
        ]
      },
      {
        "type": "h3",
        "text": "ALB"
      },
      {
        "type": "steps",
        "items": [
          "Place in VPC context with subnets across AZs.",
          "Configure listeners, target groups, and connect to EC2 or ECS services."
        ]
      },
      {
        "type": "h3",
        "text": "IAM"
      },
      {
        "type": "steps",
        "items": [
          "Define roles, policies, and trust relationships.",
          "Connect roles to Lambda, EC2, ECS, or other services that assume them."
        ]
      },
      {
        "type": "h2",
        "text": "Provider tab rules"
      },
      {
        "type": "table",
        "headers": [
          "Situation",
          "Behavior"
        ],
        "rows": [
          [
            "New empty pipeline",
            "Switch freely between AWS, GCP, Azure tabs"
          ],
          [
            "Canvas has resources",
            "Switching provider prompts confirmation; may clear canvas on new pipelines"
          ],
          [
            "Saved pipeline",
            "Provider tab is locked to the pipeline's cloud — library filters to that provider"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Org-blocked providers show muted tabs and cannot be selected."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Build Region → VPC → Subnet before compute — avoids empty subnet dropdowns.",
          "Use Search in the Component Library for quick access (e.g. \"RDS\", \"ALB\").",
          "Rely on latest AMI auto-selected for EC2 — only override AMI if you have a compliance-specific image requirement.",
          "Save after each logical group of changes — only saved config deploys.",
          "Run Plan before Apply — see Pipeline Deployment."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "AWS tab muted or disabled — Organization policy blocked AWS. Contact your org admin."
      },
      {
        "type": "p",
        "text": "Empty subnet / VPC lists in Properties — Add and connect parent network resources first."
      },
      {
        "type": "p",
        "text": "Validation errors on deploy — Open Properties on highlighted resources; fix required fields, then Save."
      },
      {
        "type": "p",
        "text": "Wrong region on resources — Confirm Region container config and Settings cloud defaults."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · GCP Resources · Azure Resources · Terraform Generation · Pipeline Deployment · Cloud Credentials"
      }
    ]
  },
  {
    "id": "azure-resources",
    "section": "Visual Canvas",
    "title": "Azure Resources",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "The Azure tab in the Pipeline Designer Component Library lists Microsoft Azure resources for visual infrastructure design. Drag resources onto the canvas, configure them in Properties, connect dependencies, save, and deploy."
      },
      {
        "type": "p",
        "text": "Coverage note: Azure support in InfraGlide is partial — the palette and Terraform generators cover a growing subset of Azure services. Some resources appear on the canvas and in forms before full deploy support is available. Always run Plan before Apply and review generated Terraform in the designer."
      },
      {
        "type": "p",
        "text": "Use this guide with the Pipeline Designer."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with Editor access. Your organization must allow Azure in Settings → Cloud defaults."
      },
      {
        "type": "h2",
        "text": "How to open the Azure component library"
      },
      {
        "type": "steps",
        "items": [
          "Open a pipeline in the Pipeline Designer.",
          "Click the Azure tab in the left Component Library.",
          "Browse categories or use Search.",
          "Drag a resource onto the canvas.",
          "Click it → configure Properties → Save."
        ]
      },
      {
        "type": "h2",
        "text": "Container hierarchy (connect dependencies)"
      },
      {
        "type": "p",
        "text": "Azure follows a familiar hierarchy:"
      },
      {
        "type": "code",
        "lang": "text",
        "lines": [
          "Region → Virtual Network (VNet) → Subnet → (VM, SQL, etc.)"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Container",
          "Purpose"
        ],
        "rows": [
          [
            "Region",
            "Azure region"
          ],
          [
            "Zone",
            "Availability zone context"
          ],
          [
            "Group",
            "Logical grouping"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Typical flow:"
      },
      {
        "type": "steps",
        "items": [
          "Add Region and Virtual Network.",
          "Add Subnet(s) inside the VNet.",
          "Place Linux VM, Windows VM, SQL Database, etc.",
          "Attach Network Security Groups, Load Balancer, and Key Vault references via canvas layout and Properties.",
          "Draw connections between tiers (e.g. App Service → SQL, AKS → Storage)."
        ]
      },
      {
        "type": "h2",
        "text": "Partial coverage — what to expect"
      },
      {
        "type": "table",
        "headers": [
          "Expect",
          "Details"
        ],
        "rows": [
          [
            "Palette breadth",
            "Many Azure services appear in the Component Library"
          ],
          [
            "Deploy readiness",
            "Not every palette item has full end-to-end Terraform apply yet"
          ],
          [
            "Forms",
            "Schema-driven Properties panels; field completeness varies by resource"
          ],
          [
            "Production use",
            "Validate with Plan, inspect Terraform JSON, test in non-prod first"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Check deployment console output after Plan. If a resource type is not yet supported for apply, errors will name the missing generator or validation rule."
      },
      {
        "type": "h2",
        "text": "Resource categories"
      },
      {
        "type": "h3",
        "text": "Containers"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Region",
            "Regional scope"
          ],
          [
            "Zone",
            "Zone scope"
          ],
          [
            "Group",
            "Canvas grouping"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Compute"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Linux VM / Windows VM",
            "Virtual machines"
          ],
          [
            "VM Scale Set (Linux/Windows)",
            "Scalable VM sets"
          ],
          [
            "Linux Function App / Windows Function App",
            "Azure Functions"
          ],
          [
            "Function App (Consumption)",
            "Serverless consumption plans"
          ],
          [
            "Container Instances",
            "Single-container groups"
          ],
          [
            "AKS",
            "Azure Kubernetes Service"
          ],
          [
            "Linux Web App / Windows Web App",
            "App Service"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Storage"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Storage Accounts",
            "Core storage account"
          ],
          [
            "Blob Storage",
            "Object blobs"
          ],
          [
            "Azure Files",
            "SMB file shares"
          ],
          [
            "Managed Disks",
            "VM disks"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Database & caching"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "SQL Database",
            "Managed SQL database"
          ],
          [
            "SQL Server",
            "SQL server instance"
          ],
          [
            "Cosmos DB",
            "Multi-model database"
          ],
          [
            "Synapse Analytics",
            "Analytics workspace"
          ],
          [
            "Cache for Redis",
            "Managed Redis"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Analytics & data"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Data Factory",
            "ETL orchestration"
          ],
          [
            "HDInsight",
            "Hadoop/Spark clusters"
          ],
          [
            "Event Hubs",
            "Event ingestion"
          ],
          [
            "Stream Analytics",
            "Stream processing"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Networking & CDN"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Virtual Network (VNet)",
            "Core network"
          ],
          [
            "Subnet",
            "Address range in VNet"
          ],
          [
            "NAT Gateway",
            "Outbound internet"
          ],
          [
            "Network Interface",
            "VM NIC"
          ],
          [
            "Load Balancer",
            "Layer-4 load balancing"
          ],
          [
            "Network Security Groups",
            "Traffic rules"
          ],
          [
            "Azure Firewall",
            "Managed firewall"
          ],
          [
            "VPN Gateway / On-Premise Data Center",
            "Hybrid connectivity"
          ],
          [
            "Route Tables",
            "Custom routes"
          ],
          [
            "CDN",
            "Content delivery"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Security & management"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Key Vault",
            "Secrets, keys, certificates"
          ],
          [
            "Managed Identity",
            "Azure AD identities for resources"
          ],
          [
            "Monitor",
            "Metrics and diagnostics"
          ],
          [
            "Autoscale",
            "Scaling rules"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Configuring common resources"
      },
      {
        "type": "h3",
        "text": "Virtual machines (Linux / Windows)"
      },
      {
        "type": "steps",
        "items": [
          "Place VM in Subnet / VNet context.",
          "Choose VM size, OS disk, and authentication options in Properties.",
          "Associate Network Security Groups and optional Managed Disks.",
          "Save."
        ]
      },
      {
        "type": "h3",
        "text": "Virtual Network and subnets"
      },
      {
        "type": "steps",
        "items": [
          "Define address space for VNet.",
          "Create Subnet(s) for app, data, and gateway tiers.",
          "Add NSG, Route Tables, and NAT Gateway as needed before VMs."
        ]
      },
      {
        "type": "h3",
        "text": "Storage"
      },
      {
        "type": "steps",
        "items": [
          "Configure Storage Account tier, replication, and access tier.",
          "Add Blob, Files, or Managed Disks connected to VMs or AKS."
        ]
      },
      {
        "type": "h3",
        "text": "SQL Database / SQL Server"
      },
      {
        "type": "steps",
        "items": [
          "Set server name, SKU, and backup retention.",
          "Place in network context with private endpoint or firewall rules as configured in Properties.",
          "Connect App Service or Functions via connection settings."
        ]
      },
      {
        "type": "h3",
        "text": "Azure Functions"
      },
      {
        "type": "steps",
        "items": [
          "Choose hosting plan (App Service or Consumption).",
          "Configure runtime stack and storage account requirements.",
          "Link Key Vault for secrets and Managed Identity for Azure resource access."
        ]
      },
      {
        "type": "h3",
        "text": "AKS"
      },
      {
        "type": "steps",
        "items": [
          "Define cluster name, node pool size, and Kubernetes version where supported.",
          "Attach VNet/subnet for node networking.",
          "Plan Managed Identity and Key Vault integrations for production workloads."
        ]
      },
      {
        "type": "h3",
        "text": "Key Vault"
      },
      {
        "type": "steps",
        "items": [
          "Configure vault name, SKU, and access policies or RBAC mode.",
          "Reference from Functions, App Service, and VMs for secrets at deploy time."
        ]
      },
      {
        "type": "h2",
        "text": "Provider tab rules"
      },
      {
        "type": "p",
        "text": "Same as other providers — see AWS Resources. New pipelines can switch Azure tab freely on an empty canvas; saved Azure pipelines stay on Azure."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Treat Azure pipelines as preview-friendly — Plan first, Apply only after reviewing output.",
          "Build VNet → Subnet before VMs, SQL, and AKS.",
          "Use Key Vault and Managed Identity instead of hardcoding secrets in Properties.",
          "Start from an Azure Template when available — fewer missing generator gaps.",
          "For multi-tier apps, connect Load Balancer → Web App / VM → SQL visually before configuring each Properties panel."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Azure tab blocked — Org admin disabled Azure in organization policy."
      },
      {
        "type": "p",
        "text": "Plan succeeds, Apply fails — Resource may be palette-only; check console for unsupported resource type. Report gaps or use AWS/GCP for production until coverage expands."
      },
      {
        "type": "p",
        "text": "Empty VNet/subnet pickers — Add parent network containers and connect them on the canvas."
      },
      {
        "type": "p",
        "text": "Validation errors — Complete required Properties fields; Azure schema-driven forms mark missing values."
      },
      {
        "type": "p",
        "text": "Differs from Azure Portal — InfraGlide generates Terraform JSON; some Azure features may map to simplified property sets."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · AWS Resources · GCP Resources · Terraform Generation · Pipeline Deployment · Templates"
      }
    ]
  },
  {
    "id": "gcp-resources",
    "section": "Visual Canvas",
    "title": "GCP Resources",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "The GCP tab in the Pipeline Designer Component Library lists Google Cloud resources for drag-and-drop architecture design. Configure each resource in the Properties panel, connect dependencies on the canvas, save, and deploy via Terraform."
      },
      {
        "type": "p",
        "text": "Use this guide alongside the Pipeline Designer."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with Editor access on the pipeline. Your organization must allow GCP — if the tab is muted, an admin has blocked Google Cloud in Settings."
      },
      {
        "type": "h2",
        "text": "How to open the GCP component library"
      },
      {
        "type": "steps",
        "items": [
          "Open a pipeline in the Pipeline Designer.",
          "Click the GCP tab in the left Component Library.",
          "Browse categories or Search by resource name.",
          "Drag a resource onto the canvas.",
          "Click it → fill Properties → Save."
        ]
      },
      {
        "type": "h2",
        "text": "Container hierarchy (connect dependencies)"
      },
      {
        "type": "p",
        "text": "GCP uses region and network containers similar to AWS:"
      },
      {
        "type": "code",
        "lang": "text",
        "lines": [
          "Region → VPC Network → Subnet → (Compute, GKE, Cloud SQL, etc.)"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Container",
          "Purpose"
        ],
        "rows": [
          [
            "Region",
            "GCP region (e.g. `us-central1`)"
          ],
          [
            "Zone",
            "Zonal scope within a region"
          ],
          [
            "VPC Network",
            "Virtual network"
          ],
          [
            "Subnet",
            "Subnetwork in a region"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Typical flow:"
      },
      {
        "type": "steps",
        "items": [
          "Add Region (or use native region containers where shown).",
          "Add VPC Network and Subnet.",
          "Place Compute Engine, GKE, Cloud SQL, etc. inside the correct parent.",
          "Draw connections for IAM, load balancers, and data flow."
        ]
      },
      {
        "type": "p",
        "text": "Some resources (e.g. Cloud Run) are regional — place them in Region or VPC, not inside a Zone container. The designer validates placement and shows hints when hierarchy is wrong."
      },
      {
        "type": "h2",
        "text": "Form types (what you see in Properties)"
      },
      {
        "type": "p",
        "text": "InfraGlide uses two form styles on GCP:"
      },
      {
        "type": "table",
        "headers": [
          "Style",
          "What you experience"
        ],
        "rows": [
          [
            "Code-first forms",
            "Rich stepper sections (e.g. Compute Engine, Cloud IAM) with fixed field layouts"
          ],
          [
            "Catalog-driven forms",
            "Form fields loaded from resource catalog — the UI loads field definitions from InfraGlide's resource catalog (database-backed). Common for services like Dataproc and other catalog-backed types."
          ]
        ]
      },
      {
        "type": "p",
        "text": "You do not need to know which mode a resource uses — open Properties and complete the fields shown. All saved values flow to Terraform generation on deploy."
      },
      {
        "type": "h2",
        "text": "Resource categories"
      },
      {
        "type": "h3",
        "text": "Containers"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Region",
            "Regional scope"
          ],
          [
            "Zone",
            "Zonal scope"
          ],
          [
            "Group",
            "Logical grouping on canvas"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Compute"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Compute Engine",
            "VMs"
          ],
          [
            "Cloud Functions",
            "Serverless functions"
          ],
          [
            "GKE",
            "Google Kubernetes Engine"
          ],
          [
            "App Engine",
            "Managed application platform"
          ],
          [
            "Cloud Run",
            "Containerized serverless (also available via templates, Jane, or import when not shown in the sidebar)"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Storage"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Cloud Storage",
            "Object buckets"
          ],
          [
            "Persistent Disk",
            "Block storage"
          ],
          [
            "Filestore",
            "Managed NFS"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Database & caching"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Cloud SQL",
            "Managed MySQL, PostgreSQL, SQL Server"
          ],
          [
            "AlloyDB",
            "PostgreSQL-compatible"
          ],
          [
            "Firestore",
            "Document database"
          ],
          [
            "Bigtable",
            "Wide-column NoSQL"
          ],
          [
            "BigQuery",
            "Data warehouse and analytics"
          ],
          [
            "Memorystore",
            "Redis / Memcached"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Analytics & data"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Dataproc",
            "Managed Spark/Hadoop clusters — catalog-driven wizard"
          ],
          [
            "Dataflow",
            "Stream/batch processing"
          ],
          [
            "Pub/Sub",
            "Messaging"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Networking & CDN"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "VPC Network",
            "Core network"
          ],
          [
            "Subnet",
            "IP range in a region"
          ],
          [
            "VPC Network Peering",
            "Cross-VPC connectivity"
          ],
          [
            "Load Balancing",
            "HTTP(S), TCP/UDP load balancers"
          ],
          [
            "Firewall Rules",
            "VPC firewall"
          ],
          [
            "Cloud Router",
            "Dynamic routing"
          ],
          [
            "Cloud NAT",
            "Outbound NAT for private instances"
          ],
          [
            "Cloud CDN",
            "Content delivery"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Security & management"
      },
      {
        "type": "table",
        "headers": [
          "Resource",
          "Use for"
        ],
        "rows": [
          [
            "Cloud IAM",
            "Service accounts, roles, bindings"
          ],
          [
            "Autoscale",
            "Scaling policies"
          ],
          [
            "Cloud Monitoring",
            "Metrics and alerting"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Configuring common resources"
      },
      {
        "type": "h3",
        "text": "Compute Engine"
      },
      {
        "type": "steps",
        "items": [
          "Place VM in Subnet / VPC / Region context.",
          "Use the stepper: machine type, boot disk, networking, security.",
          "Boot disk images load from GCP APIs for the selected zone/region.",
          "Save."
        ]
      },
      {
        "type": "h3",
        "text": "GKE"
      },
      {
        "type": "steps",
        "items": [
          "Define cluster name, location type (regional/zonal), and node pool settings.",
          "Connect VPC/subnet and service accounts.",
          "Ensure required GCP APIs are enabled in your project (deploy may prompt or fail with API errors)."
        ]
      },
      {
        "type": "h3",
        "text": "Cloud Run"
      },
      {
        "type": "steps",
        "items": [
          "When present on canvas (from palette, template, or import), configure service name, region, CPU/memory, and VPC connector if needed.",
          "Connect Cloud IAM service accounts for runtime identity."
        ]
      },
      {
        "type": "h3",
        "text": "Cloud SQL"
      },
      {
        "type": "steps",
        "items": [
          "Choose engine, tier, storage, and high availability options.",
          "Attach to VPC via private IP settings in Properties.",
          "Connect from Compute Engine or GKE over VPC."
        ]
      },
      {
        "type": "h3",
        "text": "BigQuery"
      },
      {
        "type": "steps",
        "items": [
          "Configure dataset and table settings in Properties.",
          "For catalog-backed fields, complete the wizard — form fields loaded from resource catalog.",
          "Connect IAM and data sources as your pipeline requires."
        ]
      },
      {
        "type": "h3",
        "text": "Dataproc"
      },
      {
        "type": "steps",
        "items": [
          "Drag Dataproc onto the canvas inside valid region/VPC context.",
          "Step through the wizard — fields come from the resource catalog.",
          "Set cluster mode, worker counts, and optional autoscaling."
        ]
      },
      {
        "type": "h3",
        "text": "VPC and IAM"
      },
      {
        "type": "steps",
        "items": [
          "VPC — define mode (auto/custom subnets), routing, and firewall baseline.",
          "Cloud IAM — create or bind service accounts; connect to Compute, Cloud Run, GKE, etc."
        ]
      },
      {
        "type": "h2",
        "text": "Provider tab rules"
      },
      {
        "type": "p",
        "text": "Same as AWS — see AWS Resources. Saved pipelines lock to GCP once created with GCP resources."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Prefer Region → VPC → Subnet before compute and databases.",
          "Dataproc and similar catalog resources — expect multi-step wizards; all steps must be complete before deploy.",
          "Enable required GCP APIs in your project before first deploy.",
          "Use Templates for GKE, Cloud Run, or BigQuery starting points.",
          "Save frequently — unsaved Properties changes are not deployed."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "GCP tab blocked — Org policy disallows GCP. Ask an org admin."
      },
      {
        "type": "p",
        "text": "Empty network dropdowns — Add VPC/subnet containers and connect them first."
      },
      {
        "type": "p",
        "text": "Dataproc / BigQuery form looks different from Compute — Catalog-driven forms load fields dynamically; this is expected."
      },
      {
        "type": "p",
        "text": "Deploy API errors — Often missing GCP API enablement or insufficient IAM on the credential. See Cloud Credentials."
      },
      {
        "type": "p",
        "text": "Cloud Run not in sidebar — Use a GCP template, Jane synthesis, or Terraform import to add it, then configure in Properties."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · AWS Resources · Azure Resources · Terraform Generation · Pipeline Deployment · Templates"
      }
    ]
  },
  {
    "id": "jane",
    "section": "Jane — AI Assistant",
    "title": "Jane",
    "intro": "",
    "content": [
      {
        "type": "p",
        "text": "Jane is InfraGlide's AI assistant. You can ask questions in plain English to design infrastructure, review architectures, fix failed deploys, explain drift, reduce costs, and create compliance rules."
      },
      {
        "type": "p",
        "text": "Jane is available from any page in the app."
      },
      {
        "type": "h2",
        "text": "How to open Jane"
      },
      {
        "type": "table",
        "headers": [
          "Method",
          "Steps"
        ],
        "rows": [
          [
            "Keyboard",
            "Press ⌘J (Mac) or Ctrl+J (Windows/Linux)"
          ],
          [
            "Sidebar",
            "Click Ask Jane"
          ],
          [
            "On a specific page",
            "Click Explain with Jane, Ask Jane, or similar buttons on Drift Report, Compliance, Deployed Resources, or the Pipeline Designer"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Jane opens as a panel on the right side of the screen."
      },
      {
        "type": "list",
        "items": [
          "Resize: Drag the left edge of the panel.",
          "Close: Press Escape or click the close button."
        ]
      },
      {
        "type": "p",
        "text": "Your panel width is remembered the next time you open Jane."
      },
      {
        "type": "h2",
        "text": "How Jane understands what you need"
      },
      {
        "type": "p",
        "text": "Jane looks at what you type and where you are in the app:"
      },
      {
        "type": "list",
        "items": [
          "On the Pipeline Designer with a pipeline open → design and review questions work best.",
          "On Drift Report → drift and fix questions work best.",
          "On Onboarding → setup and credential questions work best.",
          "On Compliance → policy questions work best."
        ]
      },
      {
        "type": "note",
        "text": "Open the relevant page and pipeline before asking for specific help."
      },
      {
        "type": "h2",
        "text": "How to build a pipeline with Jane"
      },
      {
        "type": "steps",
        "items": [
          "Open the Pipeline Designer (new or existing pipeline).",
          "Open Jane (⌘J / Ctrl+J).",
          "Describe what you want, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Create a three-tier web app on AWS with VPC, EC2, and RDS\"*",
          "*\"Add a Lambda function connected to DynamoDB\"*",
          "*\"Set up a GKE cluster with a Cloud SQL database\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Review the components Jane adds to the canvas.",
          "Adjust settings in the Properties panel as needed.",
          "Save the pipeline."
        ]
      },
      {
        "type": "p",
        "text": "Jane may ask clarifying questions (for example, public vs private network). Answer in the chat, then review the result."
      },
      {
        "type": "h2",
        "text": "How to review your architecture before deploy"
      },
      {
        "type": "steps",
        "items": [
          "Open your pipeline in the Pipeline Designer.",
          "Open Jane.",
          "Ask, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Review my pipeline for security issues\"*",
          "*\"Rate this architecture\"*",
          "*\"What would you improve before production?\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Read Jane's findings and fix issues in the Properties panel.",
          "Check the risk badge on the toolbar for a quick risk level."
        ]
      },
      {
        "type": "p",
        "text": "You can also open the Review sheet from Jane tools on the designer toolbar."
      },
      {
        "type": "h2",
        "text": "How to get help when a deployment fails"
      },
      {
        "type": "steps",
        "items": [
          "After a failed deploy, open Jane.",
          "Ask, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Why did my deployment fail?\"*",
          "*\"Explain the error in the deployment logs\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Jane summarizes the failure and suggests fixes.",
          "Update your pipeline configuration and deploy again."
        ]
      },
      {
        "type": "p",
        "text": "If you are viewing a specific deployment, Jane uses that deployment's logs automatically."
      },
      {
        "type": "h2",
        "text": "How to summarize a Terraform plan"
      },
      {
        "type": "p",
        "text": "After running Plan:"
      },
      {
        "type": "steps",
        "items": [
          "Open Jane on the Pipeline Designer.",
          "Ask: *\"Summarize this plan in plain English\"* or *\"What will change if I apply?\"*",
          "Use the summary to decide whether to proceed with Apply."
        ]
      },
      {
        "type": "h2",
        "text": "How to explain drift with Jane"
      },
      {
        "type": "steps",
        "items": [
          "Go to Drift Detection.",
          "Find the drift event you care about.",
          "Click Explain with Jane on that event.",
          "Jane explains what changed, why it might have happened, and what to do next."
        ]
      },
      {
        "type": "p",
        "text": "Example questions in the Jane panel:"
      },
      {
        "type": "list",
        "items": [
          "*\"Why is my EC2 instance drifting?\"*",
          "*\"Is this drift a security risk?\"*"
        ]
      },
      {
        "type": "p",
        "text": "See Cloud Sync & Drift for how to fix drift."
      },
      {
        "type": "h2",
        "text": "How to get remediation advice for drift"
      },
      {
        "type": "steps",
        "items": [
          "On Drift Detection, open a drift event.",
          "Open the Jane Remediation panel or ask Jane in chat.",
          "Jane suggests steps such as:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Update the pipeline and re-apply",
          "Use Resolve from Cloud if the live change was intentional"
        ]
      },
      {
        "type": "steps",
        "items": [
          "If offered, review an auto-generated patch before applying it to your pipeline."
        ]
      },
      {
        "type": "p",
        "text": "Always review Jane's suggestions before changing production pipelines."
      },
      {
        "type": "h2",
        "text": "How to reduce costs with Jane"
      },
      {
        "type": "h3",
        "text": "From the Pipeline Designer"
      },
      {
        "type": "steps",
        "items": [
          "Open your pipeline.",
          "Open Jane.",
          "Ask, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"How can I reduce the cost of this pipeline?\"*",
          "*\"Are any instances over-provisioned?\"*"
        ]
      },
      {
        "type": "h3",
        "text": "From Deployed Resources"
      },
      {
        "type": "steps",
        "items": [
          "Go to Deployed Resources.",
          "Open the Cost optimization card (Jane-powered).",
          "Read recommendations for rightsizing and waste reduction."
        ]
      },
      {
        "type": "p",
        "text": "Other cards on Deployed Resources:"
      },
      {
        "type": "list",
        "items": [
          "Cost forecast — projected spend",
          "Billing spike — why costs may have jumped",
          "Tag intelligence — tagging advice for cost tracking"
        ]
      },
      {
        "type": "h2",
        "text": "How to create a compliance policy with Jane"
      },
      {
        "type": "steps",
        "items": [
          "Go to Compliance.",
          "Open Jane Policy Generator (or ask Jane in the panel).",
          "Describe the rule in plain language, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Deny security groups that allow SSH from anywhere\"*",
          "*\"Require encryption on all S3 buckets\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Review the rules Jane generates.",
          "Save and enforce the policy through the Compliance page."
        ]
      },
      {
        "type": "p",
        "text": "See Cost & Compliance for how to enforce policies."
      },
      {
        "type": "h2",
        "text": "How to run a Well-Architected review"
      },
      {
        "type": "steps",
        "items": [
          "Go to Well-Architected in the sidebar.",
          "Select a pipeline.",
          "Click Run review.",
          "Jane evaluates your design across six pillars (security, reliability, cost, and others).",
          "Read the report and address high-priority items in the designer."
        ]
      },
      {
        "type": "h2",
        "text": "How to get help during onboarding"
      },
      {
        "type": "p",
        "text": "On each step of the Onboarding Wizard, use Jane Onboarding Ask:"
      },
      {
        "type": "list",
        "items": [
          "*\"What credentials do I need for AWS?\"*",
          "*\"What is a sandbox?\"*",
          "*\"Why did Cloud API verification fail?\"*"
        ]
      },
      {
        "type": "p",
        "text": "Jane answers in the context of the step you are on."
      },
      {
        "type": "h2",
        "text": "How to generate a template with Jane"
      },
      {
        "type": "steps",
        "items": [
          "Go to Templates.",
          "Click Synthesize with Jane (or similar).",
          "Describe the architecture you want, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"A data pipeline on GCP with Cloud Storage, Dataproc, and BigQuery\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Jane creates a blueprint you can open in the designer and customize."
        ]
      },
      {
        "type": "h2",
        "text": "How to use the deploy agent"
      },
      {
        "type": "p",
        "text": "For guided end-to-end deploy help:"
      },
      {
        "type": "steps",
        "items": [
          "Open Jane.",
          "Say, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Jane, help me deploy this pipeline end to end\"*",
          "*\"Run deploy agent\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Follow Jane's steps through plan, review, and apply."
        ]
      },
      {
        "type": "p",
        "text": "You stay in control — confirm each major step before resources change in the cloud."
      },
      {
        "type": "h2",
        "text": "How to ask about recent deployments and activity"
      },
      {
        "type": "p",
        "text": "Open Jane from anywhere and ask:"
      },
      {
        "type": "list",
        "items": [
          "*\"Show me recent deployments\"*",
          "*\"What failed this week?\"*",
          "*\"Give me an infrastructure summary\"*"
        ]
      },
      {
        "type": "p",
        "text": "Jane provides operational summaries when you use phrases like \"deployment history\" or \"recent deploy.\""
      },
      {
        "type": "h2",
        "text": "Example questions that work well"
      },
      {
        "type": "table",
        "headers": [
          "Goal",
          "Example question"
        ],
        "rows": [
          [
            "Build",
            "*\"Add a load balancer in front of my EC2 instances\"*"
          ],
          [
            "Review",
            "*\"Check my pipeline before I deploy to prod\"*"
          ],
          [
            "Fix deploy",
            "*\"Why did deploy fail?\"*"
          ],
          [
            "Drift",
            "*\"Explain this drift event\"*"
          ],
          [
            "Cost",
            "*\"How can I save money on this design?\"*"
          ],
          [
            "Policy",
            "*\"Create a rule that blocks public RDS instances\"*"
          ],
          [
            "Learn",
            "*\"What does this subnet configuration do?\"*"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Good habits when using Jane"
      },
      {
        "type": "steps",
        "items": [
          "Open the right page first — Jane gives better answers with context.",
          "Treat suggestions as drafts — especially for production; review before applying.",
          "Use Jane before and after deploy — catch issues early and fix failures faster.",
          "Do not share secrets in chat — Jane never needs your password or access keys."
        ]
      },
      {
        "type": "p",
        "text": "Jane does not replace your judgment or automatic rollback — you confirm deploys and changes."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Visual Canvas — Designer and Jane on the canvas",
          "Cloud Sync & Drift — Drift explanation and fixes",
          "Cost & Compliance — Policies and cost tools",
          "Getting Started — Jane during onboarding"
        ]
      }
    ]
  },
  {
    "id": "jane-ai-assistant",
    "section": "Jane — AI Assistant",
    "title": "Jane AI Assistant",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Ask Jane is InfraGlide's AI assistant for designing infrastructure, reviewing pipelines, analyzing deployments, optimizing cost, and answering general cloud and Terraform questions. Jane opens as a resizable right-side panel and remembers conversation sessions per user (optionally scoped to a pipeline)."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "Sidebar → Ask Jane",
          "Keyboard shortcut: ⌘J (Mac) or Ctrl+J (Windows/Linux)",
          "Contextual entry points: Deployment Logs (Ask Jane), Pipeline Designer toolbar (Review, Security), Deployed Resources Jane cards"
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Signed-in users with Jane features enabled on their organization's subscription",
          "Some actions require context (for example, review pipeline works best when a pipeline is open)",
          "Deploy and policy features respect the same RBAC and compliance gates as manual operations"
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Sign in and select Workspace / Sandbox when asking about project-specific resources.",
          "Save your pipeline before asking Jane to review or estimate cost from canvas config.",
          "For deployment analysis, open the designer or deployment log so Jane receives `pipelineId` / `deploymentId` context when available."
        ]
      },
      {
        "type": "h2",
        "text": "How to open and use Jane (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Click Ask Jane in the sidebar or press ⌘J / Ctrl+J.",
          "The panel slides in from the right — drag the left edge to resize (width is saved in your browser).",
          "Start a new chat or pick a recent session from the session list.",
          "Type a question or click a suggestion chip (for example, *GCP ETL pipeline*, *Review pipeline*).",
          "Press Send or Enter.",
          "Read Jane's reply — actions may include:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Terraform JSON or canvas patch → Open in designer / apply to canvas",
          "Pipeline review scores and recommendations",
          "Deploy agent job status (Jane Drive flows)",
          "Policy draft suggestions"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Press Escape or click the backdrop to close the panel."
        ]
      },
      {
        "type": "h2",
        "text": "Jane intents (how messages are routed)"
      },
      {
        "type": "p",
        "text": "Jane classifies your message and routes to specialized handlers:"
      },
      {
        "type": "table",
        "headers": [
          "Intent",
          "Example prompts",
          "What Jane does"
        ],
        "rows": [
          [
            "Build (`build_pipeline`)",
            "*\"Build a GCP ETL pipeline with Pub/Sub\"*, *\"Create an AWS Lambda API\"*",
            "Generates Terraform / canvas patches; offers open-in-designer"
          ],
          [
            "Review (`review_pipeline`)",
            "*\"Review my pipeline for issues\"*, *\"Well-architected assessment\"*",
            "Scores cost, security, reliability, scalability (needs pipeline context)"
          ],
          [
            "Deploy analysis (`analyze_deployment`)",
            "*\"Why did my deployment fail?\"*, *\"Analyze deployment root cause\"*",
            "Explains failure using deployment id when available"
          ],
          [
            "Cost (`optimize_cost`)",
            "*\"Reduce cloud spend\"*, *\"Cost optimization ideas\"*",
            "FinOps-style suggestions; links to cost cards"
          ],
          [
            "General (`general`)",
            "Open-ended cloud/Terraform questions",
            "Conversational answer without a specialized tool"
          ],
          [
            "Drift (`explain_drift`)",
            "*\"Explain configuration drift\"*",
            "Summarizes open drift for the pipeline"
          ],
          [
            "Infra operations (`infra_operations`)",
            "*\"Summarize recent deployment history\"*",
            "Operational digest from deployment records"
          ],
          [
            "Deploy agent (`deploy_agent`)",
            "*\"Jane Drive: deploy RDS with read replica\"*",
            "Autonomous multi-step deploy advisor (async job)"
          ],
          [
            "Policy (`policy_generate`)",
            "*\"Create a compliance policy for S3\"*",
            "Drafts policy text for Compliance"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Jane picks intent from keywords and page context (`pipelineId`, `deploymentId`, onboarding page)."
      },
      {
        "type": "h2",
        "text": "Designer toolbar shortcuts"
      },
      {
        "type": "p",
        "text": "When a pipeline is open in the designer:"
      },
      {
        "type": "table",
        "headers": [
          "Button",
          "Jane feature"
        ],
        "rows": [
          [
            "Review",
            "Opens Architecture review sheet — Well-Architected scoring"
          ],
          [
            "Security",
            "Pre-deploy security posture scan"
          ],
          [
            "Migrate",
            "Migration guidance between cloud shapes"
          ]
        ]
      },
      {
        "type": "p",
        "text": "These complement the chat panel for focused workflows."
      },
      {
        "type": "h2",
        "text": "Sessions and history"
      },
      {
        "type": "list",
        "items": [
          "Sessions are stored server-side (`/api/v1/jane-ai/sessions`).",
          "When you open Jane from a pipeline, sessions can filter by `pipelineId`.",
          "Session titles default from the first message; age badges show recency (`5m`, `2h`, etc.).",
          "Starting a new chat does not delete old sessions."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Be specific: provider, region, and workload type (*\"AWS three-tier web app in us-east-1\"*).",
          "After Jane generates Terraform, use Open in designer and Save before deploy.",
          "For failures, paste the error snippet or open logs first — then ask *\"Why did deploy fail?\"*",
          "Use Review before production Apply; use cost intents before scheduling Scheduler jobs.",
          "Resize the panel for long Terraform output; width persists across visits."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Panel does not open",
            "Refresh; check you are signed in; try sidebar Ask Jane"
          ],
          [
            "Review says no pipeline",
            "Open a saved pipeline in the designer first"
          ],
          [
            "Build did not update canvas",
            "Click Apply to canvas / open designer handoff; then Save"
          ],
          [
            "Generic answers only",
            "Rephrase with build/review/cost keywords from the intents table"
          ],
          [
            "Deploy agent stuck",
            "Check job status in the thread; see Observability logs"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · Pipeline Deployment · Cost Reporting · Architecture & Design · Observability · Jane Policy Generator"
      }
    ]
  },
  {
    "id": "jane-policy-generator",
    "section": "Jane — AI Assistant",
    "title": "Jane Policy Generator",
    "intro": "This guide explains how to use Jane Policy Generator on the Compliance page to turn plain-language requirements into enforceable compliance rules.",
    "content": [
      {
        "type": "p",
        "text": "Where: Compliance in the sidebar (Operations) → Jane Policy Generator card."
      },
      {
        "type": "p",
        "text": "Who: Organization administrators and users with compliance edit access."
      },
      {
        "type": "h2",
        "text": "What Jane Policy Generator does"
      },
      {
        "type": "p",
        "text": "Instead of building rules manually in the policy builder, you describe what you want in everyday language. Jane converts your description into a draft policy with:"
      },
      {
        "type": "list",
        "items": [
          "A suggested name and description",
          "One or more rules (action controls or config checks)",
          "A suggested mode (Audit, Warn, or Enforce)",
          "A cloud provider (AWS, GCP, or Azure)"
        ]
      },
      {
        "type": "p",
        "text": "You review the draft, refine it if needed, then save and enforce it like any other policy."
      },
      {
        "type": "h2",
        "text": "Before you begin"
      },
      {
        "type": "steps",
        "items": [
          "Open Compliance from the sidebar.",
          "Confirm you have permission to create or edit policies (typically an administrator).",
          "Think about the rule in concrete terms — what should be blocked, warned, or logged?"
        ]
      },
      {
        "type": "p",
        "text": "See Cost & Compliance for how compliance modes work."
      },
      {
        "type": "h2",
        "text": "How to generate a policy from natural language"
      },
      {
        "type": "steps",
        "items": [
          "Go to Compliance.",
          "Find the Generate policy from natural language card (Jane Policy Generator).",
          "In the text area, describe the rule you need. Examples:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Deny security groups that allow SSH from anywhere\"*",
          "*\"Require encryption on all S3 buckets\"*",
          "*\"Block public RDS instances in production sandboxes\"*",
          "*\"Deny public S3 buckets in production sandboxes\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Generate draft.",
          "Wait while Jane processes your request.",
          "Review the draft summary:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Policy name and description",
          "Number of rules generated",
          "Suggested mode and provider"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Open in policy builder to refine the draft.",
          "Adjust rules, name, or description in the policy builder.",
          "Click Save.",
          "Enforce the policy on the scopes you need (organization, workspace, or sandbox)."
        ]
      },
      {
        "type": "h2",
        "text": "How to refine a Jane-generated draft"
      },
      {
        "type": "p",
        "text": "Jane's output is a starting point — always review before enforcing on production."
      },
      {
        "type": "steps",
        "items": [
          "After clicking Open in policy builder, check each rule:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Action control rules — block or allow specific cloud actions (for example, open ingress on port 22).",
          "Config check rules — require settings such as encryption enabled or public access disabled."
        ]
      },
      {
        "type": "steps",
        "items": [
          "Rename the policy if Jane's title is too generic.",
          "Add or remove rules to match your organization's standards.",
          "Save the policy.",
          "Run Validate against staging sandboxes before switching to Enforce."
        ]
      },
      {
        "type": "h2",
        "text": "Example prompts that work well"
      },
      {
        "type": "table",
        "headers": [
          "Goal",
          "Example prompt"
        ],
        "rows": [
          [
            "Network security",
            "*\"Deny security groups with 0.0.0.0/0 on port 22\"*"
          ],
          [
            "Storage",
            "*\"Require encryption on all S3 buckets\"*"
          ],
          [
            "Databases",
            "*\"Block RDS instances that are publicly accessible\"*"
          ],
          [
            "Scope-specific",
            "*\"Deny public load balancers in production sandboxes only\"*"
          ],
          [
            "Tagging",
            "*\"Require cost-center tag on all EC2 instances\"*"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Be specific about the resource type, the setting, and whether the rule applies everywhere or only in certain environments."
      },
      {
        "type": "h2",
        "text": "What happens after you enforce"
      },
      {
        "type": "table",
        "headers": [
          "Mode",
          "When a pipeline breaks the rule"
        ],
        "rows": [
          [
            "Audit",
            "Violation is logged; Apply is not blocked"
          ],
          [
            "Warn",
            "You see a warning; Apply is not blocked"
          ],
          [
            "Enforce",
            "Apply is blocked until you fix the pipeline"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Plan is never blocked — only Apply."
      },
      {
        "type": "p",
        "text": "If Apply is blocked, read the violation list, fix settings in the Pipeline Designer, save, and try again."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Start in Audit mode — see how often the rule would fire before enforcing on production.",
          "Be specific in prompts — mention resource types (S3, RDS, security group) and the exact misconfiguration.",
          "Combine with manual rules — use Jane for the first draft, then add edge cases in the policy builder.",
          "Validate before Enforce — run validation against representative sandboxes.",
          "Do not paste secrets — Jane never needs credentials or access keys."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Generate draft failed or timed out Shorten your prompt and try again. Check your network connection. If the error persists, create the policy manually in the policy builder."
      },
      {
        "type": "p",
        "text": "Generated rules do not match my intent Edit the draft in the policy builder or rephrase your prompt with more detail (resource type, field, allowed values)."
      },
      {
        "type": "p",
        "text": "I do not see Jane Policy Generator You may lack compliance edit permissions, or your plan may not include compliance features. Contact your administrator."
      },
      {
        "type": "p",
        "text": "Apply blocked after enforcing a Jane policy Open the violation details, fix the listed resources in the designer, save, and retry Apply. Ask Jane to explain a specific violation if needed."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Jane — General Jane usage and prompt examples",
          "Cost & Compliance — Policy library, enforce, and reports",
          "RBAC Management — Who can manage policies",
          "Subscription Tiers — Plan features that affect compliance"
        ]
      }
    ]
  },
  {
    "id": "jane-drift-insights",
    "section": "Jane — AI Assistant",
    "title": "Jane Drift Insights",
    "intro": "This guide explains how to use Jane on the Drift Report page to understand drift events, get remediation advice, and apply AI-generated patches to your pipeline.",
    "content": [
      {
        "type": "p",
        "text": "Where: Drift Detection (Drift Report) in the sidebar — `/drift-report`."
      },
      {
        "type": "p",
        "text": "Requires: `enable_deployed_resources` on your subscription plan (Pro and above for most organizations)."
      },
      {
        "type": "p",
        "text": "See Cloud Sync & Drift for drift basics — this guide focuses on Jane-specific tools."
      },
      {
        "type": "h2",
        "text": "What Jane offers on Drift Report"
      },
      {
        "type": "table",
        "headers": [
          "Feature",
          "What it does"
        ],
        "rows": [
          [
            "Explain with Jane (pipeline-level)",
            "Plain-language summary of open drift on a pipeline"
          ],
          [
            "Jane drift analysis card",
            "Summary, why it matters, and numbered remediation steps"
          ],
          [
            "Jane recommendation (resolve dialog)",
            "Suggested action and confidence when resolving from cloud"
          ],
          [
            "Jane Remediation panel",
            "AI-generated patches you can apply directly to the canvas"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Jane uses the drift event context — pipeline, resource, expected vs live values — so you get answers without reading raw field diffs."
      },
      {
        "type": "h2",
        "text": "How to explain drift with Jane (pipeline level)"
      },
      {
        "type": "p",
        "text": "Use this when a pipeline has one or more open drift events and you want an overview."
      },
      {
        "type": "steps",
        "items": [
          "Open Drift Detection from the sidebar.",
          "Find the pipeline with drift and expand its row.",
          "Locate the Jane drift analysis card.",
          "Click Analyze (or the analyze action on the card).",
          "Wait while Jane processes the open drift events.",
          "Read the results:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Summary — what changed in plain language",
          "Why it matters — security, cost, or reliability impact",
          "Remediation steps — numbered list of suggested next actions"
        ]
      },
      {
        "type": "p",
        "text": "If analysis already ran, the card shows the cached explanation until you refresh or new drift appears."
      },
      {
        "type": "h2",
        "text": "How to explain a single drift event"
      },
      {
        "type": "steps",
        "items": [
          "On Drift Detection, expand the pipeline.",
          "Click an individual drift event to open the detail panel.",
          "Review the field-level diff (expected vs live values).",
          "Open Jane (⌘J / Ctrl+J) and ask, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Explain this drift event\"*",
          "*\"Why is my EC2 instance size different from the pipeline?\"*",
          "*\"Is this drift a security risk?\"*"
        ]
      },
      {
        "type": "p",
        "text": "Jane uses the page context when you are viewing a specific event."
      },
      {
        "type": "p",
        "text": "You can also use Explain with Jane from My Pipelines on pipelines that show a drift badge."
      },
      {
        "type": "h2",
        "text": "How to get Jane remediation advice"
      },
      {
        "type": "p",
        "text": "When you are ready to fix drift, Jane can recommend a path forward."
      },
      {
        "type": "h3",
        "text": "From the resolve dialog"
      },
      {
        "type": "steps",
        "items": [
          "Open a drift event on Drift Detection.",
          "Click Resolve from Cloud (or the action that updates the pipeline from live values).",
          "In the confirmation dialog, wait for Jane is evaluating remediation… to finish.",
          "Read the Jane recommendation box:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Summary of the situation",
          "Recommended action (for example, update pipeline and re-apply, or accept live change)",
          "Confidence level"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Decide whether to proceed with Update pipeline config or cancel and fix manually."
        ]
      },
      {
        "type": "h3",
        "text": "From the drift detail panel"
      },
      {
        "type": "steps",
        "items": [
          "Expand a drift event to open the detail panel.",
          "Scroll to the Jane Remediation section.",
          "Click Remediate with AI.",
          "Jane generates a summary and one or more patches with rationale for each change."
        ]
      },
      {
        "type": "h2",
        "text": "How to apply Jane patches to the canvas"
      },
      {
        "type": "p",
        "text": "Patches update your pipeline design — review them before applying, especially in production."
      },
      {
        "type": "steps",
        "items": [
          "After clicking Remediate with AI, read each patch:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Resource / instance name",
          "Rationale — why Jane suggests this change"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Apply to canvas.",
          "InfraGlide applies the patch to the open pipeline in the designer context.",
          "Open the Pipeline Designer and verify the Properties panel shows the updated values.",
          "Save the pipeline.",
          "Run Plan, review the plan, then Apply if you are restoring desired state (not accepting live drift)."
        ]
      },
      {
        "type": "warning",
        "text": "Applying a patch changes your saved design. It does not deploy automatically — you still run Plan and Apply."
      },
      {
        "type": "h2",
        "text": "Typical workflows"
      },
      {
        "type": "h3",
        "text": "Understand before you fix"
      },
      {
        "type": "steps",
        "items": [
          "Drift Detection → expand pipeline → Analyze on Jane drift analysis card.",
          "Read remediation steps.",
          "Open the event detail → Remediate with AI if you want a concrete patch.",
          "Apply patch, save, Plan, Apply — or use Resolve from Cloud if the live change was intentional."
        ]
      },
      {
        "type": "h3",
        "text": "Security-related drift"
      },
      {
        "type": "steps",
        "items": [
          "Explain drift with Jane first — confirm whether open ingress or disabled encryption is involved.",
          "If the live change was not intentional, fix the pipeline and Apply (do not resolve from cloud).",
          "If intentional, resolve from cloud and document the change for your team."
        ]
      },
      {
        "type": "h3",
        "text": "Weekly review"
      },
      {
        "type": "steps",
        "items": [
          "Check all on Drift Detection.",
          "For each critical or high severity event, run Jane analysis.",
          "Acknowledge or resolve events after fixing or accepting changes."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Review every patch — Jane suggestions are drafts, not automatic fixes.",
          "Use Explain before Remediate — understand *why* drift happened before changing the pipeline.",
          "Resolve from Cloud carefully — it overwrites your saved config with live values.",
          "Save after applying patches — unsaved canvas changes are not deployed.",
          "Re-run drift check after Apply to confirm the event clears."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Jane drift analysis button does nothing Ensure the pipeline has open drift events and your plan includes deployed-resources features. Refresh the page and try again."
      },
      {
        "type": "p",
        "text": "Remediation failed The pipeline may be missing context Jane needs. Open the pipeline in the designer, save it, and retry. Check that the drift event still exists."
      },
      {
        "type": "p",
        "text": "Apply to canvas did not change my pipeline Open the designer for that pipeline, confirm you are on the correct version, and check the Properties panel. Save explicitly after applying."
      },
      {
        "type": "p",
        "text": "I do not see Drift Detection in the sidebar Your plan may not include `enable_deployed_resources`. See Subscription Tiers."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Cloud Sync & Drift — Drift checks, acknowledge, resolve",
          "Jane — Opening Jane and general prompts",
          "Pipelines & Automation — Plan and Apply after fixes",
          "Cost & Compliance — Drift can cause compliance violations"
        ]
      }
    ]
  },
  {
    "id": "templates-and-projects",
    "section": "Templates & Projects",
    "title": "Templates & Projects",
    "intro": "This guide explains how InfraGlide organizes your work — workspaces, sandboxes, and pipelines — and how to use templates and the Hub to start faster.",
    "content": [
      {
        "type": "h2",
        "text": "How your work is organized"
      },
      {
        "type": "p",
        "text": "Think of InfraGlide in four levels:"
      },
      {
        "type": "code",
        "lang": "text",
        "lines": [
          "Your organization",
          " └── Workspace        (e.g. \"Platform Engineering\")",
          "      └── Sandbox     (e.g. \"dev\", \"staging\", \"prod\")",
          "           └── Pipeline   (e.g. \"web-app-stack\")",
          "                └── Deployment  (each plan/apply/destroy run)"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Level",
          "What it is",
          "Example"
        ],
        "rows": [
          [
            "Organization",
            "Your company or team account",
            "Acme Corp"
          ],
          [
            "Workspace",
            "A division or team area",
            "Platform Engineering"
          ],
          [
            "Sandbox",
            "An environment inside a workspace",
            "dev, staging, prod"
          ],
          [
            "Pipeline",
            "One saved infrastructure design",
            "api-backend-v2"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Every pipeline lives in exactly one sandbox. Every sandbox lives in exactly one workspace."
      },
      {
        "type": "h2",
        "text": "How to select your workspace and sandbox"
      },
      {
        "type": "p",
        "text": "The dropdowns in the header bar control what you see across the app."
      },
      {
        "type": "steps",
        "items": [
          "Click Workspace → choose the team or area you work in.",
          "Click Sandbox → choose the environment (dev, staging, prod, etc.)."
        ]
      },
      {
        "type": "p",
        "text": "My Pipelines, Deployed Resources, Drift Detection, and many other pages show data for your current selection. Check these before creating or opening a pipeline."
      },
      {
        "type": "p",
        "text": "If you have no workspaces listed, contact your administrator — you need an invitation with access."
      },
      {
        "type": "h2",
        "text": "How to view your pipelines"
      },
      {
        "type": "steps",
        "items": [
          "Select the correct workspace and sandbox in the header.",
          "Open My Pipelines from the sidebar.",
          "You see a list of pipelines with:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Name and version",
          "Cloud provider (AWS, GCP, Azure)",
          "Last deployment status",
          "Drift indicator (if something changed in the cloud)"
        ]
      },
      {
        "type": "h3",
        "text": "How to open a pipeline"
      },
      {
        "type": "p",
        "text": "Click the pipeline name to open it in the Pipeline Designer."
      },
      {
        "type": "h3",
        "text": "How to create a new pipeline"
      },
      {
        "type": "steps",
        "items": [
          "On My Pipelines or Dashboard, click New pipeline.",
          "Enter a name.",
          "Confirm — the designer opens with an empty canvas."
        ]
      },
      {
        "type": "h2",
        "text": "How to work with pipeline versions"
      },
      {
        "type": "p",
        "text": "Pipelines are versioned. Each version is a separate snapshot you can deploy on its own."
      },
      {
        "type": "h3",
        "text": "View version history"
      },
      {
        "type": "steps",
        "items": [
          "On My Pipelines, click the version number on a pipeline row, or",
          "In the designer, use the version switcher in the toolbar."
        ]
      },
      {
        "type": "h3",
        "text": "Create a new version"
      },
      {
        "type": "steps",
        "items": [
          "Open the pipeline in the designer.",
          "Open the version switcher.",
          "Choose Create new version.",
          "Edit and save — the new version does not overwrite the old one."
        ]
      },
      {
        "type": "p",
        "text": "When to create a new version: Before major changes to a pipeline already deployed in production, so you can roll back or compare."
      },
      {
        "type": "h3",
        "text": "Compare versions"
      },
      {
        "type": "p",
        "text": "Use the diff or compare option from the version switcher or My Pipelines to see what changed between versions."
      },
      {
        "type": "h2",
        "text": "How to use a template"
      },
      {
        "type": "p",
        "text": "Templates are ready-made starting points — common patterns like web apps, data pipelines, or Kubernetes clusters."
      },
      {
        "type": "steps",
        "items": [
          "Open Templates from the sidebar.",
          "Filter by AWS, GCP, or Azure if needed.",
          "Browse categories or search.",
          "Click a template to read what it includes.",
          "Click Use template.",
          "Select the sandbox where the new pipeline should live.",
          "Enter a name and confirm.",
          "The Pipeline Designer opens with resources already placed and connected.",
          "Customize settings, save, and deploy when ready."
        ]
      },
      {
        "type": "h2",
        "text": "How to create a custom template with Jane"
      },
      {
        "type": "p",
        "text": "If no built-in template fits:"
      },
      {
        "type": "steps",
        "items": [
          "Go to Templates.",
          "Click Synthesize with Jane.",
          "Describe what you need, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Serverless API on AWS with Lambda and DynamoDB\"*",
          "*\"GCP analytics pipeline with BigQuery\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Jane generates a starting design.",
          "Open it in the designer, adjust, save, and optionally share via Hub."
        ]
      },
      {
        "type": "p",
        "text": "See Jane for more prompt examples."
      },
      {
        "type": "h2",
        "text": "How to use the Hub (pipeline marketplace)"
      },
      {
        "type": "p",
        "text": "Hub lets you browse and publish pipelines within your organization (availability depends on your plan)."
      },
      {
        "type": "h3",
        "text": "Browse published pipelines"
      },
      {
        "type": "steps",
        "items": [
          "Open Hub from the sidebar.",
          "Browse or search published pipelines.",
          "Open one to preview.",
          "Use Subscribe or Use (wording may vary) to add it to your sandbox."
        ]
      },
      {
        "type": "h3",
        "text": "Publish your pipeline"
      },
      {
        "type": "steps",
        "items": [
          "Finish and test your pipeline.",
          "From Hub or the pipeline actions menu, choose Publish.",
          "Publishing may take a few minutes — you receive a notification when it completes, even if you leave the Hub page."
        ]
      },
      {
        "type": "h2",
        "text": "How to generate architecture documents (HLD / LLD)"
      },
      {
        "type": "p",
        "text": "If your plan includes architecture documents:"
      },
      {
        "type": "steps",
        "items": [
          "Open Architecture & design from the sidebar, or",
          "From the Pipeline Designer, use the document generation option in the toolbar."
        ]
      },
      {
        "type": "table",
        "headers": [
          "Document",
          "Purpose"
        ],
        "rows": [
          [
            "HLD (High-Level Design)",
            "Big-picture view — major components and flows"
          ],
          [
            "LLD (Low-Level Design)",
            "Detailed specs — settings and dependencies"
          ]
        ]
      },
      {
        "type": "p",
        "text": "You can also open saved documents from HLD View or LLD View links when available."
      },
      {
        "type": "h2",
        "text": "How to convert external templates"
      },
      {
        "type": "p",
        "text": "If you have CloudFormation or other template formats:"
      },
      {
        "type": "steps",
        "items": [
          "Open Template Converter from the sidebar.",
          "Paste or upload your template.",
          "Run conversion.",
          "Review the result in the designer.",
          "Fix any resources that did not convert automatically.",
          "Save as a new InfraGlide pipeline."
        ]
      },
      {
        "type": "h2",
        "text": "How to promote a pipeline to another sandbox"
      },
      {
        "type": "p",
        "text": "To move a tested design from dev to staging or prod:"
      },
      {
        "type": "steps",
        "items": [
          "Deploy and validate in the source sandbox (e.g. dev).",
          "Use environment promotion (from pipeline actions or Environments, if enabled for your org).",
          "Select the target sandbox (e.g. staging).",
          "Review copied configuration — update credentials and region for the target environment.",
          "Run Plan, then Apply in the target sandbox."
        ]
      },
      {
        "type": "h2",
        "text": "How to share a sandbox with teammates"
      },
      {
        "type": "p",
        "text": "Administrators or sandbox owners can grant access:"
      },
      {
        "type": "steps",
        "items": [
          "Open sandbox or project settings (or ask your admin to use Manage Users / RBAC Management).",
          "Add users or groups with the right role (Viewer, Editor, Admin).",
          "They will see the workspace and sandbox in their header dropdown."
        ]
      },
      {
        "type": "p",
        "text": "See Security & Access for roles and invitations."
      },
      {
        "type": "h2",
        "text": "Suggested ways to organize workspaces and sandboxes"
      },
      {
        "type": "h3",
        "text": "Workspaces (by team or domain)"
      },
      {
        "type": "list",
        "items": [
          "Platform Engineering",
          "Data & Analytics",
          "Security"
        ]
      },
      {
        "type": "h3",
        "text": "Sandboxes (by environment)"
      },
      {
        "type": "list",
        "items": [
          "dev",
          "staging",
          "prod"
        ]
      },
      {
        "type": "p",
        "text": "Or by region: `us-east-1-dev`, `eu-west-1-prod`."
      },
      {
        "type": "p",
        "text": "Use separate sandboxes for production — never deploy prod from a shared dev sandbox."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Always check workspace and sandbox in the header before creating a pipeline.",
          "Use templates for common patterns — customize instead of starting empty.",
          "New version for each release — do not edit old production versions in place.",
          "Publish to Hub when a pattern is stable — help your team reuse it."
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Getting Started — First workspace and pipeline",
          "Visual Canvas — Edit after using a template",
          "Pipelines & Automation — Deploy and automate",
          "Security & Access — Who can access which workspace"
        ]
      }
    ]
  },
  {
    "id": "templates",
    "section": "Templates & Projects",
    "title": "Templates",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Templates (Blueprint Library) provides curated starting points for common infrastructure patterns on AWS, GCP, and Azure. Using a template creates a new pipeline with components and connections pre-placed on the canvas."
      },
      {
        "type": "p",
        "text": "Route: `/templates` (also `/blueprint-library` redirects here)"
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with My Pipelines access (typically all editors and viewers in the sandbox). Creating a pipeline from a template requires Editor role."
      },
      {
        "type": "h2",
        "text": "How to browse templates"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header.",
          "Open Templates from the sidebar.",
          "Filter by cloud provider tab: AWS, GCP, or Azure.",
          "Browse categories or scroll the library.",
          "Click a template card to read its description and included resources."
        ]
      },
      {
        "type": "h2",
        "text": "How to create a pipeline from a template"
      },
      {
        "type": "steps",
        "items": [
          "On a template card, click Use template (or equivalent).",
          "Confirm or edit the pipeline name.",
          "Confirm the target sandbox (uses current header selection).",
          "InfraGlide creates the pipeline and opens the Pipeline Designer.",
          "Review components, adjust Properties, Save, then deploy when ready."
        ]
      },
      {
        "type": "p",
        "text": "See Pipeline Designer and Pipeline Deployment."
      },
      {
        "type": "h2",
        "text": "How to customize after using a template"
      },
      {
        "type": "p",
        "text": "Templates set sensible defaults — you must still:"
      },
      {
        "type": "list",
        "items": [
          "Fill in account-specific values (regions, names, sizes, credentials context)",
          "Connect or adjust resources for your architecture",
          "Select the correct credential at deploy time"
        ]
      },
      {
        "type": "p",
        "text": "Never deploy a template to production without review."
      },
      {
        "type": "h2",
        "text": "How to generate a custom template with Jane"
      },
      {
        "type": "steps",
        "items": [
          "On Templates, click Synthesize with Jane.",
          "Describe the architecture in plain language.",
          "Jane generates a blueprint → opens in the designer.",
          "Save as your own pipeline; optionally Hub Publish for your team."
        ]
      },
      {
        "type": "p",
        "text": "See Jane AI Assistant."
      },
      {
        "type": "h2",
        "text": "Templates vs other import methods"
      },
      {
        "type": "table",
        "headers": [
          "Method",
          "Best for"
        ],
        "rows": [
          [
            "Templates",
            "InfraGlide-curated patterns"
          ],
          [
            "Terraform Import",
            "Existing `.tf` / `.tf.json` — terraform-import.md"
          ],
          [
            "Import as Pipeline",
            "InfraGlide pipeline JSON export — import-as-pipeline.md"
          ],
          [
            "Template Converter",
            "CloudFormation etc. — template-converter.md"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Start from the closest template — customize rather than building from scratch.",
          "Plan before Apply after customizing.",
          "Save as new version before major changes to a template-based prod pipeline.",
          "Share stable patterns via Hub."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Use template disabled — Check Editor role and sandbox selection."
      },
      {
        "type": "p",
        "text": "Missing resources after use — Some template fields need manual completion in Properties panel."
      },
      {
        "type": "p",
        "text": "Wrong provider — Filter templates tab; pipeline provider follows template choice."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · My Pipelines · Hub · Jane AI Assistant"
      }
    ]
  },
  {
    "id": "hub",
    "section": "Templates & Projects",
    "title": "Hub",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Hub (Pipeline Hub) is where you browse pipelines in your sandbox, inspect version history, and see GitHub publish status for each version. From here, editors can kick off bulk publishes to your connected GitHub workflow."
      },
      {
        "type": "p",
        "text": "Route: `/hub`"
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "Sidebar → Hub",
          "Settings → quick link Browse Hub"
        ]
      },
      {
        "type": "p",
        "text": "Community/shared templates are also served via the Hub APIs (`GET /api/hub/pipelines`) for marketplace-style browsing; the `/hub` UI focuses on your organization's pipelines in the selected sandbox."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Users with Hub module view access can browse the list",
          "Edit permission on Hub is required to select versions and click Publish Pipeline",
          "Subscription feature `enable_hub_browse` must be enabled (otherwise you see an upgrade card)",
          "Publishing itself also requires `enable_hub_publish` — see Hub Publish"
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header.",
          "Have pipelines saved in that sandbox (with at least one version).",
          "For publishing: GitHub integration configured by your administrator and Hub edit permission."
        ]
      },
      {
        "type": "h2",
        "text": "How to browse pipelines (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Open Hub at `/hub`.",
          "Confirm the sandbox in the header — the subtitle shows pipeline count.",
          "Use search to filter by name, description, or date.",
          "Click provider chips (Total, AWS, Azure, GCP) to filter by cloud.",
          "Sort columns by name, provider, description, or created at (click column headers).",
          "Expand a pipeline row (chevron) to see all versions."
        ]
      },
      {
        "type": "h2",
        "text": "Publish status icons (per version)"
      },
      {
        "type": "p",
        "text": "When a row is expanded, each version shows a status icon:"
      },
      {
        "type": "table",
        "headers": [
          "Icon",
          "Meaning"
        ],
        "rows": [
          [
            "Green check",
            "Up to date — published to GitHub, no unsaved changes since publish"
          ],
          [
            "Orange alert",
            "Modified — published before, but canvas changed since last publish"
          ],
          [
            "Red X",
            "Not published — never published to GitHub"
          ],
          [
            "Spinning loader",
            "Publishing in progress — async job running"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How pagination and versions work"
      },
      {
        "type": "list",
        "items": [
          "The table groups pipelines by name; the main row shows the latest version metadata.",
          "Expanding reveals older versions with checkboxes for bulk publish.",
          "Pagination shows 10 pipeline groups per page."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Expand rows before publishing — you publish specific versions, not just the pipeline name.",
          "Resolve orange alert states by republishing after you save intentional changes.",
          "Use Hub for team visibility; use Templates for InfraGlide-curated starters.",
          "Designers can also publish a single version via Hub Publish (PublishPipelineModal)."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Upgrade card on `/hub`",
            "Enable `enable_hub_browse` on your plan"
          ],
          [
            "Select a sandbox empty state",
            "Choose Workspace and Sandbox in the header"
          ],
          [
            "No pipelines listed",
            "Create pipelines in My Pipelines"
          ],
          [
            "Cannot check versions",
            "You need Hub edit permission; versions already synced or publishing may be disabled"
          ],
          [
            "Publish button disabled",
            "Select at least one eligible version checkbox"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Hub Publish · My Pipelines · Templates · Pipeline Designer · Subscription Tiers"
      }
    ]
  },
  {
    "id": "hub-publish",
    "section": "Templates & Projects",
    "title": "Hub Publish",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Hub Publish pushes pipeline versions to GitHub (and the community Hub catalog) so teammates can reuse vetted infrastructure patterns. InfraGlide supports two publish flows:"
      },
      {
        "type": "steps",
        "items": [
          "Hub page bulk publish — select multiple versions on `/hub` and publish asynchronously",
          "PublishPipelineModal — publish one pipeline version from the Pipeline Designer with description, tags, and repo details"
        ]
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Flow",
          "Location"
        ],
        "rows": [
          [
            "Bulk publish",
            "`/hub` → select version checkboxes → Publish Pipeline"
          ],
          [
            "Designer modal",
            "Pipeline Designer toolbar → Publish → Publish Pipeline to Hub dialog"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Hub module edit permission (bulk flow)",
          "`enable_hub_publish` subscription feature (API `POST /api/hub/publish` for designer modal)",
          "`enable_hub_browse` to access `/hub` at all — see Hub",
          "Designer Publish may also check `enable_pipeline_publish` on some plans"
        ]
      },
      {
        "type": "h2",
        "text": "Before you publish"
      },
      {
        "type": "steps",
        "items": [
          "Save the pipeline version you intend to publish.",
          "Confirm the version is tested (Plan/Apply in dev/staging).",
          "Have a GitHub repository slug ready (`username/repository-name`) for the designer modal flow.",
          "Write a clear description and tags so others can discover the pipeline."
        ]
      },
      {
        "type": "h2",
        "text": "How to bulk publish from Hub (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Open Hub at `/hub`.",
          "Select Workspace and Sandbox.",
          "Expand a pipeline row to show versions.",
          "Check the box for each version you want to publish."
        ]
      },
      {
        "type": "list",
        "items": [
          "Checkboxes are disabled when a version is already up to date, is publishing, or you lack edit permission."
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Publish Pipeline in the header.",
          "InfraGlide calls `POST /api/publish/initiate` — publishing runs asynchronously.",
          "Watch version rows for the spinner icon while publishing.",
          "When complete, status icons update (green check = synced to GitHub).",
          "Check the notification bell for success or failure toasts when jobs finish."
        ]
      },
      {
        "type": "p",
        "text": "You can continue working while publish jobs run in the background."
      },
      {
        "type": "h2",
        "text": "How to publish from Pipeline Designer (PublishPipelineModal)"
      },
      {
        "type": "steps",
        "items": [
          "Open the pipeline in the Pipeline Designer.",
          "Click Publish in the toolbar (upgrade prompt if your plan lacks publish).",
          "In Publish Pipeline to Hub:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Select Pipeline Version — pick from all versions of the current pipeline (latest badge shown)",
          "Review the version preview card (provider, region, component counts, version notes)",
          "GitHub Repository — enter `username/repository-name` (required)",
          "Description — explain use cases and prerequisites (required)",
          "Tags — comma-separated discovery tags (optional)"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Publish to GitHub Hub.",
          "On success, a toast confirms publication; the Hub catalog query refreshes."
        ]
      },
      {
        "type": "p",
        "text": "API: `POST /api/hub/publish` with `pipelineId`, `description`, `tags`, `githubRepo`, and `version`."
      },
      {
        "type": "h2",
        "text": "Publish status reference"
      },
      {
        "type": "table",
        "headers": [
          "State",
          "Meaning",
          "Next step"
        ],
        "rows": [
          [
            "Publishing (spinner)",
            "Job in flight",
            "Wait; do not republish same version"
          ],
          [
            "Up to date (green)",
            "GitHub matches saved version",
            "No action unless you change the canvas"
          ],
          [
            "Modified (orange)",
            "Local changes since last publish",
            "Save → republish when ready"
          ],
          [
            "Not published (red)",
            "Never published",
            "Select and publish"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Notifications and async behavior"
      },
      {
        "type": "list",
        "items": [
          "Bulk publish uses session-based background uploads — Redux tracks `publishing` → `completed` / `failed` per session.",
          "The UI clears selection immediately after initiate so you can queue other work.",
          "Failed publishes show a destructive toast — fix GitHub permissions or repo path and retry.",
          "Designer modal publish is synchronous from the user's perspective (single API call) but still pushes to GitHub asynchronously on the server."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Publish immutable versions — bump version in the designer before publishing breaking changes.",
          "Use consistent tags (`web-app`, `data-platform`, `prod-ready`) across your org.",
          "Keep version notes filled in the designer — they appear in the modal preview.",
          "After publish, point teammates to Hub or clone from GitHub into a new pipeline."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Publish Pipeline disabled",
            "Select versions; confirm Hub edit permission and sandbox selected"
          ],
          [
            "Missing Information toast (modal)",
            "Fill version, description, and GitHub repo"
          ],
          [
            "Publish Failed",
            "Verify `enable_hub_publish`; check GitHub token and repo access"
          ],
          [
            "Checkbox disabled on version",
            "Already synced, publish in progress, or no edit permission"
          ],
          [
            "Orange status after edit",
            "Expected — republish when changes are intentional"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Hub · Pipeline Designer · My Pipelines · Templates · Subscription Tiers"
      }
    ]
  },
  {
    "id": "pipelines-and-automation",
    "section": "Pipelines & Automation",
    "title": "Pipelines & Automation",
    "intro": "This guide explains how to deploy infrastructure from your pipeline, manage versions, schedule recurring runs, and orchestrate multiple pipelines together.",
    "content": [
      {
        "type": "h2",
        "text": "Before you deploy"
      },
      {
        "type": "steps",
        "items": [
          "Save your pipeline in the designer (`Save` button or `Ctrl+S` / `Cmd+S`).",
          "Confirm the correct workspace and sandbox in the header.",
          "Ensure you have a working credential for the target cloud account.",
          "On production sandboxes, run Plan before Apply."
        ]
      },
      {
        "type": "h2",
        "text": "How to deploy a pipeline"
      },
      {
        "type": "steps",
        "items": [
          "Open your pipeline in the Pipeline Designer.",
          "Click Deploy in the toolbar.",
          "In the deploy dialog:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Select your credential",
          "Select region",
          "Choose Plan, Apply, or Destroy"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Confirm and start.",
          "Watch the console at the bottom for progress.",
          "Wait for the status to finish — you can leave the page; InfraGlide notifies you when done."
        ]
      },
      {
        "type": "p",
        "text": "You can also check status on My Pipelines (status badge) or Observability → Deployment Logs."
      },
      {
        "type": "h2",
        "text": "How to run a plan (preview only)"
      },
      {
        "type": "p",
        "text": "A plan shows what would change without modifying anything in the cloud."
      },
      {
        "type": "steps",
        "items": [
          "Click Deploy.",
          "Select credential and region.",
          "Choose Plan.",
          "Start and read the console output.",
          "When status shows Planned, review what would be created, updated, or destroyed."
        ]
      },
      {
        "type": "p",
        "text": "When to use Plan: Always before Apply on staging and production. Safe to run anytime."
      },
      {
        "type": "note",
        "text": "Ask Jane: *\"Summarize this plan in plain English.\"*"
      },
      {
        "type": "h2",
        "text": "How to apply (create or update resources)"
      },
      {
        "type": "steps",
        "items": [
          "Click Deploy.",
          "Select credential and region.",
          "Choose Apply.",
          "Confirm.",
          "Wait until status shows Success, Partial success, or Failed."
        ]
      },
      {
        "type": "p",
        "text": "If your organization uses compliance enforcement, apply may be blocked until policy violations are fixed. Read the error message, fix the pipeline or contact your admin, then try again."
      },
      {
        "type": "h2",
        "text": "How to destroy resources"
      },
      {
        "type": "p",
        "text": "Destroy removes all cloud resources managed by this pipeline version."
      },
      {
        "type": "steps",
        "items": [
          "Click Deploy.",
          "Select credential and region.",
          "Choose Destroy.",
          "Read the confirmation carefully — this deletes real resources.",
          "Confirm only if you intend to remove everything."
        ]
      },
      {
        "type": "p",
        "text": "Destroy is never automatic after a failed deploy or config change. You must always confirm explicitly."
      },
      {
        "type": "h2",
        "text": "Understanding deployment status"
      },
      {
        "type": "table",
        "headers": [
          "Status",
          "What it means",
          "What you should do"
        ],
        "rows": [
          [
            "Pending / Running",
            "Deploy in progress",
            "Wait; check console or Observability"
          ],
          [
            "Planned",
            "Plan finished; nothing changed in cloud",
            "Review output; apply if OK"
          ],
          [
            "Success",
            "All resources created or updated",
            "Check Deployed Resources"
          ],
          [
            "Partial success",
            "Some resources created, then an error",
            "Read logs, fix config, apply again — existing resources stay"
          ],
          [
            "Failed",
            "Nothing was successfully applied",
            "Fix configuration and retry"
          ],
          [
            "Destroying / Destroyed",
            "Resources being or already removed",
            "Verify in cloud console if needed"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "If you see \"Partial success\""
      },
      {
        "type": "p",
        "text": "InfraGlide does not automatically delete resources that were already created. That protects working infrastructure."
      },
      {
        "type": "steps",
        "items": [
          "Open deployment logs (designer console or Observability).",
          "Fix the configuration issue.",
          "Run Apply again — Terraform continues from where it stopped."
        ]
      },
      {
        "type": "p",
        "text": "Ask Jane: *\"Why did my deployment fail?\"* for a plain-language explanation."
      },
      {
        "type": "h2",
        "text": "How to create a new pipeline version"
      },
      {
        "type": "p",
        "text": "Use a new version when you want to change a deployed pipeline without losing the old snapshot."
      },
      {
        "type": "steps",
        "items": [
          "Open the pipeline in the designer.",
          "Click the version switcher in the toolbar.",
          "Select Create new version.",
          "Make your changes and Save.",
          "Deploy the new version separately."
        ]
      },
      {
        "type": "p",
        "text": "Each version tracks its own deployed resources. Old versions remain until you destroy them explicitly."
      },
      {
        "type": "h2",
        "text": "How to schedule automatic deploys"
      },
      {
        "type": "p",
        "text": "Use Scheduler to run pipelines on a recurring schedule (for example, nightly apply or weekly destroy of test environments)."
      },
      {
        "type": "p",
        "text": "Where: Scheduler in the sidebar (Build & Deploy)."
      },
      {
        "type": "h3",
        "text": "Create a schedule"
      },
      {
        "type": "steps",
        "items": [
          "Open Scheduler.",
          "Click New schedule (or equivalent).",
          "Configure:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Name — something you will recognize later",
          "Target — which pipeline (or topology) to run",
          "Action — Apply or Destroy",
          "Schedule — cron expression (e.g. daily at 2:00 AM)",
          "Credential and region"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Enable the schedule and save."
        ]
      },
      {
        "type": "h3",
        "text": "Manage schedules"
      },
      {
        "type": "list",
        "items": [
          "Edit — change timing or target",
          "Disable — pause without deleting",
          "Delete — remove the schedule permanently"
        ]
      },
      {
        "type": "h3",
        "text": "Example uses"
      },
      {
        "type": "list",
        "items": [
          "Apply dev pipelines every night to pick up config changes",
          "Destroy ephemeral test sandboxes every Friday evening",
          "Run plan-only on production weekly for review (if supported by your workflow)"
        ]
      },
      {
        "type": "h2",
        "text": "How to run multiple pipelines in order (Topology)"
      },
      {
        "type": "p",
        "text": "Topology runs several pipelines one after another based on dependencies — for example, network first, then compute, then database."
      },
      {
        "type": "p",
        "text": "Where: Topology in the sidebar."
      },
      {
        "type": "h3",
        "text": "Create a topology"
      },
      {
        "type": "steps",
        "items": [
          "Open Topology.",
          "Click New topology.",
          "Add pipeline nodes — one for each pipeline in the stack.",
          "Connect them in order: upstream pipelines must finish before downstream ones run.",
          "Save the topology."
        ]
      },
      {
        "type": "h3",
        "text": "Run a topology"
      },
      {
        "type": "steps",
        "items": [
          "Open your topology.",
          "Click Run (or Execute).",
          "InfraGlide runs each pipeline in sequence.",
          "If one pipeline fails, later pipelines are skipped.",
          "View results on the Topology page and under Observability → Topologies."
        ]
      },
      {
        "type": "h3",
        "text": "Example"
      },
      {
        "type": "code",
        "lang": "text",
        "lines": [
          "Network pipeline  →  Security pipeline  →  App pipeline  →  Database pipeline"
        ]
      },
      {
        "type": "h2",
        "text": "How to know when a deploy finishes (without staying on the page)"
      },
      {
        "type": "p",
        "text": "InfraGlide tracks deployments globally:"
      },
      {
        "type": "list",
        "items": [
          "Toast notification when a deploy completes or fails",
          "Status badge updates on My Pipelines",
          "Toolbar badge updates if you return to the designer"
        ]
      },
      {
        "type": "p",
        "text": "Check Observability → Deployment Logs for full history."
      },
      {
        "type": "h2",
        "text": "How compliance affects deploy"
      },
      {
        "type": "p",
        "text": "If your admin enabled Enforce mode on compliance policies:"
      },
      {
        "type": "list",
        "items": [
          "Plan always runs",
          "Apply may be blocked if your pipeline breaks a rule"
        ]
      },
      {
        "type": "p",
        "text": "Fix violations shown in the error, or ask your administrator about policy exceptions. See Cost & Compliance."
      },
      {
        "type": "h2",
        "text": "Tips for safe deployments"
      },
      {
        "type": "steps",
        "items": [
          "Plan first on staging and production.",
          "Use Jane to review before apply: *\"Review my pipeline before production deploy.\"*",
          "New version per release — do not edit an old production version in place.",
          "Separate credentials for dev and prod sandboxes.",
          "Never destroy unless you mean to remove all resources for that version.",
          "Schedule destroys for temporary environments so you do not forget to clean up."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Deploy stuck on \"Running\" Large pipelines take time. Check Observability logs after 30+ minutes. Ask Jane for help interpreting errors."
      },
      {
        "type": "p",
        "text": "Apply blocked by compliance Read the listed violations in the error dialog. Fix settings in the designer or contact your admin."
      },
      {
        "type": "p",
        "text": "Partial success after apply Normal recoverable state. Fix the error and apply again — do not destroy unless you want to remove everything."
      },
      {
        "type": "p",
        "text": "Wrong sandbox deployed Always verify workspace and sandbox in the header before clicking Deploy."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Visual Canvas — Design and save before deploy",
          "Monitoring — Logs and deployment history",
          "Cost & Compliance — Policies that block apply",
          "Jane — Failed deploy analysis and pre-deploy review",
          "Templates & Projects — Versions and sandboxes"
        ]
      }
    ]
  },
  {
    "id": "pipeline-deployment",
    "section": "Pipelines & Automation",
    "title": "Pipeline Deployment",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Pipeline Deployment runs Terraform against your cloud account to plan, apply, or destroy the infrastructure defined in a saved pipeline version."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "Pipeline Designer → Deploy button (toolbar)",
          "My Pipelines → deploy actions on pipeline rows (where available)"
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Editor or Admin on the sandbox. Viewers cannot deploy."
      },
      {
        "type": "p",
        "text": "Requires a credential configured for the target sandbox. See Cloud Credentials."
      },
      {
        "type": "p",
        "text": "Some plans require `enable_pipeline_deploy`."
      },
      {
        "type": "h2",
        "text": "Before you deploy"
      },
      {
        "type": "steps",
        "items": [
          "Save the pipeline in the designer.",
          "Confirm Workspace and Sandbox in the header.",
          "Have a tested credential for the target cloud and region.",
          "On production: run Plan first; review Compliance if policies are enforced."
        ]
      },
      {
        "type": "h2",
        "text": "How to deploy (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Open the pipeline in the Pipeline Designer.",
          "Click Deploy.",
          "In the deploy dialog:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Credential — cloud account to use",
          "Region — target region",
          "Action — Plan, Apply, or Destroy"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Confirm and start.",
          "Watch the Console panel for Terraform output.",
          "Wait for completion — status updates on the toolbar; you may leave the page (see Pipeline Status Watcher)."
        ]
      },
      {
        "type": "h2",
        "text": "Deploy actions explained"
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "What it does",
          "Cloud impact"
        ],
        "rows": [
          [
            "Plan",
            "Preview changes",
            "None — safe anytime"
          ],
          [
            "Apply",
            "Create/update resources",
            "Changes live infrastructure"
          ],
          [
            "Destroy",
            "Remove managed resources",
            "Deletes infrastructure — requires confirmation"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Understanding deployment status"
      },
      {
        "type": "table",
        "headers": [
          "Status",
          "Meaning",
          "Next step"
        ],
        "rows": [
          [
            "Running",
            "In progress",
            "Wait; check Observability if slow"
          ],
          [
            "Planned",
            "Plan done",
            "Review; Apply if OK"
          ],
          [
            "Success",
            "Apply complete",
            "Check Deployed Resources"
          ],
          [
            "Partial success",
            "Some resources created, then error",
            "Read logs; fix; Apply again"
          ],
          [
            "Failed",
            "Apply did not succeed",
            "Fix config; retry"
          ],
          [
            "Destroyed",
            "Destroy complete",
            "Verify in cloud console"
          ]
        ]
      },
      {
        "type": "p",
        "text": "InfraGlide does not auto-delete resources on partial success."
      },
      {
        "type": "h2",
        "text": "How compliance affects deploy"
      },
      {
        "type": "p",
        "text": "If your org uses Enforce mode policies, Apply may be blocked until violations are fixed. Plan is never blocked."
      },
      {
        "type": "p",
        "text": "See Compliance."
      },
      {
        "type": "h2",
        "text": "How to destroy a pipeline's infrastructure"
      },
      {
        "type": "steps",
        "items": [
          "Open the pipeline (the version that was applied).",
          "Deploy → Destroy.",
          "Read the confirmation carefully.",
          "Confirm — wait for Destroyed status."
        ]
      },
      {
        "type": "p",
        "text": "Destroy only removes resources managed by that pipeline version's Terraform state."
      },
      {
        "type": "h2",
        "text": "How to troubleshoot a failed deploy"
      },
      {
        "type": "steps",
        "items": [
          "Read the Console log in the designer, or Observability → Deployment Logs.",
          "Open Jane: *\"Why did my deployment fail?\"* — Jane AI Assistant.",
          "Fix configuration in the designer → Save → Apply again."
        ]
      },
      {
        "type": "h2",
        "text": "How scheduled deploys work"
      },
      {
        "type": "p",
        "text": "Use Scheduler for cron-based Plan/Apply/Destroy."
      },
      {
        "type": "h2",
        "text": "How multi-pipeline deploys work"
      },
      {
        "type": "p",
        "text": "Use Topology to run pipelines in dependency order."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Always Plan before Apply in prod.",
          "Use Jane Deploy advisor and risk badge before apply.",
          "Deploy the correct version — check version switcher.",
          "Use separate credentials for dev vs prod sandboxes."
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · Terraform Generation · Cloud Credentials · Observability · Pipeline Status Watcher"
      }
    ]
  },
  {
    "id": "scheduler",
    "section": "Pipelines & Automation",
    "title": "Scheduler",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Scheduler runs Deploy (Terraform apply) or Destroy on a cron schedule for a single pipeline or an entire topology (multi-pipeline DAG). Use it for recurring refreshes, off-hours rollouts, or timed teardowns."
      },
      {
        "type": "p",
        "text": "Route: `/scheduler`"
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "Sidebar → Scheduler (under Build & Deploy, after Topology)",
          "Cross-links from Topology (`/topology`) when you are ready to schedule saved topologies"
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Users with Scheduler module access and Editor or Admin role on the sandbox",
          "Requires subscription feature `enable_deployed_resources` (same gate as Topology and Deployed Resources)",
          "Viewers cannot create or edit schedules"
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header — schedules are scoped to pipelines and topologies in that sandbox.",
          "Have at least one saved pipeline (latest version) or a saved topology.",
          "For Deploy schedules: confirm the pipeline has a valid credential and region configured.",
          "Run Plan manually from the Pipeline Designer before scheduling Apply in production — the Scheduler does not run Plan-only jobs."
        ]
      },
      {
        "type": "h2",
        "text": "How to create a schedule (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Open Scheduler at `/scheduler`.",
          "Click New schedule.",
          "In the dialog:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Label — optional friendly name (for example, `Weekly prod refresh`)",
          "Target — choose Pipeline or Topology",
          "Pipeline — pick one pipeline from the dropdown (latest versions only)",
          "Topology — pick a topology you created and saved under Topology",
          "Action — Deploy (apply) or Destroy",
          "Schedule — Simple (presets) or Cron (raw expression)",
          "Simple presets: every hour, every 6/12 hours, every day, every week (Monday), every month (1st), or custom interval",
          "Cron mode: enter a standard five-field cron string (for example, `0 2 * * *`)",
          "Enabled — turn on when you are ready for the first run"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Save."
        ]
      },
      {
        "type": "p",
        "text": "The table shows Next run time, Last status, and the linked deployment id when available."
      },
      {
        "type": "h2",
        "text": "How to edit, pause, or delete a schedule"
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "Steps"
        ],
        "rows": [
          [
            "Pause",
            "Toggle the On switch off in the schedule row"
          ],
          [
            "Edit",
            "Click Edit → change target, cron, action, or label → save"
          ],
          [
            "Delete",
            "Click Delete → confirm — the schedule is removed permanently"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Schedule actions explained"
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "What runs",
          "Cloud impact"
        ],
        "rows": [
          [
            "Deploy (apply)",
            "`terraform apply` on the target pipeline, or DAG execution for a topology",
            "Creates or updates live infrastructure"
          ],
          [
            "Destroy",
            "`terraform destroy` on the target",
            "Removes managed resources — use with care"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Plan is not available on the Scheduler. Use the designer Deploy → Plan action to preview changes before enabling a scheduled Deploy."
      },
      {
        "type": "h2",
        "text": "How topology schedules work"
      },
      {
        "type": "p",
        "text": "When the target is a Topology, InfraGlide executes pipelines in the order defined by canvas connections (serial, on success by default). See Topology for building the DAG."
      },
      {
        "type": "p",
        "text": "Monitor topology runs under Observability → Topologies."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Use Simple mode until you need advanced cron; the human-readable summary updates as you edit.",
          "Label schedules clearly (`staging-nightly-apply`, `friday-destroy-sandbox`).",
          "Disable schedules before major pipeline edits, then re-enable after a successful manual Plan/Apply.",
          "Pair scheduled Deploy with Compliance — enforced policies block Apply the same way as manual deploys."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "New schedule button disabled",
            "Create a pipeline or topology in the current sandbox first"
          ],
          [
            "Select a project message",
            "Pick Workspace and Sandbox in the header"
          ],
          [
            "Last status failed",
            "Open Observability → Deployment Logs; fix config and retry manually"
          ],
          [
            "Cron not firing",
            "Confirm schedule is On; check cron syntax in Cron mode"
          ],
          [
            "Topology schedule fails early",
            "Open the topology in `/topology` — ensure all pipelines are saved and connected"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Ask Jane: *\"Summarize my recent scheduled deployment failures.\"* — see Jane AI Assistant."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Deployment · Topology · Observability · Pipeline Designer · Jane AI Assistant"
      }
    ]
  },
  {
    "id": "topology",
    "section": "Pipelines & Automation",
    "title": "Topology",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Topology is a visual DAG designer that chains multiple pipelines so they execute in dependency order — for example, network → compute → application. Save a topology here, then run it on a schedule from Scheduler or monitor runs in Observability."
      },
      {
        "type": "p",
        "text": "Route: `/topology`"
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "Sidebar → Topology (Build & Deploy)",
          "Linked from Scheduler when choosing a topology target"
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Users with Topology module access and Editor or Admin on the sandbox",
          "Requires subscription feature `enable_deployed_resources`",
          "Viewers can open the page if permitted but cannot save graph changes"
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header.",
          "Create and save the pipelines you want to orchestrate — only latest versions appear in the palette.",
          "Understand execution order: connections run serially and proceed on success by default (downstream runs after upstream succeeds)."
        ]
      },
      {
        "type": "h2",
        "text": "How to create a topology (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Open Topology at `/topology`.",
          "Click New topology.",
          "Enter a Name (for example, `Production rollout`) and optional Description.",
          "Click Create topology — the canvas opens."
        ]
      },
      {
        "type": "h2",
        "text": "How to add pipelines to the canvas"
      },
      {
        "type": "steps",
        "items": [
          "In the left panel under Pipelines, search or scroll your sandbox pipelines.",
          "Click a pipeline to add it to the canvas, or drag it onto the canvas.",
          "Repeat for each pipeline in your rollout.",
          "To connect the flow: drag from the bottom handle of one pipeline node to the top handle of the next.",
          "Use toolbar actions:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Save changes — persist node positions and edges (required before scheduling)",
          "Auto-arrange — tidy the layout",
          "Fit view — zoom to fit the graph"
        ]
      },
      {
        "type": "p",
        "text": "Each node shows the pipeline name, provider badge (AWS, GCP, Azure), and pipeline id."
      },
      {
        "type": "h2",
        "text": "How to manage topologies"
      },
      {
        "type": "table",
        "headers": [
          "Task",
          "Steps"
        ],
        "rows": [
          [
            "Switch topology",
            "Select a name under Your topologies in the left panel"
          ],
          [
            "Search",
            "Use the search boxes for topologies or pipelines"
          ],
          [
            "Delete",
            "Select a topology → Delete → confirm"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Deleting a topology does not delete underlying pipelines or cloud resources."
      },
      {
        "type": "h2",
        "text": "How execution works"
      },
      {
        "type": "p",
        "text": "When a topology runs (typically via Scheduler):"
      },
      {
        "type": "steps",
        "items": [
          "InfraGlide walks the DAG from roots to leaves.",
          "Each pipeline node triggers a deployment (apply or destroy per schedule action).",
          "Downstream nodes run after upstream success (default edge condition).",
          "Execution is asynchronous — check status in Observability → Topologies or Deployment Logs."
        ]
      },
      {
        "type": "h2",
        "text": "Getting started overlay"
      },
      {
        "type": "p",
        "text": "When the canvas is empty, InfraGlide shows a three-step guide:"
      },
      {
        "type": "steps",
        "items": [
          "Add pipelines — click or drag from the left panel",
          "Connect the flow — link nodes top to bottom",
          "Save & schedule — save, then create a schedule in Scheduler"
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Model real dependencies: VPC and IAM before compute; data stores before apps.",
          "Save after every structural change — unsaved changes are indicated in the toolbar.",
          "Keep one topology per rollout pattern (`staging-stack`, `prod-data-layer`).",
          "Do not add the same pipeline twice — InfraGlide warns if a pipeline is already on the canvas."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Select a sandbox message",
            "Choose Workspace and Sandbox in the header"
          ],
          [
            "Cannot add pipelines",
            "Create or select a topology first"
          ],
          [
            "Already on canvas",
            "That pipeline is already in this topology"
          ],
          [
            "Schedule does nothing",
            "Save the topology; confirm pipelines are saved and credentialed"
          ],
          [
            "Wrong execution order",
            "Reconnect edges so prerequisites are above dependents"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Scheduler · Pipeline Deployment · My Pipelines · Observability · Pipeline Designer"
      }
    ]
  },
  {
    "id": "pipeline-status-watcher",
    "section": "Pipelines & Automation",
    "title": "Pipeline Status Watcher",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Pipeline Status Watcher is a global background service that runs on every page while you are signed in. It tracks long-running pipeline operations so you do not have to keep a tab open or manually refresh lists."
      },
      {
        "type": "p",
        "text": "It handles two kinds of background updates:"
      },
      {
        "type": "steps",
        "items": [
          "Hub publish sessions — polls upload progress and shows toast notifications when publishing finishes or fails.",
          "Deployment status — background polling that keeps My Pipelines (and Dashboard) status badges current while plans, applies, or destroys run."
        ]
      },
      {
        "type": "p",
        "text": "The watcher component mounts at the app root — it works whether you are on the designer, My Pipelines, Settings, or any other page."
      },
      {
        "type": "h2",
        "text": "Who benefits"
      },
      {
        "type": "p",
        "text": "All signed-in users who:"
      },
      {
        "type": "list",
        "items": [
          "Publish pipelines to the Hub",
          "Start deployments and navigate away before they finish",
          "Want badge updates on My Pipelines without refreshing"
        ]
      },
      {
        "type": "h2",
        "text": "How it works"
      },
      {
        "type": "h3",
        "text": "Global mount"
      },
      {
        "type": "p",
        "text": "`PipelineStatusWatcher` runs inside the main app shell alongside the toast system. You never open it directly — it starts automatically after login."
      },
      {
        "type": "h3",
        "text": "Session hydration"
      },
      {
        "type": "p",
        "text": "On load, the watcher restores in-progress publish sessions from the server (and Redux store) so polling resumes even after a browser reload or tab close."
      },
      {
        "type": "h3",
        "text": "Hub publish polling"
      },
      {
        "type": "p",
        "text": "When you publish to the Hub, the session enters publishing or initiated state. The watcher:"
      },
      {
        "type": "steps",
        "items": [
          "Polls upload status every 3 seconds",
          "Waits until all files report completed or failed",
          "Shows a toast:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Publish Successful — pipeline published",
          "Publish Failed — includes error detail when available"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Refreshes pipeline queries so lists update",
          "Clears the session from memory after a short delay"
        ]
      },
      {
        "type": "p",
        "text": "You can navigate anywhere in InfraGlide while publishing — the watcher continues in the background."
      },
      {
        "type": "h3",
        "text": "Deployment status badges"
      },
      {
        "type": "p",
        "text": "While deployments run, a separate background poll (via deployment status API) updates pipeline rows:"
      },
      {
        "type": "table",
        "headers": [
          "Badge",
          "Meaning"
        ],
        "rows": [
          [
            "Draft",
            "No recent deployment"
          ],
          [
            "Deploying / Pending",
            "Plan, apply, or destroy in progress"
          ],
          [
            "Deployed",
            "Last apply succeeded"
          ],
          [
            "Failed",
            "Last run failed"
          ],
          [
            "Destroyed",
            "Resources removed"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Polling is fast (≈3 s) while any deployment is running, then relaxes to ≈30 s when idle — so badges on My Pipelines stay accurate even if you leave the designer."
      },
      {
        "type": "p",
        "text": "Special states shown on the list:"
      },
      {
        "type": "list",
        "items": [
          "Destroying — when notes indicate a destroy operation",
          "Previewing — when a dry-run plan is active"
        ]
      },
      {
        "type": "p",
        "text": "See Pipeline Deployment for starting deploys."
      },
      {
        "type": "h2",
        "text": "Where you see updates"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "What updates"
        ],
        "rows": [
          [
            "Toast (bottom-right)",
            "Hub publish success or failure"
          ],
          [
            "My Pipelines",
            "Deployment status badges per pipeline"
          ],
          [
            "Dashboard",
            "Deployment summary when shown"
          ],
          [
            "Notification center",
            "Publish session lost or invalid (error)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Enable Deployment alerts in Settings for email/in-app notifications in addition to toasts."
      },
      {
        "type": "h2",
        "text": "Typical workflows"
      },
      {
        "type": "h3",
        "text": "Publish while browsing"
      },
      {
        "type": "steps",
        "items": [
          "Publish a pipeline from Hub Publish.",
          "Navigate to Templates, Settings, or another page.",
          "When upload completes, a toast appears — Publish Successful or Publish Failed.",
          "Return to My Pipelines — the row reflects the new state without manual refresh."
        ]
      },
      {
        "type": "h3",
        "text": "Deploy and leave the designer"
      },
      {
        "type": "steps",
        "items": [
          "Start Apply from the Pipeline Designer.",
          "Switch to My Pipelines or Deployed Resources.",
          "Status badge shows Deploying until the run finishes, then Deployed or Failed."
        ]
      },
      {
        "type": "p",
        "text": "You can reopen the designer console anytime to read full Terraform logs."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Trust the badges on My Pipelines — no need to keep the designer tab focused during long applies.",
          "If a publish toast says failed, check Hub permissions and credential scope before retrying.",
          "Combine with Drift Detection badges on the same list for a full operational picture.",
          "After a failed deploy, open the pipeline → Console view for Terraform error details."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "No toast after publish — Session may have expired (404/410). The watcher marks the session failed and shows a notification. Retry the publish."
      },
      {
        "type": "p",
        "text": "Badge stuck on Deploying — Rare server interruption. Open the pipeline console or check deployment history; refresh My Pipelines. If still stuck, see Pipeline Deployment troubleshooting."
      },
      {
        "type": "p",
        "text": "Publish Successful but list unchanged — Wait a few seconds for query invalidation. Navigate away and back to My Pipelines."
      },
      {
        "type": "p",
        "text": "Watcher not running — Confirm you are signed in. The component only mounts for authenticated app routes."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "My Pipelines · Pipeline Deployment · Hub Publish · Settings · Pipeline Designer"
      }
    ]
  },
  {
    "id": "cloud-sync-and-drift",
    "section": "Cloud Sync & Drift",
    "title": "Cloud Sync & Drift",
    "intro": "This guide explains how to detect when cloud resources change outside InfraGlide, refresh your resource inventory, and fix differences between what you designed and what is actually running. InfraGlide covers this in two places:",
    "content": [
      {
        "type": "list",
        "items": [
          "Drift Detection — compares your pipeline to live cloud settings",
          "Deployed Resources — lists what is running and lets you refresh that list"
        ]
      },
      {
        "type": "h2",
        "text": "What is drift?"
      },
      {
        "type": "p",
        "text": "Drift means your live cloud resources no longer match what your saved pipeline expects."
      },
      {
        "type": "p",
        "text": "Common causes:"
      },
      {
        "type": "list",
        "items": [
          "Someone changed a setting in the AWS, GCP, or Azure console",
          "Auto-scaling changed instance sizes or counts",
          "A resource was deleted manually",
          "A new resource was created outside InfraGlide"
        ]
      },
      {
        "type": "p",
        "text": "Drift does not always mean something is wrong — but you should know about it."
      },
      {
        "type": "h2",
        "text": "How to open Drift Detection"
      },
      {
        "type": "steps",
        "items": [
          "Select your workspace and sandbox in the header (if needed).",
          "Open Drift Detection from the sidebar (Operations section).",
          "You see a list of deployed pipelines and their drift status."
        ]
      },
      {
        "type": "p",
        "text": "Pipelines with open drift also show a drift badge on My Pipelines."
      },
      {
        "type": "h2",
        "text": "How to run a drift check on all pipelines"
      },
      {
        "type": "steps",
        "items": [
          "Go to Drift Detection.",
          "Click Check all.",
          "Wait while InfraGlide scans your pipelines — progress appears on the page.",
          "When finished, review the list for pipelines with new events."
        ]
      },
      {
        "type": "p",
        "text": "InfraGlide also runs drift checks automatically on a schedule in the background. You do not need to click Check all for routine monitoring, but it is useful after major changes."
      },
      {
        "type": "h2",
        "text": "How to run a drift check on one pipeline"
      },
      {
        "type": "steps",
        "items": [
          "On Drift Detection, find the pipeline row.",
          "Click Check now (or the refresh action on that row)."
        ]
      },
      {
        "type": "p",
        "text": "Or from My Pipelines, use the drift action on a pipeline that has been deployed."
      },
      {
        "type": "h2",
        "text": "How to read drift events"
      },
      {
        "type": "p",
        "text": "Click a pipeline with drift to expand its events. Each event describes one difference:"
      },
      {
        "type": "table",
        "headers": [
          "Type",
          "Meaning"
        ],
        "rows": [
          [
            "Modified",
            "The resource exists but a setting changed (for example, instance size)"
          ],
          [
            "Missing",
            "The resource was in your pipeline but no longer exists in the cloud"
          ],
          [
            "Added",
            "Something exists in the cloud that your pipeline does not manage"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Each event shows:"
      },
      {
        "type": "list",
        "items": [
          "Which resource and field changed",
          "Expected value (from your pipeline)",
          "Live value (from the cloud)",
          "Severity (how urgent it is)"
        ]
      },
      {
        "type": "h2",
        "text": "How to acknowledge a drift event"
      },
      {
        "type": "p",
        "text": "If you have seen an event but are not ready to fix it yet:"
      },
      {
        "type": "steps",
        "items": [
          "Open the event on Drift Detection.",
          "Click Acknowledge."
        ]
      },
      {
        "type": "p",
        "text": "Acknowledged events stay on record but may reduce noise in badges and summaries. They are not fixed until you resolve them."
      },
      {
        "type": "h2",
        "text": "How to resolve drift"
      },
      {
        "type": "p",
        "text": "When you have fixed the issue:"
      },
      {
        "type": "steps",
        "items": [
          "Open the drift event.",
          "Click Resolve."
        ]
      },
      {
        "type": "p",
        "text": "Resolve after you have either:"
      },
      {
        "type": "list",
        "items": [
          "Updated the pipeline and re-applied, or",
          "Confirmed the live state is correct and updated your pipeline to match"
        ]
      },
      {
        "type": "h2",
        "text": "How to accept live cloud changes (Resolve from Cloud)"
      },
      {
        "type": "p",
        "text": "If someone intentionally changed the cloud (for example, resized a server in the console) and you want InfraGlide to match the cloud:"
      },
      {
        "type": "steps",
        "items": [
          "Open the drift event.",
          "Click Resolve from Cloud (or similar wording).",
          "Read the confirmation — this updates your saved pipeline to match live values.",
          "Confirm."
        ]
      },
      {
        "type": "p",
        "text": "Use carefully on production. This changes your design document, not just the drift status."
      },
      {
        "type": "h2",
        "text": "How to get help understanding drift (Jane)"
      },
      {
        "type": "steps",
        "items": [
          "On Drift Detection, find the event.",
          "Click Explain with Jane.",
          "Jane explains in plain language:"
        ]
      },
      {
        "type": "list",
        "items": [
          "What changed",
          "Why it might have happened",
          "Whether it is a security or cost concern",
          "Suggested next steps"
        ]
      },
      {
        "type": "p",
        "text": "You can also open Jane (⌘J / Ctrl+J) and ask: *\"Why is my RDS instance drifting?\"*"
      },
      {
        "type": "h2",
        "text": "How to fix drift with Jane's remediation advice"
      },
      {
        "type": "steps",
        "items": [
          "Open the drift event.",
          "Open the Jane Remediation panel (or ask Jane in chat).",
          "Follow the suggested steps, which may include:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Edit the pipeline and Apply again",
          "Resolve from Cloud if the change was intentional"
        ]
      },
      {
        "type": "steps",
        "items": [
          "If Jane offers a patch, review it before applying to your pipeline."
        ]
      },
      {
        "type": "p",
        "text": "See Jane for more examples."
      },
      {
        "type": "h2",
        "text": "How to refresh your cloud inventory (Deployed Resources)"
      },
      {
        "type": "p",
        "text": "Deployed Resources shows what InfraGlide knows is running in your cloud accounts from successful deploys."
      },
      {
        "type": "p",
        "text": "Where: Deployed Resources in the sidebar."
      },
      {
        "type": "h3",
        "text": "Refresh the list"
      },
      {
        "type": "steps",
        "items": [
          "Open Deployed Resources.",
          "Click Refresh (or Sync / force refresh, depending on your UI).",
          "Wait while InfraGlide queries your cloud provider.",
          "The table updates with current resources."
        ]
      },
      {
        "type": "p",
        "text": "Refresh when:"
      },
      {
        "type": "list",
        "items": [
          "You deployed recently and don't see new resources yet",
          "You suspect the list is outdated",
          "You want updated data for cost or security cards on the page"
        ]
      },
      {
        "type": "h2",
        "text": "What you can do on Deployed Resources"
      },
      {
        "type": "p",
        "text": "Besides viewing inventory, the page may include:"
      },
      {
        "type": "list",
        "items": [
          "Resource details — type, name, region, linked pipeline",
          "Jane cost cards — optimization and forecast (see Cost & Compliance)",
          "Security-related insights — linked to Security & Access"
        ]
      },
      {
        "type": "h2",
        "text": "Drift vs inventory refresh — what's the difference?"
      },
      {
        "type": "table",
        "headers": [
          "Feature",
          "What it does",
          "When to use"
        ],
        "rows": [
          [
            "Drift Detection",
            "Compares pipeline + last deploy to live settings field by field",
            "Find config mismatches"
          ],
          [
            "Deployed Resources refresh",
            "Updates the list of known resources from the cloud",
            "See current inventory and costs"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Use both: refresh inventory to see what exists; run drift checks to see if settings still match your pipeline."
      },
      {
        "type": "h2",
        "text": "Typical workflows"
      },
      {
        "type": "h3",
        "text": "After someone edited the cloud console"
      },
      {
        "type": "steps",
        "items": [
          "Open Drift Detection → Check now on the affected pipeline.",
          "Explain with Jane on each event.",
          "Either fix the pipeline and Apply, or Resolve from Cloud if the change was intentional.",
          "Click Resolve on the event."
        ]
      },
      {
        "type": "h3",
        "text": "Weekly hygiene check"
      },
      {
        "type": "steps",
        "items": [
          "Drift Detection → Check all.",
          "Review critical and high severity items first.",
          "Acknowledge or resolve each event.",
          "Deployed Resources → Refresh for up-to-date inventory."
        ]
      },
      {
        "type": "h3",
        "text": "Before a production deploy"
      },
      {
        "type": "steps",
        "items": [
          "Run drift check on the pipeline.",
          "Resolve or acknowledge open events so you know the starting state is clean.",
          "Deploy as usual (see Pipelines & Automation)."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Investigate critical drift quickly — especially security groups, encryption, and public access.",
          "Do not ignore \"Added\" events — unknown resources may mean shadow IT or manual changes.",
          "Resolve from Cloud only when you trust the live change.",
          "Use Jane for every non-obvious event — saves time reading raw field diffs.",
          "Refresh Deployed Resources after large deploys or destroys."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "No drift events but I changed something in the console The pipeline must have been successfully deployed at least once. Run Check now on that pipeline. Ensure your credential can read the resource type."
      },
      {
        "type": "p",
        "text": "Check all takes a long time Normal for many pipelines. Leave the page open or return later; results fill in as each pipeline completes."
      },
      {
        "type": "p",
        "text": "Resolve from Cloud did not update my canvas Save the pipeline after resolving. Re-open the designer and confirm the Properties panel shows new values."
      },
      {
        "type": "p",
        "text": "Deployed Resources is empty Deploy at least one pipeline successfully, then click Refresh. Confirm you are in the correct workspace and sandbox."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Pipelines & Automation — Deploy and maintain desired state",
          "Jane — Explain and fix drift",
          "Monitoring — Track when checks and deploys ran",
          "Cost & Compliance — Drift may violate policies"
        ]
      }
    ]
  },
  {
    "id": "deployed-resources",
    "section": "Cloud Sync & Drift",
    "title": "Deployed Resources",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Deployed Resources is a live inventory of cloud assets visible through credentials in the current Sandbox. Sync from AWS, GCP, or Azure, filter and search resources, inspect details, and use Jane cost cards for billing insights. Resources deployed by InfraGlide pipelines are tagged and can be filtered with IG only."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "Detail"
        ],
        "rows": [
          [
            "Route",
            "`/deployed-resources`"
          ],
          [
            "Sidebar",
            "Operations → Deployed Resources"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with the Deployed Resources module (RBAC). Inventory is scoped to the Sandbox selected in the header and the Credential chosen on the page."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header.",
          "Add at least one credential for the provider — see Cloud Credentials.",
          "Know which cloud account or GCP project you want to inspect.",
          "First visit shows cached empty state until you Sync from cloud."
        ]
      },
      {
        "type": "h2",
        "text": "How to refresh inventory"
      },
      {
        "type": "steps",
        "items": [
          "Open Deployed Resources.",
          "Choose Provider tab: GCP, AWS, or Azure.",
          "Select Credential from the dropdown (filtered to current sandbox + provider).",
          "For GCP, optionally narrow Project to one cloud project or All projects.",
          "Click Sync from cloud (refresh icon) in the filter bar.",
          "Wait for sync to finish — the button shows a spinner while running.",
          "Confirm Last synced timestamp updates in the page header.",
          "Use Sync from cloud again anytime you need fresh state from the provider."
        ]
      },
      {
        "type": "p",
        "text": "The page loads cached inventory on first open; only Sync from cloud pulls live data."
      },
      {
        "type": "h2",
        "text": "How to filter InfraGlide-managed resources"
      },
      {
        "type": "steps",
        "items": [
          "After sync, locate the IG only checkbox in the filter row (filter icon label).",
          "Check IG only to show only resources tagged/managed by InfraGlide (`platform: infraglide`).",
          "Combine with Search, Asset type, Location, and Status filters as needed.",
          "Click Clear to reset search, IG filter, and status filters."
        ]
      },
      {
        "type": "h2",
        "text": "How to use Jane cost cards"
      },
      {
        "type": "steps",
        "items": [
          "Sync inventory and select a Credential.",
          "Review top-level cost summary when available (provider-dependent billing APIs).",
          "Click a resource row to open the detail sheet on the right.",
          "In AI recommendations, use Jane cards:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Cost advisor — analyze costs and savings for the selected resource",
          "Billing narrative — month-over-month spike explanation",
          "Cost forecast, Tag intelligence, Posture schedule — sandbox-level insights where shown"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Analyze costs or equivalent on each card to run Jane.",
          "Provide feedback via Jane feedback buttons when shown."
        ]
      },
      {
        "type": "p",
        "text": "Jane cost features complement — not replace — your cloud provider’s billing console."
      },
      {
        "type": "h2",
        "text": "How to create a pipeline from inventory (optional)"
      },
      {
        "type": "steps",
        "items": [
          "Select one or more external resources using row checkboxes.",
          "Click Create pipeline from selection (when available).",
          "Name the pipeline and confirm — opens designer with imported nodes."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Sync from cloud before audits or cost reviews — stale cache misleads.",
          "Use IG only to separate InfraGlide pipelines from manually created cloud resources.",
          "Switch Provider tabs to compare accounts; each tab remembers credential selection.",
          "GCP supports multi-project scope; AWS/Azure show account/subscription ID in scope bar.",
          "Pair with Drift Detection for pipeline vs live comparison."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "“No sandbox selected” — Pick Workspace and Sandbox in header."
      },
      {
        "type": "p",
        "text": "Empty list after sync — Wrong credential, empty account, or filters too narrow; clear IG only and search."
      },
      {
        "type": "p",
        "text": "Sync disabled — No credential for provider in current sandbox."
      },
      {
        "type": "p",
        "text": "Billing / cost unavailable — Provider API limits or permissions; read warning banners."
      },
      {
        "type": "p",
        "text": "Resources missing — IAM may lack list/describe permissions; verify credential scope."
      },
      {
        "type": "p",
        "text": "Stale “Last synced” — Run Sync from cloud again."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Cloud Credentials · Drift Detection · Security Scan · Pipeline Deployment"
      }
    ]
  },
  {
    "id": "drift-detection",
    "section": "Cloud Sync & Drift",
    "title": "Drift Detection",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Drift Detection compares each deployed pipeline’s saved configuration with live cloud resources. When they diverge, InfraGlide records drift events with severity, field-level diffs, and remediation options — including Resolve from cloud to pull live values back into the pipeline."
      },
      {
        "type": "p",
        "text": "Checks run manually by default (per pipeline or all pipelines). Jane explains drift and suggests remediation steps."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "Detail"
        ],
        "rows": [
          [
            "Route",
            "`/drift-report`"
          ],
          [
            "Sidebar",
            "Operations → Drift Detection"
          ],
          [
            "Pipeline Designer",
            "Toolbar Check drift (single-pipeline check from canvas)"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with the Deployed Resources module (same RBAC gate as inventory and security). Editors typically run checks and resolve events; viewers may have read-only access depending on role."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select the correct Workspace and Sandbox.",
          "Deploy at least one pipeline successfully so Terraform state and live resources exist.",
          "Ensure credentials used by pipelines remain valid.",
          "Run Deployed Resources sync if you need fresh inventory context."
        ]
      },
      {
        "type": "h2",
        "text": "How to run drift checks"
      },
      {
        "type": "h3",
        "text": "Check all pipelines"
      },
      {
        "type": "steps",
        "items": [
          "Open Drift Detection from the sidebar.",
          "Review the pipeline table (name, provider, deployed status, open drift count, last checked).",
          "Click Run drift check on all pipelines (top right).",
          "Wait while status shows Checking all… — progress updates per pipeline.",
          "When complete, Status badges update to Clean or Drifted and event counts refresh."
        ]
      },
      {
        "type": "h3",
        "text": "Check one pipeline"
      },
      {
        "type": "steps",
        "items": [
          "Find the pipeline row in the table.",
          "Click Check in the Actions column.",
          "Toast confirms Drift check complete for that pipeline.",
          "Expand the row (chevron) if drift events exist."
        ]
      },
      {
        "type": "p",
        "text": "From the Pipeline Designer, use toolbar Check drift for the open pipeline without visiting this page."
      },
      {
        "type": "h2",
        "text": "How to review and act on drift events"
      },
      {
        "type": "steps",
        "items": [
          "Expand a pipeline row with open drift (click chevron).",
          "Review the Drift events table: resource, field count, severity, status, detected time.",
          "Click a row to expand Drift detail — compare Expected (pipeline/Terraform) vs Actual (cloud) per field.",
          "Choose an action per event:"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "Effect"
        ],
        "rows": [
          [
            "Ack",
            "Acknowledge — event stays open but marked acknowledged"
          ],
          [
            "Resolve",
            "Close event without changing pipeline config"
          ],
          [
            "Resolve from cloud",
            "Opens dialog to overwrite pipeline fields with live cloud values"
          ]
        ]
      },
      {
        "type": "steps",
        "items": [
          "For Resolve from cloud:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Review field diffs in the dialog.",
          "Read Jane recommendation if shown.",
          "Click Update pipeline config to apply live values to saved pipeline JSON.",
          "Open pipeline in designer, review changes, Save, and redeploy to reconcile Terraform state."
        ]
      },
      {
        "type": "h2",
        "text": "How to use Jane drift analysis"
      },
      {
        "type": "steps",
        "items": [
          "Expand a pipeline with drift events.",
          "Scroll to the Jane drift analysis card below the table.",
          "Click Analyze (or equivalent).",
          "Jane returns a summary, Why it matters, and numbered remediation steps.",
          "Use guidance alongside Resolve from cloud or manual pipeline edits."
        ]
      },
      {
        "type": "p",
        "text": "Jane also appears in the Resolve from cloud dialog with remediation confidence."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Run Check all before production releases to catch manual console changes.",
          "Ack for known temporary drift; Resolve from cloud when cloud is source of truth.",
          "After Resolve from cloud, always Save and run Plan before Apply.",
          "Watch My Pipelines drift badges — they link to open events.",
          "Destroyed resources show special badges — do not resolve drift on deleted stacks without review."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "No pipelines listed — Nothing deployed with tracked resources yet."
      },
      {
        "type": "p",
        "text": "Check disabled during bulk run — Wait for Run drift check on all pipelines to finish."
      },
      {
        "type": "p",
        "text": "Events not appearing — Run Check first; expand pipeline row."
      },
      {
        "type": "p",
        "text": "Resolve from cloud failed — Field may not be mappable; edit pipeline manually."
      },
      {
        "type": "p",
        "text": "Drift persists after resolve — Redeploy pipeline so Terraform state matches config."
      },
      {
        "type": "p",
        "text": "Jane analysis failed — Retry; check pipeline still exists and you have access."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Deployed Resources · Pipeline Deployment · Pipeline Designer · Security Scan"
      }
    ]
  },
  {
    "id": "terraform-import",
    "section": "Cloud Sync & Drift",
    "title": "Terraform Import",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Terraform Import converts existing Terraform configuration into InfraGlide canvas nodes and connections. Paste HCL (`.tf`) or Terraform JSON (`.tf.json`) in the Pipeline Designer; the importer builds a visual graph you can edit, save, and deploy."
      },
      {
        "type": "p",
        "text": "Imported content replaces the current canvas. Save your work first if you need to keep it."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "How to open"
        ],
        "rows": [
          [
            "Route",
            "`/pipeline/:id` (Pipeline Designer — sidebar hidden on this route)"
          ],
          [
            "Toolbar",
            "Terraform JSON button (file-code icon) in the top toolbar"
          ],
          [
            "Sidebar",
            "Open any pipeline via My Pipelines first, then use the toolbar button"
          ]
        ]
      },
      {
        "type": "p",
        "text": "The modal title shows the active provider, e.g. Import Terraform (AWS)."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with Editor or Admin access on the pipeline can import. Viewers and read-only collaboration sessions cannot — the import buttons are disabled."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select the correct Workspace and Sandbox in the header.",
          "Open a pipeline in the Pipeline Designer (new or existing).",
          "Save or export anything you want to keep — import overwrites canvas content.",
          "Prepare Terraform that includes at least one `resource` block (not only `data` or `provider` blocks).",
          "Know your provider format:"
        ]
      },
      {
        "type": "list",
        "items": [
          "AWS — HCL (`.tf`) or JSON (`.tf.json`)",
          "GCP — Terraform JSON only",
          "Azure — Terraform JSON only (canvas placement may be limited; see Tips)"
        ]
      },
      {
        "type": "h2",
        "text": "How to import Terraform on the canvas"
      },
      {
        "type": "steps",
        "items": [
          "Open the Pipeline Designer for your pipeline.",
          "Click Terraform JSON in the toolbar.",
          "In the full-screen Import Terraform modal, paste your configuration into the text area."
        ]
      },
      {
        "type": "list",
        "items": [
          "For AWS, you can paste HCL or JSON. A badge in the corner shows detected format: HCL (.tf) or JSON (.tf.json).",
          "For GCP and Azure, paste Terraform JSON only."
        ]
      },
      {
        "type": "steps",
        "items": [
          "Review the info banner — it warns that import replaces canvas content and describes provider-specific grouping (e.g. AWS VPC/subnet auto-grouping).",
          "Click Import to canvas (or equivalent confirm action).",
          "Wait while InfraGlide parses, validates, and maps resources to canvas types.",
          "On success, the modal closes and nodes appear on the canvas with connections where supported.",
          "Click each resource and complete any missing fields in the Properties panel.",
          "Click Save (`Ctrl+S` / `Cmd+S`) before deploying."
        ]
      },
      {
        "type": "h2",
        "text": "How AWS import differs from GCP/Azure"
      },
      {
        "type": "table",
        "headers": [
          "Provider",
          "Input formats",
          "Behavior"
        ],
        "rows": [
          [
            "AWS",
            "HCL + JSON",
            "Auto-detects format; groups VPC/subnet containers; collapses satellite resources (route tables, SG rules, bucket policies) into parent nodes"
          ],
          [
            "GCP",
            "JSON only",
            "Provider detected from resource types; may prompt for credential/project setup after import"
          ],
          [
            "Azure",
            "JSON only",
            "Resources may be skipped if canvas mapping is not yet available — check import warnings"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Start with a small module (VPC + one compute resource) to verify mapping before importing large stacks.",
          "Read import warnings in toast notifications — unmapped resource types are listed but do not always block import.",
          "After GCP import, complete the GCP setup prompt if shown (credential and project binding).",
          "Use Validate in the toolbar after import to catch missing required fields.",
          "For CloudFormation or ARM templates, use Template Converter first, then import the resulting Terraform JSON here."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "“Nothing to import” / empty paste — Paste Terraform with at least one `resource` block."
      },
      {
        "type": "p",
        "text": "“Import blocked” — Fatal validation errors (unsupported syntax, invalid root shape). Fix the source file and retry."
      },
      {
        "type": "p",
        "text": "“Nothing to place on canvas” — Parsed successfully but no mappable resources. Check provider and resource types."
      },
      {
        "type": "p",
        "text": "HCL rejected on GCP/Azure — Only AWS accepts HCL in this modal. Convert to `.tf.json` or use Template Converter."
      },
      {
        "type": "p",
        "text": "Canvas empty after Azure import — Azure canvas import may skip nodes; check warnings and add resources manually from the Component Library."
      },
      {
        "type": "p",
        "text": "Import button disabled — You are in viewer-only mode; need Editor access."
      },
      {
        "type": "p",
        "text": "Properties incomplete after import — Normal for complex resources; fill required fields before deploy."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · Import as Pipeline · Template Converter · Terraform Generation · Pipeline Deployment"
      }
    ]
  },
  {
    "id": "import-as-pipeline",
    "section": "Cloud Sync & Drift",
    "title": "Import as Pipeline",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Import as Pipeline loads an InfraGlide pipeline export file (JSON) into the Pipeline Designer. Use it to restore backups, share designs between sandboxes, or reopen exported pipeline definitions without recreating the canvas by hand."
      },
      {
        "type": "p",
        "text": "The file must be valid InfraGlide pipeline JSON with at least a name and components array."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "How to open"
        ],
        "rows": [
          [
            "Route",
            "`/pipeline/:id` (Pipeline Designer)"
          ],
          [
            "Toolbar",
            "Import button (upload icon)"
          ],
          [
            "Modal title",
            "Import Pipeline"
          ]
        ]
      },
      {
        "type": "p",
        "text": "From My Pipelines: there is no import button on the list page itself. Export a pipeline from My Pipelines (row menu → Export), open the Pipeline Designer (new or existing pipeline), then use Import to load the JSON file."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with Editor or Admin access on the pipeline. Viewers and read-only collaboration sessions cannot import — the Import toolbar button is disabled."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select the correct Workspace and Sandbox in the header.",
          "Open the Pipeline Designer (create a New pipeline or open an existing one to replace its canvas).",
          "Have a pipeline JSON file ready:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Exported from InfraGlide (My Pipelines → Export, or designer Export)",
          "Maximum size 10 MB",
          "File extension `.json`"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Save current work if you do not intend to overwrite the canvas."
        ]
      },
      {
        "type": "h2",
        "text": "How to import a pipeline JSON file"
      },
      {
        "type": "steps",
        "items": [
          "Go to My Pipelines and click a pipeline name, or create a New pipeline to get an empty designer.",
          "In the Pipeline Designer toolbar, click Import.",
          "The Import Pipeline modal opens with a drag-and-drop zone.",
          "Either:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Drag and drop your `.json` file onto the drop zone, or",
          "Click Browse Files and select the file."
        ]
      },
      {
        "type": "steps",
        "items": [
          "Confirm the file name and size appear in the modal (invalid types or files over 10 MB are rejected with an error toast).",
          "Click Import Pipeline.",
          "On success, the modal closes and the canvas loads components and connections from the file.",
          "The pipeline name and description from the file are applied where supported.",
          "Review each resource in the Properties panel — credentials and region bindings may need updating for the target sandbox.",
          "Click Save (`Ctrl+S` / `Cmd+S`)."
        ]
      },
      {
        "type": "h2",
        "text": "How to round-trip with My Pipelines Export"
      },
      {
        "type": "steps",
        "items": [
          "On My Pipelines, open the row menu for a pipeline.",
          "Click Export — downloads `{pipeline_name}_v{id}.json`.",
          "Open the Pipeline Designer (same pipeline or a new one in another sandbox).",
          "Click Import and select the exported file.",
          "Save under a new name if duplicating to another sandbox."
        ]
      },
      {
        "type": "h2",
        "text": "File requirements"
      },
      {
        "type": "table",
        "headers": [
          "Requirement",
          "Detail"
        ],
        "rows": [
          [
            "Format",
            "JSON only"
          ],
          [
            "Max size",
            "10 MB"
          ],
          [
            "Required fields",
            "`name` (string), `components` (array)"
          ],
          [
            "Optional",
            "`connections`, `description`, provider metadata"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Export before major edits — JSON export is the fastest backup.",
          "After import into a different sandbox, re-bind credentials and regions in the Properties panel.",
          "GCP imports may trigger a GCP setup modal for credential/project selection.",
          "Import replaces canvas content; it does not automatically create a new pipeline record — Save persists to the open pipeline.",
          "Use meaningful export filenames — they default to `{name}_v{id}.json`."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "“Invalid file type” — Only `.json` files are accepted."
      },
      {
        "type": "p",
        "text": "“File too large” — Reduce file size below 10 MB (split large pipelines or remove unused components before export)."
      },
      {
        "type": "p",
        "text": "“Import failed” / invalid format — JSON must include `name` and `components`. Re-export from InfraGlide or fix the file manually."
      },
      {
        "type": "p",
        "text": "Import button disabled — Viewer-only access; need Editor role."
      },
      {
        "type": "p",
        "text": "Credentials missing after import — Expected when moving between sandboxes; open each resource and select credentials for the current sandbox."
      },
      {
        "type": "p",
        "text": "Deploy fails after import — Run Validate in the toolbar and fix Properties panel errors before deploying."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · My Pipelines · Terraform Import · Pipeline Deployment"
      }
    ]
  },
  {
    "id": "template-converter",
    "section": "Cloud Sync & Drift",
    "title": "Template Converter",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "The Template Converter translates foreign infrastructure templates into Terraform JSON suitable for InfraGlide. Upload or paste CloudFormation, ARM, GCP Deployment Manager, HCL, or Terraform JSON and convert to AWS, GCP, or Azure Terraform output — then open the result directly on the canvas."
      },
      {
        "type": "p",
        "text": "It uses a cloud-agnostic intermediate representation, so source and target providers can differ (e.g. CloudFormation → GCP Terraform)."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "Detail"
        ],
        "rows": [
          [
            "Route",
            "`/template-converter`"
          ],
          [
            "Sidebar",
            "Build & Deploy → Template Converter"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Any authenticated user with access to the Template Converter module (RBAC). Conversion does not require cloud credentials; opening results on the canvas requires a pipeline and appropriate permissions."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Have template content ready — paste text or upload a UTF-8 file (`.tf`, `.json`, `.yaml`, `.template`, etc.).",
          "Decide source format (Auto-detect usually works; choose explicitly if ambiguous).",
          "Choose target provider (AWS, GCP, or Azure Terraform JSON).",
          "For large templates, review unmapped resources and warnings after conversion — not every cloud resource maps 1:1."
        ]
      },
      {
        "type": "h2",
        "text": "How to convert CloudFormation to InfraGlide"
      },
      {
        "type": "steps",
        "items": [
          "Click Template Converter in the sidebar.",
          "Under Source format, select AWS CloudFormation (JSON/YAML) or leave Auto-detect if the file is clearly CloudFormation.",
          "Under Target provider, choose where you want to deploy (e.g. Google Cloud (Terraform) for GCP canvas, or AWS (Terraform) to stay on AWS).",
          "Paste your CloudFormation template into Template content, or click Upload file and select the template.",
          "(Optional) Enable Include parsed IR in response for debugging.",
          "Click Convert.",
          "When conversion completes, review the Output, Log, and IR tabs:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Output — Terraform JSON to copy or open on canvas",
          "Log — source/target detection, unmapped resources, warnings",
          "IR — intermediate representation (if enabled)"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Open in canvas to launch the Pipeline Designer in a new tab with the converted graph, or Copy JSON to clipboard.",
          "In the designer, complete Properties, Save, and deploy as usual."
        ]
      },
      {
        "type": "h2",
        "text": "How to convert other source formats"
      },
      {
        "type": "table",
        "headers": [
          "Source format",
          "Typical use"
        ],
        "rows": [
          [
            "HCL / Terraform (.tf)",
            "Cross-provider migration (e.g. AWS HCL → GCP JSON)"
          ],
          [
            "Terraform JSON",
            "Normalize or retarget existing TF"
          ],
          [
            "Azure ARM template",
            "Azure Resource Manager → Terraform"
          ],
          [
            "GCP Deployment Manager (YAML)",
            "GDM → Terraform"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Steps match CloudFormation above — adjust Source format and Target provider accordingly."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Prefer explicit source format when Auto-detect is wrong (e.g. `.tf` files that contain JSON).",
          "Read unmapped resources in the log — they are omitted or not translated.",
          "After Open in canvas, check import toasts for Terraform import diagnostics.",
          "Use Copy JSON to inspect output before placing on canvas.",
          "Pair with Terraform Import if you already have Terraform and only need canvas placement."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "“Nothing to convert” — Paste content or upload a file first."
      },
      {
        "type": "p",
        "text": "“Conversion failed” — Invalid template syntax or unsupported structure; check error toast message."
      },
      {
        "type": "p",
        "text": "“Done · review” / unmapped resources — Partial conversion; add missing resources manually on the canvas."
      },
      {
        "type": "p",
        "text": "“Cannot open in designer” — Output has no mappable resources for the target; fix source or target provider."
      },
      {
        "type": "p",
        "text": "Open in canvas shows warnings — Normal for complex conversions; verify each node in Properties panel."
      },
      {
        "type": "p",
        "text": "Sidebar item locked — Subscription or RBAC may restrict Template Converter; contact your admin."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Terraform Import · Pipeline Designer · Terraform Generation · Pipeline Deployment"
      }
    ]
  },
  {
    "id": "cost-and-compliance",
    "section": "Cost & Compliance",
    "title": "Cost & Compliance",
    "intro": "This guide explains how to estimate costs, get savings recommendations, create and enforce policies, and run architecture reviews in InfraGlide.",
    "content": [
      {
        "type": "h2",
        "text": "Part 1 — Cost"
      },
      {
        "type": "h3",
        "text": "How to see estimated cost while designing"
      },
      {
        "type": "steps",
        "items": [
          "Open your pipeline in the Pipeline Designer.",
          "Look for the cost estimate in the toolbar or summary area (location may vary by view).",
          "As you add or resize resources, the estimate updates."
        ]
      },
      {
        "type": "p",
        "text": "Estimates are approximate — use them to compare designs, not as exact invoices."
      },
      {
        "type": "h3",
        "text": "How to get cost optimization advice from Jane"
      },
      {
        "type": "p",
        "text": "From the Pipeline Designer:"
      },
      {
        "type": "steps",
        "items": [
          "Open your pipeline.",
          "Open Jane (⌘J / Ctrl+J).",
          "Ask, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"How can I reduce the cost of this pipeline?\"*",
          "*\"Are my instance sizes too large?\"*"
        ]
      },
      {
        "type": "p",
        "text": "From Deployed Resources:"
      },
      {
        "type": "steps",
        "items": [
          "Open Deployed Resources from the sidebar.",
          "Find the Cost optimization card (Jane-powered).",
          "Read recommendations such as smaller instance types or unused resources."
        ]
      },
      {
        "type": "h3",
        "text": "How to view cost forecast and billing insights"
      },
      {
        "type": "p",
        "text": "On Deployed Resources, Jane-powered cards may include:"
      },
      {
        "type": "table",
        "headers": [
          "Card",
          "What it tells you"
        ],
        "rows": [
          [
            "Cost forecast",
            "Projected spend based on current resources"
          ],
          [
            "Billing spike",
            "Possible reasons for a recent cost increase"
          ],
          [
            "Tag intelligence",
            "Suggested tags for tracking spend by team or project"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Open each card and follow any suggested actions (resize resources, add tags, remove unused items)."
      },
      {
        "type": "h3",
        "text": "How to improve cost tracking with tags"
      },
      {
        "type": "steps",
        "items": [
          "Go to Deployed Resources.",
          "Open Tag intelligence (Jane card).",
          "Apply suggested tags in your cloud console or update resource config in the pipeline and re-apply."
        ]
      },
      {
        "type": "p",
        "text": "Good tags (for example, `cost-center`, `team`, `environment`) help your organization allocate spend."
      },
      {
        "type": "h3",
        "text": "How to set up cost alerts (if available)"
      },
      {
        "type": "p",
        "text": "If your organization enabled cost alerts:"
      },
      {
        "type": "steps",
        "items": [
          "Open cost alert settings (from Deployed Resources, Settings, or admin configuration — depending on your setup).",
          "Create a threshold (for example, estimated monthly cost above a limit).",
          "Save — you are notified when estimates exceed the threshold."
        ]
      },
      {
        "type": "p",
        "text": "Alerts use estimates, not live billing feeds. Contact your admin for integration with your cloud billing tools."
      },
      {
        "type": "h2",
        "text": "Part 2 — Compliance"
      },
      {
        "type": "p",
        "text": "Where: Compliance in the sidebar (Operations)."
      },
      {
        "type": "p",
        "text": "Compliance lets administrators define rules (policies) and choose whether they log, warn, or block deployments."
      },
      {
        "type": "h3",
        "text": "How compliance modes work"
      },
      {
        "type": "table",
        "headers": [
          "Mode",
          "What happens when a rule is broken"
        ],
        "rows": [
          [
            "Audit",
            "Violation is recorded; deploy is not blocked"
          ],
          [
            "Warn",
            "You see a warning; deploy is not blocked"
          ],
          [
            "Enforce",
            "Apply is blocked until you fix the issue"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Plan is never blocked — only Apply."
      },
      {
        "type": "h3",
        "text": "How to browse existing policies"
      },
      {
        "type": "steps",
        "items": [
          "Open Compliance.",
          "Go to the Policy Library tab (or main list).",
          "Browse policies by domain (Security, Cost, Reliability, etc.).",
          "Click a policy to read its rules and description."
        ]
      },
      {
        "type": "h3",
        "text": "How to enforce a policy on your organization"
      },
      {
        "type": "p",
        "text": "Who: Administrators."
      },
      {
        "type": "steps",
        "items": [
          "Open Compliance.",
          "Select a policy from the library.",
          "Click Enforce.",
          "Choose:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Mode — Audit, Warn, or Enforce",
          "Scope — whole organization, specific workspaces, or specific sandboxes"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Confirm."
        ]
      },
      {
        "type": "p",
        "text": "Start with Audit to see how often rules would fire before switching to Enforce on production."
      },
      {
        "type": "h3",
        "text": "How to create a custom policy"
      },
      {
        "type": "steps",
        "items": [
          "Open Compliance.",
          "Click Create custom policy (or New policy).",
          "Enter a name and description.",
          "Add rules using the policy builder:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Action control — block or warn on dangerous actions (e.g. open SSH to the world)",
          "Config check — require settings (e.g. encryption enabled)"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Save the policy.",
          "Enforce it on the scopes you need."
        ]
      },
      {
        "type": "h3",
        "text": "How to create a policy with Jane"
      },
      {
        "type": "steps",
        "items": [
          "Open Compliance.",
          "Open Jane Policy Generator.",
          "Describe the rule in plain English, for example:"
        ]
      },
      {
        "type": "list",
        "items": [
          "*\"Block S3 buckets that are public\"*",
          "*\"Require RDS instances to use encryption\"*"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Review the rules Jane generates.",
          "Save and enforce through the Compliance page."
        ]
      },
      {
        "type": "p",
        "text": "See Jane for more prompt examples."
      },
      {
        "type": "h3",
        "text": "How to test a policy before enforcing"
      },
      {
        "type": "p",
        "text": "Who: Administrators."
      },
      {
        "type": "steps",
        "items": [
          "Open Compliance.",
          "Select your policy.",
          "Run Validate (or test against projects).",
          "Review which sandboxes would fail and why.",
          "Adjust rules or fix pipelines, then switch to Enforce when ready."
        ]
      },
      {
        "type": "h3",
        "text": "What happens when deploy is blocked by compliance"
      },
      {
        "type": "steps",
        "items": [
          "You click Apply on a pipeline.",
          "InfraGlide shows an error listing violations.",
          "Open the listed resources in the Pipeline Designer and fix settings.",
          "Save and try Apply again."
        ]
      },
      {
        "type": "p",
        "text": "If you believe the block is wrong, contact your administrator to adjust the policy or scope."
      },
      {
        "type": "h3",
        "text": "How to view compliance reports"
      },
      {
        "type": "steps",
        "items": [
          "Open Compliance.",
          "Go to the Reports tab (or Compliance report view).",
          "Review violations by policy, workspace, sandbox, and severity.",
          "Share findings with your team and track fixes over time."
        ]
      },
      {
        "type": "h2",
        "text": "Part 3 — Well-Architected Review"
      },
      {
        "type": "p",
        "text": "Where: Well-Architected in the sidebar."
      },
      {
        "type": "p",
        "text": "Jane evaluates your pipeline against best-practice pillars (security, reliability, cost efficiency, performance, operations, sustainability)."
      },
      {
        "type": "h3",
        "text": "How to run a review"
      },
      {
        "type": "steps",
        "items": [
          "Open Well-Architected.",
          "Select a pipeline.",
          "Click Run review.",
          "Wait for Jane to finish the assessment.",
          "Read the report:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Scores or ratings per pillar",
          "Findings ordered by priority",
          "Recommended changes"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Open the pipeline in the designer and implement high-priority fixes.",
          "Run the review again to confirm improvement."
        ]
      },
      {
        "type": "p",
        "text": "Use this before major production launches or during architecture reviews."
      },
      {
        "type": "h2",
        "text": "Typical workflows"
      },
      {
        "type": "h3",
        "text": "Designer checking cost before deploy"
      },
      {
        "type": "steps",
        "items": [
          "Review cost estimate on the toolbar.",
          "Ask Jane: *\"How can I make this cheaper?\"*",
          "Apply suggestions, save, run Plan, then Apply."
        ]
      },
      {
        "type": "h3",
        "text": "Admin rolling out a new security rule"
      },
      {
        "type": "steps",
        "items": [
          "Create policy (manually or with Jane).",
          "Enforce in Audit mode on staging sandboxes.",
          "Review report for one week.",
          "Fix common pipeline issues with teams.",
          "Switch to Enforce on production sandboxes."
        ]
      },
      {
        "type": "h3",
        "text": "Team preparing for production launch"
      },
      {
        "type": "steps",
        "items": [
          "Well-Architected review on the pipeline.",
          "Fix critical and high findings.",
          "Ensure compliance policies pass in Validate.",
          "Run Plan, then Apply (see Pipelines & Automation)."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Treat cost estimates as guides — validate against your cloud billing dashboard.",
          "Start compliance in Audit mode — avoid surprise deploy blocks.",
          "Use Jane for policy drafting — then refine in the policy builder.",
          "Run Well-Architected reviews before prod, not after.",
          "Tag resources for cost allocation — use Tag intelligence on Deployed Resources."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "I don't see cost cards on Deployed Resources Your plan may not include this feature, or no resources are deployed yet. Deploy a pipeline and refresh Deployed Resources."
      },
      {
        "type": "p",
        "text": "Apply blocked but I think the pipeline is fine Read each violation in the error. Ask Jane to explain. Contact your admin if the policy is too strict."
      },
      {
        "type": "p",
        "text": "Well-Architected review button is disabled Select a saved pipeline with components on the canvas."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Jane — Cost and policy prompts",
          "Pipelines & Automation — Apply and compliance blocks",
          "Cloud Sync & Drift — Drift can cause compliance issues",
          "Security & Access — Who can manage policies"
        ]
      }
    ]
  },
  {
    "id": "cost-reporting",
    "section": "Cost & Compliance",
    "title": "Cost Reporting",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Cost reporting in InfraGlide helps you estimate spend before deploy, analyze live resource costs after deploy, and roll up pipeline-level totals across your organization. Figures are estimates or provider snapshots — not a replacement for your cloud billing console."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "View",
          "Location"
        ],
        "rows": [
          [
            "Design-time estimate",
            "Pipeline Designer — Jane Review; Architecture & Design — Architecture tab billing card"
          ],
          [
            "Deployed resource costs",
            "Deployed Resources (`/deployed-resources`) — header billing snapshot and Jane cost cards"
          ],
          [
            "Org pipeline rollup",
            "API `GET /api/v1/cost/pipelines` (org-wide list); per-pipeline `GET /api/v1/cost/pipelines/:id/summary`"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Design estimates — users with pipeline edit access and Jane features on their plan",
          "Deployed Resources billing — requires `enable_deployed_resources` and `enable_cost_optimization` for Jane optimization cards",
          "Org rollup APIs — authenticated org members with `enable_deployed_resources`"
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Save your pipeline before asking Jane for billing estimates (estimates read saved canvas config).",
          "For live costs, add and select a credential on Deployed Resources and run Sync from cloud.",
          "Tag pipelines in cloud resources (`pipelineId`, `managedBy: infraglide`) for more accurate tag-based rollups when enabled on your plan."
        ]
      },
      {
        "type": "h2",
        "text": "How to estimate cost while designing"
      },
      {
        "type": "h3",
        "text": "Jane Review (Pipeline Designer)"
      },
      {
        "type": "steps",
        "items": [
          "Open your pipeline in the Pipeline Designer.",
          "In the toolbar, click Review (Jane).",
          "Run Well-Architected review — Jane scores cost, security, reliability, and scalability.",
          "Read cost dimension issues and suggestions; adjust instance sizes, counts, or SKUs on the canvas.",
          "Save and re-run review after changes."
        ]
      },
      {
        "type": "h3",
        "text": "Jane billing estimate (Architecture drawer)"
      },
      {
        "type": "steps",
        "items": [
          "Open Architecture & Design at `/architecture-design`.",
          "Select a pipeline → Architecture (or open the doc drawer from the row actions).",
          "Scroll to Estimated billing — Jane estimates monthly and 12-month TCO from list prices.",
          "Click Estimate billing or Refresh to update after canvas changes."
        ]
      },
      {
        "type": "h3",
        "text": "Ask Jane in chat"
      },
      {
        "type": "steps",
        "items": [
          "Open Jane (⌘J / Ctrl+J).",
          "Ask, for example: *\"How can I reduce the cost of this pipeline?\"* or *\"Suggest ways to reduce cloud spend.\"*",
          "Jane routes to cost optimization intent when cost-related phrases are detected."
        ]
      },
      {
        "type": "p",
        "text": "See Jane AI Assistant."
      },
      {
        "type": "h3",
        "text": "Heuristic canvas model"
      },
      {
        "type": "p",
        "text": "The server also exposes `GET /api/v1/my-pipelines/pipelines/:id/cost` — a component-based heuristic used internally. Treat all pre-deploy numbers as planning guides, not invoices."
      },
      {
        "type": "h2",
        "text": "How to analyze cost after deploy (Deployed Resources)"
      },
      {
        "type": "steps",
        "items": [
          "Open Deployed Resources and select Workspace, Sandbox, Provider, and Credential.",
          "Read the billing snapshot in the header (estimated monthly spend for the credential when available).",
          "Scroll to Jane-powered cards:"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Card",
          "Purpose"
        ],
        "rows": [
          [
            "Cost optimization",
            "Rightsizing and savings suggestions per resource"
          ],
          [
            "Billing spike",
            "Month-over-month increase narrative"
          ],
          [
            "Cost forecast",
            "Projected spend trend"
          ],
          [
            "Per-resource Ask Jane",
            "Cost Q&A when the provider lacks per-resource billing"
          ]
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Analyze costs on a card to run Jane analysis.",
          "Apply fixes in the pipeline designer → Save → Apply, or adjust resources in the cloud console as recommended."
        ]
      },
      {
        "type": "h2",
        "text": "How org pipeline rollup works"
      },
      {
        "type": "p",
        "text": "For organizations with deployed resources enabled, InfraGlide can aggregate pipeline-level cost:"
      },
      {
        "type": "list",
        "items": [
          "List — `GET /api/v1/cost/pipelines` returns cost summaries for pipelines in your org",
          "Detail — `GET /api/v1/cost/pipelines/:id/summary` returns per-resource rows, heuristic monthly estimate, live MTD totals, and provider recommendations"
        ]
      },
      {
        "type": "p",
        "text": "Rollup strategies:"
      },
      {
        "type": "list",
        "items": [
          "sum_of_resources (default) — sums live billing per tracked resource",
          "tags — uses cloud cost APIs tagged to the pipeline when `enable_pipeline_cost_tag_rollup` is on"
        ]
      },
      {
        "type": "p",
        "text": "Use rollups for FinOps dashboards and chargeback; verify against AWS Cost Explorer, Azure Cost Management, or GCP Billing."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Compare design-time Jane TCO with post-deploy snapshot — large gaps often mean missing tags or wrong credential scope.",
          "Run Plan before Apply after cost-driven downsizing.",
          "Use Review in the designer before every production version bump.",
          "Set cost alerts in Settings if your org enabled them."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Billing snapshot unavailable",
            "Re-select credential; check credential permissions for billing APIs"
          ],
          [
            "Jane estimate fails",
            "Save pipeline; confirm Jane/TCO features on your subscription"
          ],
          [
            "Rollup shows $0",
            "Sync deployed resources; confirm resources are tracked for that pipeline version"
          ],
          [
            "GCP per-resource cost missing",
            "Use Jane Analyze costs on the resource card"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Designer · Architecture & Design · Deployed Resources · Jane AI Assistant · Cost & Compliance"
      }
    ]
  },
  {
    "id": "compliance",
    "section": "Cost & Compliance",
    "title": "Compliance",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Compliance manages infrastructure policy for your organization — catalog frameworks (SOC2-style packs), custom policies, workspace/sandbox/org scope bindings, and violation reports. Policies run at Audit, Warn, or Enforce mode. Enforce blocks pipeline apply when saved configuration violates bound rules."
      },
      {
        "type": "p",
        "text": "Jane can draft custom policies from natural language via the policy generator at the top of the page."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "Detail"
        ],
        "rows": [
          [
            "Route",
            "`/compliance`"
          ],
          [
            "Sidebar",
            "Operations → Compliance"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "Who"
        ],
        "rows": [
          [
            "View policies, run reports",
            "Users with Compliance module access"
          ],
          [
            "Enforce bindings, enable/disable catalog policies",
            "Typically org or workspace admins"
          ],
          [
            "New custom policy, edit custom rules",
            "Organization admins (MVP)"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Understand your Workspace / Sandbox layout — enforcement binds to org, folder (workspace), or project (sandbox).",
          "Decide enforcement mode per policy before binding broadly.",
          "Start with Audit or Warn on non-production sandboxes; move to Enforce when ready.",
          "Ensure pipelines are saved — compliance evaluates `components[].config` at apply time."
        ]
      },
      {
        "type": "h2",
        "text": "How to browse the policy library"
      },
      {
        "type": "steps",
        "items": [
          "Open Compliance.",
          "In Policy center, use tabs:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Catalog — industry / built-in framework packs",
          "Custom policies — org-defined rules",
          "Report — aggregated violations across projects"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Search by name and filter by Domain (provider or category).",
          "Click Manage on a catalog row to Enforce…, Enable, or Disable a policy.",
          "Click rule counts to open Policy rules detail and read what each pack checks."
        ]
      },
      {
        "type": "h2",
        "text": "How to enforce a policy (Audit / Warn / Enforce)"
      },
      {
        "type": "steps",
        "items": [
          "On Catalog or Custom policies, click Manage → Enforce….",
          "The Enforce policy dialog opens with a scope tree:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Entire organization (org admins) — all workspaces and sandboxes",
          "Expand Workspaces and check folders or individual Sandboxes"
        ]
      },
      {
        "type": "steps",
        "items": [
          "(Optional) Click Pre-check to see how many pipelines would violate the policy in selected scope.",
          "Choose Enforcement mode:"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Mode",
          "Behavior"
        ],
        "rows": [
          [
            "Audit",
            "Record violations only — deploy proceeds"
          ],
          [
            "Warn",
            "Surface warnings — deploy proceeds"
          ],
          [
            "Enforce",
            "Blocks apply when pipeline config violates bound rules"
          ]
        ]
      },
      {
        "type": "steps",
        "items": [
          "Review the Summary sidebar (added/removed bindings, total selected, mode).",
          "Click Apply changes."
        ]
      },
      {
        "type": "p",
        "text": "Most specific binding wins when multiple policies overlap (sandbox over workspace over org)."
      },
      {
        "type": "h2",
        "text": "How to build a custom policy"
      },
      {
        "type": "steps",
        "items": [
          "Go to Compliance → Custom policies tab.",
          "Click New custom policy (org admin).",
          "In the Custom policy builder dialog:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Enter Name, Domain, Description",
          "Add Rules — resource type, field, operator, expected value",
          "Use rule templates where available"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Save the policy — it appears in the custom table.",
          "Click Manage → Enforce… to bind scope and set mode (same as catalog).",
          "Alternatively, use Jane policy generator at the top of the page — describe policy in plain language, then Use draft to open the builder pre-filled."
        ]
      },
      {
        "type": "p",
        "text": "Edit existing custom policies via row Edit action."
      },
      {
        "type": "h2",
        "text": "How Enforce blocks apply"
      },
      {
        "type": "p",
        "text": "When any bound policy on a sandbox runs in Enforce mode and saved pipeline components violate a rule:"
      },
      {
        "type": "steps",
        "items": [
          "Apply (and scheduled/topology apply paths that use the compliance gate) is blocked.",
          "The user sees violation details — rule ID, component ID, component type.",
          "Fix configuration in the Pipeline Designer, Save, then retry Apply.",
          "Switch mode to Warn or Audit temporarily if you need emergency deploys (admin decision)."
        ]
      },
      {
        "type": "p",
        "text": "Plan may still run depending on configuration; Enforce specifically gates destructive or state-changing apply."
      },
      {
        "type": "h2",
        "text": "How to read the compliance report"
      },
      {
        "type": "steps",
        "items": [
          "Open Report tab.",
          "Review violations per pipeline/project with enforcement mode badges.",
          "Drill into pipelines with findings and fix config or adjust policy scope/mode."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Pilot new policies in Audit on a dev sandbox before Enforce in production.",
          "Run Pre-check in the Enforce dialog before Apply changes.",
          "Custom rules target canvas resource types — align with Pipeline Designer config keys.",
          "Use Jane generator for first drafts, then refine rules manually.",
          "Document policy names in change tickets when enabling Enforce."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Apply blocked unexpectedly — Check Report tab and sandbox bindings; a policy is in Enforce with violations."
      },
      {
        "type": "p",
        "text": "Cannot create custom policy — Org admin required in current MVP."
      },
      {
        "type": "p",
        "text": "Pre-check shows many issues — Expected when enabling strict packs; fix pipelines or narrow scope."
      },
      {
        "type": "p",
        "text": "Policy not taking effect — Confirm binding includes your sandbox; policy status is active."
      },
      {
        "type": "p",
        "text": "Catalog empty / load error — Database seed/migration may be missing — contact platform admin."
      },
      {
        "type": "p",
        "text": "Warn vs Enforce confusion — Only Enforce blocks apply; Warn is informational at deploy time."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Security Scan · Pipeline Deployment · Drift Detection · Pipeline Designer"
      }
    ]
  },
  {
    "id": "security-scan",
    "section": "Cost & Compliance",
    "title": "Security Scan",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Security Scan runs static security checks against cloud inventory for the selected credential — firewalls, public exposure, and related posture signals for AWS, GCP, or Azure. Findings are grouped by severity (critical, high, medium, low). Jane explains results in plain language and can suggest remediation tied to a pipeline."
      },
      {
        "type": "p",
        "text": "This complements — does not replace — your cloud provider’s native CSPM tools."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "Detail"
        ],
        "rows": [
          [
            "Route",
            "`/security-scan`"
          ],
          [
            "Sidebar",
            "Operations → Security"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Users with the Deployed Resources module (Security is inserted after Deployed Resources in navigation). Scans require a Sandbox and Credential in scope."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header.",
          "Add credentials — see Cloud Credentials.",
          "Optionally sync inventory via Deployed Resources first (scan uses credential APIs directly).",
          "Have a target pipeline in mind if you plan to use Jane remediation patches."
        ]
      },
      {
        "type": "h2",
        "text": "How to run a security scan"
      },
      {
        "type": "steps",
        "items": [
          "Open Security from the sidebar (`/security-scan`).",
          "Choose Provider: GCP, AWS, or Azure.",
          "Select Credential for the current sandbox.",
          "For GCP, choose Project (specific GCP project or All projects).",
          "For AWS / Azure, account or subscription ID displays automatically when credential is valid.",
          "The scan runs automatically when credential and sandbox are set — wait for Scanning infrastructure… to finish.",
          "Review the severity summary chips: critical, high, medium, low counts at the top.",
          "Scroll the findings table for details: severity, category, resource, finding title, recommendation."
        ]
      },
      {
        "type": "p",
        "text": "Scans cache for several minutes; change credential or provider to refresh scope."
      },
      {
        "type": "h2",
        "text": "How to review findings by severity"
      },
      {
        "type": "steps",
        "items": [
          "After scan completes, read summary chips — prioritize critical and high first.",
          "In the table, each row shows:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Severity badge (color-coded)",
          "Category (e.g. network exposure, IAM)",
          "Resource name and type",
          "Finding title and description",
          "Recommendation text"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Resources removed from inventory may show a removed badge.",
          "Address critical/high items before lower severities in production sandboxes."
        ]
      },
      {
        "type": "h2",
        "text": "How to explain findings with Jane"
      },
      {
        "type": "steps",
        "items": [
          "After results load, find Explain findings with Jane card.",
          "Click Analyze.",
          "Jane returns an overall summary and per-finding explanations (top items shown).",
          "(Optional) Select Remediation target pipeline from the dropdown.",
          "For individual findings, use Jane remediation panel when a pipeline is selected — Jane proposes config changes you can apply in the designer."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Run scans after major deploys and on a schedule for production sandboxes.",
          "Pick the credential that matches the account you intend to audit.",
          "Use Jane explanations to onboard team members on unfamiliar findings.",
          "Pair with Compliance for policy enforcement on pipeline design.",
          "Zero findings does not guarantee secure posture — continue using native CSPM."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "“No sandbox selected” — Choose Workspace and Sandbox in header."
      },
      {
        "type": "p",
        "text": "“Select a credential” — Add or pick a credential for the active provider."
      },
      {
        "type": "p",
        "text": "Scan failed — Check credential validity, IAM permissions, and error message banner."
      },
      {
        "type": "p",
        "text": "Empty findings but warnings shown — Read amber Warnings box — partial scan or API limits."
      },
      {
        "type": "p",
        "text": "Jane explain failed — Retry; ensure scan completed successfully first."
      },
      {
        "type": "p",
        "text": "Stale results — Switch credential or refresh page to trigger new scan."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Deployed Resources · Drift Detection · Compliance · Cloud Credentials"
      }
    ]
  },
  {
    "id": "architecture-and-design",
    "section": "Cost & Compliance",
    "title": "Architecture & Design",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Architecture & Design lists pipelines in your current sandbox and lets you generate High Level Design (HLD), Low Level Design (LLD), and Architecture diagrams from saved canvas data. Documents are produced with Gemini AI (HLD/LLD) or derived from the canvas (Architecture)."
      },
      {
        "type": "p",
        "text": "Route: `/architecture-design`"
      },
      {
        "type": "p",
        "text": "Aliases: `/architecture`, `/hld`, `/lld` redirect here"
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "Sidebar → Architecture & design (Operations / design section)",
          "Full-screen views: HLD View (`/hld-view/:id`), LLD View (`/lld-view/:id`)"
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Access depends on RBAC modules:"
      },
      {
        "type": "table",
        "headers": [
          "Module",
          "What you can open"
        ],
        "rows": [
          [
            "Architecture",
            "Architecture diagram + billing estimate"
          ],
          [
            "HLD",
            "HLD documents (`enable_hld` on subscription)"
          ],
          [
            "LLD",
            "LLD documents (`enable_lld` on subscription)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "You need at least one of these modules to open the page."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header.",
          "Save pipelines in the designer — documents are generated from saved `components` and `connections`.",
          "HLD/LLD generation can take several minutes; keep the drawer open until complete."
        ]
      },
      {
        "type": "h2",
        "text": "How to open Architecture & Design"
      },
      {
        "type": "steps",
        "items": [
          "Pick Workspace and Sandbox in the header.",
          "Click Architecture & design in the sidebar.",
          "Browse the pipeline table — filter with provider chips (Total, AWS, Azure, GCP) or search by name."
        ]
      },
      {
        "type": "h2",
        "text": "How to generate documents (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Find your pipeline in the list.",
          "Click the action for the document type you need:"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Button",
          "Output"
        ],
        "rows": [
          [
            "HLD",
            "Business-oriented high-level design (Gemini)"
          ],
          [
            "LLD",
            "Technical low-level design with resource detail (Gemini)"
          ],
          [
            "Architecture",
            "Illustrated diagram from the saved canvas + Jane billing estimate"
          ]
        ]
      },
      {
        "type": "steps",
        "items": [
          "A drawer opens on the right with tabs for HLD, LLD, and Architecture (based on your permissions).",
          "If no document exists yet, click Generate HLD, Generate LLD, or view the Architecture tab (diagram syncs from canvas).",
          "Wait for generation — HLD may take up to ~5 minutes; LLD up to ~10 minutes.",
          "Read, scroll, or open the full-screen view:"
        ]
      },
      {
        "type": "list",
        "items": [
          "HLD → navigates to `/hld-view/:pipelineId`",
          "LLD → navigates to `/lld-view/:pipelineId`"
        ]
      },
      {
        "type": "h2",
        "text": "Architecture tab extras"
      },
      {
        "type": "p",
        "text": "The Architecture tab includes:"
      },
      {
        "type": "list",
        "items": [
          "Canvas diagram — components, groups, dependency arrows",
          "Sync cache — refresh the cached diagram from the latest saved pipeline",
          "Estimated billing — Jane TCO card from list prices (see Cost Reporting)"
        ]
      },
      {
        "type": "h2",
        "text": "How to regenerate a document"
      },
      {
        "type": "steps",
        "items": [
          "Open the drawer for the pipeline.",
          "Switch to the HLD or LLD tab.",
          "Click Regenerate (or Generate if empty).",
          "New content replaces the previous version for that tab."
        ]
      },
      {
        "type": "p",
        "text": "Regenerate after major canvas changes so documents stay accurate."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Generate HLD for stakeholders; LLD for engineers implementing or reviewing Terraform.",
          "Use Architecture for workshops — it reflects the live canvas without waiting for Gemini.",
          "Export or share via full-screen HLD/LLD views (print/download controls in the panel toolbar where available).",
          "Pair with Pipeline Deployment docs for change-management packets."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Empty pipeline list",
            "Select a sandbox; create pipelines in My Pipelines"
          ],
          [
            "Generate locked / upgrade card",
            "Upgrade for `enable_hld` or `enable_lld`"
          ],
          [
            "Generation timed out",
            "Retry; simplify pipeline or try off-peak — LLD is the slowest"
          ],
          [
            "Diagram empty",
            "Save pipeline in designer; click Sync cache on Architecture tab"
          ],
          [
            "Billing estimate failed",
            "Save pipeline; retry Refresh on the Jane billing card"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "HLD View · LLD View · Pipeline Designer · Cost Reporting · Jane AI Assistant"
      }
    ]
  },
  {
    "id": "hld-view",
    "section": "Cost & Compliance",
    "title": "HLD View",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "HLD View is a full-screen High Level Design reader for a single pipeline. It presents business context, architecture summary, cost outlook, and implementation notes generated from your saved canvas (via Gemini)."
      },
      {
        "type": "p",
        "text": "Route: `/hld-view/:id` (`:id` = pipeline id)"
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "From Architecture & Design — click HLD on a pipeline row, then open full screen from the drawer",
          "Direct link when you have the pipeline id (for example, shared bookmarks)"
        ]
      },
      {
        "type": "p",
        "text": "Aliases: `/hld` redirects to `/architecture-design` (list page, not this view)."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Users with HLD module access",
          "Subscription feature `enable_hld` must be enabled",
          "You must have read access to the pipeline in your org"
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Generate an HLD first from Architecture & Design (or ensure one was generated previously).",
          "Know the pipeline id — the URL uses the numeric id, not the pipeline name."
        ]
      },
      {
        "type": "h2",
        "text": "How to open HLD View (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Go to Architecture & design (`/architecture-design`).",
          "Select Workspace and Sandbox in the header.",
          "Click HLD on the pipeline row.",
          "In the drawer, generate or load the HLD document.",
          "For full screen, navigate to `/hld-view/{pipelineId}` (opened automatically when using Open full screen from the drawer, if available)."
        ]
      },
      {
        "type": "p",
        "text": "The header shows High Level Design with pipeline name and version subtitle."
      },
      {
        "type": "h2",
        "text": "What you see in HLD View"
      },
      {
        "type": "p",
        "text": "Typical sections (content varies by pipeline):"
      },
      {
        "type": "list",
        "items": [
          "Executive summary and business value",
          "Cloud provider and regional context",
          "Component inventory by category (compute, storage, database, networking)",
          "Estimated cost and implementation timeline",
          "Security and scalability highlights",
          "Toolbar actions: Download text report, Print (where supported)"
        ]
      },
      {
        "type": "p",
        "text": "Content is rendered in the `HLDDesignPanel` with markdown-style layout."
      },
      {
        "type": "h2",
        "text": "How to close or go back"
      },
      {
        "type": "list",
        "items": [
          "Click the close control or press Escape — returns to `/architecture-design`",
          "Use browser back — same destination"
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Regenerate HLD from Architecture & Design after large canvas changes before presenting.",
          "Use HLD in change-advisory boards; pair with LLD View for engineering detail.",
          "Cross-check cost figures with Cost Reporting — HLD cost is illustrative."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Pipeline not found",
            "Confirm id; check sandbox access and that the pipeline was not deleted"
          ],
          [
            "Invalid link",
            "URL must include a numeric pipeline id"
          ],
          [
            "Blank document",
            "Generate HLD from Architecture & Design first"
          ],
          [
            "Upgrade card",
            "Enable `enable_hld` on your subscription"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Architecture & Design · LLD View · Pipeline Designer · Cost Reporting"
      }
    ]
  },
  {
    "id": "lld-view",
    "section": "Cost & Compliance",
    "title": "LLD View",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "LLD View is a full-screen Low Level Design reader for a single pipeline. It documents technical resource configuration, dependencies, Terraform-oriented detail, and operational considerations generated from your saved canvas (via Gemini)."
      },
      {
        "type": "p",
        "text": "Route: `/lld-view/:id` (`:id` = pipeline id)"
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "From Architecture & Design — click LLD on a pipeline row, then open full screen from the drawer",
          "Direct link with pipeline id"
        ]
      },
      {
        "type": "p",
        "text": "Aliases: `/lld` redirects to `/architecture-design` (list page)."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Users with LLD module access",
          "Subscription feature `enable_lld` must be enabled",
          "Read access to the pipeline in your organization"
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Save the pipeline with complete resource configuration in the designer.",
          "Generate LLD from Architecture & Design first — LLD generation is the longest-running doc type (~10 minutes max client timeout).",
          "Have the pipeline id for the URL."
        ]
      },
      {
        "type": "h2",
        "text": "How to open LLD View (step by step)"
      },
      {
        "type": "steps",
        "items": [
          "Open Architecture & design at `/architecture-design`.",
          "Select Workspace and Sandbox.",
          "Click LLD on the target pipeline.",
          "In the drawer, click Generate LLD if no document exists; wait for completion.",
          "Open `/lld-view/{pipelineId}` for the full-screen experience."
        ]
      },
      {
        "type": "p",
        "text": "The header shows Low Level Design with pipeline name and version."
      },
      {
        "type": "h2",
        "text": "What you see in LLD View"
      },
      {
        "type": "p",
        "text": "The `LLDDesignPanel` renders detailed sections such as:"
      },
      {
        "type": "list",
        "items": [
          "Resource-level configuration summary",
          "Network and security boundaries",
          "Data flow and integration points",
          "Terraform / IaC considerations",
          "Operational runbooks and monitoring hooks"
        ]
      },
      {
        "type": "p",
        "text": "Use LLD for engineering reviews, security questionnaires, and handoffs to operations."
      },
      {
        "type": "h2",
        "text": "How to close or go back"
      },
      {
        "type": "list",
        "items": [
          "Close the dialog or press Escape → returns to `/architecture-design`"
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Generate LLD after the pipeline is feature-complete — partial configs produce incomplete docs.",
          "Compare LLD against live Terraform Generation output before production deploy.",
          "Store PDFs or exports from the panel toolbar in your change-management system."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Pipeline not found",
            "Verify id and org access"
          ],
          [
            "Generation failed / timeout",
            "Retry with a smaller pipeline or during off-peak hours"
          ],
          [
            "Outdated content",
            "Regenerate LLD from Architecture & Design after canvas edits"
          ],
          [
            "Feature locked",
            "Upgrade for `enable_lld`"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Architecture & Design · HLD View · Terraform Generation · Pipeline Designer"
      }
    ]
  },
  {
    "id": "security-and-access",
    "section": "Security & Access",
    "title": "Security & Access",
    "intro": "This guide explains how to sign in, invite users, assign roles, manage cloud credentials safely, and run security scans in InfraGlide.",
    "content": [
      {
        "type": "h2",
        "text": "Part 1 — Signing in and access"
      },
      {
        "type": "h3",
        "text": "How to sign in"
      },
      {
        "type": "steps",
        "items": [
          "Go to your organization's InfraGlide URL.",
          "On the Login page, choose your method:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Auth0 (most common for SSO)",
          "Google"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Complete login with your company credentials.",
          "You arrive on the Dashboard."
        ]
      },
      {
        "type": "p",
        "text": "Your administrator chooses which sign-in methods are enabled."
      },
      {
        "type": "h3",
        "text": "If you see \"No Access\""
      },
      {
        "type": "p",
        "text": "You logged in successfully but have no workspace assigned."
      },
      {
        "type": "p",
        "text": "What to do: Ask your organization administrator to send you an invitation with access to the correct workspace and role."
      },
      {
        "type": "h3",
        "text": "How to sign out"
      },
      {
        "type": "p",
        "text": "Use Logout from the user menu (usually top-right)."
      },
      {
        "type": "h2",
        "text": "Part 2 — User roles (what you can do)"
      },
      {
        "type": "p",
        "text": "InfraGlide uses roles to control what you can see and change. Roles apply at different levels:"
      },
      {
        "type": "table",
        "headers": [
          "Role",
          "Typical abilities"
        ],
        "rows": [
          [
            "Org Admin",
            "Everything — onboarding, all workspaces, user management, audit trail"
          ],
          [
            "Admin",
            "Manage users and settings within assigned workspaces or sandboxes"
          ],
          [
            "Editor",
            "Create and edit pipelines, deploy, view resources"
          ],
          [
            "Viewer",
            "View pipelines and resources; cannot deploy or edit"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Roles are assigned at one of these levels:"
      },
      {
        "type": "list",
        "items": [
          "Organization — entire company",
          "Workspace — one team area (and its sandboxes)",
          "Sandbox — one environment only"
        ]
      },
      {
        "type": "p",
        "text": "Example: An Editor on the \"Platform\" workspace can edit all pipelines in dev, staging, and prod sandboxes under Platform."
      },
      {
        "type": "p",
        "text": "If you cannot see a menu item or button, you likely need a higher role — contact your administrator."
      },
      {
        "type": "h2",
        "text": "Part 3 — Inviting users (administrators)"
      },
      {
        "type": "p",
        "text": "Where: Manage Users in the sidebar."
      },
      {
        "type": "p",
        "text": "Who: Organization administrators (and sometimes workspace admins, depending on setup)."
      },
      {
        "type": "h3",
        "text": "How to invite one user"
      },
      {
        "type": "steps",
        "items": [
          "Open Manage Users.",
          "Click Invite user.",
          "Enter their email address.",
          "Choose a role (Viewer, Editor, Admin).",
          "Select which workspace(s) (and optionally sandbox) they can access.",
          "Send the invitation."
        ]
      },
      {
        "type": "p",
        "text": "They receive an email with a link to sign in. On first login, their access is active."
      },
      {
        "type": "h3",
        "text": "How to invite many users"
      },
      {
        "type": "p",
        "text": "If your organization supports bulk invite:"
      },
      {
        "type": "steps",
        "items": [
          "Open Manage Users.",
          "Choose Bulk invite or upload CSV (follow on-screen format).",
          "Upload the file and confirm."
        ]
      },
      {
        "type": "p",
        "text": "Ask your administrator for the required CSV columns."
      },
      {
        "type": "h2",
        "text": "Part 4 — Managing roles and groups (administrators)"
      },
      {
        "type": "p",
        "text": "Where: RBAC Management — Roles and Groups in the sidebar."
      },
      {
        "type": "p",
        "text": "Who: Organization administrators."
      },
      {
        "type": "h3",
        "text": "How to assign a role to a user"
      },
      {
        "type": "steps",
        "items": [
          "Open RBAC Management or Manage Users.",
          "Find the user.",
          "Click Assign role (or edit access).",
          "Choose role, workspace, and sandbox scope.",
          "Save."
        ]
      },
      {
        "type": "h3",
        "text": "How to use groups"
      },
      {
        "type": "p",
        "text": "Groups let you assign the same role to many people at once."
      },
      {
        "type": "steps",
        "items": [
          "Open Groups.",
          "Click Create group (e.g. \"Platform Engineers\").",
          "Add members.",
          "Assign a role grant to the group at org, workspace, or sandbox level.",
          "All members inherit that access."
        ]
      },
      {
        "type": "h2",
        "text": "Part 5 — Viewing who has access"
      },
      {
        "type": "p",
        "text": "Where: Access Explorer (if enabled for your org)."
      },
      {
        "type": "p",
        "text": "Use Access Explorer to see:"
      },
      {
        "type": "list",
        "items": [
          "Which users have access to a workspace",
          "Which roles a user holds",
          "Which modules (sidebar features) they can use"
        ]
      },
      {
        "type": "p",
        "text": "Helpful for audits and onboarding new team leads."
      },
      {
        "type": "h2",
        "text": "Part 6 — Cloud credentials"
      },
      {
        "type": "p",
        "text": "Credentials let InfraGlide deploy to your cloud accounts. They are stored encrypted and used only when you deploy."
      },
      {
        "type": "p",
        "text": "Where: Credentials in the sidebar (Administration)."
      },
      {
        "type": "h3",
        "text": "How to add a credential"
      },
      {
        "type": "steps",
        "items": [
          "Open Credentials.",
          "Click Add credential.",
          "Choose AWS, GCP, or Azure.",
          "Fill in the required fields (keys, service account JSON, etc.).",
          "Click Save.",
          "Click Test to verify the connection works."
        ]
      },
      {
        "type": "h3",
        "text": "How to update or rotate a credential"
      },
      {
        "type": "steps",
        "items": [
          "Open Credentials.",
          "Select the credential.",
          "Click Edit.",
          "Enter new keys or secrets.",
          "Save and Test again."
        ]
      },
      {
        "type": "p",
        "text": "Rotate credentials in InfraGlide whenever you rotate them in your cloud provider."
      },
      {
        "type": "h3",
        "text": "How to delete a credential"
      },
      {
        "type": "steps",
        "items": [
          "Open Credentials.",
          "Select the credential.",
          "Click Delete."
        ]
      },
      {
        "type": "p",
        "text": "You may not be able to delete a credential that is in use by an active deployment."
      },
      {
        "type": "h3",
        "text": "Credential safety rules"
      },
      {
        "type": "list",
        "items": [
          "Never share credential values in chat, email, or with Jane — Jane never asks for secrets.",
          "Use different credentials for dev and production sandboxes.",
          "Grant minimum permissions needed for your pipelines.",
          "Only Admins and Org Admins should manage credentials unless your policy says otherwise."
        ]
      },
      {
        "type": "h2",
        "text": "Part 7 — Security Scan"
      },
      {
        "type": "p",
        "text": "Where: Security in the sidebar (Operations section, near Deployed Resources)."
      },
      {
        "type": "p",
        "text": "Security Scan reviews your deployed resources for common misconfigurations."
      },
      {
        "type": "h3",
        "text": "How to run a security review"
      },
      {
        "type": "steps",
        "items": [
          "Open Security.",
          "Browse findings grouped by severity: Critical, High, Medium, Low.",
          "Click a finding to see affected resources and details.",
          "Fix issues in the Pipeline Designer and re-apply, or fix directly in the cloud if appropriate."
        ]
      },
      {
        "type": "h3",
        "text": "How to understand a finding with Jane"
      },
      {
        "type": "steps",
        "items": [
          "On a finding, click Explain with Jane (or open Jane and ask about the finding).",
          "Jane explains the risk and suggests remediation steps."
        ]
      },
      {
        "type": "h2",
        "text": "Part 8 — Audit trail (org administrators)"
      },
      {
        "type": "p",
        "text": "Where: Observability → Audit Trail tab."
      },
      {
        "type": "p",
        "text": "Who: Organization administrators only."
      },
      {
        "type": "p",
        "text": "The audit trail records actions such as:"
      },
      {
        "type": "list",
        "items": [
          "Logins and logouts",
          "Deployments (plan, apply, destroy)",
          "Credential created, updated, or deleted",
          "Invitations sent",
          "Policies enforced or changed",
          "Schedule created or triggered"
        ]
      },
      {
        "type": "h3",
        "text": "How to review audit logs"
      },
      {
        "type": "steps",
        "items": [
          "Open Observability.",
          "Select scope Organization (org admins only).",
          "Open the Audit Trail tab.",
          "Filter by date, user, or action type.",
          "Click a row for details."
        ]
      },
      {
        "type": "p",
        "text": "Use this for security reviews and compliance evidence."
      },
      {
        "type": "p",
        "text": "See Monitoring for more on Observability."
      },
      {
        "type": "h2",
        "text": "What each sidebar item requires"
      },
      {
        "type": "p",
        "text": "If a menu item is missing or locked, your role or subscription plan may not include it. Common items:"
      },
      {
        "type": "table",
        "headers": [
          "Sidebar item",
          "Usually requires"
        ],
        "rows": [
          [
            "Manage Users",
            "Org Admin + plan feature"
          ],
          [
            "RBAC Management",
            "Org Admin + plan feature"
          ],
          [
            "Credentials",
            "Admin or Editor (varies by org)"
          ],
          [
            "Security / Deployed Resources",
            "Plan feature for operations"
          ],
          [
            "Audit Trail",
            "Org Admin"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Contact your administrator to request access or a plan upgrade."
      },
      {
        "type": "h2",
        "text": "Tips for administrators"
      },
      {
        "type": "steps",
        "items": [
          "Invite with least privilege — start with Viewer or Editor, not Admin.",
          "Use groups for teams that share the same access.",
          "Separate prod credentials — never use dev keys in production sandboxes.",
          "Review audit trail weekly — especially after personnel changes.",
          "Run Security Scan after production deploys.",
          "Enforce compliance on production sandboxes (see Cost & Compliance)."
        ]
      },
      {
        "type": "h2",
        "text": "Tips for all users"
      },
      {
        "type": "steps",
        "items": [
          "Do not share passwords or access keys in tickets or chat.",
          "Sign out on shared computers.",
          "Report \"No Access\" to your admin instead of using someone else's account.",
          "Ask before deploying to prod if you only have Editor access on dev."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "I can't see Manage Users or RBAC You are not an Org Admin, or your plan does not include these modules."
      },
      {
        "type": "p",
        "text": "Credential test fails Check keys, expiration, and IAM permissions. Try a smaller test (e.g. list regions) via your cloud console."
      },
      {
        "type": "p",
        "text": "I can view but not deploy You likely have Viewer role. Ask for Editor on the sandbox."
      },
      {
        "type": "p",
        "text": "Security Scan is empty Deploy at least one pipeline, then refresh. Confirm Deployed Resources is enabled on your plan."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Getting Started — First credential and deploy",
          "Cost & Compliance — Policies and enforcement",
          "Monitoring — Audit trail and logs",
          "Pipelines & Automation — Who can deploy"
        ]
      }
    ]
  },
  {
    "id": "rbac-management",
    "section": "Security & Access",
    "title": "RBAC Management",
    "intro": "This guide explains how to manage roles, module permissions, and access grants at organization, workspace, and sandbox levels in InfraGlide.",
    "content": [
      {
        "type": "p",
        "text": "Where:"
      },
      {
        "type": "table",
        "headers": [
          "Page",
          "URL",
          "Purpose"
        ],
        "rows": [
          [
            "Roles (legacy module matrix)",
            "`/roles`",
            "Configure which modules a role can use per workspace or sandbox"
          ],
          [
            "RBAC Management",
            "`/rbac-management`",
            "Create custom roles, edit module policies, grant access to users and groups"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Who: Organization administrators and workspace/sandbox admins (depending on scope)."
      },
      {
        "type": "p",
        "text": "Requires: `enable_rbac_management` on your subscription plan (Pro and above)."
      },
      {
        "type": "h2",
        "text": "How roles and scopes work"
      },
      {
        "type": "p",
        "text": "InfraGlide controls access with roles assigned at one of three scopes:"
      },
      {
        "type": "table",
        "headers": [
          "Scope",
          "What it covers",
          "Example"
        ],
        "rows": [
          [
            "Organization",
            "Entire company",
            "Org Admin"
          ],
          [
            "Workspace (folder)",
            "One team area and all its sandboxes",
            "Admin on \"Platform Engineering\""
          ],
          [
            "Sandbox (project)",
            "One environment only",
            "Editor on \"staging\""
          ]
        ]
      },
      {
        "type": "p",
        "text": "A user's effective access on a sandbox is the most permissive role they hold — from a direct assignment, a group grant, or inheritance from a parent workspace."
      },
      {
        "type": "p",
        "text": "Common built-in roles include Org Admin, Admin, Editor, and Viewer. Enterprise plans can create custom roles with fine-grained module permissions."
      },
      {
        "type": "h2",
        "text": "Part 1 — Roles page (`/roles`)"
      },
      {
        "type": "p",
        "text": "The Roles page focuses on module access control — which sidebar modules and actions each role may use at a given scope."
      },
      {
        "type": "h3",
        "text": "How to configure module permissions"
      },
      {
        "type": "steps",
        "items": [
          "Open Roles from the sidebar (Administration).",
          "Confirm your access badge (Organization admin, Workspace admin, or Sandbox admin).",
          "Step 1 — Select scope type:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Org admins: choose Workspace",
          "Workspace admins: choose Workspace or Sandbox",
          "Sandbox admins: choose Sandbox only"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Step 2 — Select scope: pick the workspace or sandbox from the header context.",
          "Step 3 — Select role: choose the role to configure.",
          "Review the module matrix — each row is a sidebar module (My Pipelines, Credentials, Hub, etc.).",
          "Toggle permissions for each module (read, write, execute, delete, share, publish — as applicable).",
          "Save changes."
        ]
      },
      {
        "type": "p",
        "text": "Modules such as Dashboard, Settings, and Access Management may be excluded from the matrix."
      },
      {
        "type": "h3",
        "text": "Who can use the Roles page"
      },
      {
        "type": "table",
        "headers": [
          "Your access",
          "What you can configure"
        ],
        "rows": [
          [
            "Org Admin",
            "Module permissions for any workspace"
          ],
          [
            "Workspace Admin",
            "Module permissions for your workspace and its sandboxes"
          ],
          [
            "Sandbox Admin",
            "Module permissions for your sandbox only"
          ]
        ]
      },
      {
        "type": "p",
        "text": "If you see \"You don't have permission to access RBAC Management,\" you need a higher admin role."
      },
      {
        "type": "h2",
        "text": "Part 2 — RBAC Management (`/rbac-management`)"
      },
      {
        "type": "p",
        "text": "RBAC Management is the full role and assignment workspace."
      },
      {
        "type": "h3",
        "text": "Tabs and sections"
      },
      {
        "type": "table",
        "headers": [
          "Section",
          "What you do"
        ],
        "rows": [
          [
            "Roles",
            "Browse system and custom roles; edit module policies per role"
          ],
          [
            "User Assignments",
            "See who holds which role at which scope"
          ],
          [
            "Groups",
            "Shortcut to group management (also at `/groups`)"
          ],
          [
            "Access Report",
            "Summary of user access across the organization"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "How to create a custom role (Enterprise)"
      },
      {
        "type": "steps",
        "items": [
          "Open RBAC Management.",
          "In the role list sidebar, click Create role.",
          "Enter a name and description.",
          "Expand each module and select allowed actions (read, write, execute, etc.).",
          "Save the role.",
          "Use Grant Access to assign the role to users or groups."
        ]
      },
      {
        "type": "p",
        "text": "Custom roles require `enable_custom_roles` (Enterprise tier)."
      },
      {
        "type": "h3",
        "text": "How to edit an existing role's module policies"
      },
      {
        "type": "steps",
        "items": [
          "Open RBAC Management.",
          "Select a role from the left sidebar.",
          "Review or change module action checkboxes.",
          "Save when finished."
        ]
      },
      {
        "type": "p",
        "text": "System roles may have restrictions on what you can change."
      },
      {
        "type": "h3",
        "text": "How to grant access to a user or group"
      },
      {
        "type": "steps",
        "items": [
          "Open RBAC Management.",
          "Go to User Assignments (or click Grant Access).",
          "In the Grant Access dialog:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Principals — search and select one or more users or groups",
          "Role — choose the role to assign",
          "Resource — choose scope: organization, workspace, or sandbox"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Confirm and click Grant Access.",
          "All group members inherit access immediately."
        ]
      },
      {
        "type": "p",
        "text": "See Groups for creating groups before granting group access."
      },
      {
        "type": "h2",
        "text": "Understanding modules"
      },
      {
        "type": "p",
        "text": "Modules map to sidebar features. Examples:"
      },
      {
        "type": "table",
        "headers": [
          "Module",
          "Typical use"
        ],
        "rows": [
          [
            "My Pipelines",
            "Design, save, deploy pipelines"
          ],
          [
            "Credentials",
            "Add and test cloud credentials"
          ],
          [
            "Hub",
            "Browse published templates"
          ],
          [
            "Deployed Resources",
            "Inventory, drift, security, observability"
          ],
          [
            "RBAC Management",
            "Manage roles and grants"
          ],
          [
            "Manage Users",
            "Invite users"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Each module supports a subset of actions (read, write, execute, delete, share, publish). A role's module policy defines which actions are allowed."
      },
      {
        "type": "p",
        "text": "If a sidebar item is missing or buttons are disabled, your role's module policy may not include that action — even if you have a role name like \"Editor.\""
      },
      {
        "type": "h2",
        "text": "Typical workflows"
      },
      {
        "type": "h3",
        "text": "Onboard a new team with the same access"
      },
      {
        "type": "steps",
        "items": [
          "Groups → create a group (for example, \"Platform Engineers\").",
          "Add members to the group.",
          "RBAC Management → Grant Access → select the group → assign Editor at the workspace scope."
        ]
      },
      {
        "type": "h3",
        "text": "Restrict deploy to senior engineers"
      },
      {
        "type": "steps",
        "items": [
          "Create or edit a custom role with execute on My Pipelines but not for all users.",
          "Grant Viewer to junior members at sandbox scope.",
          "Grant Editor (with execute) to leads only."
        ]
      },
      {
        "type": "h3",
        "text": "Audit who can manage credentials"
      },
      {
        "type": "steps",
        "items": [
          "RBAC Management → Access Report or User Assignments.",
          "Filter for roles with write on the Credentials module.",
          "Cross-check with Access Explorer for a single user's effective permissions."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Grant least privilege — start with Viewer or scoped Editor, not Org Admin.",
          "Use groups for teams — one grant instead of many user assignments.",
          "Workspace scope inherits to sandboxes — a workspace Editor can access all sandboxes under that workspace unless overridden.",
          "Save module matrix changes on `/roles` before testing with a non-admin account.",
          "Custom roles on Enterprise — align module policies with your internal job titles."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "RBAC Management is locked in the sidebar Your plan needs `enable_rbac_management` (Pro+). See Subscription Tiers."
      },
      {
        "type": "p",
        "text": "I cannot create custom roles Custom roles require Enterprise (`enable_custom_roles`)."
      },
      {
        "type": "p",
        "text": "User still cannot deploy after I granted Editor Check module permissions — execute on My Pipelines must be enabled for that role at the correct scope."
      },
      {
        "type": "p",
        "text": "Grant Access dialog shows no groups Create groups first on `/groups`. Groups require Pro+ with `enable_groups`."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Manage Users — Invitations and seat limits",
          "Groups — Create groups and add members",
          "Access Explorer — Visualize effective user access",
          "Multi-Tenancy — Organizations, workspaces, sandboxes",
          "Security & Access — Overview of sign-in and credentials"
        ]
      }
    ]
  },
  {
    "id": "manage-users",
    "section": "Security & Access",
    "title": "Manage Users",
    "intro": "This guide explains how organization administrators invite users, manage seat limits, assign roles, and track invitation status on the Manage Users page.",
    "content": [
      {
        "type": "p",
        "text": "Where: Manage Users in the sidebar — `/manage-users`."
      },
      {
        "type": "p",
        "text": "Who: Organization administrators and workspace administrators (scope depends on your access)."
      },
      {
        "type": "p",
        "text": "Requires: `enable_manage_users` on your subscription plan (Starter and above)."
      },
      {
        "type": "h2",
        "text": "Before you begin"
      },
      {
        "type": "steps",
        "items": [
          "Confirm you are an Org Admin or workspace admin with user-management access.",
          "Check your organization's seat limit — the banner at the top of Manage Users shows used vs available seats.",
          "Have the invitee's email address and intended role and scope (workspace and optionally sandbox) ready."
        ]
      },
      {
        "type": "p",
        "text": "Users cannot self-register — they must receive an invitation from an administrator."
      },
      {
        "type": "h2",
        "text": "Understanding the Manage Users page"
      },
      {
        "type": "p",
        "text": "The page shows everyone associated with the selected workspace context:"
      },
      {
        "type": "table",
        "headers": [
          "Column / area",
          "Meaning"
        ],
        "rows": [
          [
            "Name / email",
            "User identity or invitation target"
          ],
          [
            "Status",
            "Active, pending invitation, expired, or cancelled"
          ],
          [
            "Role",
            "Assigned role (Viewer, Editor, Admin, etc.)"
          ],
          [
            "Workspace / sandbox",
            "Scope of the assignment"
          ],
          [
            "Group",
            "Initial group if invited into one"
          ],
          [
            "Seat usage",
            "Org-wide license count (org admins)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Use Search and Status filter to find pending invitations or active users quickly."
      },
      {
        "type": "h2",
        "text": "How to invite one user"
      },
      {
        "type": "steps",
        "items": [
          "Open Manage Users.",
          "Click Invite user (or Invite).",
          "In the invite dialog:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Enter first name and last name (optional but recommended)",
          "Enter email address",
          "Optionally choose an initial group"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Choose invitation mode Single if inviting one person.",
          "Click Send invitation."
        ]
      },
      {
        "type": "p",
        "text": "The user receives an email with a sign-in link. On first login via Auth0 (or your configured provider), their access is activated."
      },
      {
        "type": "h3",
        "text": "After sending"
      },
      {
        "type": "list",
        "items": [
          "Status shows Pending until they accept.",
          "You can copy the invitation link in some configurations.",
          "You can cancel a pending invitation if sent by mistake."
        ]
      },
      {
        "type": "h2",
        "text": "How to invite many users (bulk)"
      },
      {
        "type": "p",
        "text": "Requires: `enable_bulk_invitations` (Enterprise tier)."
      },
      {
        "type": "steps",
        "items": [
          "Open Manage Users.",
          "Click Invite user.",
          "Switch to Bulk mode.",
          "Enter multiple email addresses (one per line or as specified on screen).",
          "Optionally assign an initial group.",
          "Send invitations."
        ]
      },
      {
        "type": "p",
        "text": "Review the success and failure counts in the confirmation toast. Failed addresses are logged for follow-up."
      },
      {
        "type": "h2",
        "text": "How to edit a user's role assignment"
      },
      {
        "type": "steps",
        "items": [
          "Find the active user in the table.",
          "Click Edit (pencil icon) on their row.",
          "In the edit dialog, change:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Role (Viewer, Editor, Admin)",
          "Workspace and/or sandbox scope"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Save."
        ]
      },
      {
        "type": "p",
        "text": "Changes take effect on the user's next request; they may need to refresh or re-select workspace context."
      },
      {
        "type": "h2",
        "text": "How to deactivate or remove access"
      },
      {
        "type": "steps",
        "items": [
          "Find the user in the table.",
          "Click Deactivate (or the remove-access action).",
          "Confirm."
        ]
      },
      {
        "type": "p",
        "text": "Deactivation revokes the role assignment. The user may still appear in the list with an inactive status depending on your filters."
      },
      {
        "type": "p",
        "text": "For pending invitations, use Cancel invitation instead."
      },
      {
        "type": "h2",
        "text": "How to view a user's audit history"
      },
      {
        "type": "steps",
        "items": [
          "Select an active user.",
          "Click Audit history (history icon) if available.",
          "Review login, role change, and invitation events for that user."
        ]
      },
      {
        "type": "p",
        "text": "Org-wide audit logs are on Observability → Audit Trail (Enterprise). See Audit Logging."
      },
      {
        "type": "h2",
        "text": "Seat limits and license requests"
      },
      {
        "type": "p",
        "text": "When your organization reaches its seat limit:"
      },
      {
        "type": "steps",
        "items": [
          "New invitations fail with a Seat limit reached message.",
          "A Request more licenses dialog may appear.",
          "Submit a license request or contact your InfraGlide account administrator to upgrade the plan or increase `limit_max_users`."
        ]
      },
      {
        "type": "p",
        "text": "Org admins see Seat usage (for example, `18 / 25`) at the top of the page."
      },
      {
        "type": "h2",
        "text": "Invitation status reference"
      },
      {
        "type": "table",
        "headers": [
          "Status",
          "Meaning",
          "What to do"
        ],
        "rows": [
          [
            "Pending",
            "Email sent; user has not signed in",
            "Resend or cancel if needed"
          ],
          [
            "Accepted / Active",
            "User signed in and has access",
            "Edit role or deactivate if responsibilities change"
          ],
          [
            "Expired",
            "Invitation link timed out",
            "Send a new invitation"
          ],
          [
            "Cancelled",
            "Admin cancelled before acceptance",
            "Invite again if still needed"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Who can manage users"
      },
      {
        "type": "table",
        "headers": [
          "Your role",
          "Typical abilities"
        ],
        "rows": [
          [
            "Org Admin",
            "Invite, edit, deactivate any user in the org; see seat usage"
          ],
          [
            "Workspace Admin",
            "Manage users within assigned workspaces"
          ],
          [
            "Sandbox Admin",
            "May manage users within a sandbox (if enabled)"
          ],
          [
            "Editor / Viewer",
            "No access to Manage Users"
          ]
        ]
      },
      {
        "type": "p",
        "text": "If Manage Users is missing or locked, you lack admin access or your plan does not include `enable_manage_users`."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Invite with least privilege — default to Viewer or scoped Editor, not Admin.",
          "Use groups for teams — assign an initial group at invite time; grant roles to the group in RBAC Management.",
          "Watch seat usage before bulk invites on Pro plans.",
          "Cancel stale invitations — expired pending rows clutter the table.",
          "Auth0 invitations — if your org uses Auth0 Organizations, invitation emails may route through Okta/SSO; see Authentication."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Manage Users is locked Upgrade to Starter or above, or ask an org admin to grant access. Flag: `enable_manage_users`."
      },
      {
        "type": "p",
        "text": "User signed in but sees No Access They accepted login but have no role assignment. Edit their role or send a new invitation with the correct workspace."
      },
      {
        "type": "p",
        "text": "Invitation email not received Check spam folders. Verify the email address. Cancel and resend. Confirm seat limit is not exceeded."
      },
      {
        "type": "p",
        "text": "Bulk invite not available Bulk invitations require Enterprise (`enable_bulk_invitations`)."
      },
      {
        "type": "p",
        "text": "Cannot deactivate yourself Another org admin must change your assignment."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Authentication — Login flow and invitation acceptance",
          "RBAC Management — Roles and module permissions",
          "Groups — Team-based access",
          "Multi-Tenancy — Workspaces and sandboxes",
          "Subscription Tiers — Seat limits and feature flags"
        ]
      }
    ]
  },
  {
    "id": "groups",
    "section": "Security & Access",
    "title": "Groups",
    "intro": "This guide explains how to create groups, add members, and assign role grants so entire teams share the same access in InfraGlide.",
    "content": [
      {
        "type": "p",
        "text": "Where: Groups in the sidebar — `/groups`."
      },
      {
        "type": "p",
        "text": "Who: Organization administrators."
      },
      {
        "type": "p",
        "text": "Requires: `enable_groups` on your subscription plan (Pro and above)."
      },
      {
        "type": "h2",
        "text": "Why use groups?"
      },
      {
        "type": "p",
        "text": "Groups simplify access management:"
      },
      {
        "type": "list",
        "items": [
          "One grant, many users — assign a role to a group instead of each person individually.",
          "Easier onboarding — add new hires to an existing group; they inherit access immediately.",
          "Easier offboarding — remove a user from the group when they change teams."
        ]
      },
      {
        "type": "p",
        "text": "Groups work together with RBAC Management — you create and populate groups here, then assign role grants to groups there."
      },
      {
        "type": "h2",
        "text": "Before you begin"
      },
      {
        "type": "steps",
        "items": [
          "Confirm your plan includes groups (Pro+).",
          "Users you want to add must already be invited and active in your organization (see Manage Users).",
          "Know which role and scope (organization, workspace, or sandbox) the group should receive."
        ]
      },
      {
        "type": "h2",
        "text": "How to create a group"
      },
      {
        "type": "steps",
        "items": [
          "Open Groups from the sidebar.",
          "Click Create group (or the + action).",
          "In the dialog:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Enter a name (for example, `Platform Engineers` or `FinOps Analysts`)",
          "Enter an optional description"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Create."
        ]
      },
      {
        "type": "p",
        "text": "The new group appears in the left list. Select it to manage members."
      },
      {
        "type": "h2",
        "text": "How to add members to a group"
      },
      {
        "type": "steps",
        "items": [
          "On Groups, select the group from the list.",
          "Click Add members.",
          "Search for users by name or email.",
          "Select one or more users from the available list.",
          "Confirm Add."
        ]
      },
      {
        "type": "p",
        "text": "Members appear in the group's member table with the date they were added."
      },
      {
        "type": "h3",
        "text": "Remove a member"
      },
      {
        "type": "steps",
        "items": [
          "Select the group.",
          "Find the member in the list.",
          "Click Remove (or trash icon).",
          "Confirm."
        ]
      },
      {
        "type": "p",
        "text": "Removing a member revokes access that came only through this group's role grants. Direct user assignments are unchanged."
      },
      {
        "type": "h2",
        "text": "How to edit or delete a group"
      },
      {
        "type": "h3",
        "text": "Edit name or description"
      },
      {
        "type": "steps",
        "items": [
          "Select the group.",
          "Click Edit.",
          "Update name or description.",
          "Save."
        ]
      },
      {
        "type": "h3",
        "text": "Delete a group"
      },
      {
        "type": "steps",
        "items": [
          "Select the group.",
          "Click Delete.",
          "Confirm in the alert dialog."
        ]
      },
      {
        "type": "p",
        "text": "Deleting a group removes its memberships. Role grants assigned to the group in RBAC Management should be removed separately if no longer needed."
      },
      {
        "type": "h2",
        "text": "How to assign role grants to a group"
      },
      {
        "type": "p",
        "text": "Groups do not grant access by themselves — you assign a role at a scope through RBAC Management."
      },
      {
        "type": "steps",
        "items": [
          "Open RBAC Management (`/rbac-management`).",
          "Click Grant Access (User Assignments tab).",
          "In Principals, search for your group (not individual users).",
          "Select the group.",
          "Choose the role (Viewer, Editor, Admin, or a custom role).",
          "Choose the resource scope:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Organization — entire company",
          "Workspace — one team area and all its sandboxes",
          "Sandbox — one environment only"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Grant Access."
        ]
      },
      {
        "type": "p",
        "text": "All current and future members of the group inherit that role at the chosen scope."
      },
      {
        "type": "h3",
        "text": "Example"
      },
      {
        "type": "table",
        "headers": [
          "Group",
          "Role",
          "Scope",
          "Result"
        ],
        "rows": [
          [
            "Platform Engineers",
            "Editor",
            "Workspace: Platform",
            "All members can edit and deploy in every sandbox under Platform"
          ],
          [
            "FinOps Analysts",
            "Viewer",
            "Organization",
            "All members can view (not edit) across the org"
          ],
          [
            "Prod Deployers",
            "Editor",
            "Sandbox: production",
            "Only production deploy rights"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Invite users directly into a group"
      },
      {
        "type": "p",
        "text": "When inviting new users, you can assign an initial group:"
      },
      {
        "type": "steps",
        "items": [
          "Manage Users → Invite user.",
          "Select the initial group in the invite dialog.",
          "Send the invitation."
        ]
      },
      {
        "type": "p",
        "text": "After the user accepts, they are a group member and inherit the group's role grants."
      },
      {
        "type": "h2",
        "text": "Group limits by plan"
      },
      {
        "type": "table",
        "headers": [
          "Plan",
          "Max groups"
        ],
        "rows": [
          [
            "Free / Starter",
            "0 (feature disabled)"
          ],
          [
            "Pro",
            "10"
          ],
          [
            "Enterprise",
            "Unlimited"
          ]
        ]
      },
      {
        "type": "p",
        "text": "See Subscription Tiers for full limits."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Name groups by function — \"DevOps Team\", not \"Group 1\".",
          "One primary group per team — avoid overlapping grants that confuse effective access.",
          "Grant at workspace scope when the whole team shares all sandboxes.",
          "Grant at sandbox scope for production-only access.",
          "Review grants after reorganizations — update group membership instead of re-inviting users."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Groups menu item is missing or locked Your plan needs Pro+ with `enable_groups`."
      },
      {
        "type": "p",
        "text": "User in group still lacks access Confirm a role grant exists for the group in RBAC Management at the correct scope. Check Access Explorer for effective permissions."
      },
      {
        "type": "p",
        "text": "Cannot add a user to a group The user must be active in your organization first — send an invitation from Manage Users."
      },
      {
        "type": "p",
        "text": "Group limit reached Upgrade to Enterprise or remove unused groups on Pro plans."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "RBAC Management — Grant roles to groups",
          "Manage Users — Invitations and initial group assignment",
          "Access Explorer — Verify effective access",
          "Multi-Tenancy — Workspace and sandbox scopes"
        ]
      }
    ]
  },
  {
    "id": "access-explorer",
    "section": "Security & Access",
    "title": "Access Explorer",
    "intro": "This guide explains how to use Access Explorer to visualize a user's effective permissions across your organization — including how roles are inherited from groups and parent workspaces.",
    "content": [
      {
        "type": "p",
        "text": "Where: Access Explorer in the sidebar — `/access-explorer`."
      },
      {
        "type": "p",
        "text": "Who: Organization administrators (organization-wide view)."
      },
      {
        "type": "h2",
        "text": "What Access Explorer shows"
      },
      {
        "type": "p",
        "text": "Access Explorer answers questions like:"
      },
      {
        "type": "list",
        "items": [
          "What can this user do on a specific sandbox?",
          "Why do they have Editor access — direct grant or through a group?",
          "Which sidebar modules can they use (read, write, deploy, etc.)?",
          "Which access path \"wins\" when multiple roles apply?"
        ]
      },
      {
        "type": "p",
        "text": "Instead of tracing grants manually across Manage Users, Groups, and RBAC Management, you pick a user and resource and see the computed result."
      },
      {
        "type": "h2",
        "text": "Before you begin"
      },
      {
        "type": "steps",
        "items": [
          "Sign in as an organization administrator.",
          "Ensure users, groups, and role grants are already configured (see RBAC Management and Groups).",
          "Open Access Explorer from the sidebar."
        ]
      },
      {
        "type": "h2",
        "text": "How to explore a user's access"
      },
      {
        "type": "steps",
        "items": [
          "Open Access Explorer (`/access-explorer`).",
          "At the top, confirm you are in the Organization Admin view.",
          "Enter or select the user (email or name).",
          "Review group memberships shown for that user.",
          "Select a resource to inspect:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Organization",
          "Workspace (folder)",
          "Sandbox (project)"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Click Check permissions (or the equivalent action)."
        ]
      },
      {
        "type": "p",
        "text": "Results appear in the Effective Permissions panel."
      },
      {
        "type": "h2",
        "text": "How to read the results"
      },
      {
        "type": "h3",
        "text": "Effective role"
      },
      {
        "type": "p",
        "text": "The winning role at the selected resource — for example, Editor - Pipeline Focus or Viewer."
      },
      {
        "type": "p",
        "text": "When multiple grants apply, InfraGlide picks the most permissive role unless a more specific rule applies."
      },
      {
        "type": "h3",
        "text": "Access paths"
      },
      {
        "type": "p",
        "text": "Each path shows how the user received a role:"
      },
      {
        "type": "table",
        "headers": [
          "Path status",
          "Meaning"
        ],
        "rows": [
          [
            "Winning",
            "This path determines the effective role"
          ],
          [
            "Superseded",
            "A more permissive path overrides this one"
          ],
          [
            "No access",
            "This group or grant does not apply here"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Each path lists steps, for example:"
      },
      {
        "type": "steps",
        "items": [
          "Alice is a member of DevOps Team",
          "DevOps Team was granted Editor on Workspace: Production",
          "Sandbox: Prod-Web-App inherits from its parent workspace"
        ]
      },
      {
        "type": "h3",
        "text": "Module permissions"
      },
      {
        "type": "p",
        "text": "A table of sidebar modules and allowed actions:"
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "Typical meaning"
        ],
        "rows": [
          [
            "read",
            "View pages and data"
          ],
          [
            "write",
            "Create and edit"
          ],
          [
            "execute",
            "Run deploys, plans, applies"
          ],
          [
            "delete",
            "Remove resources or pipelines"
          ],
          [
            "share",
            "Share pipelines with others"
          ],
          [
            "publish",
            "Publish to Hub"
          ]
        ]
      },
      {
        "type": "p",
        "text": "If a module shows all actions false, the user's role does not include that module — the sidebar item may be hidden or read-only."
      },
      {
        "type": "h2",
        "text": "Example scenarios"
      },
      {
        "type": "h3",
        "text": "Audit before production deploy access"
      },
      {
        "type": "steps",
        "items": [
          "Select the user who requested prod access.",
          "Choose the production sandbox resource.",
          "Confirm execute is true on My Pipelines.",
          "Review access paths — prefer group-based grants for teams."
        ]
      },
      {
        "type": "h3",
        "text": "Debug \"I should have access but don't\""
      },
      {
        "type": "steps",
        "items": [
          "Select the user.",
          "Choose the sandbox they cannot access.",
          "Look for No access paths — often a missing group grant or wrong workspace inheritance.",
          "Fix in RBAC Management → Grant Access, then re-check."
        ]
      },
      {
        "type": "h3",
        "text": "Compare two users on the same sandbox"
      },
      {
        "type": "steps",
        "items": [
          "Run Access Explorer for user A on the sandbox.",
          "Note effective role and module matrix.",
          "Repeat for user B and compare."
        ]
      },
      {
        "type": "h2",
        "text": "How Access Explorer relates to other admin pages"
      },
      {
        "type": "table",
        "headers": [
          "Page",
          "Best for"
        ],
        "rows": [
          [
            "Manage Users",
            "Inviting, deactivating, invitation status"
          ],
          [
            "Groups",
            "Creating teams and membership"
          ],
          [
            "RBAC Management",
            "Creating roles and granting access"
          ],
          [
            "Access Explorer",
            "Understanding effective result for one user + resource"
          ],
          [
            "Roles (`/roles`)",
            "Editing module matrix per role at a scope"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Use Access Explorer after making grant changes to verify the outcome."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Check inheritance — workspace grants flow down to sandboxes; users may have access you did not assign directly.",
          "Groups first — if access paths mention a group, update group membership rather than adding duplicate user grants.",
          "Module vs role name — a user can be \"Editor\" but lack Hub publish if module policies restrict it.",
          "Document winning paths — screenshot or export findings for compliance audits.",
          "Re-check after org changes — mergers and team moves often leave stale group grants."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Access Explorer not in sidebar Typically org-admin only. Confirm your role and plan."
      },
      {
        "type": "p",
        "text": "Effective role seems wrong Review all access paths — a workspace Editor overrides a sandbox Viewer. Remove conflicting grants in RBAC Management."
      },
      {
        "type": "p",
        "text": "Module shows access but sidebar is locked Subscription feature flags may block the module even when RBAC allows it. See Subscription Tiers."
      },
      {
        "type": "p",
        "text": "User not found They must be an active organization member. Pending invitations do not appear."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "RBAC Management — Roles, modules, and grants",
          "Groups — Team membership",
          "Manage Users — Invitations",
          "Multi-Tenancy — Organization, workspace, sandbox hierarchy",
          "Audit Logging — Historical record of access changes"
        ]
      }
    ]
  },
  {
    "id": "multi-tenancy",
    "section": "Security & Access",
    "title": "Multi-Tenancy",
    "intro": "This guide explains how InfraGlide organizes work across organizations, workspaces, and sandboxes — and how data stays isolated between them. If you are new to these terms, see the glossary in the InfraGlide User Guides index.",
    "content": [
      {
        "type": "h2",
        "text": "The hierarchy"
      },
      {
        "type": "p",
        "text": "InfraGlide uses three nested levels:"
      },
      {
        "type": "code",
        "lang": "text",
        "lines": [
          "Organization (your company)",
          " └── Workspace (team or business unit)",
          "      └── Sandbox (environment: dev, staging, prod, …)",
          "           └── Pipelines, credentials, deployments"
        ]
      },
      {
        "type": "table",
        "headers": [
          "Level",
          "UI label",
          "What it represents"
        ],
        "rows": [
          [
            "Organization",
            "Organization",
            "Your company tenant — billing, users, org-wide policies"
          ],
          [
            "Workspace",
            "Workspace (folder)",
            "A team or division — Platform Engineering, Data, Security"
          ],
          [
            "Sandbox",
            "Sandbox (project)",
            "An environment — dev, staging, production"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Pipelines, credentials, and deployments belong to a sandbox. Users select workspace and sandbox in the header bar before designing or deploying."
      },
      {
        "type": "h2",
        "text": "Organizations"
      },
      {
        "type": "p",
        "text": "An organization is the top-level tenant. Everything you see after login belongs to one organization."
      },
      {
        "type": "h3",
        "text": "What lives at organization scope"
      },
      {
        "type": "list",
        "items": [
          "Subscription plan and feature flags",
          "User invitations and seat limits",
          "Org-wide compliance policies (when scoped to ORG)",
          "Audit trail (Enterprise org admins)",
          "SSO / Auth0 configuration (Enterprise)"
        ]
      },
      {
        "type": "h3",
        "text": "Organization administrators"
      },
      {
        "type": "p",
        "text": "Org Admins can:"
      },
      {
        "type": "list",
        "items": [
          "Run the Onboarding Wizard for new organizations",
          "Create workspaces and sandboxes",
          "Invite users and manage all role assignments",
          "Configure org-wide settings and policies"
        ]
      },
      {
        "type": "h2",
        "text": "Workspaces"
      },
      {
        "type": "p",
        "text": "A workspace groups sandboxes for one team or business area."
      },
      {
        "type": "h3",
        "text": "Examples"
      },
      {
        "type": "table",
        "headers": [
          "Workspace",
          "Typical sandboxes"
        ],
        "rows": [
          [
            "Platform Engineering",
            "dev, staging, prod"
          ],
          [
            "Data Analytics",
            "dev, prod"
          ],
          [
            "Security Tools",
            "staging, prod"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "What lives at workspace scope"
      },
      {
        "type": "list",
        "items": [
          "Role grants at workspace level apply to all sandboxes under that workspace unless overridden at sandbox scope.",
          "Compliance policy bindings can target specific workspaces.",
          "Manage Users list is often filtered by selected workspace context."
        ]
      },
      {
        "type": "h3",
        "text": "How to create a workspace (admins)"
      },
      {
        "type": "steps",
        "items": [
          "During Onboarding (Step 2 — Workspaces), or from Settings / admin configuration.",
          "Click Add workspace.",
          "Enter a name and save.",
          "Add sandboxes inside it (see below)."
        ]
      },
      {
        "type": "p",
        "text": "See Getting Started for the onboarding wizard."
      },
      {
        "type": "h2",
        "text": "Sandboxes"
      },
      {
        "type": "p",
        "text": "A sandbox is an isolated environment within a workspace — usually mapped to dev, staging, or production."
      },
      {
        "type": "h3",
        "text": "What lives at sandbox scope"
      },
      {
        "type": "list",
        "items": [
          "Pipelines — your canvas designs and versions",
          "Credentials — cloud account access for deploys in this sandbox",
          "Deployments — plan, apply, destroy runs",
          "Deployed resources — inventory tracked per successful deploy",
          "Drift events — compared per deployed pipeline"
        ]
      },
      {
        "type": "h3",
        "text": "How to create a sandbox (admins)"
      },
      {
        "type": "steps",
        "items": [
          "During Onboarding (Step 3 — Sandboxes), or from admin settings.",
          "Select a workspace.",
          "Click Add sandbox.",
          "Enter a name (for example, `dev`, `staging`, `prod`).",
          "Save."
        ]
      },
      {
        "type": "h3",
        "text": "Switching sandbox context"
      },
      {
        "type": "steps",
        "items": [
          "Use the workspace bar in the app header.",
          "Select workspace, then sandbox.",
          "Pages such as Dashboard, My Pipelines, and Deployed Resources reload data for that sandbox."
        ]
      },
      {
        "type": "p",
        "text": "Your selection is remembered in the browser for the next session."
      },
      {
        "type": "h2",
        "text": "Isolation and security"
      },
      {
        "type": "p",
        "text": "InfraGlide isolates data between sandboxes and organizations:"
      },
      {
        "type": "table",
        "headers": [
          "Isolated by sandbox",
          "Isolated by organization"
        ],
        "rows": [
          [
            "Pipelines and versions",
            "User directory"
          ],
          [
            "Deployment history and state",
            "Subscription and billing"
          ],
          [
            "Credentials (when scoped to sandbox)",
            "SSO tenant"
          ],
          [
            "Drift and deployed resource inventory",
            "Cross-org access (always forbidden)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Rules:"
      },
      {
        "type": "list",
        "items": [
          "Users only see workspaces and sandboxes they have a role grant for.",
          "Credentials should use separate cloud accounts for dev vs production sandboxes.",
          "Terraform state is one file per pipeline version — never shared across versions or sandboxes.",
          "Cross-organization credential access returns 403 Forbidden."
        ]
      },
      {
        "type": "h2",
        "text": "How access scopes map to the hierarchy"
      },
      {
        "type": "p",
        "text": "Roles are assigned at one of three levels:"
      },
      {
        "type": "table",
        "headers": [
          "Scope",
          "Grants access to"
        ],
        "rows": [
          [
            "Organization",
            "All workspaces and sandboxes"
          ],
          [
            "Workspace",
            "That workspace and all its sandboxes"
          ],
          [
            "Sandbox",
            "That sandbox only"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Example: An Editor on workspace \"Platform\" can edit pipelines in dev, staging, and prod sandboxes under Platform — but not in another workspace."
      },
      {
        "type": "p",
        "text": "See RBAC Management for granting access."
      },
      {
        "type": "h2",
        "text": "Typical organizational patterns"
      },
      {
        "type": "h3",
        "text": "Single product team"
      },
      {
        "type": "list",
        "items": [
          "One workspace: `Product`",
          "Sandboxes: `dev`, `staging`, `prod`",
          "Separate AWS/GCP credentials per sandbox"
        ]
      },
      {
        "type": "h3",
        "text": "Multiple business units"
      },
      {
        "type": "list",
        "items": [
          "Workspaces: `Platform`, `Data`, `Marketing`",
          "Each workspace has its own dev/prod sandboxes",
          "Group-based grants per workspace"
        ]
      },
      {
        "type": "h3",
        "text": "Strict production separation"
      },
      {
        "type": "list",
        "items": [
          "Most engineers: Editor on `dev` and `staging` sandboxes only",
          "Small group: Editor on `prod` sandbox only",
          "Org-wide Viewer for leadership dashboards"
        ]
      },
      {
        "type": "h2",
        "text": "Limits by subscription plan"
      },
      {
        "type": "p",
        "text": "Plans cap how many workspaces and sandboxes you can create:"
      },
      {
        "type": "table",
        "headers": [
          "Plan",
          "Max workspaces",
          "Max sandboxes"
        ],
        "rows": [
          [
            "Free",
            "2",
            "3"
          ],
          [
            "Starter",
            "5",
            "10"
          ],
          [
            "Pro",
            "20",
            "50"
          ],
          [
            "Enterprise",
            "Unlimited",
            "Unlimited"
          ]
        ]
      },
      {
        "type": "p",
        "text": "See Subscription Tiers for full limits and feature flags."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Name sandboxes clearly — use `prod`, not `project-1`.",
          "Match cloud accounts to sandboxes — never share prod credentials in dev.",
          "Select sandbox before deploying — the header context determines where pipelines save and deploy.",
          "Use workspace-level grants for teams that share all environments.",
          "Use sandbox-level grants for production-only access."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "I do not see a workspace or sandbox Ask an administrator for a role grant at the correct scope. You may see No Access if you have none."
      },
      {
        "type": "p",
        "text": "Pipeline saved to wrong environment Check the header sandbox before saving. Move or recreate the pipeline if needed."
      },
      {
        "type": "p",
        "text": "Data from another sandbox appears Refresh the page and re-select workspace and sandbox. Confirm you are not viewing org-wide Observability scope."
      },
      {
        "type": "p",
        "text": "Cannot create more sandboxes You hit the plan limit — upgrade or remove unused sandboxes."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Getting Started — Onboarding wizard",
          "Templates & Projects — Organizing pipeline work",
          "RBAC Management — Scoped role grants",
          "Manage Users — Invite users to workspaces",
          "Subscription Tiers — Plan limits"
        ]
      }
    ]
  },
  {
    "id": "subscription-tiers",
    "section": "Security & Access",
    "title": "Subscription Tiers",
    "intro": "This guide explains InfraGlide subscription plans, feature flags, and what happens when a feature is locked on your plan — including the partial dashboard lock.",
    "content": [
      {
        "type": "p",
        "text": "Who this is for: All users (to understand locked features) and administrators (to plan upgrades)."
      },
      {
        "type": "h2",
        "text": "Available plans"
      },
      {
        "type": "p",
        "text": "InfraGlide offers four tiers:"
      },
      {
        "type": "table",
        "headers": [
          "Plan",
          "Typical audience"
        ],
        "rows": [
          [
            "Free",
            "Evaluation — design pipelines, no deploy"
          ],
          [
            "Starter",
            "Small teams starting to deploy"
          ],
          [
            "Pro",
            "Production teams with operations and RBAC"
          ],
          [
            "Enterprise",
            "Large orgs — SSO, audit, bulk invite, unlimited scale"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Your organization administrator or InfraGlide account team assigns the plan. You see locked features as grayed sidebar items, lock icons, or upgrade prompts in the app."
      },
      {
        "type": "h2",
        "text": "Feature flags explained"
      },
      {
        "type": "p",
        "text": "Features are controlled by boolean flags in your organization's subscription JSON. The app checks flags before showing pages, buttons, or API actions."
      },
      {
        "type": "p",
        "text": "Below are the flags most users encounter. `true` = enabled on that plan."
      },
      {
        "type": "h3",
        "text": "Dashboard"
      },
      {
        "type": "table",
        "headers": [
          "Flag",
          "Free",
          "Starter",
          "Pro",
          "Enterprise",
          "What it controls"
        ],
        "rows": [
          [
            "`enable_dashboard_basic`",
            "✓",
            "✓",
            "✓",
            "✓",
            "Dashboard page loads — greeting, quick actions, pipeline list"
          ],
          [
            "`enable_dashboard_analytics`",
            "",
            "✓",
            "✓",
            "✓",
            "Deployment trend chart and analytics strip on Dashboard"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Partial dashboard lock: On Free, the Dashboard loads (`enable_dashboard_basic`) but the Deployment trend card is locked (`enable_dashboard_analytics` false). The sidebar shows a partial lock icon on Dashboard — the page is usable, one section needs upgrade."
      },
      {
        "type": "h3",
        "text": "Pipelines and deploy"
      },
      {
        "type": "table",
        "headers": [
          "Flag",
          "Free",
          "Starter",
          "Pro",
          "Enterprise",
          "What it controls"
        ],
        "rows": [
          [
            "`enable_pipeline_save`",
            "✓",
            "✓",
            "✓",
            "✓",
            "Save pipelines"
          ],
          [
            "`enable_pipeline_import`",
            "✓",
            "✓",
            "✓",
            "✓",
            "Import Terraform"
          ],
          [
            "`enable_pipeline_export`",
            "",
            "✓",
            "✓",
            "✓",
            "Export pipeline / Terraform"
          ],
          [
            "`enable_pipeline_deploy`",
            "",
            "✓",
            "✓",
            "✓",
            "Plan, Apply, Destroy buttons"
          ],
          [
            "`enable_pipeline_publish`",
            "",
            "",
            "✓",
            "✓",
            "Publish to Hub"
          ],
          [
            "`enable_pipeline_share`",
            "",
            "",
            "✓",
            "✓",
            "Share pipelines"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Without `enable_pipeline_deploy`, you can design and save but not deploy."
      },
      {
        "type": "h3",
        "text": "Hub and architecture docs"
      },
      {
        "type": "table",
        "headers": [
          "Flag",
          "Free",
          "Starter",
          "Pro",
          "Enterprise",
          "What it controls"
        ],
        "rows": [
          [
            "`enable_hub_browse`",
            "",
            "✓",
            "✓",
            "✓",
            "Hub — browse published templates"
          ],
          [
            "`enable_hub_publish`",
            "",
            "",
            "✓",
            "✓",
            "Publish templates to Hub"
          ],
          [
            "`enable_hld`",
            "",
            "✓",
            "✓",
            "✓",
            "HLD (high-level design) module"
          ],
          [
            "`enable_lld`",
            "",
            "",
            "✓",
            "✓",
            "LLD (low-level design) module"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Deployed resources and operations"
      },
      {
        "type": "table",
        "headers": [
          "Flag",
          "Free",
          "Starter",
          "Pro",
          "Enterprise",
          "What it controls"
        ],
        "rows": [
          [
            "`enable_deployed_resources`",
            "",
            "✓",
            "✓",
            "✓",
            "Deployed Resources, Security, Drift Detection, Scheduler, Topology, and related operations pages"
          ],
          [
            "`enable_cost_optimization`",
            "",
            "",
            "✓",
            "✓",
            "Jane cost cards and cost optimization features"
          ]
        ]
      },
      {
        "type": "p",
        "text": "One flag gates multiple sidebar modules — Security, Drift, Scheduler, and Topology all require `enable_deployed_resources`."
      },
      {
        "type": "h3",
        "text": "Administration and RBAC"
      },
      {
        "type": "table",
        "headers": [
          "Flag",
          "Free",
          "Starter",
          "Pro",
          "Enterprise",
          "What it controls"
        ],
        "rows": [
          [
            "`enable_manage_users`",
            "",
            "✓",
            "✓",
            "✓",
            "Manage Users — invitations"
          ],
          [
            "`enable_rbac_management`",
            "",
            "",
            "✓",
            "✓",
            "RBAC Management and Roles"
          ],
          [
            "`enable_custom_roles`",
            "",
            "",
            "",
            "✓",
            "Create custom roles"
          ],
          [
            "`enable_groups`",
            "",
            "",
            "✓",
            "✓",
            "Groups"
          ],
          [
            "`enable_bulk_invitations`",
            "",
            "",
            "",
            "✓",
            "Bulk user invite"
          ],
          [
            "`enable_audit_history`",
            "",
            "",
            "",
            "✓",
            "Per-user audit history modal; org Audit Trail tab"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Enterprise auth and data"
      },
      {
        "type": "table",
        "headers": [
          "Flag",
          "Enterprise only",
          "What it controls"
        ],
        "rows": [
          [
            "`enable_sso`",
            "✓",
            "Auth0 / Okta SSO"
          ],
          [
            "`enable_ldap`",
            "✓",
            "LDAP sign-in"
          ],
          [
            "`enable_data_export`",
            "✓",
            "Data export features"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Plan limits (not flags)"
      },
      {
        "type": "p",
        "text": "Limits cap how many resources you can create. `-1` = unlimited (Enterprise)."
      },
      {
        "type": "table",
        "headers": [
          "Limit",
          "Free",
          "Starter",
          "Pro",
          "Enterprise"
        ],
        "rows": [
          [
            "Pipelines",
            "3",
            "10",
            "50",
            "Unlimited"
          ],
          [
            "Credentials",
            "2",
            "5",
            "20",
            "Unlimited"
          ],
          [
            "Users (seats)",
            "1",
            "5",
            "25",
            "Unlimited"
          ],
          [
            "Workspaces",
            "2",
            "5",
            "20",
            "Unlimited"
          ],
          [
            "Sandboxes",
            "3",
            "10",
            "50",
            "Unlimited"
          ],
          [
            "Groups",
            "0",
            "0",
            "10",
            "Unlimited"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Seat limits appear on Manage Users when inviting users."
      },
      {
        "type": "h2",
        "text": "How locked features appear in the UI"
      },
      {
        "type": "table",
        "headers": [
          "Lock type",
          "Where",
          "What you see"
        ],
        "rows": [
          [
            "Full lock",
            "Sidebar module",
            "Lock icon; page shows upgrade card if navigated directly"
          ],
          [
            "Partial lock",
            "Dashboard",
            "Page works; Deployment trend section shows upgrade prompt"
          ],
          [
            "Action lock",
            "Pipeline designer",
            "Deploy buttons disabled with upgrade message"
          ],
          [
            "API lock",
            "Background",
            "Operation fails with plan error (for example, deploy on Free)"
          ]
        ]
      },
      {
        "type": "h3",
        "text": "Sidebar modules tied to flags"
      },
      {
        "type": "table",
        "headers": [
          "Sidebar module",
          "Feature flag"
        ],
        "rows": [
          [
            "Dashboard (analytics section)",
            "`enable_dashboard_analytics`"
          ],
          [
            "Hub",
            "`enable_hub_browse`"
          ],
          [
            "HLD",
            "`enable_hld`"
          ],
          [
            "LLD",
            "`enable_lld`"
          ],
          [
            "Deployed Resources",
            "`enable_deployed_resources`"
          ],
          [
            "Security",
            "`enable_deployed_resources`"
          ],
          [
            "Scheduler",
            "`enable_deployed_resources`"
          ],
          [
            "Topology",
            "`enable_deployed_resources`"
          ],
          [
            "RBAC Management",
            "`enable_rbac_management`"
          ],
          [
            "Manage Users",
            "`enable_manage_users`"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Modules without a mapping (for example, My Pipelines, Credentials) follow base plan capabilities and RBAC — not a separate subscription flag."
      },
      {
        "type": "h2",
        "text": "How to request an upgrade"
      },
      {
        "type": "steps",
        "items": [
          "Note which feature or limit blocked you (message usually names the flag).",
          "Contact your organization administrator.",
          "Administrators contact InfraGlide sales or support to change the subscription plan.",
          "After upgrade, sign out and back in if features do not appear immediately."
        ]
      },
      {
        "type": "p",
        "text": "On Manage Users, org admins can open Request more licenses when seat limit is reached."
      },
      {
        "type": "h2",
        "text": "Choosing a plan (guide for administrators)"
      },
      {
        "type": "table",
        "headers": [
          "Need",
          "Minimum plan"
        ],
        "rows": [
          [
            "Design only, no deploy",
            "Free"
          ],
          [
            "Deploy to cloud, small team",
            "Starter"
          ],
          [
            "Drift, security, groups, RBAC",
            "Pro"
          ],
          [
            "SSO, audit trail, bulk invite, custom roles",
            "Enterprise"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Partial lock ≠ broken — Free users still use Dashboard; only analytics is gated.",
          "One flag, many pages — `enable_deployed_resources` unlocks a whole operations section.",
          "RBAC ≠ subscription — even with Pro, users need role grants to see admin pages.",
          "Check seats before bulk invite — Pro caps at 25 users by default.",
          "Credentials by provider — Free may restrict AWS/Azure credential types separately (`enable_credentials_aws`, etc.)."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Feature enabled on plan but I still cannot access Check RBAC module permissions and workspace scope — subscription and role both must allow access."
      },
      {
        "type": "p",
        "text": "Deploy button missing on Starter Confirm `enable_pipeline_deploy` and that you have execute on My Pipelines."
      },
      {
        "type": "p",
        "text": "Audit Trail tab missing Requires Enterprise (`enable_audit_history`) and org admin role."
      },
      {
        "type": "p",
        "text": "Upgrade prompt on every page Your org may be on Free — ask admin to confirm plan in organization settings."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Dashboard — Partial analytics lock",
          "Manage Users — Seat limits",
          "RBAC Management — Role-based access vs plan features",
          "Authentication — SSO on Enterprise",
          "Audit Logging — Enterprise audit trail"
        ]
      }
    ]
  },
  {
    "id": "credential-testing",
    "section": "Security & Access",
    "title": "Credential Testing",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Credential Testing verifies that cloud keys you enter can authenticate before they are saved. In the Add New Credential modal, the Validate button sends credentials to InfraGlide’s test service, which performs a lightweight provider check and returns success or failure — without persisting the secret until you click Create."
      },
      {
        "type": "p",
        "text": "Testing is required — you cannot create a credential until validation passes."
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "table",
        "headers": [
          "Location",
          "Detail"
        ],
        "rows": [
          [
            "Primary UI",
            "Credentials → Add Credential modal"
          ],
          [
            "Button label",
            "Validate (shows Testing… while running)"
          ],
          [
            "Credentials page",
            "`/credentials`"
          ]
        ]
      },
      {
        "type": "p",
        "text": "There is no separate credential-testing page; testing happens inline when adding credentials."
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "p",
        "text": "Same users who can open Add Credential on `/credentials` — typically sandbox Editors and Admins with Credentials module access."
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select the correct Sandbox in the header (credential will bind to that sandbox’s `projectId`).",
          "Enter all required fields for your provider before validating:"
        ]
      },
      {
        "type": "list",
        "items": [
          "AWS — Access Key + Secret Key",
          "GCP — Service account JSON or email + private key",
          "Azure — Client ID, Client Secret, Tenant ID, Subscription ID"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Ensure outbound network access from the InfraGlide server to cloud APIs (handled by your deployment environment)."
        ]
      },
      {
        "type": "h2",
        "text": "How to test a credential before saving"
      },
      {
        "type": "steps",
        "items": [
          "Go to Credentials → Add Credential.",
          "Choose Provider and complete all required secret fields.",
          "Click Validate.",
          "Wait for the status banner:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Testing credentials… — in progress",
          "Success (green) — message such as “Credential test passed successfully”",
          "Error (red) — message describing the failure"
        ]
      },
      {
        "type": "steps",
        "items": [
          "If validation fails, fix keys or IAM permissions and click Validate again.",
          "When status is success, the Create button enables.",
          "Click Create to store the encrypted credential."
        ]
      },
      {
        "type": "h2",
        "text": "What happens during validation"
      },
      {
        "type": "list",
        "items": [
          "Credentials are sent securely to the server test handler (`/api/credentials/test`).",
          "The server attempts provider-specific authentication (e.g. STS for AWS, token exchange for Azure, GCP API probe).",
          "Values are not saved until Create succeeds.",
          "Changing any credential field resets test status — you must re-validate."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Validate immediately after pasting keys — typos are the most common failure.",
          "For GCP JSON upload, confirm the file parsed correctly before validating.",
          "If validation passes but deploy fails later, IAM may lack deploy permissions — testing only confirms authentication.",
          "Re-validate whenever you edit secrets on an existing credential.",
          "Use onboarding Credentials step for the same Validate → Create flow during first-time setup."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Validate button disabled — Missing required fields or no provider selected."
      },
      {
        "type": "p",
        "text": "“Unable to reach the server” — Network or server error; retry or contact admin."
      },
      {
        "type": "p",
        "text": "“Credential test failed” — Wrong keys, expired secret, or insufficient IAM; check cloud console."
      },
      {
        "type": "p",
        "text": "Create still disabled after success — Ensure name is filled; refresh modal if UI stuck."
      },
      {
        "type": "p",
        "text": "Test resets when editing a field — Expected; re-click Validate."
      },
      {
        "type": "p",
        "text": "Works in test but deploy fails — Test checks auth only; add deploy/list permissions in cloud IAM."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Cloud Credentials · Org Onboarding · Pipeline Deployment"
      }
    ]
  },
  {
    "id": "monitoring",
    "section": "Monitoring",
    "title": "Monitoring",
    "intro": "This guide explains how to track deployments, read logs, review topology runs, and use the audit trail in InfraGlide.",
    "content": [
      {
        "type": "p",
        "text": "Where to find it: Open Observability from the sidebar (Operations section)."
      },
      {
        "type": "p",
        "text": "> Note: If your organization uses an older link to \"Monitoring,\" it opens the same Observability page."
      },
      {
        "type": "h2",
        "text": "What Observability shows you"
      },
      {
        "type": "p",
        "text": "Observability is your central place to answer:"
      },
      {
        "type": "list",
        "items": [
          "Did my deploy succeed or fail?",
          "What did Terraform log?",
          "Who ran deploys recently?",
          "How are scheduled and topology runs going? (org admins: who did what across the org?)"
        ]
      },
      {
        "type": "h2",
        "text": "How to choose what you are looking at (scope)"
      },
      {
        "type": "p",
        "text": "At the top of Observability, choose a scope:"
      },
      {
        "type": "table",
        "headers": [
          "Scope",
          "Who can use it",
          "What you see"
        ],
        "rows": [
          [
            "Sandbox",
            "Everyone with sandbox access",
            "Deployments and logs for the current sandbox"
          ],
          [
            "Workspace",
            "Everyone with workspace access",
            "All sandboxes in the selected workspace"
          ],
          [
            "Organization",
            "Org administrators only",
            "Everything across the company"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Make sure your workspace and sandbox in the header match what you expect before opening Observability."
      },
      {
        "type": "h2",
        "text": "Overview tab — quick health check"
      },
      {
        "type": "steps",
        "items": [
          "Open Observability.",
          "Stay on the Overview tab (default).",
          "Review summary cards, such as:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Total deployments",
          "Successful vs failed runs",
          "Activity in the last 24 hours",
          "Open drift events (if shown)",
          "Active schedules"
        ]
      },
      {
        "type": "p",
        "text": "Use Overview for a daily or weekly check that deployments are healthy."
      },
      {
        "type": "h2",
        "text": "Deployment Logs tab — find and read deploy output"
      },
      {
        "type": "h3",
        "text": "How to find a deployment"
      },
      {
        "type": "steps",
        "items": [
          "Open Observability.",
          "Click the Deployment Logs tab.",
          "Use filters if available:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Status (success, failed, running, etc.)",
          "Provider (AWS, GCP, Azure)",
          "Pipeline name",
          "Date range"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Scroll or paginate through the list."
        ]
      },
      {
        "type": "p",
        "text": "Each row shows pipeline name, action (plan/apply/destroy), status, who ran it, and when."
      },
      {
        "type": "h3",
        "text": "How to read full logs for one deployment"
      },
      {
        "type": "steps",
        "items": [
          "Click a row in the deployment list.",
          "Read the detailed log panel:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Terraform init, plan, apply, or destroy output",
          "Error messages if the run failed",
          "Which resources were created, changed, or destroyed"
        ]
      },
      {
        "type": "p",
        "text": "Copy log excerpts when opening a ticket or asking Jane for help."
      },
      {
        "type": "h3",
        "text": "How to troubleshoot a failed deploy from logs"
      },
      {
        "type": "steps",
        "items": [
          "Find the failed deployment in Deployment Logs.",
          "Open the log and scroll to the first error (often near the bottom).",
          "Open Jane (⌘J / Ctrl+J) and ask: *\"Why did this deployment fail?\"* with the pipeline open if possible.",
          "Fix the pipeline in the designer and deploy again."
        ]
      },
      {
        "type": "p",
        "text": "See Jane and Pipelines & Automation."
      },
      {
        "type": "h2",
        "text": "Topologies tab — multi-pipeline run history"
      },
      {
        "type": "p",
        "text": "If your team uses Topology to run pipelines in sequence:"
      },
      {
        "type": "steps",
        "items": [
          "Open Observability.",
          "Click the Topologies tab.",
          "See past topology runs with overall status and timestamps.",
          "Click a run to see which pipelines succeeded or failed and in what order."
        ]
      },
      {
        "type": "p",
        "text": "Use this when a stack deploy fails partway through — identify which pipeline stopped the chain."
      },
      {
        "type": "p",
        "text": "See Pipelines & Automation for how to create and run topologies."
      },
      {
        "type": "h2",
        "text": "Audit Trail tab — who did what (org admins)"
      },
      {
        "type": "p",
        "text": "Who: Organization administrators only."
      },
      {
        "type": "steps",
        "items": [
          "Open Observability.",
          "Set scope to Organization.",
          "Click the Audit Trail tab.",
          "Browse or filter events:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Logins",
          "Deployments started",
          "Credentials added or changed",
          "Invitations sent",
          "Compliance policy changes",
          "Schedules created or triggered"
        ]
      },
      {
        "type": "p",
        "text": "Click an event for full details (user, time, action, resource)."
      },
      {
        "type": "p",
        "text": "Use Audit Trail for security reviews and compliance evidence."
      },
      {
        "type": "h2",
        "text": "How to track a deploy without staying on the designer"
      },
      {
        "type": "p",
        "text": "You do not need to keep the Pipeline Designer open."
      },
      {
        "type": "p",
        "text": "While a deploy runs:"
      },
      {
        "type": "steps",
        "items": [
          "Start deploy from the designer as usual.",
          "Navigate anywhere in the app.",
          "Watch for a notification when the deploy finishes or fails.",
          "Check status on My Pipelines (status badge on the pipeline row).",
          "Open Observability → Deployment Logs for full output."
        ]
      },
      {
        "type": "h2",
        "text": "How to watch a deploy live on the designer"
      },
      {
        "type": "p",
        "text": "If you stay on the Pipeline Designer:"
      },
      {
        "type": "steps",
        "items": [
          "Start deploy.",
          "Open the Console view at the bottom of the screen.",
          "Watch lines appear as Terraform runs.",
          "Status updates on the toolbar when complete."
        ]
      },
      {
        "type": "h2",
        "text": "Understanding status badges"
      },
      {
        "type": "p",
        "text": "You see deployment status in several places:"
      },
      {
        "type": "table",
        "headers": [
          "Where",
          "What you see"
        ],
        "rows": [
          [
            "My Pipelines",
            "Badge on each pipeline row"
          ],
          [
            "Pipeline Designer",
            "Toolbar status during/after deploy"
          ],
          [
            "Deployment Logs",
            "Status column in the table"
          ],
          [
            "Overview",
            "Counts of success vs failure"
          ]
        ]
      },
      {
        "type": "table",
        "headers": [
          "Status",
          "Meaning"
        ],
        "rows": [
          [
            "Running",
            "Still in progress — wait"
          ],
          [
            "Planned",
            "Plan finished — nothing changed in cloud"
          ],
          [
            "Success",
            "Apply completed successfully"
          ],
          [
            "Partial success",
            "Some resources created, then error — see logs"
          ],
          [
            "Failed",
            "Apply did not succeed"
          ],
          [
            "Destroyed",
            "Destroy completed"
          ]
        ]
      },
      {
        "type": "p",
        "text": "For Partial success, fix the error and apply again — InfraGlide does not auto-delete what was already created."
      },
      {
        "type": "h2",
        "text": "How to use Jane for operational summaries"
      },
      {
        "type": "p",
        "text": "Open Jane from anywhere and ask:"
      },
      {
        "type": "list",
        "items": [
          "*\"Show me recent deployments\"*",
          "*\"What failed this week?\"*",
          "*\"Summarize our infrastructure activity\"*"
        ]
      },
      {
        "type": "p",
        "text": "Jane is helpful for quick summaries without reading every log line."
      },
      {
        "type": "h2",
        "text": "Background checks you should know about"
      },
      {
        "type": "p",
        "text": "InfraGlide runs some checks automatically (no action required):"
      },
      {
        "type": "table",
        "headers": [
          "Check",
          "What it does"
        ],
        "rows": [
          [
            "Drift detection",
            "Periodically compares pipelines to live cloud settings"
          ],
          [
            "Posture / watchdog",
            "Scheduled security posture runs (if configured on Deployed Resources)"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Results appear on Drift Detection and Deployed Resources, not only in Observability."
      },
      {
        "type": "h2",
        "text": "Typical daily workflows"
      },
      {
        "type": "h3",
        "text": "Developer after deploying"
      },
      {
        "type": "steps",
        "items": [
          "Confirm notification or badge shows Success.",
          "Optionally open Deployment Logs and skim output.",
          "Open Deployed Resources to see new resources.",
          "Run Drift Detection → Check now if you want a clean baseline."
        ]
      },
      {
        "type": "h3",
        "text": "Team lead weekly review"
      },
      {
        "type": "steps",
        "items": [
          "Observability → Overview at workspace scope.",
          "Review failed and partial success counts.",
          "Deployment Logs — filter by failed, assign follow-ups.",
          "Drift Detection — review open events with the team."
        ]
      },
      {
        "type": "h3",
        "text": "Org admin security review"
      },
      {
        "type": "steps",
        "items": [
          "Observability → Audit Trail at organization scope.",
          "Filter by credential changes and admin actions.",
          "Cross-check with Security scan findings."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Use filters on Deployment Logs — do not scroll endlessly on busy sandboxes.",
          "Keep Observability scope in mind — sandbox vs workspace shows very different lists.",
          "Copy error lines from logs when asking Jane or support for help.",
          "Audit Trail is forward-looking — it records actions from when logging was enabled, not historical cloud changes before InfraGlide."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Overview shows zero deployments Wrong scope or empty sandbox. Check header workspace/sandbox. Org scope requires org admin."
      },
      {
        "type": "p",
        "text": "I don't see the Audit Trail tab Only organization administrators see this tab."
      },
      {
        "type": "p",
        "text": "Logs are empty for a fast plan Very quick plans may finish before much output appears. Open the deployment again or re-run plan."
      },
      {
        "type": "p",
        "text": "Deploy says running for over an hour Large pipelines can take a long time. Check logs for progress. If truly stuck, contact your administrator."
      },
      {
        "type": "p",
        "text": "Monitoring menu goes to Observability Expected — Observability is the current monitoring experience in the app."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Pipelines & Automation — How to deploy and what statuses mean",
          "Cloud Sync & Drift — Drift checks and inventory",
          "Security & Access — Audit trail and roles",
          "Jane — Ask about failures and activity summaries"
        ]
      }
    ]
  },
  {
    "id": "observability",
    "section": "Monitoring",
    "title": "Observability",
    "intro": "",
    "content": [
      {
        "type": "h2",
        "text": "What it is"
      },
      {
        "type": "p",
        "text": "Observability is the central operations view for deployments, logs, topology activity, and (for org admins) audit events. Data is filtered by a scope you choose: entire organization, current workspace, or current sandbox."
      },
      {
        "type": "p",
        "text": "Route: `/observability` (legacy `/monitoring` redirects here)"
      },
      {
        "type": "h2",
        "text": "Where to find it"
      },
      {
        "type": "list",
        "items": [
          "Sidebar → Observability (Operations)",
          "Pipeline Deployment troubleshooting links here for deployment logs"
        ]
      },
      {
        "type": "h2",
        "text": "Who can use it"
      },
      {
        "type": "list",
        "items": [
          "Users with Deployed Resources module access (Observability shares this gate)",
          "Audit Trail tab: organization super administrators only (`isOrgAdmin`)",
          "Scope options depend on your role:",
          "Entire organization — org super admins only",
          "This workspace — admins or users with a role on the selected workspace",
          "This sandbox — admins or users with a role on the selected sandbox"
        ]
      },
      {
        "type": "h2",
        "text": "Before you start"
      },
      {
        "type": "steps",
        "items": [
          "Select Workspace and Sandbox in the header when you want workspace- or sandbox-scoped data.",
          "Confirm you have access to the scope you need — otherwise the page shows a scope warning.",
          "For org-wide views, sign in as an organization super administrator."
        ]
      },
      {
        "type": "h2",
        "text": "How to choose data scope"
      },
      {
        "type": "steps",
        "items": [
          "Open Observability.",
          "In the upper-right Data scope dropdown, pick:"
        ]
      },
      {
        "type": "list",
        "items": [
          "Entire organization — all workspaces and sandboxes (org super admins only)",
          "This workspace — all sandboxes in the current workspace",
          "This sandbox — only the sandbox selected in the header"
        ]
      },
      {
        "type": "steps",
        "items": [
          "Read the scope hint below the title to confirm what you are viewing."
        ]
      },
      {
        "type": "p",
        "text": "If a scope is disabled, select a workspace or sandbox in the header first, or ask an admin for access."
      },
      {
        "type": "h2",
        "text": "Tabs overview"
      },
      {
        "type": "h3",
        "text": "Overview"
      },
      {
        "type": "p",
        "text": "KPI cards and charts for the selected scope:"
      },
      {
        "type": "list",
        "items": [
          "Deployed resource counts by provider",
          "Deployment counts by status",
          "Recent deployments timeline",
          "Topology summary and recent topologies",
          "Audit events (24h count for admins)",
          "Jane-powered infra digest and health cards (where available)"
        ]
      },
      {
        "type": "p",
        "text": "Use Overview for a quick health check across your selection."
      },
      {
        "type": "h3",
        "text": "Deployment Logs"
      },
      {
        "type": "p",
        "text": "Searchable log history for Terraform runs in scope:"
      },
      {
        "type": "list",
        "items": [
          "Filter by pipeline, status, date, and environment",
          "Open a row for full terraform output and deployment metadata",
          "Ask Jane from a log row for failure analysis (see Jane AI Assistant)"
        ]
      },
      {
        "type": "p",
        "text": "This is the primary place to debug failed Pipeline Deployment runs."
      },
      {
        "type": "h3",
        "text": "Topologies"
      },
      {
        "type": "p",
        "text": "Lists pipeline DAGs in scope:"
      },
      {
        "type": "list",
        "items": [
          "Filter by name and enabled/disabled state",
          "See node and edge counts per topology",
          "Select a topology for Jane topology intelligence (SPOF and gap analysis)"
        ]
      },
      {
        "type": "p",
        "text": "Pairs with Topology design and Scheduler runs."
      },
      {
        "type": "h3",
        "text": "Audit Trail (org super admins only)"
      },
      {
        "type": "p",
        "text": "Security and compliance event stream:"
      },
      {
        "type": "list",
        "items": [
          "User actions (deploy, credential changes, RBAC updates, topology execute, etc.)",
          "Filtered by the same org / workspace / sandbox scope",
          "See also Audit Logging"
        ]
      },
      {
        "type": "p",
        "text": "Non-admin users do not see this tab."
      },
      {
        "type": "h2",
        "text": "How to investigate a failed deployment"
      },
      {
        "type": "steps",
        "items": [
          "Set scope to the sandbox where the deploy ran.",
          "Open Deployment Logs.",
          "Find the deployment by pipeline name or status failed.",
          "Read Terraform output in the detail panel.",
          "Optional: click Ask Jane or open Jane (⌘J / Ctrl+J) with deployment context."
        ]
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Default to This sandbox for day-to-day debugging; use workspace for team rollups.",
          "Org admins: use Entire organization sparingly — narrow scope loads faster.",
          "Overview auto-refreshes on an interval; Deployment Logs support deeper search.",
          "Cross-check topology issues on the Topologies tab before blaming a single pipeline."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "table",
        "headers": [
          "Problem",
          "What to try"
        ],
        "rows": [
          [
            "Choose an available scope alert",
            "Pick a scope you have access to; select workspace/sandbox in header"
          ],
          [
            "Empty Overview",
            "Confirm deployments exist in scope; widen to workspace or org (if admin)"
          ],
          [
            "No Audit Trail tab",
            "Normal for non–org-admin users"
          ],
          [
            "Logs missing a run",
            "Verify scope includes the sandbox where the deploy was triggered"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "p",
        "text": "Pipeline Deployment · Topology · Scheduler · Deployed Resources · Audit Logging · Jane AI Assistant"
      }
    ]
  },
  {
    "id": "audit-logging",
    "section": "Monitoring",
    "title": "Audit Logging",
    "intro": "This guide explains how organization administrators review the Audit Trail on the Observability page — including login events, deployments, and credential changes.",
    "content": [
      {
        "type": "p",
        "text": "Where: Observability → Audit Trail tab — `/observability`."
      },
      {
        "type": "p",
        "text": "Who: Organization administrators only (org super admins)."
      },
      {
        "type": "p",
        "text": "Requires: `enable_audit_history` (Enterprise tier)."
      },
      {
        "type": "p",
        "text": "See Monitoring for deployment logs and overview tabs."
      },
      {
        "type": "h2",
        "text": "What the audit trail records"
      },
      {
        "type": "p",
        "text": "InfraGlide writes immutable audit log entries for security-relevant actions, including:"
      },
      {
        "type": "table",
        "headers": [
          "Category",
          "Example actions"
        ],
        "rows": [
          [
            "Authentication",
            "`user.login`, `user.logout`, `user.signup`"
          ],
          [
            "Invitations",
            "`user.invite`, `user.invite.bulk`, `user.invite.accept`, `user.invite.cancel`"
          ],
          [
            "Deployments",
            "`deployment.plan`, `deployment.apply`, `deployment.destroy`, `deployment.created`"
          ],
          [
            "Credentials",
            "`credential.create`, `credential.update`, `credential.delete`, `credential.access`"
          ],
          [
            "Pipelines",
            "`pipeline.save`, `pipeline.create`, `pipeline.delete`, `pipeline.version.create`, `pipeline.publish`"
          ],
          [
            "Policies",
            "`policy.create`, `policy.update`, `policy.delete`, `policy.enforce`"
          ],
          [
            "Schedules",
            "`schedule.create`, `schedule.update`, `schedule.delete`"
          ],
          [
            "Topology",
            "`topology.create`, `topology.update`, `topology.delete`, `topology.execute`"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Each row includes who acted, when, what changed, and safe metadata (pipeline name, project, action type) — never raw secrets or credential values."
      },
      {
        "type": "h2",
        "text": "Before you begin"
      },
      {
        "type": "steps",
        "items": [
          "Confirm you are an organization administrator.",
          "Confirm your organization is on Enterprise (`enable_audit_history`).",
          "Open Observability from the sidebar (Operations)."
        ]
      },
      {
        "type": "p",
        "text": "Non-admin users do not see the Audit Trail tab at organization scope."
      },
      {
        "type": "h2",
        "text": "How to open the audit trail"
      },
      {
        "type": "steps",
        "items": [
          "Open Observability (`/observability`).",
          "At the top, set scope to Organization (org admins only).",
          "Click the Audit Trail tab."
        ]
      },
      {
        "type": "p",
        "text": "If the tab is missing, your plan or role does not include audit history."
      },
      {
        "type": "h2",
        "text": "How to filter audit logs"
      },
      {
        "type": "p",
        "text": "Use the filter bar above the table:"
      },
      {
        "type": "table",
        "headers": [
          "Filter",
          "Use for"
        ],
        "rows": [
          [
            "Date range",
            "Incidents in a specific period"
          ],
          [
            "User / actor",
            "All actions by one person"
          ],
          [
            "Action type",
            "Only logins, only deploys, only credential changes"
          ],
          [
            "Search",
            "Free-text search across metadata"
          ]
        ]
      },
      {
        "type": "steps",
        "items": [
          "Set your filters.",
          "The table refreshes with matching rows.",
          "Adjust filters to narrow or broaden results."
        ]
      },
      {
        "type": "h2",
        "text": "How to read a log row"
      },
      {
        "type": "p",
        "text": "Each row typically shows:"
      },
      {
        "type": "table",
        "headers": [
          "Column",
          "Content"
        ],
        "rows": [
          [
            "Time",
            "When the action occurred"
          ],
          [
            "Actor",
            "Email of the user who performed it"
          ],
          [
            "Action",
            "Color-coded badge (for example, `deployment.apply`, `user.login`)"
          ],
          [
            "Resource",
            "Type affected (pipeline, credential, deployment, etc.)"
          ],
          [
            "Summary",
            "Human-readable metadata — pipeline name, sandbox, tfAction"
          ],
          [
            "IP / location",
            "Source IP; country when available"
          ]
        ]
      },
      {
        "type": "p",
        "text": "Click a row if the UI expands detail — additional metadata without exposing secrets."
      },
      {
        "type": "h3",
        "text": "Action color reference (examples)"
      },
      {
        "type": "table",
        "headers": [
          "Action",
          "Typical meaning"
        ],
        "rows": [
          [
            "`user.login` / `user.logout`",
            "Session start/end"
          ],
          [
            "`deployment.apply`",
            "Terraform apply executed"
          ],
          [
            "`deployment.plan`",
            "Plan-only run"
          ],
          [
            "`credential.create` / `credential.delete`",
            "Credential added or removed"
          ],
          [
            "`policy.enforce`",
            "Compliance policy binding changed"
          ],
          [
            "`user.invite`",
            "Administrator sent invitation"
          ]
        ]
      },
      {
        "type": "h2",
        "text": "How to export audit logs"
      },
      {
        "type": "steps",
        "items": [
          "On the Audit Trail tab, apply filters for the period you need.",
          "Click Export or Download CSV (export icon).",
          "Save the file for compliance evidence or ticket attachment."
        ]
      },
      {
        "type": "p",
        "text": "Export respects current filters. Large ranges may take a moment to generate."
      },
      {
        "type": "p",
        "text": "Enterprise `enable_data_export` may unlock additional export options elsewhere in settings."
      },
      {
        "type": "h2",
        "text": "Common review workflows"
      },
      {
        "type": "h3",
        "text": "Weekly security review"
      },
      {
        "type": "steps",
        "items": [
          "Set date range to last 7 days.",
          "Filter action: credential.* and user.invite.*",
          "Confirm changes match approved change tickets.",
          "Scan user.login for unfamiliar actors or IP patterns."
        ]
      },
      {
        "type": "h3",
        "text": "Investigate a failed production deploy"
      },
      {
        "type": "steps",
        "items": [
          "Filter by pipeline name or deployment.apply.",
          "Find the apply event and note actor and timestamp.",
          "Open Deployment Logs tab for the same deployment ID for full Terraform output."
        ]
      },
      {
        "type": "h3",
        "text": "Offboarding verification"
      },
      {
        "type": "steps",
        "items": [
          "Filter by departing user's email.",
          "Confirm no credential.access or deployment.apply after their last day.",
          "Cross-check Manage Users — user deactivated."
        ]
      },
      {
        "type": "h3",
        "text": "Compliance evidence"
      },
      {
        "type": "steps",
        "items": [
          "Filter policy.enforce and deployment.apply for the audit period.",
          "Export CSV.",
          "Attach to SOC2 / internal audit package."
        ]
      },
      {
        "type": "h2",
        "text": "Per-user audit history (Manage Users)"
      },
      {
        "type": "p",
        "text": "On Manage Users, administrators can open Audit history for a single user (modal) — useful for invitation and role-change context without org-wide export."
      },
      {
        "type": "p",
        "text": "Org-wide Audit Trail on Observability is the comprehensive view across all users."
      },
      {
        "type": "h2",
        "text": "What is NOT logged at info level"
      },
      {
        "type": "p",
        "text": "For security, audit entries do not include:"
      },
      {
        "type": "list",
        "items": [
          "Decrypted credential values or access keys",
          "Full Terraform plan output with resolved secrets",
          "Raw session tokens"
        ]
      },
      {
        "type": "p",
        "text": "Deployment details remain on the Deployment Logs tab; audit trail stores references and summaries."
      },
      {
        "type": "h2",
        "text": "Tips"
      },
      {
        "type": "steps",
        "items": [
          "Review weekly — especially after team or credential changes.",
          "Filter before export — smaller CSVs are easier to analyze.",
          "Correlate login + deploy — same actor and IP around incident time.",
          "Retention — confirm your organization's data retention policy with InfraGlide support.",
          "Org scope only — sandbox-scoped Observability views do not replace org audit trail."
        ]
      },
      {
        "type": "h2",
        "text": "Troubleshooting"
      },
      {
        "type": "p",
        "text": "Audit Trail tab not visible You are not an org admin, or plan lacks `enable_audit_history` (Enterprise)."
      },
      {
        "type": "p",
        "text": "Empty table Widen date range. Confirm organization scope. Audit logging may have started after a platform upgrade."
      },
      {
        "type": "p",
        "text": "Missing expected deploy event Deploy may have failed before audit write — check Deployment Logs. Very old events may predate audit feature enablement."
      },
      {
        "type": "p",
        "text": "Cannot export Try a smaller date range. Confirm Enterprise data export settings."
      },
      {
        "type": "p",
        "text": "Login events from unknown IPs Investigate with user; may be VPN or shared egress. Force password/SSO review per security policy."
      },
      {
        "type": "h2",
        "text": "Related guides"
      },
      {
        "type": "list",
        "items": [
          "Monitoring — Observability overview and deployment logs",
          "Manage Users — Per-user audit modal",
          "Authentication — Login flow recorded as `user.login`",
          "Security & Access — Credentials and RBAC",
          "Subscription Tiers — Enterprise audit feature flag"
        ]
      }
    ]
  }
];
