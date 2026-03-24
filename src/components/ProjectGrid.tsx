import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  const liveProjects = projects.filter((p) => !p.comingSoon);
  const comingSoonProjects = projects.filter((p) => p.comingSoon);

  return (
    <section id="projects" className="bg-warm-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-text/10 bg-dark-text/[0.03] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-terminal-green" />
            <span className="font-mono text-xs text-dark-text/50 uppercase tracking-wider">
              Live
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-dark-text">
            Projects
          </h2>
          <p className="mt-3 font-sans text-sm text-dark-text/40 max-w-md mx-auto">
            Web applications built from scratch using AI-assisted development
          </p>
        </div>

        {/* Live projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {liveProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>

        {/* Coming soon section */}
        {comingSoonProjects.length > 0 && (
          <>
            <div className="text-center mt-24 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-text/10 bg-dark-text/[0.03] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-clay" />
                <span className="font-mono text-xs text-dark-text/50 uppercase tracking-wider">
                  In Progress
                </span>
              </div>
              <h2 className="font-mono text-3xl md:text-4xl font-bold text-dark-text">
                Coming Soon
              </h2>
              <p className="mt-3 font-sans text-sm text-dark-text/40 max-w-md mx-auto">
                Projects currently under development
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {comingSoonProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
