# Rahul Karda — Portfolio

Personal portfolio website inspired by [painpropaganda.com](https://painpropaganda.com)'s scroll-driven sticky layout. Built with Next.js 16, Tailwind CSS v4, Framer Motion, and Space Grotesk.

**Live:** [rahulkarda.github.io/rahul-portfolio](https://rahulkarda.github.io/rahul-portfolio)

## Features

- Sticky section headers that float as dark panels scroll beneath them
- Inverted color panels (warm off-white ↔ dark navy) per section
- Scroll-driven floating objects animation in the hero — items pop out as you scroll into each section
- Light / dark mode toggle (moon/sun, top-right) — persists in localStorage, respects OS preference
- Dark mode: deep navy `#0d1117` base with slate `#1e2a3a` panels
- Per-project accent color glows: cyan / magenta / purple / lime
- Fully responsive, zero environment variables

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript, static export)
- **Styling:** Tailwind CSS v4 (`@theme inline` in globals.css)
- **Animations:** Framer Motion 12 (scroll-driven, useScroll + useTransform)
- **Fonts:** Space Grotesk (display) + Inter (body) via `next/font`
- **Icons:** Lucide React
- **Deployment:** GitHub Pages via GitHub Actions

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /out
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Design tokens, light + dark CSS vars
│   ├── layout.tsx           # Fonts, metadata, ThemeProvider
│   └── page.tsx             # Section composition
├── components/
│   ├── Nav.tsx              # Hamburger + theme toggle
│   ├── ThemeProvider.tsx    # data-theme on <html>, localStorage
│   ├── ScrollBrain.tsx      # Scroll-driven floating objects hero
│   ├── Hero.tsx             # Name + CTA
│   ├── FeaturedProjects.tsx # 3 large sticky-panel project entries
│   ├── ProjectGrid.tsx      # Grid of remaining projects
│   ├── Skills.tsx           # Roles + pill tags + tech stack
│   ├── Writing.tsx          # Blog post cards → The Daily Wick
│   ├── About.tsx            # Bio + stats table
│   ├── Contact.tsx          # Sticky contact section
│   └── Footer.tsx
├── data/
│   ├── projects.ts          # All projects + accentMap
│   └── skills.ts            # Skills, roles, writing posts
└── lib/
    ├── utils.ts             # cn() utility
    └── motion.ts            # Shared Framer Motion variants
```

## Adding a Project

Edit [`src/data/projects.ts`](src/data/projects.ts):

```ts
{
  id: "my-project",
  title: "My Project",
  description: "Short description.",
  tags: ["Next.js", "TypeScript"],
  accent: "cyan",        // "cyan" | "magenta" | "purple" | "lime"
  href: "https://...",   // optional
  github: "https://...", // optional
  featured: false,       // true = large featured card
  gradient: "linear-gradient(135deg, #062233 0%, #0a0a12 100%)",
}
```

## License

MIT
