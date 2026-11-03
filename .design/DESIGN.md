---
name: Terminal Horizon
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffd6a3'
  on-tertiary: '#462b00'
  tertiary-container: '#ffb13b'
  on-tertiary-container: '#6e4600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffddb5'
  tertiary-fixed-dim: '#ffb957'
  on-tertiary-fixed: '#2a1800'
  on-tertiary-fixed-variant: '#643f00'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
  surface-base: '#080C14'
  surface-subtle: '#0D1322'
  surface-card: '#111827'
  border-subtle: '#1E293B'
  border-medium: '#334155'
  text-primary: '#F8FAFC'
  text-secondary: '#94A3B8'
  text-muted: '#64748B'
  glow-cyan: rgba(34, 211, 238, 0.15)
  glow-violet: rgba(139, 92, 246, 0.15)
typography:
  display:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  brand-mono:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-precise, developer-centric aesthetic tailored for high-impact software engineering portfolios. The system projects deep technical mastery, architectural discipline, and modern product polish. Rooted in developer tools, command-line interfaces, and IDE ergonomics, the visual identity dispenses with decorative frivolity in favor of structural clarity, high-density data legibility, and refined luminescence.

The design movement merges **Technical Minimalism** with **Atmospheric Dark Glassmorphism**:
- **Palette & Atmosphere:** An ultra-dark slate-navy substrate provides deep spatial depth, illuminated by restrained electric cyan and violet luminous accents.
- **Typographic Dialectic:** A crisp pairing between modern geometric grotesque sans-serif for content hierarchies and an uncompromising monospace typeface for code metrics, architecture badges, and identity tags.
- **Surface Language:** Semi-translucent panels with razor-thin structural borders (`1px`) create a layered IDE-inspired dashboard feel. Accent glows are reserved strictly for focused states and intentional interactions to preserve high signal-to-noise ratio.

## Colors

The color palette is built for long-duration technical review under dark conditions, emphasizing optimal contrast ratios (WCAG AAA for primary text against substrate) while preventing optic fatigue.

### Color Roles & Hierarchy
- **Primary (`#22D3EE` / Electric Cyan):** Primary interactive actions, prominent hyperlinks, active cursor states, and key technological badges.
- **Secondary (`#8B5CF6` / Electric Violet):** Secondary accents, subtle gradient ramps paired with primary cyan, architectural milestones, and active pipeline statuses.
- **Neutral Substrate (`#080C14` / Ultra-Dark Slate):** Foundational canvas background color.
- **Layered Neutrals:**
  - `surface-subtle` (`#0D1322`): Canvas depth differentiation and alternating sections.
  - `surface-card` (`#111827`): Elevated surfaces, cards, and modal containers.
  - `border-subtle` (`#1E293B`): Baseline 1px borders delineating UI modules.
  - `border-medium` (`#334155`): Hover border states, focused controls, and active divisions.
- **Typography Colors:**
  - `text-primary` (`#F8FAFC`): Headings, active values, and primary body text.
  - `text-secondary` (`#94A3B8`): Captions, descriptions, metadata labels, and inactive links.
  - `text-muted` (`#64748B`): Structural icons, syntax symbols, and placeholder text.

## Typography

The typographic hierarchy implements an intentional duality:
1. **Geist:** Delivers sharp, neutral, and readable UI copy, headers, and narrative case study prose. Negative tracking is applied to large sizes to enhance structure and cohesion.
2. **JetBrains Mono:** Anchors technical credibility. It governs top-bar brand identity tags, commit timestamps, technical skill chips, performance metrics, and inline code blocks.

Body sizes never fall below 16px for multi-line case studies. Mobile headings scale down dynamically to preserve comfortable reading rhythms on constrained viewports.

## Layout & Spacing

The layout is constructed on an adaptable 12-column responsive fluid grid designed to display architectural blueprints, interactive case studies, and engineering metrics cleanly:

### Breakpoints & Grids
- **Mobile (360px - 767px):** Single-column layout. Margin: `1rem` (`margin-mobile`), gutter: `1rem` (`gutter-mobile`). All cards collapse to 100% viewport width minus container margins.
- **Tablet (768px - 1023px):** 6 or 12-column fluid grid. Margin: `1.5rem`, gutter: `1.25rem`. Project cards snap to 2-column distribution.
- **Desktop (1024px+):** 12-column fluid grid with a maximum content constraint of `1280px` centered. Margin: `2rem` (`margin`), gutter: `1.5rem` (`gutter`). Supports 3-column project matrices or 2-column detailed technical case study breakdowns.

