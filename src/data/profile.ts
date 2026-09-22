// Single source of truth for page content. Edit here, never in components.
// TODO(james): everything marked PLACEHOLDER needs your real facts.

export const profile = {
  name: "James",
  // PLACEHOLDER — surname for the masthead + <title>
  fullName: "James Placeholder",
  role: "Full-Stack Engineer",
  location: "PLACEHOLDER, Earth",
  email: "james@itsjobvious.com",
  links: {
    github: "https://github.com/PLACEHOLDER",
    linkedin: "https://www.linkedin.com/in/PLACEHOLDER",
  },
  headline: {
    lead: "Building the plumbing",
    accent: "behind job matching.",
  },
  about: [
    "I'm a full-stack engineer working across React, NestJS, and the messy real world in between — queues, webhooks, vector search, and the auth flows nobody thanks you for until they break.",
    // PLACEHOLDER — 2–3 more sentences: how you got here, what you care about, where you're headed (AI application engineering).
    "PLACEHOLDER: a sentence about your path into engineering and what you're deliberately learning next.",
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
    title: "Full-Stack Engineer",
    period: "PLACEHOLDER — Present",
    summary:
      "Job-matching platform: React SPA, NestJS services, AI-powered candidate matching.",
    bullets: [
      "Ship features end-to-end across a multi-service platform — regional APIs, webhook ingress, real-time chat, and an AI matching service backed by vector search.",
      "PLACEHOLDER: one concrete outcome you're proud of (metric, launch, or system you owned).",
      "PLACEHOLDER: a second outcome — think 'what changed because I was here'.",
    ],
  },
  {
    company: "PLACEHOLDER Co",
    title: "PLACEHOLDER Title",
    period: "20XX — 20XX",
    summary: "PLACEHOLDER: one line on what the company does.",
    bullets: [
      "PLACEHOLDER: outcome-oriented bullet.",
      "PLACEHOLDER: outcome-oriented bullet.",
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Vite", "TanStack Query", "Tailwind", "Playwright"],
  },
  {
    label: "Backend",
    items: ["NestJS", "Node.js", "Prisma", "MySQL / PostgreSQL", "Redis / BullMQ", "Socket.io"],
  },
  {
    label: "AI & Infra",
    items: ["OpenAI APIs", "Qdrant / vector search", "RAG pipelines", "Docker", "CI/CD"],
  },
];
