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
    title: "Why Systems Outlast Motivation",
    excerpt:
      "Motivation is a visitor. Systems are the house. The case for building habits that don't depend on how you feel.",
    date: "2026-06-02",
    href: "https://rahulkarda.github.io/the-daily-wick/articles/2026-06-02-why-systems-outlast-motivation/",
    accent: "cyan" as AccentColor,
  },
  {
    title: "What First Principles Actually Mean",
    excerpt:
      "Most people talk about first principles thinking. Almost nobody does it. Here's the difference.",
    date: "2026-06-09",
    href: "https://rahulkarda.github.io/the-daily-wick/articles/2026-06-09-what-first-principles-actually-mean/",
    accent: "magenta" as AccentColor,
  },
];
