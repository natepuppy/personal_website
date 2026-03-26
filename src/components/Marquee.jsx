const items = [
  "React", "Ruby on Rails", "Python", "PostgreSQL", "AWS", "Docker",
  "TypeScript", "Snowflake", "PyTorch", "Terraform", "BigQuery", "GCP",
  "Angular", "Vue.js", "Django", "Machine Learning", "CI/CD", "Git",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-10 border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
      <div className="flex animate-marquee w-max gap-8">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-medium text-neutral-500 whitespace-nowrap px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
