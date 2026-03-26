import { useRef } from "react";

export default function GlowCard({ children, className = "" }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--mouse-x", x + "%");
    ref.current.style.setProperty("--mouse-y", y + "%");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`glow-card rounded-2xl bg-white/5 border border-white/10 ${className}`}
    >
      {children}
    </div>
  );
}
