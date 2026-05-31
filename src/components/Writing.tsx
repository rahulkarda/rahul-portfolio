"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { AnimateInView, staggerItemVariants } from "./AnimateInView";
import { motion } from "framer-motion";
import { writingPosts } from "@/data/skills";
import { accentMap } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Writing() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="writing" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent-purple mb-3">
              Writing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              From the Blog
            </h2>
            <p className="text-text-secondary mt-3 text-base">
              Thoughts on building AI systems and shipping products.
            </p>
          </div>
          <a
            href="https://rahulkarda.github.io/the-daily-wick/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-cyan transition-colors duration-200 pb-1 border-b border-border hover:border-accent-cyan/40"
          >
            All posts
            <ExternalLink size={13} />
          </a>
        </AnimateInView>

        <AnimateInView stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {writingPosts.map((post, i) => {
            const accent = accentMap[post.accent];
            const isHovered = hovered === i;
            return (
              <motion.a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItemVariants}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="block p-6 rounded-2xl border bg-bg-card transition-all duration-300 group"
                style={{
                  borderColor: isHovered ? accent.hex : "#333333",
                  boxShadow: isHovered ? accent.glow : "none",
                }}
              >
                <div
                  className={cn(
                    "text-xs font-medium uppercase tracking-widest mb-4 transition-colors duration-200",
                    isHovered ? accent.text : "text-text-secondary"
                  )}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <h3 className="text-base font-semibold text-text-primary leading-snug mb-3 group-hover:text-white transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {post.excerpt}
                </p>
                <div
                  className={cn(
                    "flex items-center gap-1.5 mt-5 text-xs font-medium transition-colors duration-200",
                    isHovered ? accent.text : "text-text-secondary"
                  )}
                >
                  Read more
                  <ExternalLink size={12} />
                </div>
              </motion.a>
            );
          })}
        </AnimateInView>
      </div>
    </section>
  );
}
