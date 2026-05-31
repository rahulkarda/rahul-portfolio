"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const blobAnimation = {
  x: [0, 25, -15, 0],
  y: [0, -18, 22, 0],
  scale: [1, 1.05, 0.97, 1],
  transition: { duration: 9, repeat: Infinity, ease: "easeInOut" as const },
};

const blobAnimation2 = {
  x: [0, -20, 18, 0],
  y: [0, 22, -14, 0],
  scale: [1, 0.96, 1.06, 1],
  transition: { duration: 11, repeat: Infinity, ease: "easeInOut" as const },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient blobs */}
      <motion.div
        animate={blobAnimation}
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        animate={blobAnimation2}
        className="absolute -bottom-32 -right-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,0,110,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-accent-cyan mb-6 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/5">
            Available for freelance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-text-primary leading-[1.08] tracking-tight mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-accent-cyan">Rahul Karda</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed mb-4"
        >
          ML Engineer at{" "}
          <span className="text-text-primary font-medium">SAP Labs</span>{" "}
          &middot; Full-Stack Builder &middot; M.Tech CS{" "}
          <span className="text-text-primary font-medium">@BITS Pilani</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.46 }}
          className="text-base text-text-secondary max-w-xl leading-relaxed mb-10"
        >
          I build AI systems, SaaS products, and open-source tools — from
          production ML pipelines to fine-tuned LLMs to full-stack web apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.56 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cyan text-bg-dark font-semibold text-sm hover:bg-accent-cyan/90 transition-all duration-200"
          >
            View Work
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="https://github.com/rahulkarda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary/40 transition-all duration-200 text-sm"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-border/40"
        >
          {[
            { value: "11+", label: "Projects shipped" },
            { value: "294", label: "GitHub followers" },
            { value: "31", label: "Public repos" },
            { value: "M.Tech", label: "BITS Pilani CS" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-bold text-text-primary">{value}</div>
              <div className="text-xs text-text-secondary mt-0.5">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
