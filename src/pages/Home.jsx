import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Spotlight from "../components/Spotlight";
import Counter from "../components/Counter";
import Marquee from "../components/Marquee";
import profileImg from "../assets/profile.png";

const highlights = [
  { value: "5", suffix: "+", label: "Years of Experience" },
  { value: "$34", suffix: "M", label: "Revenue Generated" },
  { value: "94", suffix: "%", label: "Cost Reduction" },
  { value: "1000", suffix: "+", label: "Team Size Led" },
];

export default function Home() {
  return (
    <PageTransition>
      <Spotlight className="min-h-dvh flex items-center px-6 sm:px-10 lg:px-20 pt-24 pb-16 overflow-hidden">
        {/* Aurora blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              top: "10%",
              left: "50%",
              animation: "aurora 12s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-10"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
              bottom: "20%",
              right: "10%",
              animation: "aurora 15s ease-in-out infinite reverse",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="md:col-span-3 order-2 md:order-1 animate-slide-up">
            <p className="text-accent-light text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              Software Engineer
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
              <span className="gradient-text">Nathan</span>
              <br />
              <span className="gradient-text">Clark</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-lg mb-10">
              Director of Engineering building scalable systems and leading
              high-impact teams. Passionate about turning data into products
              that drive real business value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/experience"
                className="group relative inline-flex items-center justify-center px-7 py-3 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                <span className="relative z-10">View Experience</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 border border-neutral-600 text-white text-sm font-semibold rounded-full hover:bg-white/10 hover:border-neutral-400 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative" style={{ animation: "float 6s ease-in-out infinite" }}>
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-purple-500/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src={profileImg}
                alt="Nathan Clark"
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-3xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </Spotlight>

      {/* Stats with animated counters */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {highlights.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-1">
                <Counter value={value} suffix={suffix} />
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech marquee */}
      <Marquee />

      {/* Intro */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
          >
            Engineering Leader. Problem Solver. Builder.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-10"
          >
            From machine learning research at BYU to directing engineering at one
            of the largest solar companies in the U.S., I bring a blend of deep
            technical skill and strategic leadership. I thrive at the
            intersection of data, engineering, and business impact.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/about"
              className="text-accent-light font-semibold hover:underline"
            >
              Learn more about me &rarr;
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
