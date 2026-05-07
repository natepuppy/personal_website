import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import GlowCard from "../components/GlowCard";

const papers = [
  {
    number: "01",
    title: "Benchmarking Uplift Models Under Realistic Confounding: A Controlled Study in Ad Incrementality Estimation",
    abstract:
      "Standard uplift models waste 86–92% of their ad budget on users who would have converted anyway. This paper runs a controlled benchmark across five model families, three data-generating processes, and varying confounding strengths to show that the problem is not model choice — it's the fundamental difficulty of identifying rare responsive users from noisy binary data.",
    tags: ["Causal Inference", "Uplift Modeling", "Ad Incrementality", "CATE Estimation"],
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6643279",
    github: "https://github.com/natepuppy/ads-uplift-benchmark",
    status: "live",
  },
  {
    number: "02",
    title: "Can We Fix Wasted Ad Spend by Re-ranking Users? Sure-Thing Penalized Uplift: A Study of What Works and What Doesn't",
    abstract:
      "Tests a natural fix for budget waste: lower the score of users who already have a high chance of buying without an ad. Two variants were evaluated — Additive STPU and Multiplicative STPU — across 567 experiments. Neither works consistently. Additive STPU fails due to a scale mismatch; multiplicative STPU is a coin flip. The binding constraint is signal-to-noise, not algorithm design.",
    tags: ["Sure-Thing Penalized Uplift", "Budget Waste", "CATE", "Null Result"],
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6730960",
    github: "https://github.com/natepuppy/sure-thing-penalized-uplift",
    status: "coming-soon",
  },
  {
    number: "03",
    title: "When Should You Stop Showing Someone an Ad? Neural SDE Fatigue Modeling for Multi-Channel Ad Campaigns",
    abstract:
      "Ad fatigue causes campaigns to keep running long after they've stopped working. This paper builds a Neural SDE to model per-user fatigue state trajectories and benchmarks it against six heuristic baselines in a simulation with known ground truth. Simple models (Linear, ExpSDE) match or beat the Neural SDE on attribution and fatigue detection. The Neural SDE uniquely saves 57% of impressions — useful when impression costs are high — but does not improve conversion efficiency.",
    tags: ["Ad Fatigue", "Neural SDE", "Multi-Touch Attribution", "Policy Evaluation"],
    ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6731578",
    github: "https://github.com/natepuppy/neural-sde-ad-fatigue",
    status: "coming-soon",
  },
];

export default function Research() {
  return (
    <PageTransition>
      <section className="pt-28 pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up mb-14">
            <p className="text-accent-light text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Independent Research
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              <span className="gradient-text">Research</span>
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl">
              A three-paper series on why causal ad-tech models fail in practice
              — and what it actually takes to fix them.
            </p>
            <div className="mt-6">
              <a
                href="https://scholar.google.com/citations?hl=en&authuser=1&user=yIN3Kp8AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent-light hover:text-white border border-accent/40 hover:border-white/30 rounded-full px-4 py-2 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 100 14 7 7 0 000-14zm0 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
                Google Scholar
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {papers.map((paper, i) => (
              <motion.div
                key={paper.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlowCard className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    {/* Paper number */}
                    <div className="shrink-0">
                      <span className="text-4xl font-black text-white/10 leading-none select-none">
                        {paper.number}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Status badge */}
                      <div className="flex items-center gap-3 mb-3">
                        {paper.status === "live" ? (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live on SSRN
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-neutral-500 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                            Coming Soon
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-base sm:text-lg font-bold text-white leading-snug mb-3">
                        {paper.title}
                      </h2>

                      {/* Abstract */}
                      <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        {paper.abstract}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {paper.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-medium text-neutral-500 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={paper.ssrn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-xs font-semibold rounded-full px-4 py-2 transition-all ${
                            paper.status === "live"
                              ? "bg-white text-black hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                              : "border border-white/10 text-neutral-500 cursor-not-allowed pointer-events-none"
                          }`}
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          {paper.status === "live" ? "Read on SSRN" : "SSRN (soon)"}
                        </a>
                        <a
                          href={paper.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-4 py-2 transition-all"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Series note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-xs text-neutral-600 text-center leading-relaxed"
          >
            All papers are independent research. Code for all three series is open-source and fully reproducible.
          </motion.p>
        </div>
      </section>
    </PageTransition>
  );
}
