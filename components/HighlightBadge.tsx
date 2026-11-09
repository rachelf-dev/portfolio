type HighlightBadgeProps = {
  label: string;
};

type HighlightBannerProps = {
  label: string;
  detail?: string;
};

export function HighlightBadge({ label }: HighlightBadgeProps) {
  return (
    <span className="inline-flex max-w-full items-center gap-1.5 rounded-md bg-violet-strong px-2.5 py-1.5 font-mono text-sm font-semibold text-white shadow-[0_2px_10px_rgb(0_0_0/0.45)]">
      <TrophyIcon className="size-4" />
      {label}
    </span>
  );
}

export function HighlightBanner({ label, detail }: HighlightBannerProps) {
  return (
    <div className="flex w-full min-w-0 flex-col items-start gap-3 rounded-2xl border border-violet bg-violet/10 p-4 sm:flex-row sm:gap-4 sm:p-5">
      <TrophyIcon className="size-9 shrink-0 text-violet-light sm:size-10" />
      <div className="min-w-0">
        <p className="font-mono text-lg font-semibold text-violet-light">{label}</p>
        {detail ? <p className="mt-1 text-pretty text-body-md text-text">{detail}</p> : null}
      </div>
    </div>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 6H5.5A2.5 2.5 0 0 0 3 8.5 4.5 4.5 0 0 0 7.5 13M17 6h1.5A2.5 2.5 0 0 1 21 8.5 4.5 4.5 0 0 1 16.5 13"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
