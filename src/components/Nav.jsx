import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="text-sm font-bold tracking-tight text-white hover:text-neutral-300 transition-colors"
        >
          Nathan Clark
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-xs font-medium transition-colors ${
                  pathname === to
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-5 h-4 flex flex-col justify-between"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="px-6 sm:px-10 pb-6 space-y-4">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  pathname === to
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
