import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function JourneyPath() {
  return (
    <section className="px-6 py-32 sm:py-44">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-accent-foreground/70">The Journey Map</p>
        <h2 className="mt-6 text-4xl sm:text-5xl">
          Every direction leads inward.
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.6, ease }}
        className="relative mx-auto mt-20 aspect-square w-full max-w-[560px]"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <linearGradient id="goldline" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.25" />
              <stop offset="50%" stopColor="var(--gold)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <motion.circle
            cx="200"
            cy="200"
            r="118"
            fill="none"
            stroke="url(#goldline)"
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease }}
          />
          <motion.circle
            cx="200"
            cy="200"
            r="62"
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
          {[
            [200, 82, 200, 138],
            [200, 262, 200, 318],
            [82, 200, 138, 200],
            [262, 200, 318, 200],
          ].map(([x1, y1, x2, y2]) => (
            <motion.line
              key={`${x1}-${y1}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--gold)"
              strokeOpacity="0.6"
              strokeWidth="0.8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 1, ease }}
            />
          ))}
        </svg>

        <span className="eyebrow absolute left-1/2 top-0 -translate-x-1/2 text-primary">
          Awareness
        </span>
        <span className="eyebrow absolute bottom-0 left-1/2 -translate-x-1/2 text-primary">
          Practice
        </span>
        <span className="eyebrow absolute left-0 top-1/2 -translate-y-1/2 text-primary">
          Calm
        </span>
        <span className="eyebrow absolute right-0 top-1/2 -translate-y-1/2 text-primary">
          Strength
        </span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-2xl italic text-primary">
          Your Path
        </span>
      </motion.div>
    </section>
  );
}
