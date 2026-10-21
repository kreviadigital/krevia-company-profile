---
name: Krevia Digital
description: Integrated ERP Solutions and Enterprise Business Systems
colors:
  primary: "#101D35"
  primary-dark: "#0B1322"
  primary-surface: "#182844"
  accent-teal: "#24D6B0"
  accent-teal-hover: "#1AB895"
  canvas: "#F4F7FB"
  card-bg: "#FFFFFF"
  card-muted: "#F1F5F9"
  border-light: "#E2E8F0"
  border-dark: "#1E293B"
  text-heading: "#101D35"
  text-body: "#334155"
  text-muted: "#64748B"
  text-inverse: "#FFFFFF"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  h2:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  h3:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Plus Jakarta Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-teal:
    backgroundColor: "{colors.accent-teal}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  card-surface:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.xl}"
    padding: "32px"
---

# Design System: Krevia Digital

## Overview
Krevia Digital's visual language embodies a modern, credible, and trustworthy B2B ERP software company. Built around clarity, engineering precision, and an Anti-Slop aesthetic, it communicates product ambition without resorting to generic SaaS tropes or unsubstantiated marketing fluff.

## Colors
- **Canvas (`#F4F7FB`)**: Clean, contemporary off-white background ensuring high legibility and reduced visual fatigue.
- **Deep Navy (`#101D35` / `#0B1322`)**: Authoritative primary brand color used for navigation, high-impact cards, footer, and strong contrast sections.
- **Accent Teal (`#24D6B0`)**: High-contrast, vibrant accent color representing system synchronization, active status indicators, and key conversion triggers.
- **Muted Slate (`#64748B` / `#334155`)**: Balanced secondary typography and metadata neutral.
- **Card Surfaces (`#FFFFFF` & `#F1F5F9`)**: Restrained surfaces with crisp 1px borders (`#E2E8F0`).

## Typography
- **Primary Typeface**: Plus Jakarta Sans (`next/font/google`), loaded with variable weights (400, 500, 600, 700, 800).
- **Headings**: Tight negative tracking (`-0.025em`), bold or extrabold weight, authoritative sentence casing.
- **Body**: Generous line-height (`1.6`), balanced measure (max 65ch for reading passages).

## Layout
- Maximum content width: `max-w-6xl` (1152px) centered with responsive padding (`px-4 sm:px-6 lg:px-8`).
- Section vertical rhythm: `py-16 sm:py-24` with deliberate spacing between major modules.
- Grid systems: 12-column layouts for split hero and spotlight, 2-3 column responsive cards for capabilities and principles.

## Elevation & Depth
- Minimal, clean elevation:
  - Surface elevation: subtle shadow `shadow-sm` or `shadow-md shadow-slate-900/5` combined with crisp 1px borders (`border-slate-200/80`).
  - Dark container elevation: deep ambient glow `shadow-2xl shadow-slate-950/20` with subtle border `border-slate-800`.
- Avoid heavy blurred colored dropshadows or muddy gradients.

## Shapes
- Rounded containers: `rounded-2xl` (16px) for cards, `rounded-3xl` (24px) for full-section containers.
- Pills: `rounded-full` for badges, tags, and interactive button actions.
- Input fields: `rounded-xl` with clear focus rings.

## Components
- **Navbar**: Sticky frosted glass navigation with clean hierarchy, primary CTA, and responsive mobile menu.
- **Product Visualizers**: Structured diagrams and interface mockups showing actual operational data (budgets, schedules, procurement) rather than empty placeholders.
- **Module Status Badges**: Clear badges denoting feature readiness (`Available`, `In Development`, `Early Access`).
- **Contact & Inquiry Form**: Accessible form with inline validation, clear feedback, and instant WhatsApp / Email generation.

## Do's and Don'ts
- **DO**: State product capabilities and their actual status honestly.
- **DO**: Use realistic construction terminology (RAB, Site Daily Logs, Material Variance, Subcontractor Allocations).
- **DO**: Ensure WCAG AA compliance (4.5:1 text contrast) on all surfaces.
- **DON'T**: Fabricate client logos, fake review ratings, or unverified enterprise certifications.
- **DON'T**: Use purple-to-pink gradients, generic cartoon 3D illustrations, or stock photos of people pointing at laptops.
- **DON'T**: Re-introduce legacy Rp5M/Rp15M digital agency service packages.
