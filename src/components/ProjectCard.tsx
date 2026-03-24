import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden">
      <div className="relative aspect-video bg-charcoal/5">
        <Image
          src={project.screenshot}
          alt={`Screenshot of ${project.name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-mono text-xl font-semibold text-dark-text">
          {project.name}
        </h3>
        <p className="mt-2 font-sans text-sm text-dark-text/70 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs bg-charcoal/5 text-dark-text/80 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-mono text-sm text-clay hover:text-clay/80 transition-colors"
        >
          &gt; open project
        </a>
      </div>
    </article>
  );
}
