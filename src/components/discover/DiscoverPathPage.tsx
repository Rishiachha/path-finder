import { useState } from "react";
import { motion } from "motion/react";
import { HeroSection } from "./HeroSection";
import { PathSelector } from "./PathSelector";
import { PracticeRecommendation } from "./PracticeRecommendation";
import { JourneyPath } from "./JourneyPath";
import { BeginnerJourney } from "./BeginnerJourney";
import { ClosingSection } from "./ClosingSection";
import type { JourneyPathData } from "./paths";

const ease = [0.22, 1, 0.36, 1] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function DiscoverPathPage() {
  const [active, setActive] = useState<JourneyPathData | null>(null);

  const handleSelect = (path: JourneyPathData) => {
    setActive(path);
    window.setTimeout(() => scrollToId("result"), 220);
  };

  return (
    <main className="bg-background">
      <HeroSection onBegin={() => scrollToId("question")} />

      <section
        id="question"
        className="scroll-mt-8 px-6 pt-12 pb-36 text-center sm:pt-16 sm:pb-52"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.6, ease }}
          className="mx-auto max-w-2xl"
        >
          <div className="rule-gold mx-auto w-24" />
          <h2 className="mt-12 text-4xl leading-tight sm:text-6xl">
            What are you seeking today?
          </h2>
          <p className="mt-8 font-display text-xl italic text-muted-foreground">
            Choose the path that reflects your current journey.
          </p>
        </motion.div>
      </section>

      <PathSelector activeId={active?.id ?? null} onSelect={handleSelect} />
      <PracticeRecommendation path={active} />
      <JourneyPath />
      <BeginnerJourney />
      <ClosingSection />
    </main>
  );
}
