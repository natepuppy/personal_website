import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Spotlight from "../components/Spotlight";

const categories = [
  {
    title: "Languages",
    skills: ["Ruby", "Python", "JavaScript", "SQL", "PHP", "C#"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Ruby on Rails", "React", "React Native", "Angular", "Vue.js",
      "Django", ".NET Core",
    ],
  },
  {
    title: "Data & ML",
    skills: [
      "PyTorch", "Machine Learning", "BigQuery", "Snowflake",
      "ETL Pipelines", "Apache Airflow", "Data Analysis", "PostgreSQL", "MySQL",
    ],
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      "AWS", "GCP", "AWS SQS", "Terraform", "Docker", "CI/CD",
      "Microservices Architecture", "Git", "GitHub",
    ],
  },
  {
    title: "Leadership & Process",
    skills: [
      "Team Leadership", "Agile", "Kanban",
      "Cross-Functional Collaboration", "Technical Strategy", "Mentorship",
    ],
  },
  {
    title: "Other",
    skills: ["Bilingual (Tagalog)", "Public Speaking", "Technical Writing", "System Design"],
  },
];

export default function Skills() {
  return (
    <PageTransition>
      <section className="pt-28 pb-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="animate-slide-up mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
              <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl">
              A broad and deep technical toolkit built across research,
              engineering, and leadership roles.
            </p>
          </div>

          <div className="space-y-10">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h2 className="text-base font-bold text-white mb-3">
                  {cat.title}
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-200 font-medium transition-all duration-300 hover:bg-accent/10 hover:border-accent/30 hover:text-accent-light hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Spotlight className="py-20 px-6 sm:px-10 lg:px-20 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold mb-5"
          >
            My Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-base sm:text-lg leading-relaxed"
          >
            I believe in choosing the right tool for the job — not chasing
            trends. Whether it's a Rails monolith, a serverless function, or a
            distributed microservice, the best architecture is the one that
            solves the problem simply, scales when it needs to, and can be
            maintained by the team that owns it.
          </motion.p>
        </div>
      </Spotlight>
    </PageTransition>
  );
}
