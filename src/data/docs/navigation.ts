export interface DocLink {
  label: string;
  id: string;
}

export interface DocSection {
  title: string;
  icon: string;
  links: DocLink[];
}

export const NAV_SECTIONS: DocSection[] = [
  {
    title: 'Getting Started',
    icon: 'Book',
    links: [
      { label: 'Welcome', id: 'welcome' },
      { label: 'Quickstart Guide', id: 'quickstart' },
      { label: 'Core Concepts', id: 'core-concepts' },
      { label: 'InfraGlide Philosophy', id: 'philosophy' },
    ],
  },
  {
    title: 'Visual Canvas',
    icon: 'Layout',
    links: [
      { label: 'Canvas Overview', id: 'canvas-overview' },
      { label: 'Cloud Resources', id: 'cloud-resources' },
      { label: 'Nodes & Containers', id: 'nodes' },
      { label: 'Connectors', id: 'connectors' },
      { label: 'Graphical Options', id: 'graphical-options' },
      { label: 'HLD & LLD Diagrams', id: 'hld-lld' },
    ],
  },
  {
    title: 'AI Assistant',
    icon: 'Sparkles',
    links: [
      { label: 'GlideAI Overview', id: 'glideai' },
      { label: 'Natural Language Design', id: 'nl-design' },
      { label: 'Template Converter', id: 'template-converter' },
    ],
  },
  {
    title: 'Infrastructure Code',
    icon: 'Code2',
    links: [
      { label: 'Auto-Generated Terraform', id: 'terraform-gen' },
      { label: 'Code Panel', id: 'code-panel' },
      { label: 'Variables & Outputs', id: 'variables' },
      { label: 'Modules', id: 'modules' },
    ],
  },
  {
    title: 'Templates & Projects',
    icon: 'FolderOpen',
    links: [
      { label: 'Multi-Cloud Templates', id: 'templates' },
      { label: 'Projects & Sandboxes', id: 'projects' },
      { label: 'Environments', id: 'environments' },
      { label: 'Architecture Sync', id: 'arch-sync' },
    ],
  },
  {
    title: 'Pipelines & Automation',
    icon: 'GitBranch',
    links: [
      { label: 'Pipeline Designer', id: 'pipeline-designer' },
      { label: 'Pipeline Scheduler', id: 'pipeline-scheduler' },
      { label: 'Topology Chaining', id: 'topology-chaining' },
      { label: 'Hub Publication', id: 'hub-publication' },
      { label: 'One-Action Deploy', id: 'one-action' },
    ],
  },
  {
    title: 'Cloud Sync & Drift',
    icon: 'RefreshCw',
    links: [
      { label: 'Find Deployed Resources', id: 'find-resources' },
      { label: 'Drift Detection', id: 'drift-detection' },
      { label: 'Remediation', id: 'remediation' },
    ],
  },
  {
    title: 'Cost & Compliance',
    icon: 'DollarSign',
    links: [
      { label: 'Billing Estimation', id: 'billing' },
      { label: 'Compliance (GDPR, HIPAA, PCI)', id: 'compliance' },
      { label: 'Security Scans', id: 'security-scans' },
    ],
  },
  {
    title: 'Security & Access',
    icon: 'Shield',
    links: [
      { label: 'RBAC', id: 'rbac' },
      { label: 'Credential Management', id: 'credentials' },
      { label: 'Data & Privacy', id: 'data-privacy' },
    ],
  },
  {
    title: 'Monitoring',
    icon: 'BarChart2',
    links: [
      { label: 'Dashboard & Stats', id: 'monitoring' },
      { label: 'Audit Trails', id: 'audit-trails' },
      { label: 'Logs', id: 'logs' },
    ],
  },
  {
    title: 'CLI Reference',
    icon: 'Terminal',
    links: [
      { label: 'Installation', id: 'cli-install' },
      { label: 'Commands', id: 'cli-commands' },
      { label: 'Configuration', id: 'cli-config' },
    ],
  },
  {
    title: 'API Details',
    icon: 'Zap',
    links: [
      { label: 'REST API', id: 'rest-api' },
      { label: 'GraphQL Endpoint', id: 'graphql' },
      { label: 'Webhooks', id: 'webhooks' },
    ],
  },
];
