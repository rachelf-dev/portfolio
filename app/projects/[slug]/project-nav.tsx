import Link from "next/link";

type ProjectLinkData = {
  slug: string;
  title: string;
};

type ProjectNavProps = {
  previous?: ProjectLinkData;
  next?: ProjectLinkData;
};

export function ProjectNav({ previous, next }: ProjectNavProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav aria-label="Other projects" className="flex items-center gap-3">
      {previous ? (
        <Link
          href={`/projects/${previous.slug}`}
          className="inline-flex h-11 min-w-0 max-w-[48%] items-center gap-1.5 rounded-lg border border-border-strong bg-card px-2.5 font-mono text-label-code-sm text-muted motion-safe:transition motion-safe:duration-200 hover:border-accent hover:text-accent sm:px-3.5"
        >
          <ChevronIcon direction="left" />
          <span className="flex min-w-0 flex-col items-start leading-tight">
            <span>Previous</span>
            <span className="w-full truncate text-text">{previous.title}</span>
          </span>
        </Link>
      ) : null}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="ms-auto inline-flex h-11 min-w-0 max-w-[48%] items-center gap-1.5 rounded-lg border border-border-strong bg-card px-2.5 font-mono text-label-code-sm text-muted motion-safe:transition motion-safe:duration-200 hover:border-accent hover:text-accent sm:px-3.5"
        >
          <span className="flex min-w-0 flex-col items-end text-end leading-tight">
            <span>Next</span>
            <span className="w-full truncate text-text">{next.title}</span>
          </span>
          <ChevronIcon direction="right" />
        </Link>
      ) : null}
    </nav>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0" fill="none">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
