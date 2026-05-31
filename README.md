# Rahul Karda — Portfolio

Personal portfolio website built with Next.js 16, Tailwind CSS v4, and Framer Motion. Dark theme with per-project colorful accent glows.

**Live:** [rahulkarda.dev](https://rahulkarda.dev) *(deploy to Vercel to activate)*

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-first `@theme inline`)
- **Animations:** Framer Motion 12
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts, `next/font` self-hosted)
- **Deployment:** Vercel

## Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens (@theme inline)
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Section composition
├── components/
│   ├── Nav.tsx          # Sticky nav with blur backdrop
│   ├── Hero.tsx         # Full-viewport hero with animated gradient orbs
│   ├── FeaturedProjects.tsx
│   ├── ProjectGrid.tsx
│   ├── ProjectCard.tsx  # Shared card with per-accent hover glow
│   ├── Skills.tsx       # 3-tier: roles / tag pills / tech grid
│   ├── Writing.tsx      # Blog post cards → The Daily Wick
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── AnimateInView.tsx  # Scroll-trigger wrapper (useInView)
├── data/
│   ├── projects.ts      # All projects with accent colors + gradients
│   └── skills.ts        # Skill pills + writing posts
└── lib/
    ├── utils.ts         # cn() utility
    └── motion.ts        # Shared Framer Motion variants
```

## Design System

```css
--bg-dark:        #0a0a0a
--bg-card:        #1a1a1a
--text-primary:   #e5e5e5
--text-secondary: #999999
--accent-cyan:    #00d9ff   /* ML / AI projects */
--accent-magenta: #ff006e   /* Open-source tools */
--accent-purple:  #9d4edd   /* Systems / infra */
--accent-lime:    #39ff14   /* Research / experiments */
```

Each project is assigned one accent color. On hover, the card border and tag pills shift to that color with a matching glow shadow.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build check
```

## Adding a Project

Edit [`src/data/projects.ts`](src/data/projects.ts) and add an object to the `projects` array:

```ts
{
  id: "my-project",
  title: "My Project",
  description: "Short description shown on the card.",
  tags: ["Next.js", "TypeScript"],
  accent: "cyan",           // "cyan" | "magenta" | "purple" | "lime"
  href: "https://...",      // live URL (optional)
  github: "https://...",    // GitHub URL (optional)
  featured: false,          // true = large card in Featured section
  gradient: "linear-gradient(135deg, #062233 0%, #0a0a12 100%)",
}
```

## Deployment

Push to GitHub and connect to [Vercel](https://vercel.com). No environment variables required.

After first deploy, update `metadataBase` in [`src/app/layout.tsx`](src/app/layout.tsx):

```ts
metadataBase: new URL("https://your-vercel-domain.vercel.app"),
```

## License

MIT
