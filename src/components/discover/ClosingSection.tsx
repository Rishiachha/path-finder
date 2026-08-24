import { motion } from "motion/react";
import closing from "@/assets/closing-sunset.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function ClosingSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <img
        src={closing}
        alt="A person meditating on a hilltop at sunset"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="veil-forest absolute inset-0" />

      <div className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease }}
          className="max-w-3xl text-3xl leading-[1.25] text-primary-foreground sm:text-5xl"
        >
          Yoga does not ask you to become someone else.
          <br />
          It helps you return to yourself.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.6, ease }}
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:gap-6"
        >
          <button className="border border-gold/70 px-10 py-4 text-gold transition-colors duration-700 hover:bg-gold hover:text-accent-foreground">
            <span className="eyebrow">Explore Yoga</span>
          </button>
          <button className="border border-primary-foreground/40 px-10 py-4 text-primary-foreground transition-colors duration-700 hover:border-primary-foreground">
            <span className="eyebrow">Explore Meditation</span>
          </button>
        </motion.div>

        <p className="eyebrow absolute bottom-10 text-primary-foreground/50">
          Rishi Sidhasamdhi Yoga Foundation
        </p>
      </div>
    </section>
  );
}
