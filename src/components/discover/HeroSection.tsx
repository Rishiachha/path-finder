import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-path.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection({ onBegin }: { onBegin: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.img
        src={heroImg}
        alt="A person walking a mountain path at sunrise"
        width={1920}
        height={1088}
        style={{ y }}
        className="absolute inset-0 h-[118%] w-full object-cover"
      />
      <div className="veil-forest absolute inset-0" />

      <nav className="absolute inset-x-0 top-0 z-20 flex justify-center px-6 py-8">
        <span className="eyebrow text-primary-foreground/85">
          Rishi Sidhasamdhi
        </span>
      </nav>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease }}
          className="eyebrow text-gold-soft"
        >
          Discover Your Path
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.6, ease }}
          className="mt-8 max-w-4xl text-5xl leading-[1.05] tracking-tight text-primary-foreground sm:text-7xl md:text-8xl"
        >
          Begin where you are.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 1.1, ease }}
          className="mt-8 max-w-xl font-display text-xl italic text-primary-foreground/85 sm:text-2xl"
        >
          Every journey inward begins with a single step.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.5, ease }}
          className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/70"
        >
          Find the practices that support your body, mind and awareness.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 1.9, ease }}
          onClick={onBegin}
          className="group mt-14 inline-flex flex-col items-center gap-4"
        >
          <span className="eyebrow text-primary-foreground/90">
            Begin Your Journey
          </span>
          <motion.span
            aria-hidden
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="block h-14 w-px bg-gold/70"
          />
        </motion.button>
      </motion.div>
    </section>
  );
}
