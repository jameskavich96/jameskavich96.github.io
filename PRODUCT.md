# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally:

- **Employers** — hiring managers and recruiters screening for full-stack and AI-application engineering roles. They skim fast, often from a job-board or LinkedIn link, and decide in seconds whether to dig deeper.
- **Direct clients** — businesses looking to hire James for freelance or contract builds. They want proof he has shipped systems like theirs and a low-friction way to start a conversation.

## Product Purpose

Personal portfolio for James Delos Reyes, full-stack engineer (Cebu, Philippines), at drjames.dev. It exists to turn a visit into contact. Success means the visitor does one or more of: emails James, downloads the resume PDF, reads a case study, or checks GitHub/LinkedIn.

## Positioning

Eight years shipping production systems that businesses run on, across five industries and four markets: nationwide pawn-branch teller tools in the Philippines, machine-vision road-defect backends in Australia, enterprise retail loyalty at Accenture, and an AI-powered recruitment platform in the US. He owns systems end-to-end: React/TypeScript frontends, Node/NestJS backends, and production AI integration (OpenAI, RAG, Qdrant vector search) treated as boundary engineering, not demos.

## Operating Context

- Visitors arrive from LinkedIn, job applications, GitHub, and direct referrals; many land on mobile.
- The site is static Astro, deployed to GitHub Pages (`.github/workflows/deploy.yml`), with a VPS/nginx deploy kit also in `deploy/`.
- `public/llms.txt` serves AI crawlers; JSON-LD Person schema and sitemap support search.

## Capabilities and Constraints

- Pages: home (`src/pages/index.astro`) and five case studies (`src/pages/case-studies/[slug].astro`).
- All content lives in `src/data/profile.ts` and `src/data/case-studies.ts`; components render it and never hard-code copy.
- Phone number lives only in the PDF, deliberately kept off the crawlable page.
- Static output only; no server runtime.
- Black Moth work is scoped to the web-app backend only; the vision system is theirs. Do not overstate it.

## Brand Commitments

- Name: James Delos Reyes. Domain: drjames.dev.
- "DR James — the development doctor" stays, but low-key: a supporting line and the domain, not the theme of the site.
- Voice: direct, first-person, concrete outcomes over adjectives.
- Visual register (set by James on 2026-10-04): simple yet catchy, in the quiet dark register of his colleague's site exybit.org. That means a near-black ground, one accent, hairline structure and a faint moving background. It must stay recognisably his own and never a copy, because both portfolios list Jobvious and may be seen side by side. So: no amber accent, no network-graph background, no all-mono type, no white/amber two-tone name.

## Evidence on Hand

- Five case studies with problem/approach/outcome sections (`src/data/case-studies.ts`).
- Five roles with dated bullets and real metrics (~30% deploy time, ~25% load time, ~20% API response, ~40% task efficiency, 10+ hours/week).
- Resume PDF (`public/james-delos-reyes-cv.pdf`), OG image (`public/og.png`).
- No testimonials, client logos, or headshot on hand. Do not fabricate them. Some case-study outcome numbers are still marked TODO by James; do not invent numbers.

## Product Principles

1. Proof before personality: real systems, real metrics, real clients first.
2. Every section ends one step from contact.
3. Accurate scope over impressive scope: never claim work that was not his.
4. Fast to skim for employers, deep enough for clients who want detail.

## Accessibility & Inclusion

Respect `prefers-reduced-motion` everywhere, especially for any animated background. Readable contrast over the background at all times. Keyboard-navigable throughout.
