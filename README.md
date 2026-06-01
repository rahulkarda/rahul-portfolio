# Rahul Karda — Portfolio

> ML Engineer at SAP Labs · M.Tech Software Engineering, BITS Pilani · Bangalore, India

**🔗 Live:** [portfolio-one-peach-c54qp1t4q3.vercel.app](https://portfolio-one-peach-c54qp1t4q3.vercel.app)
**📄 Also on GitHub Pages:** [rahulkarda.github.io/rahul-portfolio](https://rahulkarda.github.io/rahul-portfolio)

---

## About This Site

This is my personal portfolio. It covers who I am, what I've built, what I know, and how to reach me. The layout is inspired by [painpropaganda.com](https://painpropaganda.com) — sticky section headers that float as inverted-color panels scroll beneath them, with a scroll-driven floating brain animation that swaps objects per section.

---

## Sections

### Hero
Name, one-line bio, and two CTAs — **View Work** and **GitHub**. Subtitle covers role, location, and education at a glance.

### Featured Work
Three projects I'm most proud of, each with a full-width inverted panel, long description, tech tags, and live/source links:

| Project | What it does |
|---|---|
| **Memtrail** | Python library for AI agent memory versioning — commit, diff, roll back agent state like git. Zero dependencies. On PyPI. |
| **Knowledge Graph Engine** | Extracts entity relationships from unstructured text, builds a queryable semantic graph. FastAPI backend + TypeScript frontend. |
| **Adaptive Video Streaming Pipeline** | ABR video streaming: FFmpeg transcodes uploads to HLS at 360p/480p/720p with adaptive bitrate switching and YouTube-style controls. |

### More Projects
A grid of 7 additional projects:

| Project | Stack | Link |
|---|---|---|
| **GDPR Compass** | Next.js, Supabase, Stripe, Gemini AI | [Live](https://gdpr-compass.vercel.app) |
| **The Daily Wick** | Astro, Gemini AI, GitHub Actions | [Live](https://rahulkarda.github.io/the-daily-wick/) |
| **The Codex** | JavaScript, Gemini AI, Pagefind | [Live](https://rahulkarda.github.io/the-codex/) |
| **RAG Playground** | Python, LangChain, FastAPI | [GitHub](https://github.com/rahulkarda/rag-playground) |
| **Fine-Tuning Lab** | PyTorch, QLoRA, Llama-3, MLflow | [GitHub](https://github.com/rahulkarda/fine-tuning-lab) |
| **LLM-RL Agents** | PyTorch, OpenAI Gym, RL | [GitHub](https://github.com/rahulkarda/llm-rl-agents) |
| **Bionic Reader** | JavaScript, Chrome Extension | [Live](https://bionicreader.netlify.app) |

### Skills & Stack
Three tiers:
- **Core roles** — ML Engineer · Full-Stack Developer · AI Systems Builder · Open Source Contributor
- **Skill pills** — color-coded by category (cyan = ML/AI, magenta = full-stack, purple = infra/tools)
- **Tech grid** — Python, TypeScript, Node.js, React, Next.js, PyTorch, FastAPI, Supabase, Docker, Vercel, GitHub Actions, Astro

### Writing
Three posts linking out to [The Daily Wick](https://rahulkarda.github.io/the-daily-wick/):
- How I Built a Fully-Automated Daily Blog
- Memtrail: Git for AI Agent Memory
- RAG From Scratch: What I Learned

### About
Bio, background, and a stats table:

- **Current role:** ML Engineer, SAP Labs
- **Previously:** Full-Stack Developer
- **Education:** M.Tech Software Engineering, BITS Pilani
- **Location:** Bangalore, India
- **Interests:** Chess · Badminton · Investing · Reading · Automation
- **Status:** Open to freelance

### Contact
Large sticky heading — *"Let's build something."* — with email, GitHub, LinkedIn, and Twitter/X links.

---

## Design

Layout inspired by painpropaganda.com — sticky section titles float at `top: 12.5%` while content panels (inverted bg/text) scroll past underneath them.

**Light mode** — warm off-white `#f0ece4` background, dark `#111` panels  
**Dark mode** — deep navy `#0d1117` background, slate `#1e2a3a` panels  
Toggle top-right (moon/sun), persists in `localStorage`, respects OS preference.

**Accent colors:**
```
--accent-cyan:    #00d9ff   ML / AI projects
--accent-magenta: #ff006e   Open-source tools
--accent-purple:  #9d4edd   Systems / infra
--accent-lime:    #39ff14   Research / experiments
```

**Fonts:** Space Grotesk (display headings) + Inter (body)

---

## ScrollBrain Animation

A fixed CSS face sits behind all content. As you scroll into each section, emoji objects float out of the open skull top — driven by `IntersectionObserver`:

| Section | Objects |
|---|---|
| Hero | 👨‍💻 🔬 ⚡ |
| Work | ⚙️ 🚀 📦 |
| Skills | 🧠 🤖 💻 |
| Writing | 📖 ✍️ 💡 |
| About | ♟️ 🏸 📈 |
| Contact | 🐱 📬 🤝 — cat shakes and says Meow 🐾 |

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript, static export) |
| Styling | Tailwind CSS v4 (`@theme inline`) |
| Animations | Framer Motion 12 |
| Fonts | Space Grotesk + Inter via `next/font/google` |
| Icons | Lucide React |
| Deployment | Vercel (primary) + GitHub Pages via Actions |

---

## Running Locally

```bash
git clone https://github.com/rahulkarda/rahul-portfolio
cd rahul-portfolio
npm install
npm run dev     # → http://localhost:3000
npm run build   # static export to /out
```

No environment variables required.

---

## Adding a Project

Edit [`src/data/projects.ts`](src/data/projects.ts):

```ts
{
  id: "my-project",
  title: "My Project",
  description: "One or two sentences.",
  tags: ["Next.js", "TypeScript"],
  accent: "cyan",        // "cyan" | "magenta" | "purple" | "lime"
  href: "https://...",   // live URL (optional)
  github: "https://...", // GitHub URL (optional)
  featured: false,       // true → appears in Featured Work section
  gradient: "linear-gradient(135deg, #062233 0%, #0a0a12 100%)",
}
```

---

## Contact

**Email:** rahulkarda2002@gmail.com  
**GitHub:** [rahulkarda](https://github.com/rahulkarda)  
**LinkedIn:** [rahul-karda-314768179](https://linkedin.com/in/rahul-karda-314768179)  
**Twitter/X:** [@rahulkarda2002](https://twitter.com/rahulkarda2002)

---

MIT License
