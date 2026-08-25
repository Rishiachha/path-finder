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
            <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
              <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Left column — story and structure */}
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease }}
                >
                  <p className="eyebrow text-gold">Your Path</p>
                  <h2 className="mt-6 text-5xl text-primary-foreground sm:text-6xl">
                    {path.title}
                  </h2>
                  <p className="mt-6 max-w-xl font-display text-2xl italic leading-snug text-primary-foreground/80">
                    {path.statement}
                  </p>
                  <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/70">
                    {path.overview}
                  </p>

                  {/* Facts */}
                  <dl className="mt-10 grid max-w-xl gap-6 border-y border-primary-foreground/15 py-8 sm:grid-cols-3">
                    <div>
                      <dt className="eyebrow text-gold/80">Rhythm</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
                        {path.facts.rhythm}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-gold/80">Session</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
                        {path.facts.session}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-gold/80">Suited To</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-primary-foreground/90">
                        {path.facts.suitedTo}
                      </dd>
                    </div>
                  </dl>

                  {/* Outcomes */}
                  <div className="mt-10">
                    <p className="eyebrow text-gold">What You Will Gain</p>
                    <ul className="mt-5 space-y-3">
                      {path.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-4 text-primary-foreground/90"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                            aria-hidden
                          />
                          <span className="leading-relaxed">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-12 border border-gold/70 px-9 py-4 text-gold transition-colors duration-700 hover:bg-gold hover:text-accent-foreground">
                    <span className="eyebrow">Begin This Path</span>
                  </button>
                </motion.div>

                {/* Right column — phases and practices */}
                <div className="space-y-16">
                  {/* Phase timeline */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.25, ease }}
                  >
                    <p className="eyebrow text-gold">How It Unfolds</p>
                    <ol className="relative mt-8 space-y-8 border-l border-gold/30 pl-8">
                      {path.phases.map((phase) => (
                        <li key={phase.label} className="relative">
                          <span
                            className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gold"
                            aria-hidden
                          />
                          <span className="eyebrow text-gold/80">
                            {phase.label}
                          </span>
                          <h3 className="mt-2 font-display text-2xl text-primary-foreground">
                            {phase.title}
                          </h3>
                          <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                            {phase.text}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </motion.div>

                  {/* Practices */}
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease }}
                  >
                    <p className="eyebrow text-gold">Recommended Practices</p>
                    <ol className="mt-8 space-y-8">
                      {path.practices.map((p, i) => (
                        <motion.li
                          key={p.name}
                          initial={{ opacity: 0, y: 24 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + i * 0.12,
                            ease,
                          }}
                          className="border-t border-primary-foreground/15 pt-6"
                        >
                          <div className="flex gap-6">
                            <span className="font-display text-xl text-gold">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                <h3 className="font-display text-2xl text-primary-foreground">
                                  {p.name}
                                </h3>
                                <span className="text-xs tracking-wide text-gold/80">
                                  {p.duration}
                                </span>
                              </div>
                              <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                                {p.description}
                              </p>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ol>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto max-w-md px-6 py-24 text-center"
          >
            <span className="rule-gold mx-auto block w-16" />
            <span className="mt-8 block font-display text-2xl italic text-foreground">
              Select one of the five paths above
            </span>
            <span className="mt-3 block text-sm text-muted-foreground">
              Your recommended practices will appear here.
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}
