export default function About() {
  return (
    <div id="about">
      {/* Sticky label */}
      <div className="min-h-[25vh] flex flex-col items-center justify-center text-center px-4 sticky top-[12.5%] z-10 bg-[var(--bg)]">
        <p className="text-sm uppercase tracking-widest opacity-40 mb-2">
          (the human behind the code)
        </p>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          My name is Rahul!
        </h2>
      </div>

      {/* Inverted panel */}
      <div className="mx-4 mb-4 p-6 md:p-12 bg-[var(--panel-bg)] text-[var(--panel-text)]">
        <span className="font-bold text-lg opacity-60">In case you&apos;re new here:</span>
        <h2
          className="font-display font-bold uppercase leading-none mt-2 mb-16"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          ML engineer
          <br />
          at SAP Labs.
          <br />
          <span style={{ color: "var(--accent)" }}>M.Tech BITS Pilani.</span>
        </h2>

        <div className="lg:flex gap-16 justify-center">
          {/* Left: bio text */}
          <div className="max-w-[480px] lg:max-w-[400px] mb-12 lg:mb-0">
            <p className="mb-6 leading-relaxed opacity-80">
              <span className="font-display font-black uppercase">I&apos;m Rahul:</span>{" "}
              an ML engineer based in Bangalore, India. I build things at the
              intersection of machine learning and software — production pipelines,
              LLM-powered products, and open-source developer tools.
            </p>
            <p className="mb-6 leading-relaxed opacity-80">
              Currently at <span className="font-semibold opacity-100">SAP Labs</span>.
              Previously a full-stack developer, which means I can take an idea
              from model training all the way to a deployed product.
            </p>
            <p className="mb-6 leading-relaxed opacity-80">
              M.Tech in Software Engineering from{" "}
              <span className="font-semibold opacity-100">BITS Pilani</span> —
              which gave me the theory to understand why things work and the
              stubbornness to make them work in production.
            </p>
            <p className="mb-8 leading-relaxed opacity-80">
              Outside of work: chess, badminton, reading, investing, and automating
              anything that can be automated.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { label: "GitHub", href: "https://github.com/rahulkarda" },
                { label: "LinkedIn", href: "https://linkedin.com/in/rahul-karda-314768179" },
                { label: "Twitter / X", href: "https://twitter.com/rahulkarda2002" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase font-bold tracking-widest px-4 py-2 border-2 border-[var(--panel-text)]/30 text-[var(--panel-text)]/60 hover:border-[var(--panel-text)] hover:text-[var(--panel-text)] transition-all duration-200"
                >
                  {label} →
                </a>
              ))}
            </div>
          </div>

          {/* Right: stats/facts */}
          <div className="lg:sticky lg:top-16 max-w-[400px] w-full">
            <div className="border border-[var(--panel-text)]/20">
              {[
                { label: "Current role", value: "ML Engineer, SAP Labs" },
                { label: "Previously", value: "Full-Stack Developer" },
                { label: "Education", value: "M.Tech SE, BITS Pilani" },
                { label: "Location", value: "Bangalore, India" },
                { label: "Interests", value: "Chess · Badminton · Investing · Reading · Automation" },
                { label: "Status", value: "Open to freelance" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-start px-5 py-4 border-b border-[var(--panel-text)]/10 last:border-b-0"
                >
                  <span className="text-xs uppercase tracking-widest opacity-40 flex-shrink-0 mr-4">
                    {label}
                  </span>
                  <span className="text-sm font-medium text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
