import { useEffect, useRef, useState } from "react";

export default function Counter({ value, suffix = "" }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          animate();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function animate() {
    const numericStr = value.replace(/[^0-9.]/g, "");
    const target = parseFloat(numericStr) || 0;
    const prefix = value.match(/^[^0-9]*/)?.[0] || "";
    const isDecimal = numericStr.includes(".");
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      if (isDecimal) {
        setDisplay(prefix + current.toFixed(1) + suffix);
      } else {
        setDisplay(
          prefix + Math.round(current).toLocaleString() + suffix,
        );
      }

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  return <span ref={ref}>{display}</span>;
}
