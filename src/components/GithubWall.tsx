import { fetchContributions } from "@/lib/github";

const LEVEL_COLORS = [
  "var(--border)", // 0 — empty cell tint
  "color-mix(in srgb, var(--accent) 25%, transparent)",
  "color-mix(in srgb, var(--accent) 50%, transparent)",
  "color-mix(in srgb, var(--accent) 75%, transparent)",
  "var(--accent)",
];

export default async function GithubWall() {
  const data = await fetchContributions();

  return (
    <div id="github-activity">
      {/* Sticky label */}
      <div className="py-10 flex flex-col items-center justify-center text-center px-16 sticky top-0 z-10 bg-[var(--bg)]">
        <p className="text-sm uppercase tracking-widest opacity-40 mb-2">
          (commits don&apos;t lie)
        </p>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          GitHub Activity
        </h2>
      </div>

      {/* Panel */}
      <div className="mb-4 p-6 md:p-12 bg-[var(--panel-bg)] text-[var(--panel-text)]">
        <div className="lg:flex gap-16 items-start">
          {/* Left: copy */}
          <div className="max-w-[400px] mb-10 lg:mb-0">
            <p
              className="text-xs uppercase font-bold tracking-widest mb-2"
              style={{ color: "var(--accent)" }}
            >
              Last 12 months
            </p>
            <h3 className="font-display font-extrabold uppercase text-2xl md:text-4xl mb-6 leading-tight">
              Roughly{" "}
              <span style={{ color: "var(--accent)" }}>
                {data.total.toLocaleString()}
              </span>{" "}
              contributions.
            </h3>
            <p className="opacity-70 leading-relaxed mb-6 text-sm md:text-base">
              Each square is a day. Brighter cyan means more public commits,
              issues, PRs, and reviews. {data.isStub
                ? "Live data unavailable for this build — showing a representative sample."
                : "Pulled from my public GitHub profile at build time."}
            </p>
            <a
              href="https://github.com/rahulkarda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm uppercase font-bold tracking-widest px-5 py-2.5 border-2 hover:opacity-70 transition-opacity"
              style={{
                borderColor: "var(--accent)",
                color: "var(--accent)",
              }}
            >
              View on GitHub →
            </a>
          </div>

          {/* Right: heatmap */}
          <div className="flex-1 min-w-0 overflow-x-auto">
            <div
              className="inline-grid grid-flow-col gap-[3px]"
              style={{
                gridTemplateRows: "repeat(7, 12px)",
              }}
              role="img"
              aria-label={`${data.total} GitHub contributions in the last year`}
            >
              {data.weeks.flatMap((week, wi) =>
                week.map((day, di) => (
                  <div
                    key={`${wi}-${di}`}
                    title={
                      day.date
                        ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                        : ""
                    }
                    className="w-[12px] h-[12px] rounded-[2px]"
                    style={{ background: LEVEL_COLORS[day.level] }}
                  />
                ))
              )}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-2 mt-4 text-xs uppercase tracking-widest opacity-50">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div
                  key={l}
                  className="w-[12px] h-[12px] rounded-[2px]"
                  style={{ background: LEVEL_COLORS[l] }}
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
