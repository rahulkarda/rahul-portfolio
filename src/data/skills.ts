import type { AccentColor } from "./projects";

export interface SkillPill {
  name: string;
  accent: AccentColor;
}

export const coreRoles = [
  "ML Engineer",
  "Full-Stack Developer",
  "AI Systems Builder",
  "Open Source Contributor",
];

export const skills: SkillPill[] = [
  // ML / AI — cyan
  { name: "PyTorch", accent: "cyan" },
  { name: "LangChain", accent: "cyan" },
  { name: "Gemini API", accent: "cyan" },
  { name: "Anthropic Claude API", accent: "cyan" },
  { name: "MLflow", accent: "cyan" },
  { name: "RAG", accent: "cyan" },
  { name: "Fine-tuning", accent: "cyan" },
  { name: "Reinforcement Learning", accent: "cyan" },
  // Full-Stack — magenta
  { name: "Next.js", accent: "magenta" },
  { name: "React", accent: "magenta" },
  { name: "Astro", accent: "magenta" },
  { name: "TypeScript", accent: "magenta" },
  { name: "Node.js", accent: "magenta" },
  { name: "FastAPI", accent: "magenta" },
  { name: "Supabase", accent: "magenta" },
  { name: "Stripe", accent: "magenta" },
  { name: "Docker", accent: "magenta" },
  // Tools / Infra — purple
  { name: "GitHub Actions", accent: "purple" },
  { name: "Vercel", accent: "purple" },
  { name: "FFmpeg", accent: "purple" },
  { name: "Tailwind CSS", accent: "purple" },
  { name: "Pagefind", accent: "purple" },
];

export const techStack = [
  "Python",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "PyTorch",
  "FastAPI",
  "Supabase",
  "Docker",
  "Vercel",
  "GitHub Actions",
  "Astro",
];

export const writingPosts = [
  {
    title: "How I Built a Fully-Automated Daily Blog",
    excerpt:
      "A walkthrough of The Daily Wick — Gemini 2.5 Flash writing, Astro SSG, GitHub Actions cron, and Buttondown newsletter delivery, all for free.",
    date: "2025-05-15",
    href: "https://rahulkarda.github.io/the-daily-wick/",
    accent: "cyan" as AccentColor,
  },
  {
    title: "Memtrail: Git for AI Agent Memory",
    excerpt:
      "Why long-running AI agents need memory version control, and how I built a zero-dependency Python library to solve it.",
    date: "2025-04-22",
    href: "https://github.com/rahulkarda/memtrail",
    accent: "magenta" as AccentColor,
  },
  {
    title: "RAG From Scratch: What I Learned",
    excerpt:
      "Building a retrieval-augmented generation pipeline without LangChain taught me more about embeddings, chunking, and retrieval quality than any tutorial.",
    date: "2025-03-10",
    href: "https://rahulkarda.github.io/the-daily-wick/",
    accent: "purple" as AccentColor,
  },
];
