import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — KNACK Tennis Academy" },
      { name: "description", content: "The performance philosophy and elite athlete development approach behind KNACK Tennis Academy." },
      { property: "og:title", content: "About KNACK Tennis Academy" },
      { property: "og:description", content: "Elite athlete development, modern sports science, championship coaching." },
    ],
  }),
  component: About,
});

const PILLARS = [
  { n: "01", t: "Technique", d: "Biomechanically-tuned strokes engineered for consistency and power." },
  { n: "02", t: "Tactics", d: "Court IQ, pattern play, and pressure-tested decision making." },
  { n: "03", t: "Physical", d: "Speed, agility, plyometrics and structured recovery protocols." },
  { n: "04", t: "Mental", d: "Focus, resilience, and the championship mindset behind every win." },
];

function About() {
  return (
    <div>
      <section className="relative py-32 px-6 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.4em] text-accent mb-6">— THE ACADEMY</div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-9xl leading-[0.9]"
        >
          PERFORMANCE<br />IS A <span className="text-energy">DISCIPLINE.</span>
        </motion.h1>
        <p className="mt-10 text-lg text-muted-foreground max-w-2xl">
          KNACK Tennis Academy was built on one principle: every athlete deserves a program engineered for them.
          We blend elite coaching with modern sports science to develop tennis players who win — on court and beyond it.
        </p>
      </section>

      <section className="py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-6xl mb-16">FOUR PILLARS. ONE CHAMPION.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl" data-cursor-hover
              >
                <div className="font-display text-5xl text-accent">{p.n}</div>
                <div className="font-display text-2xl mt-4 tracking-widest">{p.t.toUpperCase()}</div>
                <p className="text-muted-foreground text-sm mt-3">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl mb-8">OUR APPROACH.</h2>
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>Every athlete who joins KNACK undergoes a performance assessment — technical, physical and mental. From there, we map a personalised development pathway with measurable milestones.</p>
          <p>Coaching ratios stay small. Feedback stays fast. Progress stays visible. That's the KNACK standard.</p>
        </div>
      </section>
    </div>
  );
}
