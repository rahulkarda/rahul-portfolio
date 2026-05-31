import { gridProjects, accentMap } from "@/data/projects";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function ProjectGrid() {
  return (
    <div>
      {/* Sticky section label */}
      <div className="min-h-[25vh] flex flex-col items-center justify-center text-center px-4 sticky top-[12.5%]">
        <p className="text-sm uppercase tracking-widest opacity-40 mb-2">
          (and plenty more)
        </p>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          More Projects
        </h2>
      </div>

      {/* Light panel — no color inversion, grid layout */}
      <div className="mx-4 mb-4 p-6 md:p-12 border border-[var(--border)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)]">
          {gridProjects.map((project) => {
            const accent = accentMap[project.accent];
            return (
              <div
                key={project.id}
                className="bg-[var(--bg)] p-6 group flex flex-col"
              >
                {/* Color strip */}
                <div
                  className="w-8 h-1 mb-4"
                  style={{ background: accent.hex }}
                />
                <p
                  className="text-xs uppercase tracking-widest font-bold mb-2"
                  style={{ color: accent.hex }}
                >
                  {project.tags[0]}
                </p>
                <h3 className="font-display font-extrabold text-lg uppercase leading-tight mb-3">
                  {project.title}
                </h3>
                <p className="text-sm opacity-60 leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold opacity-50 hover:opacity-100 transition-opacity border-b border-current pb-0.5"
                    >
                      <GithubIcon size={12} /> Code
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold border-b pb-0.5 transition-opacity"
                      style={{
                        color: accent.hex,
                        borderColor: `${accent.hex}66`,
                      }}
                    >
                      Live <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
