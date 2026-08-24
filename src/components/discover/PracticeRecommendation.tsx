import { AnimatePresence, motion } from "motion/react";
import type { JourneyPathData } from "./paths";

const ease = [0.22, 1, 0.36, 1] as const;

export function PracticeRecommendation({
  path,
}: {
  path: JourneyPathData | null;
}) {
  return (
    <section id="result" className="scroll-mt-16">
      <AnimatePresence mode="wait">
        {path ? (
          <motion.div
            key={path.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease }}
            className="relative overflow-hidden bg-primary"
          >
            <img
              src={path.image}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-[0.9fr_1.1fr] md:py-36">
              <div>
                <p className="eyebrow text-gold">Your Path</p>
                <h2 className="mt-6 text-5xl text-primary-foreground sm:text-6xl">
                  {path.title}
                </h2>
                <p className="mt-6 max-w-sm font-display text-2xl italic leading-snug text-primary-foreground/80">
                  {path.statement}
                </p>
                <button className="mt-12 border border-gold/70 px-9 py-4 text-gold transition-colors duration-700 hover:bg-gold hover:text-accent-foreground">
                  <span className="eyebrow">Begin This Path</span>
                </button>
              </div>

              <ol className="space-y-10">
                {path.practices.map((p, i) => (
                  <motion.li
                    key={p.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.15, ease }}
                    className="border-t border-primary-foreground/15 pt-6"
                  >
                    <div className="flex gap-6">
                      <span className="font-display text-xl text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl text-primary-foreground">
                          {p.name}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-md px-6 py-24 text-center font-display text-xl italic text-muted-foreground"
          >
            Choose a path above, and your practices will appear here.
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
