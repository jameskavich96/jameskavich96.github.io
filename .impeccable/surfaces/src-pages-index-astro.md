---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/case-studies/[slug].astro"]
---

# Home + case studies — surface brief

Scope: the home page (`src/pages/index.astro`) and the case-study pages (`src/pages/case-studies/[slug].astro`). Visitor mode: Persuade.

Audience: employers and direct clients, weighted equally. Their job is to decide in seconds that James ships real systems end-to-end, then email him, download the resume, open a case study, or check GitHub/LinkedIn.

Constraints:
- All copy is verbatim from `src/data/*.ts` and the existing component text.
- Static Astro.
- The CSP allows only self scripts plus the existing inline `html.js` hash, and fonts from Google.

Memorable moment: a whisper-quiet orbit trace in signal lime crossing a hairline world map behind the page, lighting PH, AU and US as it passes.

History: Mission Control (seed 08815d15) shipped first, and James rejected it as "unprofessional" (too costumed). The direction below was pinned by James and replaces it.

## Direction contract

THESIS: Simple yet catchy. The work speaks on a quiet dark ground, with one sharp accent and one faint moving map that tells his PH → AU → US story. It refuses both themed costumes (IDE chrome, control-room props, patches) and the safe white template.

OWN-WORLD: The ground is near-black with a green cast (`#0b0d0b`). Cards are raised one step (`#111411`) and edged with 1px hairlines (`rgb(255 255 255 / .08)`). Text is off-white (`#e9ece6`), with soft gray-green for secondary text. Signal lime (`#c6f432`) is the ONLY accent: primary actions, the current-role marker, metric numbers, the live trace, and focus. Type is Mona Sans, self-hosted and variable: 600–700, slightly condensed, tight tracking for names and headings, capped at 6rem. Geist Mono (small, uppercase, tracked) handles labels, dates, tags, metrics and station codes. Body text is Mona Sans 400. Corners are square or 2px. There is no glow, no gradient, and no glass beyond a legibility blur on the nav.

STORY: The visitor reads the name and a one-line promise (React, Node, and the AI in between). One scroll later, they meet five case studies as a big editorial index; hovering or scrolling one lights its market (PH, AU, US) on the map. Then a compact experience timeline that expands for detail, AI shipped to production (prose beside the pipeline), About beside Toolkit, and a close to email or the resume. Every section has its own shape: index, table, split, pair.

FIRST VIEWPORT: The faint map fills the background and the lime trace sweeps it. A slim top nav has `dr.james` on the left, section links in mono, and RESUME as an outline button on the right. Left-aligned and large: JAMES DELOS REYES in Mona Sans 700, semi-condensed, up to 6rem, all off-white. The moving trace and stations are masked to the right of about 52% of the width, so they never cross the copy. Under it, the role and location in mono; then the headline, with "and the AI in between." in lime; then the drLine, soft. Then one mono stats line, then EMAIL ME (lime fill), RESUME.PDF (outline), and GitHub and LinkedIn as text links.

FORM: User-pinned direction (James, 2026-10-04: exybit.org register, faint orbit map, signal lime, sharp sans plus mono labels, then the layout pass: case-study index first, compact timeline, Mona Sans, stations linked to work). It replaces the Mission Control roll, seed 08815d15. That seed is recorded here only; the direction-round payload predates seed logging. The orbit map is carried over from Mission Control and reduced to hairlines.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
