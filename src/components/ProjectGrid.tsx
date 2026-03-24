import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section id="projects" className="bg-warm-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-dark-text mb-12 text-center">
          <span className="text-clay">&gt; </span>Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
