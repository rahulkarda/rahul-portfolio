/**
 * Build-time fetch of GitHub contribution data.
 *
 * GitHub's official GraphQL API requires a token, which we'd rather not bake
 * into a public static-export build. The public profile page exposes the same
 * data as embedded SVG/HTML at https://github.com/users/{user}/contributions,
 * so we scrape that and parse out the per-day counts.
 *
 * If the fetch fails (offline build, GitHub layout change), we fall back to a
 * deterministic synthetic grid so the section still renders gracefully.
 */

export interface ContributionDay {
  date: string; // YYYY-MM-DD
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface ContributionData {
  total: number;
  weeks: ContributionDay[][]; // 53 weeks × 7 days
  isStub: boolean;
}

const USERNAME = "rahulkarda";

function levelFromCount(c: number): 0 | 1 | 2 | 3 | 4 {
  if (c <= 0) return 0;
  if (c < 3) return 1;
  if (c < 6) return 2;
  if (c < 10) return 3;
  return 4;
}

function syntheticGrid(): ContributionData {
  // Deterministic pseudo-random pattern keyed on day-of-year so the fallback
  // doesn't look like a flat empty grid. Seeds Linear-Congruential.
  const weeks: ContributionDay[][] = [];
  const today = new Date("2026-06-08T00:00:00Z");
  const start = new Date(today);
  start.setUTCDate(today.getUTCDate() - 52 * 7);

  let total = 0;
  let seed = 1337;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };

  for (let w = 0; w < 53; w++) {
    const week: ContributionDay[] = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(start);
      date.setUTCDate(start.getUTCDate() + w * 7 + d);
      // Skew toward weekdays.
      const weekday = date.getUTCDay();
      const base = weekday === 0 || weekday === 6 ? 0.3 : 0.7;
      const r = rand();
      const count = r > 1 - base ? Math.floor(rand() * 8) : 0;
      total += count;
      week.push({
        date: date.toISOString().slice(0, 10),
        count,
        level: levelFromCount(count),
      });
    }
    weeks.push(week);
  }

  return { weeks, total, isStub: true };
}

/**
 * Parse the public profile HTML. The contribution cells live in
 * <td data-date="YYYY-MM-DD" data-level="0..4" class="ContributionCalendar-day">
 * and the total is in an <h2> like "1,234 contributions in the last year".
 */
function parseContributionHtml(html: string): ContributionData | null {
  // Pull every cell in document order. Tolerant of attribute reordering.
  const cellRegex =
    /<td[^>]*class="[^"]*ContributionCalendar-day[^"]*"[^>]*>/g;
  const cells = html.match(cellRegex);
  if (!cells || cells.length < 50) return null;

  const days: ContributionDay[] = [];
  for (const cell of cells) {
    const date = /data-date="([^"]+)"/.exec(cell)?.[1];
    const levelStr = /data-level="([0-4])"/.exec(cell)?.[1];
    if (!date || !levelStr) continue;
    const level = Number(levelStr) as 0 | 1 | 2 | 3 | 4;
    // GitHub stopped emitting raw counts in HTML for unauthenticated views;
    // approximate from level so the "total" is at least reasonable.
    const approxCount = [0, 1, 4, 7, 12][level];
    days.push({ date, count: approxCount, level });
  }
  if (days.length === 0) return null;

  // Group into weeks of 7. GitHub's grid starts on Sunday, so the first day's
  // weekday tells us how to pad.
  const firstWeekday = new Date(days[0].date).getUTCDay();
  const padded: (ContributionDay | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...days,
  ];
  const weeks: ContributionDay[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7).map(
      (d, j) =>
        d ?? {
          date: "",
          count: 0,
          level: 0 as const,
        }
    );
    while (week.length < 7) {
      week.push({ date: "", count: 0, level: 0 });
    }
    weeks.push(week);
  }

  const total = days.reduce((s, d) => s + d.count, 0);
  return { weeks, total, isStub: false };
}

export async function fetchContributions(): Promise<ContributionData> {
  try {
    const res = await fetch(
      `https://github.com/users/${USERNAME}/contributions`,
      {
        // Static export — fetch only runs at build time.
        cache: "force-cache",
        headers: { "User-Agent": "rahul-portfolio-build" },
      }
    );
    if (!res.ok) return syntheticGrid();
    const html = await res.text();
    return parseContributionHtml(html) ?? syntheticGrid();
  } catch {
    return syntheticGrid();
  }
}
