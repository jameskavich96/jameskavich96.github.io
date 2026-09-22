// Single source of truth for page content. Edit here, never in components.

// TODO(james): replace with your real domain once you have one — used for
// canonical URLs, Open Graph, JSON-LD, and llms.txt.
export const SITE_URL = "https://jamesdelosreyes.dev";

export const profile = {
  name: "James",
  fullName: "James Delos Reyes",
  role: "Full-Stack Engineer",
  location: "Cebu, Philippines",
  email: "sabakhadhaoy@gmail.com",
  links: {
    github: "https://github.com/jameskavich96",
    linkedin: "https://www.linkedin.com/in/jamesakvich",
  },
  headline: {
    lead: "React frontends, Node backends,",
    accent: "and the AI in between.",
  },
  drLine: "DR. James — the development doctor. i diagnose, treat, and ship.",
  stats: [
    { label: "Years shipping", value: "8+" },
    { label: "Production systems built", value: "10+" },
    { label: "Industries served", value: "5" },
  ],
  about: [
    "I'm a full-stack engineer with eight years of building software that businesses actually run on — teller tools in branches across the Philippines, truck fleets that remember the road, nationwide retailer programs, and AI-powered platforms. React and TypeScript up front, Node.js and NestJS behind.",
    "The pattern across all of it: I get handed a system in pain — a desktop app chained to branch machines, agents grinding through the same manual task all day, a platform its team has outgrown — and I own the cure end-to-end, from first wireframe through API integration to production. Lately that means going deeper into AI application engineering: OpenAI integrations, RAG pipelines, and vector search.",
  ],
};

export interface Role {
  company: string;
  companyUrl: string;
  title: string;
  period: string;
  summary: string;
  bullets: string[];
  /** client/project references shown in the card footer; no href = plain label */
  refs: { label: string; href?: string }[];
}

export const experience: Role[] = [
  {
    company: "Jobvious",
    companyUrl: "https://itsjobvious.com",
    title: "Full Stack Developer",
    period: "Apr 2025 — Present",
    summary:
      "AI-powered recruitment and referral platform — React SPAs, NestJS APIs, MySQL/Prisma, Redis, Socket.io, and OpenAI matching with Qdrant vector search.",
    bullets: [
      "Designed and built the full redesign of the admin platform: a 9-module React + TypeScript SPA on a custom design system with hand-coded SVG data visualizations.",
      "Built AI chat support on OpenAI for profile completion, job-matching queries, and referral guidance — cutting manual support work for the operations team.",
      "Shipped participant-facing onboarding, resume upload, and referral workflows as mobile-first UI, plus real-time messaging and notifications over Socket.io.",
    ],
    refs: [
      { label: "case study", href: "/case-studies/jobvious/" },
      { label: "itsjobvious.com", href: "https://itsjobvious.com" },
    ],
  },
  {
    company: "Accenture",
    companyUrl: "https://www.accenture.com/en",
    title: "Senior Software Engineer",
    period: "Aug 2022 — Apr 2025",
    summary: "Enterprise web applications for global clients.",
    bullets: [
      "Built mobile-responsive React/Node.js applications and designed MySQL/PostgreSQL schemas for scalable systems.",
      "Cut deployment time ~30% via CI/CD pipelines (Jenkins, Docker, AWS) and improved load times ~25% through profiling and bottleneck resolution.",
    ],
    refs: [
      { label: "case study", href: "/case-studies/accenture/" },
      { label: "philip morris intl (client)", href: "https://www.pmi.com" },
      { label: "ph.pmiandu.com", href: "https://ph.pmiandu.com" },
    ],
  },
  {
    company: "GoTeam",
    companyUrl: "https://go.team",
    title: "Back End Developer",
    period: "Jun 2021 — Aug 2022",
    summary: "Node.js/Express backend services for client work, incl. Blackmoth trucking.",
    bullets: [
      "Built the pothole-vision backend for Blackmoth's truck fleet: every ride captures route-tied pothole snapshots, and the next run over the same route sees the hazards coming via the truck's onboard system.",
      "Debugged and resolved performance issues across the backend, improving API response times ~20%.",
      "Wrote unit and integration tests as standard delivery, collaborating with frontend developers on API design.",
    ],
    refs: [
      { label: "case study", href: "/case-studies/goteam/" },
      { label: "blackmoth.com (client)", href: "https://www.blackmoth.com" },
    ],
  },
  {
    company: "Tech Mahindra",
    companyUrl: "https://www.techmahindra.com",
    title: "Software Engineer",
    period: "Mar 2020 — Jun 2021",
    summary: "Automation that turned CSR agents' manual day-to-day routine into one click.",
    bullets: [
      "Built a C#/.NET application that semi-automates customer service agents' repetitive daily tasks into a single click — improving task efficiency ~40%.",
      "Automated email extraction that had been eating 10+ hours of manual work weekly.",
      "Built a React web application for the recruitment team, replacing their manual workflows.",
    ],
    refs: [
      { label: "case study", href: "/case-studies/tech-mahindra/" },
      { label: "techmahindra.com", href: "https://www.techmahindra.com" },
    ],
  },
  {
    company: "M Lhuillier Financial Services",
    companyUrl: "https://mlhuillier.com",
    title: "Software Engineer",
    period: "Jun 2018 — Mar 2020",
    summary: "The nationwide pawn system, moved from C# desktop to React web.",
    bullets: [
      "Migrated the pawn-system teller tools — used in branches all over the Philippines — from a C# desktop app to a React web application: one deployment instead of per-machine installs.",
      "Rewrote the existing C# APIs in Node.js, improving performance and scalability.",
      "The web migration retired the branch-local server + sync-tool layer I'd been maintaining — one central system replaced per-branch replication.",
    ],
    refs: [
      { label: "case study", href: "/case-studies/mlhuillier/" },
      { label: "mlhuillier.com", href: "https://mlhuillier.com" },
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Core",
    items: [
      "TypeScript / JavaScript",
      "React",
      "Node.js",
      "Tailwind / Radix UI",
      "TanStack Query / Zustand",
      "MySQL / PostgreSQL",
    ],
  },
  {
    label: "Working knowledge",
    items: [
      "NestJS / Prisma",
      "OpenAI API",
      "Socket.io",
      "Docker / GitHub Actions",
      "Vitest / Testing Library",
      "MongoDB / AWS S3",
    ],
  },
  {
    label: "Familiar",
    items: ["Redis / BullMQ", "Qdrant (vector search)", "RAG pipelines", "Playwright", "Strapi"],
  },
];
