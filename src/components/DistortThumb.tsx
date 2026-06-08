"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useId, ReactNode } from "react";

interface DistortThumbProps {
  /** Background gradient (CSS gradient string). */
  gradient: string;
  /** Accent hex used for the inner ellipse glow. */
  accentHex: string;
  /** Big watermark text shown over the gradient. */
  label: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Project thumbnail with a hover-driven SVG displacement filter.
 *
 * On hover, baseFrequency animates from 0.012 → 0.02 and the displacement
 * scale ramps from 0 → 18, producing a liquid distortion that snaps back
 * when the cursor leaves. Each instance gets a unique filter ID so multiple
 * thumbnails on a page don't share one filter element.
 */
export default function DistortThumb({
  gradient,
  accentHex,
  label,
  className,
}: DistortThumbProps) {
  const filterId = useId();
  const cleanFilterId = `distort-${filterId.replace(/:/g, "")}`;

  // Hover state drives a 0 → 1 motion value, springed for smoothness.
  const hover = useMotionValue(0);
  const springed = useSpring(hover, { stiffness: 120, damping: 18 });
  const scale = useTransform(springed, [0, 1], [0, 18]);

  return (
    <motion.div
      onHoverStart={() => hover.set(1)}
      onHoverEnd={() => hover.set(0)}
      onTapStart={() => hover.set(1)}
      onTap={() => hover.set(0)}
      className={`relative w-full aspect-video rounded-sm overflow-hidden cursor-pointer ${className ?? ""}`}
      style={{
        background: gradient,
        filter: `url(#${cleanFilterId})`,
      }}
    >
      {/* Inline SVG filter — animated via React state on the displacement scale. */}
      <svg
        className="absolute w-0 h-0"
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id={cleanFilterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="2"
              seed="3"
              result="noise"
            />
            <DisplacementMap scale={scale} />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: `radial-gradient(ellipse at 40% 50%, ${accentHex}22 0%, transparent 70%)`,
        }}
      >
        <span className="font-display font-black uppercase text-4xl md:text-6xl opacity-10 tracking-tighter">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

/**
 * SVG <feDisplacementMap> doesn't accept `style`, so we drive its `scale`
 * attribute via a motion component. Framer's `motion.feDisplacementMap`
 * forwards animated values straight onto the attribute.
 */
function DisplacementMap({
  scale,
}: {
  scale: ReturnType<typeof useTransform<number, number>>;
}) {
  return (
    <motion.feDisplacementMap
      in="SourceGraphic"
      in2="noise"
      scale={scale}
    />
  );
}