### Spacing Rhythm
- **Internal Micro-Gaps (`space-xs` to `space-sm`):** Icon-to-text pairs, badge padding, button text offsets.
- **Component Padding (`space-md` to `space-lg`):** Internal padding for cards, modals, and container shells.
- **Section Distance (`space-xl` and above):** Structural vertical separators between thematic page segments.

## Elevation & Depth

This design system avoids traditional skeuomorphic dropshadows in favor of **Layered Glassmorphism and Luminescent Radiance**:

### Depth Levels
- **Level 0 (Canvas Base):** Solid substrate `#080C14`, overlayed with an optional subtle 24px micro-dot grid pattern rendered at 8% opacity.
- **Level 1 (Subtle Paneling / Timeline Tracks):** Background tint `#0D1322` with a `1px` border of `#1E293B`.
- **Level 2 (Cards & Content Modules):** Semi-opaque `#111827` (80% alpha) supported by `backdrop-filter: blur(12px)` and a crisp `1px` outline of `#1E293B`.
- **Level 3 (Sticky Top Navigation):** Frosted glass panel with `background: rgba(8, 12, 20, 0.75)`, `backdrop-filter: blur(16px)`, anchored by a `1px` bottom border of `#1E293B`.
- **Level 4 (Hover & Active Glow):** When interacting with interactive cards or primary triggers, elevation is conveyed by shifting the border to `#22D3EE` (or `#8B5CF6`) accompanied by an ambient peripheral drop glow: `box-shadow: 0 0 24px -4px rgba(34, 211, 238, 0.18)`.

## Shapes

The design system uses a **Soft (Level 1)** geometric contour language:
- **Base Components (Inputs, Buttons, Cards):** Formed with `0.25rem` (4px) to `0.5rem` (8px) corner radii. This preserves an engineered, terminal-adjacent silhouette without harsh or brittle sharp edges.
- **Cards & Visual Containers:** Use `rounded-lg` (0.5rem / 8px) for balanced framing around 16:9 media previews.
- **Badges & Tech Chips:** Use pill profiles (`rounded-full`) to contrast against rectangular cards and structural panels.
- **Frame Boundaries:** All visual assets, IDE mockups, and screenshots are held strictly within fixed 16:9 aspect ratios enclosed by a `1px` border.

## Components

### Buttons
- **Primary Action:** Solid background `#22D3EE` with dark `#080C14` high-contrast typography in `Geist` Medium (weight 500). Hover state introduces `box-shadow: 0 0 20px rgba(34, 211, 238, 0.35)` with a subtle upward translate of `-1px` over 200ms ease.
- **Secondary (Terminal Outline):** Transparent background with `1px` border in `#334155` and `#F8FAFC` text. Hover triggers a `#22D3EE` border transition and a soft text color shift.
- **Ghost Action:** No background or outline; uses `#94A3B8` text shifting to `#F8FAFC` on hover, paired with an underline or subtle arrow translation.

### Tech Tags & Chips
- Monospace typography (`JetBrains Mono`, 12px, weight 500).
- Surface `#0D1322` with a `1px` border of `#1E293B` and `#94A3B8` text.
- Optional leading indicator: a `6px` circular status indicator light (Cyan for core stack, Violet for secondary stack, Emerald for production status).

### Cards (Project Showcase)
- Composed of `#111827` at 80% opacity with `backdrop-filter: blur(12px)` and a `1px` border of `#1E293B`.
- Integrated 16:9 screenshot container with an inner subtle vignette border.
- Hover transition triggers a `1px` border highlight in `#22D3EE` or `#8B5CF6` and an ambient diffuse glow (`box-shadow: 0 0 24px -4px rgba(34, 211, 238, 0.15)`), shifting upward by `-2px` smoothly over 250ms.

### Form Inputs & Textareas
- Deep dark surface `#080C14` framed with `1px` solid `#1E293B`.
- Placeholder text in `#64748B`. Focused state transitions the border to `#22D3EE` with a minimal cyan ring `box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.2)`.

### Checkboxes & Radios
- Square (`checkbox`) and circular (`radio`) elements framed with `1px` border `#334155` on `#0D1322` background.
- Selected state fills with `#22D3EE` using a `#080C14` check icon or dot.

### Sticky Navigation Bar
- Positioned fixed top, spanning full width with `backdrop-filter: blur(16px)` and a `1px` border bottom `#1E293B`.
- Identity label renders candidate handle in `JetBrains Mono` (`label-code` role) featuring a pulsing accent status pip. Navigation links employ minimalistic horizontal text rhythm without container boxes.

### Technical Timeline & Architecture Metrics
- Vertical timeline built using a continuous `1px` line in `#1E293B`. Active milestones render as `8px` dots filled with `#22D3EE` and an outer halo.
- Metric indicators highlight raw integers in large sans-serif weights paired with monospace unit descriptions below.