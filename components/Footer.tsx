import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-4">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-center font-mono text-label-code-sm text-muted">
          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
          <span>
            © {year} {profile.name}
          </span>
        </p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-1.5 font-mono text-label-code-sm text-muted motion-safe:transition-colors motion-safe:duration-200 hover:text-accent"
        >
          <ArrowUpIcon />
          Back to top
        </a>
      </div>
    </footer>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4" fill="none">
      <path
        d="M12 19V5m0 0l-6 6m6-6l6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
