import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); // Check on mount
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ACADEMY" },
    { to: "/programs", label: "PROGRAMS" },
    { to: "/coaches", label: "COACHES" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group z-50" onClick={() => setOpen(false)}>
          <div className="relative w-9 h-9 shrink-0">
            <div className="absolute inset-0 rounded-full bg-accent pulse-glow" />
            <div className="absolute inset-0 rounded-full border-2 border-background"
                 style={{ background: "linear-gradient(90deg, transparent 49%, oklch(0.04 0 0) 49% 51%, transparent 51%)" }} />
          </div>
          <div className="font-display text-xl md:text-2xl tracking-widest leading-none">
            KNACK <span className="text-accent">TENNIS</span> ACADEMY
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-display tracking-widest text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-accent transition-colors relative"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="btn-hero hidden sm:inline-block !py-2 !px-5 !text-sm">JOIN ACADEMY</Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 font-display tracking-[0.2em] text-2xl">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={l.to}
                    className="hover:text-accent transition-colors"
                    activeProps={{ className: "text-accent" }}
                    activeOptions={{ exact: true }}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-4"
              >
                <Link 
                  to="/contact" 
                  className="btn-hero !py-3 !px-8 !text-lg"
                  onClick={() => setOpen(false)}
                >
                  JOIN ACADEMY
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
