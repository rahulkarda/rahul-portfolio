import { gridProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { AnimateInView } from "./AnimateInView";

export default function ProjectGrid() {
  return (
    <section className="pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="mb-10">
          <h2 className="text-xl font-semibold text-text-primary">
            More Projects
          </h2>
        </AnimateInView>

        <AnimateInView
          stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
