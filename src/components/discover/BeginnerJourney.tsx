import { motion } from "motion/react";
import day1 from "@/assets/day-1.jpg";
import day7 from "@/assets/day-7.jpg";
import day30 from "@/assets/day-30.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    day: "Day 1",
    title: "Understanding Yoga",
    text: "You sit, you breathe, you notice. Nothing to achieve — only the willingness to arrive.",
    image: day1,
  },
  {
    day: "Day 7",
    title: "Building Awareness",
    text: "The practice becomes familiar. Breath lengthens, attention returns a little more easily.",
    image: day7,
  },
  {
    day: "Day 30",
    title: "Creating A Practice",
    text: "What began as effort becomes rhythm — a quiet appointment you keep with yourself.",
    image: day30,
  },
];

export function BeginnerJourney() {
  return (
    <section className="bg-secondary/60 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="eyebrow text-accent-foreground/70">Beginner Journey</p>
          <h2 className="mt-6 text-4xl sm:text-5xl">New to Yoga?</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            You need nothing but a little time and a quiet corner. The first
            month unfolds gently.
          </p>
        </div>

        <div className="mt-20 grid gap-14 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.article
              key={s.day}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: i * 0.18, ease }}
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                />
              </div>
              <p className="eyebrow mt-7 text-accent-foreground/70">{s.day}</p>
              <h3 className="mt-3 text-2xl">{s.title}</h3>
              <div className="rule-gold mt-5 w-16" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
