import PageTransition from "../components/PageTransition";
import GlowCard from "../components/GlowCard";
import Spotlight from "../components/Spotlight";

const contactLinks = [
  {
    label: "Email",
    value: "nathan.clark.dev@gmail.com",
    href: "mailto:nathan.clark.dev@gmail.com",
    icon: "✉️",
  },
  {
    label: "Phone",
    value: "(480) 416-8952",
    href: "tel:+14804168952",
    icon: "📱",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nathan-clark-dev",
    href: "https://www.linkedin.com/in/nathan-clark-dev/",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "github.com/natepuppy",
    href: "https://github.com/natepuppy",
    icon: "🐙",
  },
];

export default function Contact() {
  return (
    <PageTransition>
      <Spotlight className="pt-28 pb-20 px-6 sm:px-10 lg:px-20 min-h-dvh flex items-center">
        <div className="max-w-4xl mx-auto w-full animate-slide-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg mb-12 max-w-xl">
            Whether you have a project in mind, a role to discuss, or just want
            to say hello — I'd love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <GlowCard className="p-6 sm:p-8 h-full cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-lg">{link.icon}</span>
                    <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider">
                      {link.label}
                    </p>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-white">
                    {link.value}
                  </p>
                </GlowCard>
              </a>
            ))}
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 via-purple-500/5 to-transparent relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.15), transparent 60%)",
              }}
            />
            <div className="relative">
              <p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1.5">
                Based in
              </p>
              <p className="text-xl sm:text-2xl font-bold text-white">
                San Francisco, Bay Area
              </p>
              <p className="text-neutral-400 text-sm mt-2">
                Open to remote and hybrid opportunities.
              </p>
            </div>
          </div>
        </div>
      </Spotlight>
    </PageTransition>
  );
}
