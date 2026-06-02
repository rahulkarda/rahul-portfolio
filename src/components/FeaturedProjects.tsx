import { featuredProjects } from "@/data/projects";
import { accentMap } from "@/data/projects";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function FeaturedProjects() {
  return (
    <div id="work">
      {/* Sticky section label */}
      <div className="py-10 flex flex-col items-center justify-center text-center px-16 sticky top-0 z-10 bg-[var(--bg)]">
        <p className="text-sm uppercase tracking-widest opacity-40 mb-2">
          (three projects I&apos;m proud of)
        </p>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          Featured Work
        </h2>
      </div>

      {/* Inverted panel */}
      <div className="mx-4 mb-4 p-6 md:p-12 bg-[var(--panel-bg)] text-[var(--panel-text)]">
        <span className="font-bold text-lg opacity-60">
          Selected projects:
        </span>
        <h2
          className="font-display font-bold uppercase leading-none mt-2 mb-16"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          Things I&apos;ve built
          <br />
          and shipped.
        </h2>

        <div className="flex flex-col gap-16">
          {featuredProjects.map((project, i) => {
            const accent = accentMap[project.accent];
            return (
              <div
                key={project.id}
                className="lg:flex gap-16 justify-center items-start"
              >
                {/* Text — left column */}
                <div className="max-w-[480px] lg:max-w-[400px] mb-12 lg:mb-0">
                  <p
                    className="text-xs uppercase font-bold tracking-widest mb-2"
                    style={{ color: accent.hex }}
                  >
                    0{i + 1} — {project.tags[0]}
                  </p>
                  <h3
                    className="font-display font-extrabold uppercase text-2xl md:text-4xl mb-6 leading-tight"
                  >
                    {project.title}
                  </h3>
                  <p className="opacity-70 leading-relaxed mb-8 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-wide px-3 py-1 border border-[var(--panel-text)]/20 opacity-70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm uppercase font-bold tracking-widest px-5 py-2.5 border-2 hover:opacity-70 transition-opacity"
                        style={{ borderColor: accent.hex, color: accent.hex }}
                      >
                        Live Demo <ExternalLink size={13} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm uppercase font-bold tracking-widest px-5 py-2.5 border-2 border-[var(--panel-text)]/30 text-[var(--panel-text)]/60 hover:border-[var(--panel-text)] hover:text-[var(--panel-text)] transition-all"
                      >
                        <GithubIcon size={14} /> Source
                      </a>
                    )}
                  </div>
                </div>

                {/* Thumbnail — right column, sticky */}
                <div className="lg:sticky lg:top-16 max-w-[500px] w-full">
                  <div
                    className="w-full aspect-video rounded-sm overflow-hidden"
                    style={{ background: project.gradient }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{
                        background: `radial-gradient(ellipse at 40% 50%, ${accent.hex}22 0%, transparent 70%)`,
                      }}
                    >
                      <span
                        className="font-display font-black uppercase text-4xl md:text-6xl opacity-10 tracking-tighter"
                      >
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
