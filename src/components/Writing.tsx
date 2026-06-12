import { writingPosts } from "@/data/skills";
import { accentMap } from "@/data/projects";
import { ExternalLink } from "lucide-react";

interface RssPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string;
}

async function fetchLatestPosts(): Promise<RssPost[]> {
  try {
    const res = await fetch(
      "https://rahulkarda.github.io/the-daily-wick/rss.xml",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const xml = await res.text();

    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];
    return items.slice(0, 6).map((item) => {
      const get = (tag: string) =>
        item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\/${tag}>`))?.[1] ??
        item.match(new RegExp(`<${tag}[^>]*>([^<]*)<\/${tag}>`))?.[1] ??
        "";
      return {
        title: get("title"),
        link: get("link").trim() || get("guid").trim(),
        description: get("description"),
        pubDate: get("pubDate"),
        category: item.match(/<category>([^<]*)<\/category>/)?.[1] ?? "",
      };
    });
  } catch {
    return [];
  }
}

export default async function Writing() {
  const rssPosts = await fetchLatestPosts();

  const featuredHrefs = new Set(writingPosts.map((p) => p.href));
  const livePosts = rssPosts
    .filter((p) => !featuredHrefs.has(p.link))
    .slice(0, 3);

  const accentCycle = ["cyan", "magenta", "purple", "lime"] as const;

  return (
    <div id="writing">
      {/* Sticky label */}
      <div className="py-10 flex flex-col items-center justify-center text-center px-16 sticky top-0 z-10 bg-[var(--bg)]">
        <p className="text-sm uppercase tracking-widest opacity-40 mb-2">
          (I also write things)
        </p>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
        >
          From the Blog
        </h2>
      </div>

      <div className="mb-4 p-6 md:p-12 border border-[var(--border)]">
        <span className="font-bold text-lg opacity-40">Recent writing:</span>
        <h2
          className="font-display font-bold uppercase leading-none mt-2 mb-16"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          Thoughts on building
          <br />
          AI &amp; shipping products.
        </h2>

        {/* Featured posts */}
        <p className="text-xs uppercase tracking-widest opacity-40 mb-4 font-bold">
          ★ Featured
        </p>
        <div className="flex flex-col gap-0 border-t border-[var(--border)] mb-12">
          {writingPosts.map((post) => {
            const accent = accentMap[post.accent];
            return (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col sm:flex-row sm:items-start gap-4 py-8 border-b border-[var(--border)] hover:bg-[var(--text)]/[0.03] transition-colors px-2 -mx-2"
              >
                <div className="flex-1">
                  <p
                    className="text-xs uppercase font-bold tracking-widest mb-2"
                    style={{ color: accent.hex }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                    })}
                  </p>
                  <h3 className="font-display font-extrabold text-xl md:text-2xl uppercase leading-tight mb-2 group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h3>
                  <p className="text-sm opacity-50 leading-relaxed max-w-lg">
                    {post.excerpt}
                  </p>
                </div>
                <div
                  className="flex items-center gap-1.5 text-sm uppercase font-bold tracking-widest mt-2 sm:mt-1 flex-shrink-0"
                  style={{ color: accent.hex }}
                >
                  Read <ExternalLink size={13} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Live RSS posts */}
        {livePosts.length > 0 && (
          <>
            <p className="text-xs uppercase tracking-widest opacity-40 mb-4 font-bold">
              Latest from the Wick
            </p>
            <div className="flex flex-col gap-0 border-t border-[var(--border)] mb-10">
              {livePosts.map((post, i) => {
                const accent = accentMap[accentCycle[i % accentCycle.length]];
                const date = new Date(post.pubDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });
                return (
                  <a
                    key={post.link}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col sm:flex-row sm:items-start gap-4 py-6 border-b border-[var(--border)] hover:bg-[var(--text)]/[0.03] transition-colors px-2 -mx-2"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p
                          className="text-xs uppercase font-bold tracking-widest"
                          style={{ color: accent.hex }}
                        >
                          {date}
                        </p>
                        {post.category && (
                          <span className="text-xs uppercase tracking-widest opacity-30 font-medium">
                            {post.category}
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-lg md:text-xl uppercase leading-tight mb-1.5 group-hover:opacity-70 transition-opacity">
                        {post.title}
                      </h3>
                      <p className="text-sm opacity-50 leading-relaxed max-w-lg">
                        {post.description}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-sm uppercase font-bold tracking-widest mt-2 sm:mt-1 flex-shrink-0"
                      style={{ color: accent.hex }}
                    >
                      Read <ExternalLink size={13} />
                    </div>
                  </a>
                );
              })}
            </div>
          </>
        )}

        <a
          href="https://rahulkarda.github.io/the-daily-wick/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm uppercase font-bold tracking-widest px-6 py-3 border-2 border-[var(--text)] text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-200"
        >
          View The Archive →
        </a>
      </div>
    </div>
  );
}
