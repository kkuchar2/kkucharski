---
target: homepage
total_score: 22
p0_count: 1
p1_count: 2
timestamp: 2026-07-21T20-11-04Z
slug: src-app-page-tsx
---
# Homepage Critique — kkucharski.com

**Target:** `src/app/page.tsx` (homepage)
**North Star:** The Crafted Brief (PRODUCT.md + DESIGN.md)
**Scores:** Nielsen **22/40** (Acceptable) · P0: 1 · P1: 2 · P2: 2

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Project cards stay at opacity 0.001 until IntersectionObserver adds `.visible`; live CDP showed 0/10 visible after scroll |
| 2 | Match System / Real World | 3 | Clear SE language; lowercase titles + TailwidCSS typo undercut polish |
| 3 | User Control and Freedom | 2 | No prefers-reduced-motion path; animations cannot be skipped |
| 4 | Consistency and Standards | 2 | Work techs in config unused; date gray vs DESIGN #999; LinkedIn blue vs white GitHub |
| 5 | Error Prevention | 3 | Thin surface; relative PDF path works on `/` |
| 6 | Recognition Rather Than Recall | 2 | Icon-only GitHub/external with title=URL; no Work section label |
| 7 | Flexibility and Efficiency | 2 | Resume only mid-page; no sticky/skip path |
| 8 | Aesthetic and Minimalist Design | 3 | Top composition clean; 10 equal project cards become noise |
| 9 | Error Recovery | 2 | Broken outbound links fail silently |
| 10 | Help and Documentation | 1 | No mailto; AI badge unexplained |
| **Total** | | **22/40** | **Acceptable** |

## Anti-Patterns Verdict

**LLM assessment — partial AI-slop.** Emerald one-signal CTA, flat hairline cards, and employer-first IA are intentional and on-brand. Partial tells: Inter + flat `#151515`, identical equal cards, opacity-gated entrances, display tracking `-0.05em` under DESIGN floor, back-ish ease across many components. Atmosphere blobs exist only in `globals.css` and are never mounted — live page is a flat dark void.

**Deterministic scan — 3 advisory findings** (exit 2):
- `design-system-font-size` — Header role size `clamp(..., 2rem)` off DESIGN ramp (`Header.module.scss`)
- `design-system-font-size` — AI badge `0.65rem` off ramp (`ProjectItem.module.scss`)
- `design-system-font-size` — Work date `clamp(0.9rem, ...)` off ramp (`WorkItem.module.scss`)

These are advisory type-ramp drift (DESIGN.md was written after the CSS). Not false positives, but secondary to the P0 motion gate.

**Visual overlays:** Not injected in final pass (browser MCP unavailable in fork). Earlier live evidence: first paint mostly empty; after wait, name/work/resume visible; Projects heading with blank grid; CDP `blobs: false`, all 10 cards `opacity: 0.001`, `visibleClass: 0` even after scroll.

## Overall Impression

The top of the page does its job for a LinkedIn recruiter: name, role, three employers, emerald resume. Then the Crafted Brief promise breaks — projects stay invisible, atmosphere never appears, and ten equal cards would dilute scan even if they rendered. Biggest opportunity: stop gating content on motion, then give projects a featured hierarchy.

## What's Working

1. **Identity-first hierarchy** — Name at 900 weight + employer column delivers PRODUCT’s 10-second line without SaaS chrome.
2. **One Signal Rule held** — Resume is the only emerald control; socials stay secondary.
3. **Flat surfaces** — Hairline cards + grain masks match Flat-By-Default; reads as deliberate UI taste.

## Priority Issues

