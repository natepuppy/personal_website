import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import GlowCard from "../components/GlowCard";
import Spotlight from "../components/Spotlight";

const journey = [
  {
    phase: "As a Teen",
    icon: "📚",
    milestones: [
      "4.0 student through middle school",
      "4.0 student through high school",
      "Math Student of the Year for my graduating class",
    ],
  },
  {
    phase: "As a Young Adult",
    icon: "🌏",
    milestones: [
      "Learned fluent Tagalog (Filipino)",
      "Served a two-year mission trip in the Philippines",
      "Graduated Summa Cum Laude from BYU with a 3.97 GPA",
      "Built software to bypass bot detection on all major social media platforms",
    ],
  },
  {
    phase: "Career",
    icon: "🚀",
    milestones: [
      "Architected a feature that increased YOY revenue by $34 million at a large tech company",
      "Directed all software engineering at a company with 1,000+ employees",
      "Reduced an app's development costs from $840K/year to $50K — a 94% reduction",
      "Promoted from Lead Engineer to Manager to Director in a single year",
      "Architected multiple new enterprise applications end-to-end",
      "Completely overhauled all the software at the company",
    ],
  },
];

const traits = [
  {
    title: "Work Ethic",
    icon: "⚡",
    items: [
      "Extremely high work intensity",
      "Show up every day and give it 100%",
      "Enjoy working and solving hard problems",
    ],
  },
  {
    title: "Reliability",
    icon: "🔒",
    items: [
      "Trustworthy and extremely honest",
      "I do what I say I'm going to do",
      "Require minimal management",
    ],
  },
  {
    title: "Capability",
    icon: "🧠",
    items: [
      "Extremely strong fundamentals",
      "Own large projects end-to-end",
      "Thrive on ambiguous problems",
      "I just figure things out",
    ],
  },
  {
    title: "Character",
    icon: "💎",
    items: [
      "Grit, drive, and talent",
      "Kind person who can make hard decisions",
      "Succeeded in every opportunity I've been given",
    ],
  },
];

export default function WhyMe() {
  return (
    <PageTransition>
      {/* Hero */}
      <Spotlight className="pt-28 pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Why <span className="gradient-text">Me</span>
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            A lifetime of showing up, figuring it out, and delivering results.
            Here's my track record — and what you can expect when we work
            together.
          </p>
        </div>
      </Spotlight>

      {/* Journey Timeline */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold mb-10"
          >
            The Journey
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {journey.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <GlowCard className="p-6 h-full">
                  <span className="text-3xl mb-3 block">{phase.icon}</span>
                  <h3 className="text-lg font-bold text-white mb-4">
                    {phase.phase}
                  </h3>
                  <ul className="space-y-3">
                    {phase.milestones.map((m, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-neutral-300 text-sm leading-relaxed"
                      >
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            What You Get
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-base sm:text-lg mb-10 max-w-2xl"
          >
            Skills can be taught. These can't.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {traits.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlowCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{group.icon}</span>
                    <h3 className="text-base font-bold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-neutral-300 text-sm leading-relaxed"
                      >
                        <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Convinced?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-base sm:text-lg mb-8"
          >
            I'd love to bring this same energy to your team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-white text-black text-sm font-semibold rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
            >
              Get in Touch
            </Link>
            <Link
              to="/experience"
              className="inline-flex items-center justify-center px-7 py-3 border border-neutral-600 text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:border-neutral-400 transition-all"
            >
              See My Experience
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
