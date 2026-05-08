import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TennisBallIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M2.5 9.5C6 10.5 9 13 10 17.5" stroke="oklch(0.04 0 0)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M21.5 9.5C18 10.5 15 13 14 17.5" stroke="oklch(0.04 0 0)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Best program for beginners?",
  "Batch timings?",
  "Book a trial session",
];

export function AICoach() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "I'm KNACK — your AI Performance Coach. Ready to elevate your game? Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const reply = pickReply(text);
    setMsgs((m) => [...m, { role: "user", content: text }, { role: "assistant", content: reply }]);
    setInput("");
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full pulse-glow"
        style={{ background: "var(--gradient-energy)" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Coach"
      >
        <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden">
          <TennisBallIcon className="w-7 h-7 text-accent ball-bounce" />
        </div>
        <div className="absolute -inset-1 rounded-full border border-accent/40 spin-slow" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-6 z-50 w-[360px] max-w-[92vw] h-[500px] rounded-2xl glass flex flex-col overflow-hidden"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <div className="p-4 border-b border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-full pulse-glow flex items-center justify-center" style={{ background: "var(--gradient-energy)" }}>
                <TennisBallIcon className="w-6 h-6 text-background" />
              </div>
              <div>
                <div className="font-display tracking-widest">KNACK AI COACH</div>
                <div className="text-xs text-accent">● Online</div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                      m.role === "user"
                        ? "bg-accent text-accent-foreground rounded-br-sm"
                        : "bg-secondary rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)} className="text-xs px-3 py-1 rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
                  {s}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="p-3 border-t border-border flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the coach..."
                className="flex-1 bg-transparent outline-none px-3 py-2 text-sm"
              />
              <button type="submit" className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-xs font-display tracking-widest">SEND</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function pickReply(q: string): string {
  const t = q.toLowerCase();
  if (t.includes("beginner")) return "Our Beginner Coaching builds fundamentals — grip, footwork, and the ready-position mindset. Trial slots open daily 5–7 AM. Want me to book one?";
  if (t.includes("timing") || t.includes("batch")) return "Weekday batches: 5AM–9PM. Weekends: 6AM–8PM. Pick your hour, I'll match you with the right coach.";
  if (t.includes("trial") || t.includes("book")) return "Excellent. Drop your name + phone on the Contact page or WhatsApp +91 9791108070 — your trial session will be confirmed within an hour.";
  if (t.includes("kid") || t.includes("child")) return "The KNACK Kids Program (5–12 yrs) blends play, agility, and technique. Small batches, certified coaches, measurable progress.";
  if (t.includes("fitness")) return "Our Fitness & Agility sessions are sport-science backed — speed, plyometrics, recovery. Pair them with on-court training for maximum gain.";
  if (t.includes("coach")) return "Every KNACK coach is nationally certified with tournament experience. Want me to recommend one based on your level?";
  return "Champion question. Tell me your level (Beginner / Intermediate / Advanced) and I'll map your performance path.";
}
