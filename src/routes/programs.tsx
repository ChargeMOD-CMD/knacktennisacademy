import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Training Programs — KNACK Tennis Academy" },
      { name: "description", content: "From beginner coaching to advanced competitive training, kids programs to fitness — find your KNACK arena." },
      { property: "og:title", content: "KNACK Training Programs" },
      { property: "og:description", content: "Programs for every level. Engineered for performance." },
    ],
  }),
  component: Programs,
});

const PROGRAMS = [
  { t: "Beginner Coaching", level: "Level 01", age: "All ages", dur: "60 min", d: "Build the foundation: grip, footwork, ready position, fundamental strokes. Designed for first-time players." },
  { t: "Intermediate Training", level: "Level 02", age: "All ages", dur: "75 min", d: "Refine strokes, develop tactical awareness, and build match temperament across singles and doubles." },
  { t: "Advanced Competitive", level: "Level 03", age: "13+", dur: "90 min", d: "Tournament-ready conditioning, advanced patterns, opponent analysis and high-pressure point construction." },
  { t: "Kids Tennis Program", level: "Junior", age: "5–12", dur: "45 min", d: "Play-based progressive learning: red, orange, green ball stages. Build coordination, confidence and love for the game." },
  { t: "Fitness & Agility", level: "Performance", age: "10+", dur: "60 min", d: "Strength, plyometrics, speed, mobility and recovery — designed by sports scientists for tennis-specific output." },
  { t: "Weekend Coaching", level: "Flexible", age: "All ages", dur: "75 min", d: "Saturday and Sunday performance blocks for working professionals and weekend athletes." },
];

function Programs() {
  return (
    <div>
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.4em] text-accent mb-6">— TRAINING PROGRAMS</div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-9xl leading-[0.9]"
        >
          PICK YOUR<br /><span className="text-energy">ARENA.</span>
        </motion.h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid md:grid-cols-2 gap-6">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              data-cursor-hover
              className="group relative glass p-10 rounded-3xl overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/30 transition-all duration-700" />
              <div className="relative">
                <div className="flex items-center gap-3 text-xs tracking-widest text-accent">
                  <span>● {p.level.toUpperCase()}</span>
                  <span className="text-muted-foreground">· {p.age}</span>
                  <span className="text-muted-foreground">· {p.dur}</span>
                </div>
                <h3 className="font-display text-4xl mt-4 tracking-wider">{p.t.toUpperCase()}</h3>
                <p className="text-muted-foreground mt-4">{p.d}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-accent text-sm tracking-widest border-b border-accent/40 pb-1 hover:border-accent">
                  ENROLL NOW →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
