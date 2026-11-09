type ProjectActionsProps = {
  liveUrl?: string;
  githubUrl?: string;
};

const primaryButtonClass =
  "inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-4 font-mono text-label-code font-semibold text-accent-foreground shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] motion-safe:transition motion-safe:duration-200 hover:shadow-[0_0_28px_color-mix(in_srgb,var(--color-accent)_50%,transparent)] motion-safe:hover:-translate-y-px sm:w-auto";

const secondaryButtonClass =
  "group inline-flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-border-strong bg-transparent px-4 font-mono text-label-code text-text motion-safe:transition motion-safe:duration-200 hover:border-accent hover:text-accent sm:w-auto";

export function ProjectActions({ liveUrl, githubUrl }: ProjectActionsProps) {
  if (!liveUrl && !githubUrl) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {liveUrl ? (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>
          Live Demo
          <span className="sr-only"> (opens in a new tab)</span>
          <ExternalIcon />
        </a>
      ) : null}
      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryButtonClass}
        >
          <GithubIcon />
          View Code
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5" fill="none">
      <path
        d="M7 17L17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4 text-accent">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}
