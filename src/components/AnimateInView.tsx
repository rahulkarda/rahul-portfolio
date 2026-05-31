"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/lib/motion";

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
  once?: boolean;
  asChild?: boolean;
}

export function AnimateInView({
  children,
  className,
  stagger = false,
  delay = 0,
  once = true,
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.12 });

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: fadeUpVariants.hidden,
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { staggerItemVariants };
