// Single source of truth for page content. Edit here, never in components.

export const profile = {
  name: "James",
  fullName: "James Delos Reyes",
  role: "Full-Stack Engineer",
  location: "Cebu, Philippines",
  email: "sabakhadhaoy@gmail.com",
  links: {
    // TODO(james): add your GitHub username
    github: "https://github.com/PLACEHOLDER",
    linkedin: "https://www.linkedin.com/in/jamesakvich",
  },
  headline: {
    lead: "Building the plumbing",
    accent: "behind job matching.",
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
  title: string;
  period: string;
  summary: string;
  bullets: string[];
}

export const experience: Role[] = [
  {
    company: "Jobvious",
    title: "Full Stack Developer",
    period: "Apr 2025 — Present",
    summary:
      "AI-powered recruitment and referral platform — React SPAs, NestJS APIs, MySQL/Prisma, Redis, Socket.io, and OpenAI matching with Qdrant vector search.",
    bullets: [
      "Designed and built the full redesign of the admin platform: a 9-module React + TypeScript SPA on a custom design system with hand-coded SVG data visualizations.",
      "Built AI chat support on OpenAI for profile completion, job-matching queries, and referral guidance — cutting manual support work for the operations team.",
      "Shipped participant-facing onboarding, resume upload, and referral workflows as mobile-first UI, plus real-time messaging and notifications over Socket.io.",
    ],
  },
  {
    company: "Accenture",
    title: "Senior Software Engineer",
    period: "Aug 2022 — Apr 2025",
    summary: "Enterprise web applications for global clients.",
    bullets: [
      "Built mobile-responsive React/Node.js applications and designed MySQL/PostgreSQL schemas for scalable systems.",
      "Cut deployment time ~30% via CI/CD pipelines (Jenkins, Docker, AWS) and improved load times ~25% through profiling and bottleneck resolution.",
    ],
  },
  {
    company: "GoTeam",
    title: "Back End Developer",
    period: "Jun 2021 — Aug 2022",
    summary:
      "Node.js/Express backend services — features, performance fixes (~20% faster API responses), and test coverage.",
    bullets: [],
  },
  {
    company: "Tech Mahindra",
    title: "Software Engineer",
    period: "Mar 2020 — Jun 2021",
    summary:
      "C#/.NET automation and a React app that replaced the recruitment team's manual workflows, saving 10+ hours weekly.",
    bullets: [],
  },
  {
    company: "M Lhuillier Financial Services",
    title: "Software Engineer",
    period: "Jun 2018 — Mar 2020",
    summary:
      "Migrated a C# desktop app to React and rewrote its APIs in Node.js for better performance and accessibility.",
    bullets: [],
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