### [P0] Content gated on opacity + IntersectionObserver
- **What:** Name/title/resume/section titles start near-invisible; project cards only animate when `.visible` from `useInView`. Live: 10/10 cards stuck at `0.001`, zero `.visible` after scroll.
- **Why it matters:** Recruiters from LinkedIn may see a blank or half-empty page — trust failure on first paint. Violates DESIGN “Don’t gate readability on motion.”
- **Fix:** Visible default styles; motion as progressive enhancement; honor `prefers-reduced-motion`. Ensure IO actually fires (threshold/rootMargin) or drop IO for CSS scroll-driven/in-view alternatives that fail open.
- **Suggested command:** `$impeccable animate` (then `$impeccable harden` for reduced-motion)

### [P1] Ten equal project cards — scan failure
- **What:** `ProjectsListView` renders 10 peer cards in a uniform grid. DESIGN allows featured hierarchy; none shipped. AI-assisted badges currently front-load the first three.
- **Why it matters:** Belief ladder step 3 (“projects show range”) blurs into a repo dump; recruiter can’t pick a hero in 15 seconds.
- **Fix:** Feature 1–2 projects (larger span, optional screenshot); demote or group the rest; reconsider AI badge placement/order.
- **Suggested command:** `$impeccable layout`

### [P1] Crafted Brief atmosphere missing in DOM
- **What:** `.blob-container` / `.blob-*` live only in `globals.css`; `layout.tsx` mounts bare `<main>{children}</main>`.
- **Why it matters:** Live page reads colder and more template-flat than the identity DESIGN documents.
- **Fix:** Mount blobs behind content at low opacity, or delete unused CSS and own a flat canvas deliberately.
- **Suggested command:** `$impeccable colorize` (or quieter distill if choosing flat-on-purpose)

### [P2] Journey ends without conversion reinforcement
- **What:** Resume CTA sits once between work and projects; page ends in hobby cards.
- **Why it matters:** Weak peak-end; after scrolling projects there’s no second path to the PDF.
- **Fix:** Repeat resume (or compact contact) after projects — same intent, one label.
- **Suggested command:** `$impeccable polish`

### [P2] “AI-assisted” front-loads discount narrative
- **What:** New badges on angular-components / image-converter / netbench sit at top of grid.
- **Why it matters:** LinkedIn screeners may discount first three projects before opening anything.
- **Fix:** Keep honesty, but lead with strongest craft proof; move AI-assisted lower or soften badge prominence.
- **Suggested command:** `$impeccable clarify` / `$impeccable layout`

## Persona Red Flags

**Priya (LinkedIn recruiter — project-specific):** Arrives from profile link with 30–60s. First paint risk (blank/partial hero). Employers land; stack proof on work items never renders despite config. Projects section can look broken (heading only). Equal cards + AI badges make “which repo to open?” hard. Conversion is PDF-only; no mailto.

**Alex (Power User / technical peer):** Icon-only GitHub/external with URL titles; no keyboard-focused affordances beyond defaults; no reduced-motion; wants deep links and stack signal on work history that’s missing from UI.

**Jordan (First-Timer / non-engineer screener):** “Projects” with empty space reads as unfinished site. Lowercase titles and TailwidCSS typo read as careless. AI-assisted unexplained. Socials bounce back to LinkedIn/GitHub without a clear “email me” path.

## Minor Observations

- Display/title letter-spacing `-0.05em` vs DESIGN floor `-0.04em`
- Work date+company share flex with parent `text-gray-500` flattening hierarchy
- Unused `@keyframes pulse` in WorkItem SCSS
- Social links start `opacity: 0` (harder than `0.001`)
- No `:focus-visible` on resume link
- Nested tech-chip entrance animations add reveal noise
- `emcia.design` websiteLink is a Vercel preview URL
- Large `mt-[150px]` can push resume below fold on short laptop viewports after work

## Questions to Consider

1. If Crafted Brief needs atmosphere behind content, why are blobs CSS-only with zero markup — intentional flatness, or unfinished identity?
2. After Goldman/ING land, which **one** project earns featured hierarchy instead of 10 equal cells?
3. Do AI-assisted badges protect honesty, or invite screeners to discount the first three projects?
