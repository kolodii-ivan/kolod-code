# Kolod Code — Portfolio Website Design Spec

## Overview

A portfolio website at `code.ikolodiy.com` branded "Kolod Code" that showcases web applications built with Claude Code. Serves as both a personal portfolio and a Claude Code community showcase.

## Branding & Visual Identity

**Name:** Kolod Code

**Color Palette:**
- Primary background: White/off-white (`#FAFAF8` — Anthropic's warm white)
- Terminal accent sections: Dark charcoal (`#1A1A1A`)
- Brand accent: Warm tan/clay (`#D4A574`) for highlights and hover states
- Text: Dark gray (`#2D2D2D`) on light, light gray (`#E5E5E5`) on dark
- Terminal green: `#4ADE80` for cursor blink and status indicators

**Typography:**
- Headings & "Kolod Code" branding: Monospace (JetBrains Mono)
- Body text & descriptions: Sans-serif (Inter)
- Tech stack tags: Monospace, styled as inline code blocks

**Logo treatment:** "Kolod Code" in monospace with a blinking terminal cursor: `Kolod Code_`

## Design Direction

Hybrid — clean modern layout with terminal-inspired accents. Professional base with monospace branding, code-block styled metadata, and dark terminal sections mixed with clean white sections.

## Page Structure

Single scrollable page, structured for future detail pages.

### 1. Hero (Dark Terminal Section)
- Dark background (`#1A1A1A`), centered content
- "Kolod Code" in large monospace with blinking cursor animation
- Tagline: "Web apps crafted with Claude Code" in sans-serif
- Terminal prompt aesthetic: `> ` prefix on tagline
- Smooth scroll indicator or "View Projects" button

### 2. Projects Grid (Light Section)
- 2-column grid on desktop, 1-column on mobile
- Each project card contains:
  - Screenshot (top, rounded corners)
  - Project name (monospace, `<h3>`)
  - Description (sans-serif, 2-3 sentences)
  - Tech stack as inline code tags (e.g., `Next.js` `Python` `GCP`)
  - "Visit" link styled as terminal command: `> open project`
- Cards: subtle shadow, hover lift effect
- Only projects with live URLs are displayed

### 3. About / Footer (Dark Terminal Section)
- Brief about block: who you are, what Claude Code is, purpose of the site
- Links to main site (`ikolodiy.com`) and socials
- "Built with Claude Code" badge

## Project Data

### Active Projects (Initial Launch)

| Project | URL |
|---------|-----|
| Air Quality | `https://air.kolodii.com/` |
| Yana | `https://yana.ikolodiy.com/` |
| Land Lab | `https://land.ikolodiy.com/` |

### Data Format

Projects stored as a TypeScript array in `src/data/projects.ts`:

```typescript
interface Project {
  name: string;
  description: string;
  url: string;
  screenshot: string;
  techStack: string[];
}
```

New projects added by editing this file — no database or CMS.

## Technical Architecture

**Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Vercel

**Rendering:** Static Site Generation (SSG)

**File Structure:**
```
src/
  app/
    layout.tsx        — root layout, fonts, metadata
    page.tsx          — main page composing all sections
    globals.css       — Tailwind + custom terminal animations
  components/
    Hero.tsx          — dark terminal hero section
    ProjectGrid.tsx   — project cards grid
    ProjectCard.tsx   — individual project card
    Footer.tsx        — dark footer section
  data/
    projects.ts       — project data array
public/
  screenshots/        — project screenshot images
```

**Fonts:** JetBrains Mono and Inter loaded via `next/font/google`

**Animations:** Blinking cursor via CSS keyframes (no JS)

## SEO & Indexing

- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<article>` for project cards
- `<title>`: "Kolod Code — Web Apps Built with Claude Code"
- `<meta name="description">`: concise summary of the site's purpose
- Open Graph & Twitter Card meta tags for social sharing
- `robots.txt` allowing all crawlers
- `sitemap.xml` via Next.js built-in or `next-sitemap`
- Structured data (JSON-LD): `WebSite` schema + `ItemList` for projects
- Canonical URL: `https://code.ikolodiy.com`
- All images with descriptive `alt` text
- Proper heading hierarchy: `<h1>` Kolod Code, `<h2>` sections, `<h3>` project names
- SSG + Vercel CDN for fast Core Web Vitals

## Responsive Design

- Desktop: 2-column project grid
- Tablet: 2-column with reduced padding
- Mobile: 1-column, stacked cards, scaled fonts

## Future Considerations

- Individual project detail pages (route: `/projects/[slug]`)
- More projects added to `projects.ts` as they launch
- Potential filtering by tech stack
