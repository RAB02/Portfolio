export default function SkillCard({ title, skills }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
      <h3 className="text-xl font-semibold text-white mb-4">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
