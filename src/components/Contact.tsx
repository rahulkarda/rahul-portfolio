"use client";

export default function Contact() {
  return (
    <div id="contact">
      {/* Sticky label */}
      <div
        className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 sticky top-[12.5%]"
      >
        <p className="text-sm uppercase tracking-widest opacity-40 mb-2">
          (that&apos;s it, you&apos;ve scrolled enough)
        </p>
        <h2
          className="font-display font-bold leading-tight"
          style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}
        >
          Let&apos;s build
          <br />
          something.
        </h2>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-8 text-sm">
          <span className="opacity-50">
            <span className="font-bold">Email: </span>
            <a
              href="mailto:rahulkarda2002@gmail.com"
              className="hover:opacity-100 transition-opacity underline underline-offset-2"
            >
              rahulkarda2002@gmail.com
            </a>
          </span>
          <span className="opacity-50">
            <span className="font-bold">GitHub: </span>
            <a
              href="https://github.com/rahulkarda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline underline-offset-2"
            >
              rahulkarda
            </a>
          </span>
          <span className="opacity-50">
            <span className="font-bold">LinkedIn: </span>
            <a
              href="https://linkedin.com/in/rahul-karda-314768179"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline underline-offset-2"
            >
              rahul-karda
            </a>
          </span>
        </div>
        <div className="mt-8 mb-12">
          <a
            href="mailto:rahulkarda2002@gmail.com"
            className="inline-block text-sm uppercase font-bold tracking-widest px-8 py-4 border-2 border-[var(--text)] text-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-200"
          >
            Get In Touch →
          </a>
        </div>
      </div>
    </div>
  );
}
