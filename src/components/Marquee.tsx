"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  /** Seconds per full loop. Lower = faster. */
  duration?: number;
  /** Reverse direction. */
  reverse?: boolean;
  /** Variant: "default" inherits page bg/text. "panel" inverts colors. "accent" uses cyan stripe. */
  variant?: "default" | "panel" | "accent";
}

export default function Marquee({
  items,
  duration = 30,
  reverse = false,
  variant = "default",
}: MarqueeProps) {
  // Duplicate the items list — once we've scrolled the first copy fully out
  // of view (-50%), the second copy is in the same position the first was,
  // so the loop is seamless.
  const doubled = [...items, ...items];

  const variantClass =
    variant === "panel"
      ? "bg-[var(--panel-bg)] text-[var(--panel-text)]"
      : variant === "accent"
        ? "text-[var(--accent)] border-y border-[var(--accent)]/30"
        : "border-y border-[var(--border)]";

  return (
    <div
      className={`overflow-hidden whitespace-nowrap py-5 ${variantClass}`}
      aria-hidden="true"
    >
      <motion.div
        className="inline-flex gap-12"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-12 font-display font-bold uppercase tracking-tight text-2xl md:text-4xl"
          >
            {item}
            <span
              className="opacity-40"
              style={{ color: variant === "accent" ? "currentColor" : undefined }}
            >
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
