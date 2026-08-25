import { motion } from "motion/react";
import { PATHS } from "./paths";

const ease = [0.22, 1, 0.36, 1] as const;

const CENTER = 200;
const RADIUS = 128;

const nodes = PATHS.map((path, i) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / PATHS.length;
  return {
    id: path.id,
    title: path.title,
    x: CENTER + Math.cos(angle) * RADIUS,
    y: CENTER + Math.sin(angle) * RADIUS,
    left: 50 + Math.cos(angle) * 50,
    top: 50 + Math.sin(angle) * 50,
  };
});

export function JourneyPath() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-accent-foreground/70">The Journey Map</p>
        <h2 className="mt-6 text-4xl sm:text-5xl">
          Every direction leads inward.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-foreground/70">
          Five paths, one centre. Wherever you begin — a calm mind, a strong
          body, a first practice, inner awareness, or mindful living — the road
          bends back toward the same quiet place within you.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.6, ease }}
        className="relative mx-auto mt-24 aspect-square w-full max-w-[560px]"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="goldline" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.25" />
              <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.25" />
            </linearGradient>
          </defs>

          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="url(#goldline)"
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease }}
          />
          <motion.circle
            cx={CENTER}
            cy={CENTER}
            r="52"
            fill="none"
            stroke="var(--gold)"
            strokeOpacity="0.3"
            strokeWidth="0.6"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease }}
            style={{ transformOrigin: "200px 200px" }}
          />

          {nodes.map((n, i) => {
            const dx = n.x - CENTER;
            const dy = n.y - CENTER;
            const len = Math.hypot(dx, dy);
            return (
              <motion.line
                key={n.id}
                x1={CENTER + (dx / len) * 54}
                y1={CENTER + (dy / len) * 54}
                x2={CENTER + (dx / len) * (RADIUS - 6)}
                y2={CENTER + (dy / len) * (RADIUS - 6)}
                stroke="var(--gold)"
                strokeOpacity="0.6"
                strokeWidth="0.8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.9 + i * 0.15, ease }}
              />
            );
          })}

          {nodes.map((n, i) => (
            <motion.circle
              key={`dot-${n.id}`}
              cx={n.x}
              cy={n.y}
              r="3.2"
              fill="var(--gold)"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.4 + i * 0.15, ease }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          ))}
        </svg>

        {nodes.map((n, i) => (
          <motion.span
            key={`label-${n.id}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1.6 + i * 0.15, ease }}
            className="eyebrow absolute w-28 -translate-x-1/2 -translate-y-1/2 text-center text-primary"
            style={{
              left: `${n.left}%`,
              top: `${n.top}%`,
              transform: `translate(-50%, -50%) translate(${
                (n.left - 50) * 0.7
              }px, ${(n.top - 50) * 0.7}px)`,
            }}
          >
            {n.title}
          </motion.span>
        ))}

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-2xl italic text-primary">
          Your Path
        </span>
      </motion.div>
    </section>
  );
}
