export type AccentColor = "cyan" | "magenta" | "purple" | "lime";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  accent: AccentColor;
  href?: string;
  github?: string;
  featured: boolean;
  gradient: string;
}

export const accentMap: Record<
  AccentColor,
  { text: string; border: string; bg: string; glow: string; hex: string }
> = {
  cyan: {
    text: "text-accent-cyan",
    border: "border-accent-cyan",
    bg: "bg-accent-cyan/10",
    glow: "0 0 32px rgba(0,217,255,0.18)",
    hex: "#00d9ff",
  },
  magenta: {
    text: "text-accent-magenta",
    border: "border-accent-magenta",
    bg: "bg-accent-magenta/10",
    glow: "0 0 32px rgba(255,0,110,0.18)",
    hex: "#ff006e",
  },
  purple: {
    text: "text-accent-purple",
    border: "border-accent-purple",
    bg: "bg-accent-purple/10",
    glow: "0 0 32px rgba(157,78,221,0.18)",
    hex: "#9d4edd",
  },
  lime: {
    text: "text-accent-lime",
    border: "border-accent-lime",
    bg: "bg-accent-lime/10",
    glow: "0 0 32px rgba(57,255,20,0.12)",
    hex: "#39ff14",
  },
};

export const projects: Project[] = [
  // Featured (3)
  {
    id: "gdpr-compass",
    title: "GDPR Compass",
    description:
      "AI-powered GDPR compliance SaaS. 30-question gap analysis, automated policy generation (Privacy Policy, DPA), and audit-ready compliance reports — built for early-stage startups.",
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "Gemini AI"],
    accent: "cyan",
    href: "https://gdpr-compass.vercel.app",
    github: "https://github.com/rahulkarda/gdpr-compass",
    featured: true,
    gradient:
      "linear-gradient(135deg, #062233 0%, #0a0a12 50%, #031a28 100%)",
  },
  {
    id: "memtrail",
    title: "Memtrail",
    description:
      "Open-source Python library for AI agent memory versioning. Commit, diff, and roll back agent memory states — like git for LLM reasoning. Available on PyPI.",
    tags: ["Python", "AI Agents", "PyPI", "Open Source", "LLMs"],
    accent: "magenta",
    href: "https://pypi.org/project/memtrail",
    github: "https://github.com/rahulkarda/memtrail",
    featured: true,
    gradient:
      "linear-gradient(135deg, #2a0a1a 0%, #0a0a0a 50%, #1a0010 100%)",
  },
  {
    id: "adaptive-video-streaming",
    title: "Adaptive Video Streaming Pipeline",
    description:
      "Production-grade ABR video streaming with Node.js and FFmpeg. Multi-quality HLS transcoding (360p/480p/720p), adaptive bitrate switching, drag-and-drop upload, and YouTube-style controls.",
    tags: ["Node.js", "FFmpeg", "HLS", "Express", "JavaScript"],
    accent: "purple",
    href: "https://adaptive-video-streaming-pipeline-app.onrender.com",
    github: "https://github.com/rahulkarda/adaptive-video-streaming-pipeline",
    featured: true,
    gradient:
      "linear-gradient(135deg, #160a2a 0%, #0a0a0a 50%, #0a0018 100%)",
  },
  // Grid (8)
  {
    id: "the-daily-wick",
    title: "The Daily Wick",
    description:
      "Fully-automated daily blog and newsletter. Gemini 2.5 Flash generates two editorial formats daily, Astro SSG builds the site, GitHub Actions handles deployment.",
    tags: ["Astro", "Gemini AI", "GitHub Actions", "TypeScript"],
    accent: "cyan",
    href: "https://rahulkarda.github.io/the-daily-wick/",
    github: "https://github.com/rahulkarda/the-daily-wick",
    featured: false,
    gradient: "linear-gradient(135deg, #0a1a2a 0%, #0a0a0a 100%)",
  },
  {
    id: "the-codex",
    title: "The Codex",
    description:
      "Searchable library of 160+ mental models, cognitive biases, and life principles. One new entry added daily via automated Gemini API integration.",
    tags: ["JavaScript", "Gemini AI", "GitHub Actions", "Pagefind"],
    accent: "magenta",
    href: "https://rahulkarda.github.io/the-codex/",
    github: "https://github.com/rahulkarda/the-codex",
    featured: false,
    gradient: "linear-gradient(135deg, #1a0a0a 0%, #0a0a0a 100%)",
  },
  {
    id: "rag-playground",
    title: "RAG Playground",
    description:
      "Educational RAG system built from the ground up. Experiments with chunking strategies, embedding models, dense/sparse/hybrid retrieval, and quality evaluation metrics.",
    tags: ["Python", "LangChain", "FastAPI", "RAG", "Vector Search"],
    accent: "purple",
    href: undefined,
    github: "https://github.com/rahulkarda/rag-playground",
    featured: false,
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #0a0a0a 100%)",
  },
  {
    id: "llm-rl-agents",
    title: "LLM-RL Agents",
    description:
      "Research project combining LLM reasoning with RL policy learning. Agents trained on classic OpenAI Gym environments using prompted and fine-tuned models.",
    tags: ["PyTorch", "OpenAI Gym", "RL", "Python", "Research"],
    accent: "lime",
    href: undefined,
    github: "https://github.com/rahulkarda/llm-rl-agents",
    featured: false,
    gradient: "linear-gradient(135deg, #0a1a00 0%, #0a0a0a 100%)",
  },
  {
    id: "bionic-reader",
    title: "Bionic Reader",
    description:
      "Chrome extension that applies bionic reading formatting to any webpage — strategically bolds word stems for 20–30% faster reading comprehension. 26 GitHub stars.",
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    accent: "cyan",
    href: "https://bionicreader.netlify.app",
    github: "https://github.com/rahulkarda/bionic-reader",
    featured: false,
    gradient: "linear-gradient(135deg, #001a1a 0%, #0a0a0a 100%)",
  },
  {
    id: "knowledge-graph-engine",
    title: "Knowledge Graph Engine",
    description:
      "Graph-based knowledge representation engine. Extracts entity relationships from unstructured text and exposes a queryable graph API.",
    tags: ["Python", "FastAPI", "NLP", "Docker", "TypeScript"],
    accent: "magenta",
    href: undefined,
    github: "https://github.com/rahulkarda/knowledge-graph-engine",
    featured: false,
    gradient: "linear-gradient(135deg, #1a000f 0%, #0a0a0a 100%)",
  },
  {
    id: "fine-tuning-lab",
    title: "Fine-Tuning Lab",
    description:
      "Reproducible fine-tuning pipelines for Phi-3, Qwen-2, and Llama-3. QLoRA training with MLflow experiment tracking and evaluation harness.",
    tags: ["PyTorch", "QLoRA", "Llama-3", "MLflow", "Hugging Face"],
    accent: "purple",
    href: undefined,
    github: "https://github.com/rahulkarda/fine-tuning-lab",
    featured: false,
    gradient: "linear-gradient(135deg, #0a001a 0%, #0a0a0a 100%)",
  },
  {
    id: "cabinet-of-curiosities",
    title: "Cabinet of Curiosities",
    description:
      "Interactive generative art playground featuring flow fields, cellular automata, fractals, and reaction-diffusion simulations built in vanilla JavaScript.",
    tags: ["JavaScript", "Generative Art", "Canvas API", "Creative Coding"],
    accent: "lime",
    href: undefined,
    github: "https://github.com/rahulkarda/cabinet-of-curiosities",
    featured: false,
    gradient: "linear-gradient(135deg, #001a00 0%, #0a0a0a 100%)",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects.filter((p) => !p.featured);
