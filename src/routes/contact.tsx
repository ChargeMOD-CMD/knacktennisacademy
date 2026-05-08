import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enrollment — KNACK Tennis Academy" },
      { name: "description", content: "Book a trial session at KNACK Tennis Academy, Chennai. Call, WhatsApp, or send a quick inquiry." },
      { property: "og:title", content: "Contact KNACK Tennis Academy" },
      { property: "og:description", content: "Book your trial. Start your journey." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-xs tracking-[0.4em] text-accent mb-6">— ENROLLMENT</div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-9xl leading-[0.9]"
        >
          BOOK YOUR<br /><span className="text-energy">FIRST SERVE.</span>
        </motion.h1>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-32 grid lg:grid-cols-2 gap-10">
        <div className="glass rounded-3xl p-10">
          <h2 className="font-display text-3xl tracking-widest mb-8">QUICK INQUIRY</h2>
          {sent ? (
            <div className="py-20 text-center">
              <div className="text-5xl mb-4">●</div>
              <p className="font-display text-2xl tracking-widest text-accent">SUBMITTED.</p>
              <p className="text-muted-foreground mt-2">Our team will be in touch within an hour.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-5"
            >
              {[
                { l: "Full Name", t: "text", n: "name", p: "[A-Za-z\\s]{2,50}", title: "Name should be 2-50 characters" },
                { l: "Phone", t: "tel", n: "phone", p: "[0-9]{10,15}", title: "Please enter a valid phone number (10-15 digits)" },
                { l: "Email", t: "email", n: "email", p: undefined, title: undefined },
              ].map((f) => (
                <div key={f.n}>
                  <label className="text-xs tracking-widest text-muted-foreground">{f.l.toUpperCase()}</label>
                  <input required type={f.t} name={f.n} pattern={f.p} title={f.title}
                    className="w-full mt-2 bg-transparent border-b border-border focus:border-accent outline-none py-3 text-lg transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-xs tracking-widest text-muted-foreground">PROGRAM INTEREST</label>
                <select required className="w-full mt-2 bg-transparent border-b border-border focus:border-accent outline-none py-3 text-lg">
                  <option className="bg-card">Beginner Coaching</option>
                  <option className="bg-card">Intermediate Training</option>
                  <option className="bg-card">Advanced Competitive</option>
                  <option className="bg-card">Kids Program</option>
                  <option className="bg-card">Fitness & Agility</option>
                  <option className="bg-card">Weekend Coaching</option>
                </select>
              </div>
              <div>
                <label className="text-xs tracking-widest text-muted-foreground">MESSAGE</label>
                <textarea rows={3}
                  className="w-full mt-2 bg-transparent border-b border-border focus:border-accent outline-none py-3 text-lg resize-none transition-colors" />
              </div>
              <button type="submit" className="btn-hero mt-6">BOOK TRIAL SESSION</button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          {[
            { l: "PHONE", v: "+91 9791108070", h: "tel:+919791108070" },
            { l: "WHATSAPP", v: "Chat with us instantly", h: "https://wa.me/919791108070" },
            { l: "EMAIL", v: "info@knacktennisacademy.com", h: "mailto:info@knacktennisacademy.com" },
          ].map((c) => (
            <a key={c.l} href={c.h} target="_blank" rel="noreferrer"
               data-cursor-hover
               className="block glass rounded-2xl p-6 hover:border-accent/50 transition-all group">
              <div className="text-xs tracking-widest text-accent">● {c.l}</div>
              <div className="font-display text-2xl mt-2 group-hover:text-accent transition-colors">{c.v}</div>
            </a>
          ))}
          <div className="glass rounded-2xl p-6">
            <div className="text-xs tracking-widest text-accent">● LOCATION</div>
            <div className="font-display text-2xl mt-2">CHENNAI · TAMIL NADU</div>
            <p className="text-sm text-muted-foreground mt-1">Update exact academy address</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs tracking-widest text-accent">● HOURS</div>
            <div className="mt-3 space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">WEEKDAYS</span><span>5:00 AM – 9:00 PM</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">WEEKENDS</span><span>6:00 AM – 8:00 PM</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP — daylight tennis-court styled */}
      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <div className="text-xs tracking-[0.4em] text-accent mb-3">— FIND THE COURT</div>
            <h2 className="font-display text-4xl md:text-6xl leading-none">VISIT THE ACADEMY.</h2>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Chennai+Tamil+Nadu"
            target="_blank" rel="noreferrer"
            data-cursor-hover
            className="btn-ghost"
          >
            OPEN IN GOOGLE MAPS
          </a>
        </div>

        <div className="relative rounded-3xl overflow-hidden glass" data-cursor-hover>
          {/* tennis court frame */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute inset-3 rounded-2xl ring-2 ring-accent/70" style={{ boxShadow: "var(--shadow-glow)" }} />
            <div className="absolute top-1/2 left-3 right-3 h-px bg-accent/60" />
            <div className="absolute top-3 bottom-3 left-1/2 w-px bg-foreground/40" />
            {/* service boxes */}
            <div className="absolute top-1/4 left-3 right-3 h-px bg-accent/30" />
            <div className="absolute bottom-1/4 left-3 right-3 h-px bg-accent/30" />
            {/* corner markers */}
            {[
              "top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3",
            ].map((p) => (
              <div key={p} className={`absolute ${p} w-4 h-4`}>
                <div className="absolute inset-0 border-l-2 border-t-2 border-accent" />
              </div>
            ))}
            {/* glowing tennis ball pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full bg-accent pulse-glow" />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(90deg, transparent 49%, oklch(0.04 0 0 / 0.5) 49% 51%, transparent 51%)" }}
                />
                <div className="absolute -inset-4 rounded-full border border-accent/40 spin-slow" />
              </div>
              <div className="mt-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur text-xs tracking-widest font-display text-center whitespace-nowrap">
                ● KNACK TENNIS ACADEMY
              </div>
            </div>
          </div>

          {/* daylight google map (light theme via Maps Embed) */}
          <div className="relative aspect-[16/9] bg-secondary">
            <iframe
              title="KNACK Tennis Academy location"
              src="https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed&z=12"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "saturate(1.1) brightness(1.05)" }}
            />
            {/* subtle court tint overlay (kept light to preserve day mode) */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{ background: "linear-gradient(135deg, oklch(0.93 0.23 130 / 0.06), transparent 60%)" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
