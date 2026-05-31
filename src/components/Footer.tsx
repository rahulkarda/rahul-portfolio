export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs uppercase tracking-widest opacity-40">
        <span>© {new Date().getFullYear()} Rahul Karda</span>
        <span>
          Built with Next.js &amp; Tailwind
        </span>
        <a
          href="https://github.com/rahulkarda/rahul-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
        >
          View Source →
        </a>
      </div>
    </footer>
  );
}
