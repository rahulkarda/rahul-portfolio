"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface TextRevealProps {
  children: string;
  /** Render tag. Default "span" so it composes inside any heading. */
  as?: "span" | "div" | "p";
  /** Per-character delay step (seconds). */
  stagger?: number;
  /** Initial Y offset for each character (px). */
  y?: number;
  /** Run only once. Default true. */
  once?: boolean;
  className?: string;
}

/**
 * Splits a string into spans-per-character and rises + fades them in
 * when the element scrolls into view. Spaces are preserved as
 * non-breaking width so word boundaries don't collapse.
 *
 * Newlines (\n) and explicit <br/> need to be handled by the parent —
 * pass two TextReveal blocks split by a <br/> for multi-line headings.
 */
export default function TextReveal({
  children,
  as = "span",
  stagger = 0.025,
  y = 24,
  once = true,
  className,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount: 0.3 });

  const chars = children.split("");

  const content: ReactNode = chars.map((ch, i) => (
    <motion.span
      key={`${ch}-${i}`}
      // inline-block lets transforms apply per character.
      style={{ display: "inline-block", whiteSpace: "pre" }}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.5,
        delay: i * stagger,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {ch}
    </motion.span>
  ));

  if (as === "div") {
    return (
      <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
        {content}
      </div>
    );
  }
  if (as === "p") {
    return (
      <p ref={ref as React.RefObject<HTMLParagraphElement>} className={className}>
        {content}
      </p>
    );
  }
  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {content}
    </span>
  );
}
