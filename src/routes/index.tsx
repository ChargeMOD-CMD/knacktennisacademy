import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import heroCourt from "@/assets/hero-court.jpg";
import playerAction from "@/assets/player-action.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KNACK Tennis Academy — Precision. Power. Performance." },
      { name: "description", content: "Premium tennis academy in Chennai. Elite coaching, modern sports science, kids to advanced competitive training." },
      { property: "og:title", content: "KNACK Tennis Academy" },
      { property: "og:description", content: "Precision. Power. Performance." },
    ],
  }),
  component: Home,
});

const PROGRAMS = [
  { title: "Beginner Coaching", desc: "Grip, footwork, and the fundamentals of court IQ.", level: "01" },
  { title: "Intermediate Training", desc: "Stroke refinement, tactical play, match temperament.", level: "02" },
  { title: "Advanced Competitive", desc: "Tournament-ready conditioning, strategy and pressure mastery.", level: "03" },
  { title: "Kids Program", desc: "Play-based learning for ages 5–12. Build the future champion.", level: "04" },
  { title: "Fitness & Agility", desc: "Sports-science backed strength, plyometrics and recovery.", level: "05" },
  { title: "Weekend Coaching", desc: "Saturday & Sunday performance blocks for working pros.", level: "06" },
];

const STATS = [
  { v: 500, label: "Athletes Trained", suffix: "+" },
  { v: 25, label: "Tournament Wins", suffix: "+" },
  { v: 12, label: "Elite Coaches", suffix: "" },
  { v: 8, label: "Years of Excellence", suffix: "" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let frame: number;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min((t - start) / 1500, 1);
          setV(Math.floor(p * to));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => {
      obs.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] -mt-20 flex items-center justify-center">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <img src={heroCourt} alt="Stadium tennis court at night" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
          <div className="absolute inset-0 court-lines" />
        </motion.div>

        <motion.div style={{ opacity }} className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] text-accent mb-6"
          >
            ● KNACK TENNIS ACADEMY · CHENNAI
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-[clamp(2.5rem,10vw,11rem)] leading-[0.9] md:leading-[0.85] tracking-tight"
          >
            PRECISION.<br />
            POWER. <span className="text-energy">PERFORMANCE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-foreground/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-balance"
          >
            An elite tennis academy where modern sports science meets championship coaching.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <Link to="/contact" className="btn-hero">JOIN ACADEMY</Link>
            <Link to="/programs" className="btn-ghost">EXPLORE PROGRAMS</Link>
          </motion.div>
        </motion.div>

        {/* speed streak */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent streak" />

        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-widest text-muted-foreground"
        >
          SCROLL TO ENTER THE COURT ↓
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-24 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl md:text-7xl text-energy">
                <Counter to={s.v} suffix={s.suffix} />
              </div>
              <div className="text-xs tracking-widest text-muted-foreground mt-2">{s.label.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
        >
          <div className="text-xs tracking-[0.4em] text-accent mb-4">— THE PHILOSOPHY</div>
          <h2 className="font-display text-5xl md:text-7xl leading-none mb-6">BUILT FOR<br />CHAMPIONS.</h2>
          <p className="text-muted-foreground text-lg mb-4">
            KNACK is more than a tennis academy — it's a performance ecosystem. We engineer athletes through
            disciplined coaching, biomechanics-driven training, and a culture obsessed with precision.
          </p>
          <p className="text-muted-foreground text-lg">
            From first racket grip to international tournaments, every player is a project of mastery.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative aspect-[3/4] rounded-3xl overflow-hidden"
          data-cursor-hover
        >
          <img src={playerAction} alt="Player mid-swing" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 ring-1 ring-inset ring-accent/30 rounded-3xl" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
            <div className="text-xs tracking-widest text-accent">PERFORMANCE INDEX</div>
            <div className="font-display text-3xl">98.7<span className="text-accent">%</span></div>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMS */}
      <section className="py-32 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs tracking-[0.4em] text-accent mb-4">— TRAINING PROGRAMS</div>
              <h2 className="font-display text-5xl md:text-7xl leading-none">PICK YOUR<br />ARENA.</h2>
            </div>
            <Link to="/programs" className="btn-ghost">VIEW ALL</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAMS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                data-cursor-hover
                className="group relative p-8 rounded-2xl glass overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/30 transition-all duration-700" />
                <div className="relative">
                  <div className="font-display text-6xl text-muted-foreground/30 group-hover:text-accent transition-colors">{p.level}</div>
                  <h3 className="font-display text-2xl mt-4 tracking-wider">{p.title.toUpperCase()}</h3>
                  <p className="text-muted-foreground mt-3 text-sm">{p.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-accent text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    EXPLORE →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COURT EXPERIENCE */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 court-lines" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-court)" }} />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="text-xs tracking-[0.4em] text-accent mb-6">— THE COURT EXPERIENCE</div>
          <h2 className="font-display text-5xl md:text-8xl leading-none">
            STEP ONTO A <span className="text-energy">SMARTER</span> COURT.
          </h2>
          <p className="text-muted-foreground text-lg mt-8 max-w-2xl mx-auto">
            Synthetic-pro surfaces, motion-tracking systems, dynamic stadium lighting and recovery zones —
            engineered for elite output, every session.
          </p>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Smart Surface", "Motion Tracking", "Stadium Lighting", "Recovery Lounge"].map((c) => (
              <div key={c} className="glass rounded-xl p-6 hover:border-accent/40 transition-colors" data-cursor-hover>
                <div className="font-display text-sm tracking-widest">{c.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-8xl leading-none">
          YOUR FIRST<br />SERVE STARTS <span className="text-energy">HERE.</span>
        </h2>
        <p className="text-muted-foreground mt-6">Book a free trial session and meet the KNACK coaching staff.</p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-hero">BOOK TRIAL</Link>
          <a href="https://wa.me/919791108070" target="_blank" rel="noreferrer" className="btn-ghost">WHATSAPP</a>
        </div>
      </section>
    </div>
  );
}
