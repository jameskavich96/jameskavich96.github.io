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
  stats: [
    { label: "Years shipping", value: "8+" },
    { label: "Services in current platform", value: "11" },
    { label: "Admin modules built end-to-end", value: "9" },
  ],
  about: [
    "I'm a full-stack engineer with eight years across React/TypeScript frontends and Node.js backends — currently building an AI-powered recruitment platform: a TypeScript workspace of eleven services spanning React SPAs, NestJS APIs, OpenAI-powered matching, and Qdrant vector search.",
    "I've designed and shipped a nine-module admin platform end-to-end on a custom design system, built AI chat support on OpenAI, and I'm comfortable owning a feature from the first wireframe through API integration to production. Right now I'm going deeper into AI application engineering — RAG pipelines, embeddings, and the systems that make them reliable.",
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
      { label: "case study", href: "/case-studies/jobvious-admin/" },
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
    summary:
      "Node.js/Express backend services — features, performance fixes (~20% faster API responses), and test coverage.",
    bullets: [],
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
    summary:
      "C#/.NET automation and a React app that replaced the recruitment team's manual workflows, saving 10+ hours weekly.",
    bullets: [],
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
    summary:
      "Migrated a C# desktop app to React and rewrote its APIs in Node.js for better performance and accessibility.",
    bullets: [],
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
