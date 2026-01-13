# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for William Zhai, showcasing product management case studies and projects. The site is built with Next.js 14 (App Router), TypeScript, and Tailwind CSS, and deployed on Vercel.

## Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Create production build
npm run start        # Start production server
npm run lint         # Run ESLint to check code quality
```

## Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router (not Pages Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS with custom theme extensions
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

### Directory Structure
```
src/app/
  ├── layout.tsx              # Root layout with metadata, fonts, analytics
  ├── page.tsx                # Landing page with case study cards
  ├── globals.css             # Global styles and Tailwind imports
  ├── tutoring-platform/
  │   └── page.tsx            # Case study: Tutoring platform project
  └── unified-calendar/
      └── page.tsx            # Case study: Calendar aggregator project
```

### Key Architectural Patterns

**1. App Router Structure**
- All pages are client components (`'use client'`) due to interactive features
- Each case study lives in its own route directory (e.g., `/tutoring-platform`, `/unified-calendar`)
- Shared header component pattern is duplicated across pages (no separate components folder)

**2. Metadata & SEO**
- Root layout (src/app/layout.tsx) defines site-wide metadata with OpenGraph and Twitter cards
- metadataBase is set to `https://wzhai.vercel.app`
- Viewport configuration includes maximum-scale: 1 for iOS Safari

**3. Design System (Tailwind Config)**
Custom theme extensions in tailwind.config.ts:
- **Colors**: `sage-green`, `forest-green`, `cream` with light/dark variants
- **Animations**: Custom `float` and `pulse-slow` keyframes
- **Shadows**: `glow` and `luxury` variants
- **Font**: Inter loaded via next/font/google with weights 300-900

**4. Navigation Patterns**
- Landing page: Stacked card carousel with rotation offset state management
- Case study pages: Sticky sidebar navigation with scroll-based active section tracking
- Both use smooth scrolling and scroll position state for UI transitions

**5. Styling Conventions**
- All pages use `bg-cream` or `bg-white` backgrounds
- Consistent header pattern: fixed position, blur effect on scroll (scrollY > 50)
- Social links (GitHub, LinkedIn, Resume PDF) in every header
- Sage green (`#A8C6A2`) as primary brand color
- Body has global `zoom: 1.1` style applied in layout.tsx

**6. State Management**
- All interactive state is local component state (useState)
- No global state management library
- localStorage used for client-side persistence where needed (mentioned in case studies)

**7. Animation Strategy**
- CSS animations defined inline with dangerouslySetInnerHTML for page-specific keyframes
- Tailwind transition utilities for hover/scroll effects
- Scroll-triggered animations using useEffect + scroll event listeners

## Important Implementation Notes

### Path Aliasing
- `@/*` maps to `./src/*` in tsconfig.json
- Use absolute imports for src/ files: `import Component from '@/app/...'`

### Case Study Page Structure
Both case study pages follow identical structure:
1. Header (with back to portfolio link)
2. Hero section with project metadata (Role, Timeline, Stack, Outcome)
3. Four main sections: Context → Solution → Execution → Reflection
4. Sidebar navigation tracking active section via scroll position
5. Footer with "Back to top" and "View Live Demo" buttons

### TypeScript Configuration
- Strict mode enabled
- ES2017 target (note: older target despite Next.js defaults)
- Module resolution: bundler
- JSX: preserve (handled by Next.js)

### Mobile Responsiveness
- Landing page has distinct mobile/desktop layouts for case study cards
  - Mobile: simple vertical stack
  - Desktop: interactive stacked cards with rotation
- All case study pages are responsive with lg/xl breakpoints for sidebar visibility

### Content Structure
Landing page features:
- Hero section with name, role, current position (Microsoft PM Intern)
- Education card (Ivey Business School HBA)
- Previous experience cards (EY-Parthenon, CIBC, tutoring business)
- Case study carousel (tutoring platform, unified calendar, placeholder projects)

## Development Guidelines

When modifying this codebase:

**Styling**:
- Use Tailwind utility classes consistently
- Leverage the custom theme colors (sage-green, forest-green, cream)
- Maintain the existing animation patterns

**Routing**:
- New case studies should follow the pattern: `/case-study-name/page.tsx`
- Each should be a client component with the standard four-section structure

**Metadata**:
- Update root layout metadata when adding new major features
- Ensure OpenGraph images and descriptions are accurate

**Performance**:
- Images should be in public/ directory
- Use next/font for any new fonts
- Vercel Analytics is already integrated via layout.tsx

**Accessibility**:
- Maintain aria-label attributes on icon links
- Ensure semantic HTML structure in new pages
- Keep navigation keyboard-accessible
