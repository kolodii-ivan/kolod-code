import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        project.comingSoon
          ? "opacity-75"
          : "transition-transform duration-200 hover:-translate-y-1"
      }`}
    >
      <div className="relative aspect-video bg-charcoal/5">
        <Image
          src={project.screenshot}
          alt={`Screenshot of ${project.name}`}
          fill
          className={`object-cover ${project.comingSoon ? "opacity-80" : ""}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <h3 className="font-mono text-xl font-semibold text-dark-text">
            {project.name}
          </h3>
          {project.comingSoon && (
            <span className="font-mono text-xs bg-clay/15 text-clay px-2 py-0.5 rounded">
              Coming Soon
            </span>
          )}
        </div>
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
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block font-mono text-sm text-clay hover:text-clay/80 transition-colors"
          >
            &gt; open project
          </a>
        ) : (
          <span className="mt-4 inline-block font-mono text-sm text-dark-text/30">
            &gt; coming soon
          </span>
        )}
      </div>
    </article>
  );
}
