import { skills, coreRoles, techStack } from "@/data/skills";
import { accentMap } from "@/data/projects";

export default function Skills() {
  return (
    <div id="skills">
      {/* Sticky label */}
      <div className="min-h-[25vh] flex flex-col items-center justify-center text-center px-4 sticky top-[12.5%] z-10 bg-[var(--bg)]">
        <p className="text-sm uppercase tracking-widest opacity-40 mb-2">
          (what I actually know)
        </p>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          Skills &amp; Stack
        </h2>
      </div>

      {/* Inverted panel */}
      <div className="mx-4 mb-4 p-6 md:p-12 bg-[var(--panel-bg)] text-[var(--panel-text)]">
        <span className="font-bold text-lg opacity-60">I work with:</span>
        <h2
          className="font-display font-bold uppercase leading-none mt-2 mb-16"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          ML engineering,
          <br />
          full-stack dev,
          <br />
          and AI systems.
        </h2>

        <div className="lg:flex gap-16 justify-center">
          {/* Left: roles + skills */}
          <div className="max-w-[480px] lg:max-w-[400px] mb-12 lg:mb-0">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest opacity-40 mb-4">
                Core roles
              </p>
              <div className="flex flex-col gap-1">
                {coreRoles.map((role, i) => {
                  const colors = ["var(--accent)", "var(--accent-2)", "var(--accent-3)", "var(--panel-text)"];
                  return (
                    <span
                      key={role}
                      className="font-display font-black uppercase text-2xl md:text-3xl leading-tight"
                      style={{ color: colors[i % colors.length] }}
                    >
                      {role}
                    </span>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest opacity-40 mb-4">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs uppercase tracking-wide px-3 py-1 border border-[var(--panel-text)]/20 opacity-70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: skill pills by category */}
          <div className="lg:sticky lg:top-16 max-w-[500px] w-full">
            {(["ML / AI", "Full-Stack", "Infra / Tools"] as const).map((category, ci) => {
              const categorySkills = skills.filter((_, i) => {
                if (category === "ML / AI") return i < 8;
                if (category === "Full-Stack") return i >= 8 && i < 17;
                return i >= 17;
              });
              return (
                <div key={category} className="mb-8">
                  <p className="text-xs uppercase tracking-widest opacity-40 mb-3">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => {
                      const accent = accentMap[skill.accent];
                      return (
                        <span
                          key={skill.name}
                          className="text-sm px-3 py-1.5 border font-medium"
                          style={{
                            borderColor: `${accent.hex}55`,
                            color: accent.hex,
                          }}
                        >
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
