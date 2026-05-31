"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}
import { cn } from "@/lib/utils";
import { staggerItemVariants } from "./AnimateInView";
import type { Project } from "@/data/projects";
import { accentMap } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const accent = accentMap[project.accent];

  return (
    <motion.article
      variants={staggerItemVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "group relative rounded-2xl border border-border bg-bg-card overflow-hidden transition-all duration-300",
        featured ? "flex flex-col" : "flex flex-col"
      )}
      style={{
        boxShadow: hovered ? accent.glow : "none",
        borderColor: hovered ? accent.hex : "#333333",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "w-full flex-shrink-0",
          featured ? "h-52" : "h-36"
        )}
        style={{ background: project.gradient }}
      >
        {/* Gradient overlay shimmer on hover */}
        <div
          className="w-full h-full transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${accent.hex}18 0%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className={cn(
              "font-semibold text-text-primary leading-snug",
              featured ? "text-xl" : "text-base"
            )}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="text-text-secondary hover:text-text-primary transition-colors duration-200"
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="transition-colors duration-200"
                style={{ color: hovered ? accent.hex : "#999999" }}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <p
          className={cn(
            "text-text-secondary leading-relaxed flex-1",
            featured ? "text-sm" : "text-xs"
          )}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                "text-xs px-2.5 py-1 rounded-full border transition-all duration-200",
                accent.bg,
                hovered ? accent.text : "text-text-secondary",
                "border-border"
              )}
              style={{
                borderColor: hovered ? `${accent.hex}44` : "#333333",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
