---
name: Executive Kinetic
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444650'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757682'
  outline-variant: '#c5c6d2'
  surface-tint: '#435b9f'
  primary: '#00113a'
  on-primary: '#ffffff'
  primary-container: '#002366'
  on-primary-container: '#758dd5'
  inverse-primary: '#b3c5ff'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#2d0700'
  on-tertiary: '#ffffff'
  tertiary-container: '#501300'
  on-tertiary-container: '#d37758'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#2a4386'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59e'
  on-tertiary-fixed: '#390b00'
  on-tertiary-fixed-variant: '#783018'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-gutter: 24px
  container-max: 1280px
---

## Brand & Style
The design system is engineered to project authoritative leadership, technical resilience, and forward-thinking innovation. It balances the institutional trust required of a CEO with the high-energy agility of a modern tech founder.

The visual style is **Corporate Modern with Kinetic Accents**. It utilizes a minimalist foundation—heavy whitespace and precision alignment—interspersed with high-energy focal points that bridge the gap between "Gen X" stability and "Gen Z" digital dynamism. The aesthetic is clean, sharp, and intentional, avoiding decorative clutter in favor of functional elegance and structural clarity.

## Colors
The palette is anchored by **Royal Blue**, a color synonymous with stability, depth, and institutional authority. This is contrasted against pure **White** surfaces to maintain a clean, high-trust professional environment.

**High-Energy Orange** is reserved strictly for strategic calls to action and critical interactive triggers, providing a "kinetic" spark that demands attention without compromising the executive tone. 

- **Primary:** Royal Blue (#002366) – Used for headers, primary brand moments, and deep backgrounds.
- **Secondary:** White (#FFFFFF) – The primary surface color for clarity and "breathing room."
- **Accent:** High-Energy Orange (#FF8C00) – Used for conversion points and highlighting key performance metrics.
- **Neutral:** Slate Gray (#64748B) – Used for secondary text and subtle UI borders to maintain a sophisticated hierarchy.

## Typography
The typography system pairs the geometric authority of **Montserrat** for headlines with the systematic clarity of **Inter** for body copy.

- **Headlines:** Use Montserrat to convey strength and architectural precision. Display sizes should utilize tight letter-spacing to feel impactful and modern.
- **Body:** Inter provides maximum legibility for long-form thought leadership and technical specifications.
- **Labels:** Use uppercase Inter with increased letter-spacing for category tags, small captions, and "kicker" text above headlines to create an editorial feel.

## Layout & Spacing
This design system employs a **12-column fixed grid** for desktop, transitioning to a **4-column fluid grid** for mobile. The layout philosophy is built on "Generous Compression"—large vertical gaps between major sections to allow the content to breathe, while keeping internal component elements tightly grouped to suggest technical precision.

- **Margins:** 80px on desktop; 20px on mobile.
- **Alignment:** Primarily left-aligned to mirror traditional editorial and corporate reports, emphasizing a "matter-of-fact" executive style.
- **Vertical Rhythm:** Built on an 8px baseline to ensure mathematical consistency across all components.

## Elevation & Depth
To reflect "Technical Resilience," the design system avoids heavy, fuzzy shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Surface Tiers:** Use subtle shifts in background color (White to Light Slate) to define different content zones.
- **Shadows:** When used for interactivity, shadows should be "Sharp & Sophisticated"—low blur radius (4-8px) with a hint of Royal Blue in the shadow color (#002366 at 8% opacity) to ground the element.
- **Glassmorphism:** Use sparingly for navigation bars to suggest transparency and modern tech-fluency, utilizing a high-saturation background blur (20px).

## Shapes
The shape language is **Soft (0.25rem)**. This "near-sharp" approach communicates professional discipline and technical accuracy. 

- **Standard Elements:** Inputs, buttons, and cards use the 4px (0.25rem) radius.
- **Feature Cards:** May use the `rounded-lg` (8px) setting for a slightly more approachable feel in "Gen Z" targeted sections.
- **Avoid:** Circular "pill" buttons or overly organic, "bubbly" shapes, as they detract from the executive tone.

## Components
- **Primary Buttons:** Solid Royal Blue with White text. Understated but firm. On hover, a subtle shift to a slightly lighter blue.
- **CTA Buttons:** Solid High-Energy Orange. High-contrast, designed to be the single most visible element on any page.
- **Input Fields:** Minimalist with a bottom-border only or very light slate outline. Focus state uses a 2px Royal Blue bottom border.
- **Cards:** White background with a 1px Slate border (#E2E8F0). No shadow in the default state; a sharp, tinted shadow on hover.
- **KPI Chips:** Small, rectangular labels using Royal Blue backgrounds with White text, used to highlight "Gen X Web Hosting" performance metrics (e.g., "99.9% Uptime").
- **Success Metrics:** Large Montserrat numbers in High-Energy Orange to highlight career milestones and growth stats.