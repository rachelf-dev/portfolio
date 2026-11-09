import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { profile } from "@/data/profile";

type TopBarProps = {
  name: string;
  resumePath: string;
  backHref?: string;
};

const secondaryButtonClass =
  "inline-flex h-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border-strong bg-transparent px-3 font-mono text-label-code text-text motion-safe:transition motion-safe:duration-200 hover:border-accent hover:text-accent";

const primaryButtonClass =
  "inline-flex h-11 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-accent px-3 font-mono text-label-code font-semibold text-accent-foreground shadow-[0_0_16px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] motion-safe:transition motion-safe:duration-200 hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-accent)_45%,transparent)] motion-safe:hover:-translate-y-px";

export function TopBar({ name, resumePath, backHref }: TopBarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <p title={name} className="min-w-0 truncate font-mono text-brand-mono text-text">
          {name}
        </p>
        {backHref ? (
          <Link href={backHref} className={secondaryButtonClass}>
            Back to projects
          </Link>
        ) : (
          <div className="flex shrink-0 items-center gap-2">
            <a href={resumePath} download={profile.resumeDownloadName} className={secondaryButtonClass}>
              Resume
              <span className="sr-only"> (PDF)</span>
            </a>
            <ContactButton className={primaryButtonClass} />
          </div>
        )}
      </div>
    </header>
  );
}
