export default function ProjectCard({
  title,
  description,
  github_url,
  Web_link,
}) {
  return (
    <div className="h-full rounded-xl  p-6 shadow-md hover:shadow-lg transition flex flex-col">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>

      <ul className="list-disc pl-5 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="pt-4 mt-auto flex justify-center gap-4">
       {github_url && (
          <a
            href={github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-3 py-1 text-sm text-blue-600 hover:bg-blue-500/10 transition"
          >
            Project Link
          </a>
        )}

        {Web_link && (
          <a
            href={Web_link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-3 py-1 text-sm text-green-600 hover:bg-green-500/10 transition"
          >
            Website Link
          </a>
        )}
      </div>
    </div>
  );
}