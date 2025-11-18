# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for Numa Rivera, a real estate company in Saudi Arabia. The site is built with:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components

## Commands

### Development
```bash
npm run dev           # Start development server (http://localhost:3000)
npm run build         # Build for production
npm run start         # Start production server
npm run lint          # Run ESLint
```

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

## Architecture

### Directory Structure
- `/app` - Next.js App Router pages and layouts
  - `/app/page.tsx` - Home page with hero, features, and property sections
  - `/app/about/page.tsx` - About us page with company story, values, and team
  - `/app/contact/page.tsx` - Contact page with form and information
  - `/app/layout.tsx` - Root layout with Header and Footer
  - `/app/globals.css` - Global styles and Tailwind CSS configuration
- `/components` - Reusable React components
  - `/components/Header.tsx` - Site header with navigation (client component)
  - `/components/Footer.tsx` - Site footer with links and info
  - `/components/ui` - shadcn/ui components (auto-generated)
- `/lib` - Utility functions
  - `/lib/utils.ts` - Utility helpers (shadcn/ui)
- `/public` - Static assets

### Key Components

**Header Component** (`/components/Header.tsx`)
- Client component with mobile menu state
- Responsive navigation with desktop and mobile views
- Amber color scheme matching brand
- Links to home, about, and contact pages

**Footer Component** (`/components/Footer.tsx`)
- Company information and branding
- Quick links to main pages
- Service listings
- Contact information placeholder

**Page Structure**
All pages follow a consistent pattern:
1. Hero section with gradient background
2. Content sections with white/gray-50 alternating backgrounds
3. Cards for content organization
4. Responsive grid layouts (1 column mobile, 3-4 columns desktop)

### Styling Approach

- Uses Tailwind CSS v4 with custom color variables
- Amber color scheme (`amber-600`, `amber-700`) for primary brand color
- Dark mode support configured in globals.css
- shadcn/ui components provide consistent UI primitives
- Responsive design with mobile-first approach using md/lg breakpoints

### Adding New Pages

To add a new page:
1. Create a new directory in `/app` (e.g., `/app/properties`)
2. Add `page.tsx` inside the directory
3. Update Header navigation in `/components/Header.tsx`
4. Follow existing page structure patterns (hero + content sections)

### Data and Content

Currently all content is placeholder. To add real data:
- Property listings: Consider creating a `/data` directory for JSON or fetching from an API
- Team members: Store in a data file and map over in about page
- Contact form: Wire up form submission to an API endpoint or email service
- Images: Replace placeholder gradients with actual images in `/public` or use a CDN

### Design System

Brand colors:
- Primary: Amber (#D97706 / amber-600, #B45309 / amber-700)
- Backgrounds: White, Gray-50
- Text: Gray-900 (headings), Gray-600 (body)

Typography:
- Font: Geist Sans (primary), Geist Mono (code)
- Headings: Bold, large sizes (3xl-6xl)
- Body: Regular weight, readable sizes (base-lg)

Component patterns:
- Cards with border-2 and hover:shadow-lg
- Buttons with amber background
- Icon circles with amber-100 background
- Sections with py-20 spacing
