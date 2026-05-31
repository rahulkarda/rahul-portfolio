import { AnimateInView } from "./AnimateInView";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/40">
      <div className="max-w-6xl mx-auto">
        <AnimateInView className="mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-lime mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Who I Am
          </h2>
        </AnimateInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo placeholder */}
          <AnimateInView>
            <div
              className="rounded-2xl border border-border overflow-hidden"
              style={{
                height: "320px",
                background:
                  "linear-gradient(135deg, #062233 0%, #1a0010 50%, #160a2a 100%)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, #00d9ff33, #ff006e33)",
                      border: "2px solid #333",
                    }}
                  />
                  <p className="text-text-secondary text-sm">Rahul Karda</p>
                  <p className="text-text-secondary/60 text-xs mt-1">
                    Bhopal, India
                  </p>
                </div>
              </div>
            </div>
          </AnimateInView>

          {/* Bio */}
          <AnimateInView delay={0.1}>
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed text-base">
                I&apos;m a machine learning engineer and full-stack developer based
                in Bhopal, India. Currently at{" "}
                <span className="text-text-primary font-medium">SAP Labs</span>{" "}
                working on AI/ML systems, and recently completed my{" "}
                <span className="text-text-primary font-medium">
                  M.Tech in Computer Science from BITS Pilani
                </span>
                .
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                I love building things that sit at the intersection of AI and
                software engineering — production ML pipelines, LLM-powered
                SaaS, open-source developer tools. I&apos;m particularly interested
                in making AI systems more reliable, debuggable, and useful in
                the real world.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  { label: "SAP Labs", accent: "#00d9ff" },
                  { label: "BITS Pilani M.Tech", accent: "#ff006e" },
                  { label: "Open to freelance", accent: "#39ff14" },
                ].map(({ label, accent }) => (
                  <span
                    key={label}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      borderColor: `${accent}44`,
                      color: accent,
                      background: `${accent}10`,
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com/rahulkarda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent-cyan transition-colors border-b border-transparent hover:border-accent-cyan/40 pb-0.5"
                >
                  GitHub →
                </a>
                <a
                  href="https://linkedin.com/in/rahul-karda-314768179"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-accent-magenta transition-colors border-b border-transparent hover:border-accent-magenta/40 pb-0.5"
                >
                  LinkedIn →
                </a>
                <a
                  href="mailto:rahulkarda2002@gmail.com"
                  className="text-sm text-text-secondary hover:text-accent-purple transition-colors border-b border-transparent hover:border-accent-purple/40 pb-0.5"
                >
                  Email →
                </a>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
