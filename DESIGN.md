---
name: kkucharski.com
description: Dark engineer portfolio — recruiter-scannable, with intentional UI craft
colors:
  canvas: "#151515"
  ink: "#FFFFFF"
  ink-muted: "#999999"
  ink-soft: "#FFFFFF99"
  accent: "#4DBD8A"
  accent-border: "#4DBD8A4D"
  surface-border: "#FFFFFF1A"
  surface-fill: "#FFFFFF08"
  chip-fill: "#FFFFFF04"
  chip-ink: "#D0D0D0"
  atmosphere-violet: "#9E5CFF"
  atmosphere-blue: "#5C81FF"
  atmosphere-magenta: "#FF5CAB"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 4rem)"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.025em"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.06em"
rounded:
  badge: "4px"
  control: "10px"
  card: "15px"
spacing:
  xs: "5px"
  sm: "20px"
  md: "30px"
  lg: "50px"
  xl: "80px"
  page-x: "150px"
  page-y: "150px"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "#FFFFFF1F"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    padding: "16px 32px"
  card-project:
    backgroundColor: "{colors.surface-fill}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
  chip-tech:
    backgroundColor: "{colors.chip-fill}"
    textColor: "{colors.chip-ink}"
    rounded: "{rounded.control}"
    padding: "10px 20px"
---

# Design System: kkucharski.com

## 1. Overview

**Creative North Star: "The Crafted Brief"**

A personal engineer portfolio that a recruiter can finish in under a minute, yet still feels designed by someone who cares about UI. Dark canvas, one green action, soft atmospheric color in the background only. Hierarchy does the work: name, employers, projects, resume.

The system rejects SaaS product landings and agency pitch decks. It stays a personal page: identity first, proof second, conversion last. Atmosphere blobs are ambient, never the brand.

**Key Characteristics:**
- Dark near-black canvas with white ink and one emerald accent
- Inter today (technical default); hierarchy carries more weight than font novelty
- Flat surfaces: borders and tonal fills, not drop shadows
- Entrance motion that must never hide content when reduced or blocked
- Equal project cards today; featured hierarchy is an allowed evolution

## 2. Colors

Restrained palette: neutrals dominate; emerald is the only interactive accent; violet/blue/magenta exist only as soft atmosphere.

### Primary
- **Signal Emerald** (`#4DBD8A`): Resume CTA text and stroke. The single conversion color. Use on ≤10% of any screen.

### Neutral
- **Lab Canvas** (`#151515`): Page background and theme color.
- **Ink** (`#FFFFFF`): Name, section titles, company, project titles.
- **Ink Soft** (`#FFFFFF99` / white at 60%): Descriptions and supporting copy.
- **Ink Muted** (`#999999`): Dates and secondary metadata.
- **Hairline Border** (`#FFFFFF1A`): Project card edges.
- **Whisper Fill** (`#FFFFFF08`): Card interior wash (via mask grain).
- **Chip Fill / Chip Ink** (`#FFFFFF04` / `#D0D0D0`): Technology chips.

### Tertiary (atmosphere only)
- **Violet / Blue / Magenta haze** (`#9E5CFF`, `#5C81FF`, `#FF5CAB`): Fixed blurred blobs behind content. Decorative only. Never use these as CTA, text, or chip colors.

### Named Rules
**The One Signal Rule.** Emerald is reserved for the resume action (and future primary CTAs of the same intent). Do not sprinkle green across cards, badges, or links.

**The Atmosphere Stay-Back Rule.** Blobs stay low opacity and behind content. If the page reads as “purple UI,” atmosphere has taken over the brand.

## 3. Typography

**Display Font:** Inter (with ui-sans-serif / system-ui)
**Body Font:** Inter (same family)
**Label/Mono Font:** Inter (labels use size/weight/tracking, not a second family)

**Character:** Single-family technical sans. Confidence comes from weight contrast (900 name vs 400 role) and tight tracking on large type, not from a decorative display face. A future display swap is allowed if hierarchy stays this clear.

### Hierarchy
- **Display** (900, `clamp(1.8rem, 3vw, 4rem)`, 1.2, `-0.03em`): Person name only.
- **Headline** (700, `clamp(1.6rem, 3vw, 2.5rem)`, 1.2, `-0.03em`): Section titles (Projects).
- **Title** (700, `clamp(1.2rem, 1.5vw, 1.5rem)`): Company names; project titles at ~`1.25rem` / `text-xl`.
- **Body** (400, ~`1rem`, tracking wide on descriptions): Role line, work/project descriptions. Cap ~65ch where practical (`max-w-[500px]` on project copy).
- **Label** (600–800, `0.65rem`–`0.8rem`): Tech chips and dates.

### Named Rules
**The Weight Ladder Rule.** Name is the heaviest element on the page. Section titles next. Never let a chip or badge out-shout the name.

**The Tracking Floor Rule.** Display letter-spacing must stay ≥ `-0.04em` (current name uses `-0.03em`).

## 4. Elevation

Flat by default. Depth comes from 1px hairline borders, whisper fills, and grain masks — not box shadows.

### Shadow Vocabulary
None in production components. Do not introduce soft multi-layer drop shadows on cards or the resume button.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flush with the canvas. Hover may brighten fills or scale icons slightly; it must not invent a floating card.

## 5. Components

### Buttons
- **Shape:** Soft control radius (`10px`)
- **Primary (Resume):** Transparent fill, emerald text (`#4DBD8A`), 2px emerald stroke at 30% opacity, padding `1rem 2rem`, weight 600. Grain mask overlay at rest; brighter on hover.
- **Hover / Focus:** Increase mask opacity; keep emerald readable. Focus must be visible (outline or ring) for keyboard users.

### Chips
- **Tech chips:** Whisper fill, chip ink, `10px` radius (or `5px` when passed as prop), padding `10px 20px`, weight 600, staggered entrance.

### Cards / Containers
- **Corner Style:** `15px`
- **Background:** Whisper fill + grain mask
- **Shadow Strategy:** None
- **Border:** `1px` hairline (`#FFFFFF1A`)
- **Internal Padding:** `1.75rem` (~28px)
- **Behavior:** Entrance motion under `prefers-reduced-motion: no-preference` only; default state is fully visible.

### Navigation
No site nav. Social row is LinkedIn + GitHub icon links with hover scale. Treat as secondary actions under the name.

### Signature: Work item
Date (muted) + company (title weight) + role + soft description. Vertical stack with generous gap (`50px` between items). No card chrome.

### Signature: Project item
Title row (title + GitHub / external icons) → description → tech chip row. Equal grid cells today (`1` / `2` / `3` columns by breakpoint).

## 6. Do's and Don'ts

### Do:
- **Do** keep the resume CTA as the single emerald control on the homepage.
- **Do** lead with name, employers, and projects before decoration.
- **Do** use hairline borders and whisper fills for project surfaces.
- **Do** keep content visible without relying on entrance animations.
- **Do** preserve a personal engineer-page feel when evolving layout or type.

### Don't:
- **Don't** turn this into a SaaS product landing or agency pitch deck (PRODUCT.md).
- **Don't** use atmosphere violet/blue/magenta for CTAs, headings, or chips.
- **Don't** add purple glow, glassmorphism stacks, or multi-layer card shadows.
- **Don't** gate readability on motion (no permanent near-zero opacity without a visible fallback).
- **Don't** invent a second primary CTA with the same intent as the resume.
- **Don't** overlay decorative pills on project imagery if screenshots are added later.
