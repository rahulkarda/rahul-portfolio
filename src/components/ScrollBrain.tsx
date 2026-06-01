"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Each section maps to a set of floating objects + a label
const SECTIONS = [
  {
    id: "work",
    label: "Featured Work",
    objects: [
      { emoji: "⚙️",  x: "-28%", y: "-95%",  rotate: -15, delay: 0    },
      { emoji: "🚀",  x: "22%",  y: "-115%", rotate: 12,  delay: 0.08 },
      { emoji: "📦",  x: "-5%",  y: "-130%", rotate: -5,  delay: 0.15 },
    ],
  },
  {
    id: "skills",
    label: "Skills",
    objects: [
      { emoji: "🧠",  x: "-30%", y: "-100%", rotate: -10, delay: 0    },
      { emoji: "🤖",  x: "18%",  y: "-120%", rotate: 8,   delay: 0.08 },
      { emoji: "💻",  x: "-8%",  y: "-140%", rotate: -6,  delay: 0.15 },
    ],
  },
  {
    id: "writing",
    label: "Writing",
    objects: [
      { emoji: "📖",  x: "-26%", y: "-95%",  rotate: -12, delay: 0    },
      { emoji: "✍️",  x: "20%",  y: "-118%", rotate: 10,  delay: 0.08 },
      { emoji: "💡",  x: "-4%",  y: "-135%", rotate: 4,   delay: 0.15 },
    ],
  },
  {
    id: "about",
    label: "About",
    objects: [
      { emoji: "♟️",  x: "-32%", y: "-98%",  rotate: -8,  delay: 0    },
      { emoji: "🏸",  x: "24%",  y: "-116%", rotate: 14,  delay: 0.08 },
      { emoji: "📈",  x: "-6%",  y: "-138%", rotate: -3,  delay: 0.15 },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    objects: [
      { emoji: "🐱",  x: "-28%", y: "-100%", rotate: -10, delay: 0,    isCat: true },
      { emoji: "📬",  x: "22%",  y: "-115%", rotate: 8,   delay: 0.08 },
      { emoji: "🤝",  x: "-4%",  y: "-132%", rotate: -5,  delay: 0.15 },
    ],
  },
];

function FloatingObject({
  emoji, x, y, rotate, delay, isCat, visible,
}: {
  emoji: string; x: string; y: string; rotate: number; delay: number;
  isCat?: boolean; visible: boolean;
}) {
  const [meow, setMeow] = useState(false);

  useEffect(() => {
    if (isCat && visible) {
      const t = setTimeout(() => setMeow(true), 800);
      return () => clearTimeout(t);
    }
    setMeow(false);
  }, [isCat, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={emoji}
          initial={{ opacity: 0, scale: 0.3, y: "20px" }}
          animate={
            isCat && meow
              ? {
                  opacity: 1, scale: 1,
                  rotate: [rotate, rotate + 14, rotate - 14, rotate + 8, rotate - 8, rotate],
                  transition: { duration: 0.6, repeat: Infinity, repeatDelay: 1.2 },
                }
              : { opacity: 1, scale: 1, rotate, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] } }
          }
          exit={{ opacity: 0, scale: 0.3, transition: { duration: 0.25 } }}
          className="absolute text-4xl select-none pointer-events-none"
          style={{ left: "50%", top: "50%", translateX: x, translateY: y }}
        >
          {emoji}
          {/* Meow bubble */}
          <AnimatePresence>
            {isCat && meow && (
              <motion.span
                key="meow"
                initial={{ opacity: 0, scale: 0.5, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-display font-black uppercase tracking-widest bg-[var(--text)] text-[var(--bg)] px-2 py-0.5 rounded"
              >
                Meow! 🐾
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ScrollBrain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Watch which section is in viewport
  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const currentSection = SECTIONS.find((s) => s.id === activeSection);

  return (
    // Fixed container — sits behind everything, centered
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="relative w-[280px] h-[380px] select-none">

        {/* ── HEAD: simple CSS face ── */}
        <div className="absolute inset-0 flex flex-col items-center">

          {/* Skull top (open) */}
          <div
            className="w-[200px] h-[90px] rounded-t-full border-2 border-[var(--text)]/20 bg-[var(--bg)] relative"
            style={{ marginTop: 40 }}
          >
            {/* Open skull cut */}
            <div className="absolute bottom-0 left-0 right-0 h-[18px] bg-[var(--bg)]" />
          </div>

          {/* Face */}
          <div
            className="w-[200px] bg-[var(--bg)] border-2 border-[var(--text)]/20 rounded-b-[60px] relative flex flex-col items-center"
            style={{ height: 200 }}
          >
            {/* Eyes */}
            <div className="flex gap-10 mt-8">
              <div className="w-5 h-5 rounded-full border-2 border-[var(--text)]/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--text)]/60" />
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-[var(--text)]/40 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--text)]/60" />
              </div>
            </div>

            {/* Nose */}
            <div className="w-px h-7 bg-[var(--text)]/15 mt-3" />

            {/* Mouth — smile */}
            <div
              className="mt-2 w-10 h-5 border-b-2 border-[var(--text)]/30 rounded-b-full"
            />

            {/* Section label inside face */}
            <AnimatePresence mode="wait">
              {currentSection && (
                <motion.p
                  key={currentSection.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="absolute bottom-4 text-[9px] uppercase tracking-widest font-bold opacity-30 text-center"
                >
                  {currentSection.label}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── FLOATING OBJECTS per section ── */}
        {currentSection?.objects.map((obj) => (
          <FloatingObject
            key={`${currentSection.id}-${obj.emoji}`}
            {...obj}
            visible={true}
          />
        ))}

        {/* Default objects when no section active (hero) */}
        {!currentSection && (
          <>
            <FloatingObject emoji="👨‍💻" x="-30%" y="-90%"  rotate={-10} delay={0}    visible={true} />
            <FloatingObject emoji="🔬"   x="18%"  y="-112%" rotate={8}   delay={0.1}  visible={true} />
            <FloatingObject emoji="⚡"   x="-5%"  y="-128%" rotate={-5}  delay={0.18} visible={true} />
          </>
        )}

      </div>
    </div>
  );
}
