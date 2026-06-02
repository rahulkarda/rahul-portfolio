"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  {
    id: "work",
    label: "Featured Work",
    objects: [
      { emoji: "⚙️", offsetX: -70, offsetY: -110, rotate: -15, delay: 0 },
      { emoji: "🚀", offsetX: 55,  offsetY: -135, rotate: 12,  delay: 0.08 },
      { emoji: "📦", offsetX: -10, offsetY: -160, rotate: -5,  delay: 0.15 },
    ],
  },
  {
    id: "skills",
    label: "Skills",
    objects: [
      { emoji: "🧠", offsetX: -65, offsetY: -115, rotate: -10, delay: 0 },
      { emoji: "🤖", offsetX: 50,  offsetY: -140, rotate: 8,   delay: 0.08 },
      { emoji: "💻", offsetX: -12, offsetY: -165, rotate: -6,  delay: 0.15 },
    ],
  },
  {
    id: "writing",
    label: "Writing",
    objects: [
      { emoji: "📖", offsetX: -68, offsetY: -110, rotate: -12, delay: 0 },
      { emoji: "✍️", offsetX: 52,  offsetY: -133, rotate: 10,  delay: 0.08 },
      { emoji: "💡", offsetX: -8,  offsetY: -158, rotate: 4,   delay: 0.15 },
    ],
  },
  {
    id: "about",
    label: "About",
    objects: [
      { emoji: "♟️", offsetX: -72, offsetY: -112, rotate: -8,  delay: 0 },
      { emoji: "🏸", offsetX: 58,  offsetY: -130, rotate: 14,  delay: 0.08 },
      { emoji: "📈", offsetX: -10, offsetY: -155, rotate: -3,  delay: 0.15 },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    objects: [
      { emoji: "🐱", offsetX: -60, offsetY: -118, rotate: -10, delay: 0, isCat: true },
      { emoji: "📬", offsetX: 52,  offsetY: -138, rotate: 8,   delay: 0.08 },
      { emoji: "🤝", offsetX: -8,  offsetY: -160, rotate: -5,  delay: 0.15 },
    ],
  },
];

const DEFAULT_OBJECTS = [
  { emoji: "👨‍💻", offsetX: -72, offsetY: -115, rotate: -10, delay: 0 },
  { emoji: "🔬",   offsetX: 55,  offsetY: -138, rotate: 8,   delay: 0.1 },
  { emoji: "⚡",   offsetX: -8,  offsetY: -158, rotate: -5,  delay: 0.18 },
];

function FloatingObject({
  emoji, offsetX, offsetY, rotate, delay, isCat,
}: {
  emoji: string; offsetX: number; offsetY: number;
  rotate: number; delay: number; isCat?: boolean;
}) {
  const [meow, setMeow] = useState(false);

  useEffect(() => {
    if (!isCat) return;
    const t = setTimeout(() => setMeow(true), 900);
    return () => clearTimeout(t);
  }, [isCat]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2, y: 24 }}
      animate={
        isCat && meow
          ? {
              opacity: 1, scale: 1,
              rotate: [rotate, rotate + 16, rotate - 16, rotate + 8, rotate - 8, rotate],
              transition: { duration: 0.55, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" },
            }
          : { opacity: 1, scale: 1, rotate, y: 0, transition: { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] } }
      }
      exit={{ opacity: 0, scale: 0.2, y: 16, transition: { duration: 0.2 } }}
      className="absolute text-3xl select-none pointer-events-none"
      style={{
        // offsetX/Y are px offsets from the skull-opening centre
        left: `calc(50% + ${offsetX}px)`,
        top: `calc(38% + ${offsetY}px)`,
      }}
    >
      {emoji}
      <AnimatePresence>
        {isCat && meow && (
          <motion.span
            key="meow"
            initial={{ opacity: 0, scale: 0.5, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-display font-black uppercase tracking-widest bg-[var(--text)] text-[var(--bg)] px-2 py-0.5 rounded"
          >
            Meow! 🐾
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ScrollBrain() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const current = SECTIONS.find((s) => s.id === activeSection);
  const objects = current?.objects ?? DEFAULT_OBJECTS;

  return (
    // Pinned bottom-right, small, fully pointer-events-none, behind content
    <div
      className="fixed bottom-0 right-8 z-[1] pointer-events-none select-none"
      style={{ width: 160, height: 220 }}
      aria-hidden="true"
    >
      <div className="relative w-full h-full">

        {/* ── FACE (transparent fill so it never blocks text) ── */}
        <svg
          viewBox="0 0 160 220"
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.18 }}
        >
          {/* Skull top — open at the top */}
          <path
            d="M30,110 Q30,40 80,40 Q130,40 130,110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* Face sides + chin */}
          <path
            d="M30,110 L30,160 Q30,185 55,190 L105,190 Q130,185 130,160 L130,110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          {/* Left eye */}
          <circle cx="62" cy="130" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="62" cy="130" r="3" fill="currentColor" opacity="0.5" />
          {/* Right eye */}
          <circle cx="98" cy="130" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="98" cy="130" r="3" fill="currentColor" opacity="0.5" />
          {/* Nose */}
          <line x1="80" y1="142" x2="80" y2="158" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          {/* Mouth */}
          <path d="M66,168 Q80,178 94,168" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* ── FLOATING OBJECTS ── */}
        <AnimatePresence mode="wait">
          {objects.map((obj) => (
            <FloatingObject
              key={`${activeSection ?? "default"}-${obj.emoji}`}
              {...obj}
            />
          ))}
        </AnimatePresence>

        {/* Section label */}
        <AnimatePresence mode="wait">
          {current && (
            <motion.p
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-1 left-0 right-0 text-center text-[8px] uppercase tracking-widest opacity-30 font-bold"
            >
              {current.label}
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
