const AWARDS = [
  {
    title: "SAP AI Security Champion",
    year: "2026",
    org: "SAP",
  },
  {
    title: "SAP Security Champion",
    year: "2025",
    org: "SAP",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="px-6 md:px-12 py-20 max-w-5xl mx-auto">
      <p className="text-sm uppercase tracking-widest opacity-40 mb-2">Recognition</p>
      <h2
        className="font-display font-bold uppercase leading-none mb-12"
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
      >
        Awards
      </h2>

      <div className="divide-y divide-[var(--fg)]/10 border-t border-[var(--fg)]/10">
        {AWARDS.map(({ title, year, org }) => (
          <div
            key={`${title}-${year}`}
            className="flex items-center justify-between py-6 gap-4"
          >
            <div>
              <p className="font-semibold text-lg leading-tight">{title}</p>
              <p className="text-sm opacity-50 mt-1">{org}</p>
            </div>
            <span className="text-sm uppercase tracking-widest opacity-40 flex-shrink-0">
              {year}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
