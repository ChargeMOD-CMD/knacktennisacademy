export function Footer() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Academy" },
    { to: "/programs", label: "Programs" },
    { to: "/coaches", label: "Coaches" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-3xl tracking-widest mb-4 leading-tight">
            KNACK <span className="text-accent">TENNIS</span> ACADEMY
          </div>
          <p className="text-muted-foreground text-sm">Precision. Power. Performance.</p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest text-muted-foreground mb-4 uppercase">Navigation</h4>
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.to} href={l.to} className="text-sm text-muted-foreground hover:text-accent transition-colors w-fit">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="text-xs tracking-widest text-muted-foreground mb-4 uppercase">Contact</h4>
          <p className="text-sm">+91 9791108070</p>
          <p className="text-sm">info@knacktennisacademy.com</p>
          <p className="text-sm mt-4 text-muted-foreground uppercase text-[10px] tracking-widest">Chennai · Tamil Nadu</p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest text-muted-foreground mb-4 uppercase">Hours</h4>
          <p className="text-sm">Weekdays · 5AM – 9PM</p>
          <p className="text-sm">Weekends · 6AM – 8PM</p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-[10px] text-muted-foreground tracking-[0.2em]">
        © {new Date().getFullYear()} KNACK TENNIS ACADEMY · ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
