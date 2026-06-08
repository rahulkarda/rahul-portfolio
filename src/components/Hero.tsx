"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TextReveal from "./TextReveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm uppercase tracking-widest font-medium opacity-50 mb-6">
          ML Engineer · Bangalore, India
        </p>
        <h1
          className="font-display font-bold leading-[1.0] tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
        >
          <TextReveal stagger={0.04} y={32}>Rahul</TextReveal>
          <br />
          <TextReveal stagger={0.04} y={32}>Karda</TextReveal>
        </h1>
        <p className="text-base md:text-lg opacity-60 max-w-md mx-auto leading-relaxed mb-10">
          Building AI systems, SaaS products, and open-source tools.
          <br />
          ML Engineer at SAP Labs · previously Full-Stack Developer.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="text-sm uppercase tracking-widest font-bold px-6 py-3 border-2 border-[var(--text)] text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-200"
          >
            View Work
          </a>
          <a
            href="https://github.com/rahulkarda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-widest font-bold px-6 py-3 border-2 border-[var(--text)]/30 text-[var(--text)]/60 hover:border-[var(--text)] hover:text-[var(--text)] transition-all duration-200"
          >
            GitHub →
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
