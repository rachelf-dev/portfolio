type TechTagProps = {
  label: string;
  /** First tag on a card uses accent styling, matching the design reference. */
  emphasized?: boolean;
};

export function TechTag({ label, emphasized = false }: TechTagProps) {
  return (
    <span
      className={
        emphasized
          ? "rounded border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-label-code-sm text-accent"
          : "rounded border border-border bg-surface px-2.5 py-1 font-mono text-label-code-sm text-muted"
      }
    >
      {label}
    </span>
  );
}
