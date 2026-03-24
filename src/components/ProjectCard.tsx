import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article
      className={`group bg-white rounded-2xl border border-dark-text/5 overflow-hidden ${
        project.comingSoon
          ? "opacity-70"
          : "transition-transform duration-200 hover:-translate-y-1"
      }`}
    >
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-video bg-charcoal/5 block cursor-pointer overflow-hidden"
        >
          <Image
            src={project.screenshot}
            alt={`Screenshot of ${project.name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </a>
      ) : (
        <div className="relative aspect-video bg-charcoal/5">
          <Image
            src={project.screenshot}
            alt={`Screenshot of ${project.name}`}
            fill
            className={`object-cover ${project.comingSoon ? "opacity-90" : ""}`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <h3 className="font-mono text-lg font-semibold text-dark-text">
            {project.name}
          </h3>
          {project.comingSoon && (
            <span className="font-mono text-[10px] bg-clay/10 text-clay px-2 py-0.5 rounded-full uppercase tracking-wider">
              Soon
            </span>
          )}
        </div>
        <p className="mt-2 font-sans text-sm text-dark-text/60 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] bg-charcoal/[0.04] text-dark-text/60 px-2.5 py-1 rounded-full"
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
            className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-clay hover:text-clay/70 transition-colors cursor-pointer"
          >
            <span>View project</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        ) : (
          <span className="mt-5 inline-block font-mono text-xs text-dark-text/25">
            In development
          </span>
        )}
      </div>
    </article>
  );
}
