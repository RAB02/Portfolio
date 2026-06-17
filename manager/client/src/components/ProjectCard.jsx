export default function ProjectCard({
  title,
  description,
  github_url,
}) {
  return (
    <div className="h-full rounded-xl  p-6 shadow-md hover:shadow-lg transition flex flex-col">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      <ul className="list-disc pl-5 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="pt-2 mt-auto flex justify-center">
        <a
          href={github_url}
          className="rounded-full bg-white px-3 py-1 text-sm text-black"
        >
          Project Link
        </a>
      </div>
    </div>
  );
}