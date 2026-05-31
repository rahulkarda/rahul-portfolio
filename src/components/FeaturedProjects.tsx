import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { AnimateInView } from "./AnimateInView";

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-cyan mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Featured Projects
          </h2>
          <p className="text-text-secondary mt-3 max-w-xl text-base">
            Things I&apos;ve built and shipped — from production SaaS to open-source
            tools.
          </p>
        </AnimateInView>

        <AnimateInView stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
