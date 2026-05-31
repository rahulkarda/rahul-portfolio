export default function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary">
        <span>Rahul Karda &copy; {new Date().getFullYear()}</span>
        <span>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors"
          >
            Next.js
          </a>{" "}
          &amp;{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-cyan transition-colors"
          >
            Tailwind
          </a>
        </span>
        <a
          href="https://github.com/rahulkarda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent-cyan transition-colors"
        >
          @rahulkarda
        </a>
      </div>
    </footer>
  );
}
