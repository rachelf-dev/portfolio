import { EmailButton } from "@/components/EmailButton";

type HeroProps = {
  name: string;
  role: string;
  tagline: string;
  email: string;
  githubUrl: string;
  resumePath: string;
};

const secondaryButtonClass =
  "group inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border border-border-strong bg-card px-3.5 font-mono text-label-code text-text motion-safe:transition motion-safe:duration-200 hover:border-accent hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-accent)_18%,transparent)]";

const primaryButtonClass =
  "inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-3.5 font-mono text-label-code font-semibold text-accent-foreground shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] motion-safe:transition motion-safe:duration-200 hover:shadow-[0_0_28px_color-mix(in_srgb,var(--color-accent)_50%,transparent)] motion-safe:hover:-translate-y-px";

export function Hero({ name, role, tagline, email, githubUrl, resumePath }: HeroProps) {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-border">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.16] [mask-image:radial-gradient(ellipse_at_center,black_42%,transparent_78%)]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-accent) 1px, transparent 1.6px), linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-6 left-1/4 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-12 right-0 h-72 w-[28rem] translate-x-1/4 rounded-full bg-violet/15 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-4 pt-14 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="flex max-w-4xl flex-col">
          <h1
            id="hero-heading"
            className="text-display-mobile text-text lg:text-display"
          >
            {name}
          </h1>
          <p className="mt-3 text-headline-sm font-semibold lg:text-headline-lg">
            <span className="bg-gradient-to-r from-accent via-accent to-violet bg-clip-text text-transparent">
              {role}
            </span>
            <span
              aria-hidden="true"
              className="ms-2 hidden font-mono text-lg font-normal whitespace-nowrap text-accent sm:inline-block lg:text-xl"
            >
              {"</>"}
            </span>
          </p>
          <p className="mt-6 max-w-3xl text-pretty text-body-md text-muted lg:text-body-lg">
            {tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButtonClass}
            >
              <GithubIcon />
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
              <ExternalIcon />
            </a>
            <EmailButton email={email} className={primaryButtonClass} />
            <a href={resumePath} download className={secondaryButtonClass}>
              <DownloadIcon />
              Download Resume
              <span className="sr-only"> (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
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

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-3.5 text-faint motion-safe:transition-colors motion-safe:duration-200 group-hover:text-accent"
      fill="none"
    >
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

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 text-faint group-hover:text-accent" fill="none">
      <path
        d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
