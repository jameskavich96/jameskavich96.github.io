// Case study content. Paragraphs may contain trusted inline HTML (<strong>).
// TODO(james): everything marked PLACEHOLDER needs a real number or a fact-check.

export interface CaseStudySection {
  cmd: string; // shell-style kicker, e.g. "$ cat problem.md"
  heading: string; // accessible heading (visually hidden)
  paras: string[];
  bullets?: string[];
  grid?: string[]; // compact multi-column list (e.g. module names)
}

export interface CaseStudy {
  slug: string;
  order: string; // "01".."05" shown in the masthead
  title: { lead: string; accent: string };
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  facts: { label: string; value: string; href?: string }[];
  stack: string[];
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "jobvious",
    order: "01",
    title: { lead: "Jobvious", accent: "Platform" },
    tagline: "// an AI-powered recruitment platform — admin, participant modules, and AI features",
    metaTitle: "Case Study: Jobvious Platform — James Delos Reyes",
    metaDescription:
      "Full-stack work across an AI-powered recruitment platform: a 9-module admin SPA built end-to-end, participant-facing modules, AI chat support, and real-time features.",
    facts: [
      { label: "role", value: "full stack developer" },
      { label: "period", value: "2025 — present" },
      { label: "company", value: "Jobvious ↗", href: "https://itsjobvious.com" },
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Radix UI",
      "TanStack Query",
      "Zustand",
      "NestJS API",
      "Socket.io",
    ],
    sections: [
      {
        cmd: "$ cat problem.md",
        heading: "The problem",
        paras: [
          "Jobvious is an AI-powered recruitment and referral platform — a TypeScript workspace of eleven services: React SPAs, NestJS APIs, MySQL/Prisma, Redis, Socket.io, and OpenAI-powered matching with Qdrant vector search. I work across the whole surface: the participant experience, the operations team's admin tools, and the AI features in between.",
          "The biggest single piece: the operations team ran the business — approving participants, moderating content, exporting timesheets, answering messages — through an aging admin interface that hadn't kept pace with the product. The brief was a rebuild, not a reskin, while the team kept using it daily.",
        ],
      },
      {
        cmd: "$ cat approach.md",
        heading: "The approach",
        paras: [
          "I designed and built the new admin platform as a React + TypeScript SPA on a <strong>custom design system</strong> — tokens, primitives, and composed components on Radix UI, so all nine modules share one visual and interaction language:",
        ],
        grid: [
          "approvals",
          "participant management",
          "notifications",
          "messaging",
          "timesheet export",
          "moderation",
          "reports",
          "promotions",
          "settings",
        ],
        bullets: [],
      },
      {
        cmd: "$ cat platform.md",
        heading: "Across the platform",
        paras: [
          "Beyond the admin: I shipped <strong>participant-facing modules</strong> — onboarding, resume upload, profile management, and referral workflows — as mobile-first UI on a reusable component architecture, and built <strong>AI chat support on OpenAI</strong> for profile completion, job-matching questions, and referral guidance.",
          "Server state runs through TanStack Query (caching, optimistic updates, background revalidation against the NestJS APIs); client state through Zustand. Live chat and notifications ride Socket.io channels, so both participants and admins see events as they happen. Data visualizations are <strong>hand-coded SVG</strong> — no chart library.",
        ],
      },
      {
        cmd: "$ cat outcome.md",
        heading: "The outcome",
        paras: [],
        bullets: [
          "Nine admin modules shipped on one coherent design system — new features now compose from existing primitives instead of starting from zero.",
          "The operations team runs approvals, moderation, messaging, and timesheet export in one place, with real-time updates replacing manual refresh-and-check loops — and AI chat support absorbing routine questions.",
          "Participants onboard, upload resumes, and refer people from their phones — the platform's growth loop is self-serve.",
          "PLACEHOLDER: a concrete metric or a line of feedback from the operations team.",
        ],
      },
    ],
  },
  {
    slug: "accenture",
    order: "02",
    title: { lead: "Retail Loyalty", accent: "at Scale" },
    tagline:
      "// appwards, PMI's nationwide retailer rewards platform + accenture's global payroll file vault",
    metaTitle: "Case Study: PMI Appwards & Global Payroll Vault — James Delos Reyes",
    metaDescription:
      "Enterprise work at Accenture: Appwards, a retailer loyalty platform for Philip Morris International, and an internal payroll file-storage system used by Accenture offices globally.",
    facts: [
      { label: "role", value: "senior software engineer" },
      { label: "period", value: "2022 — 2025" },
      { label: "company", value: "Accenture ↗", href: "https://www.accenture.com/en" },
      { label: "client", value: "Philip Morris International ↗", href: "https://www.pmi.com" },
    ],
    stack: ["React", "Node.js", "MySQL", "PostgreSQL", "Jenkins", "Docker", "AWS"],
    sections: [
      {
        cmd: "$ cat problem.md",
        heading: "The problem",
        paras: [
          "Two separate enterprise problems. For client <strong>Philip Morris International</strong>: thousands of local retailers across the Philippines sell PMI products, but the brand had no direct engagement channel with them. Internally at <strong>Accenture</strong>: payroll teams across the globe — Mexico, the Philippines, the UK, Ireland, and more — had no dedicated, controlled home for their payroll files.",
        ],
      },
      {
        cmd: "$ cat approach.md",
        heading: "The approach",
        paras: [
          "For PMI, I worked on <strong>Appwards</strong>, the retailer loyalty platform behind <strong>ph.pmiandu.com</strong>: product packs carry promo codes, and retailers redeem them in the app to earn points — turning every pack sold into a touchpoint. Mobile-responsive React frontend against Node.js services, built for a nationwide retailer audience.",
          "For Accenture's global payroll teams, I built a dedicated file-storage platform — OneDrive-like upload, organization, and retrieval, scoped to payroll's compliance needs rather than a general-purpose share, and serving offices across multiple countries.",
        ],
      },
      {
        cmd: "$ cat outcome.md",
        heading: "The outcome",
        paras: [],
        bullets: [
          "Appwards gave PMI a direct, measurable engagement channel with local retailers nationwide.",
          "The payroll vault became the single controlled home for payroll files across Accenture offices globally.",
          "Deployment time across projects cut ~30% via CI/CD pipelines (Jenkins, Docker, AWS); load times improved ~25% through profiling and bottleneck resolution.",
          "PLACEHOLDER: retailer adoption / redemption volume, if you can share a number safely.",
        ],
      },
    ],
  },
  {
    slug: "goteam",
    order: "03",
    title: { lead: "Pothole Vision", accent: "for Trucking" },
    tagline: "// trucks that remember every pothole and warn the next run",
    metaTitle: "Case Study: Pothole Vision for Blackmoth Trucking — James Delos Reyes",
    metaDescription:
      "Backend work at GoTeam for Blackmoth trucking: route-aware pothole snapshots captured per ride and surfaced to drivers on their next run over the same route.",
    facts: [
      { label: "role", value: "back end developer" },
      { label: "period", value: "2021 — 2022" },
      { label: "company", value: "GoTeam ↗", href: "https://go.team" },
      { label: "client", value: "Blackmoth ↗", href: "https://www.blackmoth.com" },
    ],
    stack: ["Node.js", "Express", "REST APIs"],
    sections: [
      {
        cmd: "$ cat problem.md",
        heading: "The problem",
        paras: [
          "Blackmoth runs heavy trucks on recurring routes. Potholes are more than a nuisance at that scale — they damage vehicles and cargo, and every driver hit them blind, every time, even on roads the fleet had driven the day before. The fleet had the knowledge; nothing captured it.",
        ],
      },
      {
        cmd: "$ cat approach.md",
        heading: "The approach",
        paras: [
          "I built the backend services that give the fleet a <strong>memory of the road</strong>: each ride captures pothole snapshots, tied to the route, and the system integrates with the truck's onboard machine. On the next run over the same route, the driver gets a vision of what's ahead — hazards spotted by the trucks that came before.",
          "Alongside the feature work: performance fixes across the backend (~20% faster API responses) and unit/integration test coverage as standard delivery.",
        ],
      },
      {
        cmd: "$ cat outcome.md",
        heading: "The outcome",
        paras: [],
        bullets: [
          "Road hazards became fleet knowledge instead of per-driver surprises — every truck benefits from every previous run.",
          "PLACEHOLDER: any number Blackmoth saw — fewer incident reports, maintenance savings, routes covered.",
        ],
      },
    ],
  },
  {
    slug: "tech-mahindra",
    order: "04",
    title: { lead: "One-Click", accent: "CSR Automation" },
    tagline: "// a day of manual agent tasks, collapsed into one click",
    metaTitle: "Case Study: One-Click CSR Automation — James Delos Reyes",
    metaDescription:
      "Automation at Tech Mahindra: turning customer service agents' repetitive manual day-to-day tasks into a semi-automated, one-click workflow.",
    facts: [
      { label: "role", value: "software engineer" },
      { label: "period", value: "2020 — 2021" },
      { label: "company", value: "Tech Mahindra ↗", href: "https://www.techmahindra.com" },
    ],
    stack: ["C#", ".NET", "React"],
    sections: [
      {
        cmd: "$ cat problem.md",
        heading: "The problem",
        paras: [
          "Customer service agents spent their shifts on repetitive manual routines — the same sequence of lookups, copies, and data entry, task after task, day after day. The work was necessary; doing it by hand wasn't.",
        ],
      },
      {
        cmd: "$ cat approach.md",
        heading: "The approach",
        paras: [
          "I built a C#/.NET application that <strong>semi-automates the agents' day-to-day routine into a single click</strong> — the app performs the web data collection and the repeated steps, the agent supervises and handles the judgment calls. I also automated email extraction that had been eating hours of manual work, and built a React web application for the recruitment team that replaced their manual workflows.",
        ],
      },
      {
        cmd: "$ cat outcome.md",
        heading: "The outcome",
        paras: [],
        bullets: [
          "Agent task efficiency improved ~40% — the routine became supervision instead of typing.",
          "Automated email extraction saved 10+ hours of manual work weekly.",
        ],
      },
    ],
  },
  {
    slug: "mlhuillier",
    order: "05",
    title: { lead: "Nationwide", accent: "Teller Tools" },
    tagline:
      "// the nationwide pawn system, moved from desktop to web — retiring the branch sync layer with it",
    metaTitle: "Case Study: Nationwide Teller Tools at M Lhuillier — James Delos Reyes",
    metaDescription:
      "Migrating M Lhuillier's nationwide pawn-system teller tools from a C# desktop app to a React web app, with Node.js APIs and a branch-to-HQ sync system.",
    facts: [
      { label: "role", value: "software engineer" },
      { label: "period", value: "2018 — 2020" },
      { label: "company", value: "M Lhuillier ↗", href: "https://mlhuillier.com" },
    ],
    stack: ["React", "Node.js", "C#"],
    sections: [
      {
        cmd: "$ cat problem.md",
        heading: "The problem",
        paras: [
          "M Lhuillier's tellers ran pawn transactions on a C# desktop application — installed, updated, and maintained machine by machine, in branches all over the Philippines. Because the app was desktop-bound, every branch ran a <strong>local server</strong>, and an agent sync tool (which I maintained) pushed each branch's data to the in-house central server. Two systems, two failure surfaces, per-branch everything.",
        ],
      },
      {
        cmd: "$ cat approach.md",
        heading: "The approach",
        paras: [
          "I migrated the pawn-system teller tools to a <strong>React web application</strong> and rewrote the existing C# APIs in Node.js — one deployment instead of thousands of desktop installs, with better performance and accessibility for the tellers using it daily.",
          "The web migration wasn't just a UI upgrade: branches talking directly to the central system <strong>eliminated the need for the branch-local servers and the sync tool entirely</strong> — the layer I'd been maintaining became a layer nobody had to maintain.",
        ],
      },
      {
        cmd: "$ cat outcome.md",
        heading: "The outcome",
        paras: [],
        bullets: [
          "Teller tools became web-based: updates ship once instead of per-machine, across every branch nationwide.",
          "The branch-local server + sync-tool architecture was retired — one central system replaced a per-branch replication layer.",
          "PLACEHOLDER: scale numbers if you remember them — branch count, tellers, transactions/day.",
        ],
      },
    ],
  },
];
