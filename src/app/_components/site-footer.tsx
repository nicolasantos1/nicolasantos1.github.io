export function SiteFooter() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© 2026 Nicolas Santos. Construído com Next.js.</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/nicolasantos1"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-teal-200"
          >
            GitHub
          </a>
          <a href="mailto:nicolasantos011@gmail.com" className="transition hover:text-teal-200">
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
}
