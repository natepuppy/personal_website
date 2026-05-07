import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import GlowCard from "../components/GlowCard";
import profileImg from "../assets/profile.png";

export default function About() {
  return (
    <PageTransition>
      <section className="pt-28 pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-2 animate-fade-in flex justify-center">
            <div className="relative" style={{ animation: "float 6s ease-in-out infinite" }}>
              <div className="absolute -inset-3 bg-gradient-to-br from-accent/20 via-purple-500/10 to-transparent rounded-2xl blur-xl" />
              <img
                src={profileImg}
                alt="Nathan Clark"
                className="relative w-48 sm:w-56 lg:w-64 rounded-2xl ring-1 ring-white/10"
              />
            </div>
          </div>

          <div className="md:col-span-3 animate-slide-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="space-y-4 text-neutral-300 text-[15px] sm:text-base leading-relaxed">
              <p>
                I'm a software engineer and engineering leader based in the San
                Francisco Bay Area. I build systems that scale, lead teams that
                ship, and use data to drive real business outcomes.
              </p>
              <p>
                Before my career in tech, I spent two years living in the
                Philippines on a humanitarian mission, where I became fluent in
                Tagalog. That experience shaped how I communicate, lead, and
                approach unfamiliar problems.
              </p>
              <p>
                My career has spanned machine learning research, full-stack
                engineering, backend data systems, and senior technical
                ownership — giving me a rare combination of deep technical
                ability and cross-functional impact.
              </p>
              <p>
                I'm driven by the belief that great engineering isn't just about
                writing code — it's about solving the right problems, making
                smart trade-offs, and building things that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold mb-8"
          >
            Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlowCard className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Brigham Young University
                  </h3>
                  <p className="text-accent-light text-sm font-medium mt-1">
                    B.S. Computer Science — Emphasis in Machine Learning
                  </p>
                </div>
                <p className="text-sm text-neutral-500 whitespace-nowrap">
                  Aug 2016 – Aug 2021 &middot; Provo, UT
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent-light text-xs font-medium">
                  Summa Cum Laude
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent-light text-xs font-medium">
                  3.97 GPA
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent-light text-xs font-medium">
                  ML Research
                </span>
              </div>
            </GlowCard>

            <GlowCard className="p-6 sm:p-8 mt-5">
              <h3 className="text-lg font-bold text-white mb-2">
                Pre-College
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent-light text-xs font-medium">
                  4.0 GPA — Middle School
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent-light text-xs font-medium">
                  4.0 GPA — High School
                </span>
                <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent-light text-xs font-medium">
                  Math Student of the Year
                </span>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold mb-8"
          >
            What Drives Me
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Impact Over Output",
                text: "I measure success by business outcomes, not lines of code. Whether it's $34M in new revenue or a 94% cost reduction, I'm always looking for the highest-leverage opportunity.",
              },
              {
                icon: "🤝",
                title: "People First",
                text: "Great products come from great teams. I invest in mentorship, clear communication, and building environments where engineers do their best work.",
              },
              {
                icon: "📈",
                title: "Continuous Growth",
                text: "From door-to-door sales to ML research to published independent research papers — I'm always learning, always pushing into new territory, always getting better.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlowCard className="p-6 h-full">
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
