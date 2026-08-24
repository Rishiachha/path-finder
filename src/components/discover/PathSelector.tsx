import { motion } from "motion/react";
import { PATHS, type JourneyPathData } from "./paths";

const ease = [0.22, 1, 0.36, 1] as const;

export function PathSelector({
  activeId,
  onSelect,
}: {
  activeId: string | null;
  onSelect: (path: JourneyPathData) => void;
}) {
  return (
    <section id="paths" className="px-4 pb-24 sm:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 lg:h-[76vh] lg:flex-row lg:gap-4">
        {PATHS.map((path, i) => {
          const active = activeId === path.id;
          return (
            <motion.button
              key={path.id}
              type="button"
              onClick={() => onSelect(path)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: i * 0.12, ease }}
              animate={{ flexGrow: active ? 1.9 : 1 }}
              className="group relative h-[58vh] flex-1 basis-0 overflow-hidden text-left lg:h-full"
            >
              <img
                src={path.image}
                alt={path.title}
                loading="lazy"
                width={1280}
                height={1600}
                className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-110"
              />
              <div className="veil-forest absolute inset-0 transition-opacity duration-1000 group-hover:opacity-80" />
              <div
                className={`absolute inset-0 border transition-colors duration-700 ${
                  active ? "border-gold" : "border-transparent"
                }`}
              />

              <div className="relative flex h-full flex-col justify-end p-7">
                <span
                  className={`eyebrow transition-colors duration-700 ${
                    active ? "text-gold" : "text-primary-foreground/60"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 max-w-[8ch] text-3xl leading-tight text-primary-foreground sm:text-4xl">
                  {path.title}
                </h3>
                <div className="mt-5 h-px w-10 bg-gold/80 transition-all duration-700 group-hover:w-20" />
                <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/75 opacity-0 transition-opacity duration-700 group-hover:opacity-100 lg:opacity-0 max-lg:opacity-100">
                  {path.line}
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                  {path.seeking.map((s) => (
                    <li
                      key={s}
                      className="text-[11px] tracking-wide text-primary-foreground/60"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
