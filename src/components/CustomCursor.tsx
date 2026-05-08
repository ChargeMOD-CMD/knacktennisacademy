import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [hovering, setHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      document.body.style.cursor = "auto";
      return;
    }
    
    setIsVisible(true);
    let x = 0, y = 0, cx = 0, cy = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("button, a, [data-cursor-hover]"));
    };

    const tick = () => {
      cx += (x - cx) * 0.25;
      cy += (y - cy) * 0.25;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      }
      if (Math.abs(x - cx) > 2 || Math.abs(y - cy) > 2) {
        idRef.current += 1;
        const id = idRef.current;
        setTrails((prev) => [...prev.slice(-10), { x: cx, y: cy, id }]);
        setTimeout(() => setTrails((p) => p.filter((t) => t.id !== id)), 500);
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={cursorRef} className={`knack-cursor ${hovering ? "hover" : ""}`} />
      {trails.map((t, i) => (
        <div
          key={t.id}
          className="knack-trail"
          style={{
            left: t.x, top: t.y,
            opacity: (i / trails.length) * 0.6,
            transform: `translate(-50%, -50%) scale(${(i / trails.length) * 1.2})`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        />
      ))}
    </>
  );
}
