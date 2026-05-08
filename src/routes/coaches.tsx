import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/coaches")({
  head: () => ({
    meta: [
      { title: "Coaches — KNACK Tennis Academy" },
      { name: "description", content: "Meet the elite coaching team behind KNACK Tennis Academy. Certified, experienced, performance-obsessed." },
      { property: "og:title", content: "KNACK Coaches" },
      { property: "og:description", content: "Elite tennis coaches dedicated to athlete development." },
    ],
  }),
  component: Coaches,
});

const COACHES = [
  { n: "Arjun Rao", role: "Head Coach", exp: "15 yrs", spec: "High Performance" },
  { n: "Meera Iyer", role: "Junior Development", exp: "10 yrs", spec: "Kids 5–12" },
  { n: "Vikram Shah", role: "Strength & Conditioning", exp: "12 yrs", spec: "Sports Science" },
  { n: "Priya Nair", role: "Tactical Coach", exp: "8 yrs", spec: "Match Strategy" },
];

function Coaches() {
  return (
    <div>
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.4em] text-accent mb-6">— THE COACHES</div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-9xl leading-[0.9]"
        >
          COACHED BY<br /><span className="text-energy">CHAMPIONS.</span>
        </motion.h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
          Every KNACK coach is nationally certified with tournament-level experience. Their job? Build yours.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-32 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COACHES.map((c, i) => (
          <motion.div
            key={c.n}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            data-cursor-hover
            className="group relative glass rounded-3xl overflow-hidden"
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <div className="absolute inset-0" style={{ background: "var(--gradient-energy)", opacity: 0.15 }} />
              <div className="absolute inset-0 court-lines opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center font-display text-9xl text-foreground/10">
                {c.n.split(" ").map((p) => p[0]).join("")}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-display text-2xl tracking-wider">{c.n.toUpperCase()}</div>
                <div className="text-xs tracking-widest text-accent mt-1">{c.role.toUpperCase()}</div>
              </div>
            </div>
            <div className="p-6 border-t border-border flex justify-between text-xs tracking-widest text-muted-foreground">
              <span>EXP · {c.exp}</span>
              <span className="text-accent">{c.spec.toUpperCase()}</span>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
