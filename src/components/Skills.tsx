"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimateInView, staggerItemVariants } from "./AnimateInView";
import { cn } from "@/lib/utils";
import { coreRoles, skills, techStack } from "@/data/skills";
import { accentMap } from "@/data/projects";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-magenta mb-3">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Skills & Stack
          </h2>
        </AnimateInView>

        {/* Tier 1: Core roles */}
        <AnimateInView className="mb-12">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {coreRoles.map((role, i) => {
              const colors = ["text-accent-cyan", "text-accent-magenta", "text-accent-purple", "text-accent-lime"];
              return (
                <span key={role} className="flex items-center gap-4">
                  <span className={cn("text-lg sm:text-xl font-semibold", colors[i % colors.length])}>
                    {role}
                  </span>
                  {i < coreRoles.length - 1 && (
                    <span className="text-border text-xl hidden sm:inline">/</span>
                  )}
                </span>
              );
            })}
          </div>
        </AnimateInView>

        {/* Tier 2: Skill pills */}
        <AnimateInView stagger className="flex flex-wrap gap-2 mb-12">
          {skills.map((skill) => {
            const accent = accentMap[skill.accent];
            const isHovered = hoveredSkill === skill.name;
            return (
              <motion.span
                key={skill.name}
                variants={staggerItemVariants}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={cn(
                  "text-sm px-3.5 py-1.5 rounded-full border cursor-default transition-all duration-200",
                  isHovered ? cn(accent.bg, accent.text) : "text-text-secondary bg-transparent"
                )}
                style={{
                  borderColor: isHovered ? accent.hex : "#333333",
                  boxShadow: isHovered ? `0 0 12px ${accent.hex}30` : "none",
                }}
              >
                {skill.name}
              </motion.span>
            );
          })}
        </AnimateInView>

        {/* Tier 3: Tech grid */}
        <AnimateInView>
          <p className="text-xs text-text-secondary uppercase tracking-widest mb-4">
            Technologies
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-lg border border-border/60 text-text-secondary bg-bg-card/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
