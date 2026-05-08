export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-3xl tracking-widest mb-4 leading-tight">
            KNACK <span className="text-accent">TENNIS</span> ACADEMY
          </div>
          <p className="text-muted-foreground text-sm">Precision. Power. Performance.</p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest text-muted-foreground mb-4">CONTACT</h4>
          <p className="text-sm">+91 9791108070</p>
          <p className="text-sm">info@knacktennisacademy.com</p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest text-muted-foreground mb-4">LOCATION</h4>
          <p className="text-sm">Chennai, Tamil Nadu</p>
          <p className="text-sm">India</p>
        </div>
        <div>
          <h4 className="text-xs tracking-widest text-muted-foreground mb-4">HOURS</h4>
          <p className="text-sm">Weekdays · 5AM – 9PM</p>
          <p className="text-sm">Weekends · 6AM – 8PM</p>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground tracking-widest">
        © {new Date().getFullYear()} KNACK TENNIS ACADEMY · ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
