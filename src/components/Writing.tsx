import { writingPosts } from "@/data/skills";
import { accentMap } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export default function Writing() {
  return (
    <div id="writing">
      {/* Sticky label */}
      <div className="min-h-[25vh] flex flex-col items-center justify-center text-center px-4 sticky top-[12.5%] z-10 bg-[var(--bg)]">
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

      {/* Light panel */}
      <div className="mx-4 mb-4 p-6 md:p-12 border border-[var(--border)]">
        <span className="font-bold text-lg opacity-40">Recent writing:</span>
        <h2
          className="font-display font-bold uppercase leading-none mt-2 mb-16"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          Thoughts on building
          <br />
          AI &amp; shipping products.
        </h2>

        <div className="flex flex-col gap-0 border-t border-[var(--border)]">
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

        <div className="mt-10">
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
    </div>
  );
}
