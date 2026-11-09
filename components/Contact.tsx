import { EmailButton } from "@/components/EmailButton";
import { profile } from "@/data/profile";

export function Contact() {
  const githubLabel = formatGithubLabel(profile.githubUrl);

  return (
    <section aria-labelledby="contact" className="bg-bg-deep py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-card px-5 py-8 shadow-[0_0_50px_color-mix(in_srgb,var(--color-accent)_8%,transparent)] sm:px-8 sm:py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -left-24 size-80 rounded-full bg-accent/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-violet/20 blur-3xl"
          />

          <div className="relative flex flex-col items-center text-center">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-label-code-sm text-accent">
              <span className="text-xs">03 //</span>
              <span className="font-semibold tracking-wide">INITIATE CONTACT</span>
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            </p>
            <h2
              id="contact"
              tabIndex={-1}
              className="scroll-mt-28 text-headline-lg-mobile tracking-tight text-text lg:text-headline-lg"
            >
              Let&apos;s work together
            </h2>

            <EmailButton
              email={profile.email}
              showAddress
              className="mt-8 flex min-h-11 w-full max-w-lg items-center gap-3 rounded-2xl border border-border-strong bg-surface px-3 py-3 text-left font-mono text-brand-mono text-text motion-safe:transition motion-safe:duration-200 hover:border-accent"
            />

            <ul className="mt-6 grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              <li>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col items-center rounded-xl border border-border-strong bg-surface p-4 text-center motion-safe:transition motion-safe:duration-200 hover:border-accent/50"
                >
                  <span className="mb-2 flex size-9 items-center justify-center rounded-lg border border-border-strong bg-card text-muted motion-safe:transition motion-safe:duration-200 group-hover:border-accent/40 group-hover:text-accent">
                    <GithubIcon />
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-label-code font-semibold text-text group-hover:text-accent">
                    GitHub
                    <ExternalIcon />
                  </span>
                  <span className="mt-1 font-mono text-body-md break-all text-muted">{githubLabel}</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.resumePath}
                  download={profile.resumeDownloadName}
                  className="group flex h-full flex-col items-center rounded-xl border border-border-strong bg-surface p-4 text-center motion-safe:transition motion-safe:duration-200 hover:border-accent/50"
                >
                  <span className="mb-2 flex size-9 items-center justify-center rounded-lg border border-border-strong bg-card text-muted motion-safe:transition motion-safe:duration-200 group-hover:border-accent/40 group-hover:text-accent">
                    <DownloadIcon />
                  </span>
                  <span className="font-mono text-label-code font-semibold text-text group-hover:text-accent">
                    Download Resume
                  </span>
                  <span className="mt-1 font-mono text-body-md text-muted">PDF</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatGithubLabel(url: string): string {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname.replace(/\/$/, "");
    return `${parsed.hostname}${path}`;
  } catch {
    return "GitHub";
  }
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.7 7.7 0 0 1 8 4.77c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 text-faint group-hover:text-accent" fill="none">
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
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="none">
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
