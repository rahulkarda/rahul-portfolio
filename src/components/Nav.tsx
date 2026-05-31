"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — fixed top-left */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed top-0 left-0 z-[9000] w-14 h-14 flex flex-col justify-center items-center gap-[5px] bg-[var(--bg)] pointer-events-auto"
      >
        <span className="w-6 h-[2px] bg-[var(--text)]" />
        <span className="w-6 h-[2px] bg-[var(--text)]" />
        <span className="w-6 h-[2px] bg-[var(--text)]" />
      </button>

      {/* Full-screen nav overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[10000] bg-[var(--panel-bg)] text-[var(--panel-text)] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              <X size={16} />
              Close Menu
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl md:text-4xl uppercase tracking-widest font-display font-bold hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="absolute bottom-8 text-xs uppercase tracking-widest opacity-40">
              rahulkarda2002@gmail.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
